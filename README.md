# Alke Wallet 

> Billetera digital desarrollada como proyecto integrador del **Evaluación del módulo 2** del programa de formación DESARROLLO DE APLICACIONES FRONT-END TRAINEE.
---

## Descripción del proyecto

**Alke Wallet** es una aplicación web de billetera digital que permite a los usuarios gestionar sus activos financieros de manera segura, intuitiva y desde cualquier dispositivo. El proyecto simula las funcionalidades principales de una fintech: login, depósitos, transferencias y visualización de movimientos.

---

## Funcionalidades principales

| Funcionalidad | Descripción |
|---|---|
| **Inicio de sesión** | Acceso seguro con validación de credenciales |
| **Administración de fondos** | Visualización de saldo, depósitos y retiros |
| **Envío de dinero** | Simulación de transferencias a otros usuarios |
| **Historial de transacciones** | Registro completo de todos los movimientos realizados |
| **Agenda de contactos** | Búsqueda y autocompletado de contactos frecuentes |

---

## Estructura del proyecto

```
alke-wallet/
├── index.html              # Punto de entrada
├── login.html              # Pantalla de inicio de sesión
├── menu.html               # Menú principal / Dashboard
├── deposit.html            # Pantalla de depósitos
├── sendmoney.html          # Pantalla de envío de dinero
├── transactions.html       # Historial de movimientos
├── css/
│   └── styles.css          # Estilos personalizados
└── js/
    └── scripts.js          # Lógica y funcionalidades JS
```

---

## Tecnologías utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)

---

## Pantallas de la aplicación

### Login (`login.html`)
Formulario de inicio de sesión con validación de credenciales y diseño responsive usando Bootstrap.

### Menú principal (`menu.html`)
Dashboard con resumen financiero del usuario, barra de navegación responsive y tarjetas de acceso rápido a cada funcionalidad.

### Depósito (`deposit.html`)
Formulario para ingresar fondos a la cuenta. Incluye actualización dinámica del saldo con jQuery.

### Enviar dinero (`sendmoney.html`)
Permite simular una transferencia a otro usuario. Cuenta con búsqueda de contactos con autocompletado (jQuery UI) y validaciones de formulario.

### Transacciones (`transactions.html`)
Vista de historial de movimientos con visualización dinámica y actualización en tiempo real.

---

## Cómo ejecutar el proyecto

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Kurobittsu/Alke-Wallet
   ```

2. Ingresa al directorio:
   ```bash
   cd Alke-Wallet
   ```

3. Abre `index.html` en tu navegador o utiliza la extensión **Live Server** en VS Code.

> ⚠️ No se requiere instalación de dependencias. Todas las librerías se cargan vía CDN.

---

## Ramas del repositorio

| Rama | Descripción |
|---|---|
| `main` | Código estable y listo para producción |
| `feature/login` | Funcionalidad de inicio de sesión |
| `feature/transacciones` | Envío y recepción de fondos |
| `feature/depositos` | Depósitos y gestión de saldo |

---

## Criterios de evaluación

- ✔️ **Legibilidad del código**: estructura clara, comentarios y buenas prácticas
- ✔️ **Experiencia de usuario**: interfaz intuitiva, responsive y fluida
- ✔️ **Funcionalidad**: todas las pantallas operativas e integradas

---

## Recursos utilizados

- [Bootstrap Docs](https://getbootstrap.com/)
- [jQuery Docs](https://jquery.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Git & GitHub Docs](https://docs.github.com/)

---

## 👤 Autor/a

## Desarrollado por Bruno Simón Alejandro Bustos Palma 

---

<p align="center">
  <img src="https://img.shields.io/badge/Estado-Completado-brightgreen?style=flat-square" />
  <img src="https://img.shields.io/badge/Módulo-2-blue?style=flat-square" />
</p>
