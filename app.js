// Navegación entre secciones
function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostrar sección seleccionada
    document.getElementById(sectionId).classList.add('active');
    
    // Actualizar botones de navegación
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    event.target.classList.add('active');
    
    // Si es la sección de quiz, mostrar menú
    if (sectionId === 'quiz') {
        backToMenu();
    }
}

// Flashcards
function flipCard(card) {
    card.classList.toggle('flipped');
}

// Datos de los 3 Quizzes
const quizData = {
    1: [ // Quiz 1: Ácidos y Bases
        {
            question: "¿Cuál de los siguientes es un ácido inorgánico fuerte?",
            options: [
                "Ácido acético",
                "HCl (Ácido clorhídrico)",
                "Ácido cítrico",
                "Etilamina"
            ],
            correct: 1
        },
        {
            question: "¿Cuál es la fórmula general de disociación de un ácido fuerte en agua?",
            options: [
                "HX + H₂O → H₃O⁺ + X⁻",
                "MeOH → Me⁺ + OH⁻",
                "B + H₂O → BH⁺ + OH⁻",
                "HX → H⁺ + X (sin agua)"
            ],
            correct: 0
        },
        {
            question: "¿Cuál de las siguientes es una base inorgánica fuerte?",
            options: [
                "NH₃ (Amoníaco)",
                "Etilamina",
                "NaOH (Hidróxido de sodio)",
                "Ácido acético"
            ],
            correct: 2
        },
        {
            question: "¿Cómo se identifica sensorialmente un ácido?",
            options: [
                "Sabor amargo y tacto resbaladizo",
                "Sabor agrio y corrosivo",
                "Sin sabor ni olor",
                "Sabor dulce"
            ],
            correct: 1
        },
        {
            question: "¿Cuál es la fórmula de disociación de una base fuerte?",
            options: [
                "HX + H₂O → H₃O⁺ + X⁻",
                "MeOH → Me⁺ + OH⁻",
                "B + H₂O → BH⁺ + OH⁻",
                "MeOH → Me⁺ + H₂O"
            ],
            correct: 1
        },
        {
            question: "¿Qué compuesto es un ácido orgánico débil?",
            options: [
                "H₂SO₄",
                "HNO₃",
                "Ácido acético",
                "HCl"
            ],
            correct: 2
        },
        {
            question: "¿Cuál de los siguientes es una base orgánica?",
            options: [
                "NaOH",
                "KOH",
                "Mg(OH)₂",
                "Etilamina"
            ],
            correct: 3
        },
        {
            question: "¿Cómo se identifica químicamente una base débil?",
            options: [
                "MeOH → Me⁺ + OH⁻",
                "B + H₂O → BH⁺ + OH⁻",
                "HX + H₂O → H₃O⁺ + X⁻",
                "No se disocia en agua"
            ],
            correct: 1
        }
    ],
    2: [ // Quiz 2: pH y pOH
        {
            question: "¿Cuál es la fórmula correcta para calcular el pH?",
            options: [
                "pH = log([H⁺])",
                "pH = -log([H⁺])",
                "pH = [H⁺] × 10",
                "pH = 1/[H⁺]"
            ],
            correct: 1
        },
        {
            question: "¿Qué valor de pH indica una solución neutra?",
            options: [
                "pH = 0",
                "pH = 7",
                "pH = 14",
                "pH = 10"
            ],
            correct: 1
        },
        {
            question: "¿Cuál es la relación entre pH y pOH?",
            options: [
                "pH - pOH = 14",
                "pH × pOH = 14",
                "pH + pOH = 14",
                "pH / pOH = 14"
            ],
            correct: 2
        },
        {
            question: "Si una solución tiene pH = 3, ¿qué tipo de solución es?",
            options: [
                "Básica",
                "Neutra",
                "Ácida",
                "No se puede determinar"
            ],
            correct: 2
        },
        {
            question: "¿Cuál es el pH máximo permitido para encurtidos y salsas?",
            options: [
                "3.0",
                "4.6",
                "6.0",
                "7.0"
            ],
            correct: 1
        },
        {
            question: "¿Qué pH debe tener el suelo agrícola para ser óptimo?",
            options: [
                "3.0 - 4.0",
                "6.0 - 7.0",
                "8.0 - 9.0",
                "10.0 - 11.0"
            ],
            correct: 1
        },
        {
            question: "¿Cuál es el pH normal de la sangre humana?",
            options: [
                "6.5",
                "7.0",
                "7.4",
                "8.0"
            ],
            correct: 2
        },
        {
            question: "¿Qué significa 'alcalinizar' una solución?",
            options: [
                "Bajar el pH",
                "Subir el pH",
                "Mantener el pH constante",
                "Neutralizar la solución"
            ],
            correct: 1
        },
        {
            question: "Si [H⁺] = 1×10⁻⁵ mol/L, ¿cuál es el pH?",
            options: [
                "pH = 3",
                "pH = 5",
                "pH = 7",
                "pH = 9"
            ],
            correct: 1
        },
        {
            question: "¿Qué rango de pH se requiere para eliminar metales pesados en tratamiento de aguas?",
            options: [
                "3.0 - 5.0",
                "6.0 - 7.0",
                "8.0 - 11.0",
                "12.0 - 14.0"
            ],
            correct: 2
        }
    ],
    3: [ // Quiz 3: Neutralización y Estequiometría
        {
            question: "¿Cuál es la ecuación general de una reacción de neutralización?",
            options: [
                "Ácido + Base → Sal + Agua",
                "Ácido + Base → Gas + Agua",
                "Ácido + Base → Solo Sal",
                "Ácido + Base → Solo Agua"
            ],
            correct: 0
        },
        {
            question: "En la reacción HCl + NaOH → NaCl + H₂O, ¿cuál es la sal formada?",
            options: [
                "HCl",
                "NaOH",
                "NaCl",
                "H₂O"
            ],
            correct: 2
        },
        {
            question: "¿Cuántos gramos de NaOH se necesitan para neutralizar 73g de HCl? (Masa molar: HCl=36.5 g/mol, NaOH=40 g/mol)",
            options: [
                "40g",
                "60g",
                "80g",
                "100g"
            ],
            correct: 2
        },
        {
            question: "Según la ley de conservación de masa, ¿qué se cumple en una neutralización?",
            options: [
                "La masa de reactantes es mayor que la de productos",
                "La masa de reactantes es igual a la de productos",
                "La masa de productos es mayor que la de reactantes",
                "La masa no se conserva"
            ],
            correct: 1
        },
        {
            question: "En la ecuación HCl + NaOH → NaCl + H₂O, si usas 36.5g de HCl, ¿cuántos gramos de NaOH necesitas?",
            options: [
                "20g",
                "36.5g",
                "40g",
                "58.5g"
            ],
            correct: 2
        },
        {
            question: "¿Qué productos se forman en la neutralización H₂SO₄ + 2KOH?",
            options: [
                "K₂SO₄ + H₂O",
                "K₂SO₄ + 2H₂O",
                "KSO₄ + H₂O",
                "K₂SO₄ + H₂"
            ],
            correct: 1
        },
        {
            question: "¿Cuál es la masa molar total de los reactantes en: HCl + NaOH?",
            options: [
                "36.5 g",
                "40 g",
                "76.5 g",
                "58.5 g"
            ],
            correct: 2
        },
        {
            question: "Si neutralizas 1 mol de HCl con 1 mol de NaOH, ¿cuántos moles de agua se producen?",
            options: [
                "0.5 mol",
                "1 mol",
                "2 mol",
                "3 mol"
            ],
            correct: 1
        }
    ]
};

