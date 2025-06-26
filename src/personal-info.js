// Get reservation data from localStorage
const reservationData = JSON.parse(localStorage.getItem("reservationData"));

// Create a form template for each ticket
function createTicketForm(index) {
    const formHtml = `
        <div class="ticket-form bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-4">Boleto ${index + 1}</h3>
            <div class="grid grid-cols-2 gap-4">
                <div class="form-column">
                    <label class="form-column-label">Nombre</label>
                    <input type="text" name="firstName_${index}" class="form-column-input" required>
                </div>
                <div class="form-column">
                    <label class="form-column-label">Apellido</label>
                    <input type="text" name="lastName_${index}" class="form-column-input" required>
                </div>
                <div class="col-span-2 form-column">
                    <label class="form-column-label">Correo electrónico</label>
                    <input type="email" name="email_${index}" class="form-column-input" required>
                </div>
                <div class="form-column">
                    <label class="form-column-label">País</label>
                    <input type="text" name="country_${index}" class="form-column-input" required>
                </div>
                <div class="form-column">
                    <label class="form-column-label">Grupo de edad</label>
                    <select name="ageGroup_${index}" class="form-column-input" required>
                        <option value="">Selecciona tu edad</option>
                        <option value="18-25">18-25</option>
                        <option value="26-35">26-35</option>
                        <option value="36-45">36-45</option>
                        <option value="46+">46+</option>
                    </select>
                </div>
                <div class="col-span-2 form-column">
                    <label class="form-column-label">Teléfono</label>
                    <input type="tel" name="phone_${index}" class="form-column-input" required>
                </div>
            </div>
        </div>
    `;
    return formHtml;
}

// Initialize the page
function initPage() {
    const container = document.getElementById("ticketFormsContainer");
    const numTickets = reservationData?.tickets || 0;

    // Create forms for each ticket
    for (let i = 0; i < numTickets; i++) {
        container.innerHTML += createTicketForm(i);
    }

    // Handle back button
    document.getElementById("backToReservation").addEventListener("click", () => {
        window.location.href = "index.html";
    });

    // Handle form submission
    document.getElementById("submitAllForms").addEventListener("click", async () => {
        const forms = document.querySelectorAll(".ticket-form");
        const ticketData = [];

        // Collect data from all forms
        forms.forEach((form, index) => {
            ticketData.push({
                firstName: form.querySelector(`[name="firstName_${index}"]`).value,
                lastName: form.querySelector(`[name="lastName_${index}"]`).value,
                email: form.querySelector(`[name="email_${index}"]`).value,
                country: form.querySelector(`[name="country_${index}"]`).value,
                ageGroup: form.querySelector(`[name="ageGroup_${index}"]`).value,
                phone: form.querySelector(`[name="phone_${index}"]`).value
            });
        });

        try {
            // Send data to your backend
            const response = await fetch("YOUR_ENDPOINT_HERE", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...reservationData,
                    tickets: ticketData
                })
            });

            if (response.ok) {
                alert("¡Reserva completada con éxito!");
                localStorage.removeItem("reservationData");
                window.location.href = "index.html";
            } else {
                throw new Error("Error en la reserva");
            }
        } catch (error) {
            alert("Error al procesar la reserva. Por favor, intenta nuevamente.");
            console.error("Error:", error);
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initPage);
