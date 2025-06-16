"use client"

import type React from "react"

import Image from "next/image"

export default function TomanWaitlist() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white"
      style={{ backgroundColor: "#034098" }}
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
