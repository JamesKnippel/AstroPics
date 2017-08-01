angular.module('starchive')
  .controller('imagecontroller', function(){
   
  })
  .component('imageViewer', {
    bindings: {
      rendered: '='
    },
    controller: 'imagecontroller',
    templateUrl: 'templates/imageviewer.html'
  })