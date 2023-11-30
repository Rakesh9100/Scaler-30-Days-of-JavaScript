// Challenge 25

function fetchData(url) {
    return fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    });
}

function getData() {
    let apiUrl1 = 'https://api.artic.edu/api/v1/artworks/129884';
    let apiUrl2 = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';

    // Fetch data from the first API
    return fetchData(apiUrl1)
    .then(data1 => {
        return fetchData(apiUrl2)
        .then(data2 => {
            return { data1, data2 };
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        throw error;
    });
}

getData()
.then(combinedData => {
    console.log('Combined Data:', combinedData);
})
.catch(error => {
    console.error('Error:', error);
});
