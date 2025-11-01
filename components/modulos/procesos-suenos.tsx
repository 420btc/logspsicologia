"use client"

import { useState } from "react"
import { Download, Upload, RefreshCw, Sparkles } from "lucide-react"

export default function ProcesosSuenos() {
  const [seccionActiva, setSeccionActiva] = useState<string | null>(null)

  return (
    <div className="text-green-500">
      <h3 className="text-xl mb-4">Procesos de Mantenimiento: Los Sueños</h3>
      <p className="mb-4">
        Los sueños operan como un proceso ETL (Extract, Transform, Load) nocturno de mantenimiento del sistema mental.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div
          onClick={() => setSeccionActiva(seccionActiva === "extraccion" ? null : "extraccion")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "extraccion" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Download className="mb-2" />
          <h4 className="font-bold">Extracción (Extract)</h4>
          <p className="text-xs">Recuperación de datos</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "transformacion" ? null : "transformacion")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "transformacion" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <RefreshCw className="mb-2" />
          <h4 className="font-bold">Transformación (Transform)</h4>
          <p className="text-xs">Procesamiento de información</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "carga" ? null : "carga")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "carga" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Upload className="mb-2" />
          <h4 className="font-bold">Carga (Load)</h4>
          <p className="text-xs">Consolidación en memoria</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "caracteristicas" ? null : "caracteristicas")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "caracteristicas" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Sparkles className="mb-2" />
          <h4 className="font-bold">Características</h4>
          <p className="text-xs">Propiedades del proceso onírico</p>
        </div>
      </div>

      {seccionActiva === "extraccion" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Extracción (Extract)</h4>
          <p className="mb-2">Durante esta fase inicial del proceso onírico:</p>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-bold">Recuperación de datos:</span> Se extraen experiencias recientes del
              localStorage consciente.
            </li>
            <li>
              <span className="font-bold">Selección emocional:</span> Se prioriza información con alta carga emocional o
              relevancia adaptativa.
            </li>
            <li>
              <span className="font-bold">Identificación de patrones:</span> Se detectan secuencias incompletas o
              problemáticas que requieren procesamiento.
            </li>
            <li>
              <span className="font-bold">Acceso a registros históricos:</span> Se recuperan experiencias pasadas
              relacionadas con los datos actuales.
            </li>
          </ul>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Los sueños recurrentes pueden indicar datos que no han sido procesados completamente. La aparición de
              personas o lugares del pasado representa la extracción de registros históricos para comparación con
              experiencias actuales.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "transformacion" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Transformación (Transform)</h4>
          <p className="mb-2">En esta fase central del proceso onírico:</p>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-bold">Reorganización de datos:</span> Se reordenan fragmentos de información para
              buscar nuevos patrones.
            </li>
            <li>
              <span className="font-bold">Integración con esquemas:</span> Se intenta encajar la nueva información en
              estructuras existentes.
            </li>
            <li>
              <span className="font-bold">Procesamiento emocional:</span> Se procesa información con alta carga afectiva
              pendiente de resolución.
            </li>
            <li>
              <span className="font-bold">Generación de hipótesis:</span> Se crean narrativas oníricas que conectan
              elementos aparentemente inconexos.
            </li>
            <li>
              <span className="font-bold">Simulación de escenarios:</span> Se prueban respuestas potenciales a
              situaciones problemáticas.
            </li>
          </ul>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              La naturaleza surrealista de los sueños refleja la libertad del sistema para probar conexiones no
              convencionales. Las metáforas oníricas son abstracciones que permiten procesar información compleja de
              manera simplificada.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "carga" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Carga (Load)</h4>
          <p className="mb-2">En esta fase final del proceso onírico:</p>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-bold">Consolidación en memoria:</span> Se almacenan los resultados del procesamiento
              en la memoria a largo plazo.
            </li>
            <li>
              <span className="font-bold">Actualización de esquemas:</span> Se modifican los modelos mentales existentes
              con la nueva información.
            </li>
            <li>
              <span className="font-bold">Fortalecimiento neuronal:</span> Se refuerzan las conexiones sinápticas
              relevantes para el aprendizaje.
            </li>
            <li>
              <span className="font-bold">Priorización adaptativa:</span> Se da mayor peso a la información con valor de
              supervivencia.
            </li>
            <li>
              <span className="font-bold">Descarte selectivo:</span> Se eliminan datos redundantes o irrelevantes para
              optimizar el almacenamiento.
            </li>
          </ul>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              La privación de sueño genera errores en la consolidación de memoria y en la actualización de esquemas
              mentales. Los trastornos del sueño pueden verse como interrupciones en el proceso ETL que afectan la
              estabilidad del sistema.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "caracteristicas" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Características del Proceso Onírico</h4>
          <p className="mb-2">El proceso de sueños presenta propiedades únicas:</p>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-bold">Procesamiento no-lineal:</span> Narrativas que desafían la lógica secuencial y
              causal habitual.
            </li>
            <li>
              <span className="font-bold">Alta simbolización:</span> Representación abstracta y metafórica de conceptos
              y emociones complejas.
            </li>
            <li>
              <span className="font-bold">Intensidad emocional variable:</span> Priorización basada en relevancia
              afectiva para el sistema.
            </li>
            <li>
              <span className="font-bold">Desinhibición creativa:</span> Conexiones no convencionales entre conceptos
              normalmente separados.
            </li>
            <li>
              <span className="font-bold">Auto-organización emergente:</span> Patrones que emergen sin dirección
              consciente o intencional.
            </li>
          </ul>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Las pesadillas pueden interpretarse como simulaciones de amenazas que preparan al sistema para situaciones
              de peligro. Los sueños lúcidos representan un estado híbrido donde el sistema de monitoreo consciente
              permanece parcialmente activo durante el proceso ETL.
            </p>
          </div>
        </div>
      )}

      <div className="mt-4 text-xs text-green-400">
        <p>Escribe "funciones" en la terminal para ver un resumen de las funciones de los sueños.</p>
        <p>Usa "extraccion", "transformacion", "carga" o "caracteristicas" para analizar cada fase en detalle.</p>
      </div>

      <div className="mt-6 border-t border-green-500 pt-4">
        <h4 className="font-bold mb-2">Diagrama del Proceso ETL Onírico</h4>
        <div className="border border-green-500 p-3 text-xs">
          <pre>{`
Experiencias Diarias ──► Memoria de Trabajo ──► Filtro Emocional
         │                                             │
         └─────────────────┬─────────────────┘
                           │
                           ▼
                    ┌─────────────┐
                    │  EXTRACCIÓN │
                    │  (Extract)  │◄───┐
                    └──────┬──────┘    │
                           │           │
                           ▼           │
                    ┌─────────────┐    │
                    │TRANSFORMACIÓN│   │ Ciclo REM
                    │ (Transform)  │   │
                    └──────┬──────┘    │
                           │           │
                           ▼           │
                    ┌─────────────┐    │
                    │    CARGA    │    │
                    │   (Load)    │────┘
                    └──────┬──────┘
                           │
                           ▼
                  Memoria a Largo Plazo
                           │
                           ▼
                  Actualización de Esquemas
          `}</pre>
        </div>
      </div>
    </div>
  )
}
