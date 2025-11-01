'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Brain, Database, Moon, Link, Heart, User, Users, Eye, Zap, Lightbulb,
  ArrowRight, Network, GitBranch, Workflow
} from 'lucide-react'

interface Conexion {
  origen: string
  destino: string
  tipo: 'bidireccional' | 'unidireccional'
  descripcion: string
  ejemplos: string[]
  fuerza: 'alta' | 'media' | 'baja'
}

interface ConexionesModulosProps {
  visible: boolean
  onCerrar: () => void
  onNavegar: (modulo: string) => void
  moduloActual?: string
}

export default function ConexionesModulos({ visible, onCerrar, onNavegar, moduloActual }: ConexionesModulosProps) {
  const [conexionSeleccionada, setConexionSeleccionada] = useState<Conexion | null>(null)

  const modulos = {
    arquitectura: { nombre: 'Arquitectura', icono: Brain, color: 'blue' },
    memoria: { nombre: 'Memoria', icono: Database, color: 'green' },
    suenos: { nombre: 'Sueños', icono: Moon, color: 'purple' },
    registro: { nombre: 'Registro', icono: Link, color: 'orange' },
    emociones: { nombre: 'Emociones', icono: Heart, color: 'pink' },
    personalidad: { nombre: 'Personalidad', icono: User, color: 'indigo' },
    social: { nombre: 'Social', icono: Users, color: 'cyan' },
    sensorial: { nombre: 'Sensorial', icono: Eye, color: 'yellow' },
    recompensas: { nombre: 'Recompensas', icono: Zap, color: 'red' },
    metacognicion: { nombre: 'Metacognición', icono: Lightbulb, color: 'amber' }
  }

  const conexiones: Conexion[] = [
    {
      origen: 'memoria',
      destino: 'emociones',
      tipo: 'bidireccional',
      descripcion: 'Las emociones influyen en la formación y recuperación de memorias, mientras que las memorias evocan respuestas emocionales.',
      ejemplos: [
        'Memorias traumáticas generan respuestas emocionales intensas',
        'Estados emocionales positivos facilitan la consolidación de memorias',
        'La memoria emocional es más duradera que la memoria neutral'
      ],
      fuerza: 'alta'
    },
    {
      origen: 'memoria',
      destino: 'suenos',
      tipo: 'bidireccional',
      descripcion: 'Los sueños procesan y consolidan memorias, mientras que las memorias proporcionan contenido para los sueños.',
      ejemplos: [
        'Consolidación de memoria durante el sueño REM',
        'Procesamiento de experiencias diarias en sueños',
        'Integración de memorias fragmentadas'
      ],
      fuerza: 'alta'
    },
    {
      origen: 'emociones',
      destino: 'recompensas',
      tipo: 'bidireccional',
      descripcion: 'El sistema de recompensas genera emociones positivas, y las emociones modulan la percepción de recompensas.',
      ejemplos: [
        'Dopamina genera sensación de placer',
        'Estados emocionales afectan la motivación',
        'Recompensas inesperadas intensifican emociones positivas'
      ],
      fuerza: 'alta'
    },
    {
      origen: 'sensorial',
      destino: 'memoria',
      tipo: 'unidireccional',
      descripcion: 'La información sensorial es procesada y almacenada en diferentes tipos de memoria.',
      ejemplos: [
        'Codificación sensorial en memoria de trabajo',
        'Formación de memorias episódicas multisensoriales',
        'Memoria implícita de patrones sensoriales'
      ],
      fuerza: 'media'
    },
    {
      origen: 'personalidad',
      destino: 'social',
      tipo: 'bidireccional',
      descripcion: 'La personalidad influye en las interacciones sociales, y las experiencias sociales moldean la personalidad.',
      ejemplos: [
        'Rasgos de personalidad determinan estilo social',
        'Feedback social modifica autopercepciones',
        'Adaptación social según contexto'
      ],
      fuerza: 'media'
    },
    {
      origen: 'metacognicion',
      destino: 'memoria',
      tipo: 'bidireccional',
      descripcion: 'La metacognición monitorea y controla procesos de memoria, mientras que la memoria almacena estrategias metacognitivas.',
      ejemplos: [
        'Monitoreo de la calidad de memorias',
        'Estrategias de codificación consciente',
        'Evaluación de confianza en recuerdos'
      ],
      fuerza: 'media'
    },
    {
      origen: 'registro',
      destino: 'memoria',
      tipo: 'unidireccional',
      descripcion: 'El registro temporal organiza las memorias en secuencias coherentes y narrativas autobiográficas.',
      ejemplos: [
        'Organización cronológica de eventos',
        'Construcción de narrativa personal',
        'Contextualización temporal de memorias'
      ],
      fuerza: 'media'
    },
    {
      origen: 'emociones',
      destino: 'social',
      tipo: 'bidireccional',
      descripcion: 'Las emociones facilitan la comunicación social, y las interacciones sociales generan respuestas emocionales.',
      ejemplos: [
        'Expresiones faciales comunican estados internos',
        'Empatía emocional en relaciones',
        'Contagio emocional en grupos'
      ],
      fuerza: 'alta'
    }
  ]

  const getColorClass = (color: string) => {
    const colors = {
      blue: 'bg-blue-500/20 text-blue-400 border-blue-500/50',
      green: 'bg-green-500/20 text-green-400 border-green-500/50',
      purple: 'bg-purple-500/20 text-purple-400 border-purple-500/50',
      orange: 'bg-orange-500/20 text-orange-400 border-orange-500/50',
      pink: 'bg-pink-500/20 text-pink-400 border-pink-500/50',
      indigo: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/50',
      cyan: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50',
      yellow: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
      red: 'bg-red-500/20 text-red-400 border-red-500/50',
      amber: 'bg-amber-500/20 text-amber-400 border-amber-500/50'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const getFuerzaColor = (fuerza: string) => {
    switch (fuerza) {
      case 'alta': return 'bg-green-500/20 text-green-400'
      case 'media': return 'bg-yellow-500/20 text-yellow-400'
      case 'baja': return 'bg-red-500/20 text-red-400'
      default: return 'bg-gray-500/20 text-gray-400'
    }
  }

  const conexionesFiltradas = moduloActual 
    ? conexiones.filter(c => c.origen === moduloActual || c.destino === moduloActual)
    : conexiones

  if (!visible) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-6xl bg-gray-900 border-gray-700 max-h-[90vh] overflow-hidden">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-blue-400 flex items-center gap-2">
              <Network className="w-6 h-6" />
              Conexiones entre Módulos
              {moduloActual && (
                <Badge className={getColorClass(modulos[moduloActual as keyof typeof modulos]?.color || 'blue')}>
                  Desde {modulos[moduloActual as keyof typeof modulos]?.nombre}
                </Badge>
              )}
            </CardTitle>
            <button 
              onClick={onCerrar}
              className="text-gray-400 hover:text-white text-xl"
            >
              ×
            </button>
          </div>
        </CardHeader>
        
        <CardContent className="overflow-y-auto max-h-[70vh] space-y-6">
          {/* Mapa de Conexiones */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <GitBranch className="w-5 h-5" />
                Red de Conexiones
              </h3>
              
              <div className="space-y-3">
                {conexionesFiltradas.map((conexion, index) => {
                  const moduloOrigen = modulos[conexion.origen as keyof typeof modulos]
                  const moduloDestino = modulos[conexion.destino as keyof typeof modulos]
                  
                  return (
                    <Card 
                      key={index}
                      className="bg-gray-800 border-gray-600 hover:bg-gray-750 cursor-pointer transition-colors"
                      onClick={() => setConexionSeleccionada(conexion)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded ${getColorClass(moduloOrigen?.color || 'blue')}`}>
                              {moduloOrigen && <moduloOrigen.icono className="w-4 h-4" />}
                            </div>
                            
                            <ArrowRight className={`w-4 h-4 ${conexion.tipo === 'bidireccional' ? 'text-blue-400' : 'text-gray-400'}`} />
                            
                            <div className={`p-2 rounded ${getColorClass(moduloDestino?.color || 'blue')}`}>
                              {moduloDestino && <moduloDestino.icono className="w-4 h-4" />}
                            </div>
                          </div>
                          
                          <Badge className={getFuerzaColor(conexion.fuerza)}>
                            {conexion.fuerza}
                          </Badge>
                        </div>
                        
                        <div className="text-sm text-gray-300">
                          <span className="font-medium">{moduloOrigen?.nombre}</span>
                          {conexion.tipo === 'bidireccional' ? ' ↔ ' : ' → '}
                          <span className="font-medium">{moduloDestino?.nombre}</span>
                        </div>
                        
                        <p className="text-xs text-gray-400 mt-2 line-clamp-2">
                          {conexion.descripcion}
                        </p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Detalles de Conexión */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Workflow className="w-5 h-5" />
                Detalles de Conexión
              </h3>
              
              {conexionSeleccionada ? (
                <Card className="bg-gray-800 border-gray-600">
                  <CardContent className="p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-white">
                        {modulos[conexionSeleccionada.origen as keyof typeof modulos]?.nombre} 
                        {conexionSeleccionada.tipo === 'bidireccional' ? ' ↔ ' : ' → '}
                        {modulos[conexionSeleccionada.destino as keyof typeof modulos]?.nombre}
                      </h4>
                      <Badge className={getFuerzaColor(conexionSeleccionada.fuerza)}>
                        Conexión {conexionSeleccionada.fuerza}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-300 text-sm">
                      {conexionSeleccionada.descripcion}
                    </p>
                    
                    <div>
                      <h5 className="font-medium text-white mb-2">Ejemplos de Interacción:</h5>
                      <ul className="space-y-1">
                        {conexionSeleccionada.ejemplos.map((ejemplo, idx) => (
                          <li key={idx} className="text-xs text-gray-400 flex items-start gap-2">
                            <span className="text-blue-400 mt-1">•</span>
                            {ejemplo}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex gap-2 pt-3 border-t border-gray-600">
                      <Button
                        onClick={() => onNavegar(conexionSeleccionada.origen)}
                        size="sm"
                        className="flex-1"
                      >
                        Ir a {modulos[conexionSeleccionada.origen as keyof typeof modulos]?.nombre}
                      </Button>
                      <Button
                        onClick={() => onNavegar(conexionSeleccionada.destino)}
                        size="sm"
                        variant="outline"
                        className="flex-1"
                      >
                        Ir a {modulos[conexionSeleccionada.destino as keyof typeof modulos]?.nombre}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="bg-gray-800 border-gray-600">
                  <CardContent className="p-8 text-center">
                    <Network className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400">
                      Selecciona una conexión para ver los detalles de la interacción entre módulos.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Información sobre el Sistema */}
          <div className="border-t border-gray-600 pt-4">
            <h3 className="text-lg font-semibold text-white mb-3">Sobre las Conexiones</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-gray-800 p-3 rounded">
                <h4 className="font-medium text-blue-400 mb-2">Conexiones Bidireccionales</h4>
                <p className="text-gray-300 text-xs">
                  Los módulos se influyen mutuamente de forma continua, creando bucles de retroalimentación complejos.
                </p>
              </div>
              
              <div className="bg-gray-800 p-3 rounded">
                <h4 className="font-medium text-green-400 mb-2">Fuerza de Conexión</h4>
                <p className="text-gray-300 text-xs">
                  Indica qué tan intensa es la interacción entre módulos en condiciones normales de funcionamiento.
                </p>
              </div>
              
              <div className="bg-gray-800 p-3 rounded">
                <h4 className="font-medium text-purple-400 mb-2">Emergencia Sistémica</h4>
                <p className="text-gray-300 text-xs">
                  La interacción entre módulos genera propiedades emergentes que no existen en módulos aislados.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}