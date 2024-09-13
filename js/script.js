// Programa 1: Calcular superficie de un triángulo
function calcularSuperficie() {
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const superficie = (base * altura) / 2;
    document.getElementById('resultado-superficie').innerText = 'Superficie: ' + superficie;
}

// Programa 2: Solicitar datos personales e imprimirlos
function mostrarDatos() {
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const email = document.getElementById('email').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;

    const datos = `
        <div><strong>Nombre:</strong> ${nombre}</div>
        <div><strong>Edad:</strong> ${edad}</div>
        <div><strong>Email:</strong> ${email}</div>
        <div><strong>Dirección:</strong> ${direccion}</div>
        <div><strong>Teléfono:</strong> ${telefono}</div>
    `;
    document.getElementById('datos-personales').innerHTML = datos;
}

// Programa 3: Calcular sueldo de 5 trabajadores
const sueldos = [];
for (let i = 1; i <= 5; i++) {
    const inputSueldo = document.createElement('input');
    inputSueldo.type = 'number';
    inputSueldo.placeholder = `Sueldo del trabajador ${i}`;
    inputSueldo.id = `trabajador${i}`;
    document.getElementById('trabajadores').appendChild(inputSueldo);
}

function calcularSueldo() {
    let totalNomina = 0;
    for (let i = 1; i <= 5; i++) {
        const sueldo = parseFloat(document.getElementById(`trabajador${i}`).value);
        totalNomina += sueldo;
    }
    document.getElementById('resultado-sueldo').innerText = 'Total de nómina: ' + totalNomina;
}

// Programa 4: Calcular promedio de un alumno
function calcularPromedio() {
    const materia1 = parseFloat(document.getElementById('materia1').value);
    const materia2 = parseFloat(document.getElementById('materia2').value);
    const materia3 = parseFloat(document.getElementById('materia3').value);
    const promedio = (materia1 + materia2 + materia3) / 3;
    document.getElementById('resultado-promedio').innerText = 'Promedio: ' + promedio.toFixed(2);
}
