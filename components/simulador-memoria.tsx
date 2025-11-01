'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Brain, Zap, Clock, Eye, EyeOff, RotateCcw, Play, Pause } from 'lucide-react'

interface MemoriaItem {
  id: string
  contenido: string
  tipo: 'consciente' | 'subconsciente'
  fuerza: number
  tiempoCreacion: number
  accesos: number
  ultimoAcceso: number
}

interface SimuladorMemoriaProps {
  visible: boolean
  onCerrar: () => void
}

export default function SimuladorMemoria({ visible, onCerrar }: SimuladorMemoriaProps) {
  const [memorias, setMemorias] = useState<MemoriaItem[]>([])
  const [nuevoRecuerdo, setNuevoRecuerdo] = useState('')
  const [tipoSeleccionado, setTipoSeleccionado] = useState<'consciente' | 'subconsciente'>('consciente')
  const [simulacionActiva, setSimulacionActiva] = useState(false)
  const [tiempo, setTiempo] = useState(0)
  const [estadisticas, setEstadisticas] = useState({
    memoriasConscientes: 0,
    memoriasSubconscientes: 0,
    capacidadUsada: 0,
    eficiencia: 100
  })

  useEffect(() => {
    let intervalo: NodeJS.Timeout
    if (simulacionActiva) {
      intervalo = setInterval(() => {
        setTiempo(prev => prev + 1)
        // Simular degradación de memoria con el tiempo
        setMemorias(prev => prev.map(memoria => ({
          ...memoria,
          fuerza: Math.max(0, memoria.fuerza - (memoria.tipo === 'consciente' ? 0.5 : 0.1))
        })))
      }, 1000)
    }
    return () => clearInterval(intervalo)
  }, [simulacionActiva])

  useEffect(() => {
    // Actualizar estadísticas
    const conscientes = memorias.filter(m => m.tipo === 'consciente').length
    const subconscientes = memorias.filter(m => m.tipo === 'subconsciente').length
    const capacidad = (memorias.length / 20) * 100 // Máximo 20 memorias
    const eficiencia = memorias.length > 0 
      ? memorias.reduce((sum, m) => sum + m.fuerza, 0) / memorias.length 
      : 100

    setEstadisticas({
      memoriasConscientes: conscientes,
      memoriasSubconscientes: subconscientes,
      capacidadUsada: Math.min(capacidad, 100),
      eficiencia: Math.round(eficiencia)
    })
  }, [memorias])

  const agregarMemoria = () => {
    if (!nuevoRecuerdo.trim()) return

    const nuevaMemoria: MemoriaItem = {
      id: Date.now().toString(),
      contenido: nuevoRecuerdo,
      tipo: tipoSeleccionado,
      fuerza: tipoSeleccionado === 'consciente' ? 80 : 60,
      tiempoCreacion: tiempo,
      accesos: 0,
      ultimoAcceso: tiempo
    }

    setMemorias(prev => [...prev, nuevaMemoria])
    setNuevoRecuerdo('')
  }

  const accederMemoria = (id: string) => {
    setMemorias(prev => prev.map(memoria => 
      memoria.id === id 
        ? { 
            ...memoria, 
            accesos: memoria.accesos + 1,
            ultimoAcceso: tiempo,
            fuerza: Math.min(100, memoria.fuerza + 10) // Reforzar con acceso
          }
        : memoria
    ))
  }

  const olvidarMemoria = (id: string) => {
    setMemorias(prev => prev.filter(memoria => memoria.id !== id))
  }

  const consolidarMemorias = () => {
    setMemorias(prev => prev.map(memoria => ({
      ...memoria,
      tipo: memoria.accesos > 2 ? 'subconsciente' : memoria.tipo,
      fuerza: memoria.accesos > 2 ? Math.min(100, memoria.fuerza + 20) : memoria.fuerza
    })))
  }

  const reiniciarSimulacion = () => {
    setMemorias([])
    setTiempo(0)
    setSimulacionActiva(false)
  }

  const getFuerzaColor = (fuerza: number) => {
    if (fuerza > 70) return 'text-green-400'
    if (fuerza > 40) return 'text-yellow-400'
    return 'text-red-400'
  }

  const getFuerzaBackground = (fuerza: number) => {
    if (fuerza > 70) return 'bg-green-500/20'
    if (fuerza > 40) return 'bg-yellow-500/20'
    return 'bg-red-500/20'
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-6xl bg-gray-900 border-gray-700 max-h-[90vh] overflow-hidden">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-blue-400 flex items-center gap-2">
              <Brain className="w-6 h-6" />
              Simulador de Sistema de Memoria
            </CardTitle>
            <button 
              onClick={onCerrar}
              className="text-gray-400 hover:text-white text-xl"
            >
              ×
            </button>
          </div>
          
          <div className="grid grid-cols-4 gap-4 mt-4">
            <Card className="bg-gray-800 border-gray-600">
              <CardContent className="p-3">
                <div className="text-sm text-gray-400">Memoria Consciente</div>
                <div className="text-xl font-bold text-blue-400">{estadisticas.memoriasConscientes}</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-600">
              <CardContent className="p-3">
                <div className="text-sm text-gray-400">Memoria Subconsciente</div>
                <div className="text-xl font-bold text-purple-400">{estadisticas.memoriasSubconscientes}</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-600">
              <CardContent className="p-3">
                <div className="text-sm text-gray-400">Capacidad Usada</div>
                <div className="text-xl font-bold text-yellow-400">{estadisticas.capacidadUsada.toFixed(1)}%</div>
                <Progress value={estadisticas.capacidadUsada} className="h-1 mt-1" />
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-600">
              <CardContent className="p-3">
                <div className="text-sm text-gray-400">Eficiencia</div>
                <div className="text-xl font-bold text-green-400">{estadisticas.eficiencia}%</div>
              </CardContent>
            </Card>
          </div>
        </CardHeader>
        
        <CardContent className="overflow-y-auto max-h-[60vh] space-y-6">
          {/* Controles de Simulación */}
          <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gray-400" />
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
            
            <Button
              onClick={consolidarMemorias}
              variant="outline"
              size="sm"
              className="bg-purple-600 hover:bg-purple-700"
            >
              Consolidar Memorias
            </Button>
          </div>

          {/* Agregar Nueva Memoria */}
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-3">Crear Nueva Memoria</h3>
            <div className="flex gap-3">
              <Input
                value={nuevoRecuerdo}
                onChange={(e) => setNuevoRecuerdo(e.target.value)}
                placeholder="Describe el recuerdo o información..."
                className="flex-1 bg-gray-700 border-gray-600"
                onKeyPress={(e) => e.key === 'Enter' && agregarMemoria()}
              />
              
              <select
                value={tipoSeleccionado}
                onChange={(e) => setTipoSeleccionado(e.target.value as 'consciente' | 'subconsciente')}
                className="px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white"
              >
                <option value="consciente">Consciente</option>
                <option value="subconsciente">Subconsciente</option>
              </select>
              
              <Button onClick={agregarMemoria} className="bg-blue-600 hover:bg-blue-700">
                Agregar
              </Button>
            </div>
          </div>

          {/* Lista de Memorias */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">Memorias Almacenadas</h3>
            
            {memorias.length === 0 ? (
              <div className="text-center py-8 text-gray-400">
                No hay memorias almacenadas. Agrega algunas para comenzar la simulación.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {memorias.map(memoria => (
                  <Card 
                    key={memoria.id} 
                    className={`border transition-all hover:shadow-lg ${
                      memoria.tipo === 'consciente' 
                        ? 'bg-blue-900/20 border-blue-500/50' 
                        : 'bg-purple-900/20 border-purple-500/50'
                    }`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <Badge 
                          className={memoria.tipo === 'consciente' 
                            ? 'bg-blue-500/20 text-blue-400' 
                            : 'bg-purple-500/20 text-purple-400'
                          }
                        >
                          {memoria.tipo === 'consciente' ? 'Consciente' : 'Subconsciente'}
                        </Badge>
                        
                        <div className="flex gap-1">
                          <button
                            onClick={() => accederMemoria(memoria.id)}
                            className="p-1 text-gray-400 hover:text-green-400 transition-colors"
                            title="Acceder a memoria"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => olvidarMemoria(memoria.id)}
                            className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                            title="Olvidar memoria"
                          >
                            <EyeOff className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-sm mb-3">{memoria.contenido}</p>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-gray-400">
                          <span>Fuerza</span>
                          <span className={getFuerzaColor(memoria.fuerza)}>
                            {memoria.fuerza.toFixed(1)}%
                          </span>
                        </div>
                        <Progress 
                          value={memoria.fuerza} 
                          className={`h-1 ${getFuerzaBackground(memoria.fuerza)}`}
                        />
                        
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Accesos: {memoria.accesos}</span>
                          <span>Creada: {memoria.tiempoCreacion}s</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Información del Simulador */}
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-3">Cómo Funciona</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Memoria Consciente</h4>
                <ul className="space-y-1 text-xs">
                  <li>• Se degrada más rápido con el tiempo</li>
                  <li>• Fuerza inicial: 80%</li>
                  <li>• Acceso directo y rápido</li>
                  <li>• Capacidad limitada</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Memoria Subconsciente</h4>
                <ul className="space-y-1 text-xs">
                  <li>• Se degrada lentamente</li>
                  <li>• Fuerza inicial: 60%</li>
                  <li>• Mayor capacidad de almacenamiento</li>
                  <li>• Se fortalece con consolidación</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}