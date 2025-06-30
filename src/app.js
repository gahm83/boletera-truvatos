// Marquee functionality
function initMarquee() {
    const marqueeContent = document.querySelector(".marquee-content");
    const items = [
        { date: "Jul 1 - Oct 31" },
        { date: "Jul 1 - Oct 31" },
        { date: "Jul 1 - Oct 31" },
        { date: "Jul 1 - Oct 31" }
    ];

    const logoSvg = `<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-8">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0624 7.87149V0H20.2633V19.8394H16.0624V11.7269H4.20094V19.8394H0V0H4.20094V7.87149H16.0624ZM45.7984 0H50.576L41.1856 12.4498V19.9197H37.0671V12.4498L27.6768 0H32.7014L39.2911 8.6747L45.7984 0ZM74.3813 0C76.2758 0 77.3466 0.963855 77.3466 2.89157V7.87149C77.3466 8.91566 76.4405 9.87952 75.2873 9.87952C76.4405 9.87952 77.3466 10.7631 77.3466 11.8876V17.1084C77.3466 18.9558 76.3582 20 74.3813 20H56.9186V0H74.3813ZM61.1195 8.03213H73.1457V3.61446H61.1195V8.03213ZM61.1195 16.2249H73.1457V11.5663H61.1195V16.2249ZM105.6 3.61446H89.7023V7.95181H105.188V11.5663H89.7023V16.2249H105.6V19.8394H85.5014V0H105.6V3.61446Z" fill="black"/>
        <path d="M104.497 28C105.318 28 106.09 28.1421 106.813 28.4268C107.537 28.7004 108.147 29.1166 108.644 29.6748L107.882 30.4463C107.418 29.9649 106.905 29.6201 106.344 29.4121C105.782 29.1932 105.177 29.084 104.529 29.084C103.849 29.084 103.218 29.2045 102.635 29.4453C102.052 29.6752 101.544 30.0085 101.112 30.4463C100.68 30.8732 100.34 31.3769 100.092 31.957C99.8542 32.5263 99.7354 33.1561 99.7354 33.8457C99.7354 34.5352 99.8543 35.1699 100.092 35.75C100.34 36.3192 100.68 36.8229 101.112 37.2607C101.544 37.6877 102.052 38.0219 102.635 38.2627C103.218 38.4925 103.849 38.6074 104.529 38.6074C105.177 38.6074 105.782 38.4982 106.344 38.2793C106.905 38.0604 107.418 37.71 107.882 37.2285L108.644 38C108.147 38.5583 107.537 38.98 106.813 39.2646C106.09 39.5492 105.313 39.6914 104.481 39.6914C103.628 39.6914 102.84 39.5493 102.116 39.2646C101.393 38.9691 100.766 38.5586 100.237 38.0332C99.7083 37.5078 99.2926 36.8891 98.9902 36.1777C98.6987 35.4662 98.5527 34.6886 98.5527 33.8457C98.5527 33.0028 98.6987 32.2252 98.9902 31.5137C99.2926 30.8022 99.7083 30.1836 100.237 29.6582C100.777 29.1328 101.409 28.728 102.133 28.4434C102.856 28.1479 103.644 28 104.497 28ZM1.19824 38.542H7.54785V38.5459L12.2588 28.0986H13.4414L18.624 39.5928H17.3604L16.0049 36.5225H9.67871L8.32324 39.5928H0V28.0986H1.19824V38.542ZM26.668 29.1494H22.6836V39.5928H21.4844V29.1494H17.5V28.0986H26.668V29.1494ZM29.1328 39.5928H27.9346V28.0986H29.1328V39.5928ZM40.4658 37.4199V28.0986H41.6484V39.5928H40.6602L33.3721 30.2725V39.5928H32.1738V28.0986H33.1611L40.4658 37.4199ZM58.0264 39.5928H56.7627L55.4072 36.5225H49.0811L47.7256 39.5928H46.4785L51.6611 28.0986H52.8438L58.0264 39.5928ZM65.1641 36.6133L70.041 28.0986H71.0283V39.5928H69.8789V30.3984L65.4248 38.1309H64.8574L60.4043 30.4521V39.5928H59.2539V28.0986H60.2422L65.1641 36.6133ZM81.8496 29.1494H75.2734V33.2383H81.1367V34.2725H75.2734V38.542H82.0918V39.5928H74.0752V28.0986H81.8496V29.1494ZM88.5049 28.0986C89.4658 28.0986 90.2914 28.2578 90.9824 28.5752C91.6734 28.8817 92.2032 29.3298 92.5703 29.9209C92.9482 30.501 93.1367 31.2072 93.1367 32.0391C93.1367 32.8491 92.9482 33.5505 92.5703 34.1416C92.2032 34.7217 91.6734 35.1699 90.9824 35.4873C90.8427 35.5493 90.6967 35.6029 90.5459 35.6523L93.3154 39.5928H92.0029L89.418 35.8945C89.1284 35.9284 88.8242 35.9473 88.5049 35.9473H85.46V39.5928H84.2617V28.0986H88.5049ZM96.5166 39.5928H95.3184V28.0986H96.5166V39.5928ZM120 39.5928H118.736L117.381 36.5225H111.055L109.699 39.5928H108.452L113.635 28.0986H114.817L120 39.5928ZM10.1133 35.5371H15.5703L12.8418 29.3555L10.1133 35.5371ZM49.5156 35.5371H54.9727L52.2441 29.3555L49.5156 35.5371ZM111.489 35.5371H116.946L114.218 29.3555L111.489 35.5371ZM85.46 34.9131H88.4727C89.6063 34.913 90.4648 34.6607 91.0479 34.1572C91.6415 33.6537 91.9385 32.9475 91.9385 32.0391C91.9384 31.1197 91.6416 30.4078 91.0479 29.9043C90.4648 29.4008 89.6062 29.1495 88.4727 29.1494H85.46V34.9131Z" fill="black"/>
    </svg>`;

    // Limpiar el contenido existente
    marqueeContent.innerHTML = "";

    // Crear dos copias del contenido para asegurar una transición suave
    for (let i = 0; i < 2; i++) {
        items.forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.className = "flex items-center space-x-[50px]";
            itemDiv.innerHTML = `
                <span class="text-lg font-semibold font-hybe text-[#CDCDCD]">${item.date}</span>
                ${logoSvg}
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
    return new AirDatepicker("#datepicker", {
        inline: true,
        minDate: new Date(2025, 6, 1), // July 1, 2025
        maxDate: new Date(2025, 9, 31), // October 31, 2025
        onSelect: () => updateTicketSummary(),
        onRenderCell: ({ date, cellType }) => {
            // Only handle month cells
            if (cellType === 'month') {
                // Check if month is outside July-October range
                const month = date.getMonth();
                const isDisabled = month < 6 || month > 9;
                
                return {
                    disabled: isDisabled,
                    classes: isDisabled ? 'hidden' : ''
                };
            }
        },
        locale: {
            days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
            daysShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
            daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
            months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
            today: "Hoy",
            clear: "Limpiar",
            dateFormat: "dd/MM/yyyy",
            firstDay: 1
        }
    });
}

// Time selection
function initTimeSelection() {
    const timeInputs = document.querySelectorAll('input[name="time"]');
    timeInputs.forEach(input => {
        input.addEventListener('change', () => {
            updateTicketSummary();
        });
    });
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
        let value = parseInt(input.value);
        value = Math.max(1, Math.min(4, value));
        input.value = value;
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
