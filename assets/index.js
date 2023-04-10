const userNameElement = document.getElementById("username");
const userLinkElement = document.getElementById("link");
const userCommentElement = document.getElementById("comment");
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
});