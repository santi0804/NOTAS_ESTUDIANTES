// Array para almacenar los registros de estudiantes
let registros = [];

// Función para mostrar el menú de opciones
function mostrarMenu() {
    console.log("Gestióne su Nota:");
    console.log("1. Registro de estudiante y notas");
    console.log("2. Estudiantes que perdieron");
    console.log("3. Estudiantes que ganaron");
    console.log("4. Salir");
}

// Función para registrar un estudiante y sus notas
function registrarEstudiante() {
    console.log("ingrese los datos del estudiante:");

    let documento = prompt("N°-Documento:");
    let nombre = prompt("Nombre:");
    let nota1, nota2, nota3;

    do {
        nota1 = +prompt("Ingrese nota 1-(20% de la materia):");
    } while (nota1 < 0 || nota1 > 5);
    do {
        nota2 = +prompt("Ingrese nota 2-(40% de la materia):");
    } while (nota2 < 0 || nota2 > 5);
    do {
        nota3 = +prompt("Ingrese nota 3-(40% de la materia):");
    } while (nota3 < 0 || nota3 > 5);

    // Calcular la nota final //
    let notaFinal = (nota1 * 0.2) + (nota2 * 0.4) + (nota3 * 0.4);

    registros.push({ documento, nombre, notaFinal });
}

// Función para estudiantes que perdieron //

function mostrarPerdedores() {
    console.log("Estudiantes que perdieron:");
    registros.forEach(estudiante => {
        if (estudiante.notaFinal < 3.5) {
            console.log(`Documento: ${estudiante.documento}, Nombre: ${estudiante.nombre}, Nota Final: ${estudiante.notaFinal}`);
        }
    });
}

// Función para estudiantes que ganaron //
function mostrarGanadores() {
    console.log("Estudiantes que ganaron:");
    registros.forEach(estudiante => {
        if (estudiante.notaFinal >= 3.5) {
            console.log(`Documento: ${estudiante.documento}, Nombre: ${estudiante.nombre}, Nota Final: ${estudiante.notaFinal}`);
        }
    });
}

// Función principal
function main() {
    let opcion;
    do {
        mostrarMenu();
        opcion = +prompt("Seleccione una opción:");
        switch (opcion) {
            case 1:
                registrarEstudiante();
                break;
            case 2:
                mostrarPerdedores();
                break;
            case 3:
                mostrarGanadores();
                break;
            case 4:
                console.log(`Se registraron ${registros.length} estudiantes.`);
                console.log("Usted salio de la aplicación.");
                break;
            default:
                console.log("Opción no válida. Seleccione una opción correcta.");
        }
    } while (opcion !== 4);
}

// Llamada a la función principal para iniciar la aplicación
main();
