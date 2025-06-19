"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Instagram, MapPin, Clock } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function TomanWaitlist() {
  const [isMobile, setIsMobile] = useState(false)
  const [selectedGender, setSelectedGender] = useState("")
  const [selectedDates, setSelectedDates] = useState<string[]>([])

  const [formData, setFormData] = useState({
    firstName: "",
    guestName: "",
    email: "",
    followConfirm: false,
  })
  const [hasGuest, setHasGuest] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)

    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  const events = [
    { id: "ob", name: "Ob", date: "28 Juin", color: "bg-blue-600" },
    { id: "driko", name: "Driko", date: "12 Juillet", color: "bg-gray-600" },
    { id: "fahim", name: "Fahim", date: "19 Juillet", color: "bg-gray-600" },
  ]

  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ ...formData, gender: selectedGender, events: selectedDates })
    router.push("/confirmation")
  }

  // Desktop/Tablet version
  if (!isMobile) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center text-white"
        style={{ backgroundColor: "#10182b" }}
      >
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto px-8">
          <div className="mb-12">
            <Image
              src="/t-shirt-qrcode.png"
              alt="T-shirt Toman avec QR Code"
              width={600}
              height={461}
              className="max-w-full h-auto"
              priority
            />
          </div>
          <p className="text-2xl md:text-3xl font-light text-center tracking-wide">
            A collective built around @ music @ vibes @ fashion
          </p>
        </div>
      </div>
    )
  }

  // Mobile version (existing form)
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 pt-12">
        <div className="h-8">
          <Image
            src={"/logo-toman-text.png"}
            alt="TOMAN-logo-text"
            width={120}
            height={40}
            className="h-full w-auto object-contain"
            priority
          />
        </div>

        <a
          href="https://www.instagram.com/tomanhouse_/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Lien Instagram Toman"
        >
          <Instagram size={32} />
        </a>
      </header>

      {/* Event Poster */}
      <div className="px-4 mb-6">
        <Image
          src="/affiche-warmup-123.png"
          alt="WARMUP - Soirées Toman"
          width={400}
          height={500}
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Event Info */}
      <div className="px-4 mb-6">
        <h1 className="text-2xl font-bold mb-3">WARMUP 123</h1>

        <div className="flex items-center gap-4 mb-4 text-sm text-gray-300">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>Lieu secret</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>18H30 - 22H50</span>
          </div>
        </div>

        <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
          <p className="font-semibold text-white">À PROPOS</p>
          <p>
            {"Envie de faire la fête dans un loft sans exploser ton budget ? On t'a concocté une soirée comme tu les aimes : une ambiance chill et festive, de la bonne musique qui te fait bouger jusqu'au bout de la nuit."}
          </p>
          <p>
            {"Des boissons fraîches et des snacks à volonté pour garder la forme. Que tu viennes pour danser, discuter ou juste chiller avec tes potes, tu trouveras l'énergie qu'il te faut pour passer un vrai bon moment."}
          </p>
        </div>
      </div>

      {/* Registration Form */}
      <form onSubmit={handleSubmit} className="px-4 space-y-6">
        {/* Personal Info */}
        <div className="space-y-4">
          <div>
            <Label htmlFor="firstName" className="text-white font-medium">
              Ton prénom *
            </Label>
            <Input
              id="firstName"
              type="text"
              required
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              placeholder="Prénom"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-white font-medium">
              Ton e-mail *
            </Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              placeholder="ton@email.com"
            />
          </div>
        </div>

        {/* Gender Selection */}
        <div>
          <Label className="text-white font-medium mb-3 block">Genre *</Label>
          <div className="flex gap-3">
            {["Homme", "Femme", "Autre"].map((gender) => (
              <Button
                key={gender}
                type="button"
                variant={selectedGender === gender ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedGender(gender)}
                className={`flex-1 ${selectedGender === gender
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                  }`}
              >
                {gender}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <Label className="text-white font-medium mb-3 block">As-tu un invité ? *</Label>
          <div className="flex gap-3">
            {["Oui", "Non"].map((option) => (
              <Button
                key={option}
                type="button"
                variant={hasGuest === (option === "Oui") ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setHasGuest(option === "Oui")
                  if (option === "Non") {
                    setFormData({ ...formData, guestName: "" })
                  }
                }}
                className={`flex-1 ${hasGuest === (option === "Oui")
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                  }`}
              >
                {option}
              </Button>
            ))}
          </div>
        </div>

        {hasGuest && (
          <div>
            <Label htmlFor="guestName" className="text-white font-medium">
              Prénom de ton invité *
            </Label>
            <Input
              id="guestName"
              type="text"
              required={hasGuest}
              value={formData.guestName}
              onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
              className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              placeholder="Prénom"
            />
          </div>
        )}

        {/* Event Date Selection */}
        <div>
          <Label className="text-white font-medium mb-3 block">Choisis la date à laquelle tu souhaites venir *</Label>
          <div className="space-y-2">
            {events.map((event) => {
              const isSelected = selectedDates.includes(event.id)

              return (
                <Button
                  key={event.id}
                  type="button"
                  variant={isSelected ? "default" : "outline"}
                  onClick={() => {
                    setSelectedDates((prev) =>
                      isSelected ? prev.filter((id) => id !== event.id) : [...prev, event.id]
                    )
                  }}
                  className={`w-full justify-start ${isSelected
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                    }`}
                >
                  <span className="font-medium">{event.name}</span>
                  <span className="ml-auto">{event.date}</span>
                </Button>
              )
            })}

          </div>
        </div>



        {/* Instagram Follow Confirmation */}
        <div className="flex items-start space-x-3">
          <Checkbox
            id="followConfirm"
            checked={formData.followConfirm}
            onCheckedChange={(checked) => setFormData({ ...formData, followConfirm: checked as boolean })}
            className="mt-1 border-white/20 data-[state=checked]:bg-blue-600"
          />
          <Label htmlFor="followConfirm" className="text-sm text-gray-300 leading-relaxed">
            Je certifie être follow au Toman et mon invité aussi. Ou oui, on gratte chaque follow, tchip allez follow...
            follow sinon ton maudit pro max merci que du love à bientôt
          </Label>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 text-lg"
          disabled={
            !formData.firstName ||
            !formData.email ||
            !selectedGender ||
            selectedDates.length === 0 ||
            (hasGuest && !formData.guestName)
          }
        >
          Participer
        </Button>
      </form>

      <div className="h-8" />
    </div>
  )
}
