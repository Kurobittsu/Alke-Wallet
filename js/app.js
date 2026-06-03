// Usuarios de prueba
const usuarios = [
  { id: 1, nombre: "Administrador", email: "admin@alke.com", password: "admin", saldo: 15000 }
];

// Contactos de prueba
const contactosDefault = [
  { id: 1, nombre: "María Fernández", email: "maria@alkemy.com"  },
  { id: 2, nombre: "Pedro Sánchez",   email: "pedro@alkemy.com"  },
  { id: 3, nombre: "Sofía Ramírez",   email: "sofia@alkemy.com"  }
];

// Transacciones de prueba
const transaccionesDefault = [
  { tipo: "ingreso",   descripcion: "Transferencia recibida", monto:  1500, fecha: "2025-06-01" },
  { tipo: "egreso",    descripcion: "Envío a Pedro Sánchez",  monto: -320,  fecha: "2025-05-30" },
  { tipo: "deposito",  descripcion: "Depósito propio",        monto:  5000, fecha: "2025-05-28" }
];

// --- Sesión ---
function obtenerSesion() {
  return JSON.parse(sessionStorage.getItem("usuario")) || null;
}

function guardarSesion(usuario) {
  sessionStorage.setItem("usuario", JSON.stringify(usuario));
}

function cerrarSesion() {
  sessionStorage.removeItem("usuario");
  window.location.href = "login.html";
}

function verificarSesion() {
  if (!obtenerSesion()) window.location.href = "login.html";
}

// --- Saldo ---
function obtenerSaldo() {
  const sesion = obtenerSesion();
  const guardado = localStorage.getItem("saldo_" + sesion.id);
  return guardado !== null ? parseFloat(guardado) : sesion.saldo;
}

function guardarSaldo(monto) {
  const sesion = obtenerSesion();
  localStorage.setItem("saldo_" + sesion.id, monto);
}

// --- Transacciones ---
function obtenerTransacciones() {
  const sesion = obtenerSesion();
  const guardadas = localStorage.getItem("transacciones_" + sesion.id);
  return guardadas ? JSON.parse(guardadas) : [...transaccionesDefault];
}

function agregarTransaccion(tx) {
  const sesion = obtenerSesion();
  const lista = obtenerTransacciones();
  lista.unshift({ ...tx, fecha: new Date().toLocaleDateString("es-AR") });
  localStorage.setItem("transacciones_" + sesion.id, JSON.stringify(lista));
}

// --- Contactos ---
function obtenerContactos() {
  const sesion = obtenerSesion();
  const guardados = localStorage.getItem("contactos_" + sesion.id);
  return guardados ? JSON.parse(guardados) : [...contactosDefault];
}

function agregarContacto(contacto) {
  const sesion = obtenerSesion();
  const lista = obtenerContactos();
  lista.push({ ...contacto, id: Date.now() });
  localStorage.setItem("contactos_" + sesion.id, JSON.stringify(lista));
}

// --- Utilidades ---
function formatearMonto(monto) {
  return Math.abs(monto).toLocaleString("es-AR", { minimumFractionDigits: 2 });
}
