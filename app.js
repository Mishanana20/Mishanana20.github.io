const articles = [
    { 
        id: 1, 
        title: "Как заработать первые монетки", 
        image: "https://example.com/article1.png", 
        content: "В этой статье вы узнаете, как начать зарабатывать монетки...",
        reward: 5 
    },
    { 
        id: 2, 
        title: "Лучшие стратегии для клика", 
        image: "https://example.com/article2.png", 
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

let balance = localStorage.getItem("balance") || 0;
let readArticles = JSON.parse(localStorage.getItem("readArticles")) || [];

const balanceElement = document.getElementById("balance");
const articlesContainer = document.getElementById("articles");
const chest = document.getElementById("chest");

balanceElement.textContent = balance;

// Отобразить список статей
articles.forEach(article => {
    const articleElement = document.createElement("div");
    articleElement.classList.add("article");
    articleElement.innerHTML = `
        <img src="${article.image}" alt="${article.title}">
        <h2>${article.title}</h2>
        <a href="article.html?id=${article.id}" class="read-link">Читать статью</a>
    `;
    articlesContainer.appendChild(articleElement);
});

// Обработчик для сундука
chest.addEventListener("click", () => {
    if (balance >= 10) {
        balance -= 10;
        balanceElement.textContent = balance;
        localStorage.setItem("balance", balance);

        // Случайное изображение из сундука
        const rewards = [
            "https://example.com/reward1.png",
            "https://example.com/reward2.png",
            "https://example.com/reward3.png"
        ];
        const randomReward = rewards[Math.floor(Math.random() * rewards.length)];

        alert("Вы открыли сундук!");
        const rewardWindow = window.open("", "_blank", "width=400,height=400");
        rewardWindow.document.write(`<img src="${randomReward}" alt="Приз" style="width:100%;">`);
    } else {
        alert("У вас недостаточно монет для открытия сундука!");
    }
});
