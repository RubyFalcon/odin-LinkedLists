
//node is made of 2 parts
// data: next 
//
export class Node {
    constructor(value, nextNode =null){
        this.value = value;
        this.nextNode = nextNode;
    }
    setValue(value){
        this.value = value;
    }
    setNextNode(nextNode){
        this.nextNode = nextNode;
    }


}

