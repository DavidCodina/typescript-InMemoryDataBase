import { InMemoryDatabase } from './classes/InMemoryDatabase.js';
import { Person }           from './interfaces/index.js';
import { renderData }       from './helpers.js';


const personDatabase    = new InMemoryDatabase<Person>();
const records: Person[] = [];


personDatabase.set({ id: '1', name: 'David' });
personDatabase.set({ id: '2', name: 'Holly' });


records.push(personDatabase.get('1'));
records.push(personDatabase.get('2'));


renderData<Person>(records);
