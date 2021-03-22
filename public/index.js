import { InMemoryDatabase } from './classes/InMemoryDatabase.js';
import { renderData } from './helpers.js';
const personDatabase = new InMemoryDatabase();
const records = [];
personDatabase.set({ id: '1', name: 'David' });
personDatabase.set({ id: '2', name: 'Holly' });
records.push(personDatabase.get('1'));
records.push(personDatabase.get('2'));
renderData(records);
