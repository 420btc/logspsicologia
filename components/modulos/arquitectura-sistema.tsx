"use client"

import { useState } from "react"
import { Brain, Cpu, Network, GitBranch } from "lucide-react"

export default function ArquitecturaSistema() {
  const [seccionActiva, setSeccionActiva] = useState<string | null>(null)

  return (
    <div className="text-green-500">
      <h3 className="text-xl mb-4">Arquitectura del Sistema Mental</h3>
      <p className="mb-4">
        La psicología abarca no solo los "logs" (manifestaciones conductuales y cognitivas), sino también el contexto de
        ejecución del programa humano.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div
          onClick={() => setSeccionActiva(seccionActiva === "contexto" ? null : "contexto")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "contexto" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Cpu className="mb-2" />
          <h4 className="font-bold">Contexto de Ejecución</h4>
          <p className="text-xs">Hardware biológico y entorno</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "variables" ? null : "variables")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "variables" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Brain className="mb-2" />
          <h4 className="font-bold">Variables de Estado</h4>
          <p className="text-xs">Creencias, valores y traumas</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "eventos" ? null : "eventos")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "eventos" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Network className="mb-2" />
          <h4 className="font-bold">Gestión de Eventos</h4>
          <p className="text-xs">Interacciones y desafíos</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "versiones" ? null : "versiones")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "versiones" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <GitBranch className="mb-2" />
          <h4 className="font-bold">Control de Versiones</h4>
          <p className="text-xs">Desarrollo y aprendizaje</p>
        </div>
      </div>

      {seccionActiva === "contexto" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Contexto de Ejecución</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-bold">Hardware biológico:</span> Estructura neuronal y fisiológica que determina las
              capacidades y limitaciones básicas del sistema.
            </li>
            <li>
              <span className="font-bold">Sistema operativo social:</span> Familia, cultura y entorno social que
              establecen los parámetros de funcionamiento.
            </li>
            <li>
              <span className="font-bold">Interfaces de entrada:</span> Sistemas sensoriales que capturan información
              del entorno (visual, auditiva, táctil, etc.).
            </li>
            <li>
              <span className="font-bold">Interfaces de salida:</span> Sistemas motores y expresivos que permiten la
              interacción con el entorno.
            </li>
          </ul>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Las alteraciones en el contexto de ejecución pueden manifestarse como logs de error en forma de desajustes
              adaptativos. Por ejemplo, un hardware neurológico atípico puede generar logs de procesamiento sensorial
              diferentes (como en el autismo).
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "variables" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Variables de Estado</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-bold">Creencias:</span> Parámetros que filtran la interpretación de la realidad y
              determinan qué información se considera válida.
            </li>
            <li>
              <span className="font-bold">Valores:</span> Funciones de evaluación que priorizan respuestas y establecen
              jerarquías de importancia.
            </li>
            <li>
              <span className="font-bold">Traumas:</span> Interrupciones críticas en el flujo normal de procesamiento
              que generan patrones de evitación o hipervigilancia.
            </li>
            <li>
              <span className="font-bold">Deseos:</span> Vectores direccionales que orientan comportamientos hacia
              objetivos específicos.
            </li>
          </ul>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Las creencias limitantes funcionan como condicionales (if-then) que restringen el rango de respuestas
              posibles. Los traumas pueden verse como excepciones no manejadas que generan comportamientos defensivos
              automáticos.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "eventos" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Gestión de Eventos</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-bold">Interacciones sociales:</span> Transacciones entre sistemas que intercambian
              información y recursos.
            </li>
            <li>
              <span className="font-bold">Desafíos vitales:</span> Casos de prueba del sistema que evalúan su capacidad
              de adaptación y resolución.
            </li>
            <li>
              <span className="font-bold">Hitos existenciales:</span> Actualizaciones mayores del sistema que
              reconfiguran parámetros fundamentales.
            </li>
          </ul>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Los patrones de respuesta ante eventos similares revelan la arquitectura subyacente del sistema. Las
              respuestas desproporcionadas indican posibles errores en la evaluación de amenazas o en los mecanismos de
              regulación emocional.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "versiones" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Control de Versiones</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-bold">Desarrollo evolutivo:</span> Modificaciones a lo largo del tiempo que adaptan
              el sistema a nuevas circunstancias.
            </li>
            <li>
              <span className="font-bold">Aprendizaje adaptativo:</span> Optimizaciones basadas en experiencia que
              mejoran la eficiencia del sistema.
            </li>
            <li>
              <span className="font-bold">Resiliencia:</span> Mecanismos de recuperación ante fallos que permiten
              mantener la funcionalidad básica.
            </li>
          </ul>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              La capacidad de actualizar comportamientos y creencias refleja la flexibilidad del sistema. La resistencia
              al cambio puede interpretarse como mecanismos de protección contra modificaciones potencialmente
              desestabilizadoras.
            </p>
          </div>
        </div>
      )}

      <div className="mt-4 text-xs text-green-400">
        <p>Escribe "componentes" en la terminal para ver un resumen de los componentes principales.</p>
        <p>Usa "contexto", "variables", "eventos" o "versiones" para analizar cada sección en detalle.</p>
      </div>

      <div className="mt-6 border-t border-green-500 pt-4">
        <h4 className="font-bold mb-2">Diagrama de Arquitectura</h4>
        <pre className="text-xs overflow-x-auto">
          {`ARQUITECTURA DE LA MENTE HUMANA
├── Sistema Operativo Base (Biología/Cultura)
│   ├── Hardware Neurobiológico
│   ├── Firmware Evolutivo
│   └── Interfaces Sensoriales/Motoras
│
├── Sistema de Memoria
│   ├── Consciente (localStorage)
│   │   ├── Memoria de trabajo
│   │   └── Atención focalizada
│   │
│   ├── Subconsciente (Base de datos distribuida)
│   │   ├── Memoria episódica
│   │   ├── Memoria semántica
│   │   ├── Memoria procedimental
│   │   └── Memoria implícita
│   │
│   └── Procesos de sincronización
│       ├── Consolidación diaria
│       └── Mantenimiento onírico
│
├── Sistema de Metadatos Emocionales
│   ├── Emociones primarias
│   ├── Sentimientos complejos
│   ├── Estados de ánimo
│   └── Temperamento base
│
├── Sistema de Registro Temporal (Blockchain)
│   ├── Secuencia de eventos vitales
│   ├── Narrativas autobiográficas
│   └── Proyecciones futuras
│
└── Procesos Ejecutivos
    ├── Toma de decisiones
    ├── Planificación estratégica
    ├── Inhibición conductual
    └── Metacognición`}
        </pre>
      </div>
    </div>
  )
}
