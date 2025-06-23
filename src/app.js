// Marquee functionality
function initMarquee() {
    const marqueeContent = document.querySelector('.marquee-content');
    const items = [
        { date: 'Jul 1 - Oct 31', logo: '/images/logo.png' },
        { date: 'Jul 1 - Oct 31', logo: '/images/logo.png' },
        { date: 'Jul 1 - Oct 31', logo: '/images/logo.png' },
        { date: 'Jul 1 - Oct 31', logo: '/images/logo.png' }
    ];

    // Limpiar el contenido existente
    marqueeContent.innerHTML = '';

    // Crear dos copias del contenido para asegurar una transición suave
    for (let i = 0; i < 2; i++) {
        items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'inline-flex items-center gap-4 px-8';
            itemDiv.innerHTML = `
                <span class="text-lg font-semibold">${item.date}</span>
                <img src="${item.logo}" alt="Event Logo" class="h-8">
            `;
            marqueeContent.appendChild(itemDiv);
        });
    }

    let position = 0;
    const speed = 1;
    const content = document.querySelector('.marquee-content');
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
    const datepicker = new AirDatepicker('#datepicker', {
        inline: true,
        minDate: new Date(2025, 6, 1), // July 1, 2025
        maxDate: new Date(2025, 9, 31), // October 31, 2025
        onSelect: ({ date }) => {
            updateTicketSummary();
        },
        classes: 'custom-datepicker',
        autoClose: true,
        buttons: ['clear'],
        selectedDates: [],
        view: 'days',
        minView: 'days',
        dateFormat: 'd MMMM yyyy',
        locale: {
            days: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
            daysShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
            daysMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
            months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            today: 'Hoy',
            clear: 'Limpiar',
            dateFormat: 'dd/MM/yyyy',
            timeFormat: 'HH:mm',
            firstDay: 1
        }
    });
}

// Time selection
function initTimeSelection() {
    const timeContainer = document.getElementById('timeSelection');
    const times = Array.from({ length: 8 }, (_, i) => `${i + 10}:00`);

    times.forEach(time => {
        const label = document.createElement('label');
        label.className = 'time-option';
        label.innerHTML = `
            <input type="radio" name="time" value="${time}">
            <span>${time}</span>
        `;
        timeContainer.appendChild(label);
    });

    timeContainer.addEventListener('change', updateTicketSummary);
}

// Ticket counter
function initTicketCounter() {
    const decreaseBtn = document.querySelector('.ticket-decrease');
    const increaseBtn = document.querySelector('.ticket-increase');
    const input = document.getElementById('ticketCount');

    decreaseBtn.addEventListener('click', () => {
        const value = parseInt(input.value);
        if (value > 1) {
            input.value = value - 1;
            updateTicketSummary();
        }
    });

    increaseBtn.addEventListener('click', () => {
        const value = parseInt(input.value);
        if (value < 10) {
            input.value = value + 1;
            updateTicketSummary();
        }
    });

    input.addEventListener('change', updateTicketSummary);
}

// FAQ Accordion
function initFAQAccordion() {
    const faqs = [
        {
            question: '¿Por qué necesito reservar si la entrada es gratuita?',
            answer: 'La reserva nos ayuda a controlar el flujo de visitantes y asegurar una mejor experiencia para todos.'
        },
        {
            question: '¿Necesito imprimir el tiquet o puedo mostrarlo desde mi celular?',
            answer: 'Puedes mostrar el tiquet desde tu celular, no es necesario imprimirlo.'
        },
        {
            question: '¿Qué pasa si no puedo asistir a la hora reservada?',
            answer: 'Por favor, notifica con anticipación para que podamos reasignar tu espacio.'
        },
        {
            question: '¿Puedo asistir sin haber reservado previamente?',
            answer: 'No, es necesario hacer una reserva previa para garantizar tu entrada.'
        },
        {
            question: '¿Cuántas personas puedo incluir en una sola reserva?',
            answer: 'Puedes incluir hasta 10 personas en una sola reserva.'
        }
    ];

    const accordion = document.getElementById('faqAccordion');
    faqs.forEach(faq => {
        const item = document.createElement('div');
        item.className = 'overflow-hidden';
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

        const button = item.querySelector('button');
        const content = item.querySelector('div');
        const icon = button.querySelector('svg');

        button.addEventListener('click', () => {
            const isOpen = content.classList.contains('hidden');
        
            // Cerrar todos los demás
            document.querySelectorAll('#faqAccordion > div').forEach(otherItem => {
                const otherButton = otherItem.querySelector('button');
                const otherContent = otherItem.querySelector('div');
                const otherIcon = otherButton.querySelector('svg');
        
                otherContent.classList.add('hidden');
                otherContent.classList.remove('border-b', 'border-black');
                otherButton.classList.remove('border-t', 'border-black');
        
                if (otherIcon) {
                    otherIcon.innerHTML = '<path fill="none" stroke="#000000" stroke-linecap="round" stroke-width="2" d="M12 20v-8m0 0V4m0 8h8m-8 0H4"/>';
                }
            });
        
            // Abrir el actual si estaba cerrado
            if (isOpen) {
                button.classList.add('border-t', 'border-black');
                content.classList.remove('hidden');
                content.classList.add('border-b', 'border-black');
                icon.innerHTML = '<path fill="none" stroke="#000000" stroke-linecap="round" stroke-width="2" d="M20 12H4"/>';
            }
        });

        accordion.appendChild(item);
    });
}

// Update ticket summary
function updateTicketSummary() {
    const summary = document.getElementById('ticketSummary');
    const date = document.querySelector('.air-datepicker-cell.-selected-')?.textContent;
    const time = document.querySelector('input[name="time"]:checked')?.value;
    const tickets = document.getElementById('ticketCount').value;

    if (date && time) {
        summary.textContent = `${date}, ${time} x ${tickets}`;
    }
}

// Form submission
function initFormSubmission() {
    const form = document.getElementById('reservationForm');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            tickets: document.getElementById('ticketCount').value,
            date: document.querySelector('.air-datepicker-cell.-selected-')?.textContent,
            time: document.querySelector('input[name="time"]:checked')?.value,
            email: form.querySelector('input[type="email"]').value,
            firstName: form.querySelector('input[placeholder="Nombre"]').value,
            lastName: form.querySelector('input[placeholder="Apellido"]').value,
            phone: form.querySelector('input[type="tel"]').value,
            country: form.querySelector('input[placeholder="País"]').value,
            ageGroup: form.querySelector('select').value
        };

        try {
            // Replace with your actual endpoint
            const response = await fetch('YOUR_ENDPOINT_HERE', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Reserva realizada con éxito');
                form.reset();
            } else {
                throw new Error('Error en la reserva');
            }
        } catch (error) {
            alert('Error al procesar la reserva. Por favor, intenta nuevamente.');
            console.error('Error:', error);
        }
    });
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initMarquee();
    initDatePicker();
    initTimeSelection();
    initTicketCounter();
    initFAQAccordion();
    initFormSubmission();
}); 