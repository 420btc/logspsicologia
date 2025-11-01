"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface EfectosVisualesProps {
  children: React.ReactNode
  tipo?: "terminal" | "modulo" | "popup"
  activo?: boolean
}

interface ParticleProps {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
}

export function EfectosVisuales({ children, tipo = "terminal", activo = true }: EfectosVisualesProps) {
  const [particulas, setParticulas] = useState<ParticleProps[]>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!activo) return

    // Crear partículas iniciales
    const nuevasParticulas: ParticleProps[] = []
    for (let i = 0; i < 20; i++) {
      nuevasParticulas.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.1,
        color: `hsl(${120 + Math.random() * 60}, 70%, 50%)`
      })
    }
    setParticulas(nuevasParticulas)

    // Animar partículas
    const intervalo = setInterval(() => {
      setParticulas(prev => prev.map(p => ({
        ...p,
        x: (p.x + p.vx + window.innerWidth) % window.innerWidth,
        y: (p.y + p.vy + window.innerHeight) % window.innerHeight,
        opacity: Math.sin(Date.now() * 0.001 + p.id) * 0.2 + 0.3
      })))
    }, 50)

    return () => clearInterval(intervalo)
  }, [activo])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const variantes = {
    terminal: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95 },
      transition: { duration: 0.3 }
    },
    modulo: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -50 },
      transition: { duration: 0.4 }
    },
    popup: {
      initial: { opacity: 0, scale: 0.8, y: 20 },
      animate: { opacity: 1, scale: 1, y: 0 },
      exit: { opacity: 0, scale: 0.8, y: 20 },
      transition: { duration: 0.3 }
    }
  }

  return (
    <div className="relative overflow-hidden">
      {/* Partículas de fondo */}
      {activo && (
        <div className="fixed inset-0 pointer-events-none z-0">
          {particulas.map(p => (
            <div
              key={p.id}
              className="absolute rounded-full"
              style={{
                left: p.x,
                top: p.y,
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
                opacity: p.opacity,
                boxShadow: `0 0 ${p.size * 2}px ${p.color}`
              }}
            />
          ))}
        </div>
      )}

      {/* Efecto de cursor */}
      {activo && (
        <div
          className="fixed pointer-events-none z-10 rounded-full"
          style={{
            left: mousePos.x - 10,
            top: mousePos.y - 10,
            width: 20,
            height: 20,
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, transparent 70%)',
            transition: 'all 0.1s ease-out'
          }}
        />
      )}

      {/* Contenido con animaciones */}
      <motion.div
        initial={variantes[tipo].initial}
        animate={variantes[tipo].animate}
        exit={variantes[tipo].exit}
        transition={variantes[tipo].transition}
        className="relative z-20"
      >
        {children}
      </motion.div>
    </div>
  )
}

export function AnimacionTexto({ texto, velocidad = 50 }: { texto: string; velocidad?: number }) {
  const [textoVisible, setTextoVisible] = useState("")
  const [indice, setIndice] = useState(0)

  useEffect(() => {
    if (indice < texto.length) {
      const timeout = setTimeout(() => {
        setTextoVisible(prev => prev + texto[indice])
        setIndice(prev => prev + 1)
      }, velocidad)
      return () => clearTimeout(timeout)
    }
  }, [indice, texto, velocidad])

  return (
    <span>
      {textoVisible}
      {indice < texto.length && (
        <span className="animate-pulse text-green-400">|</span>
      )}
    </span>
  )
}

export function PulsoConexion({ activo }: { activo: boolean }) {
  if (!activo) return null

  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 border-2 border-green-400 rounded animate-ping opacity-20" />
      <div className="absolute inset-0 border border-green-400 rounded animate-pulse" />
    </div>
  )
}

export function OndasExpansion({ x, y, activo }: { x: number; y: number; activo: boolean }) {
  if (!activo) return null

  return (
    <div 
      className="fixed pointer-events-none z-30"
      style={{ left: x - 50, top: y - 50 }}
    >
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute w-24 h-24 border border-green-400 rounded-full animate-ping"
          style={{
            animationDelay: `${i * 0.2}s`,
            animationDuration: '1s'
          }}
        />
      ))}
    </div>
  )
}

export function BarraProgreso({ progreso, etiqueta }: { progreso: number; etiqueta?: string }) {
  return (
    <div className="w-full">
      {etiqueta && (
        <div className="flex justify-between text-sm text-gray-400 mb-1">
          <span>{etiqueta}</span>
          <span>{Math.round(progreso)}%</span>
        </div>
      )}
      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progreso}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

export function NotificacionFlotante({ 
  mensaje, 
  tipo = "info", 
  visible, 
  onCerrar 
}: { 
  mensaje: string; 
  tipo?: "info" | "success" | "warning" | "error"; 
  visible: boolean; 
  onCerrar: () => void;
}) {
  const colores = {
    info: "bg-blue-900 border-blue-500 text-blue-100",
    success: "bg-green-900 border-green-500 text-green-100",
    warning: "bg-yellow-900 border-yellow-500 text-yellow-100",
    error: "bg-red-900 border-red-500 text-red-100"
  }

  useEffect(() => {
    if (visible) {
      const timeout = setTimeout(onCerrar, 3000)
      return () => clearTimeout(timeout)
    }
  }, [visible, onCerrar])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          className={`fixed top-4 right-4 z-50 p-4 rounded-lg border ${colores[tipo]} shadow-lg max-w-sm`}
        >
          <p className="text-sm">{mensaje}</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default EfectosVisuales