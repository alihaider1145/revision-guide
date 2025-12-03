import "./index.css";
import generateFormulaCards from "./dom-gen-formula.js";

function generateDOM(){
    const num = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
    for(const number of num){
        generateFormulaCards('formula', 'physics', '1st-year', `chapter${number}`);
    }
}