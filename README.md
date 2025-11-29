# 💱 Conversor de Monedas

Conversor de monedas web que permite realizar conversiones entre diferentes monedas agrupadas por continentes. El proyecto utiliza manipulación del DOM para crear dinámicamente toda la estructura HTML, implementando las mejores prácticas de desarrollo web.

## 📋 Características

- ✅ Conversión de monedas en tiempo real
- ✅ Organización por continentes (América, Europa, Asia, África, Oceanía)
- ✅ Interfaz responsive optimizada para todos los dispositivos
- ✅ Banderas visuales para cada moneda
- ✅ Código limpio y bien estructurado
- ✅ Implementación completa de manipulación del DOM

## 🚀 Tecnologías Utilizadas

- **HTML5**: Estructura semántica y limpia
- **CSS**: Bootstrap 5.3.2 para diseño responsive
- **JavaScript (ES6+)**: Manipulación del DOM y consumo de APIs

## 📁 Estructura del Proyecto

```
conversor-de-moneda/
├── index.html          # Página principal
├── america.html        # Conversor de América
├── europa.html         # Conversor de Europa
├── asia.html           # Conversor de Asia
├── africa.html         # Conversor de África
├── oceania.html        # Conversor de Oceanía
├── todas.html          # Conversor con todas las monedas
└── js/
    ├── dom.js          # Lógica de manipulación del DOM
    └── conversor.js    # Lógica del conversor de monedas
```

## 🔧 Funcionalidades Principales

### Manipulación del DOM

El proyecto implementa una arquitectura donde toda la estructura HTML se crea dinámicamente mediante JavaScript (`dom.js`):

- **`crearNavbar()`**: Construye el menú de navegación completo
- **`crearFormularioConversor()`**: Genera el formulario de conversión con todos sus elementos
- **`crearCampoFormulario()`**: Función auxiliar para crear campos reutilizables
- **`crearPaginaPrincipal()`**: Construye la página de inicio

### Conversor de Monedas

El archivo `conversor.js` maneja toda la lógica de conversión:

- Carga dinámica de monedas según el continente seleccionado
- Visualización de banderas para cada moneda
- Conversión en tiempo real usando API externa
- Manejo de errores y validaciones

## 📚 Recursos Externos y Licencias

### Bootstrap 5.3.2
- **Fuente**: [Bootstrap](https://getbootstrap.com/)
- **CDN**: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css`
- **Licencia**: MIT License
- **Propósito**: Framework CSS para diseño responsive y componentes UI

### Exchange Rate API
- **Fuente**: [ExchangeRate-API](https://www.exchangerate-api.com/)
- **Endpoint**: `https://open.er-api.com/v6/latest/{moneda}`
- **Licencia**: Free tier (uso personal/educativo)
- **Propósito**: Obtener tasas de cambio en tiempo real

### FlagCDN
- **Fuente**: [FlagCDN](https://flagcdn.com/)
- **URL**: `https://flagcdn.com/24x18/{codigo}.png`
- **Licencia**: Dominio público / Uso gratuito
- **Propósito**: Mostrar banderas de países junto a las monedas

## 🤖 Uso de Inteligencia Artificial

**ChatGPT** fue utilizado exclusivamente para la implementación de la funcionalidad de banderas al lado del nombre de la moneda. Específicamente, se utilizó para:

- Generar el objeto `banderas` que mapea cada código de moneda con su código de país correspondiente
- Implementar la función `mostrarBandera()` que aplica las banderas como fondo de los elementos `<select>`
- Determinar el código ISO correcto para cada moneda (ej: USD → us, ARS → ar)

**Nota**: El resto del código fue desarrollado manualmente, aplicando los conceptos de manipulación del DOM aprendidos en el curso.

## 💡 Explicación del Código

### Creación Dinámica de Elementos

El proyecto utiliza `document.createElement()` para construir todos los elementos HTML:

```javascript
// Ejemplo: Crear un navbar
const nav = document.createElement("nav");
nav.className = "navbar navbar-expand-lg navbar-dark bg-primary";
```

### Búsqueda de Elementos

Se utilizan diferentes métodos según el caso:

- `document.getElementById()`: Para elementos únicos con ID
- `document.querySelector()`: Para buscar el primer elemento con selector CSS
- `document.querySelectorAll()`: Para obtener múltiples elementos
- Búsquedas dentro de elementos: `elemento.querySelector()`

### Manipulación del DOM

- **`append()` / `prepend()`**: Insertar elementos como hijos
- **`classList.add/remove()`**: Modificar clases CSS dinámicamente
- **`innerHTML`**: Modificar contenido HTML
- **`style`**: Aplicar estilos inline
- **`dataset`**: Trabajar con atributos data-*

### Conversión de Monedas

```javascript
// Obtener tasas de cambio
const res = await fetch(`https://open.er-api.com/v6/latest/${base.value}`);
const data = await res.json();
const tasa = data.rates[destino.value];

// Calcular conversión
const resultado = (cantidad * tasa).toFixed(2);
```

## 📱 Diseño Responsive

El proyecto utiliza Bootstrap 5.3.2, que proporciona:

- Sistema de grillas responsive (`col-md-4`, `row`, etc.)
- Componentes adaptativos (navbar, cards, formularios)
- Utilidades de espaciado y tipografía
- Breakpoints optimizados para móviles, tablets y desktop

## 🚀 Instalación y Uso

1. Clonar el repositorio:
```bash
git clone https://github.com/Sesuli/conversor-de-moneda.git
```

2. Abrir el archivo `index.html` en un navegador web moderno

3. No requiere instalación de dependencias (todos los recursos se cargan desde CDN)

## 📝 Licencia

Este proyecto es de código abierto y está disponible para fines educativos.

## 👤 Autor Thiago Ulises Gutierrez

Proyecto desarrollado como práctica de manipulación del DOM y consumo de APIs.

## 🙏 Agradecimientos

- **Bootstrap Team**: Por el excelente framework CSS
- **ExchangeRate-API**: Por proporcionar tasas de cambio gratuitas
- **FlagCDN**: Por las imágenes de banderas de alta calidad

---

**Repositorio público**: [GitHub](https://github.com/Sesuli/conversor-de-moneda)
