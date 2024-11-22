// Función para inicializar el monitoreo de movimiento
function startMotionMonitoring() {
    // Verifica si el dispositivo soporta DeviceMotionEvent
    if (window.DeviceMotionEvent) {
        // Configura el evento para capturar cambios en la aceleración
        window.addEventListener('devicemotion', function(event) {
            // Captura valores de aceleración en X, Y y Z
            const accelX = event.acceleration.x || 0;
            const accelY = event.acceleration.y || 0;
            const accelZ = event.acceleration.z || 0;
            
            // Calcula el vector resultante
            const resultantVector = Math.sqrt(Math.pow(accelX,2) + Math.pow(accelY,2) + Math.pow(accelZ,2));
            
            // Muestra los valores en la interfaz del reloj
            document.getElementById('accelX').innerText = 'X: ' + accelX.toFixed(2);
            document.getElementById('accelY').innerText = 'Y: ' + accelY.toFixed(2);
            document.getElementById('accelZ').innerText = 'Z: ' + accelZ.toFixed(2);
            document.getElementById('resultant').innerText = 'Resultante: ' + resultantVector.toFixed(2);
        });
    } else {
        console.log("DeviceMotionEvent no está soportado en este dispositivo.");
    }
}

// Llamada inicial a la función
startMotionMonitoring();
