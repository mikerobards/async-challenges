//huge courtesy to my friend Florin for css of the traffic light. https://twitter.com/florinpop1705

let active = 0
let lights = document.querySelectorAll('.circle')

const switchLight = (currentLight) => {
    currentLight.classList.add(currentLight.getAttribute('color'));
}
const turnOffLight = (currentLight) => {
    currentLight.className = 'circle'
}

//my answer
// const changeLight = () => {

//     return new Promise((res) => {
//         setTimeout(() => {
//             res(
//                 console.log(lights[active]),
//                 switchLight(lights[active]),
//                 active++,
//             )
//         }, Math.floor(Math.random() * 5000))
//     })
// }

// (async function () {

//     try {
//         await changeLight()
//         await changeLight()
//         turnOffLight(lights[0])
//         await changeLight()
//         turnOffLight(lights[1])

//         // turn off green
//         // setTimeout(() => {
//         //     turnOffLight(lights[2])
//         // }, 3000)

//     } catch (err) {
//         console.log(err)
//     }
// })();

//scrimba answer
const changeLight = () => {
    return new Promse((res, rej) => {
        let currentLight = lights[active]
        if (active === 0) {
            switchLight(currentLight)
            setTimeout(() => {
                turnOffLight(currentLight)
                active = 1
                res(active)
            }, 1000)
        }
        if (active === 1) {
            switchLight(currentLight)
            setTimeout(() => {
                turnOffLight(currentLight)
                active = 2
                res(active)
            }, 4000)
        }
        if (active === 2) {
            switchLight(currentLight)
            setTimeout(() => {
                turnOffLight(currentLight)
                active = 0
                res(active)
            }, 2000)
        }
    })
}

(async function () {
    try {
        await changeLight()
        await changeLight()
        await changeLight()
    } catch (err) {
        console.log(err)
    }
})();

/* 
The changeLight promise is called
The switchLight function kicks in
The class is added to the first circle. This class is added from the attribute of color
The timeout function turns off the light
Sets active to new light
and resolved the promise res(active)
After promise is resolved, the next await changeLight function is called

*/
