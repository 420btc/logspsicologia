"use client"

import { useState } from "react"
import { Link, GitBranch, Database, Search } from "lucide-react"

export default function RegistroTemporal() {
  const [seccionActiva, setSeccionActiva] = useState<string | null>(null)

  return (
    <div className="text-green-500">
      <h3 className="text-xl mb-4">Registro Temporal: La Vida como Blockchain</h3>
      <p className="mb-4">
        La experiencia humana puede conceptualizarse como una blockchain mental, donde cada evento se conecta con los
        anteriores formando una cadena inmutable pero reinterpretable.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div
          onClick={() => setSeccionActiva(seccionActiva === "estructura" ? null : "estructura")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "estructura" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Link className="mb-2" />
          <h4 className="font-bold">Estructura de la Cadena</h4>
          <p className="text-xs">Organización de experiencias</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "unidades" ? null : "unidades")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "unidades" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Database className="mb-2" />
          <h4 className="font-bold">Unidades Estructurales</h4>
          <p className="text-xs">Bloques y transacciones</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "propiedades" ? null : "propiedades")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "propiedades" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <GitBranch className="mb-2" />
          <h4 className="font-bold">Propiedades del Sistema</h4>
          <p className="text-xs">Características de la blockchain</p>
        </div>

        <div
          onClick={() => setSeccionActiva(seccionActiva === "recuperacion" ? null : "recuperacion")}
          className={`border border-green-500 rounded p-3 cursor-pointer ${seccionActiva === "recuperacion" ? "bg-green-900/20" : "hover:bg-green-900/10"}`}
        >
          <Search className="mb-2" />
          <h4 className="font-bold">Mecanismos de Recuperación</h4>
          <p className="text-xs">Acceso a experiencias pasadas</p>
        </div>
      </div>

      {seccionActiva === "estructura" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Estructura de la Cadena Vital</h4>
          <p className="mb-2">
            La vida humana puede entenderse como una blockchain donde cada experiencia se registra y conecta con las
            anteriores:
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-bold">Secuencialidad temporal:</span> Las experiencias se organizan en una secuencia
              cronológica.
            </li>
            <li>
              <span className="font-bold">Interconexión causal:</span> Cada evento influye y es influido por eventos
              anteriores.
            </li>
            <li>
              <span className="font-bold">Persistencia relativa:</span> Los eventos pasados no pueden ser eliminados,
              solo reinterpretados.
            </li>
            <li>
              <span className="font-bold">Validación consensuada:</span> La realidad de las experiencias se valida
              socialmente.
            </li>
          </ul>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Las inconsistencias en la narrativa personal pueden verse como errores de consenso en la blockchain. La
              terapia a menudo implica reconciliar diferentes versiones de la cadena vital.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "unidades" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Unidades Estructurales</h4>
          <p className="mb-2">La blockchain vital se compone de diferentes unidades estructurales:</p>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-bold">Bloques temporales:</span> Periodos vitales (días, eventos significativos) que
              agrupan experiencias.
            </li>
            <li>
              <span className="font-bold">Transacciones:</span> Interacciones, decisiones y experiencias individuales
              que componen cada bloque.
            </li>
            <li>
              <span className="font-bold">Datos encadenados:</span> Cada bloque conectado con los anteriores mediante
              referencias causales.
            </li>
            <li>
              <span className="font-bold">Validación emocional:</span> La relevancia afectiva determina la persistencia
              y accesibilidad de los registros.
            </li>
            <li>
              <span className="font-bold">Hash existencial:</span> Cada experiencia afecta la interpretación de las
              siguientes, creando un patrón único.
            </li>
          </ul>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Los eventos traumáticos funcionan como bloques con alta intensidad emocional que distorsionan la
              interpretación de bloques posteriores, generando patrones de respuesta automáticos.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "propiedades" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Propiedades del Sistema</h4>
          <p className="mb-2">La blockchain vital presenta propiedades específicas:</p>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-bold">Inmutabilidad relativa:</span> Imposibilidad de borrar completamente el
              pasado, aunque puede reinterpretarse.
            </li>
            <li>
              <span className="font-bold">Accesibilidad variable:</span> No todos los bloques son accesibles
              simultáneamente o con la misma facilidad.
            </li>
            <li>
              <span className="font-bold">Distribución temporal:</span> Registro extendido a lo largo del tiempo vital,
              con diferentes densidades.
            </li>
            <li>
              <span className="font-bold">Reinterpretación posible:</span> Reorganización del significado de eventos
              pasados a la luz de nuevas experiencias.
            </li>
            <li>
              <span className="font-bold">Bifurcaciones adaptativas:</span> Cambios de dirección vital que funcionan
              como ramificaciones de la cadena principal.
            </li>
          </ul>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Las crisis existenciales pueden verse como conflictos entre diferentes ramificaciones potenciales de la
              blockchain vital, donde el sistema debe decidir qué camino seguir.
            </p>
          </div>
        </div>
      )}

      {seccionActiva === "recuperacion" && (
        <div className="border border-green-500 rounded p-4 mb-4 bg-black/50">
          <h4 className="font-bold mb-2">Mecanismos de Recuperación</h4>
          <p className="mb-2">El acceso a la cadena vital opera mediante diversos mecanismos:</p>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-bold">Claves contextuales:</span> Estímulos relacionados activan registros
              específicos por similitud.
            </li>
            <li>
              <span className="font-bold">Minería emocional:</span> Las emociones facilitan acceso a eventos
              relacionados con la misma carga afectiva.
            </li>
            <li>
              <span className="font-bold">Procesos asociativos:</span> Conexiones entre eventos por similitud o
              contigüidad temporal.
            </li>
            <li>
              <span className="font-bold">Consolidación narrativa:</span> Integración de eventos en historias coherentes
              que facilitan su recuperación.
            </li>
            <li>
              <span className="font-bold">Reconstrucción dinámica:</span> Los recuerdos se modifican ligeramente cada
              vez que son accedidos.
            </li>
          </ul>

          <div className="mt-4 p-3 border border-dashed border-green-500 bg-green-900/10 text-sm">
            <p className="font-bold">Análisis de depuración:</p>
            <p>
              Los falsos recuerdos pueden entenderse como errores de reconstrucción donde el sistema llena vacíos con
              información plausible pero inexacta, similar a la corrupción de datos.
            </p>
          </div>
        </div>
      )}

      <div className="mt-4 text-xs text-green-400">
        <p>Escribe "estructura" en la terminal para ver información sobre la estructura de la cadena vital.</p>
        <p>
          Usa "unidades", "propiedades" o "recuperacion" para analizar cada aspecto del registro temporal en detalle.
        </p>
      </div>

      <div className="mt-6 border-t border-green-500 pt-4">
        <h4 className="font-bold mb-2">Visualización de Blockchain Vital</h4>
        <div className="border border-green-500 p-3 text-xs">
          <pre>{`
Nacimiento ──► Infancia ──► Adolescencia ──► Adultez ──► Presente
    │            │             │              │
    ▼            ▼             ▼              ▼
 Eventos      Eventos       Eventos        Eventos
Tempranos    Formativos    Definitorios   Recientes
    │            │             │              │
    └────────────┴─────────────┴──────────────┘
                       │
                       ▼
                Narrativa Personal
                       │
                       ▼
              Proyecciones Futuras
          `}</pre>
        </div>
      </div>
    </div>
  )
}
