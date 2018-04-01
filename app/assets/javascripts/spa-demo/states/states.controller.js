(function() {
  "use strict";

  angular
    .module("spa-demo.states")
    .controller("spa-demo.states.StatesController", StatesController);

  StatesController.$inject = ["spa-demo.states.State"];

  function StatesController(State) { 
    var vm = this;
    vm.states;
    vm.state;

    activate();
    return;
    /////////////////
    function activate() {
      newState();
    }

    function newState() {
      vm.state = new State();
    }
    function handleError(response) {
      console.log(response);
    }
    function edit(object, index) {
    }
    function create() {
    }
    function update() {
    }
    function remove() {
    }
    function removeElement(elements, element) {
    }
  }
})();
