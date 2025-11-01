"use client"

import { useState } from "react"
import { Heart, Tag, Settings, Activity, Brain, Zap, Network, BarChart3, Target, Lightbulb, Shield, Users, Play } from "lucide-react"
import SimuladorEmociones from "../simulador-emociones"

export default function SistemaEmocional() {
  const [seccionActiva, setSeccionActiva] = useState<string | null>(null)
  const [simuladorVisible, setSimuladorVisible] = useState(false)
  const [emocionSeleccionada, setEmocionSeleccionada] = useState<string | null>(null)

  return (
    <div className="text-green-500">
      <h3 className="text-xl mb-4">Metadatos del Sistema: Las Emociones</h3>
      <p className="mb-4">
        Las emociones funcionan como un sistema de metadatos que etiquetan, priorizan y organizan la información en el
        sistema mental. Constituyen algoritmos evolutivos especializados que optimizan la supervivencia y adaptación social.
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
          onClick={() => setSeccionActiva(seccionActiva === "neurociencia" ? null : "neurociencia")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "neurociencia" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Brain className="mb-2" />
          <h4 className="font-bold">Neurociencia Afectiva</h4>
          <p className="text-xs">Bases neurológicas</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "neurotransmisores" ? null : "neurotransmisores")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "neurotransmisores" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Zap className="mb-2" />
          <h4 className="font-bold">Neurotransmisores</h4>
          <p className="text-xs">Química emocional</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "regulacion" ? null : "regulacion")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "regulacion" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Target className="mb-2" />
          <h4 className="font-bold">Regulación Emocional</h4>
          <p className="text-xs">Control y modulación</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "inteligencia" ? null : "inteligencia")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "inteligencia" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Lightbulb className="mb-2" />
          <h4 className="font-bold">Inteligencia Emocional</h4>
          <p className="text-xs">Competencias emocionales</p>
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

      {seccionActiva === "neurociencia" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Neurociencia Afectiva</h4>
          <p className="mb-2">Bases neurológicas del procesamiento emocional:</p>

          <div className="space-y-3">
            <div className="border border-green-500 p-3 rounded">
              <h5 className="font-bold text-sm mb-2">Sistema Límbico</h5>
              <ul className="text-xs space-y-1">
                <li><span className="font-bold">Amígdala:</span> Detección de amenazas y procesamiento del miedo</li>
                <li><span className="font-bold">Hipocampo:</span> Memoria emocional y contextualización</li>
                <li><span className="font-bold">Hipotálamo:</span> Respuestas autonómicas y hormonales</li>
                <li><span className="font-bold">Núcleo accumbens:</span> Recompensa y motivación</li>
              </ul>
            </div>

            <div className="border border-green-500 p-3 rounded">
              <h5 className="font-bold text-sm mb-2">Corteza Prefrontal</h5>
              <ul className="text-xs space-y-1">
                <li><span className="font-bold">CPF ventromedial:</span> Regulación emocional y toma de decisiones</li>
                <li><span className="font-bold">CPF dorsolateral:</span> Control ejecutivo y memoria de trabajo</li>
                <li><span className="font-bold">Corteza orbitofrontal:</span> Evaluación de recompensas y castigos</li>
                <li><span className="font-bold">Corteza cingulada anterior:</span> Monitoreo de conflictos y empatía</li>
              </ul>
            </div>

            <div className="border border-green-500 p-3 rounded">
              <h5 className="font-bold text-sm mb-2">Circuitos Neuronales</h5>
              <ul className="text-xs space-y-1">
                <li><span className="font-bold">Circuito del miedo:</span> Amígdala → Hipotálamo → Respuesta de estrés</li>
                <li><span className="font-bold">Circuito de recompensa:</span> VTA → Núcleo accumbens → Dopamina</li>
                <li><span className="font-bold">Circuito de regulación:</span> CPF → Amígdala → Control emocional</li>
                <li><span className="font-bold">Red de saliencia:</span> Ínsula → Detección de estímulos relevantes</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Los trastornos emocionales pueden mapearse a disfunciones específicas en estos circuitos: 
              hiperactivación de la amígdala en ansiedad, hipoactivación del núcleo accumbens en depresión, 
              o déficits en la CPF en trastornos de regulación emocional.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "neurotransmisores" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Neurotransmisores y Química Emocional</h4>
          <p className="mb-2">Los neurotransmisores actúan como protocolos de comunicación del sistema emocional:</p>

          <div className="space-y-3">
            <div className="border border-green-500 p-3 rounded">
              <h5 className="font-bold text-sm mb-2">Serotonina (5-HT)</h5>
              <ul className="text-xs space-y-1">
                <li><span className="font-bold">Función:</span> Regulación del estado de ánimo y bienestar</li>
                <li><span className="font-bold">Efectos:</span> Estabilidad emocional, control de impulsos</li>
                <li><span className="font-bold">Déficit:</span> Depresión, ansiedad, agresividad</li>
                <li><span className="font-bold">Exceso:</span> Síndrome serotoninérgico, rigidez emocional</li>
              </ul>
            </div>

            <div className="border border-green-500 p-3 rounded">
              <h5 className="font-bold text-sm mb-2">Dopamina (DA)</h5>
              <ul className="text-xs space-y-1">
                <li><span className="font-bold">Función:</span> Motivación, recompensa y aprendizaje</li>
                <li><span className="font-bold">Efectos:</span> Búsqueda de objetivos, placer anticipatorio</li>
                <li><span className="font-bold">Déficit:</span> Anhedonia, apatía, falta de motivación</li>
                <li><span className="font-bold">Exceso:</span> Comportamientos compulsivos, psicosis</li>
              </ul>
            </div>

            <div className="border border-green-500 p-3 rounded">
              <h5 className="font-bold text-sm mb-2">Noradrenalina (NA)</h5>
              <ul className="text-xs space-y-1">
                <li><span className="font-bold">Función:</span> Alerta, atención y respuesta al estrés</li>
                <li><span className="font-bold">Efectos:</span> Vigilancia, preparación para la acción</li>
                <li><span className="font-bold">Déficit:</span> Fatiga, falta de concentración</li>
                <li><span className="font-bold">Exceso:</span> Ansiedad, hipervigilancia, pánico</li>
              </ul>
            </div>

            <div className="border border-green-500 p-3 rounded">
              <h5 className="font-bold text-sm mb-2">GABA y Glutamato</h5>
              <ul className="text-xs space-y-1">
                <li><span className="font-bold">GABA:</span> Inhibición, calma, reducción de ansiedad</li>
                <li><span className="font-bold">Glutamato:</span> Excitación, aprendizaje, plasticidad</li>
                <li><span className="font-bold">Balance:</span> Equilibrio excitación/inhibición crucial</li>
                <li><span className="font-bold">Desequilibrio:</span> Ansiedad, epilepsia, trastornos del ánimo</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Los fármacos psicotrópicos actúan como "parches" del sistema, modificando la disponibilidad 
              de neurotransmisores para corregir desequilibrios específicos en los circuitos emocionales.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "regulacion" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Regulación Emocional</h4>
          <p className="mb-2">Estrategias y mecanismos para modular las respuestas emocionales:</p>

          <div className="space-y-3">
            <div className="border border-green-500 p-3 rounded">
              <h5 className="font-bold text-sm mb-2">Estrategias Cognitivas</h5>
              <ul className="text-xs space-y-1">
                <li><span className="font-bold">Reevaluación cognitiva:</span> Reinterpretación del significado emocional</li>
                <li><span className="font-bold">Distanciamiento:</span> Perspectiva de tercera persona</li>
                <li><span className="font-bold">Aceptación:</span> Reconocimiento sin resistencia</li>
                <li><span className="font-bold">Mindfulness:</span> Atención plena al momento presente</li>
              </ul>
            </div>

            <div className="border border-green-500 p-3 rounded">
              <h5 className="font-bold text-sm mb-2">Estrategias Conductuales</h5>
              <ul className="text-xs space-y-1">
                <li><span className="font-bold">Modificación situacional:</span> Cambio del contexto emocional</li>
                <li><span className="font-bold">Despliegue atencional:</span> Redirección del foco</li>
                <li><span className="font-bold">Expresión emocional:</span> Comunicación de estados internos</li>
                <li><span className="font-bold">Activación conductual:</span> Acciones que modifican el estado</li>
              </ul>
            </div>

            <div className="border border-green-500 p-3 rounded">
              <h5 className="font-bold text-sm mb-2">Regulación Automática vs. Controlada</h5>
              <ul className="text-xs space-y-1">
                <li><span className="font-bold">Automática:</span> Habituación, supresión inconsciente</li>
                <li><span className="font-bold">Controlada:</span> Esfuerzo consciente, uso de recursos</li>
                <li><span className="font-bold">Eficiencia:</span> La regulación automática consume menos recursos</li>
                <li><span className="font-bold">Flexibilidad:</span> La controlada permite mayor adaptación</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              La regulación emocional eficaz requiere un balance entre estrategias automáticas y controladas, 
              similar a la optimización de código que combina rutinas eficientes con flexibilidad adaptativa.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "inteligencia" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Inteligencia Emocional</h4>
          <p className="mb-2">Competencias para el procesamiento eficiente de información emocional:</p>

          <div className="space-y-3">
            <div className="border border-green-500 p-3 rounded">
              <h5 className="font-bold text-sm mb-2">Modelo de Cuatro Ramas (Mayer-Salovey)</h5>
              <ul className="text-xs space-y-1">
                <li><span className="font-bold">1. Percepción:</span> Identificación precisa de emociones</li>
                <li><span className="font-bold">2. Uso:</span> Utilización de emociones para facilitar el pensamiento</li>
                <li><span className="font-bold">3. Comprensión:</span> Análisis de causas y consecuencias emocionales</li>
                <li><span className="font-bold">4. Regulación:</span> Manejo efectivo de emociones propias y ajenas</li>
              </ul>
            </div>

            <div className="border border-green-500 p-3 rounded">
              <h5 className="font-bold text-sm mb-2">Competencias Intrapersonales</h5>
              <ul className="text-xs space-y-1">
                <li><span className="font-bold">Autoconciencia:</span> Monitoreo de estados emocionales internos</li>
                <li><span className="font-bold">Autorregulación:</span> Control de impulsos y gestión del estrés</li>
                <li><span className="font-bold">Automotivación:</span> Orientación hacia objetivos a largo plazo</li>
                <li><span className="font-bold">Resiliencia:</span> Recuperación ante adversidades</li>
              </ul>
            </div>

            <div className="border border-green-500 p-3 rounded">
              <h5 className="font-bold text-sm mb-2">Competencias Interpersonales</h5>
              <ul className="text-xs space-y-1">
                <li><span className="font-bold">Empatía:</span> Comprensión de estados emocionales ajenos</li>
                <li><span className="font-bold">Habilidades sociales:</span> Manejo de relaciones interpersonales</li>
                <li><span className="font-bold">Comunicación emocional:</span> Expresión clara de estados afectivos</li>
                <li><span className="font-bold">Influencia:</span> Capacidad de modular emociones grupales</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              La inteligencia emocional puede conceptualizarse como la eficiencia del sistema operativo emocional: 
              mayor velocidad de procesamiento, menor uso de recursos y mejor gestión de errores.
            </p>
          </div>
        </div>
      )}

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
        <p>Usa "taxonomia", "propiedades", "neurociencia", "neurotransmisores", "regulacion", "inteligencia" o "analizar" para explorar diferentes aspectos del sistema emocional.</p>
        <p>También puedes escribir el nombre de una emoción específica para analizarla en detalle.</p>
        <p>Prueba "simular [situación]" para ejecutar una simulación emocional interactiva.</p>
      </div>

      <div className="mt-6 border-t border-green-500 pt-4">
        <h4 className="font-bold mb-2">Simulador Emocional Interactivo</h4>
        <div className="border border-green-500 p-3 mb-4">
          <p className="text-sm mb-3">Selecciona una situación para simular la respuesta emocional:</p>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {[
              { situacion: "Entrevista de trabajo", emociones: ["Ansiedad", "Esperanza", "Determinación"] },
              { situacion: "Ruptura amorosa", emociones: ["Tristeza", "Ira", "Alivio"] },
              { situacion: "Logro importante", emociones: ["Alegría", "Orgullo", "Gratitud"] },
              { situacion: "Conflicto familiar", emociones: ["Frustración", "Culpa", "Amor"] }
            ].map((escenario, index) => (
              <button
                key={index}
                onClick={() => setEmocionSeleccionada(escenario.situacion.toLowerCase().replace(/\s+/g, '_'))}
                className="border border-green-500 p-2 text-xs rounded hover:bg-green-900/20 text-left"
              >
                <div className="font-bold">{escenario.situacion}</div>
                <div className="text-green-400">{escenario.emociones.join(", ")}</div>
              </button>
            ))}
          </div>

          {emocionSeleccionada && emocionSeleccionada.includes('_') && (
            <div className="border border-green-500 p-3 bg-black/30 rounded">
              <h5 className="font-bold mb-2 uppercase">{emocionSeleccionada.replace(/_/g, ' ')}</h5>
              
              {emocionSeleccionada === "entrevista_de_trabajo" && (
                <div className="space-y-2 text-xs">
                  <div><span className="font-bold">Fase 1 - Anticipación:</span> Ansiedad (70%), Esperanza (60%)</div>
                  <div><span className="font-bold">Respuesta fisiológica:</span> ↑ Cortisol, ↑ Frecuencia cardíaca</div>
                  <div><span className="font-bold">Estrategias de regulación:</span> Respiración profunda, visualización positiva</div>
                  <div><span className="font-bold">Fase 2 - Durante:</span> Concentración (80%), Nerviosismo (40%)</div>
                  <div><span className="font-bold">Fase 3 - Post-entrevista:</span> Alivio (70%), Incertidumbre (50%)</div>
                </div>
              )}

              {emocionSeleccionada === "ruptura_amorosa" && (
                <div className="space-y-2 text-xs">
                  <div><span className="font-bold">Fase 1 - Shock inicial:</span> Negación (90%), Confusión (80%)</div>
                  <div><span className="font-bold">Respuesta neurológica:</span> ↓ Dopamina, ↑ Cortisol, activación amígdala</div>
                  <div><span className="font-bold">Fase 2 - Procesamiento:</span> Tristeza (85%), Ira (60%)</div>
                  <div><span className="font-bold">Fase 3 - Adaptación:</span> Aceptación (70%), Crecimiento personal (40%)</div>
                  <div><span className="font-bold">Duración estimada:</span> 2-6 meses para procesamiento completo</div>
                </div>
              )}

              {emocionSeleccionada === "logro_importante" && (
                <div className="space-y-2 text-xs">
                  <div><span className="font-bold">Fase 1 - Realización:</span> Sorpresa (70%), Alegría (90%)</div>
                  <div><span className="font-bold">Respuesta neurológica:</span> ↑ Dopamina, ↑ Serotonina, activación núcleo accumbens</div>
                  <div><span className="font-bold">Fase 2 - Celebración:</span> Euforia (80%), Gratitud (75%)</div>
                  <div><span className="font-bold">Fase 3 - Integración:</span> Orgullo (85%), Motivación futura (70%)</div>
                  <div><span className="font-bold">Efecto a largo plazo:</span> Aumento de autoeficacia y confianza</div>
                </div>
              )}

              {emocionSeleccionada === "conflicto_familiar" && (
                <div className="space-y-2 text-xs">
                  <div><span className="font-bold">Fase 1 - Escalada:</span> Frustración (80%), Ira (70%)</div>
                  <div><span className="font-bold">Respuesta fisiológica:</span> ↑ Noradrenalina, tensión muscular</div>
                  <div><span className="font-bold">Fase 2 - Conflicto:</span> Defensividad (90%), Dolor emocional (60%)</div>
                  <div><span className="font-bold">Fase 3 - Resolución:</span> Culpa (50%), Amor subyacente (80%)</div>
                  <div><span className="font-bold">Estrategias:</span> Comunicación asertiva, tiempo de enfriamiento</div>
                </div>
              )}
            </div>
          )}
        </div>
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

      {/* Botón del Simulador */}
      <div className="mt-6 border-t border-green-500 pt-4">
        <button
          onClick={() => setSimuladorVisible(true)}
          className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded transition-colors"
        >
          <Play className="w-4 h-4" />
          Abrir Simulador Emocional
        </button>
        <p className="text-xs text-gray-400 mt-2">
          Experimenta con diferentes estados emocionales y observa cómo interactúan en tiempo real.
        </p>
      </div>

      {/* Simulador */}
      <SimuladorEmociones 
        visible={simuladorVisible}
        onCerrar={() => setSimuladorVisible(false)}
      />
    </div>
  )
}
