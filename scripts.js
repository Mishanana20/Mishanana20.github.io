let coinCount = 0;

function addCoin() {
    coinCount++;
    document.getElementById("coin-count").textContent = coinCount;
    if (window.Telegram && Telegram.WebApp) {
        Telegram.WebApp.sendData("add_coin");
    }
}

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
