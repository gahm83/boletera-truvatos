// Marquee functionality
function initMarquee() {
    const marqueeContent = document.querySelector(".marquee-content");
    const items = [
        { date: "Jul 1 - Oct 31", logo: "/images/logo.png" },
        { date: "Jul 1 - Oct 31", logo: "/images/logo.png" },
        { date: "Jul 1 - Oct 31", logo: "/images/logo.png" },
        { date: "Jul 1 - Oct 31", logo: "/images/logo.png" }
    ];

    // Limpiar el contenido existente
    marqueeContent.innerHTML = "";

    // Crear dos copias del contenido para asegurar una transición suave
    for (let i = 0; i < 2; i++) {
        items.forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.className = "inline-flex items-center gap-4 px-8";
            itemDiv.innerHTML = `
                <span class="text-lg font-semibold">${item.date}</span>
                <img src="${item.logo}" alt="Event Logo" class="h-8">
            `;
            marqueeContent.appendChild(itemDiv);
        });
    }

    let position = 0;
    const speed = 1;
    const content = document.querySelector(".marquee-content");
    const itemWidth = content.offsetWidth / 2; // Dividir por 2 porque tenemos 2 copias

    function animate() {
        position -= speed;
        if (position <= -itemWidth) {
            position = 0;
        }
        content.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate);
    }

    animate();
}

// DatePicker initialization
function initDatePicker() {
    const datepicker = new AirDatepicker("#datepicker", {
        inline: true,
        minDate: new Date(2025, 6, 1), // July 1, 2025
        maxDate: new Date(2025, 9, 31), // October 31, 2025
        onSelect: ({ date }) => {
            updateTicketSummary();
        },
        classes: "custom-datepicker",
        autoClose: true,
        buttons: ["clear"],
        selectedDates: [],
        view: "days",
        minView: "days",
        dateFormat: "d MMMM yyyy",
        locale: {
            days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
            daysShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
            daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
            months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
            today: "Hoy",
            clear: "Limpiar",
            dateFormat: "dd/MM/yyyy",
            timeFormat: "HH:mm",
            firstDay: 1
        }
    });
}

// Time selection
function initTimeSelection() {
    const timeContainer = document.getElementById("timeSelection");
    const times = Array.from({ length: 8 }, (_, i) => `${i + 10}:00`);

    times.forEach(time => {
        const label = document.createElement("label");
        label.className = "time-option";
        label.innerHTML = `
            <input type="radio" name="time" value="${time}">
            <span>${time}</span>
        `;
        timeContainer.appendChild(label);
    });

    timeContainer.addEventListener("change", updateTicketSummary);
}

// Ticket counter
function initTicketCounter() {
    const decreaseBtn = document.querySelector(".ticket-decrease");
    const increaseBtn = document.querySelector(".ticket-increase");
    const input = document.getElementById("ticketCount");

    function updateButtonStates() {
        const value = parseInt(input.value);
        decreaseBtn.disabled = value <= 1;
        increaseBtn.disabled = value >= 4;
        decreaseBtn.classList.toggle("opacity-50", value <= 1);
        increaseBtn.classList.toggle("opacity-50", value >= 4);
    }

    decreaseBtn.addEventListener("click", () => {
        const value = parseInt(input.value);
        if (value > 1) {
            input.value = value - 1;
            updateButtonStates();
            updateTicketSummary();
        }
    });

    increaseBtn.addEventListener("click", () => {
        const value = parseInt(input.value);
        if (value < 4) {
            input.value = value + 1;
            updateButtonStates();
            updateTicketSummary();
        }
    });

    input.addEventListener("change", () => {
        updateButtonStates();
        updateTicketSummary();
    });

    // Initialize button states
    updateButtonStates();
}

