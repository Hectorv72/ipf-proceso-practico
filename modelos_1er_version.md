## Modelos
---

#### Usuario

```js
{
  usuario: String,
  email: String,
  password: String,
  tipo_usuario: String,
}
```

#### Persona

```js
{
  nombres: String,
  apellido: String,
  edad: Number,
  dni: String,
  documentacion: Array<Archivo>,
  fecha_ingreso: Date,
  activo: Boolean,
  usuario: Usuario,
}
```

#### Carrera

```js
{
  titulo: String,
  tiempo: Number, // Carga horaria
  cursos: Array<Curso>
  activo: Boolean
}
```

### Curso

```js
{
  fecha: Date,
  cupo: Number,
  alumnos: Array<Persona>
}
```

#### Modulo

```js
{
  materia: {
    carrera: Carrera,
    nombre: String
  },
  curso: Curso,
  profesores: Array<Persona>
  asistencia: Array<Asistencia>,
  periodo: Number, // 1er cuatrimestre o 2do
  duracion: Number,
  clases: [{
      dia: String,
      horario_entrada: String,
      horario_salida: String
  }]
}
```

### Asistencia

```js
{
  fecha: Date,
  alumnos: [{
    alumno: Persona,
    presencia: Boolean
  }]
}
```

#### Calificación
```js
{
  fecha: Date,
  alumno: Persona,
  materia: Materia,
  descripcion: String,
  calificacion: Number,
  tipo: String
}
```

#### Avisos

```js
{
  cabecera: String,
  mensaje: String,
  tipo: String,
  curso: Curso || null,****
  emisor: Usuario,
}
```

#### Archivo

```js
{
  url: String,
  nombre: String,
  tipo: String,
}
```