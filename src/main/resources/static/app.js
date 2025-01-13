document.getElementById("register").addEventListener("submit", async (e) => {
    e.preventDefault(); // Previne trimiterea normală a formularului

    // Obține datele din formular
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Creează un obiect pentru feedback utilizator
    const feedback = document.createElement("div");
    feedback.classList.add("mt-3", "alert");

    try {
        // Trimite datele către backend
        const response = await fetch("http://localhost:8088/api/v1/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstname,
                lastname,
                email,
                password,
            }),
        });

        if (response.ok) {
            // Afișează mesaj de succes
            feedback.classList.add("alert-success");
            feedback.innerText = "Registration successful! Welcome to Book Social Network.";
        } else {
            // Afișează mesaj de eroare
            feedback.classList.add("alert-danger");
            feedback.innerText = "Registration failed! Please check your details and try again.";
        }
    } catch (error) {
        // Afișează eroare de rețea sau server
        feedback.classList.add("alert-danger");
        feedback.innerText = "An error occurred. Please try again later.";
    }

    // Adaugă feedback în interfață
    const formContainer = document.querySelector(".form-container");
    formContainer.appendChild(feedback);

    // Șterge mesajul după câteva secunde
    setTimeout(() => {
        feedback.remove();
    }, 5000);
});