angular.module('starchive')
  .controller('AppControl', function (NasaService) {
    this.renderData = false;
   
  })

  .component('app', {
    controller: 'AppControl',
    templateUrl: '../templates/app.html'
  })