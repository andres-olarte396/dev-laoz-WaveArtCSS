# Wave Art CSS

Es un proyecto modular diseñado para facilitar la creación de interfaces de usuario modernas, altamente responsivas, accesibles y personalizables. Este proyecto implementa las últimas tendencias en CSS, incluyendo **CSS Grid**, **Flexbox**, **Consultas de Contenedores**, **Temas Oscuros y Claros**, y muchas más herramientas avanzadas.

## **Características**

1. **Diseño Modular**:

   - Estilos divididos en módulos para una fácil integración:
     - `base.css`: Estilos generales y normalización.
     - `theme.css`: Variables dinámicas de colores, tamaños y tipografías.
     - `components.css`: Estilos de controles y elementos reutilizables.
     - `animations.css`: Animaciones avanzadas con `@keyframes` y scroll-driven animations.
     - `utilities.css`: Clases utilitarias para espaciados, alineaciones y helpers de Grid/Flexbox.

2. **Soporte para Temas Oscuros y Claros**:

   - Variables definidas en `theme.css` para manejar colores de manera dinámica.
   - Detecta automáticamente las preferencias del sistema (`prefers-color-scheme`).

3. **Totalmente Responsivo**:

   - Basado en CSS Logical Units (`clamp`, `min`, `max`).
   - Soporte para múltiples tamaños de pantalla y orientaciones.

4. **Animaciones Avanzadas**:

   - Animaciones definidas en `animations.css` con `@keyframes`.
   - Soporte para animaciones basadas en scroll (`scroll-driven animations`).

5. **Accesibilidad Nativa**:

   - Enfoque en estándares accesibles.
   - Compatible con lectores de pantalla y estándares ARIA.

6. **Integración con CSS Houdini**:

   - Preparado para personalizaciones avanzadas como `paint()` worklets.

---

## **Estructura del Proyecto**

```plaintext
├── 📂 assets/               # Recursos estáticos
│   ├── 📂 images/           # Imágenes generales del proyecto
│   ├── 📂 icons/            # Íconos SVG, PNG, etc.
│   └── 📂 favicons/         # Favicons en diferentes tamaños
├── 📂 docs/                 # Documentación adicional
│   ├── 📰 setup.md          # 
│   ├── 📰 theming.md        # 
│   └── 📰 usage.md          #    
├── 📂 css/                  # Clases de estilos y módulos
│   ├── 📝 theme.css         # Variables de temas
│   ├── 📝 base.css          # Estilos base
│   ├── 📝 components.css    # Estilos de controles
│   ├── 📂 components/       # Estilos de controles
│   │   ├── 📝 button.css    # Estilos para el control button
│   │   ├── 📝 form.css      # Estilos para el control form
│   │   └── 📝 card.css      # Estilos para el control card
│   ├── 📝 animations.css    # Animaciones avanzadas
│   ├── 📂 animations        # Animaciones avanzadas
│   │   ├── 📝 spacing.css   # 
│   │   ├── 📝 text.css      # 
│   │   └── 📝 colors.css    # 
│   └── 📝 utilities.css     # Clases utilitarias para spacing, helpers, etc.
├── 📂 examples/             # Ejemplos y demostraciones
│   ├── 📄 base.html         # Ejemplo de estilos base
│   ├── 📄 components.html   # Ejemplo de controles estilizados
│   ├── 📄 animations.html   # Ejemplo de animaciones avanzadas
│   ├── 📄 form-example.html # Ejemplo de un formulario
│   ├── 📄 utilities.html    # Ejemplo de utilidades
│   └── 📄 theme.html        # Ejemplo de temas
└── 📰 README.md             # Documentación
```

- **base.css:** Este archivo es el cimiento de tu librería. Aquí irán todas las reglas CSS que afecten a todos los elementos de la página, sin importar su contexto. Piensa en él como un lienzo en blanco sobre el que construirás todo lo demás.

  - **¿Qué incluir aquí?**
    - **Reinicio CSS:** Un reset o normalize para eliminar los estilos predeterminados del navegador y asegurar un punto de partida consistente.
    - **Tipografía:** Definir las familias de fuentes, tamaños base, alturas de línea, etc. que se usarán en toda la aplicación.
    - **Espaciado:** Establecer márgenes, paddings y otras propiedades de espaciado básicas.
    - **Elementos HTML:** Estilos generales para elementos como `<h1>`, `<p>`, `<a>`, etc.

- **components.css:** Aquí se definirán los estilos específicos de los componentes reutilizables de tu aplicación. Un componente puede ser un botón, un formulario, una tarjeta, un menú, etc.

  - **¿Qué incluir aquí?**
    - **Estructura:** Definir la estructura visual de cada componente (layout, grid, flexbox).
    - **Estilos:** Aplicar los estilos específicos a cada componente, como colores, bordes, sombras, etc.
    - **Estados:** Definir los estados de los componentes (hover, active, disabled).

