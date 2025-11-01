"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { ChevronRight, TerminalIcon, Brain, Database, Moon, Link, Heart, User, Users, Eye, Zap, Lightbulb } from "lucide-react"
import ArquitecturaSistema from "./modulos/arquitectura-sistema"
import SistemaMemoria from "./modulos/sistema-memoria"
import ProcesosSuenos from "./modulos/procesos-suenos"
import RegistroTemporal from "./modulos/registro-temporal"
import SistemaEmocional from "./modulos/sistema-emocional"
import SistemaPersonalidad from "./modulos/sistema-personalidad"
import RedNeuronalSocial from "./modulos/red-neuronal-social"
import ProcesamientoSensorial from "./modulos/procesamiento-sensorial"
import SistemaRecompensas from "./modulos/sistema-recompensas"
import SistemaMetacognicion from "./modulos/sistema-metacognicion"

type Modulo = "inicio" | "arquitectura" | "memoria" | "suenos" | "registro" | "emociones" | "personalidad" | "social" | "sensorial" | "recompensas" | "metacognicion" | "ayuda"

export default function Terminal() {
  const [input, setInput] = useState("")
  const [historial, setHistorial] = useState<string[]>([
    "Bienvenido al Depurador Mental v1.0",
    "Cargando sistema...",
    "Sistema inicializado correctamente.",
    'Escribe "ayuda" para ver los comandos disponibles.',
  ])
  const [moduloActivo, setModuloActivo] = useState<Modulo>("inicio")
  const [usuario, setUsuario] = useState("Ingeniero")
  const [nivelAcceso, setNivelAcceso] = useState(1)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [])

  const procesarComandoPersonalidad = (comando: string) => {
    if (comando === "rasgos") {
      agregarLog("Analizando rasgos de personalidad...")
      agregarLog("Accede al módulo para ver análisis detallado de rasgos")
      return
    }
    if (comando === "arquetipos") {
      agregarLog("Mostrando arquetipos activos...")
      return
    }
    if (comando === "valores") {
      agregarLog("Analizando sistema de valores...")
      return
    }
    agregarLog(`Comando no reconocido en módulo Personalidad: ${comando}`)
    agregarLog("Comandos disponibles: rasgos, arquetipos, valores, defensa, simulador")
  }

  const procesarComandoSocial = (comando: string) => {
    if (comando === "topologia") {
      agregarLog("Analizando topología de red social...")
      return
    }
    if (comando === "nodos") {
      agregarLog("Analizando nodos de la red...")
      return
    }
    if (comando === "comunicacion") {
      agregarLog("Analizando patrones de comunicación...")
      return
    }
    agregarLog(`Comando no reconocido en módulo Social: ${comando}`)
    agregarLog("Comandos disponibles: topologia, nodos, comunicacion, teoria_mente, confianza")
  }

  const procesarComandoSensorial = (comando: string) => {
    if (comando === "sistemas") {
      agregarLog("Analizando sistemas sensoriales...")
      return
    }
    if (comando === "filtros") {
      agregarLog("Analizando filtros atencionales...")
      return
    }
    if (comando === "integracion") {
      agregarLog("Analizando integración multisensorial...")
      return
    }
    agregarLog(`Comando no reconocido en módulo Sensorial: ${comando}`)
    agregarLog("Comandos disponibles: sistemas, filtros, integracion, calibracion, adaptacion")
  }

  const procesarComandoRecompensas = (comando: string) => {
    if (comando === "neurotransmisores") {
      agregarLog("Analizando neurotransmisores...")
      return
    }
    if (comando === "circuitos") {
      agregarLog("Analizando circuitos de recompensa...")
      return
    }
    if (comando === "motivacion") {
      agregarLog("Analizando patrones motivacionales...")
      return
    }
    agregarLog(`Comando no reconocido en módulo Recompensas: ${comando}`)
    agregarLog("Comandos disponibles: neurotransmisores, circuitos, motivacion, habitos, gamificacion")
  }

  const procesarComandoMetacognicion = (comando: string) => {
    if (comando === "conciencia") {
      agregarLog("Analizando niveles de conciencia...")
      return
    }
    if (comando === "procesos") {
      agregarLog("Analizando procesos metacognitivos...")
      return
    }
    if (comando === "estrategias") {
      agregarLog("Analizando estrategias de aprendizaje...")
      return
    }
    agregarLog(`Comando no reconocido en módulo Metacognición: ${comando}`)
    agregarLog("Comandos disponibles: conciencia, procesos, estrategias, sesgos, reflexion")
  }

  const procesarComando = (comando: string) => {
    const comandoLower = comando.toLowerCase().trim()

    // Comandos globales disponibles en cualquier módulo
    if (comandoLower === "ayuda") {
      mostrarAyuda()
      return
    }

    if (comandoLower === "limpiar" || comandoLower === "clear") {
      setHistorial([])
      return
    }

    if (comandoLower.startsWith("nombre ")) {
      const nuevoNombre = comando.substring(7).trim()
      if (nuevoNombre) {
        setUsuario(nuevoNombre)
        agregarLog(`Nombre de usuario actualizado a: ${nuevoNombre}`)
      }
      return
    }

    // Comandos para cambiar de módulo
    if (comandoLower === "inicio" || comandoLower === "home") {
      setModuloActivo("inicio")
      agregarLog("Volviendo al módulo principal...")
      return
    }

    if (comandoLower === "arquitectura") {
      setModuloActivo("arquitectura")
      agregarLog("Accediendo al módulo de Arquitectura del Sistema...")
      return
    }

    if (comandoLower === "memoria") {
      setModuloActivo("memoria")
      agregarLog("Accediendo al módulo de Sistema de Memoria...")
      return
    }

    if (comandoLower === "suenos" || comandoLower === "sueños") {
      setModuloActivo("suenos")
      agregarLog("Accediendo al módulo de Procesos de Mantenimiento (Sueños)...")
      return
    }

    if (comandoLower === "registro") {
      setModuloActivo("registro")
      agregarLog("Accediendo al módulo de Registro Temporal (Blockchain)...")
      return
    }

    if (comandoLower === "emociones") {
      setModuloActivo("emociones")
      agregarLog("Accediendo al módulo de Sistema Emocional...")
      return
    }

    if (comandoLower === "personalidad") {
      setModuloActivo("personalidad")
      agregarLog("Accediendo al módulo de Sistema de Personalidad...")
      return
    }

    if (comandoLower === "social") {
      setModuloActivo("social")
      agregarLog("Accediendo al módulo de Red Neuronal Social...")
      return
    }

    if (comandoLower === "sensorial") {
      setModuloActivo("sensorial")
      agregarLog("Accediendo al módulo de Procesamiento Sensorial...")
      return
    }

    if (comandoLower === "recompensas") {
      setModuloActivo("recompensas")
      agregarLog("Accediendo al módulo de Sistema de Recompensas...")
      return
    }

    if (comandoLower === "metacognicion" || comandoLower === "metacognición") {
      setModuloActivo("metacognicion")
      agregarLog("Accediendo al módulo de Sistema de Metacognición...")
      return
    }

    // Si estamos en el módulo de inicio, procesamos comandos específicos
    if (moduloActivo === "inicio") {
      if (comandoLower === "modulos" || comandoLower === "módulos") {
        mostrarModulos()
        return
      }

      if (comandoLower === "estado") {
        mostrarEstadoSistema()
        return
      }

      if (comandoLower === "version" || comandoLower === "versión") {
        agregarLog("Depurador Mental v1.0 - Mayo 2025")
        agregarLog('Basado en "La Mente Humana como Sistema Computacional"')
        return
      }
    }

    // Si llegamos aquí, delegamos el comando al módulo activo
    switch (moduloActivo) {
      case "arquitectura":
        procesarComandoArquitectura(comandoLower)
        break
      case "memoria":
        procesarComandoMemoria(comandoLower)
        break
      case "suenos":
        procesarComandoSuenos(comandoLower)
        break
      case "registro":
        procesarComandoRegistro(comandoLower)
        break
      case "emociones":
        procesarComandoEmociones(comandoLower)
        break
      case "personalidad":
        procesarComandoPersonalidad(comandoLower)
        break
      case "social":
        procesarComandoSocial(comandoLower)
        break
      case "sensorial":
        procesarComandoSensorial(comandoLower)
        break
      case "recompensas":
        procesarComandoRecompensas(comandoLower)
        break
      case "metacognicion":
        procesarComandoMetacognicion(comandoLower)
        break
      default:
        agregarLog(`Comando no reconocido: ${comando}`)
        agregarLog('Escribe "ayuda" para ver los comandos disponibles.')
    }
  }

  const procesarComandoArquitectura = (comando: string) => {
    if (comando === "componentes") {
      agregarLog("Componentes principales del sistema:")
      agregarLog("1. Contexto de ejecución")
      agregarLog("2. Variables de estado")
      agregarLog("3. Gestión de eventos")
      agregarLog("4. Control de versiones")
      return
    }

    if (comando === "contexto") {
      agregarLog("Analizando contexto de ejecución...")
      agregarLog("- Hardware biológico: Estructura neuronal y fisiológica")
      agregarLog("- Sistema operativo social: Familia, cultura, entorno social")
      agregarLog("- Interfaces de entrada: Sistemas sensoriales")
      agregarLog("- Interfaces de salida: Sistemas motores y expresivos")
      return
    }

    if (comando === "variables") {
      agregarLog("Analizando variables de estado...")
      agregarLog("- Creencias: Parámetros que filtran la interpretación de la realidad")
      agregarLog("- Valores: Funciones de evaluación que priorizan respuestas")
      agregarLog("- Traumas: Interrupciones críticas en el flujo normal de procesamiento")
      agregarLog("- Deseos: Vectores direccionales que orientan comportamientos")
      return
    }

    if (comando === "eventos") {
      agregarLog("Analizando gestión de eventos...")
      agregarLog("- Interacciones sociales: Transacciones entre sistemas")
      agregarLog("- Desafíos vitales: Casos de prueba del sistema")
      agregarLog("- Hitos existenciales: Actualizaciones mayores del sistema")
      return
    }

    if (comando === "versiones") {
      agregarLog("Analizando control de versiones...")
      agregarLog("- Desarrollo evolutivo: Modificaciones a lo largo del tiempo")
      agregarLog("- Aprendizaje adaptativo: Optimizaciones basadas en experiencia")
      agregarLog("- Resiliencia: Mecanismos de recuperación ante fallos")
      return
    }

    agregarLog(`Comando no reconocido en módulo Arquitectura: ${comando}`)
    agregarLog("Comandos disponibles: componentes, contexto, variables, eventos, versiones")
  }

  const procesarComandoMemoria = (comando: string) => {
    if (comando === "tipos") {
      agregarLog("Tipos de memoria en el sistema:")
      agregarLog("1. Memoria consciente (localStorage)")
      agregarLog("2. Memoria subconsciente (Base de datos distribuida)")
      agregarLog("3. Interacción entre sistemas de memoria")
      return
    }

    if (comando === "consciente") {
      agregarLog("Analizando memoria consciente (localStorage)...")
      agregarLog("Características principales:")
      agregarLog("- Almacenamiento volátil de corto plazo")
      agregarLog("- Acceso inmediato a alta velocidad")
      agregarLog("- Capacidad limitada (5-9 elementos simultáneos)")
      agregarLog("- Optimizada para el contexto de ejecución actual")
      agregarLog("- Sobrescritura constante con nuevos datos")
      return
    }

    if (comando === "subconsciente") {
      agregarLog("Analizando memoria subconsciente (Base de datos distribuida)...")
      agregarLog("Características arquitectónicas:")
      agregarLog("- Repositorio extenso con capacidad cuasi-ilimitada")
      agregarLog("- Estructura compleja y parcialmente redundante")
      agregarLog("- Indexación multi-dimensional por relevancia emocional")
      agregarLog("- Acceso asincrónico y parcialmente restringido")
      agregarLog("- Persistencia a largo plazo con degradación selectiva")
      return
    }

    if (comando === "componentes") {
      agregarLog("Componentes estructurales de la memoria subconsciente:")
      agregarLog("- Memoria episódica: Registros de experiencias temporalmente indexadas")
      agregarLog("- Memoria semántica: Conocimiento conceptual descontextualizado")
      agregarLog("- Memoria procedimental: Rutinas de ejecución automatizadas")
      agregarLog("- Memoria emocional: Patrones de respuesta afectiva")
      agregarLog("- Memoria implícita: Asociaciones y heurísticas no declarativas")
      return
    }

    if (comando === "interaccion" || comando === "interacción") {
      agregarLog("Analizando interacción entre sistemas de memoria...")
      agregarLog("- Transferencia selectiva de datos relevantes")
      agregarLog("- Consolidación periódica durante periodos de baja actividad")
      agregarLog("- Sincronización durante estados alterados de conciencia")
      return
    }

    agregarLog(`Comando no reconocido en módulo Memoria: ${comando}`)
    agregarLog("Comandos disponibles: tipos, consciente, subconsciente, componentes, interaccion")
  }

  const procesarComandoSuenos = (comando: string) => {
    if (comando === "funciones") {
      agregarLog("Funciones principales de los sueños:")
      agregarLog(
        "Los sueños operan como un proceso ETL (Extract, Transform, Load) nocturno de mantenimiento del sistema",
      )
      return
    }

    if (comando === "extraccion" || comando === "extracción") {
      agregarLog("Analizando fase de Extracción (Extract)...")
      agregarLog("- Recuperación de datos diarios del localStorage consciente")
      agregarLog("- Selección de información emocionalmente significativa")
      agregarLog("- Identificación de patrones incompletos o problemáticos")
      agregarLog("- Acceso a registros históricos relacionados")
      return
    }

    if (comando === "transformacion" || comando === "transformación") {
      agregarLog("Analizando fase de Transformación (Transform)...")
      agregarLog("- Reorganización de datos fragmentados")
      agregarLog("- Integración con esquemas existentes")
      agregarLog("- Procesamiento de información emocional pendiente")
      agregarLog("- Generación de hipótesis conectivas (narrativas oníricas)")
      agregarLog("- Simulación de escenarios potenciales")
      return
    }

    if (comando === "carga") {
      agregarLog("Analizando fase de Carga (Load)...")
      agregarLog("- Consolidación en memoria a largo plazo")
      agregarLog("- Actualización de esquemas mentales")
      agregarLog("- Fortalecimiento de conexiones neuronales relevantes")
      agregarLog("- Priorización de información adaptativa")
      agregarLog("- Descarte selectivo de datos redundantes o irrelevantes")
      return
    }

    if (comando === "caracteristicas" || comando === "características") {
      agregarLog("Características del proceso onírico:")
      agregarLog("- Procesamiento no-lineal: Narrativas que desafían la lógica secuencial")
      agregarLog("- Alta simbolización: Representación abstracta y metafórica de datos")
      agregarLog("- Intensidad emocional variable: Priorización basada en relevancia afectiva")
      agregarLog("- Desinhibición creativa: Conexiones no convencionales entre conceptos")
      agregarLog("- Auto-organización emergente: Patrones que emergen sin dirección consciente")
      return
    }

    agregarLog(`Comando no reconocido en módulo Sueños: ${comando}`)
    agregarLog("Comandos disponibles: funciones, extraccion, transformacion, carga, caracteristicas")
  }

  const procesarComandoRegistro = (comando: string) => {
    if (comando === "estructura") {
      agregarLog("Estructura de la cadena vital (blockchain):")
      agregarLog("La experiencia humana puede conceptualizarse como una blockchain mental")
      return
    }

    if (comando === "unidades") {
      agregarLog("Unidades estructurales de la blockchain vital:")
      agregarLog("- Bloques temporales: Periodos vitales (días, eventos significativos)")
      agregarLog("- Transacciones: Interacciones, decisiones, experiencias")
      agregarLog("- Datos encadenados: Cada bloque conectado con los anteriores")
      agregarLog("- Validación emocional: La relevancia afectiva determina la persistencia")
      agregarLog("- Hash existencial: Cada experiencia afecta la interpretación de las siguientes")
      return
    }

    if (comando === "propiedades") {
      agregarLog("Propiedades del sistema blockchain vital:")
      agregarLog("- Inmutabilidad relativa: Imposibilidad de borrar completamente el pasado")
      agregarLog("- Accesibilidad variable: No todo es accesible simultáneamente")
      agregarLog("- Distribución temporal: Registro extendido a lo largo del tiempo vital")
      agregarLog("- Reinterpretación posible: Reorganización del significado de eventos pasados")
      agregarLog("- Bifurcaciones adaptativas: Cambios de dirección vital como ramificaciones")
      return
    }

    if (comando === "recuperacion" || comando === "recuperación") {
      agregarLog("Mecanismos de recuperación de la blockchain vital:")
      agregarLog("- Claves contextuales: Estímulos relacionados activan registros específicos")
      agregarLog("- Minería emocional: Las emociones facilitan acceso a eventos relacionados")
      agregarLog("- Procesos asociativos: Conexiones entre eventos por similitud o contigüidad")
      agregarLog("- Consolidación narrativa: Integración en historias coherentes")
      agregarLog("- Reconstrucción dinámica: Los recuerdos se modifican al ser accedidos")
      return
    }

    agregarLog(`Comando no reconocido en módulo Registro Temporal: ${comando}`)
    agregarLog("Comandos disponibles: estructura, unidades, propiedades, recuperacion")
  }

  const procesarComandoEmociones = (comando: string) => {
    if (comando === "funciones") {
      agregarLog("Funciones de las emociones como metadatos:")
      agregarLog("Las emociones funcionan como un sistema de metadatos que:")
      agregarLog("- Categorizan eventos por su relevancia adaptativa")
      agregarLog("- Priorizan el procesamiento de información significativa")
      agregarLog("- Facilitan la recuperación de memorias relacionadas")
      agregarLog("- Optimizan la velocidad de respuesta ante situaciones críticas")
      agregarLog("- Estructuran la experiencia subjetiva en patrones reconocibles")
      return
    }

    if (comando === "taxonomia" || comando === "taxonomía") {
      agregarLog("Taxonomía emocional básica:")
      agregarLog("- Miedo: Sistema de alerta temprana y evitación de amenazas")
      agregarLog("- Alegría: Refuerzo positivo para comportamientos adaptativos")
      agregarLog("- Tristeza: Proceso de reorganización tras pérdidas significativas")
      agregarLog("- Ira: Movilización de recursos ante obstáculos o injusticias")
      agregarLog("- Sorpresa: Interrupción de procesos para reorientación atencional")
      agregarLog("- Asco: Protección contra contaminantes biológicos o morales")
      agregarLog("- Amor: Vinculación social y mantenimiento de cooperación")
      return
    }

    if (comando === "propiedades") {
      agregarLog("Propiedades del sistema emocional:")
      agregarLog("- Complejidad combinatoria: Emociones secundarias como mezclas de primarias")
      agregarLog("- Modulación contextual: Intensidad variable según entorno y aprendizaje")
      agregarLog("- Abstracción progresiva: Desde respuestas instintivas a sentimientos complejos")
      agregarLog("- Regulación adaptativa: Mecanismos de control y equilibrio emocional")
      agregarLog("- Transmisión social: Contagio emocional y empatía como sincronización entre sistemas")
      return
    }

    if (comando === "analizar") {
      agregarLog("Iniciando análisis emocional...")
      agregarLog("Selecciona una emoción para analizar (miedo, alegria, tristeza, ira, sorpresa, asco, amor):")
      return
    }

    // Análisis de emociones específicas
    if (["miedo", "alegria", "alegría", "tristeza", "ira", "sorpresa", "asco", "amor"].includes(comando)) {
      analizarEmocion(comando)
      return
    }

    agregarLog(`Comando no reconocido en módulo Emociones: ${comando}`)
    agregarLog("Comandos disponibles: funciones, taxonomia, propiedades, analizar, [nombre de emoción]")
  }

  const analizarEmocion = (emocion: string) => {
    switch (emocion) {
      case "miedo":
        agregarLog("Analizando emoción: MIEDO")
        agregarLog("Función computacional: Sistema de alerta temprana y evitación de amenazas")
        agregarLog("Manifestaciones físicas: Aumento de ritmo cardíaco, dilatación pupilar, tensión muscular")
        agregarLog("Procesos cognitivos: Evaluación de riesgos, preparación para huida o lucha")
        agregarLog("Valor adaptativo: Protección ante peligros potenciales")
        break
      case "alegria":
      case "alegría":
        agregarLog("Analizando emoción: ALEGRÍA")
        agregarLog("Función computacional: Refuerzo positivo para comportamientos adaptativos")
        agregarLog("Manifestaciones físicas: Liberación de endorfinas, relajación muscular, sonrisa")
        agregarLog("Procesos cognitivos: Ampliación atencional, creatividad aumentada")
        agregarLog("Valor adaptativo: Motivación para repetir acciones beneficiosas")
        break
      case "tristeza":
        agregarLog("Analizando emoción: TRISTEZA")
        agregarLog("Función computacional: Proceso de reorganización tras pérdidas significativas")
        agregarLog("Manifestaciones físicas: Disminución de energía, llanto, postura contraída")
        agregarLog("Procesos cognitivos: Introspección, evaluación de pérdidas")
        agregarLog("Valor adaptativo: Conservación de recursos, solicitud de apoyo social")
        break
      case "ira":
        agregarLog("Analizando emoción: IRA")
        agregarLog("Función computacional: Movilización de recursos ante obstáculos o injusticias")
        agregarLog("Manifestaciones físicas: Aumento de presión sanguínea, tensión muscular")
        agregarLog("Procesos cognitivos: Focalización en amenazas, preparación para confrontación")
        agregarLog("Valor adaptativo: Defensa de recursos y límites personales")
        break
      case "sorpresa":
        agregarLog("Analizando emoción: SORPRESA")
        agregarLog("Función computacional: Interrupción de procesos para reorientación atencional")
        agregarLog("Manifestaciones físicas: Elevación de cejas, apertura ocular, inspiración súbita")
        agregarLog("Procesos cognitivos: Reset atencional, preparación para nueva información")
        agregarLog("Valor adaptativo: Adaptación rápida a cambios inesperados")
        break
      case "asco":
        agregarLog("Analizando emoción: ASCO")
        agregarLog("Función computacional: Protección contra contaminantes biológicos o morales")
        agregarLog("Manifestaciones físicas: Náusea, arruga nasal, retracción corporal")
        agregarLog("Procesos cognitivos: Evaluación de contaminación potencial")
        agregarLog("Valor adaptativo: Evitación de sustancias nocivas o situaciones perjudiciales")
        break
      case "amor":
        agregarLog("Analizando emoción: AMOR")
        agregarLog("Función computacional: Vinculación social y mantenimiento de cooperación")
        agregarLog("Manifestaciones físicas: Liberación de oxitocina, sensación de calidez")
        agregarLog("Procesos cognitivos: Atención preferente al objeto de amor, idealización")
        agregarLog("Valor adaptativo: Formación de vínculos sociales duraderos")
        break
    }
  }

  const mostrarAyuda = () => {
    agregarLog("=== AYUDA DEL SISTEMA ===")
    agregarLog("Comandos globales:")
    agregarLog("- ayuda: Muestra esta información")
    agregarLog("- limpiar/clear: Limpia la terminal")
    agregarLog("- nombre [nuevo nombre]: Cambia tu nombre de usuario")
    agregarLog("- inicio/home: Vuelve al módulo principal")

    agregarLog("\nMódulos disponibles:")
    agregarLog("- arquitectura: Accede al módulo de Arquitectura del Sistema")
    agregarLog("- memoria: Accede al módulo de Sistema de Memoria")
    agregarLog("- suenos/sueños: Accede al módulo de Procesos de Mantenimiento (Sueños)")
    agregarLog("- registro: Accede al módulo de Registro Temporal (Blockchain)")
    agregarLog("- emociones: Accede al módulo de Sistema Emocional")
    agregarLog("- personalidad: Accede al módulo de Sistema de Personalidad")
    agregarLog("- social: Accede al módulo de Red Neuronal Social")
    agregarLog("- sensorial: Accede al módulo de Procesamiento Sensorial")
    agregarLog("- recompensas: Accede al módulo de Sistema de Recompensas")
    agregarLog("- metacognicion: Accede al módulo de Sistema de Metacognición")

    agregarLog("\nComandos del módulo actual:")
    switch (moduloActivo) {
      case "inicio":
        agregarLog("- modulos/módulos: Muestra los módulos disponibles")
        agregarLog("- estado: Muestra el estado actual del sistema")
        agregarLog("- version/versión: Muestra la versión del sistema")
        break
      case "arquitectura":
        agregarLog("- componentes: Muestra los componentes principales")
        agregarLog("- contexto: Analiza el contexto de ejecución")
        agregarLog("- variables: Analiza las variables de estado")
        agregarLog("- eventos: Analiza la gestión de eventos")
        agregarLog("- versiones: Analiza el control de versiones")
        break
      case "memoria":
        agregarLog("- tipos: Muestra los tipos de memoria")
        agregarLog("- consciente: Analiza la memoria consciente")
        agregarLog("- subconsciente: Analiza la memoria subconsciente")
        agregarLog("- componentes: Muestra los componentes de la memoria")
        agregarLog("- interaccion/interacción: Analiza la interacción entre sistemas")
        break
      case "suenos":
        agregarLog("- funciones: Muestra las funciones de los sueños")
        agregarLog("- extraccion/extracción: Analiza la fase de extracción")
        agregarLog("- transformacion/transformación: Analiza la fase de transformación")
        agregarLog("- carga: Analiza la fase de carga")
        agregarLog("- caracteristicas/características: Muestra las características del proceso")
        break
      case "registro":
        agregarLog("- estructura: Muestra la estructura de la blockchain vital")
        agregarLog("- unidades: Analiza las unidades estructurales")
        agregarLog("- propiedades: Muestra las propiedades del sistema")
        agregarLog("- recuperacion/recuperación: Analiza los mecanismos de recuperación")
        break
      case "emociones":
        agregarLog("- funciones: Muestra las funciones de las emociones")
        agregarLog("- taxonomia/taxonomía: Muestra la taxonomía emocional básica")
        agregarLog("- propiedades: Muestra las propiedades del sistema emocional")
        agregarLog("- analizar: Inicia un análisis emocional")
        agregarLog("- [nombre de emoción]: Analiza una emoción específica")
        break
      case "personalidad":
        agregarLog("- rasgos: Analiza rasgos de personalidad")
        agregarLog("- arquetipos: Muestra arquetipos activos")
        agregarLog("- valores: Analiza sistema de valores")
        agregarLog("- defensa: Analiza mecanismos de defensa")
        agregarLog("- simulador: Accede al simulador de personalidad")
        break
      case "social":
        agregarLog("- topologia: Analiza topología de red social")
        agregarLog("- nodos: Analiza nodos de la red")
        agregarLog("- comunicacion: Analiza patrones de comunicación")
        agregarLog("- teoria_mente: Analiza teoría de la mente")
        agregarLog("- confianza: Analiza sistema de confianza")
        break
      case "sensorial":
        agregarLog("- sistemas: Analiza sistemas sensoriales")
        agregarLog("- filtros: Analiza filtros atencionales")
        agregarLog("- integracion: Analiza integración multisensorial")
        agregarLog("- calibracion: Analiza calibración sensorial")
        agregarLog("- adaptacion: Analiza adaptación sensorial")
        break
      case "recompensas":
        agregarLog("- neurotransmisores: Analiza neurotransmisores")
        agregarLog("- circuitos: Analiza circuitos de recompensa")
        agregarLog("- motivacion: Analiza patrones motivacionales")
        agregarLog("- habitos: Analiza formación de hábitos")
        agregarLog("- gamificacion: Analiza gamificación personal")
        break
      case "metacognicion":
        agregarLog("- conciencia: Analiza niveles de conciencia")
        agregarLog("- procesos: Analiza procesos metacognitivos")
        agregarLog("- estrategias: Analiza estrategias de aprendizaje")
        agregarLog("- sesgos: Analiza sesgos metacognitivos")
        agregarLog("- reflexion: Analiza reflexión metacognitiva")
        break
    }
  }

  const mostrarModulos = () => {
    agregarLog("=== MÓDULOS DISPONIBLES ===")
    agregarLog("1. Arquitectura del Sistema")
    agregarLog("   Explora los componentes principales de la mente humana")
    agregarLog("2. Sistema de Memoria")
    agregarLog("   Analiza la memoria consciente e inconsciente")
    agregarLog("3. Procesos de Mantenimiento (Sueños)")
    agregarLog("   Investiga cómo los sueños mantienen el sistema mental")
    agregarLog("4. Registro Temporal (Blockchain)")
    agregarLog("   Explora cómo se registran las experiencias vitales")
    agregarLog("5. Sistema Emocional")
    agregarLog("   Analiza las emociones como metadatos del sistema")
    agregarLog("6. Sistema de Personalidad")
    agregarLog("   Analiza rasgos, arquetipos y patrones de personalidad")
    agregarLog("7. Red Neuronal Social")
    agregarLog("   Explora conexiones sociales y patrones de interacción")
    agregarLog("8. Procesamiento Sensorial")
    agregarLog("   Analiza sistemas sensoriales e integración multisensorial")
    agregarLog("9. Sistema de Recompensas")
    agregarLog("   Investiga motivación, dopamina y formación de hábitos")
    agregarLog("10. Sistema de Metacognición")
    agregarLog("    Analiza el pensamiento sobre el pensamiento")
    agregarLog("\nEscribe el nombre de un módulo para acceder a él.")
  }

  const mostrarEstadoSistema = () => {
    agregarLog("=== ESTADO DEL SISTEMA ===")
    agregarLog(`Usuario: ${usuario}`)
    agregarLog(`Nivel de acceso: ${nivelAcceso}`)
    agregarLog(`Módulo activo: ${moduloActivo}`)
    agregarLog("Estado: Operativo")
    agregarLog("Memoria: 78% disponible")
    agregarLog("Procesos activos: Terminal, Depurador, Analizador")
  }

  const agregarLog = (mensaje: string) => {
    setHistorial((prev) => [...prev, mensaje])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    setHistorial((prev) => [...prev, `> ${input}`])
    procesarComando(input)
    setInput("")
  }

  const renderModuloActivo = () => {
    switch (moduloActivo) {
      case "arquitectura":
        return <ArquitecturaSistema />
      case "memoria":
        return <SistemaMemoria />
      case "suenos":
        return <ProcesosSuenos />
      case "registro":
        return <RegistroTemporal />
      case "emociones":
        return <SistemaEmocional />
      case "personalidad":
        return <SistemaPersonalidad />
      case "social":
        return <RedNeuronalSocial />
      case "sensorial":
        return <ProcesamientoSensorial />
      case "recompensas":
        return <SistemaRecompensas />
      case "metacognicion":
        return <SistemaMetacognicion />
      default:
        return null
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-2">
        <div className="bg-black border border-green-500 rounded-lg p-4 h-[70vh] flex flex-col">
          <div className="flex items-center justify-between mb-2 border-b border-green-500 pb-2">
            <div className="flex items-center">
              <TerminalIcon className="mr-2" />
              <span>Terminal de Depuración Mental</span>
            </div>
            <div>
              <span className="text-xs">Usuario: {usuario}</span>
            </div>
          </div>

          <div ref={terminalRef} className="flex-1 overflow-y-auto font-mono text-sm">
            {historial.map((linea, index) => (
              <div key={index} className={`mb-1 ${linea.startsWith(">") ? "text-yellow-400" : ""}`}>
                {linea}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="mt-2 flex">
            <div className="mr-2 text-yellow-400">
              <ChevronRight />
            </div>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-yellow-400"
              autoFocus
            />
          </form>
        </div>
      </div>

      <div className="bg-black border border-green-500 rounded-lg p-4 h-[70vh] overflow-y-auto">
        <div className="flex items-center mb-4 border-b border-green-500 pb-2">
          {moduloActivo === "arquitectura" && <Brain className="mr-2" />}
          {moduloActivo === "memoria" && <Database className="mr-2" />}
          {moduloActivo === "suenos" && <Moon className="mr-2" />}
          {moduloActivo === "registro" && <Link className="mr-2" />}
          {moduloActivo === "emociones" && <Heart className="mr-2" />}
          {moduloActivo === "personalidad" && <User className="mr-2" />}
          {moduloActivo === "social" && <Users className="mr-2" />}
          {moduloActivo === "sensorial" && <Eye className="mr-2" />}
          {moduloActivo === "recompensas" && <Zap className="mr-2" />}
          {moduloActivo === "metacognicion" && <Lightbulb className="mr-2" />}

          <span>
            {moduloActivo === "inicio" && "Panel de Control"}
            {moduloActivo === "arquitectura" && "Arquitectura del Sistema"}
            {moduloActivo === "memoria" && "Sistema de Memoria"}
            {moduloActivo === "suenos" && "Procesos de Mantenimiento (Sueños)"}
            {moduloActivo === "registro" && "Registro Temporal (Blockchain)"}
            {moduloActivo === "emociones" && "Sistema Emocional"}
            {moduloActivo === "personalidad" && "Sistema de Personalidad"}
            {moduloActivo === "social" && "Red Neuronal Social"}
            {moduloActivo === "sensorial" && "Procesamiento Sensorial"}
            {moduloActivo === "recompensas" && "Sistema de Recompensas"}
            {moduloActivo === "metacognicion" && "Sistema de Metacognición"}
          </span>
        </div>

        {renderModuloActivo()}

        {moduloActivo === "inicio" && (
          <div>
            <h3 className="text-xl mb-4">Bienvenido al Depurador Mental</h3>
            <p className="mb-4">
              Este sistema te permite explorar la mente humana como un sistema computacional, analizando sus componentes
              y procesos a través de logs de depuración.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div
                onClick={() => setModuloActivo("arquitectura")}
                className="border border-green-500 rounded p-3 cursor-pointer hover:bg-green-900/20"
              >
                <Brain className="mb-2" />
                <h4 className="font-bold">Arquitectura</h4>
              </div>

              <div
                onClick={() => setModuloActivo("memoria")}
                className="border border-green-500 rounded p-3 cursor-pointer hover:bg-green-900/20"
              >
                <Database className="mb-2" />
                <h4 className="font-bold">Memoria</h4>
              </div>

              <div
                onClick={() => setModuloActivo("suenos")}
                className="border border-green-500 rounded p-3 cursor-pointer hover:bg-green-900/20"
              >
                <Moon className="mb-2" />
                <h4 className="font-bold">Sueños</h4>
              </div>

              <div
                onClick={() => setModuloActivo("registro")}
                className="border border-green-500 rounded p-3 cursor-pointer hover:bg-green-900/20"
              >
                <Link className="mb-2" />
                <h4 className="font-bold">Registro</h4>
              </div>

              <div
                onClick={() => setModuloActivo("emociones")}
                className="border border-green-500 rounded p-3 cursor-pointer hover:bg-green-900/20 col-span-2"
              >
                <Heart className="mb-2" />
                <h4 className="font-bold">Emociones</h4>
              </div>
            </div>

            <p className="text-xs text-green-400">Escribe "ayuda" en la terminal para ver los comandos disponibles.</p>
          </div>
        )}
      </div>
    </div>
  )
}
