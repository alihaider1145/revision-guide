import { createEle } from "../dom-utils.js";

function createCards(topicList){

    const card = createEle('div', null, null); //add parent here
    card.classList.add("card");

    const cardTitle = createEle("div", topicList["card_title"], "card");
    cardTitle.classList.add('card__title');

    for(const math of subj[mathMap[topic]]){
        const cardMath = createEle("div", null, "card");
        cardMath.classList.add('card__math');
        cardMath.innerHTML = `${topicList["card_math"]}`;
    }

    const cardOther = createEle("div", null, "card");
    cardOther.classList.add('card__other');
    cardOther.innerHTML = `${topicList["card_other"]}`;

    return card;
}

function genCards(data, topic, chapter){
    const contentCards = createEle('div', null, document.querySelector(".content"));
    contentCards.classList.add("content__cards");

    const contentTitle = createEle('h2', `Chapter ${chapter}`, contentCards);
    contentTitle.classList.add('title');

    for(const topicName in data[topic]){
        contentCards.appendChild(createCards(data[topic]));
    }

    MathJax.typesetPromise();
}

export { genCards };