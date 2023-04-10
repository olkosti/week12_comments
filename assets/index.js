// Получаю элементы полей ФИО, ссылка и ккоментарий
const userNameElement = document.getElementById("username"); 
const userLinkElement = document.getElementById("link"); 
const userCommentElement = document.getElementById("comment"); 

// Получаю элемент кнопки и чата, куда будет попадать комментарий
const button = document.querySelector(".form__button"); 
const chatInfo = document.querySelector(".chat__info"); 
const chatComment = document.querySelector(".chat__comment"); 


//Добавление комментария в чат при клике на кнопку
button.addEventListener ('click', () => {
    const userName = userNameElement.value; //извлекаю значение поля ФИО
    const userLink = userLinkElement.value; //извлекаю значение поля "Ссылка на аватар"
    const userComment = userCommentElement.value; //извлекаю значение поля "Комментарий"
    const censorUserComment = userComment.replace(/виагра/gi, "***").replace(/viagra/gi, "***").replace(/xxx/gi, "***").replace(/ххх/gi, "***"); // добавлена цензура в комментариях
    chatInfo.innerHTML = `<img class="chat__image" src="${userLink}" alt="">
    <div class="chat__username">${userName}</div>`; //добавила разметку для добавления аватара и ФИО пользователя
    chatComment.innerHTML = `<p>${censorUserComment}</p>`; //добавила разметку для добавления комментария пользователя
    document.getElementById("form").reset(); //очистка полей формы после отправки
});


//Функция работы с регистром. Сначала пыталась хотябы первую букву сделать заглавной. 
//Не получилось. Не gонимаю, как toUpperCase работает с value

function capFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

// вот на этом этапе происходит ошибка:

// const userName = userNameElement.value;
// let correctName = capFirst(userName);



//Функция работы с регистром полная, но не уверена, что правильная. 

function normalizeName(name) {
    // Удаляем лишние пробелы в начале и конце имени
    name = name.trim();
    
    // Преобразуем первую букву имени в верхний регистр
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    
    // Разделяем имя на части по пробелам, чтобы преобразовать каждое слово отдельно
    let parts = name.split(" ");
    for (let i = 0; i < parts.length; i++) {
      // Если слово состоит только из одной буквы, преобразуем ее в верхний регистр
    if (parts[i].length == 1) {
        parts[i] = parts[i].toUpperCase();
    }
    }
// Объединяем части имени снова в одну строку
    return parts.join(" ");
}
