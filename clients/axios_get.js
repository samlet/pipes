const axios = require('axios');

// axios.get('https://simple-servant-iw19bm09nlrp.runkit.sh/').then(resp => {
//     console.log(resp.data);
// });

axios.get('https://simple-servant-iw19bm09nlrp.runkit.sh/')
    .then(function (response) {
        // handle success
        console.log('success ->')
        console.log(response);
    })
    .catch(function (error) {
        console.log('occurs a error ->')
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
        console.log('end.')
    });

