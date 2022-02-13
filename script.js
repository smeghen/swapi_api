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

    // function to hide loader spinner and display table when data is finised loading from api
    function hideloader() {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('table').style.display = 'block';
    }

    hideloader();
}
  
getData()