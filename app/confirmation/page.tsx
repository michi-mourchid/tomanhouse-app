import { Suspense } from "react"
import ConfirmationPage from "./ConfirmationPage"

export const dynamic = "force-dynamic"

export default function Page() {
  return (
    <Suspense fallback={<div className="text-white p-8">Chargement...</div>}>
      <ConfirmationPage />
    </Suspense>
  )
}
