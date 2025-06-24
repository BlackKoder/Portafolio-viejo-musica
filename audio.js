// Inicializa el contexto de audio de Tone.js
        // Es importante llamarlo en una interacción de usuario (como un clic)
        // para asegurar la compatibilidad con navegadores que lo requieren.
document.addEventListener('DOMContentLoaded', () => {
            // Se asume que Tone.js ya está cargado
            if (Tone) {
                // Crea un sintetizador simple
                const synth = new Tone.Synth().toDestination();

                // Selecciona todas las letras que actúan como notas
                const noteLetters = document.querySelectorAll('.note-letter');

                noteLetters.forEach(letter => {
                    letter.addEventListener('click', async () => {
                        // Inicia el audio context de Tone.js si no está activo
                        // Esto es necesario para que el audio funcione en navegadores modernos
                        if (Tone.context.state !== 'running') {
                            await Tone.start();
                            console.log('AudioContext iniciado');
                        }

                        const note = letter.dataset.note; // Obtiene la nota de los datos del elemento
                        const duration = '8n'; // Duración de la nota (ej. corchea)

                        // Reproduce la nota
                        synth.triggerAttackRelease(note, duration);

                        // Agrega una clase para el efecto visual de "playing"
                        letter.classList.add('playing');

                        // Elimina la clase 'playing' después de un breve tiempo
                        setTimeout(() => {
                            letter.classList.remove('playing');
                        }, 200); // Duración del efecto visual
                    });
                });
            } else {
                console.error("Tone.js no está cargado. Asegúrate de que el script CDN sea accesible.");
            }
});