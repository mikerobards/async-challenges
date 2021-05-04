// create a promise 
// wait for 4 seconds
// resolve or reject based on randomBool
// false - reject 'hero is on vacation'
// true - resolve 'batman is here'


const randomBool = Boolean(Math.round(Math.random())) // returns either 0 or 1 


    // (async function () {
    //     try {
    //         function myPromise() {
    //             return new Promise((resolve, reject) => {
    //                 const interval = setInterval()
    //                 setTimeout(() => {
    //                     clearInterval(interval)
    //                     if(randomBool===1){
    //                     resolve('batman is here')
    //                     } else {
    //                         reject('hero is on vacation')
    //                     }
    //                 }, 4000)
    //             })
    //         }

    //     } catch (err) {
    //         console.log(err)
    //     }
    // })();

    // answer

const getHero = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(randomBool){
                resolve('batman is here')
            } else {
                reject(new Error('hero is on vacation'))
            }
        },4000)
    })
}

(async function() {
    try{
        const result = await getHero()
        console.log(result)
        
    }catch(err){
        console.log(err)
    }
})();
