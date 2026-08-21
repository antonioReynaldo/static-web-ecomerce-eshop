# E-Shop Frontend

E-commerce responsive y moderno desarrollado con React, TypeScript y Tailwind CSS. Sitio web completo de tienda en línea con diseño profesional enfocado en la experiencia de usuario.

## 📸 Screenshots

### Desktop

![Web Desktop](./public/screenshots/GIF_desktop.gif)

### Movil

![Web Movil](./public/screenshots/GIF_movil.gif)

## 🚀 Tecnologías

- **React 19** - Biblioteca de UI declarativa
- **TypeScript 6** - Tipado estático para mayor seguridad y mantenibilidad
- **Tailwind CSS 4** - Framework de estilos utilitario
- **Vite 8** - Herramienta de desarrollo y build ultrarrápida
- **React Icons** - Iconografía moderna
- **Swiper** - Slider y carruseles profesionales
- **AOS** - Animaciones de scroll suaves
- **Context API** - Gestión de estado para tema claro/oscuro

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Banner/       # Banners promocionales
│   ├── Blog/         # Sección de blog/noticias
│   ├── Category/     # Categorías de productos
│   ├── Footer/       # Pie de página
│   ├── Hero/         # Hero section con slider
│   ├── Navbar/       # Navegación principal con dropdown
│   ├── Partners/     # Logos de marcas asociadas
│   ├── Product/      # Catálogo de productos
│   └── Service/      # Servicios destacados
├── context/          # Contextos globales (Tema)
├── hooks/            # Custom hooks
├── utils/            # Utilidades (cn, etc.)
└── main.tsx          # Punto de entrada
```

## ✨ Características

- 📱 **100% Responsive** - Diseño adaptable a móviles, tablets y desktop
- 🎨 **Tema Claro/Oscuro** - Switch entre modos con persistencia
- 🎬 **Animaciones Suaves** - Uso de AOS para interacciones elegantes
- 🖼️ **Hero Slider** - Carrusel interactivo con Swiper
- 🛍️ **Catálogo de Productos** - Grid responsive con cards
- 📰 **Blog Section** - Sección de noticias/artículos
- 🏢 **Partners Section** - Logos de marcas asociadas
- 🎯 **Navegación Inteligente** - Menú con dropdowns y categorías
- ⚡ **Optimizado** - Build con Vite para tiempos de carga mínimos

## 🛠️ Instalación

```bash
pnpm install
```

## 🏃 Ejecución

```bash
# Desarrollo
pnpm dev

# Build de producción
pnpm build

# Preview
pnpm preview
```

## 📋 Scripts Disponibles

- `pnpm dev` - Iniciar modo desarrollo con hot-reload
- `pnpm build` - Compilar para producción
- `pnpm lint` - Ejecutar ESLint
- `pnpm preview` - Preview del build

## 🎨 Stack Visual

| Componente    | Descripción             |
| ------------- | ----------------------- |
| Header/Navbar | Menú de navegación      |
| Hero Section  | Slider promocional      |
| Categorias    | Filtros por categoría   |
| Productos     | Grid de productos       |
| Banners       | Promociones visuales    |
| Servicios     | Servicios destacados    |
| Blog          | Noticias/artículos      |
| Partners      | Marcas colaboradoras    |
| Footer        | Información de contacto |

## 🔧 Configuración

El proyecto incluye:

- ESLint configurado con reglas TypeScript-React
- Tailwind CSS v4 (versión más reciente)
- TypeScript con tipos estrictos
- Hot Module Replacement (HMR)

## 📄 Licencia

MIT License

---

**Desarrollado para demostración de habilidades frontend.**
