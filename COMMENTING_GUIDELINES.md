# 📘 COMMENTING_GUIDELINES.md

Aunque este proyecto es mantenido por una sola persona, se siguen reglas claras para garantizar su legibilidad y mantenimiento futuro. Los comentarios se agregan **una vez finalizado cada bloque**, siguiendo estas normas.

---

## ✅ Reglas estándar de comentarios

### 1. Encabezado del archivo (opcional, pero recomendado)

- Solo para archivos con lógica independiente o compleja.

```ts
/**
 * Archivo: useSidebarAccess.ts
 * Propósito: define los permisos de acceso al Sidebar según el usuario.
 */
```

---

### 2. JSDoc en funciones, hooks y componentes exportados

```ts
/**
 * Componente visual para mostrar el estado de aprobación forzada.
 */
export const WorkOrderForceApproval = () => { ... }

/**
 * Hook que determina si el usuario puede acceder a reportes CSV.
 */
export const useCsvReportAccess = () => { ... }
```

---

### 3. Comentarios inline simples

- Solo si la lógica no es evidente.

```ts
// Desactiva si no hay permisos
const disabled = !canCreateTickets;
```

```tsx
{
	/* Subtítulo de sección */
}
<Typography>Force approving/authorizing</Typography>;
```

---

### 4. Comentarios en estructuras de datos

- Cuando haya arrays u objetos de configuración, explicar el uso general o campos clave.

```ts
// Fila para cada configuración automática
const rows = [
  {
    label: "Automatic Tech Approval (days)",
    message: "Work orders will be automatically tech.approved in a period of 1 day."
  },
  ...
];
```

---

### 5. Comentarios para tareas pendientes

- Siempre usar inglés y marcas reconocibles por IDEs o linters:

```ts
// TODO: Add loading state
// FIXME: Avoid hardcoded value
```

---

### 6. Código comentado o muerto

- En general, eliminarlo.
- Si es temporal, dejar nota clara:

```ts
// ⛔ Código temporal por refactor, eliminar después del bloque 'Ticket Configurations'
// const deprecatedValue = true;
```

---

## 🧱 Al final de cada bloque

- Agregar JSDoc a componentes principales.
- Comentar estructuras como `rows`, `tabs`, `fields`, etc.
- Dejar claro cualquier permiso, condición o lógica especial.
- Nunca comentar lo obvio o redundante.

---

**Estas reglas deben aplicarse sistemáticamente al finalizar cada bloque de trabajo.**
