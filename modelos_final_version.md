# MongoDB

## Modelos

---

### Usuarios (user)

```js
{
  user: String, //usuario
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
    birth_date: Number, //fecha de nacimiento 
    dni: String,
    attachments: [{ // documentacion
      url: String,
      name: String,
      type: String
    }]
  }
}
```

### Carrera (career)
```js
{
  name: String // nombre de la carrera
  date: Date, // fecha de creacion
  classrooms: [{ // cursos
    date: Date, // fecha de creacion
    capacity: Number, // cantidad de usuarios
    students: Array<User> // estudiantes
  }],
  subjects: [{ // materias
    subject: Subject // materia
    term: String, // tiempo de inicio(1er trimestre, 1er cuatrimestre)
    year: Number // año al que pertenece esa materia
  }]
}
```

### Materia (subject)

```js
{
  name: String, // nombre
  teachers: [ // profesores
    { teacher: Usuario, type: String }
  ]
  duration: Number, // Carga horaria
  tasks: [{
    lead_time: Date, // tiempo de entrega
    description: String, // descripcion
    type: String, // tipo de practico
    year: Number, // año del curso al que pertenece
    attachments: [{ // archivos adjuntos
      url: String,
      name: String,
      type: String
    }],
    deliveries:[{ // entregas
      student: User,
      date: Date, // fecha de entrega
      grade: Number, // calificacion
      attachments: [{
        url: String,
        name: String,
        type: String
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
