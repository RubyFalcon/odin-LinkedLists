import { LinkedList} from "./linked-list.js";

const l1 = new LinkedList()
l1.prepend("John")
l1.prepend("Tupay");
l1.prepend("carl")
l1.append("Marx")


l1.insertAt("200", 4)
l1.toString()
l1.removeAt(3);
l1.toString();
l1.at(3);

// console.log(l1.size());
// // console.log(l1.head);
console.log(l1.tail())
