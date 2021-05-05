const promise = () => {
    return new Promise((resolve, reject) => {
        reject(new Error('Something went wrong'))
    })
}

const resolver = async (promise) => {
    try {
        await promise()
    }

    catch (err) {
        console.error(err)
    }

    finally {
        return "i still return the value"
        console.log('I AM HERE!')
    }
}


(async function () {
    const test = await resolver(promise)
    console.log(test)

})();