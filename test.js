const fetch = require(./index.js) ;

fetch("https://dog.ceo/api/breeds/list/all").then(function(response) {
            console.log(response)
        }).catch(function(error) {
            console.error(error);
        });
        