// Variables del quiz
let currentQuiz = 1;
let currentQuestion = 0;
let score = 0;
let userAnswers = [];

// Seleccionar quiz
function selectQuiz(quizNumber) {
    currentQuiz = quizNumber;
    document.getElementById('quiz-menu').style.display = 'none';
    document.getElementById('quiz-questions').style.display = 'block';
    document.getElementById('quiz-results').style.display = 'none';
    
    // Actualizar título
    const quizTitles = {
        1: "Quiz 1: Ácidos y Bases",
        2: "Quiz 2: pH y pOH",
        3: "Quiz 3: Neutralización"
    };
    document.getElementById('quiz-title-display').textContent = quizTitles[quizNumber];
    
    currentQuestion = 0;
    score = 0;
    userAnswers = new Array(quizData[quizNumber].length).fill(null);
    loadQuestion();
    updateScore();
}

function startQuiz() {
    selectQuiz(1); // Por defecto inicia con el quiz 1
}

function loadQuestion() {
    const questionData = quizData[currentQuiz][currentQuestion];
    const container = document.getElementById('question-container');
    
    document.getElementById('question-counter').textContent = 
        `Pregunta ${currentQuestion + 1} de ${quizData[currentQuiz].length}`;
    
    let optionsHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    
    questionData.options.forEach((option, index) => {
        const selectedClass = userAnswers[currentQuestion] === index ? 'selected' : '';
        optionsHTML += `
            <div class="option ${selectedClass}" onclick="selectOption(${index})">
                <span class="option-letter">${letters[index]}</span>
                <span>${option}</span>
            </div>
        `;
    });
    
    container.innerHTML = `
        <div class="question-text">${questionData.question}</div>
        <div class="options">${optionsHTML}</div>
    `;
    
    // Actualizar botones
    document.getElementById('prev-btn').disabled = currentQuestion === 0;
    document.getElementById('next-btn').textContent = 
        currentQuestion === quizData[currentQuiz].length - 1 ? 'Finalizar' : 'Siguiente';
}

