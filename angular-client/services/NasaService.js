angular.module('starchive')
  .service('NasaService', function($http){
    this.fetchApodByDate = function(date){
     
      return $http.get(`https://api.nasa.gov/planetary/apod?api_key=d9bdp6oTeT1lIW7ZwpUnFFw3lk2cUI2jBwGN1urY&date=${date}`)
        .then((result) => {
          console.log('take a look at this result u jit', result)
          this.postToDB(result) 
        })
        .catch((err)=>{
          console.log(err)
        })

      
    }

    this.postToDB = function(data){
      $http.post('/api/apods/imports', data)
    }

  })