"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Instagram } from "lucide-react"
import Image from "next/image"

export default function ConfirmationPage() {
  const [showCheck, setShowCheck] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Animation sequence
    const timer1 = setTimeout(() => setShowCheck(true), 300)
    const timer2 = setTimeout(() => setShowContent(true), 800)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  /*const handleBackToForm = () => {
    window.location.reload()
  }*/

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

      {/* Confirmation Content */}
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
        {/* Animated Checkmark */}
        <div className="mb-4 mt-2">
          <div
            className={`w-16 h-16 rounded-full bg-green-500 flex items-center justify-center transition-all duration-500 ${showCheck ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
          >
            <Check
              size={48}
              className={`text-white transition-all duration-300 delay-200 ${showCheck ? "scale-100" : "scale-0"}`}
            />
          </div>
        </div>

        {/* Success Message */}
        <div
          className={`text-center space-y-6 transition-all duration-500 delay-300 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <h1 className="text-2xl font-bold text-white mb-4">Inscription confirmée ! 🎉</h1>

          <div className="space-y-4 text-gray-300 max-w-md">
            <p className="text-lg">{"Ton inscription au WARMUP 123 a bien été prise en compte !"}</p>

            <p className="text-sm leading-relaxed">
              {
                "Si nous confirmons ton inscription, tu recevras un e-mail avec tous les détails de l'événement, y compris l'adresse secrète du lieu."
              }
            </p>

            <p className="text-sm leading-relaxed">
              {"PS:   Reposter notre post Instagram en nous mentionnant te place en liste prioritaire (pour augmenter tes chances d'être sélectionné 😉)"}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 space-x-3 gap-2 pt-6">
            <a
              href="https://www.instagram.com/tomanhouse_/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mb-3"
            >
              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3">
                <Instagram className="mr-2" size={20} />
                @tomanhouse_
              </Button>
            </a>

            {/*<Button
              onClick={handleBackToForm}
              variant="outline"
              className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20 font-medium py-3"
            >
              Nouvelle inscription
            </Button>*/}
          </div>
        </div>
      </div>
    </div>
  )
}
