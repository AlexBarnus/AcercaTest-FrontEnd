export const apiGetVehicles = () => {
    const url = 'http://localhost:52871/api/values/';
    const request = {
        method: 'GET',
        headers: { "Content-type": "application/json; charset=UTF-8" }
    };
    return fetch(url, request)
        .then(response => response.json());
};

export const apiDelVehicles = (vehicle) => {
    const url = 'http://localhost:52871/api/values/' + vehicle.Id;
    const request = {
        method: 'DELETE',
        headers: { "Content-type": "application/json; charset=UTF-8" }
    };
    return fetch(url, request)
        .then(response => (response.status === 200))
        .then(resp => apiGetVehicles());
};

export const apiPutVehicles = (vehicle) => {
    const url = 'http://localhost:52871/api/values/Put';
    const request = {
        method: 'PUT',
        body: JSON.stringify(vehicle),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    };
    return fetch(url, request)
        .then(response => (response.status === 200))
        .then(resp => apiGetVehicles());
};

export const apiPostVehicles = (vehicle) => {
    const url = 'http://localhost:52871/api/values/Post';
    const request = {
        method: 'Post',
        body: JSON.stringify(vehicle),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    };
    return fetch(url, request)
        .then(response => (response.status === 200))
        .then(resp => apiGetVehicles());
};
