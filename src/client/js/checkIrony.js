const checkIrony = async (text, apiKey) => {
    const formdata = new FormData();
    formdata.append("key", apiKey);
    formdata.append("txt", text);
    formdata.append("lang", "en");
    console.log(apiKey);

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    }
    
    fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
    .then(res => res.json())
    .then(function(res) {
        console.log(res)
        document.getElementById('results').innerHTML = res.irony
    })
}

export { checkIrony }