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

    // Function to load api data onto table
    function loadTable(people){
        var table = document.getElementById("tbody");
        for (i = 0; i < people.length; i++){
            var row = `<tr>
                        <td>${people[i].name}</td>
                        <td>${people[i].height}</td>
                        <td>${people[i].mass}</td>
                        <td>${people[i].created}</td>
                        <td>${people[i].edited}</td>

            </tr>
            `
            table.innerHTML += row
        }
    }

    // function to hide loader spinner and display table when data is finised loading from api
    function hideloader() {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('table').style.display = 'block';
    }

    loadTable(people)   
    hideloader();
}
  
getData()