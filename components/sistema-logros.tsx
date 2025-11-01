'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Trophy, Star, Brain, Terminal, Zap, Target, Award, Lock } from 'lucide-react'

interface Logro {
  id: string
  titulo: string
  descripcion: string
  icono: React.ReactNode
  categoria: 'explorador' | 'comandos' | 'modulos' | 'experto'
  puntos: number
  desbloqueado: boolean
  progreso?: number
  progresoMaximo?: number
  condicion: string
}

const logrosDisponibles: Logro[] = [
  {
    id: 'primer_comando',
    titulo: 'Primer Contacto',
    descripcion: 'Ejecuta tu primer comando en el terminal',
    icono: <Terminal className="w-6 h-6" />,
    categoria: 'comandos',
    puntos: 10,
    desbloqueado: false,
    condicion: 'ejecutar_comando'
  },
  {
    id: 'explorador_novato',
    titulo: 'Explorador Novato',
    descripcion: 'Visita 3 módulos diferentes',
    icono: <Brain className="w-6 h-6" />,
    categoria: 'explorador',
    puntos: 25,
    desbloqueado: false,
    progreso: 0,
    progresoMaximo: 3,
    condicion: 'visitar_modulos'
  },
  {
    id: 'maestro_comandos',
    titulo: 'Maestro de Comandos',
    descripcion: 'Usa 15 comandos diferentes',
    icono: <Zap className="w-6 h-6" />,
    categoria: 'comandos',
    puntos: 50,
    desbloqueado: false,
    progreso: 0,
    progresoMaximo: 15,
    condicion: 'comandos_unicos'
  },
  {
    id: 'arquitecto_mental',
    titulo: 'Arquitecto Mental',
    descripcion: 'Explora completamente el módulo de Arquitectura',
    icono: <Target className="w-6 h-6" />,
    categoria: 'modulos',
    puntos: 30,
    desbloqueado: false,
    condicion: 'completar_arquitectura'
  },
  {
    id: 'psicologo_digital',
    titulo: 'Psicólogo Digital',
    descripcion: 'Visita todos los módulos al menos una vez',
    icono: <Award className="w-6 h-6" />,
    categoria: 'explorador',
    puntos: 100,
    desbloqueado: false,
    progreso: 0,
    progresoMaximo: 10,
    condicion: 'todos_modulos'
  },
  {
    id: 'experto_memoria',
    titulo: 'Experto en Memoria',
    descripcion: 'Domina el sistema de memoria',
    icono: <Brain className="w-6 h-6" />,
    categoria: 'experto',
    puntos: 75,
    desbloqueado: false,
    condicion: 'experto_memoria'
  },
  {
    id: 'interprete_suenos',
    titulo: 'Intérprete de Sueños',
    descripcion: 'Explora todos los aspectos del módulo de sueños',
    icono: <Star className="w-6 h-6" />,
    categoria: 'experto',
    puntos: 60,
    desbloqueado: false,
    condicion: 'experto_suenos'
  },
  {
    id: 'guru_emocional',
    titulo: 'Gurú Emocional',
    descripcion: 'Comprende el sistema emocional completamente',
    icono: <Trophy className="w-6 h-6" />,
    categoria: 'experto',
    puntos: 80,
    desbloqueado: false,
    condicion: 'experto_emociones'
  }
]

interface SistemaLogrosProps {
  visible: boolean
  onCerrar: () => void
}

