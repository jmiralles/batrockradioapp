import DomParser from 'react-native-html-parser';

function getLastPodcast() {
   console.warn("======>>>>FETCHINGGG");
    const url = 'http://www.racalacarta.com/wp-feeder.php?limit=10&prog=LA%20COMPETENCIA&param=la_competencia'
    return fetch(url)
        //.then((response) => response.text())
        .then((response) => {
          console.warn(JSON.stringify(response.text()));
        /* let doc = new DomParser().parseFromString(response.text(),'text/html')
            console.warn(doc);*/
        })
        .catch((error) => {
            console.warn("CUSTOM ERROR", error);
        })
}

export { getLastPodcast }