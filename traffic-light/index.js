//huge courtesy to my friend Florin for css of the traffic light. https://twitter.com/florinpop1705

let active = 0
let lights = document.querySelectorAll('.circle')

const switchLight = (currentLight) =>{
    currentLight.classList.add(currentLight.getAttribute('color'));
}
const turnOffLight = (currentLight) =>{
    // currentLight.className = 'circle'
    currentLight.classList.remove(currentLight.getAttribute('color'));
}

const changeLight = (i)=>{
    
    return new Promise((res)=>{
        setTimeout(()=>{
            res(
                console.log(lights[i]),
                switchLight(lights[i]) 
            )
        },3000)
    })
}

(async function() {
    try{
       
       await changeLight(0)
       await changeLight(1)
       turnOffLight(lights[0])
       await changeLight(2)
       turnOffLight(lights[1])
    //    turnOffLight(lights[2])
    }catch(err){
        console.log(err)
    }
})();

