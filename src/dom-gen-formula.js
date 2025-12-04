import { populateCard } from "./dom-gen-cards.js";
import { getFetchURL, fetchData } from "./data-utils.js";

async function getData(topic, subject, grade, chapter){
    const data = await fetchData(await getFetchURL(topic, subject, grade, chapter));
    console.log("Getting Data");
    console.log(data);
    return data;
}

function genFormulaCards(data){
    console.log("Generating Cards");
    console.log(typeof(data.formulas));
    for (const formula of data.formulas){
        document.querySelector(".formula").appendChild(populateCard(formula, "formula"));
        console.log("Card Generated");
    }
    MathJax.typesetPromise();;
}

export { getData, genFormulaCards }
