<script src="https://telegram.org/js/telegram-web-app.js"></script> 

let balance = parseInt(localStorage.getItem("balance")) || 0;

function updateBalance(amount) {
    balance += amount;
    balance = Math.max(0, balance); // Не позволяем уйти в минус
    localStorage.setItem("balance", balance);
    balanceElement.textContent = balance;
}
const readArticles = JSON.parse(localStorage.getItem("readArticles")) || [];

articles.forEach(article => {
    const articleElement = document.createElement("div");
    articleElement.classList.add("article");
    articleElement.innerHTML = `
        <img src="${article.image}" alt="${article.title}">
        <h2>${article.title}</h2>
        <a href="#" class="read-link" data-id="${article.id}">Читать статью</a>
    `;
    articlesContainer.appendChild(articleElement);
});

articlesContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("read-link")) {
        e.preventDefault();
        const articleId = parseInt(e.target.dataset.id);
        if (!readArticles.includes(articleId)) {
            readArticles.push(articleId);
            localStorage.setItem("readArticles", JSON.stringify(readArticles));
            const reward = articles.find(article => article.id === articleId).reward;
            updateBalance(reward);
            alert(`Вы получили ${reward} монет за прочтение статьи!`);
        } else {
            alert("Вы уже получили монеты за эту статью.");
        }
    }
});
chest.addEventListener("click", () => {
    if (balance >= 10) {
        updateBalance(-10);

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
