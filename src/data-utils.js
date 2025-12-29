const dataCache = new Map();

//TODO-done: refactor URL for units/constants (no chapters)
const getFetchURL = (subject, grade, topic, chapter) => {
    const owner = "alihaider1145";
    const repo = "formula-guide";
    let directoryPath;
    if(chapter){
        directoryPath = `dist/assets/${subject}/${grade}/${topic}/${chapter}.json`;
    }
    else{
        directoryPath = `dist/assets/${subject}/${grade}/${topic}/${topic}.json`;
    }
    
    return `https://raw.githubusercontent.com/${owner}/${repo}/main/${directoryPath}`;
}

const getCacheKey = (subject, grade, topic, chapter) => {
    return `${subject}-${grade}-${topic}-${chapter}`;
}

const fetchData = async (subject, grade, topic, chapter) => {
    
    const cacheKey = getCacheKey(subject, grade, topic, chapter);
    
    if (dataCache.has(cacheKey)) {
        console.log(`📦 Loading from cache: ${cacheKey}`);
        return dataCache.get(cacheKey);
    }
    
    if(!chapter){
        console.log(`🌐 Fetching from network: ${cacheKey}`);
        const url = getFetchURL(subject, grade, topic);
    }

    console.log(`🌐 Fetching from network: ${cacheKey}`);
    const url = getFetchURL(subject, grade, topic, chapter);
    
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

const countFiles = (subject, grade) => {
    const chapterCount = {
        physics: {
            "1st-year": 10,
            "2nd-year": 10
        },
        maths: {
            "1st-year": 9,
            "2nd-year": 10
        }
    };
    return chapterCount[subject][grade];
}

export { getFetchURL, fetchData, countFiles, getCacheKey };