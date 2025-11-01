'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Slider } from '@/components/ui/slider'
import { Heart, Zap, TrendingUp, TrendingDown, RotateCcw, Play, Pause, AlertTriangle } from 'lucide-react'

interface EstadoEmocional {
  alegria: number
  tristeza: number
  ira: number
  miedo: number
  sorpresa: number
  asco: number
}

interface EventoEmocional {
  id: string
  descripcion: string
  impacto: Partial<EstadoEmocional>
  intensidad: number
  tiempo: number
}

interface SimuladorEmocionesProps {
  visible: boolean
  onCerrar: () => void
}

export default function SimuladorEmociones({ visible, onCerrar }: SimuladorEmocionesProps) {
  const [estadoActual, setEstadoActual] = useState<EstadoEmocional>({
    alegria: 50,
    tristeza: 20,
    ira: 10,
    miedo: 15,
    sorpresa: 30,
    asco: 5
  })

  const [estadoBase, setEstadoBase] = useState<EstadoEmocional>({
    alegria: 50,
    tristeza: 20,
    ira: 10,
    miedo: 15,
    sorpresa: 30,
    asco: 5
  })

  const [eventos, setEventos] = useState<EventoEmocional[]>([])
  const [simulacionActiva, setSimulacionActiva] = useState(false)
  const [tiempo, setTiempo] = useState(0)
  const [estabilidad, setEstabilidad] = useState(85)
  const [intensidadGeneral, setIntensidadGeneral] = useState(50)

  const eventosDisponibles: Omit<EventoEmocional, 'id' | 'tiempo'>[] = [
    {
      descripcion: "Recibir buenas noticias",
      impacto: { alegria: 30, sorpresa: 20 },
      intensidad: 70
    },
    {
      descripcion: "Conflicto interpersonal",
      impacto: { ira: 40, tristeza: 20, miedo: 10 },
      intensidad: 80
    },
    {
      descripcion: "Logro personal importante",
      impacto: { alegria: 50, sorpresa: 15 },
      intensidad: 90
    },
    {
      descripcion: "Pérdida o decepción",
      impacto: { tristeza: 60, ira: 15 },
      intensidad: 85
    },
    {
      descripcion: "Situación inesperada",
      impacto: { sorpresa: 70, miedo: 20 },
      intensidad: 60
    },
    {
      descripcion: "Experiencia desagradable",
      impacto: { asco: 50, ira: 20, tristeza: 10 },
      intensidad: 65
    },
    {
      descripcion: "Momento de calma y relajación",
      impacto: { alegria: 20, tristeza: -10, ira: -15, miedo: -20 },
      intensidad: 40
    },
    {
      descripcion: "Estrés laboral intenso",
      impacto: { ira: 30, miedo: 25, tristeza: 15 },
      intensidad: 75
    }
  ]

  useEffect(() => {
    let intervalo: NodeJS.Timeout
    if (simulacionActiva) {
      intervalo = setInterval(() => {
        setTiempo(prev => prev + 1)
        
        // Regulación emocional automática - tendencia hacia el estado base
        setEstadoActual(prev => {
          const nuevo = { ...prev }
          Object.keys(nuevo).forEach(emocion => {
            const key = emocion as keyof EstadoEmocional
            const diferencia = estadoBase[key] - nuevo[key]
            nuevo[key] = Math.max(0, Math.min(100, nuevo[key] + diferencia * 0.02))
          })
          return nuevo
        })

        // Calcular estabilidad emocional
        const varianza = Object.values(estadoActual).reduce((sum, val) => {
          const diff = val - 50
          return sum + (diff * diff)
        }, 0) / 6
        setEstabilidad(Math.max(0, Math.min(100, 100 - varianza / 10)))

      }, 1000)
    }
    return () => clearInterval(intervalo)
  }, [simulacionActiva, estadoBase, estadoActual])

  const aplicarEvento = (evento: Omit<EventoEmocional, 'id' | 'tiempo'>) => {
    const nuevoEvento: EventoEmocional = {
      ...evento,
      id: Date.now().toString(),
      tiempo
    }

    setEventos(prev => [...prev.slice(-4), nuevoEvento]) // Mantener solo los últimos 5 eventos

    setEstadoActual(prev => {
      const nuevo = { ...prev }
      Object.entries(evento.impacto).forEach(([emocion, cambio]) => {
        const key = emocion as keyof EstadoEmocional
        if (cambio !== undefined) {
          nuevo[key] = Math.max(0, Math.min(100, nuevo[key] + cambio * (intensidadGeneral / 100)))
        }
      })
      return nuevo
    })
  }

  const reiniciarSimulacion = () => {
    setEstadoActual({ ...estadoBase })
    setEventos([])
    setTiempo(0)
    setSimulacionActiva(false)
    setEstabilidad(85)
  }

  const ajustarEstadoBase = (emocion: keyof EstadoEmocional, valor: number) => {
    setEstadoBase(prev => ({
      ...prev,
      [emocion]: valor
    }))
  }

  const getEmotionColor = (emocion: keyof EstadoEmocional) => {
    const colors = {
      alegria: 'text-yellow-400',
      tristeza: 'text-blue-400',
      ira: 'text-red-400',
      miedo: 'text-purple-400',
      sorpresa: 'text-green-400',
      asco: 'text-orange-400'
    }
    return colors[emocion]
  }

  const getEmotionBg = (emocion: keyof EstadoEmocional) => {
    const colors = {
      alegria: 'bg-yellow-500/20',
      tristeza: 'bg-blue-500/20',
      ira: 'bg-red-500/20',
      miedo: 'bg-purple-500/20',
      sorpresa: 'bg-green-500/20',
      asco: 'bg-orange-500/20'
    }
    return colors[emocion]
  }

  const getEmotionIcon = (emocion: keyof EstadoEmocional) => {
    const icons = {
      alegria: '😊',
      tristeza: '😢',
      ira: '😠',
      miedo: '😨',
      sorpresa: '😲',
      asco: '🤢'
    }
    return icons[emocion]
  }

  const emocionDominante = Object.entries(estadoActual).reduce((max, [emocion, valor]) => 
    valor > max.valor ? { emocion: emocion as keyof EstadoEmocional, valor } : max
  , { emocion: 'alegria' as keyof EstadoEmocional, valor: 0 })

  if (!visible) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-6xl bg-gray-900 border-gray-700 max-h-[90vh] overflow-hidden">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-pink-400 flex items-center gap-2">
              <Heart className="w-6 h-6" />
              Simulador de Sistema Emocional
            </CardTitle>
            <button 
              onClick={onCerrar}
              className="text-gray-400 hover:text-white text-xl"
            >
              ×
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-4">
            <Card className="bg-gray-800 border-gray-600">
              <CardContent className="p-3">
                <div className="text-sm text-gray-400">Emoción Dominante</div>
                <div className={`text-xl font-bold ${getEmotionColor(emocionDominante.emocion)}`}>
                  {getEmotionIcon(emocionDominante.emocion)} {emocionDominante.emocion}
                </div>
                <div className="text-sm text-gray-400">{emocionDominante.valor.toFixed(1)}%</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-600">
              <CardContent className="p-3">
                <div className="text-sm text-gray-400">Estabilidad Emocional</div>
                <div className={`text-xl font-bold ${estabilidad > 70 ? 'text-green-400' : estabilidad > 40 ? 'text-yellow-400' : 'text-red-400'}`}>
                  {estabilidad.toFixed(1)}%
                </div>
                <Progress value={estabilidad} className="h-1 mt-1" />
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-600">
              <CardContent className="p-3">
                <div className="text-sm text-gray-400">Intensidad General</div>
                <div className="text-xl font-bold text-purple-400">{intensidadGeneral}%</div>
                <Slider
                  value={[intensidadGeneral]}
                  onValueChange={(value) => setIntensidadGeneral(value[0])}
                  max={100}
                  step={1}
                  className="mt-2"
                />
              </CardContent>
            </Card>
          </div>
        </CardHeader>
        
        <CardContent className="overflow-y-auto max-h-[60vh] space-y-6">
          {/* Controles de Simulación */}
          <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-gray-400" />
              <span className="text-gray-300">Tiempo: {tiempo}s</span>
            </div>
            
            <Button
              onClick={() => setSimulacionActiva(!simulacionActiva)}
              variant={simulacionActiva ? "destructive" : "default"}
              size="sm"
              className="flex items-center gap-2"
            >
              {simulacionActiva ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {simulacionActiva ? 'Pausar' : 'Iniciar'}
            </Button>
            
            <Button
              onClick={reiniciarSimulacion}
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Reiniciar
            </Button>

            {estabilidad < 30 && (
              <Badge className="bg-red-500/20 text-red-400 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" />
                Inestabilidad Emocional
              </Badge>
            )}
          </div>

          {/* Estado Emocional Actual */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(estadoActual).map(([emocion, valor]) => (
              <Card key={emocion} className={`${getEmotionBg(emocion as keyof EstadoEmocional)} border-gray-600`}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-white capitalize">
                      {getEmotionIcon(emocion as keyof EstadoEmocional)} {emocion}
                    </span>
                    <span className={`text-lg font-bold ${getEmotionColor(emocion as keyof EstadoEmocional)}`}>
                      {valor.toFixed(1)}%
                    </span>
                  </div>
                  <Progress value={valor} className="h-2" />
                  
                  <div className="mt-2">
                    <div className="text-xs text-gray-400 mb-1">Estado Base:</div>
                    <Slider
                      value={[estadoBase[emocion as keyof EstadoEmocional]]}
                      onValueChange={(value) => ajustarEstadoBase(emocion as keyof EstadoEmocional, value[0])}
                      max={100}
                      step={1}
                      className="h-1"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Eventos Emocionales */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Eventos Emocionales</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {eventosDisponibles.map((evento, index) => (
                <Card key={index} className="bg-gray-800 border-gray-600 hover:bg-gray-750 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-white text-sm">{evento.descripcion}</h4>
                      <Badge className="bg-purple-500/20 text-purple-400 text-xs">
                        {evento.intensidad}%
                      </Badge>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {Object.entries(evento.impacto).map(([emocion, cambio]) => (
                        <Badge 
                          key={emocion}
                          className={`text-xs ${cambio! > 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}
                        >
                          {emocion}: {cambio! > 0 ? '+' : ''}{cambio}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button
                      onClick={() => aplicarEvento(evento)}
                      size="sm"
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      disabled={!simulacionActiva}
                    >
                      Aplicar Evento
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Historial de Eventos */}
          {eventos.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">Historial Reciente</h3>
              <div className="space-y-2">
                {eventos.slice(-5).reverse().map((evento) => (
                  <div key={evento.id} className="p-3 bg-gray-800 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">{evento.descripcion}</span>
                      <span className="text-xs text-gray-500">t={evento.tiempo}s</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Información del Simulador */}
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-3">Cómo Funciona</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <h4 className="font-semibold text-pink-400 mb-2">Regulación Emocional</h4>
                <ul className="space-y-1 text-xs">
                  <li>• Las emociones tienden hacia su estado base</li>
                  <li>• Los eventos alteran temporalmente el equilibrio</li>
                  <li>• La intensidad general afecta la magnitud de los cambios</li>
                  <li>• La estabilidad refleja el equilibrio emocional</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Estados Emocionales</h4>
                <ul className="space-y-1 text-xs">
                  <li>• Cada emoción tiene un nivel base personalizable</li>
                  <li>• Los eventos pueden aumentar o disminuir emociones</li>
                  <li>• La emoción dominante define el estado general</li>
                  <li>• La inestabilidad se activa con desequilibrios extremos</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}