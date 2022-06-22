class Game {
  constructor() {
    this.section = document.querySelector("section");
    this.playerLivesNum = document.querySelector("span");
    this.playerLives = 6;
    this;
  }

  imageData() {
    const images = [
      { imgSrc: "./src/images/baby.jpg", name: "baby" },
      { imgSrc: "./src/images/cat.jpg", name: "cat" },
      { imgSrc: "./src/images/cow.jpg", name: "cow" },
      { imgSrc: "./src/images/dab.jpg", name: "dab" },
      { imgSrc: "./src/images/dog.jpg", name: "dog" },
      { imgSrc: "./src/images/koala.jpg", name: "koala" },
      { imgSrc: "./src/images/elephant.jpg", name: "elephant" },
      { imgSrc: "./src/images/watermelon.jpg", name: "watermelon" },
      { imgSrc: "./src/images/baby.jpg", name: "baby" },
      { imgSrc: "./src/images/cat.jpg", name: "cat" },
      { imgSrc: "./src/images/cow.jpg", name: "cow" },
      { imgSrc: "./src/images/dab.jpg", name: "dab" },
      { imgSrc: "./src/images/dog.jpg", name: "dog" },
      { imgSrc: "./src/images/koala.jpg", name: "koala" },
      { imgSrc: "./src/images/elephant.jpg", name: "elephant" },
      { imgSrc: "./src/images/watermelon.jpg", name: "watermelon" },
    ];
    return images;
  }

  randomiseCards() {
    const cardData = this.imageData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
  }

  cardGenerator() {
    const cardData = this.randomiseCards();

    cardData.forEach((item) => {
      const card = document.createElement("div");
      const face = document.createElement("img");
      const back = document.createElement("div");

      card.classList = "cards";
      face.classList = "face";
      back.classList = "back";

      face.src = item.imgSrc;

      card.setAttribute("name", item.name);
      this.section.appendChild(card);
      card.appendChild(face);
      card.appendChild(back);

      card.addEventListener("click", (event) => {
        card.classList.toggle("toggleCard");
        this.checkCards(event);
      });
    });
  }

  checkCards(event) {
    const clickedCard = event.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");
    const toggleCard = document.querySelectorAll(".toggleCard");

    if (flippedCards.length === 2) {
      if (
        flippedCards[0].getAttribute("name") ===
        flippedCards[1].getAttribute("name")
      ) {
        flippedCards.forEach((card) => {
          card.classList.remove("flipped");
          card.style.pointerEvents = "none";
        });
      } else {
        flippedCards.forEach((card) => {
          card.classList.remove("flipped");
          setTimeout(() => card.classList.remove("toggleCard"), 1000);
        });
        game.playerLives--;
        game.playerLivesNum.textContent = game.playerLives;
        if (game.playerLives === 0) {
          this.restartGame("Oops! Try again.");
        }
      }
    }

    if (toggleCard.length === 16) {
      this.restartGame("Congratulations! You won.");
    }
  }

  restartGame(text) {
    let cardData = this.randomiseCards();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".cards");
    game.section.style.pointerEvents = "none";

    cardData.forEach((item, index) => {
      setTimeout(() => cards[index].classList.remove("toggleCard"), 500);

      setTimeout(() => {
        cards[index].style.pointerEvents = "all";
        faces[index].src = item.imgSrc;
        cards[index].setAttribute("name", item.name);
        game.section.style.pointerEvents = "all";
      }, 1000);
    });

    game.playerLives = 6;
    game.playerLivesNum.textContent = game.playerLives;
    setTimeout(() => window.alert(text), 1000);
  }
}

const game = new Game();
game.playerLivesNum.textContent = game.playerLives;
game.cardGenerator();

module.exports = {
  Game,
};
