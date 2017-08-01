angular.module('starchive')
  .controller('searchController', function (NasaService) {
    this.grabData = function (query) {
      this.date = {
        year: 'YYYY',
        month: 'MM',
        day: 'DD'
      }
      this.dated = Object.values(query).join('-')
      NasaService.fetchApodByDate(this.dated)
        .then((result) => {
          NasaService.postToDB(result)
            .then((resulting) => {
              this.data = resulting;
              console.log(this.data, 'datatatatat')
            })
        })
    }
  })

  .component('imageSearch', {
    bindings: {
      data: '='
    },
    controller: 'searchController',
    templateUrl: '../templates/imagesearch.html'
  })