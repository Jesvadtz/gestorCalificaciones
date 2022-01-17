//Gestor de calificaciones 2.0

// Variables datos por alumno
let nombre, apellido, direccion, edad, grado, grupo;
let alumnos = [];

//Materias
let materias1grado = [
  "Lengua Materna Español I",
  "Matemáticas I",
  "Ciencias I",
  "Geografía de México y el Mundo",
  "Lengua Extranjera Inglés I",
  "Historia del Mundo",
  "Formación Cívica y Ética I",
  "Artes I",
  "Educación Física I",
  "Informática I",
  "Educación Socioemocional I",
  "Tutoria I",
];

let materias2grado = [
  "Lengua Materna Español II",
  "Matemáticas II",
  "Ciencias II",
  "Historia de México I",
  "Lengua Extranjera Inglés II",
  "Formación Cívica y Ética II",
  "Artes II",
  "Educación Física II",
  "Informática II",
  "Educación Socioemocional II",
];

let materias3grado = [
  "Lengua Materna Español III",
  "Matemáticas III",
  "Ciencias III",
  "Historia de México II",
  "Lengua Extranjera Inglés III",
  "Formación Cívica y Ética III",
  "Artes III",
  "Educación Física III",
  "Informática III",
  "Educación Socioemocional III",
];

// Función para saber que materias se muestran

let gradoMaterias = (grado) => {
  let calMat = 0;
  let suma = 0;
  let promedio = 0;
  let materias;

  if (grado === 1) {
    materias = materias1grado;
  } else if (grado === 2) {
    materias = materias2grado;
  } else if (grado === 3) {
    materias = materias3grado;
  } else {
    console.log("Esta opción no es válida");
  }
  for (let i = 0; i < materias.length; i++) {
    calMat = parseInt(
      prompt("Ingresa calificación de la materia: " + materias[i])
    );
    suma = suma + calMat;
  }
  promedio = suma / materias.length;
  return promedio.toFixed(2);
};

//Función para capturar datos de alumno que se desee registrar
captuAlumno = () => {
  let aprobado = false;

  nombre = prompt("Ingresa el nombre del alumno:");
  apellido = prompt("Ingresa el apellido del alumno:");
  direccion = prompt("Ingresa la dirección del alumno:");
  edad = parseInt(prompt("Ingresa la edad del alumno:"));
  grado = parseInt(prompt("Ingresa el grado del alumno (1, 2 o 3): "));
  grupo = prompt("Ingresa el grado del alumno (A, B o C):");

  promedio = gradoMaterias(grado);

  if (promedio >= 70) {
    aprobado = true;
  }

  let datosIngresados = [
    nombre,
    apellido,
    direccion,
    edad,
    grado,
    grupo,
    promedio,
    aprobado,
  ];
  return datosIngresados;
};

//Ciclo para preguntar si quiere registrar alumnno
let continuar = true;

do {
  const registro = confirm("¿Deseas registrar un alumno?");
  if (registro === false) {
    continuar = false;
  } else {
    datosAlumno = captuAlumno();

    alumnos.push(datosAlumno);
  }
} while (continuar);

let orden = parseInt(
  prompt(
    "¿Cómo deseas que te muestre el registro de alumnos? \n" +
      "1. Ascendente \n" +
      "2. Descendente"
  )
);

const alumnosSorted = alumnos.sort((a, b) => {
  let valueA = a[1];
  let valueB = b[1];

  if (orden === 1) {
    return valueA < valueB ? -1 : 1;
  } else {
    return valueA > valueB ? -1 : 1;
  }
});

alumnosSorted.forEach((alumno) => {
  let aprobado = alumno[7];
  let nota = "Alumno reprobado";

  if (aprobado === true) {
    nota = "Alumno aprobado";
  }

  console.log(
    `Alumno: ${alumno[0]} ${alumno[1]} \n Dirección: ${alumno[2]} \n Edad: ${alumno[3]} \n Grupo: ${alumno[4]}${alumno[5]} \n Promedio General: ${alumno[6]} \n ${nota}`
  );
});
