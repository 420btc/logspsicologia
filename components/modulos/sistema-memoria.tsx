"use client"

import { useState } from "react"
import { Database, HardDrive, Layers, RefreshCw, Play } from "lucide-react"
import SimuladorMemoria from "../simulador-memoria"

export default function SistemaMemoria() {
  const [seccionActiva, setSeccionActiva] = useState<string | null>(null)
  const [simuladorVisible, setSimuladorVisible] = useState(false)

  return (
    <div className="text-green-500">
      <h3 className="text-xl mb-4">Sistema de Memoria: Arquitectura Distribuida</h3>
      <p className="mb-4">
        La memoria humana funciona como un sistema de almacenamiento complejo con diferentes niveles de acceso,
        persistencia y organización.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div
          onClick={() => setSeccionActiva(seccionActiva === "consciente" ? null : "consciente")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "consciente" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <HardDrive className="mb-2" />
          <h4 className="font-bold">Memoria Consciente</h4>
          <p className="text-xs">LocalStorage volátil</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "subconsciente" ? null : "subconsciente")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "subconsciente" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Database className="mb-2" />
          <h4 className="font-bold">Memoria Subconsciente</h4>
          <p className="text-xs">Base de datos distribuida</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "componentes" ? null : "componentes")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "componentes" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Layers className="mb-2" />
          <h4 className="font-bold">Componentes Estructurales</h4>
          <p className="text-xs">Tipos de memoria</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "interaccion" ? null : "interaccion")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "interaccion" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <RefreshCw className="mb-2" />
          <h4 className="font-bold">Interacción entre Sistemas</h4>
          <p className="text-xs">Sincronización y transferencia</p>
        </div>
      </div>

      {seccionActiva === "consciente" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Memoria Consciente (LocalStorage)</h4>
          <p className="mb-2">
            La memoria consciente o de trabajo funciona análogamente al localStorage en navegadores web:
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-bold">Almacenamiento volátil:</span> Retiene información por corto plazo, similar a
              la RAM en computadoras.
            </li>
            <li>
              <span className="font-bold">Acceso inmediato:</span> Proporciona alta velocidad de recuperación para datos
              en uso actual.
            </li>
            <li>
              <span className="font-bold">Capacidad limitada:</span> Solo puede mantener 5-9 elementos simultáneamente
              (límite de Miller).
            </li>
            <li>
              <span className="font-bold">Optimización contextual:</span> Prioriza información relevante para la tarea
              en curso.
            </li>
            <li>
              <span className="font-bold">Sobrescritura constante:</span> Los datos antiguos son reemplazados por nuevos
              continuamente.
            </li>
          </ul>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Funciones primarias:</p>
            <ul className="list-disc pl-5">
              <li>Procesamiento activo de estímulos actuales</li>
              <li>Mantenimiento temporal de información relevante</li>
              <li>Interfaz directa con procesos atencionales</li>
              <li>Punto de acceso para toma de decisiones inmediatas</li>
            </ul>
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Los problemas de atención pueden manifestarse como errores de escritura/lectura en el localStorage. La
              sobrecarga de información genera logs de error por desbordamiento de buffer.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "subconsciente" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Memoria Subconsciente (Base de datos distribuida)</h4>
          <p className="mb-2">El subconsciente opera como un sistema de almacenamiento masivo distribuido:</p>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-bold">Repositorio extenso:</span> Capacidad cuasi-ilimitada para almacenar
              experiencias y conocimientos.
            </li>
            <li>
              <span className="font-bold">Estructura compleja:</span> Organización parcialmente redundante con múltiples
              conexiones.
            </li>
            <li>
              <span className="font-bold">Indexación multi-dimensional:</span> Recuperación basada en relevancia
              emocional y asociaciones.
            </li>
            <li>
              <span className="font-bold">Acceso asincrónico:</span> Recuperación no inmediata y parcialmente
              restringida.
            </li>
            <li>
              <span className="font-bold">Persistencia a largo plazo:</span> Almacenamiento duradero con degradación
              selectiva.
            </li>
          </ul>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Los recuerdos traumáticos pueden verse como registros con alta prioridad de acceso que generan respuestas
              automáticas. La represión funciona como un mecanismo de restricción de acceso a ciertos registros.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "componentes" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Componentes Estructurales</h4>
          <p className="mb-2">La memoria subconsciente se organiza en diferentes subsistemas especializados:</p>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-bold">Memoria episódica:</span> Registros de experiencias temporalmente indexadas,
              como un diario personal.
            </li>
            <li>
              <span className="font-bold">Memoria semántica:</span> Conocimiento conceptual descontextualizado, similar
              a una enciclopedia.
            </li>
            <li>
              <span className="font-bold">Memoria procedimental:</span> Rutinas de ejecución automatizadas, como scripts
              de comportamiento.
            </li>
            <li>
              <span className="font-bold">Memoria emocional:</span> Patrones de respuesta afectiva asociados a estímulos
              específicos.
            </li>
            <li>
              <span className="font-bold">Memoria implícita:</span> Asociaciones y heurísticas no declarativas que
              operan automáticamente.
            </li>
          </ul>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Cada tipo de memoria puede presentar logs de error específicos. Por ejemplo, la amnesia disociativa
              muestra errores de acceso a la memoria episódica mientras mantiene intacta la procedimental.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "interaccion" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Interacción entre Sistemas de Memoria</h4>
          <p className="mb-2">Los sistemas de memoria consciente e inconsciente interactúan continuamente mediante:</p>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-bold">Transferencia selectiva:</span> Movimiento de datos relevantes entre sistemas
              según necesidades.
            </li>
            <li>
              <span className="font-bold">Consolidación periódica:</span> Durante periodos de baja actividad
              (especialmente el sueño).
            </li>
            <li>
              <span className="font-bold">Filtrado contextual:</span> Basado en relevancia emocional y necesidades
              actuales.
            </li>
            <li>
              <span className="font-bold">Recuperación condicionada:</span> Activación por estímulos relacionados
              (claves contextuales).
            </li>
            <li>
              <span className="font-bold">Sincronización:</span> Durante estados alterados de conciencia (meditación,
              hipnosis).
            </li>
          </ul>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Los problemas de consolidación de memoria generan logs de error en forma de olvidos o confusiones. La
              interferencia entre recuerdos similares puede verse como colisiones de hash en la indexación.
            </p>
          </div>
        </div>
      )}

      <div className="mt-4 text-xs text-green-400">
        <p>Escribe "tipos" en la terminal para ver un resumen de los tipos de memoria.</p>
        <p>Usa "consciente", "subconsciente", "componentes" o "interaccion" para analizar cada sección en detalle.</p>
      </div>

      <div className="mt-6 border-t border-green-500 pt-4">
        <h4 className="font-bold mb-2">Diagrama de Flujo de Memoria</h4>
        <div className="border border-green-500 p-3 text-xs">
          <pre>{`
Estímulo Externo/Interno
       │
       ▼
┌─────────────┐     ┌─────────────────┐
│  Memoria    │     │   Filtros       │
│  Sensorial  │────▶│   Atencionales  │
└─────────────┘     └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │    Memoria      │
                    │    de Trabajo   │
                    │  (localStorage) │
                    └────────┬────────┘
                             │
              ┌──────────────┴──────────────┐
              │                             │
              ▼                             ▼
    ┌─────────────────┐           ┌─────────────────┐
    │   Descartado    │           │  Consolidación  │
    │                 │           │   de Memoria    │
    └─────────────────┘           └────────┬────────┘
                                           │
                                           ▼
                                  ┌─────────────────┐
                                  │    Memoria      │
                                  │  Subconsciente  │
                                  │  (Base de datos)│
                                  └─────────────────┘
          `}</pre>
        </div>
      </div>

      {/* Botón del Simulador */}
      <div className="mt-6 border-t border-green-500 pt-4">
        <button
          onClick={() => setSimuladorVisible(true)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
        >
          <Play className="w-4 h-4" />
          Abrir Simulador de Memoria
        </button>
        <p className="text-xs text-gray-400 mt-2">
          Experimenta con diferentes tipos de memoria y observa cómo se comportan en tiempo real.
        </p>
      </div>

      {/* Simulador */}
      <SimuladorMemoria 
        visible={simuladorVisible}
        onCerrar={() => setSimuladorVisible(false)}
      />
    </div>
  )
}
