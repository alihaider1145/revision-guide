import { populateCard } from "./dom-gen-cards.js";


//generates card for one chapter
function genFormulaCards(data, number, grade){
    const chapterDiv = document.createElement('div');
    chapterDiv.classList.add(`formula__${grade}__chapter-${number}`, 'chapter', "hidden");
    document.querySelector(".formula").appendChild(chapterDiv);

    const chapterTitle = document.createElement('h2');
    chapterTitle.classList.add('formula__chapter-title', 'title');
    chapterTitle.textContent = `Chapter ${number}`;
    chapterDiv.appendChild(chapterTitle);

    for (const formula of data.formulas){
        chapterDiv.appendChild(populateCard(formula, "formula"));
    }
    MathJax.typesetPromise();
}

export {  genFormulaCards }
