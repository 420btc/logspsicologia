'use client'

import { useState } from 'react'
import { ChevronRight, ChevronLeft, Lightbulb, Terminal, Brain, CheckCircle } from 'lucide-react'

interface PasoTutorial {
  id: number
  titulo: string
  descripcion: string
  comando?: string
  ejemplo?: string
  tipo: 'introduccion' | 'comando' | 'exploracion' | 'practica'
}

const pasosTutorial: PasoTutorial[] = [
  {
    id: 1,
    titulo: "Bienvenido al Depurador Mental",
    descripcion: "Este es un sistema interactivo que te permite explorar la mente humana como si fuera un sistema computacional. Cada módulo representa un aspecto diferente de la cognición.",
    tipo: 'introduccion'
  },
  {
    id: 2,
    titulo: "Comandos Básicos",
    descripcion: "Puedes usar comandos para navegar. Escribe 'ayuda' para ver todos los comandos disponibles.",
    comando: "ayuda",
    tipo: 'comando'
  },
  {
    id: 3,
    titulo: "Explorar Módulos",
    descripcion: "Hay 10 módulos principales. Prueba acceder al módulo de arquitectura para entender la estructura del sistema.",
    comando: "arquitectura",
    ejemplo: "Esto te llevará al módulo de Arquitectura del Sistema Mental",
    tipo: 'exploracion'
  },
  {
    id: 4,
    titulo: "Navegación en Módulos",
    descripcion: "Dentro de cada módulo puedes usar comandos específicos. En arquitectura, prueba 'componentes' para ver los elementos del sistema.",
    comando: "componentes",
    tipo: 'practica'
  },
  {
    id: 5,
    titulo: "Limpiar Terminal",
    descripcion: "Usa 'limpiar' o 'clear' para limpiar la pantalla cuando necesites espacio.",
    comando: "limpiar",
    tipo: 'comando'
  },
  {
    id: 6,
    titulo: "Personalización",
    descripcion: "Puedes cambiar tu nombre de usuario con el comando 'nombre [tu_nombre]'.",
    comando: "nombre Explorador",
    ejemplo: "Esto cambiará tu nombre a 'Explorador'",
    tipo: 'practica'
  },
  {
    id: 7,
    titulo: "Exploración Libre",
    descripcion: "¡Ahora estás listo! Explora los diferentes módulos: memoria, emociones, sueños, y más. Cada uno tiene contenido único y comandos específicos.",
    tipo: 'introduccion'
  }
]

interface TutorialInteractivoProps {
  onComandoSugerido: (comando: string) => void
  onCerrar: () => void
  visible: boolean
}

export default function TutorialInteractivo({ onComandoSugerido, onCerrar, visible }: TutorialInteractivoProps) {
  const [pasoActual, setPasoActual] = useState(0)
  const [completados, setCompletados] = useState<number[]>([])

  const paso = pasosTutorial[pasoActual]
  const progreso = ((pasoActual + 1) / pasosTutorial.length) * 100

  const siguientePaso = () => {
    if (pasoActual < pasosTutorial.length - 1) {
      setPasoActual(pasoActual + 1)
      setCompletados([...completados, paso.id])
    }
  }

  const pasoAnterior = () => {
    if (pasoActual > 0) {
      setPasoActual(pasoActual - 1)
    }
  }

  const ejecutarComando = () => {
    if (paso.comando) {
      onComandoSugerido(paso.comando)
      setCompletados([...completados, paso.id])
    }
  }

  const finalizarTutorial = () => {
    localStorage.setItem('tutorial_completado', 'true')
    onCerrar()
  }

  const getIconoPorTipo = (tipo: string) => {
    switch (tipo) {
      case 'introduccion': return <Brain className="w-5 h-5" />
      case 'comando': return <Terminal className="w-5 h-5" />
      case 'exploracion': return <Lightbulb className="w-5 h-5" />
      case 'practica': return <CheckCircle className="w-5 h-5" />
      default: return <Brain className="w-5 h-5" />
    }
  }

  const getColorPorTipo = (tipo: string) => {
    // Todos los tipos usan verde para mantener consistencia minimalista
    return 'bg-green-500/10 text-green-400 border border-green-500/20'
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-2xl bg-black border border-green-500/30 rounded-lg shadow-2xl shadow-green-500/10">
        {/* Header minimalista */}
        <div className="border-b border-green-500/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              {getIconoPorTipo(paso.tipo)}
              <h2 className="text-green-400 text-lg font-mono">TUTORIAL</h2>
            </div>
            <div className="text-green-400 font-mono text-sm">
              {pasoActual + 1}/{pasosTutorial.length}
            </div>
          </div>
          
          {/* Barra de progreso minimalista */}
          <div className="w-full bg-green-500/10 h-1 rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-400 transition-all duration-300 ease-out"
              style={{ width: `${progreso}%` }}
            />
          </div>
        </div>
        
        {/* Contenido minimalista */}
        <div className="p-6 space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-2 py-1 rounded text-xs font-mono uppercase ${getColorPorTipo(paso.tipo)}`}>
                {paso.tipo}
              </span>
              <h3 className="text-green-400 text-xl font-mono">{paso.titulo}</h3>
            </div>
            
            <p className="text-green-300/80 leading-relaxed font-mono text-sm mb-6">
              {paso.descripcion}
            </p>

            {paso.comando && (
              <div className="bg-green-500/5 border border-green-500/20 rounded p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-green-400/60 font-mono text-xs uppercase tracking-wide">
                    COMANDO
                  </span>
                  <button 
                    onClick={ejecutarComando}
                    className="bg-green-500/20 hover:bg-green-500/30 text-green-400 px-3 py-1 rounded font-mono text-xs uppercase tracking-wide border border-green-500/30 transition-colors"
                  >
                    EJECUTAR
                  </button>
                </div>
                <div className="text-green-400 font-mono text-base">
                  $ {paso.comando}
                </div>
                {paso.ejemplo && (
                  <p className="text-green-400/60 font-mono text-xs mt-2">
                    // {paso.ejemplo}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Navegación minimalista */}
          <div className="flex justify-between items-center pt-6 border-t border-green-500/20">
            <button 
              onClick={pasoAnterior}
              disabled={pasoActual === 0}
              className={`flex items-center gap-2 px-4 py-2 font-mono text-sm uppercase tracking-wide transition-colors ${
                pasoActual === 0 
                  ? 'text-green-400/30 cursor-not-allowed' 
                  : 'text-green-400 hover:text-green-300 hover:bg-green-500/10'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              PREV
            </button>

            {/* Indicadores de progreso minimalistas */}
            <div className="flex gap-1">
              {pasosTutorial.map((_, index) => (
                <div
                  key={index}
                  className={`w-1 h-6 transition-colors ${
                    index === pasoActual 
                      ? 'bg-green-400' 
                      : index < pasoActual 
                        ? 'bg-green-500/50' 
                        : 'bg-green-500/20'
                  }`}
                />
              ))}
            </div>

            {pasoActual === pasosTutorial.length - 1 ? (
              <button 
                onClick={finalizarTutorial}
                className="flex items-center gap-2 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 font-mono text-sm uppercase tracking-wide border border-green-500/30 transition-colors"
              >
                FINISH
                <CheckCircle className="w-4 h-4" />
              </button>
            ) : (
              <button 
                onClick={siguientePaso}
                className="flex items-center gap-2 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 font-mono text-sm uppercase tracking-wide border border-green-500/30 transition-colors"
              >
                NEXT
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}