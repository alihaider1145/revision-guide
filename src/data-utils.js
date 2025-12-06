const getFetchURL = async (subject, grade, topic, chapter) => {
    return  `/assets/${subject}/${grade}/${topic}/${chapter}.json`;
}

const  fetchData = async (jsonFilePath) => {
    const response = await fetch(jsonFilePath);
    const data = await response.json();
    return data;
}

export { getFetchURL, fetchData };