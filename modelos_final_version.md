# MongoDB

## Modelos

---

### User (usuario)

```js
{
  username: String, //usuario
  email: String,
  password: String,
  type: String, // tipo de usuario
  active: Boolean, // estado
  absences: [{ // inasistencias
    date: Date, // fecha
    career: Career, // carrera
    subject: Subject, // materia
  }],
  personal_info: {
    names: String, // nombres
    surnames: String, // apellidos
    date_birth: Number, //fecha de nacimiento 
    dni: String,
    documentation: [{ // documentacion
      url: String,
      name: String,
      type: String
    }]
  }
}
```

### Career (carrera)
```js
{
  name: String // nombre de la carrera
  date: Date, // fecha de creacion
  duration: Number, // Carga horaria
  classrooms: [{ // cursos
    date: Date, // fecha de creacion
    capacity: Number, // cantidad de usuarios
    students: Array<User> // estudiantes
  }],
  calendar: [{
    year: Number,
    schedules: [{
      term: String, // tiempo de inicio(1er trimestre, 1er cuatrimestre)
      subjects: Array<Subject>
    }]
  }]
}
```

### Subject (materia)

```js
{
  name: String, // nombre
  teachers: [ // profesores
    { teacher: User, type: String }
  ]
  tasks: [{
    lead_time: Date, // tiempo de entrega
    date: Date, // fecha de creacion
    description: String, // descripcion
    type: String, // tipo de practico
    active: Boolean, // Si la actividad sigue activa para modificaciones
    attachments: [{ // archivos adjuntos
      url: String,
      name: String,
      type: String
    }],
    assigned_students: [{
      student: User,
      grade: Number, // calificacion
      completed: Boolean,
      deliveries: [{ // entregas
        date: Date, // fecha de entrega
        attachments: [{
          url: String,
          name: String,
          type: String
        }]
      }]
    }]
  }]
}
```

### Posts

```js
{
  header: String, // cabecera
  message: String, // mensaje
  type: String, // tipo de mensaje
  career: Career || null, // si va dedicado a una carrera especifica
  sender: Usuario, // usuario del mensaje
}
```
