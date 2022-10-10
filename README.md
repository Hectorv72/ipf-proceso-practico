### DEVLOG DESARROLLO

---

#### 1. Modelado de datos

- 1.1 08/09/22 Estructuración de modelos para la base de datos de MongoDB.
- 1.2 20/09/22 Refactorización de modelos para la base de datos de MongoDB.
- 1.3 22/09/22 Creación del cluster y db en MongoDB Atlas.

#### 2. Establecer metodología y estructura de trabajo

- 2.1 22/09/22 Separar proyecto en 2 carpetas cliente y servidor.
- 2.2 22/09/22 Estructurar configuraciones para el desarrollo y producción.

#### 3. Construcción del Backend

- 3.1 22/09/22 Definición de librerías a utilizar para la creación inicial del backend - (express, express-validator, mongoose, morgan, cors, jsonwebtoken, bcryptjs, dotenv).
- 3.2  22/09/22 Creación del proyecto base con express.
- 3.3  22/09/22 Conexión con la base de datos de MongoDB.
- 3.4  23/09/22 Creación del esquema de User para la BD.
- 3.5  27/09/22 Creación de las rutas del Usuario(User).
- 3.6  27/09/22 Creación de los controladores para el modelo de User.
- 3.7  27/09/22 Creación de la lógica(utilities) para los controladores de Usuario(User).
- 3.8  27/09/22 Instalación e implementación de la librería Helmet.
- 3.9  02/09/22 Creación de los controladores para el Login del usuario.
- 3.10 02/10/22 Creación de middlewares para las rutas de usuario y login.
- 3.11 02/10/22 Creación de esquema de validaciones con express-validator para el usuario.
- 3.12 02/10/22 Creación de las rutas de login y registro.
- 3.13 03/10/22 Creacion de modelo para los cursos(class)
- 3.14 03/10/22 Construcción de controladores y rutas para el manejo del modelo de cursos(class)
- 3.15 03/10/22 Creación de schema y middlewares para validación y seguridad de las peticiones de las rutas de curso(class)
- 3.16 05/10/22 Creacion de modelo para las materia(subject)
- 3.17 05/10/22 Construcción de controladores y rutas para el manejo del modelo de materia(subject)
- 3.18 05/10/22 Creación de schema y middlewares para validación y seguridad de las peticiones de las rutas de materia(subject)
- 3.19 05/10/22 Creacion de modelo para las inasistencias(absence)
- 3.20 05/10/22 Construcción de controladores y rutas para el manejo del modelo de inasistencias(absence)
- 3.21 05/10/22 Creación de schema y middlewares para validación y seguridad de las peticiones de las rutas de inasistencias(absence)
- 3.22 06/10/22 Creacion de modelo para las calificaciones(grade)
- 3.23 06/10/22 Construcción de controladores y rutas para el manejo del modelo de calificaciones(grade)
- 3.24 06/10/22 Creación de schema y middlewares para validación y seguridad de las peticiones de las rutas de calificaciones(grade)
- 3.25 07/10/22 Creacion de modelo para los avisos(posts)
- 3.26 07/10/22 Construcción de controladores y rutas para el manejo del modelo de avisos(posts)
- 3.27 07/10/22 Creación de schema y middlewares para validación y seguridad de las peticiones de las rutas de avisos(posts)
- 3.28 09/10/22 Arreglo en los diferentes controladores
- 3.29 09/10/22 Creación del controlador para eliminar todos los Usuarios de la bd
- 3.30 09/10/22 Creación del controlador para generar Usuarios random en la bd

#### 4. Refactorizacion del backend
- 4.1 10/10/2022 Se modificó el modelo de usuario para agregar las inasistencias
- 4.2 10/10/2022 Se modificó el modelo de materias, asignando un atributo que contendra una lista de tareas(practicos) para guardar las calificaciones de los alumnos asignados a la tarea.
- 4.3 10/10/2022 Se agregó un nuevo modelo de carreras que contendra los cursos y las materias designadas por año y el calendario de las materias para la carrera.
- 4.5 10/10/2002 Se creó los controladores, rutas, middlewares y esquema del modelo Carrera.

#### 5. Avances del backend