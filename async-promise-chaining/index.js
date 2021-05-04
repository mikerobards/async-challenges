document.getElementById('action').addEventListener('click', ()=>{

    // call user API
    // store random first name in a variable firstUser
    // call user API again, after you finish calling first one
    // store random first name in variable secondUser 
    // console log `${firstUser} and ${secondUser} are friends`

    const userApi = 'https://randomuser.me/api/'
    // fetch(userApi).then(res=>res.json()).then(json=>{
    //      const firstUser = json.results[0].name.first
    //      fetch(userApi).then(res=>res.json()).then(json=>{
    //          const secondUser = json.results[0].name.first
    //          console.log(`${firstUser} and ${secondUser} are friends`)
    //      })
    // })
    
    async function getData() {
        const response1 = await fetch(userApi)
        const data1 = await response1.json()
        const firstUser = data1.results[0].name.first
        const response2 = await fetch(userApi)
        const data2 = await response2.json()
        const secondUser = data2.results[0].name.first
        console.log(`${firstUser} and ${secondUser} are friends`)
    }

    getData();

    // answer
    // change anonymous function to async

    const firstResponse = await fetch(userApi)
    const firstUserJson = await firstResponse.json()
    const firstUser = firstUserJson.results[0].name.first
    
    const secondResponse = await fetch(userApi)
    const secondUserJson = await secondResponse.json()
    const secondUser = secondUserJson.results[0].name.first
    
    console.log(`${firstUser} and ${secondUser} are friends`)
})

