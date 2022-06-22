const { document } = require("./jsdom-setup.js");

const { Game } = require("../src/memory-game.js");
const testGame = new Game();

describe("The imageData of the Game class", () => {
  it("should contain a list of 16 objects", () => {
    expect(testGame.imageData()).toHaveSize(16);
  });
});

describe("The cards in the CSS grid", () => {
  it("should have 8 pairs of elements that share a name and have the same images on the front", () => {
    const cards = document.getElementsByClassName("cards");
    expect(cards.length).toBe(16);
  });
});

describe("The cards in the grid", () => {
  it("should have HTML classes 'toggleCard' and 'flipped' added when clicked on", () => {
    const card = document.getElementsByClassName("cards")[0];
    expect(card.classList[1]).toBe(undefined);
    card.click();
    expect(card.classList[1]).toBe("toggleCard");
    expect(card.classList[2]).toBe("flipped");
  });
});

describe("The player lives number on the frontend", () => {
  it("should decrease if unmatching cards are clicked", () => {
    const card1 = document.getElementsByClassName("cards")[0];
    const card2 = document.getElementsByClassName("cards")[1];

    card1.setAttribute("name", "baby");
    card2.setAttribute("name", "dog");

    const lifeCountBefore = Number(document.querySelector("span").textContent);

    card1.click();
    card2.click();

    const lifeCountAfter = Number(document.querySelector("span").textContent);

    expect(lifeCountBefore - 1).toEqual(lifeCountAfter);
  });
});
