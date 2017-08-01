angular.module('starchive')
  .service('NasaService', function ($http) {
    this.fetchApodByDate = function (date) {
      return $http.get(`https://api.nasa.gov/planetary/apod?api_key=d9bdp6oTeT1lIW7ZwpUnFFw3lk2cUI2jBwGN1urY&date=${date}`)
        .then((result) => {
          // console.log('take a look at this result u jit', result)
         return result
        })
        .catch((err) => {
          console.log(err)
        })
    },
    
  
    this.postToDB = function (data) {
      return $http.post('/api/apods/imports', data)
        .then((response)=>{
              return response.data
            })
    }

    this.getFromDB = function (query){
      $http.get('/api/apods' + query)
        .then((result)=>{
          return result
        })
    }

  })