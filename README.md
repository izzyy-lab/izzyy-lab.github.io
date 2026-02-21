📘 Proyecto CRUD + Primeros Pasos en React

Estructura Feature-Based | Bootstrap 5 | React | React Router

🚀 Características principales

✔ Primer contacto con React
✔ Carrito de compras simple
✔ Ejercicio básico para entender Props
✔ Navegación con React Router
✔ Estilos con Bootstrap 5
✔ Estructura organizada por features

📦 Estructura del Proyecto (Feature-Based)

El proyecto está organizado utilizando el enfoque Feature-Based, lo que significa que cada funcionalidad está separada en carpetas independientes para mejorar la escalabilidad y el mantenimiento.

src/
│
├── features/
│   ├── layout/
│   │   ├── components/
│   │   │   ├── Article.jsx
│   │   │   ├── Content.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   └── Props.jsx
│   │
│   ├── hooks/
│   ├── pages/
│   ├── products/
│
├── shared/
│   └── components/
│
├── styles/
│   ├── App.css
│   └── index.css
│
├── App.jsx
├── main.jsx
└── Routes.jsx

📌 Explicación rápida

features/ → Contiene las funcionalidades principales del proyecto.

layout/ → Componentes estructurales como Header, Footer, Content.

products/ → Lógica relacionada con productos y carrito.

pages/ → Vistas principales que maneja React Router.

shared/ → Componentes reutilizables.

Routes.jsx → Configuración de rutas.

App.jsx → Componente raíz.

main.jsx → Punto de entrada de la aplicación.

🎨 Interfaz gráfica

El proyecto utiliza Bootstrap 5 para el diseño y maquetación.

Se trabajó con:

Sistema de grid

Cards para productos

Botones estilizados

Navbar responsive

El objetivo fue enfocarse en entender React sin complicar el diseño visual.

🧭 Navegación por el aplicativo

Se implementó navegación usando React Router:

Página principal

Vista de productos

Vista del carrito

Ejercicio de Props

Las rutas están centralizadas en Routes.jsx, permitiendo una estructura limpia y escalable.

🛒 Carrito de Compras

Se desarrolló un carrito básico que permite:

Agregar productos

Mostrar productos agregados

Manejo simple del estado

Objetivo del ejercicio:

Entender el uso de useState

Comprender el flujo de datos en React

Practicar renderizado dinámico

🧩 Ejercicio de Props

Se realizó un ejercicio básico para entender:

Qué son los props

Cómo se envían datos de componente padre a hijo

Cómo se renderizan datos dinámicos

Este ejercicio fue clave para comprender:

Comunicación entre componentes

Reutilización

Componentes dinámicos

🎯 Objetivo educativo

Este proyecto tiene como finalidad:

Entender la estructura básica de un proyecto en React

Comprender componentes funcionales

Manejar estado con useState

Entender props

Implementar rutas con React Router

Organizar código usando Feature-Based Structure

No busca ser un e-commerce completo, sino una base sólida para proyectos más avanzados.

🛠 Tecnologías utilizadas

React

React Router DOM

Bootstrap 5

Vite

👨‍💻 Autor

Felipe Echeverri
Proyecto académico – Primer contacto con React
