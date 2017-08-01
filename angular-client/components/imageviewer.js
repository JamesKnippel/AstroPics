angular.module('starchive')
  .controller('imagecontroller', function(){
  //  $('imageflip').addClass('flipInX')
  })
  .component('imageViewer', {
    bindings: {
      rendered: '='
    },
    controller: 'imagecontroller',
    templateUrl: 'templates/imageviewer.html'
  })