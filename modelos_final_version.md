# MongoDB

## Modelos

---

### Usuarios (user)

```js
{
  usuario: String,
  email: String,
  password: String,
  tipo_usuario: String,
  estado: Boolean,
  fecha_ingreso: Date,
  datos_personales: {
    nombres: String,
    apellidos: String,
    edad: Number,
    dni: String,
    documentacion: [
      {
        url: String,
        nombre: String,
        tipo: String
      }
    ]
  }
}
```

### Cursos (class)

```js
{
  carrera: String, // career
  fecha: Date, // date
  cupo: Number, // capacity
  alumnos: Array<Usuario> // students
}
```

### Modulos (subject)

```js
{
  materia: String, // (name)
  curso: Curso, // class
  profesores: [ // teachers
    { profesor: Usuario, tipo: String }
  ]
  periodo: Number, // 1er cuatrimestre o 2do // term
  duracion: Number, // Carga horaria //duration
  clases: [{ //schedules
      dia: String, // day
      horario: { // timetable
        inicio: String, // start
        fin: String, // end
      }
  }]
}
```

### Inasistencias (absences)

```js
{
  fecha: Date, // date
  modulo: Modulo, // subject
  alumnos: [{ // students
    alumno: Usuario, // student
  }]
}
```

### Calificaciónes

```js
{
  fecha: Date,
  alumno: Persona,
  modulo: Modulo,
  descripcion: String,
  calificacion: Number,
  tipo: String
}
```

### Posts

```js
{
  cabecera: String,
  mensaje: String,
  tipo: String,
  curso: Curso || null,
  emisor: Usuario,
}
```
