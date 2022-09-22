# MongoDB

## Modelos

---

### Usuarios

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

### Cursos

```js
{
  carrera: String,
  fecha: Date,
  cupo: Number,
  alumnos: Array<Usuario>
}
```

### Modulos

```js
{
  materia: String,
  curso: Curso,
  profesores: [
    { profesor: Usuario, tipo: String }
  ]
  periodo: Number, // 1er cuatrimestre o 2do
  duracion: Number, // Carga horaria
  clases: [{
      dia: String,
      horario: {
        inicio: String,
        fin: String,
      }
  }]
}
```

### Inasistencias

```js
{
  fecha: Date,
  modulo: Modulo,
  alumnos: [{
    alumno: Usuario,
    presencia: Boolean
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
