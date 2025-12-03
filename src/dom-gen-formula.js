import populateCards from "./dom-gen-cards.js";
import dataUtils from "./data-utils.js";

export default async function generateFormulaCards(topic, subject, grade, chapter){
    const data = await dataUtils.fetchData(await dataUtils.getFetchURL(topic, subject, grade, chapter));
    populateCards(data);
}