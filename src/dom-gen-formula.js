import { populateCard } from "./dom-gen-cards.js";


//generates card for one chapter
function genFormulaCards(data, number){
    const chapterDiv = document.createElement('div');
    chapterDiv.classList.add(`formula__chapter-${number}`, 'chapter');
    document.querySelector(".formula").appendChild(chapterDiv);
    for (const formula of data.formulas){
        chapterDiv.appendChild(populateCard(formula, "formula"));
    }
    MathJax.typesetPromise();
}

export {  genFormulaCards }
