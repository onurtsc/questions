const modifyText = (text) => {
    let newText = text
    newText = newText.replace(/&#039;/g, "'")
    newText = newText.replace(/&quot;/g, '"')
    newText = newText.replace(/&lsquo;/g, "'")
    newText = newText.replace(/&rsquo;/g, "'")

    return newText
}

export default modifyText