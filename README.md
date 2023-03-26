## Acerca de este repositorio
Este repositorio contiene un proyecto creado con Next JS, en el que se ha desarrollado un formulario que manda peticiones POST a una api con los datos recogidos por este.

Para la base de datos en donde se guardan los datos del formulario se ha utilizado JSON Server, que es un módulo npm que permite crear una base de datos falsa a partir de un archivo JSON.

La estructura del proyecto es la siguiente:

- `pages`
    - \ `api` - Aqui se encuentra el archivo dataForm, en donde se encuentra el endpoint de tipo post que recibe los datos enviados por el formulario. Esta capeta se asigna a `/api/*`, los archivos dentro de ésta se tratan como rutas API. En este caso la ruta de nuestra api sería `/api/dataForm`.
    - \ `components` - En esta carpeta se encuentran los componentes del Header y del Form (formulario).
    - \ `index.js` - Es el archivo principal, en donde están importados tanto el Header como el Form.
- `styles` - Carpeta con el archivo Home.module.css contiene los estilos globales del proyecto.
    - \ `components` - En esta carpeta se encuentran los archivos Form.modules.css, que contiene los estilos del formulario, y Header.modules.css, que contiene los estilos del header.


## Funcionamiento del proyecto
Ejecuta `npm run dev` para iniciar el servidor local y abre http://localhost:3000 para ver la aplicación en el navegador.
Para iniciar la base de datos debes ejecutar `npx json-server --port 3001 --watch db.json`. La base de datos puede verse en http://localhost:3001/data.


