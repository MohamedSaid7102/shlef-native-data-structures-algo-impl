import { LinkedList } from './src/SingleLinkedList';

try {
  let myList = new LinkedList();

  myList.insert('Mohamed', 0);
  myList.insert('Halah', 1);
  myList.print();
  console.log('\n$$$$$$$$$$$$$$ Deleting: ', myList.pop(), '\n');
  myList.print();
  console.log('\n$$$$$$$$$$$$$$ Deleting: ', myList.pop(), '\n');
  myList.print();
  myList.push(1);
  myList.push(2);
  myList.push(3);
  myList.push(4);
  myList.print();
  console.log(
    '\n$$$$$$$$$$$$$$ Deleting from begining: ',
    myList.shift(),
    '\n'
  );
  myList.print();
  console.log(
    '\n$$$$$$$$$$$$$$ Deleting from begining: ',
    myList.shift(),
    '\n'
  );
  myList.print();
  console.log(
    '\n$$$$$$$$$$$$$$ Deleting from begining: ',
    myList.shift(),
    '\n'
  );
  myList.print();
  console.log(
    '\n$$$$$$$$$$$$$$ Deleting from begining: ',
    myList.shift(),
    '\n'
  );
  myList.print();
  console.log(
    '\n$$$$$$$$$$$$$$ Deleting from begining: ',
    myList.shift(),
    '\n'
  );
  myList.print();
} catch (error) {
  console.log(error);
}
