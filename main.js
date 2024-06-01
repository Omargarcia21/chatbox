
//Una vez que el DOM está completamente cargado, se definen las respuestas predefinidas.
document.addEventListener("DOMContentLoaded", function() {
    const responses = {
        'hola': '¡Hola! ¿Cómo estás?',
        'adios': '¡Adiós! Que tengas un buen día.',
        'como estas': 'Estoy bien, gracias por preguntar.',
        'que puedes hacer': 'Puedo responder a tus preguntas básicas.'
    };

//Seleccionamos el boton, input y el contenedo "div" del HTML
    const sendButton = document.getElementById("send-button");
    const userInput = document.getElementById("user-input");
    const messagesContainer = document.getElementById("messages");

//Se añade un evento al botón de enviar para capturar el mensaje del usuario, añadirlo al contenedor de mensajes y generar una respuesta del chatbot
    sendButton.addEventListener("click", function() {
        const userMessage = userInput.value.trim().toLowerCase();
        if (userMessage !== "") {
            addMessage(userMessage, "user");
            userInput.value = "";
            generateResponse(userMessage);
        }
    });

//La función addMessage añade un mensaje al contenedor de mensajes.
    function addMessage(text, sender) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", `${sender}-message`);
        messageDiv.textContent = text;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

//La función generateResponse genera una respuesta basada en el mensaje del usuario utilizando el objeto responses.
    function generateResponse(userMessage) {
        const response = responses[userMessage] || "Lo siento, no entiendo esa pregunta.";
        setTimeout(() => addMessage(response, "bot"), 500);
    }
});