import "./index.css";
import { genFormulaCards, getData } from "./dom-gen-formula.js";

(async function generateDOM(){
    const num = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
    console.log("generating DOM");
    for(const number of num){
        let data = await getData("formula", "physics", "1st-year", `chapter${number}`);
        genFormulaCards(data);
    }
    console.log("DOM Generated");
})();
