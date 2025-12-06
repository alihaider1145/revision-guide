import "./index.css";
import "./dom-buttons.js"
import { genFormulaCards } from "./dom-gen-formula.js";
import { fetchData, getFetchURL } from "./data-utils.js";

(async function generateDOM(){
    const num = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    for(const number of num){
        const chapterTitle = document.createElement('h2');
        chapterTitle.classList.add('formula__chapter-title', 'title');
        chapterTitle.textContent = `Chapter ${number}`;
        document.querySelector(".formula").appendChild(chapterTitle);

        let data = await fetchData(await getFetchURL("physics", "1st-year", "formula", `chapter-${number}`));
        genFormulaCards(data, number);
    }
})();
