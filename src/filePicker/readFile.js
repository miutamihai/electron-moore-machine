export const readFile = file => {
    const reader = new FileReader()

    return new Promise((resolve, reject) => {
        if (file.type !== 'text/plain') {
            reject(`Fisierul ${file.name} trebuie sa fie de tipul text`)
        }
        reader.onload = () => {
            resolve({name: file.name, data: reader.result})
        }

        reader.readAsText(file)
    })
}