function selectOption(index) {
    userAnswers[currentQuestion] = index;
    loadQuestion();
}

function nextQuestion() {
    if (currentQuestion < quizData[currentQuiz].length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        calculateScore();
        showResults();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function calculateScore() {
    score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === quizData[currentQuiz][index].correct) {
            score++;
        }
    });
}

function showResults() {
    document.getElementById('quiz-questions').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'block';
    
    const totalQuestions = quizData[currentQuiz].length;
    document.getElementById('final-score').textContent = score;
    document.getElementById('total-questions').textContent = totalQuestions;
    
    // Calcular porcentaje
    const percentage = (score / totalQuestions) * 100;
    document.getElementById('percentage-fill').style.width = percentage + '%';
    document.getElementById('percentage-text').textContent = `${percentage.toFixed(0)}% de respuestas correctas`;
    
    // Color según resultado
    const percentageFill = document.getElementById('percentage-fill');
    if (percentage >= 80) {
        percentageFill.style.background = 'linear-gradient(90deg, #4CAF50, #66BB6A)';
    } else if (percentage >= 60) {
        percentageFill.style.background = 'linear-gradient(90deg, #FF9800, #FFB74D)';
    } else {
        percentageFill.style.background = 'linear-gradient(90deg, #F44336, #E57373)';
    }
    
    // Mensaje según puntuación
    let message = '';
    if (percentage === 100) {
        message = '¡Excelente! Dominas perfectamente este objetivo 🎉';
    } else if (percentage >= 80) {
        message = '¡Muy bien! Tienes un buen conocimiento del tema 👍';
    } else if (percentage >= 60) {
        message = 'Bien, pero puedes mejorar. Repasa los conceptos 📚';
    } else {
        message = 'Necesitas estudiar más. Revisa el contenido nuevamente 📖';
    }
    document.getElementById('result-message').textContent = message;
    
    // Generar revisión
    generateReview();
}

function generateReview() {
    const reviewContainer = document.getElementById('review-container');
    const letters = ['A', 'B', 'C', 'D'];
    
    let reviewHTML = '';
    
    quizData[currentQuiz].forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correct;
        
        reviewHTML += `
            <div class="review-item">
                <div class="review-question">${index + 1}. ${question.question}</div>
                <div class="review-answer ${isCorrect ? 'correct' : 'incorrect'}">
                    Tu respuesta: ${userAnswer !== null ? letters[userAnswer] + '. ' + question.options[userAnswer] : 'Sin responder'}
                </div>
                ${!isCorrect ? `
                    <div class="review-answer correct">
                        Respuesta correcta: ${letters[question.correct]}. ${question.options[question.correct]}
                    </div>
                ` : ''}
            </div>
        `;
    });
    
    reviewContainer.innerHTML = reviewHTML;
}

function restartCurrentQuiz() {
    selectQuiz(currentQuiz);
}

function backToMenu() {
    document.getElementById('quiz-menu').style.display = 'grid';
    document.getElementById('quiz-questions').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'none';
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    updateScore();
}

function updateScore() {
    document.getElementById('score-display').textContent = `Puntos: ${score}`;
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Asegurar que la sección inicio esté activa
    showSection('inicio');
    
    // Animaciones adicionales
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos para animar
    document.querySelectorAll('.app-card, .case-card, .flashcard, .quiz-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Atajos de teclado para el quiz
document.addEventListener('keydown', (e) => {
    if (document.getElementById('quiz-questions').style.display === 'block') {
        if (e.key === 'ArrowRight') {
            nextQuestion();
        } else if (e.key === 'ArrowLeft') {
            previousQuestion();
        } else if (e.key >= '1' && e.key <= '4') {
            selectOption(parseInt(e.key) - 1);
        }
    }
});