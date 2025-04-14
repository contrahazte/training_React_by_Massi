
Ejercicio Tecnico: Gestor de Jefes de Proyecto
Objetivo
Desarrollar una aplicacion React para gestionar jefes de proyecto. Debe incluir autenticacion,
listado, creacion paso a paso, edicion, eliminacion, vista detallada y busqueda.
Estructura general del proyecto
src/
 components/
 Navbar.jsx
 contexts/
 AuthContext.jsx
 FormContext.jsx
 layouts/
 Layout.jsx
 pages/
 Login.jsx
 Home.jsx
 Gallery.jsx
 ItemDetail.jsx
 UpdateItem.jsx
 CreateItemTitle.jsx
 CreateItemImage.jsx
 App.jsx
 index.jsx
Requerimientos del ejercicio
- Login: formulario, autenticacion, token, localStorage, AuthContext.
- Home: mensaje de bienvenida, redireccion si logueado.
- Galeria: tabla con nombre, email, telefono, buscador.
- Detalle: vista completa del jefe, imagen, editar, eliminar.
- Crear jefe: paso 1 con nombre, paso 2 con datos restantes, envio.
- Editar jefe: formulario precargado, PUT con actualizacion.
- Estado global: AuthContext y FormContext.
- Diseno: inputs ordenados, buscador visible, navbar persistente.
Funciones obligatorias a implementar
- login(user, token): guarda sesion en contexto y localStorage.
- logout(): limpia datos del usuario.
- updateField(key, val): actualiza un campo del formulario.
- resetForm(): reinicia el formulario multistep.
API de prueba esperada
POST /api/auth/login
{
 "email": "admin@demo.com",
 "password": "123456"
}
Respuesta:
{
 "user": { "id": 1, "role": "boss", ... },
 "token": "..."
}
GET /api/jefes-proyectos
[
 {
 "id": 1,
 "nombreJefe": "Maria",
 "cargoJefe": "Arquitecta",
 "telefonoJefe": "123456789",
 "emailJefe": "maria@email.com",
 "urlJefe": "https://..."
 }
]
Evaluacion del ejercicio
- Flujo funcional completo: 30%
- Uso correcto de Context API: 20%
- Codigo organizado: 15%
- Manejo del estado: 10%
- Validaciones y errores: 10%
- Estilo visual y UX: 10%
- Extras y mejoras: 5%
Bonus (si hay tiempo)
- Mostrar alerta en la galeria al crear/actualizar.
- Validar que no se acceda al paso 2 sin haber completado el paso 1.
- Hacer persistente la busqueda al navegar.