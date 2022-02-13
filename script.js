async function getData() {
    let nextPage = 'https://swapi.dev/api/people/'
  
    let people = []
  
    while (nextPage) {
        const res = await fetch(nextPage)
        const { next, results } = await res.json()
        nextPage = next
        people = [...people, ...results]
    }
  
    console.log(people.length)
    console.log(people)

}
  
getData()