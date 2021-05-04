function successfulPromise() {
    return new Promise((resolve, reject) => {
        resolve({a:'success'})
    })
}

function rejectedPromise() {
    return new Promise((resolve, reject) => {
        reject(new Error('error'))
    })
}

function pendingPromise() {
    return new Promise((resolve, reject) => {
        const interval = setInterval(()=>console.log('pending'),1000)
        setTimeout(()=>{
            clearInterval(interval)
            resolve('success after 4 sec')
        },4000)
    })
}

(async function() {
    try {
        const result = await pendingPromise()
        console.log(result)
    } catch(err) {
        console.error(err)
    }
})()