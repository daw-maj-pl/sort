import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumbersCollection([12, 4, -6, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('YCEcZxpd');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(300);
linkedList.add(20);
linkedList.add(-40);
linkedList.add(-3);
linkedList.add(15);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
