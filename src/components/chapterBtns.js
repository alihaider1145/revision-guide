import globalState from "../state";

function genChapterBtns(subj, grade){
    const num = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
    for(let i = 0; i < globalState.getState()[`${subj}Chapter`[grade]]; i++){
        const chapterBtn = document.createElement("button");
        chapterBtn.classList.add("chapter__btn", "btn");
        chapterBtn.textContent = `Chapter ${num[i]}`;
        document.querySelector(".chapter").appendChild(chapterBtn);
    }

    return document.querySelectorAll(".chapter__btn");
}

export { genChapterBtns };