- **utilities.css:** Este archivo contendrá clases de utilidad que te permitirán aplicar rápidamente estilos comunes sin tener que escribir mucho CSS. Son como atajos para estilos que utilizas a menudo.

  - **¿Qué incluir aquí?**
    - **Espaciado:** Clases para agregar márgenes y paddings de diferentes tamaños (e.g., `.mt-2`, `.px-4`).
    - **Texto:** Clases para cambiar el tamaño de la fuente, el peso, el color, etc. (e.g., `.text-center`, `.font-bold`).
    - **Colores:** Clases para aplicar colores de fondo y texto (e.g., `.bg-primary`, `.text-white`).
    - **Otras utilidades:** Clases para redondear esquinas, añadir sombras, etc.

- **animations.css:** Aquí irán todas las animaciones CSS que quieras reutilizar en tu aplicación.

  - **¿Qué incluir aquí?**
    - **Keyframes:** Definir las animaciones utilizando la sintaxis @keyframes.
    - **Clases:** Crear clases para aplicar las animaciones a los elementos.

**theme.css:** Como ya mencionaste, este archivo será el corazón de tu librería, donde se configurarán todos los parámetros visuales.

- **¿Qué incluir aquí?**
  
  - **Paleta de colores:** Definir los colores principales de tu aplicación.
  - **Tipografía:** Especificar las familias de fuentes, tamaños y pesos a utilizar.
  - **Variables CSS:** Utilizar variables CSS para centralizar los valores y facilitar los cambios.

**Ejemplo de estructura de un archivo theme.css:**

```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --font-family: 'Roboto', sans-serif;
  --font-size: 16px;
}
```

---

## **Archivos CSS**

### **1. `base.css`**

Define los estilos globales:

- Normalización de estilos.
- Configuración de fuentes y tamaños base.
- Espaciados globales (`margin`, `padding`).

### **2. `theme.css`**

Variables de colores y tipografías adaptadas a temas:

- Colores dinámicos para modo claro y oscuro.
- Paletas de colores personalizables para diferentes marcas.
- Tipografías escalables.

### **3. `components.css`**

Estilos para controles comunes:

- Inputs (`text`, `email`, `password`, etc.).
- Botones, checkboxes, radios, selectores.
- Tablas, encabezados (`header`), contenido principal (`main`), y pies de página (`footer`).

### **4. `animations.css`**

Animaciones modernas:

- Transiciones suaves (`hover`, `focus`).
- Scroll-driven animations.
- Efectos avanzados con `@keyframes`.

### **5. `utilities.css`**

Clases utilitarias para:

- Espaciados (`.m-1`, `.p-2`, etc.).
- Helpers de Flexbox (`.flex-center`, `.flex-between`, etc.).
- Helpers de Grid (`.grid-2`, `.grid-3`, etc.).

---

## **Ejemplos**

### **1. Base**

Ejemplo que muestra los estilos globales como tipografía, márgenes, y colores.

### **2. Controles**

Formulario completo con todos los tipos de controles de entrada:

- Texto, números, email, rango, fechas, etc.
- Comprobación de comportamiento en modo claro/oscuro.

### **3. Animaciones**

Ejemplo interactivo de animaciones avanzadas:

- Scroll-driven animations.
- Transiciones de hover y focus.

### **4. Utilidades**

Ejemplo que muestra la aplicabilidad de las clases utilitarias:

- Layouts responsivos con Flexbox y Grid.
- Helpers de espaciado y alineación.

---

## **Uso**

1. **Instalación**:
   Clona el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/reactive-styles.git
   cd reactive-styles
   ```

2. **Configuración**:
   Incluye los archivos CSS en tu proyecto:

   ```html
   <link rel="stylesheet" href="src/theme.css" />
   <link rel="stylesheet" href="src/base.css" />
   <link rel="stylesheet" href="src/components.css" />
   <link rel="stylesheet" href="src/animations.css" />
   <link rel="stylesheet" href="src/utilities.css" />
   ```

3. **Prueba los ejemplos**:
   Abre los archivos HTML en la carpeta `examples/` para ver los estilos en acción.

---

## **Roadmap**

1. **Integrar CSS Houdini**:

   - Soporte para worklets personalizados.
   - Pinceles y efectos avanzados.

2. **Documentación Avanzada**:

   - Tutoriales interactivos.
   - Más ejemplos para diseños específicos.

3. **Soporte SCSS**:

   - Versiones adaptadas para preprocesadores.

4. **Biblioteca de Componentes**:

   - Estilos predefinidos para cards, modales, tooltips.

---

## **Contribuciones**

¡Todas las contribuciones son bienvenidas! Sigue estos pasos para contribuir:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu funcionalidad:

   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

3. Envía un pull request detallando los cambios realizados.

---

## **Licencia**

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
