import { BaseRecord, Database } from '../interfaces/index.js';


export class InMemoryDatabase<T extends BaseRecord> implements Database<T> {
  private db: Record<string, T> = {}; // https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeystype


  public set(newValue: T): void {
    this.db[newValue.id] = newValue;
  }


  public get(id: string): T {
    return this.db[id]
  }
}
