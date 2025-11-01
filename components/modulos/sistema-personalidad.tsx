"use client"

import { useState } from "react"
import { User, Layers, Target, Zap, Shield, Compass, Brain, Puzzle } from "lucide-react"

export default function SistemaPersonalidad() {
  const [seccionActiva, setSeccionActiva] = useState<string | null>(null)
  const [perfilActivo, setPerfilActivo] = useState<string | null>(null)
  const [simulacionActiva, setSimulacionActiva] = useState<string | null>(null)

  const rasgosPersonalidad = [
    { nombre: "Apertura", valor: 75, descripcion: "Creatividad y curiosidad intelectual" },
    { nombre: "Responsabilidad", valor: 82, descripcion: "Organización y autodisciplina" },
    { nombre: "Extraversión", valor: 45, descripcion: "Sociabilidad y energía social" },
    { nombre: "Amabilidad", valor: 68, descripcion: "Cooperación y confianza" },
    { nombre: "Neuroticismo", valor: 35, descripcion: "Estabilidad emocional" }
  ]

  const arquetipos = [
    { nombre: "El Explorador", activo: true, descripcion: "Busca nuevas experiencias y conocimiento" },
    { nombre: "El Cuidador", activo: false, descripcion: "Protege y nutre a otros" },
    { nombre: "El Creador", activo: true, descripcion: "Genera ideas y soluciones innovadoras" },
    { nombre: "El Sabio", activo: false, descripcion: "Busca comprensión y sabiduría" }
  ]

  return (
    <div className="text-green-500">
      <h3 className="text-xl mb-4">Sistema de Personalidad: Arquitectura del Yo</h3>
      <p className="mb-4">
        La personalidad como sistema operativo del individuo, compuesta por patrones estables de pensamiento, 
        emoción y comportamiento que definen la interfaz única con el mundo.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div
          onClick={() => setSeccionActiva(seccionActiva === "rasgos" ? null : "rasgos")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "rasgos" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Layers className="mb-2" />
          <h4 className="font-bold">Análisis de Rasgos</h4>
          <p className="text-xs">Big Five y dimensiones</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "arquetipos" ? null : "arquetipos")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "arquetipos" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <User className="mb-2" />
          <h4 className="font-bold">Arquetipos Activos</h4>
          <p className="text-xs">Patrones de comportamiento</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "valores" ? null : "valores")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "valores" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Target className="mb-2" />
          <h4 className="font-bold">Sistema de Valores</h4>
          <p className="text-xs">Jerarquía motivacional</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "mecanismos" ? null : "mecanismos")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "mecanismos" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Shield className="mb-2" />
          <h4 className="font-bold">Mecanismos de Defensa</h4>
          <p className="text-xs">Protección del ego</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "adaptacion" ? null : "adaptacion")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "adaptacion" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Zap className="mb-2" />
          <h4 className="font-bold">Adaptación Contextual</h4>
          <p className="text-xs">Flexibilidad situacional</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "desarrollo" ? null : "desarrollo")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "desarrollo" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Compass className="mb-2" />
          <h4 className="font-bold">Desarrollo Personal</h4>
          <p className="text-xs">Evolución del sistema</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "sombra" ? null : "sombra")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "sombra" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Brain className="mb-2" />
          <h4 className="font-bold">Análisis de Sombra</h4>
          <p className="text-xs">Aspectos inconscientes</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "simulacion" ? null : "simulacion")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "simulacion" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Puzzle className="mb-2" />
          <h4 className="font-bold">Simulador de Personalidad</h4>
          <p className="text-xs">Predicción de comportamiento</p>
        </div>
      </div>

      {seccionActiva === "rasgos" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Análisis de Rasgos de Personalidad (Big Five)</h4>
          <p className="mb-4">Dimensiones fundamentales que configuran el sistema de personalidad:</p>

          <div className="space-y-3">
            {rasgosPersonalidad.map((rasgo, index) => (
              <div key={index} className="border border-green-500/30 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">{rasgo.nombre}</span>
                  <span className="text-sm">{rasgo.valor}%</span>
                </div>
                <div className="w-full bg-green-900/20 rounded-full h-2 mb-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: `${rasgo.valor}%` }}
                  ></div>
                </div>
                <p className="text-xs text-green-400">{rasgo.descripcion}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Los rasgos funcionan como parámetros de configuración del sistema. Valores extremos pueden 
              indicar rigidez en el procesamiento o vulnerabilidades específicas.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "arquetipos" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Arquetipos de Personalidad Activos</h4>
          <p className="mb-4">Patrones de comportamiento y roles psicológicos dominantes:</p>

          <div className="space-y-3">
            {arquetipos.map((arquetipo, index) => (
              <div key={index} className={`border rounded p-3 ${arquetipo.activo ? 'border-green-500 bg-green-900/10' : 'border-green-500/30'}`}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">{arquetipo.nombre}</span>
                  <span className={`text-xs px-2 py-1 rounded ${arquetipo.activo ? 'bg-green-500 text-black' : 'bg-gray-600'}`}>
                    {arquetipo.activo ? 'ACTIVO' : 'LATENTE'}
                  </span>
                </div>
                <p className="text-xs text-green-400">{arquetipo.descripcion}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Los arquetipos activos determinan los patrones de respuesta automática. Conflictos entre 
              arquetipos pueden generar inconsistencias comportamentales.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "valores" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Sistema de Valores y Motivaciones</h4>
          <p className="mb-4">Jerarquía de valores que guían la toma de decisiones:</p>

          <div className="space-y-2">
            <div className="flex justify-between border-b border-green-500/30 pb-1">
              <span>1. Autonomía Personal</span>
              <span className="text-green-400">Prioridad Alta</span>
            </div>
            <div className="flex justify-between border-b border-green-500/30 pb-1">
              <span>2. Crecimiento Intelectual</span>
              <span className="text-green-400">Prioridad Alta</span>
            </div>
            <div className="flex justify-between border-b border-green-500/30 pb-1">
              <span>3. Relaciones Significativas</span>
              <span className="text-yellow-400">Prioridad Media</span>
            </div>
            <div className="flex justify-between border-b border-green-500/30 pb-1">
              <span>4. Seguridad Económica</span>
              <span className="text-yellow-400">Prioridad Media</span>
            </div>
            <div className="flex justify-between border-b border-green-500/30 pb-1">
              <span>5. Reconocimiento Social</span>
              <span className="text-red-400">Prioridad Baja</span>
            </div>
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Conflictos entre valores de alta prioridad pueden generar parálisis decisional. 
              La claridad en la jerarquía optimiza el procesamiento de decisiones complejas.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "mecanismos" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Mecanismos de Defensa Psicológica</h4>
          <p className="mb-4">Sistemas de protección del ego ante amenazas percibidas:</p>

          <div className="grid grid-cols-2 gap-3">
            <div className="border border-green-500/30 rounded p-2">
              <h5 className="font-bold text-sm">Represión</h5>
              <p className="text-xs">Exclusión de contenido amenazante de la conciencia</p>
              <div className="text-xs text-green-400 mt-1">Estado: Moderadamente activo</div>
            </div>
            <div className="border border-green-500/30 rounded p-2">
              <h5 className="font-bold text-sm">Racionalización</h5>
              <p className="text-xs">Justificación lógica de comportamientos irracionales</p>
              <div className="text-xs text-yellow-400 mt-1">Estado: Altamente activo</div>
            </div>
            <div className="border border-green-500/30 rounded p-2">
              <h5 className="font-bold text-sm">Proyección</h5>
              <p className="text-xs">Atribución de impulsos propios a otros</p>
              <div className="text-xs text-green-400 mt-1">Estado: Levemente activo</div>
            </div>
            <div className="border border-green-500/30 rounded p-2">
              <h5 className="font-bold text-sm">Sublimación</h5>
              <p className="text-xs">Canalización de impulsos hacia actividades constructivas</p>
              <div className="text-xs text-green-400 mt-1">Estado: Moderadamente activo</div>
            </div>
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Los mecanismos de defensa hiperactivos pueden distorsionar la percepción de la realidad. 
              Un equilibrio saludable permite protección sin comprometer la adaptación.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "simulacion" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Simulador de Comportamiento</h4>
          <p className="mb-4">Predicción de respuestas basada en el perfil de personalidad actual:</p>

          <div className="space-y-3">
            <div className="border border-green-500/30 rounded p-3">
              <h5 className="font-bold text-sm mb-2">Escenario: Conflicto Interpersonal</h5>
              <div className="text-xs space-y-1">
                <div>• Probabilidad de confrontación directa: 25%</div>
                <div>• Probabilidad de evitación: 45%</div>
                <div>• Probabilidad de mediación: 30%</div>
              </div>
            </div>
            
            <div className="border border-green-500/30 rounded p-3">
              <h5 className="font-bold text-sm mb-2">Escenario: Oportunidad de Riesgo</h5>
              <div className="text-xs space-y-1">
                <div>• Probabilidad de aceptación inmediata: 15%</div>
                <div>• Probabilidad de análisis detallado: 70%</div>
                <div>• Probabilidad de rechazo: 15%</div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Las predicciones se basan en patrones históricos y configuración actual. 
              Discrepancias significativas pueden indicar cambios en el sistema de personalidad.
            </p>
          </div>
        </div>
      )}

      <div className="mt-4 text-xs text-green-400">
        <p>Comandos disponibles: rasgos, arquetipos, valores, mecanismos, adaptacion, desarrollo, sombra, simulacion</p>
        <p>Comandos avanzados: calibrar, optimizar, resetear, exportar, comparar, evolucionar</p>
      </div>

      <div className="mt-6 border-t border-green-500 pt-4">
        <h4 className="font-bold mb-2">Mapa de Personalidad</h4>
        <pre className="text-xs overflow-x-auto">
          {`ARQUITECTURA DEL SISTEMA DE PERSONALIDAD
├── Núcleo de Identidad
│   ├── Valores Fundamentales
│   ├── Creencias Centrales
│   └── Narrativa Personal
│
├── Capa de Rasgos
│   ├── Dimensiones Big Five
│   ├── Patrones Temperamentales
│   └── Estilos Cognitivos
│
├── Sistema de Arquetipos
│   ├── Arquetipos Activos
│   ├── Arquetipos Latentes
│   └── Conflictos Arquetípicos
│
├── Mecanismos Regulatorios
│   ├── Defensas Psicológicas
│   ├── Estrategias de Afrontamiento
│   └── Sistemas de Autocontrol
│
└── Interfaces Adaptativas
    ├── Máscaras Sociales
    ├── Roles Situacionales
    └── Flexibilidad Contextual`}
        </pre>
      </div>
    </div>
  )
}