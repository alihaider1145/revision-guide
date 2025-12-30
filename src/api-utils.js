const dataCache = new Map();

const getCacheKey = (subject, grade, topic, chapter) => {
    return `${subject}-${grade}-${topic}-${chapter}`;
}

function fetchURL(subject, grade, topic, chapter) {
    const owner = "alihaider1145";
    const repo = "revision-guide";
    let directoryPath;
    if(chapter){
        directoryPath = `dist/assets/${subject}/${grade}/${topic}/${chapter}.json`;
    }
    else{
        directoryPath = `dist/assets/${subject}/${grade}/${topic}/${topic}.json`;
    }
    
    return `https://raw.githubusercontent.com/${owner}/${repo}/main/${directoryPath}`;
}

async function fetchData(subject, grade, topic, chapter) {
    const cacheKey = getCacheKey(subject, grade, topic, chapter);
    
    if (dataCache.has(cacheKey)) {
        return dataCache.get(cacheKey);
    }

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        dataCache.set(cacheKey, data);
        
        return data;
    } catch (error) {
        console.error(`❌ Failed to load: ${cacheKey}`, error);
        return null; 
    }
}

export { fetchData, fetchURL };