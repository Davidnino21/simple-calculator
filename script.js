let tds = document.querySelectorAll("td")
const screen = document.querySelector("#answer")

tds.forEach(td => {
    td.addEventListener("click", function (event) {
        let input = event.target.innerText

        if ("C" === input) {
            clearAll()
        } else if ("CE" === input) {
            deleteLatEntry()
        } else if ("=" === input) {
            getAnswer()
        } else {
            screen.value = screen.value + input
        }
    })
});

function clearAll() {
    screen.value = ""
}

function deleteLatEntry() {
    screen.value = screen.value.slice(0, -1)
}

function getAnswer() {
    const answer = eval(screen.value)
    screen.value = answer
}

