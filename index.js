"use strict";
exports.__esModule = true;
var SingleLinkedList_1 = require("./src/SingleLinkedList");
try {
    var myList = new SingleLinkedList_1.LinkedList();
    myList.insert('Mohamed', 0);
    myList.insert('Halah', 1);
    myList.insert("Ahmed", 2);
    myList.insert("Sarah", 3);
    myList.insert("Reem", 4);
    myList.print();
    // console.log('\n$$$$$$$$$$$$$$ Deleting: ', myList.pop(), '\n');
    // myList.print();
    // console.log('\n$$$$$$$$$$$$$$ Deleting: ', myList.pop(), '\n');
    // myList.print();
    // myList.push(1);
    // myList.push(2);
    // myList.push(3);
    // myList.push(4);
    // myList.print();
    // console.log('\n$$$$$$$$$$$$$$ Deleting: ', myList.removeAt(2), '\n');
    // myList.print();
    // console.log('\n$$$$$$$$$$$$$$ Deleting: ', myList.removeAt(1), '\n');
    // myList.print();
    // myList.push(5);
    // myList.print();
    // myList.insert(2, 1);
    // myList.print();
    // console.log('\n$$$$$$$$$$$$$$ Deleting: ', myList.removeAt(2), '\n');
    // myList.print();
    // console.log('\n$$$$$$$$$$$$$$ Deleting: ', myList.removeAt(1), '\n');
    // myList.print();
    // console.log('\n$$$$$$$$$$$$$$ Deleting: ', myList.removeAt(1), '\n');
    // myList.print();
    // console.log('\n$$$$$$$$$$$$$$ Deleting: ', myList.removeAt(0), '\n');
    // myList.print();
    console.log('\n$$$$$$$$$$$$$$ Deleting: ', myList.remove('Mohamed'), '\n');
    myList.print();
    console.log('\n$$$$$$$$$$$$$$ Deleting: ', myList.remove('Ahmed'), '\n');
    myList.print();
    console.log("\n$$$$$$$$$$$$$$ Deleting: ", myList.remove("Reem"), "\n");
    myList.print();
    console.log('\n$$$$$$$$$$$$$$ Deleting: ', myList.remove('SoSo'), '\n');
    myList.print();
}
catch (error) {
    console.log(error);
}
