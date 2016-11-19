import Parser from 'react-native-html-parser';

function getPodcasts() {
    const url = 'http://www.racalacarta.com/wp-feeder.php?limit=10&prog=LA%20COMPETENCIA&param=la_competencia';

    return fetch(url)
        .then((response) => response.text())
        .then((responseText) => {
            const DOMParser = Parser.DOMParser;
            const doc = new DOMParser().parseFromString(responseText,'text/html');
            const items = doc.getElementsByTagName('item');
            let titles = [];

            for(i=0; i<items.length; i++) {
                titles.push(items[i].getElementsByTagName("title")[0].textContent);
            }

            return titles;
        })
        .catch((error) => {
            console.warn("CUSTOM ERROR", error);
        })
}

export { getPodcasts }