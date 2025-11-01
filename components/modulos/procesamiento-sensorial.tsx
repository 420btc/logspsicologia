"use client"

import { useState } from "react"
import { Eye, Ear, Zap, Waves, Thermometer, Wind, Brain, Filter } from "lucide-react"

export default function ProcesamientoSensorial() {
  const [seccionActiva, setSeccionActiva] = useState<string | null>(null)
  const [sensorSeleccionado, setSensorSeleccionado] = useState<string | null>(null)

  const sistemasSensoriales = [
    { 
      nombre: "Visual", 
      icono: Eye, 
      estado: "Óptimo", 
      precision: 92, 
      latencia: "13ms",
      ancho_banda: "10 Mbps",
      filtros_activos: 8
    },
    { 
      nombre: "Auditivo", 
      icono: Ear, 
      estado: "Óptimo", 
      precision: 88, 
      latencia: "21ms",
      ancho_banda: "1.4 Mbps",
      filtros_activos: 5
    },
    { 
      nombre: "Táctil", 
      icono: Zap, 
      estado: "Normal", 
      precision: 75, 
      latencia: "35ms",
      ancho_banda: "0.5 Mbps",
      filtros_activos: 3
    },
    { 
      nombre: "Olfativo", 
      icono: Wind, 
      estado: "Reducido", 
      precision: 45, 
      latencia: "150ms",
      ancho_banda: "0.1 Mbps",
      filtros_activos: 2
    },
    { 
      nombre: "Gustativo", 
      icono: Waves, 
      estado: "Normal", 
      precision: 60, 
      latencia: "200ms",
      ancho_banda: "0.05 Mbps",
      filtros_activos: 2
    },
    { 
      nombre: "Vestibular", 
      icono: Thermometer, 
      estado: "Óptimo", 
      precision: 95, 
      latencia: "8ms",
      ancho_banda: "0.2 Mbps",
      filtros_activos: 4
    }
  ]

  const filtrosAtencion = [
    { nombre: "Filtro de Relevancia", activo: true, intensidad: 85, descripcion: "Prioriza información importante" },
    { nombre: "Filtro de Novedad", activo: true, intensidad: 70, descripcion: "Detecta cambios y novedades" },
    { nombre: "Filtro Emocional", activo: true, intensidad: 90, descripcion: "Amplifica contenido emocional" },
    { nombre: "Filtro de Habituación", activo: true, intensidad: 60, descripcion: "Reduce estímulos repetitivos" },
    { nombre: "Filtro Contextual", activo: false, intensidad: 40, descripcion: "Adapta según contexto" }
  ]

  return (
    <div className="text-green-500">
      <h3 className="text-xl mb-4">Procesamiento Sensorial: Interfaces de Entrada</h3>
      <p className="mb-4">
        Los sistemas sensoriales como interfaces de hardware que capturan, procesan y traducen 
        información del entorno en datos utilizables por el sistema cognitivo.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div
          onClick={() => setSeccionActiva(seccionActiva === "sistemas" ? null : "sistemas")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "sistemas" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Brain className="mb-2" />
          <h4 className="font-bold">Sistemas Sensoriales</h4>
          <p className="text-xs">Estado y rendimiento</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "filtros" ? null : "filtros")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "filtros" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Filter className="mb-2" />
          <h4 className="font-bold">Filtros Atencionales</h4>
          <p className="text-xs">Procesamiento selectivo</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "integracion" ? null : "integracion")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "integracion" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Waves className="mb-2" />
          <h4 className="font-bold">Integración Multisensorial</h4>
          <p className="text-xs">Fusión de datos</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "calibracion" ? null : "calibracion")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "calibracion" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Zap className="mb-2" />
          <h4 className="font-bold">Calibración Sensorial</h4>
          <p className="text-xs">Ajustes y optimización</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "adaptacion" ? null : "adaptacion")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "adaptacion" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Thermometer className="mb-2" />
          <h4 className="font-bold">Adaptación Sensorial</h4>
          <p className="text-xs">Ajuste dinámico</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "ilusiones" ? null : "ilusiones")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "ilusiones" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Eye className="mb-2" />
          <h4 className="font-bold">Análisis de Ilusiones</h4>
          <p className="text-xs">Errores de procesamiento</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "memoria_sensorial" ? null : "memoria_sensorial")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "memoria_sensorial" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Brain className="mb-2" />
          <h4 className="font-bold">Memoria Sensorial</h4>
          <p className="text-xs">Buffer de entrada</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "sinestesia" ? null : "sinestesia")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "sinestesia" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Waves className="mb-2" />
          <h4 className="font-bold">Conexiones Cruzadas</h4>
          <p className="text-xs">Sinestesia y asociaciones</p>
        </div>
      </div>

      {seccionActiva === "sistemas" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Estado de Sistemas Sensoriales</h4>
          <p className="mb-4">Monitoreo en tiempo real de las interfaces sensoriales:</p>

          <div className="space-y-3">
            {sistemasSensoriales.map((sistema, index) => {
              const IconoSistema = sistema.icono
              return (
                <div key={index} className="border border-green-500/30 rounded p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <IconoSistema size={16} />
                      <span className="font-bold">{sistema.nombre}</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${
                      sistema.estado === 'Óptimo' ? 'bg-green-500 text-black' :
                      sistema.estado === 'Normal' ? 'bg-yellow-500 text-black' :
                      'bg-red-500 text-black'
                    }`}>
                      {sistema.estado}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Precisión</span>
                        <span>{sistema.precision}%</span>
                      </div>
                      <div className="w-full bg-green-900/20 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: `${sistema.precision}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Latencia</span>
                        <span>{sistema.latencia}</span>
                      </div>
                      <div className="flex justify-between mb-1">
                        <span>Ancho de banda</span>
                        <span>{sistema.ancho_banda}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Filtros activos</span>
                        <span>{sistema.filtros_activos}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              La degradación en sistemas sensoriales puede indicar fatiga, sobrecarga o necesidad 
              de calibración. Monitoreo continuo recomendado para mantener precisión óptima.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "filtros" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Filtros Atencionales</h4>
          <p className="mb-4">Mecanismos de procesamiento selectivo de información sensorial:</p>

          <div className="space-y-3">
            {filtrosAtencion.map((filtro, index) => (
              <div key={index} className={`border rounded p-3 ${filtro.activo ? 'border-green-500/50 bg-green-900/10' : 'border-gray-500/30'}`}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-sm">{filtro.nombre}</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-1 rounded ${filtro.activo ? 'bg-green-500 text-black' : 'bg-gray-600'}`}>
                      {filtro.activo ? 'ACTIVO' : 'INACTIVO'}
                    </span>
                    <span className="text-xs">{filtro.intensidad}%</span>
                  </div>
                </div>
                <div className="w-full bg-green-900/20 rounded-full h-2 mb-2">
                  <div 
                    className={`h-2 rounded-full ${filtro.activo ? 'bg-green-500' : 'bg-gray-500'}`}
                    style={{ width: `${filtro.intensidad}%` }}
                  ></div>
                </div>
                <p className="text-xs text-green-400">{filtro.descripcion}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Los filtros atencionales optimizan el procesamiento pero pueden crear puntos ciegos. 
              Balance entre eficiencia y completitud de información es crucial.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "integracion" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Integración Multisensorial</h4>
          <p className="mb-4">Fusión de datos de múltiples canales sensoriales:</p>

          <div className="space-y-3">
            <div className="border border-green-500/30 rounded p-3">
              <h5 className="font-bold text-sm mb-2">Combinaciones Activas</h5>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span>• Visual + Auditivo (Audiovisual)</span>
                  <span className="text-green-400">Sincronización: 98%</span>
                </div>
                <div className="flex justify-between">
                  <span>• Visual + Táctil (Visuotáctil)</span>
                  <span className="text-green-400">Sincronización: 85%</span>
                </div>
                <div className="flex justify-between">
                  <span>• Auditivo + Táctil (Audiotáctil)</span>
                  <span className="text-yellow-400">Sincronización: 72%</span>
                </div>
                <div className="flex justify-between">
                  <span>• Olfativo + Gustativo</span>
                  <span className="text-green-400">Sincronización: 92%</span>
                </div>
              </div>
            </div>

            <div className="border border-green-500/30 rounded p-3">
              <h5 className="font-bold text-sm mb-2">Ventanas de Integración</h5>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span>Visual-Auditivo</span>
                  <span>±200ms</span>
                </div>
                <div className="flex justify-between">
                  <span>Visual-Táctil</span>
                  <span>±300ms</span>
                </div>
                <div className="flex justify-between">
                  <span>Auditivo-Táctil</span>
                  <span>±150ms</span>
                </div>
              </div>
            </div>

            <div className="border border-green-500/30 rounded p-3">
              <h5 className="font-bold text-sm mb-2">Efectos de Integración</h5>
              <div className="space-y-1 text-xs">
                <div>• Efecto McGurk: Activo (Audio-visual del habla)</div>
                <div>• Ilusión del ventrílocuo: Detectada</div>
                <div>• Efecto de la mano de goma: Susceptible</div>
                <div>• Sinestesia inducida: No detectada</div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              La integración multisensorial mejora la precisión perceptual pero puede generar 
              ilusiones cuando hay conflictos entre modalidades. Calibración regular recomendada.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "ilusiones" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Análisis de Ilusiones Sensoriales</h4>
          <p className="mb-4">Errores sistemáticos en el procesamiento sensorial:</p>

          <div className="space-y-3">
            <div className="border border-red-500/30 rounded p-3">
              <h5 className="font-bold text-sm mb-2 text-red-400">Ilusiones Visuales Detectadas</h5>
              <div className="space-y-1 text-xs">
                <div>• Ilusión de Müller-Lyer: Susceptibilidad alta</div>
                <div>• Ilusión de Ponzo: Susceptibilidad media</div>
                <div>• Contraste simultáneo: Susceptibilidad alta</div>
                <div>• Puntos ciegos: 2 detectados (normal)</div>
              </div>
            </div>

            <div className="border border-yellow-500/30 rounded p-3">
              <h5 className="font-bold text-sm mb-2 text-yellow-400">Ilusiones Auditivas</h5>
              <div className="space-y-1 text-xs">
                <div>• Efecto Doppler fantasma: Ocasional</div>
                <div>• Ilusión de octava: Susceptibilidad baja</div>
                <div>• Enmascaramiento auditivo: Normal</div>
                <div>• Pareidolia auditiva: Susceptibilidad media</div>
              </div>
            </div>

            <div className="border border-blue-500/30 rounded p-3">
              <h5 className="font-bold text-sm mb-2 text-blue-400">Ilusiones Táctiles</h5>
              <div className="space-y-1 text-xs">
                <div>• Ilusión de Aristóteles: Reproducible</div>
                <div>• Miembro fantasma: No aplicable</div>
                <div>• Adaptación táctil: Normal</div>
                <div>• Referencia cruzada: Ocasional</div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Las ilusiones revelan los algoritmos de procesamiento subyacentes. Conocer las 
              vulnerabilidades del sistema permite compensación consciente cuando sea necesario.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "memoria_sensorial" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Memoria Sensorial: Buffers de Entrada</h4>
          <p className="mb-4">Almacenamiento temporal de información sensorial antes del procesamiento:</p>

          <div className="space-y-3">
            <div className="border border-green-500/30 rounded p-3">
              <h5 className="font-bold text-sm mb-2">Memoria Icónica (Visual)</h5>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <div>Capacidad: ~9 elementos</div>
                  <div>Duración: 250-500ms</div>
                  <div>Resolución: Alta</div>
                </div>
                <div>
                  <div>Estado: Óptimo</div>
                  <div>Utilización: 65%</div>
                  <div>Latencia: 13ms</div>
                </div>
              </div>
            </div>

            <div className="border border-green-500/30 rounded p-3">
              <h5 className="font-bold text-sm mb-2">Memoria Ecoica (Auditiva)</h5>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <div>Capacidad: ~5 elementos</div>
                  <div>Duración: 2-4 segundos</div>
                  <div>Resolución: Media</div>
                </div>
                <div>
                  <div>Estado: Óptimo</div>
                  <div>Utilización: 45%</div>
                  <div>Latencia: 21ms</div>
                </div>
              </div>
            </div>

            <div className="border border-green-500/30 rounded p-3">
              <h5 className="font-bold text-sm mb-2">Memoria Háptica (Táctil)</h5>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <div>Capacidad: ~3 elementos</div>
                  <div>Duración: 1-2 segundos</div>
                  <div>Resolución: Variable</div>
                </div>
                <div>
                  <div>Estado: Normal</div>
                  <div>Utilización: 30%</div>
                  <div>Latencia: 35ms</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Los buffers sensoriales permiten procesamiento paralelo y detección de patrones. 
              Sobrecarga puede causar pérdida de información crítica.
            </p>
          </div>
        </div>
      )}

      <div className="mt-4 text-xs text-green-400">
        <p>Comandos disponibles: sistemas, filtros, integracion, calibracion, adaptacion, ilusiones, memoria_sensorial, sinestesia</p>
        <p>Comandos avanzados: diagnosticar, optimizar, resetear, calibrar, test_precision, analizar_ruido</p>
      </div>

      <div className="mt-6 border-t border-green-500 pt-4">
        <h4 className="font-bold mb-2">Arquitectura de Procesamiento Sensorial</h4>
        <pre className="text-xs overflow-x-auto">
          {`PIPELINE DE PROCESAMIENTO SENSORIAL

Estímulo → [Transducción] → [Buffer Sensorial] → [Filtros] → [Integración] → Percepción
   ↓              ↓              ↓               ↓           ↓
Hardware      Memoria        Atención      Multisensorial  Cognición
Sensorial     Sensorial      Selectiva     

┌─────────────────────────────────────────────────────────────────┐
│                    SISTEMAS SENSORIALES                        │
├─────────────┬─────────────┬─────────────┬─────────────────────┤
│   VISUAL    │   AUDITIVO  │   TÁCTIL    │      QUÍMICOS       │
│             │             │             │                     │
│ • Fotones   │ • Ondas     │ • Presión   │ • Olfativo         │
│ • Color     │   sonoras   │ • Textura   │ • Gustativo        │
│ • Movimiento│ • Frecuencia│ • Temp.     │ • Feromonas        │
│ • Profundidad│ • Volumen   │ • Dolor     │                    │
└─────────────┴─────────────┴─────────────┴─────────────────────┘
                              ↓
                    [INTEGRACIÓN CENTRAL]
                              ↓
                      EXPERIENCIA CONSCIENTE`}
        </pre>
      </div>
    </div>
  )
}