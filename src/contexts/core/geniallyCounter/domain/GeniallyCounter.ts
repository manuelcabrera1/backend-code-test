export default class GeniallyCounter{
  readonly _id: string;
  private _counter: number;

  constructor(id: string, counter: number) {
    this._id = id;
    this._counter = counter;
  }

  get id(): string {
    return this._id;
  }

  get counter(): number {
    return this._counter;
  }

  increment(): void {
    this._counter++;
  }

  
}