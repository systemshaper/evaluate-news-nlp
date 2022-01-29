const checkIrony = async (text, apiKey) => {
    const formdata = new FormData();
    formdata.append("key", apiKey);
    formdata.append("txt", text);
    formdata.append("lang", "en");

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    }
    
    const isIronic = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
    .then(res => res.json())
    .then(function(res) {
        return res.irony
    })

    return isIronic
}

export { checkIrony }