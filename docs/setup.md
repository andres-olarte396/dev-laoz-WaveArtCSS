
# Configuración de Wave Art CSS

Este archivo explica cómo configurar e integrar **Wave Art CSS** en tu proyecto.

## Requisitos Previos

1. **Un proyecto HTML/CSS/JS** donde puedas agregar los estilos de Wave Art CSS.
2. **Un servidor local** o un entorno de desarrollo donde puedas probar los estilos (opcional, pero recomendado).

## Paso 1: Clonar el Repositorio

Clona el repositorio de Wave Art CSS en tu máquina local:

```bash
git clone https://github.com/andres-olarte396/dev-laoz-WaveArtCSS
cd reactive-styles
```

## Paso 2: Integración en tu Proyecto

### 2.1. Incluir los Archivos CSS

Una vez descargado el repositorio, asegúrate de incluir los siguientes archivos CSS en tu proyecto HTML. En tu archivo `index.html` o cualquier archivo HTML donde quieras usar los estilos, agrega las siguientes líneas dentro de la etiqueta `<head>`:

```html
<link rel="stylesheet" href="src/theme.css">
<link rel="stylesheet" href="src/base.css">
<link rel="stylesheet" href="src/components.css">
<link rel="stylesheet" href="src/animations.css">
<link rel="stylesheet" href="src/utilities.css">
```

### 2.2. Estructura de Archivos

Organiza tu proyecto para que los archivos CSS sean accesibles y se encuentren correctamente estructurados. Por ejemplo:

```plaintext
├── 📂 src/
│   ├── 📝 base.css          # Estilos base
│   ├── 📝 theme.css         # Variables de temas
│   ├── 📝 components.css    # Estilos de controles
│   ├── 📝 animations.css    # Animaciones avanzadas
│   └── 📝 utilities.css     # Clases utilitarias para spacing, helpers, etc.
├── 📄 index.html
```

## Paso 3: Verificación

Abre el archivo HTML en un navegador. Si todo está configurado correctamente, los estilos deberían aplicarse automáticamente.

---

## Problemas Comunes

- **Archivos CSS no encontrados**: Asegúrate de que las rutas relativas sean correctas.
- **Preferencias de tema no detectadas**: Revisa si el navegador es compatible con `prefers-color-scheme`.
- **Estilos no aplicados**: Asegúrate de incluir los archivos CSS en el orden correcto (lo recomendado es `theme.css` primero).
