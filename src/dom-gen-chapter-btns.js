async function countTotalChapters(subject, grade, topic){
    const owener = "alihaider1145";
    const repo = "formula-guide";
    const directoryPath = `src/assets/${topic}/${subject}/${grade}/`;

    const apiUrl = `api.github.com{owner}/${repo}/contents/${directoryPath}`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.statusText}`);
        }

        const contents = await response.json();

        const jsonFiles = contents.filter(item => {
            return item.type === 'file' && item.name.toLowerCase().endsWith('.json');
        });

        const count = jsonFiles.length;
        return count;

    } catch (error) {
        console.error("Could not fetch repository contents:", error);
        alert(error.message);
    }
}

function genChapterBtns(totalChapters){
    let num = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
    for (let i = 1; i <= totalChapters; i++) {
        const chapterBtn = document.createElement("button");
        chapterBtn.classList.add("chapter__btn");
        chapterBtn.textContent = `Chapter ${num[i-1]}`;
        document.querySelector(".chapter").appendChild(chapterBtn);
    }
}

export { genChapterBtns, countTotalChapters }