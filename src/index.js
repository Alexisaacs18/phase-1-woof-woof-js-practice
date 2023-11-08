const url = 'http://localhost:3000/pups'

const dogBar = document.getElementById("dog-bar")

const dogContainer = document.getElementById("dog-summary-container")

fetch(url)
    .then(res => res.json())
    .then(puppies =>
        puppies.forEach(pups => {
            addSpan(pups)
        })
    )

function addSpan(value) {
    const addSpan = document.createElement('span')
    addSpan.textContent = value.name
    dogBar.appendChild(addSpan)

    addSpan.addEventListener('click', (e) => {
        e.preventDefault()
        const addImg = document.createElement('img')
        const addH2 = document.createElement('h2')
        const addButton = document.createElement('button')

        addImg.src = value.image
        addImg.width = 250
        addImg.height = 250
        addH2.textContent = e.target.textContent
        addButton.textContent = value.isGoodDog


        dogContainer.appendChild(addImg)
        dogContainer.appendChild(addH2)
        dogContainer.appendChild(addButton)

        if (addButton.textContent) {
            addButton.textContent = 'Good Dog!'
        } else {
            addButton.textContent = 'Bad Dog!'
        }

        addButton.addEventListener('click', (e) => {
            if (addButton.value) {
                addButton.textContent = 'Good Dog!'
            } else {
                addButton.textContent = 'Bad Dog!'
            }
            addButton.value = !addButton.value
        })
    })
}


