"use client"

import { useState } from "react"
import { Download, Upload, RefreshCw, Sparkles, Moon, Brain, Zap, Clock, Activity, BarChart3 } from "lucide-react"

export default function ProcesosSuenos() {
  const [seccionActiva, setSeccionActiva] = useState<string | null>(null)
  const [suenoSeleccionado, setSuenoSeleccionado] = useState<string | null>(null)

  return (
    <div className="text-green-500">
      <h3 className="text-xl mb-4">Procesos de Mantenimiento: Los Sueños</h3>
      <p className="mb-4">
        Los sueños operan como un proceso ETL (Extract, Transform, Load) nocturno de mantenimiento del sistema mental.
        Durante el sueño, el cerebro ejecuta rutinas críticas de consolidación de memoria, procesamiento emocional y 
        optimización neuronal que son esenciales para el funcionamiento cognitivo óptimo.
      </p>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div
          onClick={() => setSeccionActiva(seccionActiva === "fases" ? null : "fases")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "fases" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Clock className="mb-2" />
          <h4 className="font-bold">Fases del Sueño</h4>
          <p className="text-xs">Ciclos y arquitectura del sueño</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "rem" ? null : "rem")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "rem" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Activity className="mb-2" />
          <h4 className="font-bold">Sueño REM</h4>
          <p className="text-xs">Procesamiento intensivo</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "consolidacion" ? null : "consolidacion")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "consolidacion" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Brain className="mb-2" />
          <h4 className="font-bold">Consolidación</h4>
          <p className="text-xs">Transferencia de memoria</p>
        </div>

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
          onClick={() => setSeccionActiva(seccionActiva === "neuroquimica" ? null : "neuroquimica")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "neuroquimica" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Zap className="mb-2" />
          <h4 className="font-bold">Neuroquímica</h4>
          <p className="text-xs">Neurotransmisores del sueño</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "trastornos" ? null : "trastornos")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "trastornos" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <BarChart3 className="mb-2" />
          <h4 className="font-bold">Trastornos</h4>
          <p className="text-xs">Disfunciones del sistema</p>
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

      {seccionActiva === "fases" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Fases del Sueño y Arquitectura Nocturna</h4>
          <p className="mb-4">El sueño se organiza en ciclos de aproximadamente 90-120 minutos, cada uno compuesto por diferentes fases:</p>

          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h5 className="font-bold text-blue-400">Fase 1 - NREM (Transición)</h5>
              <p className="text-sm mb-2">Duración: 5-10 minutos</p>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Ondas theta (4-8 Hz) dominan la actividad cerebral</li>
                <li>Disminución gradual de la actividad muscular</li>
                <li>Hipnagogias: imágenes y sensaciones de transición</li>
                <li>Fácil despertar con estímulos externos</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h5 className="font-bold text-purple-400">Fase 2 - NREM (Sueño Ligero)</h5>
              <p className="text-sm mb-2">Duración: 45-55% del tiempo total de sueño</p>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Husos del sueño (12-14 Hz) y complejos K</li>
                <li>Disminución de la temperatura corporal</li>
                <li>Reducción del ritmo cardíaco y respiratorio</li>
                <li>Inicio de la consolidación de memoria procedimental</li>
              </ul>
            </div>

            <div className="border-l-4 border-indigo-500 pl-4">
              <h5 className="font-bold text-indigo-400">Fase 3 - NREM (Sueño Profundo)</h5>
              <p className="text-sm mb-2">Duración: 15-20% del tiempo total</p>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Ondas delta (0.5-4 Hz) de alta amplitud</li>
                <li>Liberación de hormona del crecimiento</li>
                <li>Consolidación de memoria declarativa</li>
                <li>Limpieza de metabolitos cerebrales (sistema glinfático)</li>
                <li>Muy difícil despertar, desorientación si ocurre</li>
              </ul>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h5 className="font-bold text-red-400">Fase REM (Rapid Eye Movement)</h5>
              <p className="text-sm mb-2">Duración: 20-25% del tiempo total</p>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Actividad cerebral similar al estado de vigilia</li>
                <li>Atonía muscular (parálisis temporal)</li>
                <li>Movimientos oculares rápidos característicos</li>
                <li>Sueños más vívidos y complejos</li>
                <li>Procesamiento emocional y creatividad</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              La fragmentación del sueño interrumpe estos ciclos naturales, causando déficits cognitivos similares 
              a errores de compilación en el procesamiento nocturno. La privación selectiva de REM afecta 
              especialmente el procesamiento emocional y la creatividad.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "rem" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Sueño REM: El Procesador Intensivo Nocturno</h4>
          <p className="mb-4">El sueño REM representa el estado de máxima actividad de procesamiento durante el descanso:</p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="border border-red-500/50 rounded p-3">
              <h5 className="font-bold text-red-400 mb-2">Características Neurofisiológicas</h5>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Actividad colinérgica elevada</li>
                <li>Supresión de noradrenalina y serotonina</li>
                <li>Flujo sanguíneo cerebral aumentado</li>
                <li>Temperatura corporal desregulada</li>
                <li>Actividad del tronco encefálico intensa</li>
              </ul>
            </div>

            <div className="border border-red-500/50 rounded p-3">
              <h5 className="font-bold text-red-400 mb-2">Funciones Cognitivas</h5>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Integración de memorias emocionales</li>
                <li>Resolución creativa de problemas</li>
                <li>Procesamiento de experiencias traumáticas</li>
                <li>Fortalecimiento de conexiones sinápticas</li>
                <li>Simulación de escenarios futuros</li>
              </ul>
            </div>
          </div>

          <div className="mb-4">
            <h5 className="font-bold mb-2">Teorías del Procesamiento REM:</h5>
            <div className="space-y-3">
              <div className="border-l-4 border-yellow-500 pl-4">
                <h6 className="font-bold text-yellow-400">Teoría de Activación-Síntesis (Hobson & McCarley)</h6>
                <p className="text-sm">Los sueños resultan del intento del cerebro de dar sentido a la activación aleatoria del tronco encefálico.</p>
              </div>
              <div className="border-l-4 border-cyan-500 pl-4">
                <h6 className="font-bold text-cyan-400">Teoría de Simulación de Amenazas (Revonsuo)</h6>
                <p className="text-sm">Los sueños funcionan como simuladores de situaciones peligrosas para mejorar las respuestas de supervivencia.</p>
              </div>
              <div className="border-l-4 border-pink-500 pl-4">
                <h6 className="font-bold text-pink-400">Teoría de Consolidación Emocional (Walker)</h6>
                <p className="text-sm">El REM procesa y desensibiliza las memorias emocionales, separando el contenido del afecto.</p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              La privación de REM genera "rebote REM" - el sistema compensa aumentando la densidad REM en noches posteriores. 
              Los antidepresivos que suprimen REM pueden afectar el procesamiento emocional, similar a deshabilitar 
              rutinas críticas de mantenimiento del sistema.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "consolidacion" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Consolidación de Memoria: Transferencia y Optimización</h4>
          <p className="mb-4">Durante el sueño ocurre la transferencia sistemática de información desde el almacenamiento temporal al permanente:</p>

          <div className="space-y-4">
            <div className="border border-blue-500/50 rounded p-3">
              <h5 className="font-bold text-blue-400 mb-2">Consolidación Sistémica</h5>
              <p className="text-sm mb-2">Transferencia hipocampo → neocórtex</p>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li><strong>Replay neuronal:</strong> Reactivación de secuencias de actividad diurna</li>
                <li><strong>Ondas sharp-wave ripples:</strong> Sincronización hipocampal (150-250 Hz)</li>
                <li><strong>Husos del sueño:</strong> Facilitación de transferencia talamocortical</li>
                <li><strong>Oscilaciones lentas:</strong> Coordinación de la consolidación cortical</li>
              </ul>
            </div>

            <div className="border border-purple-500/50 rounded p-3">
              <h5 className="font-bold text-purple-400 mb-2">Consolidación Sináptica</h5>
              <p className="text-sm mb-2">Fortalecimiento de conexiones neuronales</p>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li><strong>Potenciación a largo plazo (LTP):</strong> Fortalecimiento sináptico</li>
                <li><strong>Síntesis proteica:</strong> Construcción de nuevas sinapsis</li>
                <li><strong>Poda sináptica:</strong> Eliminación de conexiones débiles</li>
                <li><strong>Homeostasis sináptica:</strong> Reescalado global de fuerzas sinápticas</li>
              </ul>
            </div>

            <div className="border border-green-500/50 rounded p-3">
              <h5 className="font-bold text-green-400 mb-2">Tipos de Memoria Consolidada</h5>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="font-bold">NREM (Sueño Profundo):</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Memoria declarativa</li>
                    <li>Hechos y eventos</li>
                    <li>Conocimiento semántico</li>
                    <li>Memoria espacial</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold">REM:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Memoria procedimental</li>
                    <li>Habilidades motoras</li>
                    <li>Memoria emocional</li>
                    <li>Insight creativo</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              La interferencia durante la consolidación (despertares frecuentes, alcohol, medicamentos) 
              puede corromper la transferencia de memoria, similar a interrupciones durante operaciones 
              críticas de base de datos. El "forgetting to remember" es un proceso activo de optimización del almacenamiento.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "neuroquimica" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Neuroquímica del Sueño: Los Moduladores del Sistema</h4>
          <p className="mb-4">El sueño está regulado por una compleja orquesta de neurotransmisores y hormonas:</p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="space-y-3">
              <div className="border border-blue-500/50 rounded p-3">
                <h5 className="font-bold text-blue-400">Promotores del Sueño</h5>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li><strong>GABA:</strong> Inhibición neuronal generalizada</li>
                  <li><strong>Adenosina:</strong> Acumulación de "presión de sueño"</li>
                  <li><strong>Melatonina:</strong> Sincronización circadiana</li>
                  <li><strong>Galanina:</strong> Promoción del sueño NREM</li>
                  <li><strong>Prostaglandina D2:</strong> Inducción del sueño</li>
                </ul>
              </div>

              <div className="border border-red-500/50 rounded p-3">
                <h5 className="font-bold text-red-400">Promotores de Vigilia</h5>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li><strong>Acetilcolina:</strong> Activación cortical y REM</li>
                  <li><strong>Noradrenalina:</strong> Alerta y atención</li>
                  <li><strong>Dopamina:</strong> Motivación y recompensa</li>
                  <li><strong>Serotonina:</strong> Regulación del humor</li>
                  <li><strong>Histamina:</strong> Mantenimiento de vigilia</li>
                  <li><strong>Orexina/Hipocretina:</strong> Estabilización de vigilia</li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <div className="border border-purple-500/50 rounded p-3">
                <h5 className="font-bold text-purple-400">Regulación Hormonal</h5>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li><strong>Cortisol:</strong> Ritmo circadiano, despertar matutino</li>
                  <li><strong>Hormona del crecimiento:</strong> Liberación en sueño profundo</li>
                  <li><strong>Prolactina:</strong> Modulación del sueño REM</li>
                  <li><strong>Leptina:</strong> Supresión del apetito nocturno</li>
                  <li><strong>Grelina:</strong> Regulación del hambre</li>
                </ul>
              </div>

              <div className="border border-yellow-500/50 rounded p-3">
                <h5 className="font-bold text-yellow-400">Sistemas de Control</h5>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li><strong>Núcleo supraquiasmático:</strong> Reloj maestro</li>
                  <li><strong>Núcleo ventrolateral preóptico:</strong> Switch del sueño</li>
                  <li><strong>Locus coeruleus:</strong> Control noradrenérgico</li>
                  <li><strong>Núcleos del rafe:</strong> Sistema serotoninérgico</li>
                  <li><strong>Área tegmental ventral:</strong> Sistema dopaminérgico</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Los trastornos del sueño a menudo reflejan desequilibrios neuroquímicos específicos. 
              La cafeína bloquea receptores de adenosina, interfiriendo con la acumulación natural de presión de sueño. 
              Los medicamentos que alteran estos sistemas pueden generar efectos secundarios predecibles en el ciclo sueño-vigilia.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "trastornos" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Trastornos del Sueño: Disfunciones del Sistema</h4>
          <p className="mb-4">Los trastornos del sueño representan fallos en diferentes componentes del sistema de mantenimiento nocturno:</p>

          <div className="space-y-4">
            <div className="border border-red-500/50 rounded p-3">
              <h5 className="font-bold text-red-400 mb-2">Insomnio: Fallos de Inicialización</h5>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="font-bold mb-1">Tipos:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Insomnio de conciliación</li>
                    <li>Insomnio de mantenimiento</li>
                    <li>Despertar precoz</li>
                    <li>Sueño no reparador</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold mb-1">Causas sistémicas:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Hiperactivación del eje HPA</li>
                    <li>Desregulación circadiana</li>
                    <li>Condicionamiento negativo</li>
                    <li>Comorbilidades médicas</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border border-blue-500/50 rounded p-3">
              <h5 className="font-bold text-blue-400 mb-2">Apnea del Sueño: Interrupciones de Proceso</h5>
              <div className="text-sm">
                <p className="mb-2"><strong>Apnea Obstructiva:</strong> Colapso de vías respiratorias superiores</p>
                <ul className="list-disc pl-5 space-y-1 mb-3">
                  <li>Fragmentación del sueño por microdespertares</li>
                  <li>Hipoxemia intermitente</li>
                  <li>Activación simpática repetida</li>
                  <li>Deterioro cognitivo progresivo</li>
                </ul>
                <p className="mb-2"><strong>Apnea Central:</strong> Fallo en el control respiratorio</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Disfunción del tronco encefálico</li>
                  <li>Inestabilidad del control ventilatorio</li>
                  <li>Asociada con insuficiencia cardíaca</li>
                </ul>
              </div>
            </div>

            <div className="border border-purple-500/50 rounded p-3">
              <h5 className="font-bold text-purple-400 mb-2">Parasomnias: Errores de Ejecución</h5>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="font-bold mb-1">NREM:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Sonambulismo</li>
                    <li>Terrores nocturnos</li>
                    <li>Despertar confusional</li>
                    <li>Síndrome de alimentación nocturna</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold mb-1">REM:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Trastorno de conducta REM</li>
                    <li>Parálisis del sueño</li>
                    <li>Pesadillas recurrentes</li>
                    <li>Alucinaciones hipnagógicas</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border border-yellow-500/50 rounded p-3">
              <h5 className="font-bold text-yellow-400 mb-2">Trastornos Circadianos: Desincronización</h5>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li><strong>Jet lag:</strong> Desajuste temporal agudo</li>
                <li><strong>Trabajo por turnos:</strong> Conflicto con ritmos endógenos</li>
                <li><strong>Síndrome de fase retrasada:</strong> Retraso del reloj biológico</li>
                <li><strong>Síndrome de fase avanzada:</strong> Adelanto patológico</li>
                <li><strong>Ritmo libre:</strong> Pérdida de sincronización externa</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Los trastornos del sueño generan cascadas de errores sistémicos: fragmentación → déficit de consolidación → 
              deterioro cognitivo → alteraciones emocionales → disfunción inmune. El diagnóstico preciso requiere 
              polisomnografía para identificar el componente específico del sistema que falla.
            </p>
          </div>
        </div>
      )}
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
      )

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
        <p>Escribe "etl", "fases", "rem", "consolidacion", "neuroquimica" o "trastornos" en la terminal para explorar diferentes aspectos del procesamiento onírico.</p>
        <p>Usa "caracteristicas" para ver las propiedades del proceso onírico.</p>
        <p>Prueba "simular [tipo_sueño]" para ejecutar una simulación del procesamiento onírico.</p>
      </div>

      <div className="mt-6 border-t border-green-500 pt-4">
        <h4 className="font-bold mb-2">Simulador de Procesamiento Onírico</h4>
        <div className="border border-green-500 p-3 mb-4">
          <p className="text-sm mb-3">Selecciona un tipo de sueño para simular su procesamiento:</p>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {[
              { tipo: "Sueño de consolidación", descripcion: "Procesamiento de memoria declarativa" },
              { tipo: "Sueño creativo", descripcion: "Conexiones innovadoras y resolución de problemas" },
              { tipo: "Pesadilla", descripcion: "Procesamiento de traumas y miedos" },
              { tipo: "Sueño lúcido", descripcion: "Consciencia durante el estado onírico" }
            ].map((sueno, index) => (
              <button
                key={index}
                onClick={() => setSuenoSeleccionado(sueno.tipo.toLowerCase().replace(/\s+/g, '_'))}
                className="border border-green-500 p-2 text-xs rounded hover:bg-green-900/20 text-left"
              >
                <div className="font-bold">{sueno.tipo}</div>
                <div className="text-green-400">{sueno.descripcion}</div>
              </button>
            ))}
          </div>

          {suenoSeleccionado && suenoSeleccionado.includes('_') && (
            <div className="border border-green-500 p-3 bg-black/30 rounded">
              <h5 className="font-bold mb-2 uppercase">{suenoSeleccionado.replace(/_/g, ' ')}</h5>
              
              {suenoSeleccionado === "sueño_de_consolidación" && (
                <div className="space-y-2 text-xs">
                  <div><span className="font-bold">Fase N2 (45-55%):</span> Husos del sueño → Transferencia hipocampo-corteza</div>
                  <div><span className="font-bold">Fase N3 (20-25%):</span> Ondas delta → Consolidación sistémica</div>
                  <div><span className="font-bold">Fase REM (20-25%):</span> Integración emocional y procedimental</div>
                  <div><span className="font-bold">Neurotransmisores:</span> ↓ Noradrenalina, ↓ Acetilcolina, ↑ GABA</div>
                  <div><span className="font-bold">Resultado:</span> Memoria a largo plazo estabilizada (85% eficiencia)</div>
                </div>
              )}

              {suenoSeleccionado === "sueño_creativo" && (
                <div className="space-y-2 text-xs">
                  <div><span className="font-bold">Activación REM:</span> Corteza prefrontal desinhibida</div>
                  <div><span className="font-bold">Conectividad:</span> Redes neuronales atípicas activadas</div>
                  <div><span className="font-bold">Procesamiento:</span> Asociaciones remotas y metáforas</div>
                  <div><span className="font-bold">Química:</span> ↑ Dopamina, ↓ Control ejecutivo</div>
                  <div><span className="font-bold">Resultado:</span> Insights creativos (probabilidad 40% mayor)</div>
                </div>
              )}

              {suenoSeleccionado === "pesadilla" && (
                <div className="space-y-2 text-xs">
                  <div><span className="font-bold">Activación:</span> Amígdala hiperactivada durante REM</div>
                  <div><span className="font-bold">Contenido:</span> Memorias traumáticas sin contexto temporal</div>
                  <div><span className="font-bold">Neuroquímica:</span> ↑ Noradrenalina, ↓ Regulación prefrontal</div>
                  <div><span className="font-bold">Función adaptativa:</span> Ensayo de respuestas de supervivencia</div>
                  <div><span className="font-bold">Intervención:</span> Terapia de ensayo de imágenes (IRT)</div>
                </div>
              )}

              {suenoSeleccionado === "sueño_lúcido" && (
                <div className="space-y-2 text-xs">
                  <div><span className="font-bold">Activación:</span> Corteza prefrontal dorsolateral activa</div>
                  <div><span className="font-bold">Consciencia:</span> Metacognición preservada en REM</div>
                  <div><span className="font-bold">Frecuencia:</span> 40Hz gamma waves en corteza parietal</div>
                  <div><span className="font-bold">Control:</span> Manipulación consciente del contenido onírico</div>
                  <div><span className="font-bold">Aplicaciones:</span> Terapia, entrenamiento, creatividad</div>
                </div>
              )}
            </div>
          )}
        </div>
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
