
---

# Página Web de Registro de Datos

Esta página web te permite registrar tus datos personales y proyectos relevantes, incluyendo habilidades asociadas. A continuación, se describen las principales funcionalidades y cómo utilizarlas:

## Funcionalidades Principales

### 1. Registrar Datos Personales y del Proyecto

- Completa el formulario con tus datos personales, incluyendo número de identificación, nombre, URL de la imagen, URL del repositorio, título y descripción del proyecto.

### 2. Seleccionar Habilidades

- Utiliza la sección de habilidades para seleccionar las tecnologías que posees o utilizaste en tu proyecto. Haz clic en los botones de habilidades disponibles para añadirlas a tu lista de habilidades seleccionadas. Puedes eliminar habilidades haciendo clic en "Eliminar" junto a la habilidad correspondiente.

### 3. Almacenar Datos

- Haz clic en el botón "Registrar" para almacenar tus datos en el servidor (JSON Server). Una vez registrado, tus datos estarán disponibles para consulta y análisis.

## Cómo Utilizar la Página Web

1. **Clonar o Descargar el Repositorio:**
   Clona este repositorio en tu máquina local usando Git o descarga el código como un archivo ZIP.

2. **Abrir la Página Web:**
   Abre el archivo `index.html` en tu navegador web para acceder a la página web de registro de datos.

3. **Completar el Formulario:**
   Completa el formulario con tus datos personales, la información del proyecto y las habilidades relevantes. Puedes añadir múltiples habilidades haciendo clic en los botones correspondientes.

4. **Registrar Datos:**
   Haz clic en el botón "Registrar" para enviar tus datos al servidor (JSON Server). Esto almacenará tus datos en el archivo `db.json`.

5. **Verificar Datos Registrados:**
   Para verificar que tus datos se han almacenado correctamente, puedes hacer una consulta a la API de JSON Server o acceder a la URL `http://localhost:5010/registros`.

## Instalación y Configuración de JSON Server

Si deseas configurar JSON Server para almacenar los datos de la página web, sigue estos pasos:

1. **Instalar JSON Server:**
   JSON Server es una dependencia de Node.js, así que asegúrate de tener Node.js instalado en tu máquina. Luego, instala JSON Server globalmente utilizando el siguiente comando:

   ```bash
   npm install -g json-server
   ```

2. **Configurar el Archivo db.json:**
   Crea un archivo llamado `db.json` y define la estructura inicial de la base de datos. Aquí tienes un ejemplo básico:

   ```json
   {
     "registros": []
   }
   ```

   Este archivo actuará como tu base de datos y almacenará la información.

3. **Iniciar JSON Server:**
   Ejecuta JSON Server con el siguiente comando, apuntando al archivo `db.json`:

   ```bash
   json-server --watch db.json --port 5010
   ```

   El servidor estará disponible en `http://localhost:5010`. Puedes cambiar el puerto si lo deseas.

---
