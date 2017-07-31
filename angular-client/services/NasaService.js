angular.module('starchive')
  .service('NasaService', function($http){
    this.fetchApodByDate = function(date){
      return $http.get(`https://api.nasa.gov/planetary/apod?api_key=d9bdp6oTeT1lIW7ZwpUnFFw3lk2cUI2jBwGN1urY&date=${date}`)
        .then(()=>{

        });

      
    }

  })