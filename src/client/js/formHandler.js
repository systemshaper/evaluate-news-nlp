

const getKey = async () => {
    const fetchedKey = await fetch('http://localhost:8081/key')
    .then(res => res.json())
    console.log(fetchedKey)
    return fetchedKey.yourKey
}

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

const validateInput = (input) => {
    if (input.length > 0) {
        return true
    } else {
        window.alert("please enter some text")
        return false
    }
}

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let userInput = document.getElementById('name').value
    if (validateInput(userInput)) {
        getKey().then(key => checkIrony(userInput, key))
    }
}

export { handleSubmit }
