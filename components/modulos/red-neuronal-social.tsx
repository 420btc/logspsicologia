"use client"

import { useState } from "react"
import { Users, Network, MessageCircle, Eye, Handshake, Zap, Globe, UserCheck } from "lucide-react"

export default function RedNeuronalSocial() {
  const [seccionActiva, setSeccionActiva] = useState<string | null>(null)
  const [conexionSeleccionada, setConexionSeleccionada] = useState<string | null>(null)

  const conexionesSociales = [
    { nombre: "Familia Nuclear", fuerza: 95, tipo: "Primaria", estado: "Activa", influencia: "Alta" },
    { nombre: "Círculo Íntimo", fuerza: 85, tipo: "Primaria", estado: "Activa", influencia: "Alta" },
    { nombre: "Colegas Trabajo", fuerza: 60, tipo: "Secundaria", estado: "Activa", influencia: "Media" },
    { nombre: "Conocidos", fuerza: 30, tipo: "Terciaria", estado: "Latente", influencia: "Baja" },
    { nombre: "Comunidad Online", fuerza: 45, tipo: "Virtual", estado: "Activa", influencia: "Media" }
  ]

  const patronesComunicacion = [
    { patron: "Comunicación Directa", frecuencia: 70, efectividad: 85 },
    { patron: "Comunicación Indirecta", frecuencia: 25, efectividad: 60 },
    { patron: "Comunicación No Verbal", frecuencia: 90, efectividad: 75 },
    { patron: "Comunicación Digital", frecuencia: 80, efectividad: 65 }
  ]

  return (
    <div className="text-green-500">
      <h3 className="text-xl mb-4">Red Neuronal Social: Conexiones Interpersonales</h3>
      <p className="mb-4">
        El sistema social como red neuronal distribuida donde cada conexión interpersonal 
        funciona como una sinapsis que procesa, almacena y transmite información social.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div
          onClick={() => setSeccionActiva(seccionActiva === "topologia" ? null : "topologia")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "topologia" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Network className="mb-2" />
          <h4 className="font-bold">Topología de Red</h4>
          <p className="text-xs">Estructura de conexiones</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "nodos" ? null : "nodos")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "nodos" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Users className="mb-2" />
          <h4 className="font-bold">Análisis de Nodos</h4>
          <p className="text-xs">Personas clave en la red</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "comunicacion" ? null : "comunicacion")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "comunicacion" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <MessageCircle className="mb-2" />
          <h4 className="font-bold">Patrones de Comunicación</h4>
          <p className="text-xs">Protocolos de intercambio</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "teoria" ? null : "teoria")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "teoria" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Eye className="mb-2" />
          <h4 className="font-bold">Teoría de la Mente</h4>
          <p className="text-xs">Modelado de otros sistemas</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "influencia" ? null : "influencia")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "influencia" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Zap className="mb-2" />
          <h4 className="font-bold">Propagación de Influencia</h4>
          <p className="text-xs">Transmisión de información</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "confianza" ? null : "confianza")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "confianza" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Handshake className="mb-2" />
          <h4 className="font-bold">Sistema de Confianza</h4>
          <p className="text-xs">Validación y credibilidad</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "grupos" ? null : "grupos")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "grupos" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Globe className="mb-2" />
          <h4 className="font-bold">Dinámicas Grupales</h4>
          <p className="text-xs">Comportamiento colectivo</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "empatia" ? null : "empatia")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "empatia" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <UserCheck className="mb-2" />
          <h4 className="font-bold">Sistema Empático</h4>
          <p className="text-xs">Resonancia emocional</p>
        </div>
      </div>

      {seccionActiva === "topologia" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Topología de la Red Social</h4>
          <p className="mb-4">Estructura y organización de las conexiones interpersonales:</p>

          <div className="space-y-3">
            {conexionesSociales.map((conexion, index) => (
              <div key={index} className="border border-green-500/30 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">{conexion.nombre}</span>
                  <div className="flex gap-2 text-xs">
                    <span className={`px-2 py-1 rounded ${conexion.estado === 'Activa' ? 'bg-green-500 text-black' : 'bg-gray-600'}`}>
                      {conexion.estado}
                    </span>
                    <span className="px-2 py-1 rounded bg-blue-600">{conexion.tipo}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm">Fuerza de Conexión</span>
                  <span className="text-sm">{conexion.fuerza}%</span>
                </div>
                <div className="w-full bg-green-900/20 rounded-full h-2 mb-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: `${conexion.fuerza}%` }}
                  ></div>
                </div>
                <p className="text-xs text-green-400">Influencia: {conexion.influencia}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              La densidad de conexiones primarias indica estabilidad emocional. Redes muy centralizadas 
              pueden crear vulnerabilidades ante la pérdida de nodos clave.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "comunicacion" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Patrones de Comunicación</h4>
          <p className="mb-4">Análisis de protocolos y eficiencia comunicativa:</p>

          <div className="space-y-3">
            {patronesComunicacion.map((patron, index) => (
              <div key={index} className="border border-green-500/30 rounded p-3">
                <h5 className="font-bold text-sm mb-2">{patron.patron}</h5>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Frecuencia de Uso</span>
                      <span>{patron.frecuencia}%</span>
                    </div>
                    <div className="w-full bg-blue-900/20 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${patron.frecuencia}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Efectividad</span>
                      <span>{patron.efectividad}%</span>
                    </div>
                    <div className="w-full bg-green-900/20 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${patron.efectividad}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Discrepancias entre frecuencia y efectividad sugieren patrones subóptimos. 
              La optimización requiere aumentar el uso de protocolos más efectivos.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "teoria" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Teoría de la Mente: Modelado de Otros Sistemas</h4>
          <p className="mb-4">Capacidad de simular y predecir el comportamiento de otros agentes:</p>

          <div className="space-y-3">
            <div className="border border-green-500/30 rounded p-3">
              <h5 className="font-bold text-sm mb-2">Niveles de Modelado</h5>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span>• Nivel 1: Intenciones básicas</span>
                  <span className="text-green-400">95% precisión</span>
                </div>
                <div className="flex justify-between">
                  <span>• Nivel 2: Creencias sobre creencias</span>
                  <span className="text-yellow-400">78% precisión</span>
                </div>
                <div className="flex justify-between">
                  <span>• Nivel 3: Meta-creencias complejas</span>
                  <span className="text-red-400">45% precisión</span>
                </div>
              </div>
            </div>

            <div className="border border-green-500/30 rounded p-3">
              <h5 className="font-bold text-sm mb-2">Sesgos de Modelado Detectados</h5>
              <div className="space-y-1 text-xs">
                <div>• Proyección de valores propios: Moderado</div>
                <div>• Sesgo de confirmación: Alto</div>
                <div>• Error de atribución fundamental: Bajo</div>
                <div>• Efecto halo: Moderado</div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Los sesgos sistemáticos en el modelado pueden generar malentendidos recurrentes. 
              La calibración requiere feedback constante y actualización de modelos.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "influencia" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Propagación de Influencia en la Red</h4>
          <p className="mb-4">Análisis de cómo se transmite información e influencia a través de conexiones:</p>

          <div className="space-y-3">
            <div className="border border-green-500/30 rounded p-3">
              <h5 className="font-bold text-sm mb-2">Vectores de Influencia</h5>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <div className="font-bold">Influencia Recibida</div>
                  <div>• Familia: 35%</div>
                  <div>• Amigos cercanos: 25%</div>
                  <div>• Medios/Internet: 20%</div>
                  <div>• Colegas: 15%</div>
                  <div>• Otros: 5%</div>
                </div>
                <div>
                  <div className="font-bold">Influencia Ejercida</div>
                  <div>• Círculo íntimo: 40%</div>
                  <div>• Colegas: 30%</div>
                  <div>• Comunidad online: 20%</div>
                  <div>• Conocidos: 10%</div>
                </div>
              </div>
            </div>

            <div className="border border-green-500/30 rounded p-3">
              <h5 className="font-bold text-sm mb-2">Métricas de Propagación</h5>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span>Velocidad de propagación</span>
                  <span>2.3 saltos/hora</span>
                </div>
                <div className="flex justify-between">
                  <span>Alcance máximo</span>
                  <span>4 grados de separación</span>
                </div>
                <div className="flex justify-between">
                  <span>Fidelidad del mensaje</span>
                  <span>67% después de 3 saltos</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              La degradación de fidelidad en la transmisión puede generar distorsiones significativas. 
              Verificación directa recomendada para información crítica.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "empatia" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Sistema Empático: Resonancia Emocional</h4>
          <p className="mb-4">Mecanismos de sincronización emocional y comprensión interpersonal:</p>

          <div className="space-y-3">
            <div className="border border-green-500/30 rounded p-3">
              <h5 className="font-bold text-sm mb-2">Tipos de Empatía</h5>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs">Empatía Cognitiva</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-green-900/20 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                    <span className="text-xs">85%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs">Empatía Afectiva</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-green-900/20 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "72%" }}></div>
                    </div>
                    <span className="text-xs">72%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs">Empatía Compasiva</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-green-900/20 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "68%" }}></div>
                    </div>
                    <span className="text-xs">68%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-green-500/30 rounded p-3">
              <h5 className="font-bold text-sm mb-2">Regulación Empática</h5>
              <div className="text-xs space-y-1">
                <div>• Filtros de protección: Activos</div>
                <div>• Límites emocionales: Bien definidos</div>
                <div>• Recuperación post-resonancia: 15 minutos promedio</div>
                <div>• Sobrecarga empática: Riesgo bajo</div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              El equilibrio entre resonancia y protección es crucial. Empatía excesiva puede 
              comprometer el funcionamiento, mientras que muy poca limita la conexión social.
            </p>
          </div>
        </div>
      )}

      <div className="mt-4 text-xs text-green-400">
        <p>Comandos disponibles: topologia, nodos, comunicacion, teoria, influencia, confianza, grupos, empatia</p>
        <p>Comandos avanzados: mapear, analizar, optimizar, sincronizar, calibrar, expandir</p>
      </div>

      <div className="mt-6 border-t border-green-500 pt-4">
        <h4 className="font-bold mb-2">Diagrama de Red Social</h4>
        <pre className="text-xs overflow-x-auto">
          {`RED NEURONAL SOCIAL
                    [YO]
                     │
        ┌────────────┼────────────┐
        │            │            │
    [Familia]   [Amigos]    [Colegas]
        │            │            │
    ┌───┴───┐    ┌───┴───┐    ┌───┴───┐
   [P1][P2]    [A1][A2]    [C1][C2]
        │            │            │
    [Ext-F]      [Ext-A]      [Ext-C]
        │            │            │
        └────────────┼────────────┘
                     │
              [Comunidad Global]

Leyenda:
━━━ Conexión Primaria (Alta influencia)
─── Conexión Secundaria (Media influencia)
┄┄┄ Conexión Terciaria (Baja influencia)
● Nodo activo  ○ Nodo latente`}
        </pre>
      </div>
    </div>
  )
}