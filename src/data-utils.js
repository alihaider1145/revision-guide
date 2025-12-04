const getFetchURL = async (topic, subject, grade, chapter) => {
    return  `/assets/${topic}/${subject}/${grade}/${chapter}.json`;
}

const  fetchData = async (jsonFilePath) => {
    const response = await fetch(jsonFilePath);
    const data = await response.json();
    return data;
}

export { getFetchURL, fetchData };