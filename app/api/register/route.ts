import { type NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      firstName,
      email,
      instagram,
      gender,
      hasGuest,
      guestName,
      guestInstagram,
      selectedEvents,
    } = body;

    // Validation des champs obligatoires
    if (
      !firstName ||
      !email ||
      !instagram ||
      !gender ||
      !selectedEvents?.length
    ) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis" },
        { status: 400 }
      );
    }

    // Validation email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Format d'email invalide" },
        { status: 400 }
      );
    }

    // Vérifier si l'email existe déjà
    const { data: existingParticipant, error: checkError } =
      await supabaseServer
        .from("participants")
        .select("id")
        .eq("email", email)
        .single();

    if (checkError && checkError.code !== "PGRST116") {
      console.error("Erreur lors de la vérification email:", checkError);
      return NextResponse.json(
        { error: "Erreur lors de la vérification" },
        { status: 500 }
      );
    }

    if (existingParticipant) {
      return NextResponse.json(
        { error: "Cet email est déjà inscrit" },
        { status: 409 }
      );
    }

    // Créer le participant
    const { data: participant, error: participantError } = await supabaseServer
      .from("participants")
      .insert({
        name: firstName,
        email: email,
        instagram: instagram.startsWith("@") ? instagram : `@${instagram}`,
        gender: gender,
      })
      .select()
      .single();

    if (participantError) {
      console.error("Erreur création participant:", participantError);
      return NextResponse.json(
        { error: "Erreur lors de la création du participant" },
        { status: 500 }
      );
    }

    const participantId = participant.id;

    // Créer l'invité si présent
    if (hasGuest && guestName) {
      const { error: guestError } = await supabaseServer.from("guests").insert({
        participant_id: participantId,
        guest_name: guestName,
        guest_instagram: guestInstagram
          ? guestInstagram.startsWith("@")
            ? guestInstagram
            : `@${guestInstagram}`
          : null,
      });

      if (guestError) {
        console.error("Erreur création invité:", guestError);
        // On continue même si l'invité n'est pas créé
      }
    }

    // Mapping des événements (vous devrez ajuster selon vos IDs réels)
    const eventMapping: { [key: string]: number } = {
      ob: 1,
      driko: 2,
      fahim: 3,
    };

    // Créer les relations participant-événements
    const participantEvents = selectedEvents
      .map((eventKey: string) => ({
        participant_id: participantId,
        event_id: eventMapping[eventKey],
      }))
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .filter((pe: any) => pe.event_id); // Filtrer les événements invalides

    if (participantEvents.length > 0) {
      const { error: eventsError } = await supabaseServer
        .from("participant_events")
        .insert(participantEvents);

      if (eventsError) {
        console.error("Erreur création relations événements:", eventsError);
        return NextResponse.json(
          { error: "Erreur lors de l'inscription aux événements" },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Inscription réussie !",
        participantId: participantId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erreur API register:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
