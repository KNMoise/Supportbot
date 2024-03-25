document.addEventListener("DOMContentLoaded", function() {
    const chatBox = document.getElementById("chatBox");
    const userInput = document.getElementById("userInput");
  
    function appendMessage(sender, message) {
      const msgElement = document.createElement("div");
      msgElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
      chatBox.appendChild(msgElement);
      chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
    }
  
    userInput.addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
        const message = userInput.value.trim();
        if (message !== "") {
          appendMessage("User", message);
          userInput.value = "";
          sendMessage(message);
        }
      }
    });
  
    function sendMessage(message) {
      // Send message to PHP backend
      fetch("backend.php", {
        method: "POST",
        body: JSON.stringify({ message: message }),
      })
      .then(response => response.json())
      .then(data => {
        appendMessage("Bot", data.response);
      })
      .catch(error => console.error("Error:", error));
    }
  });
  