"use client"

import { useState } from "react"
import { Heart, Tag, Settings, Activity } from "lucide-react"

export default function SistemaEmocional() {
  const [seccionActiva, setSeccionActiva] = useState<string | null>(null)
  const [emocionSeleccionada, setEmocionSeleccionada] = useState<string | null>(null)

  return (
    <div className="text-green-500">
      <h3 className="text-xl mb-4">Metadatos del Sistema: Las Emociones</h3>
      <p className="mb-4">
        Las emociones funcionan como un sistema de metadatos que etiquetan, priorizan y organizan la información en el
        sistema mental.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div
          onClick={() => setSeccionActiva(seccionActiva === "funciones" ? null : "funciones")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "funciones" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Tag className="mb-2" />
          <h4 className="font-bold">Función de Etiquetado</h4>
          <p className="text-xs">Categorización y priorización</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "taxonomia" ? null : "taxonomia")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "taxonomia" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Heart className="mb-2" />
          <h4 className="font-bold">Taxonomía Emocional</h4>
          <p className="text-xs">Clasificación de emociones</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "propiedades" ? null : "propiedades")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "propiedades" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Settings className="mb-2" />
          <h4 className="font-bold">Propiedades del Sistema</h4>
          <p className="text-xs">Características emocionales</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "analisis" ? null : "analisis")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "analisis" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Activity className="mb-2" />
          <h4 className="font-bold">Análisis Emocional</h4>
          <p className="text-xs">Exploración de emociones</p>
        </div>
      </div>

      {seccionActiva === "funciones" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Funciones de las Emociones como Metadatos</h4>
          <p className="mb-2">Las emociones funcionan como un sistema de metadatos que:</p>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-bold">Categorizan eventos:</span> Clasifican experiencias según su relevancia
              adaptativa y significado.
            </li>
            <li>
              <span className="font-bold">Priorizan información:</span> Determinan qué datos reciben atención y recursos
              de procesamiento.
            </li>
            <li>
              <span className="font-bold">Facilitan recuperación:</span> Permiten acceder a memorias relacionadas por su
              carga emocional similar.
            </li>
            <li>
              <span className="font-bold">Optimizan respuestas:</span> Aceleran la reacción ante situaciones críticas
              mediante atajos de procesamiento.
            </li>
            <li>
              <span className="font-bold">Estructuran experiencias:</span> Organizan la experiencia subjetiva en
              patrones reconocibles y comunicables.
            </li>
          </ul>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Los trastornos emocionales pueden verse como errores en el sistema de etiquetado, donde experiencias
              neutras reciben metadatos de amenaza o donde hay una sobrecarga de etiquetas negativas.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "taxonomia" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Taxonomía Emocional Básica</h4>
          <p className="mb-2">Las emociones primarias y sus funciones computacionales:</p>

          <div className="space-y-3">
            <div
              onClick={() => setEmocionSeleccionada(emocionSeleccionada === "miedo" ? null : "miedo")}
              className="border border-green-500 p-2 cursor-pointer hover:bg-green-900/10 rounded"
            >
              <span className="font-bold">Miedo:</span> Sistema de alerta temprana y evitación de amenazas
              {emocionSeleccionada === "miedo" && (
                <div className="mt-2 text-xs pl-4 border-l-2 border-green-500">
                  <p>
                    <span className="font-bold">Manifestaciones:</span> Aumento de ritmo cardíaco, dilatación pupilar,
                    tensión muscular
                  </p>
                  <p>
                    <span className="font-bold">Procesos:</span> Evaluación de riesgos, preparación para huida o lucha
                  </p>
                  <p>
                    <span className="font-bold">Valor adaptativo:</span> Protección ante peligros potenciales
                  </p>
                </div>
              )}
            </div>

            <div
              onClick={() => setEmocionSeleccionada(emocionSeleccionada === "alegria" ? null : "alegria")}
              className="border border-green-500 p-2 cursor-pointer hover:bg-green-900/10 rounded"
            >
              <span className="font-bold">Alegría:</span> Refuerzo positivo para comportamientos adaptativos
              {emocionSeleccionada === "alegria" && (
                <div className="mt-2 text-xs pl-4 border-l-2 border-green-500">
                  <p>
                    <span className="font-bold">Manifestaciones:</span> Liberación de endorfinas, relajación muscular,
                    sonrisa
                  </p>
                  <p>
                    <span className="font-bold">Procesos:</span> Ampliación atencional, creatividad aumentada
                  </p>
                  <p>
                    <span className="font-bold">Valor adaptativo:</span> Motivación para repetir acciones beneficiosas
                  </p>
                </div>
              )}
            </div>

            <div
              onClick={() => setEmocionSeleccionada(emocionSeleccionada === "tristeza" ? null : "tristeza")}
              className="border border-green-500 p-2 cursor-pointer hover:bg-green-900/10 rounded"
            >
              <span className="font-bold">Tristeza:</span> Proceso de reorganización tras pérdidas significativas
              {emocionSeleccionada === "tristeza" && (
                <div className="mt-2 text-xs pl-4 border-l-2 border-green-500">
                  <p>
                    <span className="font-bold">Manifestaciones:</span> Disminución de energía, llanto, postura
                    contraída
                  </p>
                  <p>
                    <span className="font-bold">Procesos:</span> Introspección, evaluación de pérdidas
                  </p>
                  <p>
                    <span className="font-bold">Valor adaptativo:</span> Conservación de recursos, solicitud de apoyo
                    social
                  </p>
                </div>
              )}
            </div>

            <div
              onClick={() => setEmocionSeleccionada(emocionSeleccionada === "ira" ? null : "ira")}
              className="border border-green-500 p-2 cursor-pointer hover:bg-green-900/10 rounded"
            >
              <span className="font-bold">Ira:</span> Movilización de recursos ante obstáculos o injusticias
              {emocionSeleccionada === "ira" && (
                <div className="mt-2 text-xs pl-4 border-l-2 border-green-500">
                  <p>
                    <span className="font-bold">Manifestaciones:</span> Aumento de presión sanguínea, tensión muscular
                  </p>
                  <p>
                    <span className="font-bold">Procesos:</span> Focalización en amenazas, preparación para
                    confrontación
                  </p>
                  <p>
                    <span className="font-bold">Valor adaptativo:</span> Defensa de recursos y límites personales
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Cada emoción puede verse como un módulo especializado que optimiza el sistema para diferentes situaciones
              adaptativas. La desregulación emocional representa errores en la activación o desactivación de estos
              módulos.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "propiedades" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Propiedades del Sistema Emocional</h4>
          <p className="mb-2">El sistema emocional presenta propiedades específicas:</p>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-bold">Complejidad combinatoria:</span> Emociones secundarias surgen como mezclas de
              emociones primarias.
            </li>
            <li>
              <span className="font-bold">Modulación contextual:</span> La intensidad emocional varía según el entorno y
              el aprendizaje previo.
            </li>
            <li>
              <span className="font-bold">Abstracción progresiva:</span> Evolución desde respuestas instintivas hasta
              sentimientos complejos.
            </li>
            <li>
              <span className="font-bold">Regulación adaptativa:</span> Mecanismos de control y equilibrio que optimizan
              la respuesta emocional.
            </li>
            <li>
              <span className="font-bold">Transmisión social:</span> Contagio emocional y empatía como sincronización
              entre sistemas.
            </li>
          </ul>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              La inteligencia emocional puede entenderse como la capacidad de depurar eficientemente el sistema
              emocional, identificando patrones, corrigiendo errores y optimizando respuestas.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "analisis" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Análisis Emocional Interactivo</h4>
          <p className="mb-2">Selecciona una emoción para analizar sus componentes y funcionamiento:</p>

          <div className="grid grid-cols-2 gap-2 mb-4">
            {["Miedo", "Alegría", "Tristeza", "Ira", "Sorpresa", "Asco", "Amor"].map((emocion) => (
              <button
                key={emocion}
                onClick={() => setEmocionSeleccionada(emocion.toLowerCase())}
                className="border border-green-500 p-2 text-sm rounded hover:bg-green-900/20"
              >
                {emocion}
              </button>
            ))}
          </div>

          {emocionSeleccionada && (
            <div className="border border-green-500 p-3 bg-black/30">
              <h5 className="font-bold mb-2 uppercase">{emocionSeleccionada}</h5>
              {emocionSeleccionada === "miedo" && (
                <>
                  <p className="mb-1">
                    <span className="font-bold">Función computacional:</span> Sistema de alerta temprana y evitación de
                    amenazas
                  </p>
                  <p className="mb-1">
                    <span className="font-bold">Manifestaciones físicas:</span> Aumento de ritmo cardíaco, dilatación
                    pupilar, tensión muscular
                  </p>
                  <p className="mb-1">
                    <span className="font-bold">Procesos cognitivos:</span> Evaluación de riesgos, preparación para
                    huida o lucha
                  </p>
                  <p className="mb-1">
                    <span className="font-bold">Valor adaptativo:</span> Protección ante peligros potenciales
                  </p>
                  <p className="mb-1">
                    <span className="font-bold">Logs de error comunes:</span> Fobias (falsos positivos), temeridad
                    (falsos negativos)
                  </p>
                </>
              )}

              {emocionSeleccionada === "alegria" ||
                (emocionSeleccionada === "alegría" && (
                  <>
                    <p className="mb-1">
                      <span className="font-bold">Función computacional:</span> Refuerzo positivo para comportamientos
                      adaptativos
                    </p>
                    <p className="mb-1">
                      <span className="font-bold">Manifestaciones físicas:</span> Liberación de endorfinas, relajación
                      muscular, sonrisa
                    </p>
                    <p className="mb-1">
                      <span className="font-bold">Procesos cognitivos:</span> Ampliación atencional, creatividad
                      aumentada
                    </p>
                    <p className="mb-1">
                      <span className="font-bold">Valor adaptativo:</span> Motivación para repetir acciones beneficiosas
                    </p>
                    <p className="mb-1">
                      <span className="font-bold">Logs de error comunes:</span> Euforia (sobreactivación), anhedonia
                      (subactivación)
                    </p>
                  </>
                ))}

              {emocionSeleccionada === "tristeza" && (
                <>
                  <p className="mb-1">
                    <span className="font-bold">Función computacional:</span> Proceso de reorganización tras pérdidas
                    significativas
                  </p>
                  <p className="mb-1">
                    <span className="font-bold">Manifestaciones físicas:</span> Disminución de energía, llanto, postura
                    contraída
                  </p>
                  <p className="mb-1">
                    <span className="font-bold">Procesos cognitivos:</span> Introspección, evaluación de pérdidas
                  </p>
                  <p className="mb-1">
                    <span className="font-bold">Valor adaptativo:</span> Conservación de recursos, solicitud de apoyo
                    social
                  </p>
                  <p className="mb-1">
                    <span className="font-bold">Logs de error comunes:</span> Depresión (persistencia excesiva),
                    negación (inhibición inadecuada)
                  </p>
                </>
              )}

              {emocionSeleccionada === "ira" && (
                <>
                  <p className="mb-1">
                    <span className="font-bold">Función computacional:</span> Movilización de recursos ante obstáculos o
                    injusticias
                  </p>
                  <p className="mb-1">
                    <span className="font-bold">Manifestaciones físicas:</span> Aumento de presión sanguínea, tensión
                    muscular
                  </p>
                  <p className="mb-1">
                    <span className="font-bold">Procesos cognitivos:</span> Focalización en amenazas, preparación para
                    confrontación
                  </p>
                  <p className="mb-1">
                    <span className="font-bold">Valor adaptativo:</span> Defensa de recursos y límites personales
                  </p>
                  <p className="mb-1">
                    <span className="font-bold">Logs de error comunes:</span> Agresividad (sobreactivación), pasividad
                    (subactivación)
                  </p>
                </>
              )}

              {emocionSeleccionada === "sorpresa" && (
                <>
                  <p className="mb-1">
                    <span className="font-bold">Función computacional:</span> Interrupción de procesos para
                    reorientación atencional
                  </p>
                  <p className="mb-1">
                    <span className="font-bold">Manifestaciones físicas:</span> Elevación de cejas, apertura ocular,
                    inspiración súbita
                  </p>
                  <p className="mb-1">
                    <span className="font-bold">Procesos cognitivos:</span> Reset atencional, preparación para nueva
                    información
                  </p>
                  <p className="mb-1">
                    <span className="font-bold">Valor adaptativo:</span> Adaptación rápida a cambios inesperados
                  </p>
                  <p className="mb-1">
                    <span className="font-bold">Logs de error comunes:</span> Hipervigilancia (sobreactivación),
                    habituación excesiva (subactivación)
                  </p>
                </>
              )}

              {emocionSeleccionada === "asco" && (
                <>
                  <p className="mb-1">
                    <span className="font-bold">Función computacional:</span> Protección contra contaminantes biológicos
                    o morales
                  </p>
                  <p className="mb-1">
                    <span className="font-bold">Manifestaciones físicas:</span> Náusea, arruga nasal, retracción
                    corporal
                  </p>
                  <p className="mb-1">
                    <span className="font-bold">Procesos cognitivos:</span> Evaluación de contaminación potencial
                  </p>
                  <p className="mb-1">
                    <span className="font-bold">Valor adaptativo:</span> Evitación de sustancias nocivas o situaciones
                    perjudiciales
                  </p>
                  <p className="mb-1">
                    <span className="font-bold">Logs de error comunes:</span> Fobia a la contaminación
                    (sobreactivación), conductas de riesgo (subactivación)
                  </p>
                </>
              )}

              {emocionSeleccionada === "amor" && (
                <>
                  <p className="mb-1">
                    <span className="font-bold">Función computacional:</span> Vinculación social y mantenimiento de
                    cooperación
                  </p>
                  <p className="mb-1">
                    <span className="font-bold">Manifestaciones físicas:</span> Liberación de oxitocina, sensación de
                    calidez
                  </p>
                  <p className="mb-1">
                    <span className="font-bold">Procesos cognitivos:</span> Atención preferente al objeto de amor,
                    idealización
                  </p>
                  <p className="mb-1">
                    <span className="font-bold">Valor adaptativo:</span> Formación de vínculos sociales duraderos
                  </p>
                  <p className="mb-1">
                    <span className="font-bold">Logs de error comunes:</span> Dependencia (sobreactivación), alexitimia
                    (subactivación)
                  </p>
                </>
              )}
            </div>
          )}

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              El análisis de patrones emocionales recurrentes permite identificar algoritmos de respuesta automáticos
              que pueden optimizarse mediante intervenciones terapéuticas específicas.
            </p>
          </div>
        </div>
      )}

      <div className="mt-4 text-xs text-green-400">
        <p>Escribe "funciones" en la terminal para ver información sobre las funciones de las emociones.</p>
        <p>Usa "taxonomia", "propiedades" o "analizar" para explorar diferentes aspectos del sistema emocional.</p>
        <p>También puedes escribir el nombre de una emoción específica para analizarla en detalle.</p>
      </div>

      <div className="mt-6 border-t border-green-500 pt-4">
        <h4 className="font-bold mb-2">Mapa del Sistema Emocional</h4>
        <div className="border border-green-500 p-3 text-xs">
          <pre>{`
                   SISTEMA EMOCIONAL
                          │
          ┌───────────────┼───────────────┐
          │               │               │
          ▼               ▼               ▼
   ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
   │  Emociones  │ │  Emociones  │ │   Estados   │
   │  Primarias  │ │ Secundarias │ │  de Ánimo   │
   └──────┬──────┘ └──────┬──────┘ └──────┬──────┘
          │               │               │
          │               │               │
┌─────────┴─────────┬────┴────┬─────────┬┴─────────┐
│                   │         │         │          │
▼                   ▼         ▼         ▼          ▼
Miedo            Alegría   Tristeza    Ira     Sorpresa
 │                 │         │          │         │
 │                 │         │          │         │
 └─────────────────┴─────────┴──────────┴─────────┘
                          │
                          ▼
                  Respuestas Adaptativas
          `}</pre>
        </div>
      </div>
    </div>
  )
}
