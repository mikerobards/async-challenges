//huge courtesy to my friend Florin for css of the traffic light. https://twitter.com/florinpop1705

let active = 0
let lights = document.querySelectorAll('.circle')

const switchLight = (currentLight) => {
    currentLight.classList.add(currentLight.getAttribute('color'));
}
const turnOffLight = (currentLight) => {
    currentLight.className = 'circle'
}

const changeLight = () => {

    return new Promise((res) => {
        setTimeout(() => {
            res(
                console.log(lights[active]),
                switchLight(lights[active]),
                active++,
            )
        }, Math.floor(Math.random() * 5000))
    })
}

(async function () {

    try {
        await changeLight()
        await changeLight()
        turnOffLight(lights[0])
        await changeLight()
        turnOffLight(lights[1])

        // turn off green
        // setTimeout(() => {
        //     turnOffLight(lights[2])
        // }, 3000)

    } catch (err) {
        console.log(err)
    }
})();

