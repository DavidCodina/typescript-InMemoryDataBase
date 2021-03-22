export interface BaseRecord {
  id: string;
}


export interface Person {
  id:   string;
  name: string;
}


export interface Database<T extends BaseRecord> {
  set(newValue: T): void;
  get(id: string): T | undefined;
}