export default function SistemaLogros({ visible, onCerrar }: SistemaLogrosProps) {
  const [logros, setLogros] = useState<Logro[]>(logrosDisponibles)
  const [puntosTotales, setPuntosTotales] = useState(0)
  const [categoriaActiva, setCategoriaActiva] = useState<string>('todos')

  useEffect(() => {
    // Cargar progreso desde localStorage
    const progresoGuardado = localStorage.getItem('logros_progreso')
    if (progresoGuardado) {
      const progreso = JSON.parse(progresoGuardado)
      setLogros(progreso.logros || logrosDisponibles)
      setPuntosTotales(progreso.puntos || 0)
    }
  }, [])

  const logrosDesbloqueados = logros.filter(logro => logro.desbloqueado)
  const porcentajeCompletado = (logrosDesbloqueados.length / logros.length) * 100

  const getColorCategoria = (categoria: string) => {
    switch (categoria) {
      case 'explorador': return 'bg-blue-500/20 text-blue-400 border-blue-500'
      case 'comandos': return 'bg-green-500/20 text-green-400 border-green-500'
      case 'modulos': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500'
      case 'experto': return 'bg-purple-500/20 text-purple-400 border-purple-500'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500'
    }
  }

  const logrosFiltered = categoriaActiva === 'todos' 
    ? logros 
    : logros.filter(logro => logro.categoria === categoriaActiva)

  const categorias = [
    { id: 'todos', nombre: 'Todos', count: logros.length },
    { id: 'explorador', nombre: 'Explorador', count: logros.filter(l => l.categoria === 'explorador').length },
    { id: 'comandos', nombre: 'Comandos', count: logros.filter(l => l.categoria === 'comandos').length },
    { id: 'modulos', nombre: 'Módulos', count: logros.filter(l => l.categoria === 'modulos').length },
    { id: 'experto', nombre: 'Experto', count: logros.filter(l => l.categoria === 'experto').length }
  ]

  if (!visible) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl bg-gray-900 border-gray-700 max-h-[90vh] overflow-hidden">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-yellow-400 flex items-center gap-2">
              <Trophy className="w-6 h-6" />
              Sistema de Logros
            </CardTitle>
            <button 
              onClick={onCerrar}
              className="text-gray-400 hover:text-white text-xl"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold text-yellow-400">
                {puntosTotales} puntos
              </div>
              <div className="flex-1">
                <div className="flex justify-between text-sm text-gray-400 mb-1">
                  <span>Progreso General</span>
                  <span>{logrosDesbloqueados.length}/{logros.length}</span>
                </div>
                <Progress value={porcentajeCompletado} className="h-2" />
              </div>
            </div>

            <div className="flex gap-2 flex-wrap">
              {categorias.map(categoria => (
                <button
                  key={categoria.id}
                  onClick={() => setCategoriaActiva(categoria.id)}
                  className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                    categoriaActiva === categoria.id
                      ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500'
                      : 'bg-gray-700 text-gray-400 border-gray-600 hover:border-gray-500'
                  }`}
                >
                  {categoria.nombre} ({categoria.count})
                </button>
              ))}
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="overflow-y-auto max-h-[60vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {logrosFiltered.map(logro => (
              <Card 
                key={logro.id} 
                className={`border transition-all ${
                  logro.desbloqueado 
                    ? 'bg-gray-800 border-yellow-500/50 shadow-lg shadow-yellow-500/20' 
                    : 'bg-gray-800/50 border-gray-600'
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${
                      logro.desbloqueado 
                        ? 'bg-yellow-500/20 text-yellow-400' 
                        : 'bg-gray-700 text-gray-500'
                    }`}>
                      {logro.desbloqueado ? logro.icono : <Lock className="w-6 h-6" />}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className={`font-semibold ${
                          logro.desbloqueado ? 'text-white' : 'text-gray-400'
                        }`}>
                          {logro.titulo}
                        </h3>
                        <Badge className={getColorCategoria(logro.categoria)}>
                          {logro.puntos} pts
                        </Badge>
                      </div>
                      
                      <p className={`text-sm mb-2 ${
                        logro.desbloqueado ? 'text-gray-300' : 'text-gray-500'
                      }`}>
                        {logro.descripcion}
                      </p>

                      {logro.progreso !== undefined && logro.progresoMaximo && (
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs text-gray-400">
                            <span>Progreso</span>
                            <span>{logro.progreso}/{logro.progresoMaximo}</span>
                          </div>
                          <Progress 
                            value={(logro.progreso / logro.progresoMaximo) * 100} 
                            className="h-1"
                          />
                        </div>
                      )}

                      {logro.desbloqueado && (
                        <Badge variant="outline" className="text-green-400 border-green-400 mt-2">
                          ✓ Desbloqueado
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Hook para manejar logros
export function useLogros() {
  const [logros, setLogros] = useState<Logro[]>(logrosDisponibles)

  const desbloquearLogro = (logroId: string) => {
    setLogros(prev => {
      const nuevosLogros = prev.map(logro => 
        logro.id === logroId ? { ...logro, desbloqueado: true } : logro
      )
      
      // Guardar en localStorage
      const puntosTotales = nuevosLogros
        .filter(l => l.desbloqueado)
        .reduce((sum, l) => sum + l.puntos, 0)
      
      localStorage.setItem('logros_progreso', JSON.stringify({
        logros: nuevosLogros,
        puntos: puntosTotales
      }))
      
      return nuevosLogros
    })
  }

  const actualizarProgreso = (logroId: string, progreso: number) => {
    setLogros(prev => {
      const nuevosLogros = prev.map(logro => 
        logro.id === logroId ? { ...logro, progreso } : logro
      )
      
      localStorage.setItem('logros_progreso', JSON.stringify({
        logros: nuevosLogros,
        puntos: nuevosLogros.filter(l => l.desbloqueado).reduce((sum, l) => sum + l.puntos, 0)
      }))
      
      return nuevosLogros
    })
  }

  return { logros, desbloquearLogro, actualizarProgreso }
}