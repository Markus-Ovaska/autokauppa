export function getCars() {
    fetch("https://car-rest-service-carshop.2.rahtiapp.fi/cars")
    .then(response => {
        if (!response.ok)
            throw new Error("Error in fetch: " + response.StatusText);

        return response.json();
    })
}

export function deleteCar(url) {

    return fetch(url, {method: "DELETE"})
    .then(response => {
        if (!response.ok)
            throw new Error("Error in delete: " + response.statusText);

        return response.json();
    })
}

export function saveCar(newCar) {
    return fetch(import.meta.env.VITE_API_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(newCar)
    })
    .then(response => {
        if (!response.ok)
            throw new Error ("Error in saving:" + response.statusText);
        return response.json()
    })
}