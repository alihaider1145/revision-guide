import { countFiles, getFetchURL } from "./data-utils.js";
import { chapterBtnFunc } from "./dom-buttons.js";

async function countTotalChapters(subject, grade, topic) {
    const jsonFilePath = await getFetchURL(subject, grade, topic, "index");
    const totalChapters = await countFiles(jsonFilePath);
    return totalChapters;
}

async function genChapterBtns(totalChapters){
    let num = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
    for (let i = 0; i < (await totalChapters); i++) {
        const chapterBtn = document.createElement("button");
        chapterBtn.classList.add("chapter__btn", "btn");
        chapterBtn.textContent = `Chapter ${num[i]}`;
        document.querySelector(".chapter").appendChild(chapterBtn);

        chapterBtn.addEventListener("click", chapterBtnFunc)
    }
}

export { genChapterBtns, countTotalChapters }