export async function getFetchURL(topic, subject, grade, chapter){
    return  `/assets/${topic}/${subject}/${grade}/${chapter}.json`;
}

export async function fetchData(jsonFilePath) {
    const response = await fetch(jsonFilePath);
    const data = await response.json();
    return data;
}