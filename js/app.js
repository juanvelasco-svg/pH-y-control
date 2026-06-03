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
    
    // Si es la sección de quiz, reiniciar
    if (sectionId === 'quiz') {
        resetQuiz();
    }
}

// Flashcards
function flipCard(card) {
    card.classList.toggle('flipped');
}

// Datos del Quiz
const quizData = [
    {
        question: "¿Cuál es la fórmula para calcular el pH?",
        options: [
            "pH = log([H⁺])",
            "pH = -log([H⁺])",
            "pH = [H⁺] × 10",
            "pH = 14 - [OH⁻]"
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
        question: "¿Cuál de los siguientes es un ácido fuerte?",
        options: [
            "Ácido acético",
            "Ácido cítrico",
            "HCl (Ácido clorhídrico)",
            "Ácido ascórbico"
        ],
        correct: 2
    },
    {
        question: "¿Cuál es el pH óptimo para el suelo agrícola?",
        options: [
            "3.0 - 4.0",
            "6.0 - 7.0",
            "8.0 - 9.0",
            "10.0 - 11.0"
        ],
        correct: 1
    },
    {
        question: "¿Qué producto de la neutralización se forma además de la sal?",
        options: [
            "Oxígeno",
            "Hidrógeno",
            "Agua",
            "Dióxido de carbono"
        ],
        correct: 2
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
        question: "¿Qué pH debe tener máximo un encurtido para seguridad alimentaria?",
        options: [
            "3.0",
            "4.6",
            "6.0",
            "7.0"
        ],
        correct: 1
    },
    {
        question: "¿Cuántos gramos de NaOH se necesitan para neutralizar 73g de HCl?",
        options: [
            "40g",
            "60g",
            "80g",
            "100g"
        ],
        correct: 2
    },
    {
        question: "¿Qué indica un pH de 9.2 en el Lago Titicaca?",
        options: [
            "Está dentro del rango normal",
            "Está ligeramente ácido",
            "Está alcalino (fuera de norma)",
            "Es neutro"
        ],
        correct: 2
    }
];

// Variables del quiz
let currentQuestion = 0;
let score = 0;
let userAnswers = [];

function startQuiz() {
    document.getElementById('quiz-start').style.display = 'none';
    document.getElementById('quiz-questions').style.display = 'block';
    currentQuestion = 0;
    score = 0;
    userAnswers = new Array(quizData.length).fill(null);
    loadQuestion();
    updateScore();
}

function loadQuestion() {
    const questionData = quizData[currentQuestion];
    const container = document.getElementById('question-container');
    
    document.getElementById('question-counter').textContent = 
        `Pregunta ${currentQuestion + 1} de ${quizData.length}`;
    
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
        currentQuestion === quizData.length - 1 ? 'Finalizar' : 'Siguiente';
}

function selectOption(index) {
    userAnswers[currentQuestion] = index;
    loadQuestion();
}

function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
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
        if (answer === quizData[index].correct) {
            score++;
        }
    });
}

function showResults() {
    document.getElementById('quiz-questions').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'block';
    
    document.getElementById('final-score').textContent = score;
    
    // Mensaje según puntuación
    let message = '';
    if (score === 10) {
        message = '¡Excelente! Dominas perfectamente el tema 🎉';
    } else if (score >= 8) {
        message = '¡Muy bien! Tienes un buen conocimiento del tema 👍';
    } else if (score >= 6) {
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
    
    quizData.forEach((question, index) => {
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

function restartQuiz() {
    document.getElementById('quiz-results').style.display = 'none';
    document.getElementById('quiz-start').style.display = 'block';
    resetQuiz();
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
    document.querySelectorAll('.app-card, .case-card, .flashcard').forEach(el => {
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
