// linked list has a head and a next node which by default is NULL
import {Node} from "./node.js";


export class LinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }

    //prepend is the start of the list
    prepend(value){

        this.head = new Node(value, this.head);
        this.length++;
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
        this.length++;
    }

    insertAt(value, index){ //insert at an index
        if(index < 0 || index > this.length) {
            return
        }
        if (index === 0) {
            this.head = new Node(value, this.head);
            return
        }

        const node =  new Node(value);
        let current, previous;
        //set current to first
        current = this.head;
        let count = 0;
        while (count < index) {
            previous = current;//node before index
            count++;
            current = current.nextNode; //node after index
        }

        node.nextNode = current;
        previous.nextNode = node;
        this.length++;
    }

    at(index){
        let current = this.head;
        let count = 0;
        while (current){
          if (count == index) {
            console.log(current.value)
        }
        count++;
        current = current.nextNode;  
        }
        
        return null ;
    }
    size(){
        console.log(this.length)
     
        

    }

    removeAt(index){
        if (index < 0 || index > this.length ) {
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;
        if (index == 0) {
            this.head = current.nextNode;

        } else {
            while (count < index) {
                count++;
                previous = current
                current = current.nextNode;

            }

            previous.nextNode = current.nextNode;

        }
        this.length--;
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




