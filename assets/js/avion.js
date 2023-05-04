let url = "https://opensky-network.org/api/flights/";

function airportSelector() {
        
    let dropdown = document.querySelector('#airport-select');
    dropdown.length = 0;

    let defaultOption = document.createElement('option');
    defaultOption.text = 'Choisi un aéroport';
    defaultOption.setAttribute('disabled', '');

    dropdown.add(defaultOption);
    dropdown.selectedIndex = 0;

    const airport_url = 'assets/json/france_airports.json';

    fetch(airport_url)
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.warn('Looks like there was a problem. Status Code: ' + 
                    response.status);
                    return;
                }

                //Examine the text in the response
                response.json().then(function(data) {
                    let option;

                    for (let i = 0; i < data.length; i++) {
                        option = document.createElement('option');
                        option.text = data[i].name;
                        option.value = data[i].ICAO;
                        dropdown.add(option);
                    }
                });
            }
        )
        .catch(function(err) {
            console.error('Fetch Error -', err);
        })
}

airportSelector()



function choiceAirport() {
    let choice = document.querySelector('input[name=departure-arrival-choice]').id;
    

    let airport = document.querySelector('#airport-select').value;

    let beginDate = new Date(document.querySelector("input[name='begin']").value);
    
    let begin = Math.round(beginDate.getTime() / 1000);
    
    let endDate = new Date(document.querySelector("input[name='end']").value);
    let end = Math.round(endDate.getTime() / 1000);
    let new_url = (url + choice + '?airport=' + airport + '&begin=' + begin + '&end=' + end);
    console.log(new_url);

    
    fetch(new_url)
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.warn('Looks like there was a problem. Status Code: ' +
                    response.status);
                    return;
                }

                //Examine the text in the response
                response.json().then(function(data) {
                    console.log(data);
                    let section = document.querySelector('.result-search');

                    for (let i = 0; i < data.length; i++) {
                        p = document.createElement('p');
                        section.appendChild(p);
                        p.innerHtML = data[i].icao24;
                        console.log(p.text);
                        

                    }
                })
            }
        )
        .catch(function(err) {
            console.log('Fetch Error -', err);
        })


}