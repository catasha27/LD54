// UTILITIES
const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

const cleanContainer = (selector) => $(selector).innerHTML = ''

const hideElements = (selectors) => {
    for (const eachSelector of selectors) {
        $(eachSelector).classList.add('hidden')
    }
}

const showElements = (selectors) => {
    for (const eachSelector of selectors) {
        $(eachSelector).classList.remove('hidden')
    }
}

// RENDERS

const setIntialColor = () => {
    $$(".hidden_obj").forEach(item => {
        item.setAttribute("style", "fill: #FFFFFF")
    })
}

const clearInitialColor = (item) => {
    item.removeAttribute("style")
}

const setHiddenEffect = (item) => {
    item.classList.add("animate__animated")
    item.classList.add("animate__pulse")
}

const updateCounter = () => {
    $("#counter").innerHTML = `<${getCurrentHidden()}>`
}

// DATA MANAGEMENT

const setupHidden = () => {
    $$(".hidden_obj").forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault()
            clearInitialColor(item)
            setHiddenEffect(item)
            $("#schrugg").play()
            updateCounter()
        })
    })
}

const getCurrentHidden = () => {
    return [...$$(".hidden_obj")].filter(item => {
        return item.getAttribute("style")
    }).length
}

// EVENTS

$("#start-btn").addEventListener("click", (e) => {
    e.preventDefault()
    hideElements(["#start-btn", "#title"])
    showElements(["#playground", "#counter"])
    setIntialColor()
    setupHidden()
    updateCounter()
    $("#bg-music").volume=0.4
    $("#bg-music").play()
})


