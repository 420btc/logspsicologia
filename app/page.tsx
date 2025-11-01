"use client"
import Terminal from "@/components/terminal"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="depurador-mental-theme">
      <main className="min-h-screen bg-black text-green-500 font-mono p-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Depurador Mental: Un Viaje por la Arquitectura de la Mente
          </h1>
          <p className="text-center mb-8">Explora la psicología humana a través de logs de depuración</p>

          <Terminal />
        </div>
      </main>
    </ThemeProvider>
  )
}
