"use client"
export const dynamic = "force-dynamic";
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"

export default function ConfirmationPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [showAnimation, setShowAnimation] = useState(false)

  const searchParams = useSearchParams()
  const userInstagram = searchParams.get("instagram") || "@NAME"

  useEffect(() => {
    // Animation d'entrée pour chaque étape
    setShowAnimation(false)
    const timer = setTimeout(() => setShowAnimation(true), 100)
    return () => clearTimeout(timer)
  }, [currentStep])

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    } else {
      // Rediriger vers Instagram
      window.open("https://www.instagram.com/tomanhouse_/", "_blank")
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="flex flex-col items-center justify-center min-h-[70vh] px-6">
            {/* Logo WARMUP */}
            <div
              className={`mb-12 transition-all duration-700 ${showAnimation ? "scale-100 opacity-100" : "scale-75 opacity-0"
                }`}
            >
              <div className="relative flex flex-col items-center">
                <Image
                  src="/COVER.png"
                  alt="WARMUP COVER"
                  width={230}
                  height={230}
                  className="rounded-3xl w-56 h-56 object-cover"
                  priority
                />
              </div>
            </div>

            {/* Contenu */}
            <div
              className={`text-center space-y-6 transition-all duration-700 delay-300 ${showAnimation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              <h1 className="text-2xl font-bold text-white">{"C'est carré, t'es bien inscrit·e"}</h1>

              <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                {`${userInstagram}, t'es dans la sélection WARMUP. Maintenant, on laisse le bot faire sa magie... bonne chance`}
              </p>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="flex flex-col items-center justify-center min-h-[70vh] px-6">
            {/* Cœur */}
            <div
              className={`mb-12 transition-all duration-700 ${showAnimation ? "scale-100 opacity-100" : "scale-75 opacity-0"
                }`}
            >
              <div className="relative flex flex-col items-center">
                <Image
                  src="/coeur.png"
                  alt="Cœur"
                  width={192}
                  height={192}
                  className="w-56 h-56 object-contain"
                  priority
                />
              </div>
            </div>

            {/* Contenu */}
            <div
              className={`text-center space-y-6 transition-all duration-700 delay-300 ${showAnimation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              <h1 className="text-2xl font-bold text-white">{"Si t'es sélectionné·e..."}</h1>

              <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                {
                  "Tu recevras un DM sur Instagram avec tous les détails, y compris l'adresse secrète du lieu. Check bien tes messages, ça peut tomber à tout moment"
                }
              </p>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="flex flex-col items-center justify-center min-h-[70vh] px-6">
            {/* Étoile */}
            <div
              className={`mb-12 transition-all duration-700 ${showAnimation ? "scale-100 opacity-100" : "scale-75 opacity-0"
                }`}
            >
              <div className="relative flex flex-col items-center">
                <Image
                  src="/etoile.png"
                  alt="Étoile"
                  width={192}
                  height={192}
                  className="w-56 h-56 object-contain"
                  priority
                />
              </div>
            </div>

            {/* Contenu */}
            <div
              className={`text-center space-y-6 transition-all duration-700 delay-300 ${showAnimation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              <h1 className="text-2xl font-bold text-white">Fais-toi remarquer</h1>

              <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                {`${userInstagram}, commente notre post Insta et partage-le en story pour doubler tes chances d'être sélectionné·e. Tu sais ce qu'il te reste à faire.`}
              </p>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 pt-12">
        <div className="h-8">
          <Image
            src="/logo-toman-text.png"
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

      {/* Contenu principal */}
      {renderStep()}

      {/* Bouton d'action */}
      <div className="fixed bottom-8 left-4 right-4">
        <Button
          onClick={handleNext}
          className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 text-lg transition-all duration-700 delay-500 ${showAnimation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          {currentStep === 3 ? (
            <>
              <Instagram className="mr-2" size={20} />
              instagram
            </>
          ) : (
            "Continuer"
          )}
        </Button>
      </div>

      {/* Indicateurs de progression */}
      <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${step === currentStep ? "bg-blue-600" : "bg-gray-600"
              }`}
          />
        ))}
      </div>
    </div>
  )
}
