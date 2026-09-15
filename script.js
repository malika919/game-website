//камень, ножницы, бумага
const choiseArr = ["камень", "ножницы", "бумага"];

function gameOfChoice() {
    let choicePrompt = (choiseArr[0] + "\n" + choiseArr[1] + "\n" + choiseArr[2])
    let generationComputerChoice = Math.floor(Math.random() * choiseArr.length)
    let userChoice = prompt(`${choicePrompt} 
        Введите ответ: `)

    if (userChoice === null) {
        return;
    }

    userChoice.toLowerCase() === choiseArr[generationComputerChoice].toLowerCase() ? alert('Ничья') :
        choiseArr[generationComputerChoice].toLowerCase() === 'камень' && userChoice.toLowerCase() === choiseArr[1] ? alert('Вы прогирали') :
            userChoice === choiseArr[0].toLowerCase() && choiseArr[generationComputerChoice].toLowerCase() === 'ножницы' ? alert('Вы победили') :
                choiseArr[generationComputerChoice].toLowerCase() === 'ножницы' && userChoice.toLowerCase() === choiseArr[2] ? alert('Вы проиграли') :
                    userChoice === choiseArr[1].toLowerCase() && choiseArr[generationComputerChoice].toLowerCase() === 'бумага' ? alert('Вы победили') :
                        choiseArr[generationComputerChoice].toLowerCase() === 'бумага' && userChoice.toLowerCase() === choiseArr[0] ? alert('Вы проиграли') :
                            userChoice === choiseArr[2].toLowerCase() && choiseArr[generationComputerChoice].toLowerCase() === 'камень' ? alert('Вы победили') :
                                alert('Вы ввели некорректное значение')
}

//угадай число
let generationNumber = Math.floor(Math.random() * 101)

const guessWordFunction = () => {
    for (let i = 0; i < 100; i++) {
        let getUserResponse = prompt('Введите число');

        if (getUserResponse === null) {
            return;
        }

        let numberGetUserResponse = Number(getUserResponse)

        numberGetUserResponse > generationNumber ? alert('Число должно быть меньше') :
            numberGetUserResponse < generationNumber ? alert('Число должо быть больше') :
                numberGetUserResponse === generationNumber ? alert('Вы угадали число') : alert('Вы не угадали число, попробуйте еще раз')

        if (numberGetUserResponse === generationNumber) {
            return;
        }
    }
}

//простая арифметика
let operator = ['+', '-', '*', '/']

const simpleArithmeticFunction = () => {
    for (let i = 0; i < 11; i++) {
        let randomOperator = Math.floor(Math.random() * operator.length)
        let num1 = Math.floor(Math.random() * 11)
        let num2 = Math.floor(Math.random() * 11)

        let randomNumberTask = `${num1} ${operator[randomOperator]} ${num2}`
        let userNumberAnswer = prompt(`${randomNumberTask} 
            Введите свой ответ`)
        if (userNumberAnswer === null) {
            return;
        }

        let userNumberAnswerDigit = Number(userNumberAnswer)
        if (userNumberAnswerDigit === num1 + num2 || userNumberAnswerDigit === num1 - num2 ||
            userNumberAnswerDigit === num1 * num2 || userNumberAnswerDigit === num1 / num2) {
            alert('Все верно)')
        } else {
            alert('Неверно(, попробуй еще раз')
        }

        operator[randomOperator] === '+' ? alert(`Правильный ответ: ${num1 + num2}`) :
            operator[randomOperator] === '-' ? alert(`Правильный ответ: ${num1 - num2}`) :
                operator[randomOperator] === '*' ? alert(`Правильный ответ: ${num1 * num2}`) :
                    operator[randomOperator] === '/' ? alert(`Правильный ответ: ${num1 / num2}`) :
                        false
    }
}

//переверни текст
function flipTextFunction() {
    let userEnterText = prompt('Введите слово: ')
    alert(`Перевернутый текст: ${userEnterText.split("").reverse().join("")}`);

    if (userEnterText === null) {
        return;
    }

}

//простая викторина
const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2 // номер правильного ответа
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

let correctCount = 0;

function quizGame() {

    for (let i = 0; i < quiz.length; i++) {
        let promptQuestion = (quiz[i].question + "\n" + quiz[i].options[0] + "\n"
            + quiz[i].options[1] + "\n" + quiz[i].options[2]
        )
        let userAnswer = prompt(`${promptQuestion}
            Введите ваш ответ: `)

        if (userAnswer === null) {
            return;
        }

        let changeUserAnswer = Number(userAnswer)

        if (changeUserAnswer === quiz[i].correctAnswer) {
            correctCount++
        }
    }
    alert(`Количество правильных ответов равно: ${correctCount}`)
}

//генератор случайных цветов 
const btnRandomGame = document.querySelectorAll("#game__btn, #game__btn_mobile");
const fonColorsArr = ['rgba(32, 32, 39, 1)', '#e27fe2', '#86ccd7', '#70bc70', '#e5bc70', 'rgb(243 229 105)'];

btnRandomGame.forEach(element => {
    element.addEventListener('click', () => {
        let randomColorFromTheArr = Math.floor(Math.random() * fonColorsArr.length)
        document.querySelector('.about').style.backgroundColor = fonColorsArr[randomColorFromTheArr];
        document.querySelector('.games-list').style.backgroundColor = fonColorsArr[randomColorFromTheArr];

    })
});