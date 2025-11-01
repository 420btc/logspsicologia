"use client"

import { useState } from "react"
import { Trophy, Target, Zap, TrendingUp, Battery, Star, Gift, Flame } from "lucide-react"

export default function SistemaRecompensas() {
  const [seccionActiva, setSeccionActiva] = useState<string | null>(null)
  const [circuitoSeleccionado, setCircuitoSeleccionado] = useState<string | null>(null)

  const neurotransmisores = [
    { nombre: "Dopamina", nivel: 75, funcion: "Motivación y recompensa", estado: "Óptimo" },
    { nombre: "Serotonina", nivel: 68, funcion: "Bienestar y satisfacción", estado: "Normal" },
    { nombre: "Noradrenalina", nivel: 82, funcion: "Alerta y energía", estado: "Elevado" },
    { nombre: "Endorfinas", nivel: 45, funcion: "Placer y analgesia", estado: "Bajo" },
    { nombre: "Oxitocina", nivel: 70, funcion: "Vínculo social", estado: "Normal" }
  ]

  const circuitosRecompensa = [
    { 
      nombre: "Circuito de Logro", 
      activacion: 85, 
      descripcion: "Completar tareas y alcanzar metas",
      triggers: ["Finalizar proyectos", "Superar desafíos", "Reconocimiento"]
    },
    { 
      nombre: "Circuito Social", 
      activacion: 70, 
      descripcion: "Interacciones sociales positivas",
      triggers: ["Conexión emocional", "Ayudar a otros", "Pertenencia grupal"]
    },
    { 
      nombre: "Circuito de Novedad", 
      activacion: 90, 
      descripcion: "Exploración y aprendizaje",
      triggers: ["Nuevas experiencias", "Conocimiento", "Creatividad"]
    },
    { 
      nombre: "Circuito de Supervivencia", 
      activacion: 60, 
      descripcion: "Necesidades básicas y seguridad",
      triggers: ["Alimentación", "Descanso", "Seguridad"]
    }
  ]

  const patronesMotivacion = [
    { tipo: "Motivación Intrínseca", nivel: 80, tendencia: "↗", descripcion: "Impulso interno por crecimiento" },
    { tipo: "Motivación Extrínseca", nivel: 55, tendencia: "→", descripcion: "Recompensas externas" },
    { tipo: "Motivación de Logro", nivel: 85, tendencia: "↗", descripcion: "Búsqueda de excelencia" },
    { tipo: "Motivación Social", nivel: 65, tendencia: "↗", descripcion: "Conexión e impacto social" }
  ]

  return (
    <div className="text-green-500">
      <h3 className="text-xl mb-4">Sistema de Recompensas: Motor Motivacional</h3>
      <p className="mb-4">
        El sistema de recompensas como motor de la motivación y el aprendizaje, regulando 
        la liberación de neurotransmisores para reforzar comportamientos adaptativos.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div
          onClick={() => setSeccionActiva(seccionActiva === "neurotransmisores" ? null : "neurotransmisores")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "neurotransmisores" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Zap className="mb-2" />
          <h4 className="font-bold">Neurotransmisores</h4>
          <p className="text-xs">Química de la motivación</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "circuitos" ? null : "circuitos")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "circuitos" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Target className="mb-2" />
          <h4 className="font-bold">Circuitos de Recompensa</h4>
          <p className="text-xs">Sistemas especializados</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "motivacion" ? null : "motivacion")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "motivacion" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Flame className="mb-2" />
          <h4 className="font-bold">Patrones Motivacionales</h4>
          <p className="text-xs">Tipos de motivación</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "adiccion" ? null : "adiccion")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "adiccion" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Battery className="mb-2" />
          <h4 className="font-bold">Análisis de Dependencias</h4>
          <p className="text-xs">Patrones adictivos</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "habitos" ? null : "habitos")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "habitos" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <TrendingUp className="mb-2" />
          <h4 className="font-bold">Formación de Hábitos</h4>
          <p className="text-xs">Automatización de comportamientos</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "prediccion" ? null : "prediccion")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "prediccion" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Star className="mb-2" />
          <h4 className="font-bold">Predicción de Recompensas</h4>
          <p className="text-xs">Expectativas y anticipación</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "optimizacion" ? null : "optimizacion")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "optimizacion" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Trophy className="mb-2" />
          <h4 className="font-bold">Optimización Motivacional</h4>
          <p className="text-xs">Mejora del sistema</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "gamificacion" ? null : "gamificacion")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "gamificacion" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Gift className="mb-2" />
          <h4 className="font-bold">Gamificación Personal</h4>
          <p className="text-xs">Diseño de recompensas</p>
        </div>
      </div>

      {seccionActiva === "neurotransmisores" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Estado de Neurotransmisores</h4>
          <p className="mb-4">Niveles actuales de los químicos de la motivación:</p>

          <div className="space-y-3">
            {neurotransmisores.map((nt, index) => (
              <div key={index} className="border border-green-500/30 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">{nt.nombre}</span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    nt.estado === 'Óptimo' ? 'bg-green-500 text-black' :
                    nt.estado === 'Normal' ? 'bg-yellow-500 text-black' :
                    nt.estado === 'Elevado' ? 'bg-blue-500 text-black' :
                    'bg-red-500 text-black'
                  }`}>
                    {nt.estado}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm">Nivel</span>
                  <span className="text-sm">{nt.nivel}%</span>
                </div>
                <div className="w-full bg-green-900/20 rounded-full h-2 mb-2">
                  <div 
                    className={`h-2 rounded-full ${
                      nt.nivel >= 70 ? 'bg-green-500' :
                      nt.nivel >= 50 ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`}
                    style={{ width: `${nt.nivel}%` }}
                  ></div>
                </div>
                <p className="text-xs text-green-400">{nt.funcion}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Desequilibrios en neurotransmisores pueden afectar motivación y bienestar. 
              Monitoreo regular permite ajustes en estilo de vida y actividades.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "circuitos" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Circuitos de Recompensa Especializados</h4>
          <p className="mb-4">Sistemas neurales dedicados a diferentes tipos de recompensas:</p>

          <div className="space-y-3">
            {circuitosRecompensa.map((circuito, index) => (
              <div key={index} className="border border-green-500/30 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">{circuito.nombre}</span>
                  <span className="text-sm">{circuito.activacion}% activo</span>
                </div>
                <div className="w-full bg-green-900/20 rounded-full h-2 mb-3">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: `${circuito.activacion}%` }}
                  ></div>
                </div>
                <p className="text-xs text-green-400 mb-2">{circuito.descripcion}</p>
                <div className="text-xs">
                  <span className="font-bold">Triggers principales:</span>
                  <div className="mt-1">
                    {circuito.triggers.map((trigger, i) => (
                      <span key={i} className="inline-block bg-green-900/20 px-2 py-1 rounded mr-2 mb-1">
                        {trigger}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Circuitos hipoactivos pueden indicar áreas de mejora motivacional. 
              Activación balanceada optimiza bienestar y productividad.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "motivacion" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Patrones Motivacionales</h4>
          <p className="mb-4">Análisis de los diferentes tipos de motivación y sus tendencias:</p>

          <div className="space-y-3">
            {patronesMotivacion.map((patron, index) => (
              <div key={index} className="border border-green-500/30 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">{patron.tipo}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{patron.tendencia}</span>
                    <span className="text-sm">{patron.nivel}%</span>
                  </div>
                </div>
                <div className="w-full bg-green-900/20 rounded-full h-2 mb-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: `${patron.nivel}%` }}
                  ></div>
                </div>
                <p className="text-xs text-green-400">{patron.descripcion}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 border border-green-500/30 rounded p-3">
            <h5 className="font-bold text-sm mb-2">Análisis de Equilibrio Motivacional</h5>
            <div className="text-xs space-y-1">
              <div>• Ratio Intrínseca/Extrínseca: 1.45 (Saludable)</div>
              <div>• Sostenibilidad a largo plazo: Alta</div>
              <div>• Resistencia al burnout: Media-Alta</div>
              <div>• Flexibilidad motivacional: Alta</div>
            </div>
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Balance saludable entre motivación intrínseca y extrínseca. Tendencias positivas 
              indican sistema motivacional robusto y adaptativo.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "habitos" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Formación y Mantenimiento de Hábitos</h4>
          <p className="mb-4">Análisis del proceso de automatización de comportamientos:</p>

          <div className="space-y-3">
            <div className="border border-green-500/30 rounded p-3">
              <h5 className="font-bold text-sm mb-2">Hábitos en Formación</h5>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs">Ejercicio matutino</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-green-900/20 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                    <span className="text-xs">65% (Día 18)</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs">Meditación diaria</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-green-900/20 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "45%" }}></div>
                    </div>
                    <span className="text-xs">45% (Día 12)</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs">Lectura nocturna</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-green-900/20 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                    <span className="text-xs">80% (Día 25)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-green-500/30 rounded p-3">
              <h5 className="font-bold text-sm mb-2">Hábitos Establecidos</h5>
              <div className="text-xs space-y-1">
                <div className="flex justify-between">
                  <span>• Higiene personal</span>
                  <span className="text-green-400">Automatizado (95%)</span>
                </div>
                <div className="flex justify-between">
                  <span>• Revisión de emails</span>
                  <span className="text-green-400">Automatizado (90%)</span>
                </div>
                <div className="flex justify-between">
                  <span>• Preparación de café</span>
                  <span className="text-green-400">Automatizado (98%)</span>
                </div>
              </div>
            </div>

            <div className="border border-red-500/30 rounded p-3">
              <h5 className="font-bold text-sm mb-2 text-red-400">Hábitos Problemáticos</h5>
              <div className="text-xs space-y-1">
                <div className="flex justify-between">
                  <span>• Revisión compulsiva de redes sociales</span>
                  <span className="text-red-400">Fuerte (85%)</span>
                </div>
                <div className="flex justify-between">
                  <span>• Procrastinación en tareas complejas</span>
                  <span className="text-yellow-400">Moderado (60%)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Los hábitos en formación muestran progreso positivo. Hábitos problemáticos requieren 
              intervención consciente y reemplazo por alternativas más saludables.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "gamificacion" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Sistema de Gamificación Personal</h4>
          <p className="mb-4">Diseño de recompensas para optimizar motivación y engagement:</p>

          <div className="space-y-3">
            <div className="border border-green-500/30 rounded p-3">
              <h5 className="font-bold text-sm mb-2">Logros Desbloqueados</h5>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <Trophy size={12} className="text-yellow-400" />
                  <span>Racha de 7 días ejercicio</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={12} className="text-blue-400" />
                  <span>Completar proyecto complejo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target size={12} className="text-green-400" />
                  <span>Meta mensual de lectura</span>
                </div>
                <div className="flex items-center gap-2">
                  <Flame size={12} className="text-red-400" />
                  <span>Superar zona de confort</span>
                </div>
              </div>
            </div>

            <div className="border border-green-500/30 rounded p-3">
              <h5 className="font-bold text-sm mb-2">Progreso Actual</h5>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Nivel de Productividad</span>
                    <span>Nivel 8 (2,340 XP)</span>
                  </div>
                  <div className="w-full bg-green-900/20 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                  <div className="text-xs text-green-400 mt-1">660 XP para siguiente nivel</div>
                </div>
                
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Nivel de Bienestar</span>
                    <span>Nivel 6 (1,820 XP)</span>
                  </div>
                  <div className="w-full bg-blue-900/20 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                  </div>
                  <div className="text-xs text-blue-400 mt-1">480 XP para siguiente nivel</div>
                </div>
              </div>
            </div>

            <div className="border border-green-500/30 rounded p-3">
              <h5 className="font-bold text-sm mb-2">Recompensas Pendientes</h5>
              <div className="text-xs space-y-1">
                <div>• Descanso de 30 min (Completar 5 tareas)</div>
                <div>• Compra especial (Alcanzar meta semanal)</div>
                <div>• Actividad social (Mantener hábito 14 días)</div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              El sistema de gamificación mantiene engagement alto. Balance entre recompensas 
              intrínsecas y extrínsecas optimiza motivación sostenible.
            </p>
          </div>
        </div>
      )}

      <div className="mt-4 text-xs text-green-400">
        <p>Comandos disponibles: neurotransmisores, circuitos, motivacion, adiccion, habitos, prediccion, optimizacion, gamificacion</p>
        <p>Comandos avanzados: calibrar_dopamina, crear_habito, romper_habito, analizar_patron, optimizar_recompensas</p>
      </div>

      <div className="mt-6 border-t border-green-500 pt-4">
        <h4 className="font-bold mb-2">Arquitectura del Sistema de Recompensas</h4>
        <pre className="text-xs overflow-x-auto">
          {`SISTEMA DE RECOMPENSAS Y MOTIVACIÓN

                    [ESTÍMULO/OBJETIVO]
                           │
                           ▼
                  [EVALUACIÓN DE VALOR]
                           │
                    ┌──────┴──────┐
                    │             │
                    ▼             ▼
            [EXPECTATIVA]    [ESFUERZO]
                    │             │
                    └──────┬──────┘
                           │
                           ▼
                [LIBERACIÓN DOPAMINA]
                           │
                    ┌──────┴──────┐
                    │             │
                    ▼             ▼
              [MOTIVACIÓN]   [APRENDIZAJE]
                    │             │
                    ▼             ▼
               [ACCIÓN]      [MEMORIA]
                    │             │
                    └──────┬──────┘
                           │
                           ▼
                    [RESULTADO]
                           │
                           ▼
              [ACTUALIZACIÓN PREDICCIÓN]

Neurotransmisores Clave:
• Dopamina: Motivación y predicción
• Serotonina: Satisfacción y bienestar
• Noradrenalina: Alerta y energía
• Endorfinas: Placer y recompensa`}
        </pre>
      </div>
    </div>
  )
}