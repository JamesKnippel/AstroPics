angular.module('starchive')
  .controller('AppControl', function ($scope, NasaService) {
    this.renderData = false;
    setTimeout(()=>{
      console.log(this.renderData)
    },2000)
  })

  .component('app', {
    controller: 'AppControl',
    templateUrl: '../templates/app.html'
  })