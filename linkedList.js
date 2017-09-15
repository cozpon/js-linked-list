/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

var linkedList = {};
linkedList = linkedListGenerator();



var linkedListGenerator = function(){
   function getHead(){
    return null;
  }

  function getTail(){
    // if Next points to null, return that key's value
    if(next === null){
      return;
    }
  }

  function add(value){
    // set old tail to point to Added Item, set Added Item to point to null
  }

  function remove(number){
    // [0] -> [1] -> [2] -> [3] -> null
    // function remove ([2])
    // make [1] point to [3]
    // [0] -> [1] -> [3] -> null
  }

  function get(number){

  }

  function insert(value, number){
  }

  return {
    getTail: getTail,
    getHead: getHead,
    add: add,
    remove: remove,
    get: get,
    insert: insert
  };
}



