const axios = require('axios');

const data = function () {
    var URI = window.encodeURI('https://s3-ap-southeast-1.amazonaws.com/he-public-data/data%20(1)4614ba8.json');
    return axios.get(URI)
        .then(function (response) {
            console.log('from api.js', response)
            return(response)
        })
}

export default data;