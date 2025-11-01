"use client"

import { useState } from "react"
import { Brain, Eye, Lightbulb, Layers, Compass, Mirror, Cog, BookOpen } from "lucide-react"

export default function SistemaMetacognicion() {
  const [seccionActiva, setSeccionActiva] = useState<string | null>(null)
  const [procesoSeleccionado, setProcesoSeleccionado] = useState<string | null>(null)

  const nivelesConciencia = [
    { nivel: "Inconsciente", actividad: 85, descripcion: "Procesos automáticos y subliminales" },
    { nivel: "Preconsciente", actividad: 60, descripcion: "Información accesible bajo demanda" },
    { nivel: "Consciente", actividad: 40, descripcion: "Atención focal actual" },
    { nivel: "Metaconsciente", actividad: 25, descripcion: "Conciencia de la conciencia" }
  ]

  const procesosMetacognitivos = [
    { 
      nombre: "Monitoreo Cognitivo", 
      eficiencia: 75, 
      descripcion: "Supervisión de procesos mentales en tiempo real",
      componentes: ["Detección de errores", "Evaluación de comprensión", "Seguimiento de progreso"]
    },
    { 
      nombre: "Control Ejecutivo", 
      eficiencia: 68, 
      descripcion: "Regulación y dirección de procesos cognitivos",
      componentes: ["Planificación", "Inhibición", "Flexibilidad cognitiva"]
    },
    { 
      nombre: "Metamemoria", 
      eficiencia: 80, 
      descripcion: "Conocimiento sobre la propia memoria",
      componentes: ["Juicios de aprendizaje", "Sensación de saber", "Confianza en recuerdos"]
    },
    { 
      nombre: "Metaatención", 
      eficiencia: 65, 
      descripcion: "Conciencia y control de la atención",
      componentes: ["Foco atencional", "Resistencia a distractores", "Cambio de foco"]
    }
  ]

  const estrategiasAprendizaje = [
    { estrategia: "Elaboración", uso: 85, efectividad: 90, tipo: "Profunda" },
    { estrategia: "Organización", uso: 70, efectividad: 85, tipo: "Profunda" },
    { estrategia: "Autorregulación", uso: 60, efectividad: 95, tipo: "Metacognitiva" },
    { estrategia: "Repetición", uso: 40, efectividad: 50, tipo: "Superficial" },
    { estrategia: "Ensayo", uso: 55, efectividad: 60, tipo: "Superficial" }
  ]

  const sesgosMetacognitivos = [
    { sesgo: "Efecto Dunning-Kruger", intensidad: 30, descripcion: "Sobreestimación de competencia en áreas de baja habilidad" },
    { sesgo: "Ilusión de Conocimiento", intensidad: 45, descripcion: "Confundir familiaridad con comprensión" },
    { sesgo: "Sesgo de Confirmación Metacognitivo", intensidad: 40, descripcion: "Buscar evidencia que confirme nuestras creencias sobre nuestro pensamiento" },
    { sesgo: "Efecto de Fluidez", intensidad: 35, descripcion: "Confundir facilidad de procesamiento con verdad o importancia" }
  ]

  return (
    <div className="text-green-500">
      <h3 className="text-xl mb-4">Sistema de Metacognición: Pensamiento sobre el Pensamiento</h3>
      <p className="mb-4">
        La metacognición como sistema de monitoreo y control de los propios procesos cognitivos, 
        permitiendo la autorregulación del aprendizaje y la toma de decisiones consciente.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div
          onClick={() => setSeccionActiva(seccionActiva === "conciencia" ? null : "conciencia")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "conciencia" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Eye className="mb-2" />
          <h4 className="font-bold">Niveles de Conciencia</h4>
          <p className="text-xs">Capas de procesamiento mental</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "procesos" ? null : "procesos")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "procesos" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Cog className="mb-2" />
          <h4 className="font-bold">Procesos Metacognitivos</h4>
          <p className="text-xs">Monitoreo y control</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "estrategias" ? null : "estrategias")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "estrategias" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <BookOpen className="mb-2" />
          <h4 className="font-bold">Estrategias de Aprendizaje</h4>
          <p className="text-xs">Técnicas metacognitivas</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "sesgos" ? null : "sesgos")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "sesgos" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Mirror className="mb-2" />
          <h4 className="font-bold">Sesgos Metacognitivos</h4>
          <p className="text-xs">Errores de autoevaluación</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "autorregulacion" ? null : "autorregulacion")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "autorregulacion" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Compass className="mb-2" />
          <h4 className="font-bold">Autorregulación</h4>
          <p className="text-xs">Control del aprendizaje</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "teoria_mente" ? null : "teoria_mente")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "teoria_mente" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Brain className="mb-2" />
          <h4 className="font-bold">Teoría de la Mente</h4>
          <p className="text-xs">Modelo mental de otros</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "reflexion" ? null : "reflexion")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "reflexion" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Lightbulb className="mb-2" />
          <h4 className="font-bold">Reflexión Metacognitiva</h4>
          <p className="text-xs">Análisis del pensamiento</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "desarrollo" ? null : "desarrollo")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "desarrollo" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Layers className="mb-2" />
          <h4 className="font-bold">Desarrollo Metacognitivo</h4>
          <p className="text-xs">Evolución de la conciencia</p>
        </div>
      </div>

      {seccionActiva === "conciencia" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Niveles de Conciencia y Procesamiento</h4>
          <p className="mb-4">Análisis de las capas de procesamiento mental y su actividad:</p>

          <div className="space-y-3">
            {nivelesConciencia.map((nivel, index) => (
              <div key={index} className="border border-green-500/30 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">{nivel.nivel}</span>
                  <span className="text-sm">{nivel.actividad}% activo</span>
                </div>
                <div className="w-full bg-green-900/20 rounded-full h-2 mb-2">
                  <div 
                    className={`h-2 rounded-full ${
                      nivel.nivel === 'Inconsciente' ? 'bg-red-500' :
                      nivel.nivel === 'Preconsciente' ? 'bg-yellow-500' :
                      nivel.nivel === 'Consciente' ? 'bg-blue-500' :
                      'bg-green-500'
                    }`}
                    style={{ width: `${nivel.actividad}%` }}
                  ></div>
                </div>
                <p className="text-xs text-green-400">{nivel.descripcion}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 border border-green-500/30 rounded p-3">
            <h5 className="font-bold text-sm mb-2">Análisis de Distribución Cognitiva</h5>
            <div className="text-xs space-y-1">
              <div>• Carga cognitiva total: 210% (distribuida)</div>
              <div>• Eficiencia del procesamiento consciente: 65%</div>
              <div>• Capacidad metacognitiva disponible: 35%</div>
              <div>• Interferencia entre niveles: Mínima</div>
            </div>
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              La distribución de actividad muestra procesamiento eficiente. Alto nivel inconsciente 
              indica automatización saludable, mientras que actividad metaconsciente permite autorregulación.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "procesos" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Procesos Metacognitivos Especializados</h4>
          <p className="mb-4">Sistemas de monitoreo y control de la cognición:</p>

          <div className="space-y-3">
            {procesosMetacognitivos.map((proceso, index) => (
              <div key={index} className="border border-green-500/30 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">{proceso.nombre}</span>
                  <span className="text-sm">{proceso.eficiencia}% eficiencia</span>
                </div>
                <div className="w-full bg-green-900/20 rounded-full h-2 mb-3">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: `${proceso.eficiencia}%` }}
                  ></div>
                </div>
                <p className="text-xs text-green-400 mb-2">{proceso.descripcion}</p>
                <div className="text-xs">
                  <span className="font-bold">Componentes activos:</span>
                  <div className="mt-1">
                    {proceso.componentes.map((comp, i) => (
                      <span key={i} className="inline-block bg-green-900/20 px-2 py-1 rounded mr-2 mb-1">
                        {comp}
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
              Los procesos metacognitivos muestran funcionamiento adecuado. Metamemoria destaca 
              con alta eficiencia, mientras que metaatención requiere optimización.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "estrategias" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Estrategias de Aprendizaje y su Efectividad</h4>
          <p className="mb-4">Análisis del uso y efectividad de diferentes técnicas de aprendizaje:</p>

          <div className="space-y-3">
            {estrategiasAprendizaje.map((estrategia, index) => (
              <div key={index} className="border border-green-500/30 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">{estrategia.estrategia}</span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    estrategia.tipo === 'Profunda' ? 'bg-green-500 text-black' :
                    estrategia.tipo === 'Metacognitiva' ? 'bg-blue-500 text-black' :
                    'bg-yellow-500 text-black'
                  }`}>
                    {estrategia.tipo}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-2">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Uso</span>
                      <span>{estrategia.uso}%</span>
                    </div>
                    <div className="w-full bg-green-900/20 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${estrategia.uso}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Efectividad</span>
                      <span>{estrategia.efectividad}%</span>
                    </div>
                    <div className="w-full bg-green-900/20 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${estrategia.efectividad}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <div className="text-xs text-green-400">
                  Ratio Efectividad/Uso: {(estrategia.efectividad / estrategia.uso).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 border border-green-500/30 rounded p-3">
            <h5 className="font-bold text-sm mb-2">Recomendaciones de Optimización</h5>
            <div className="text-xs space-y-1">
              <div>• Incrementar uso de autorregulación (alta efectividad, bajo uso)</div>
              <div>• Reducir dependencia de repetición (baja efectividad)</div>
              <div>• Mantener estrategias de elaboración y organización</div>
              <div>• Desarrollar más técnicas metacognitivas</div>
            </div>
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Perfil de estrategias muestra preferencia por técnicas profundas. Oportunidad de 
              mejora en autorregulación y reducción de estrategias superficiales.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "sesgos" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Sesgos Metacognitivos Detectados</h4>
          <p className="mb-4">Errores sistemáticos en la autoevaluación y metacognición:</p>

          <div className="space-y-3">
            {sesgosMetacognitivos.map((sesgo, index) => (
              <div key={index} className="border border-red-500/30 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-red-400">{sesgo.sesgo}</span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    sesgo.intensidad >= 50 ? 'bg-red-500 text-black' :
                    sesgo.intensidad >= 30 ? 'bg-yellow-500 text-black' :
                    'bg-green-500 text-black'
                  }`}>
                    {sesgo.intensidad >= 50 ? 'Alto' : sesgo.intensidad >= 30 ? 'Medio' : 'Bajo'}
                  </span>
                </div>
                <div className="w-full bg-red-900/20 rounded-full h-2 mb-2">
                  <div 
                    className={`h-2 rounded-full ${
                      sesgo.intensidad >= 50 ? 'bg-red-500' :
                      sesgo.intensidad >= 30 ? 'bg-yellow-500' :
                      'bg-green-500'
                    }`}
                    style={{ width: `${sesgo.intensidad}%` }}
                  ></div>
                </div>
                <p className="text-xs text-red-400">{sesgo.descripcion}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 border border-yellow-500/30 rounded p-3">
            <h5 className="font-bold text-sm mb-2 text-yellow-400">Estrategias de Mitigación</h5>
            <div className="text-xs space-y-1">
              <div>• Buscar feedback externo regular</div>
              <div>• Practicar autoevaluación calibrada</div>
              <div>• Cuestionar la confianza en el conocimiento</div>
              <div>• Implementar verificaciones cruzadas</div>
              <div>• Desarrollar humildad intelectual</div>
            </div>
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Sesgos metacognitivos en niveles moderados. La ilusión de conocimiento requiere 
              atención especial. Implementar estrategias de verificación y calibración.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "reflexion" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Sistema de Reflexión Metacognitiva</h4>
          <p className="mb-4">Análisis profundo de los propios procesos de pensamiento:</p>

          <div className="space-y-3">
            <div className="border border-green-500/30 rounded p-3">
              <h5 className="font-bold text-sm mb-2">Preguntas Metacognitivas Activas</h5>
              <div className="text-xs space-y-2">
                <div className="bg-green-900/20 p-2 rounded">
                  <span className="font-bold">¿Qué sé sobre este tema?</span>
                  <div className="mt-1">Evaluación del conocimiento previo y lagunas identificadas</div>
                </div>
                <div className="bg-blue-900/20 p-2 rounded">
                  <span className="font-bold">¿Cómo estoy aprendiendo esto?</span>
                  <div className="mt-1">Monitoreo de estrategias y su efectividad</div>
                </div>
                <div className="bg-yellow-900/20 p-2 rounded">
                  <span className="font-bold">¿Qué tan bien lo entiendo?</span>
                  <div className="mt-1">Calibración de la comprensión y confianza</div>
                </div>
                <div className="bg-purple-900/20 p-2 rounded">
                  <span className="font-bold">¿Qué debo hacer diferente?</span>
                  <div className="mt-1">Ajustes y optimizaciones necesarias</div>
                </div>
              </div>
            </div>

            <div className="border border-green-500/30 rounded p-3">
              <h5 className="font-bold text-sm mb-2">Ciclo de Reflexión Metacognitiva</h5>
              <div className="text-xs">
                <div className="flex items-center justify-between mb-2">
                  <span>1. Planificación</span>
                  <span className="text-green-400">Activo</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span>2. Monitoreo</span>
                  <span className="text-green-400">Activo</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span>3. Evaluación</span>
                  <span className="text-yellow-400">Parcial</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span>4. Reflexión</span>
                  <span className="text-red-400">Pendiente</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              El sistema de reflexión está parcialmente activo. Se requiere completar el ciclo 
              con evaluación y reflexión sistemáticas para optimizar el aprendizaje.
            </p>
          </div>
        </div>
      )}

      <div className="mt-4 text-xs text-green-400">
        <p>Comandos disponibles: conciencia, procesos, estrategias, sesgos, autorregulacion, teoria_mente, reflexion, desarrollo</p>
        <p>Comandos avanzados: calibrar_metacognicion, evaluar_comprension, optimizar_estrategias, detectar_sesgos, reflexionar</p>
      </div>

      <div className="mt-6 border-t border-green-500 pt-4">
        <h4 className="font-bold mb-2">Arquitectura del Sistema Metacognitivo</h4>
        <pre className="text-xs overflow-x-auto">
          {`SISTEMA DE METACOGNICIÓN

                    [EXPERIENCIA/TAREA]
                           │
                           ▼
                  [CONOCIMIENTO METACOGNITIVO]
                    │                    │
                    ▼                    ▼
            [SOBRE PERSONA]      [SOBRE TAREA]      [SOBRE ESTRATEGIA]
                    │                    │                    │
                    └────────────────────┼────────────────────┘
                                         │
                                         ▼
                              [EXPERIENCIAS METACOGNITIVAS]
                                         │
                                         ▼
                              [OBJETIVOS/PLANES METACOGNITIVOS]
                                         │
                                ┌────────┴────────┐
                                │                 │
                                ▼                 ▼
                        [MONITOREO]        [CONTROL]
                                │                 │
                                ▼                 ▼
                      [Juicios de         [Selección de
                       Aprendizaje]        Estrategias]
                                │                 │
                                └────────┬────────┘
                                         │
                                         ▼
                                [AUTORREGULACIÓN]
                                         │
                                         ▼
                                   [RESULTADO]

Componentes Clave:
• Conocimiento metacognitivo: Saber sobre el saber
• Experiencias metacognitivas: Sensaciones cognitivas
• Monitoreo: Supervisión de procesos
• Control: Regulación de estrategias`}
        </pre>
      </div>
    </div>
  )
}