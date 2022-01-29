const validateInput = (input) => {
    if (input.length > 0) {
        return true
    } else {
        window.alert("please enter some text")
        return false
    }
}

export { validateInput }