export class User {
  constructor(private _id: number, private _name: string) {}

  get name() {
    return this._name;
  }

  get id() {
    return this._id;
  }
}