// FAQ Accordion
function initFAQAccordion() {
    const faqs = [
        {
            question: "¿Por qué necesito reservar si la entrada es gratuita?",
            answer: "La reserva nos ayuda a controlar el flujo de visitantes y asegurar una mejor experiencia para todos."
        },
        {
            question: "¿Necesito imprimir el tiquet o puedo mostrarlo desde mi celular?",
            answer: "Puedes mostrar el tiquet desde tu celular, no es necesario imprimirlo."
        },
        {
            question: "¿Qué pasa si no puedo asistir a la hora reservada?",
            answer: "Por favor, notifica con anticipación para que podamos reasignar tu espacio."
        },
        {
            question: "¿Puedo asistir sin haber reservado previamente?",
            answer: "No, es necesario hacer una reserva previa para garantizar tu entrada."
        },
        {
            question: "¿Cuántas personas puedo incluir en una sola reserva?",
            answer: "Puedes incluir hasta 10 personas en una sola reserva."
        }
    ];

    const accordion = document.getElementById("faqAccordion");
    faqs.forEach(faq => {
        const item = document.createElement("div");
        item.className = "overflow-hidden";
        item.innerHTML = `
            <button class="w-full text-left flex justify-between items-center relative py-4">
                <span class="block pr-9">${faq.question}</span>
                <span class="flex items-center justify-center absolute right-0 w-9 h-9">
                    <svg class="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="none" stroke="#000000" stroke-linecap="round" stroke-width="2" d="M12 20v-8m0 0V4m0 8h8m-8 0H4"/>
                    </svg>
                <span>
            </button>
            <div class="hidden text-sm text-neutral-600 pb-4">
                ${faq.answer}
            </div>
        `;

        const button = item.querySelector("button");
        const content = item.querySelector("div");
        const icon = button.querySelector("svg");

        button.addEventListener("click", () => {
            const isOpen = content.classList.contains("hidden");
        
            // Cerrar todos los demás
            document.querySelectorAll("#faqAccordion > div").forEach(otherItem => {
                const otherButton = otherItem.querySelector("button");
                const otherContent = otherItem.querySelector("div");
                const otherIcon = otherButton.querySelector("svg");
        
                otherContent.classList.add("hidden");
                otherContent.classList.remove("border-b", "border-black");
                otherButton.classList.remove("border-t", "border-black");
        
                if (otherIcon) {
                    otherIcon.innerHTML = "<path fill=\"none\" stroke=\"#000000\" stroke-linecap=\"round\" stroke-width=\"2\" d=\"M12 20v-8m0 0V4m0 8h8m-8 0H4\"/>";
                }
            });
        
            // Abrir el actual si estaba cerrado
            if (isOpen) {
                button.classList.add("border-t", "border-black");
                content.classList.remove("hidden");
                content.classList.add("border-b", "border-black");
                icon.innerHTML = "<path fill=\"none\" stroke=\"#000000\" stroke-linecap=\"round\" stroke-width=\"2\" d=\"M20 12H4\"/>";
            }
        });

        accordion.appendChild(item);
    });
}

// Update ticket summary
function updateTicketSummary() {
    const summary = document.getElementById("ticketSummary");
    const date = document.querySelector(".air-datepicker-cell.-selected-")?.textContent;
    const time = document.querySelector("input[name=\"time\"]:checked")?.value;
    const tickets = document.getElementById("ticketCount").value;

    if (date && time) {
        summary.textContent = `${date}, ${time} x ${tickets}`;
        
        // Update confirmation details
        document.getElementById("confirmationDate").textContent = date;
        document.getElementById("confirmationTime").textContent = time;
        document.getElementById("confirmationTickets").textContent = tickets;
    }
}

// Wizard navigation
function initWizard() {
    const step1 = document.getElementById("step1");
    const step2 = document.getElementById("step2");
    const nextToStep2 = document.getElementById("nextToStep2");
    const backToStep1 = document.getElementById("backToStep1");
    const sidebarNextBtn = document.getElementById("sidebarNextBtn");
    const goToPersonalInfo = document.getElementById("goToPersonalInfo");

    function validateStep1() {
        const date = document.querySelector(".air-datepicker-cell.-selected-")?.textContent;
        const time = document.querySelector("input[name=\"time\"]:checked")?.value;
        return date && time;
    }

    function showStep(stepNumber) {
        if (stepNumber === 1) {
            step1.classList.remove("hidden");
            step2.classList.add("hidden");
            sidebarNextBtn.textContent = "Continuar";
        } else {
            step1.classList.add("hidden");
            step2.classList.remove("hidden");
            sidebarNextBtn.textContent = "Personalizar Boletos";
        }
    }

    function goToStep2() {
        if (validateStep1()) {
            showStep(2);
            // Store reservation data
            const reservationData = {
                date: document.querySelector(".air-datepicker-cell.-selected-")?.textContent,
                time: document.querySelector("input[name=\"time\"]:checked")?.value,
                tickets: document.getElementById("ticketCount").value
            };
            localStorage.setItem("reservationData", JSON.stringify(reservationData));
        } else {
            alert("Por favor, selecciona una fecha y hora para continuar.");
        }
    }

    nextToStep2.addEventListener("click", goToStep2);
    sidebarNextBtn.addEventListener("click", () => {
        if (step1.classList.contains("hidden")) {
            // If on step 2, go to personal info
            window.location.href = "personal-info.html";
        } else {
            goToStep2();
        }
    });

    backToStep1.addEventListener("click", () => showStep(1));
    goToPersonalInfo.addEventListener("click", () => {
        window.location.href = "personal-info.html";
    });
}

// Initialize everything when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    initMarquee();
    initDatePicker();
    initTimeSelection();
    initTicketCounter();
    initFAQAccordion();
    initWizard();
});
