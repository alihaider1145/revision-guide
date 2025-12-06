import { countTotalChapters, genChapterBtns } from "./dom-gen-chapter-btns.js";

const subjPhysicsBtn = document.querySelector(".subject__physics-btn");
const subjMathsBtn = document.querySelector(".subject__maths-btn");
const grade1stYrBtn = document.querySelector(".grade__1styr-btn");
const grade2ndYrBtn = document.querySelector(".grade__2ndyr-btn");
const topicFormulasBtn = document.querySelector(".topic__formulas-btn");
const topicConstantsBtn = document.querySelector(".topic__constants-btn");
const topicUnitsBtn = document.querySelector(".topic__units-btn");
const chapterBtns = document.querySelectorAll(".chapter__btn");
const chapterWrapper = document.querySelector(".chapter-wrapper");
const formulaWrapper = document.querySelector(".formula-wrapper");
const constantWrapper = document.querySelector(".constant-wrapper");
const unitWrapper = document.querySelector(".unit-wrapper");
let subject = "";
let grade = "";
let topic = "";
let chapter = "";

//btn transitions
function transitionSubject(action){
    if(action === "hide"){
        subjPhysicsBtn.parentElement.parentElement.classList.add("hidden");
    }
    else if(action === 'show'){
        subjPhysicsBtn.parentElement.parentElement.classList.remove("hidden");
    }
}

function transitionGrade(action){
    if(action === "hide"){
        grade1stYrBtn.parentElement.parentElement.classList.add("hidden");
    }
    else if(action === 'show'){
        grade1stYrBtn.parentElement.parentElement.classList.remove("hidden");
    }
}

function transitionTopic(action){
    if(action === "hide"){
        topicFormulasBtn.parentElement.parentElement.classList.add("hidden");
    }
    else if(action === 'show'){
        topicFormulasBtn.parentElement.parentElement.classList.remove("hidden");
    }
}

function transitionChapter(action){
    if(action === "hide"){
        chapterBtns.parentElement.classList.add("hidden");
    }
    else if(action === 'show'){
        chapterBtns.parentElement.classList.remove("hidden");
    }
}

//wrapper transitions

document.addEventListener("DOMContentLoaded", () => {
    subjPhysicsBtn.addEventListener("click", () => {
        subject = "physics";
        transitionSubject("hide");
        transitionGrade("show");
    })
    subjMathsBtn.addEventListener("click", () => {
        subject = "maths";
        transitionSubject("hide");
        transitionGrade("show");
    })
    grade1stYrBtn.addEventListener("click", () => {
        grade = "1st-year";
        transitionTopic("show");
        transitionGrade("hide");
    })
    grade2ndYrBtn.addEventListener("click", () => {
        grade = "2nd-year";
        transitionTopic("show");
        transitionGrade("hide");
    })
    topicConstantsBtn.addEventListener("click", () => {
        topic = "constants";
        transitionTopic("hide");
        genChapterBtns(countTotalChapters(subject, grade, topic));
    })
    topicFormulasBtn.addEventListener("click", () => {
        topic = "formula";
        transitionTopic("hide");
        genChapterBtns(countTotalChapters(subject, grade, topic));
    })
    topicUnitsBtn.addEventListener("click", () => {
        topic = "units";
        transitionTopic("hide");
        genChapterBtns(countTotalChapters(subject, grade, topic));
    })
    chapterBtns.forEach(button => {
        button.addEventListener("click", () => {
            chapter = button.textContent.split(" ").join("-");
            transitionChapter("hide");
        })
    })
})

