"use client"

import React, { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  X, 
  Play, 
  Pause, 
  RotateCcw, 
  Brain, 
  Heart, 
  Eye, 
  Users, 
  Zap,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react"

interface CasoEstudio {
  id: string
  titulo: string
  descripcion: string
  modulosInvolucrados: string[]
  duracion: number
  dificultad: "Básico" | "Intermedio" | "Avanzado"
  pasos: PasoEstudio[]
}

interface PasoEstudio {
  id: number
  titulo: string
  descripcion: string
  modulo: string
  accion: string
  resultado: string
  tiempo: number
}

interface CasosEstudioProps {
  visible: boolean
  onCerrar: () => void
  onNavegar: (modulo: string) => void
}

const casosEstudio: CasoEstudio[] = [
  {
    id: "ansiedad_social",
    titulo: "Manejo de Ansiedad Social",
    descripcion: "Simula cómo el sistema procesa y maneja una situación de ansiedad social en una presentación pública.",
    modulosInvolucrados: ["emociones", "sensorial", "memoria", "social", "recompensas"],
    duracion: 8,
    dificultad: "Intermedio",
    pasos: [
      {
        id: 1,
        titulo: "Detección Sensorial",
        descripcion: "El sistema detecta señales de estrés: aumento del ritmo cardíaco, sudoración, tensión muscular.",
        modulo: "sensorial",
        accion: "Procesar estímulos físicos",
        resultado: "Activación del sistema de alerta",
        tiempo: 1
      },
      {
        id: 2,
        titulo: "Activación Emocional",
        descripcion: "Se activa la respuesta emocional de miedo y ansiedad ante la situación social.",
        modulo: "emociones",
        accion: "Generar respuesta emocional",
        resultado: "Estado emocional: Ansiedad alta",
        tiempo: 2
      },
      {
        id: 3,
        titulo: "Recuperación de Memorias",
        descripcion: "Se acceden a memorias de experiencias sociales pasadas, tanto positivas como negativas.",
        modulo: "memoria",
        accion: "Buscar experiencias relevantes",
        resultado: "Contexto histórico disponible",
        tiempo: 1
      },
      {
        id: 4,
        titulo: "Análisis Social",
        descripcion: "Evaluación del contexto social: audiencia, expectativas, normas sociales.",
        modulo: "social",
        accion: "Analizar dinámicas sociales",
        resultado: "Mapa social actualizado",
        tiempo: 2
      },
      {
        id: 5,
        titulo: "Estrategias de Afrontamiento",
        descripcion: "Implementación de técnicas de regulación emocional y estrategias de presentación.",
        modulo: "recompensas",
        accion: "Aplicar estrategias adaptativas",
        resultado: "Reducción gradual de ansiedad",
        tiempo: 2
      }
    ]
  },
  {
    id: "aprendizaje_nuevo",
    titulo: "Proceso de Aprendizaje",
    descripcion: "Explora cómo el sistema adquiere, procesa y consolida nueva información compleja.",
    modulosInvolucrados: ["memoria", "sensorial", "recompensas", "metacognicion"],
    duracion: 6,
    dificultad: "Básico",
    pasos: [
      {
        id: 1,
        titulo: "Captura de Información",
        descripcion: "Los sentidos captan nueva información del entorno de aprendizaje.",
        modulo: "sensorial",
        accion: "Procesar estímulos educativos",
        resultado: "Datos sensoriales organizados",
        tiempo: 1
      },
      {
        id: 2,
        titulo: "Codificación Inicial",
        descripcion: "La información se codifica inicialmente en la memoria de trabajo.",
        modulo: "memoria",
        accion: "Codificar en memoria de trabajo",
        resultado: "Información temporalmente almacenada",
        tiempo: 2
      },
      {
        id: 3,
        titulo: "Evaluación de Relevancia",
        descripcion: "El sistema evalúa la importancia y utilidad de la nueva información.",
        modulo: "recompensas",
        accion: "Asignar valor a la información",
        resultado: "Prioridad de consolidación establecida",
        tiempo: 1
      },
      {
        id: 4,
        titulo: "Consolidación",
        descripcion: "La información importante se transfiere a la memoria a largo plazo.",
        modulo: "memoria",
        accion: "Consolidar en memoria permanente",
        resultado: "Conocimiento integrado",
        tiempo: 1
      },
      {
        id: 5,
        titulo: "Metacognición",
        descripcion: "Reflexión sobre el proceso de aprendizaje y estrategias utilizadas.",
        modulo: "metacognicion",
        accion: "Evaluar proceso de aprendizaje",
        resultado: "Estrategias optimizadas",
        tiempo: 1
      }
    ]
  },
  {
    id: "toma_decisiones",
    titulo: "Toma de Decisiones Compleja",
    descripcion: "Analiza el proceso de toma de una decisión importante que involucra múltiples factores.",
    modulosInvolucrados: ["memoria", "emociones", "recompensas", "metacognicion", "social"],
    duracion: 10,
    dificultad: "Avanzado",
    pasos: [
      {
        id: 1,
        titulo: "Identificación del Problema",
        descripcion: "Reconocimiento de la necesidad de tomar una decisión importante.",
        modulo: "metacognicion",
        accion: "Analizar situación actual",
        resultado: "Problema claramente definido",
        tiempo: 1
      },
      {
        id: 2,
        titulo: "Recuperación de Experiencias",
        descripcion: "Acceso a decisiones similares tomadas en el pasado y sus resultados.",
        modulo: "memoria",
        accion: "Buscar precedentes históricos",
        resultado: "Base de experiencias disponible",
        tiempo: 2
      },
      {
        id: 3,
        titulo: "Evaluación Emocional",
        descripcion: "Análisis del impacto emocional de las diferentes opciones disponibles.",
        modulo: "emociones",
        accion: "Evaluar carga emocional",
        resultado: "Perfil emocional de opciones",
        tiempo: 2
      },
      {
        id: 4,
        titulo: "Análisis Costo-Beneficio",
        descripcion: "Evaluación de recompensas y riesgos asociados con cada opción.",
        modulo: "recompensas",
        accion: "Calcular utilidad esperada",
        resultado: "Ranking de opciones",
        tiempo: 2
      },
      {
        id: 5,
        titulo: "Consideraciones Sociales",
        descripcion: "Evaluación del impacto social y las expectativas de otros.",
        modulo: "social",
        accion: "Analizar implicaciones sociales",
        resultado: "Contexto social integrado",
        tiempo: 2
      },
      {
        id: 6,
        titulo: "Decisión Final",
        descripcion: "Integración de todos los factores para tomar la decisión final.",
        modulo: "metacognicion",
        accion: "Sintetizar información",
        resultado: "Decisión tomada y justificada",
        tiempo: 1
      }
    ]
  }
]

const iconosModulos: { [key: string]: React.ReactNode } = {
  emociones: <Heart className="w-4 h-4" />,
  sensorial: <Eye className="w-4 h-4" />,
  memoria: <Brain className="w-4 h-4" />,
  social: <Users className="w-4 h-4" />,
  recompensas: <Zap className="w-4 h-4" />,
  metacognicion: <Brain className="w-4 h-4" />
}

export default function CasosEstudio({ visible, onCerrar, onNavegar }: CasosEstudioProps) {
  const [casoSeleccionado, setCasoSeleccionado] = useState<CasoEstudio | null>(null)
  const [pasoActual, setPasoActual] = useState(0)
  const [ejecutando, setEjecutando] = useState(false)
  const [completado, setCompletado] = useState(false)

  if (!visible) return null

  const iniciarCaso = (caso: CasoEstudio) => {
    setCasoSeleccionado(caso)
    setPasoActual(0)
    setEjecutando(false)
    setCompletado(false)
  }

  const ejecutarPaso = () => {
    if (!casoSeleccionado || pasoActual >= casoSeleccionado.pasos.length) return

    setEjecutando(true)
    
    setTimeout(() => {
      if (pasoActual < casoSeleccionado.pasos.length - 1) {
        setPasoActual(prev => prev + 1)
      } else {
        setCompletado(true)
      }
      setEjecutando(false)
    }, casoSeleccionado.pasos[pasoActual].tiempo * 1000)
  }

  const reiniciarCaso = () => {
    setPasoActual(0)
    setEjecutando(false)
    setCompletado(false)
  }

  const progreso = casoSeleccionado ? ((pasoActual + (completado ? 1 : 0)) / casoSeleccionado.pasos.length) * 100 : 0

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 border border-green-500 rounded-lg w-full max-w-6xl max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-green-500">
          <h2 className="text-xl font-bold text-green-400 flex items-center gap-2">
            <Brain className="w-6 h-6" />
            Casos de Estudio Prácticos
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onCerrar}
            className="text-green-400 hover:text-green-300"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          {!casoSeleccionado ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {casosEstudio.map((caso) => (
                <Card key={caso.id} className="bg-gray-800 border-green-500/30 hover:border-green-500 transition-colors cursor-pointer" onClick={() => iniciarCaso(caso)}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-green-400 text-lg">{caso.titulo}</CardTitle>
                      <Badge variant={caso.dificultad === "Básico" ? "default" : caso.dificultad === "Intermedio" ? "secondary" : "destructive"}>
                        {caso.dificultad}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-300">
                      {caso.descripcion}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />
                        {caso.duracion} minutos
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-2">Módulos involucrados:</p>
                        <div className="flex flex-wrap gap-1">
                          {caso.modulosInvolucrados.map((modulo) => (
                            <Badge key={modulo} variant="outline" className="text-xs">
                              {iconosModulos[modulo]}
                              <span className="ml-1 capitalize">{modulo}</span>
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  onClick={() => setCasoSeleccionado(null)}
                  className="text-green-400 border-green-500"
                >
                  ← Volver a casos
                </Button>
                <div className="flex gap-2">
                  <Button
                    onClick={ejecutarPaso}
                    disabled={ejecutando || completado}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    {ejecutando ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    {ejecutando ? "Ejecutando..." : completado ? "Completado" : "Ejecutar Paso"}
                  </Button>
                  <Button
                    onClick={reiniciarCaso}
                    variant="outline"
                    className="text-green-400 border-green-500"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Reiniciar
                  </Button>
                </div>
              </div>

              <Card className="bg-gray-800 border-green-500/30">
                <CardHeader>
                  <CardTitle className="text-green-400 flex items-center gap-2">
                    {casoSeleccionado.titulo}
                    <Badge variant={casoSeleccionado.dificultad === "Básico" ? "default" : casoSeleccionado.dificultad === "Intermedio" ? "secondary" : "destructive"}>
                      {casoSeleccionado.dificultad}
                    </Badge>
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {casoSeleccionado.descripcion}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400">Progreso del caso</span>
                        <span className="text-sm text-green-400">{Math.round(progreso)}%</span>
                      </div>
                      <Progress value={progreso} className="h-2" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-green-400 mb-3">Pasos del Proceso</h4>
                        <div className="space-y-3">
                          {casoSeleccionado.pasos.map((paso, index) => (
                            <div
                              key={paso.id}
                              className={`p-3 rounded border ${
                                index < pasoActual
                                  ? "bg-green-900/30 border-green-500"
                                  : index === pasoActual
                                  ? ejecutando
                                    ? "bg-yellow-900/30 border-yellow-500"
                                    : "bg-blue-900/30 border-blue-500"
                                  : "bg-gray-800 border-gray-600"
                              }`}
                            >
                              <div className="flex items-center gap-2 mb-2">
                                {index < pasoActual ? (
                                  <CheckCircle className="w-4 h-4 text-green-400" />
                                ) : index === pasoActual ? (
                                  ejecutando ? (
                                    <AlertCircle className="w-4 h-4 text-yellow-400 animate-pulse" />
                                  ) : (
                                    <Play className="w-4 h-4 text-blue-400" />
                                  )
                                ) : (
                                  <div className="w-4 h-4 rounded-full border border-gray-500" />
                                )}
                                <h5 className="font-semibold text-sm">{paso.titulo}</h5>
                                <Badge variant="outline" className="text-xs">
                                  {iconosModulos[paso.modulo]}
                                  <span className="ml-1 capitalize">{paso.modulo}</span>
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-300 mb-2">{paso.descripcion}</p>
                              <div className="text-xs text-gray-400">
                                <p><strong>Acción:</strong> {paso.accion}</p>
                                {index <= pasoActual && <p><strong>Resultado:</strong> {paso.resultado}</p>}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-green-400 mb-3">Módulos Activos</h4>
                        <div className="space-y-2">
                          {casoSeleccionado.modulosInvolucrados.map((modulo) => (
                            <div
                              key={modulo}
                              className={`p-3 rounded border cursor-pointer transition-colors ${
                                pasoActual < casoSeleccionado.pasos.length && 
                                casoSeleccionado.pasos[pasoActual].modulo === modulo
                                  ? "bg-green-900/30 border-green-500"
                                  : "bg-gray-800 border-gray-600 hover:border-gray-500"
                              }`}
                              onClick={() => onNavegar(modulo)}
                            >
                              <div className="flex items-center gap-2">
                                {iconosModulos[modulo]}
                                <span className="capitalize font-medium">{modulo}</span>
                                {pasoActual < casoSeleccionado.pasos.length && 
                                 casoSeleccionado.pasos[pasoActual].modulo === modulo && (
                                  <Badge variant="default" className="ml-auto">Activo</Badge>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>

                        {completado && (
                          <Card className="mt-4 bg-green-900/20 border-green-500">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-2 text-green-400">
                                <CheckCircle className="w-5 h-5" />
                                <h5 className="font-semibold">Caso Completado</h5>
                              </div>
                              <p className="text-sm text-gray-300 mt-2">
                                Has completado exitosamente la simulación de este caso de estudio. 
                                Todos los módulos han trabajado en conjunto para procesar la situación.
                              </p>
                            </CardContent>
                          </Card>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}