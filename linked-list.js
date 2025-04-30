// linked list has a head and a next node which by default is NULL
import {Node} from "./node.js";


export class LinkedList {
    constructor(){
        this.listHead = null;
        this.length = 0;
    }

    get head(){
        return this.listHead;
    }
    
    tail(){
        return this.at((this.length)-1);
        //every tail based on our logic would have an empty node , so we take length - 1;
    }
    //prepend is the start of the list
    prepend(value){

        this.listHead = new Node(value, this.listHead);
        this.length++;
    }

    //append adds new node to the end of the list /
    append(data){
       let node  = new Node(data);
       let current;

       // If empty make it the head
       if(!this.listHead){
        this.listHead = node;
       }else {
        current = this.listHead;
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
            this.listHead = new Node(value, this.listHead);
            return
        }

        const node =  new Node(value);
        let current, previous;
        //set current to first
        current = this.listHead;
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
        let current = this.listHead;
        let count = 0;
        while (current){
          if (count == index) {
            return current.value;
        }
        count++;
        current = current.nextNode;  
        }
        
        return null ;
    }
    size(){
        return this.length;
     
        

    }

    removeAt(index){
        if (index < 0 || index > this.length ) {
            return;
        }
        let current = this.listHead;
        let previous;
        let count = 0;
        if (index == 0) {
            this.listHead = current.nextNode;

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
        let current = this.listHead;
        let string = "";
        while (current) {
         
            string += `( ${current.value} ) -> `
            current = current.nextNode;
        }
        string+= "null";
        console.log(string)
        //loop then return each node as a (node)-> (node)
    }

    pop(){
        let current = this.listHead;
        let previous = null;

        while(current != null){
            previous = current;
            current = current.nextNode;
        }
        previous.nextNode = null;
    }

    contains(value){
        let current = this.listHead;
        while (current != null){
            if (current.value == value){
                return true;
            }
        }
        return false;

    }
}




