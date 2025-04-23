// linked list has a head and a next node which by default is NULL
import {Node} from "./node.js";


export class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    //prepend is the start of the list
    prepend(value){

        this.head = new Node(value, this.head);
        this.size++;
    }

    //append adds new node to the end of the list /
    append(data){
       let node  = new Node(data);
       let current;

       // If empty make it the head
       if(!this.head){
        this.head = node;
       }else {
        current = this.head;
        while(current.nextNode){
            current = current.nextNode;

        }
        current.nextNode = node;
       }
        this.size++;
    }

    at(index){

    }
    size(){
        console.log(this.size)

    }
    toString(){
        let current = this.head;
        let string = "";
        while (current) {
         
            string += `( ${current.value} ) -> `
            current = current.nextNode;
        }
        string+= "null";
        console.log(string)
        //loop then return each node as a (node)-> (node)
    }

}




