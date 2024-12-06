let coinCount = 0;


let balance = localStorage.getItem("balance") || 0;
let readArticles = JSON.parse(localStorage.getItem("readArticles")) || [];

const balanceElement = document.getElementById("balance");
const articlesContainer = document.getElementById("articles");
const chest = document.getElementById("chest");



const articles = [
    { 
        id: 1, 
        title: "Как заработать первые монетки", 
        image: "https://github.com/Mishanana20/Mishanana20.github.io/blob/main/coinimagetest.png?raw=true", 
        content: "В этой статье вы узнаете, как начать зарабатывать монетки...",
        reward: 5 
    },
    { 
        id: 2, 
        title: "Лучшие стратегии для клика", 
        image: "https://github.com/Mishanana20/Mishanana20.github.io/blob/main/ithinkimage.jpg?raw=true", 
        content: "В статье описаны стратегии для увеличения дохода...",
        reward: 10 
    },
    { 
        id: 3, 
        title: "Секреты сундуков", 
        image: "https://example.com/article3.png", 
        content: "Хотите узнать, что скрывают сундуки? Читайте здесь...",
        reward: 8 
    },
];


function addCoin() {
    coinCount++;
    document.getElementById("coin-count").textContent = coinCount;
    if (window.Telegram && Telegram.WebApp) {
        Telegram.WebApp.sendData("add_coin");
    }
}


articles.forEach(article => {
    const articleElement = document.createElement("div");
    articleElement.classList.add("article");
    articleElement.innerHTML = `
        <img src="${article.image}" alt="${article.title}">
        <h2>${article.title}</h2>
        <a href="article.html?id=${article.id}" class="read-link">Читать статью</a>
        <button onclick="readArticle(1)">Прочитать</button>
    `;
    articlesContainer.appendChild(articleElement);
});

function readArticle(articleId) {
    alert(`Статья ${articleId} прочитана!`);
    addCoin();
}

function openChest() {
    if (coinCount < 10) {
        alert("Недостаточно монет для открытия сундука!");
        return;
    }
    coinCount -= 10;
    document.getElementById("coin-count").textContent = coinCount;
    const rewards = ["🎁 Картинка 1", "🎁 Картинка 2", "🎁 Картинка 3"];
    const reward = rewards[Math.floor(Math.random() * rewards.length)];
    document.getElementById("chest-result").textContent = `Вы получили: ${reward}`;
}
