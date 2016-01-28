'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket, $timeout) {
    this.$http = $http;
    this.awesomeThings = [];

    $http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
      socket.syncUpdates('thing', this.awesomeThings);
    console.log(this.awesomeThings);
    });
  }
    updateThing(thing) {
        this.$http.put('/api/things/' + thing._id, thing)
            .then(
            function(response){
                console.log('Success!');
            },
            function(response){
                console.log('FAILURE');
            }
        );
    }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }

}

angular.module('adniumAppApp')
  .controller('MainController', MainController);
})();
