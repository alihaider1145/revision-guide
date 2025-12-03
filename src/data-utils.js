export default class dataUtils{
    async getFetchURL(topic, subject, grade, chapter){
        return  `/assets/${topic}/${subject}/${grade}/${chapter}.json`;
    }

    async fetchData(jsonFilePath) {
        const response = await fetch(jsonFilePath);
        const data = await response.json();
        return data;
    }
}