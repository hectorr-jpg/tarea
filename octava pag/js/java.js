// Función para calcular factorial usando recursión
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Función para calcular combinaciones C(n, r)
function combinacion(n, r) {
    if (r > n || n < 0 || r < 0) {
        return 0;
    }
    // Usando la fórmula: n! / (r! * (n-r)!)
    let numerador = factorial(n);
    let denominador = factorial(r) * factorial(n - r);
    return numerador / denominador;
}

// Función principal que se ejecuta al hacer clic
function calcularPowerball() {
    // Obtener los valores usando getElementById
    let n1 = document.getElementById("numeros");
    let r1 = document.getElementById("elegidos");
    let n2 = document.getElementById("powerballNumeros");
    let r2 = document.getElementById("powerballElegidos");
    
    // Obtener los valores numéricos (aunque están como readonly)
    let numPrincipales = parseInt(n1.value);
    let elegidosPrincipales = parseInt(r1.value);
    let numPowerball = parseInt(n2.value);
    let elegidosPowerball = parseInt(r2.value);
    
    // Calcular las combinaciones
    let combosPrincipales = combinacion(numPrincipales, elegidosPrincipales);
    let combosPowerball = combinacion(numPowerball, elegidosPowerball);
    
    // Calcular el total
    let totalCombinaciones = combosPrincipales * combosPowerball;
    
    // Obtener el elemento donde mostraremos el resultado
    let resultadoDiv = document.getElementById("resultado");
    
    // Formatear el número para que sea legible (separadores de miles)
    let totalFormateado = totalCombinaciones.toLocaleString('es-ES');
    
    // Mostrar el resultado con formato aesthetic
    resultadoDiv.innerHTML = `
        <p>✨ <strong>Total de combinaciones posibles</strong> ✨</p>
        <div class="numero">${totalFormateado}</div>
        <div class="detalle">
            C(59,5) = ${combosPrincipales.toLocaleString('es-ES')}<br>
            C(35,1) = ${combosPowerball.toLocaleString('es-ES')}<br>
            Multiplicando ambos resultados obtenemos el total.
        </div>
    `;
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtener el botón por su ID
    let boton = document.getElementById("calcularBtn");
    
    // Agregar el evento click al botón
    boton.addEventListener("click", calcularPowerball);
    
    // También podemos mostrar automáticamente el resultado al cargar la página
    calcularPowerball();
});