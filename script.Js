let playerHealth = 4000;
let enemyHealth = 4000;
let playerHand = [];
const deck = [
    { name: "Dragão Negro de Olhos Vermelhos", attack: 2400, defense: 2000, img: "https://static.wikia.nocookie.net/yugioh/images/1/16/Red-Eyes_Dragoon_Anime.png/revision/latest?cb=20190214033711" },
    { name: "Mago do Caos", attack: 2800, defense: 2600, img: "https://static.wikia.nocookie.net/yugioh/images/e/e2/Chaos_Mage_Anime.png/revision/latest?cb=20170516020539" },
    { name: "Cavaleiro do Sombrio", attack: 2200, defense: 1900, img: "https://static.wikia.nocookie.net/yugioh/images/7/77/Dark_Knight_Anime.png/revision/latest?cb=20170516021715" },
    { name: "Fada Branca", attack: 1900, defense: 1500, img: "https://static.wikia.nocookie.net/yugioh/images/d/d5/White_Fairy_Anime.png/revision/latest?cb=20170516021818" },
    { name: "Dragão de Fogo", attack: 1500, defense: 1200, img: "https://static.wikia.nocookie.net/yugioh/images/d/de/Fire_Dragon_Anime.png/revision/latest?cb=20170516022245" },
    { name: "Mago do Tempo", attack: 1500, defense: 1600, img: "https://static.wikia.nocookie.net/yugioh/images/2/20/Time_Mage_Anime.png/revision/latest?cb=20170516022113" },
    { name: "Cavaleiro da Luz", attack: 2000, defense: 1500, img: "https://static.wikia.nocookie.net/yugioh/images/0/0b/Light_Knight_Anime.png/revision/latest?cb=20170516021632" },
    { name: "Guerreiro de Fogo", attack: 1800, defense: 1200, img: "https://static.wikia.nocookie.net/yugioh/images/6/63/Fire_Warrior_Anime.png/revision/latest?cb=20170516022230" },
    { name: "Fada da Luz", attack: 1200, defense: 1300, img: "https://static.wikia.nocookie.net/yugioh/images/e/e5/Light_Fairy_Anime.png/revision/latest?cb=20170516021807" },
    { name: "Dragão de Gelo", attack: 2100, defense: 1800, img: "https://static.wikia.nocookie.net/yugioh/images/e/e0/Ice_Dragon_Anime.png/revision/latest?cb=20170516022145" },
];

function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function drawCard() {
    if (deck.length === 0) return null;
    return deck.pop();
}

function initGame() {
    shuffleDeck();
    for (let i = 0; i < 5; i++) {
        const card = drawCard();
        if (card) {
            playerHand.push(card);
            displayCard(card);
        }
    }
    updateStatus();
}

function displayCard(card) {
    const cardElement = document.createElement('div');
    cardElement.className = 'monster-card';
    cardElement.innerHTML = `<img src="${card.img}" alt="${card.name}" width="90"><br>${card.name} (ATK: ${card.attack}, DEF: ${card.defense})`;
    cardElement.onclick = () => playCard(card);
    document.getElementById('playerHand').appendChild(cardElement);
}

function playCard(card) {
    const monsterZone = document.getElementById('playerMonsterZone');
    const monsterElement = document.createElement('div');
    monsterElement.className = 'monster-card';
    monsterElement.innerHTML = `<img src="${card.img}" alt="${card.name}" width="90"><br>${card.name} (ATK: ${card.attack}, DEF: ${card.defense})`;
    monsterZone.appendChild(monsterElement);
    playerHand = playerHand.filter(c => c !== card);
    document.getElementById('playerHand').innerHTML = '';
    playerHand.forEach(displayCard);
}

function updateStatus() {
    document.getElementById('playerHealthBar').style.width = `${playerHealth / 40}%`;
    document.getElementById('enemyHealthBar').style.width = `${enemyHealth / 40}%`;
    document.getElementById('playerStatus').innerText = `Vida do Jogador: ${playerHealth}`;
    document.getElementById('enemyStatus').innerText = `Vida do Inimigo: ${enemyHealth}`;
}

document.getElementById('attackBtn').addEventListener('click', () => {
    // Implementar lógica de ataque
    alert("Ataque!");
});

document.getElementById('directAttackBtn').addEventListener('click', () => {
    // Implementar lógica de ataque direto
    alert("Ataque Direto!");
});

document.getElementById('endTurnBtn').addEventListener('click', () => {
    alert("Turno terminado.");
    const card = drawCard();
    if (card) {
        playerHand.push(card);
        displayCard(card);
    }
});

initGame();
