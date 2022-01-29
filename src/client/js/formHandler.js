import { checkIrony } from "../index"
import { validateInput } from "../index"

const getKey = async () => {
    const fetchedKey = await fetch('http://localhost:8081/key')
    .then(res => res.json())
    return fetchedKey.yourKey
}

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let userInput = document.getElementById('name').value
    let results = document.getElementById('results')
    try {
        if (validateInput(userInput)) {
            getKey()
            .then(key => checkIrony(userInput, key))
            .then(res => results.innerHTML = res)
        }
    } catch (error) {
       console.log(error)
    }
}

export { handleSubmit, getKey }
