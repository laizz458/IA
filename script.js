function generateResponse() {
    const input = document.getElementById("userInput").value;
    const responseElement = document.getElementById("response");

    if (input.trim() === "") {
        responseElement.textContent = "Veuillez entrer une question.";
        return;
    }

    // Simulation d'une IA simple
    responseElement.textContent = 
        "Analyse en cours... 🤖\n\nRéponse générée : L'IA apprend grâce aux données et aux algorithmes.";
}
