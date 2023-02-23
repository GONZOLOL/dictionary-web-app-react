export const dictionary = (word) => {
    
    const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    const requestUrl = `${apiUrl}${word}`;
  
    const handleResponse = (response) => {
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }   return response;
    }

    const handledFetch = () => {
      return fetch(requestUrl)
        .then(handleResponse)
        .then(data => data.json())
    }
  
    return handledFetch();
  };