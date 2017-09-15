/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

//var linkedList = {};
//linkedList = linkedListGenerator();


var linkedListGenerator = function(){
  var head = null;
  var tail = null;

  function getHead(){
    return head;
  }

  function getTail(){
    return tail;
  }

  function add(value){
    var node = {value: value,
                next: null};

    if (!head){
      head = node;
      tail = node;

    } else {
      tail.next = node;
      tail = node;
    }
    return node;
  }

  function get(number){
    var currentNode = head,
        count = 0;

    while (count < number) {
      if(currentNode.next === null){
        return false;
      }
      currentNode = currentNode.next;
      count++;
      }


    return currentNode;
  }











    // var head = { value: value,
    //         next: {
    //           value: value,
    //           next: {
    //             value: value,
    //             next: {
    //               value: value,
    //               next: null
    //             }
    //           }
    //         }
    //       };
    //        console.log(head, "Head");



    // var x = head;
    // for(i = 0; i > number; i++){
    // // as you loop through array
    // //head . next
    // //head . next . next
    // //head.next.next.next
    //   }
    // }

  function remove(number){
    // [0] -> [1] -> [2] -> [3] -> null
    // function remove ([2])
    // make [1] point to [3]
    // [0] -> [1] -> [3] -> null

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
};


