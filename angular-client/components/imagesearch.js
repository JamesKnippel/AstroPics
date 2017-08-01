angular.module('starchive')
  .controller('searchController', function(NasaService){
    this.grabData = function(query){
      this.date = {
        year: 'YYYY',
        month: 'MM',
        day: 'DD'
      }
      this.dated = Object.values(query).join('')
     NasaService.fetchApodByDate(JSON.stringify(this.dated))
    }
  })

  .component('imageSearch', {
    controller: 'searchController',
    templateUrl: '../templates/imagesearch.html'
  })