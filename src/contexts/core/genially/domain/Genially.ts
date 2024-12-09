export default class Genially {
  private _id: string;
  private _name: string;
  private _description: string;
  private _createdAt: Date;
  private _modifiedAt: Date;
  private _deletedAt: Date;

  constructor(id: string, name: string, description?: string, createdAt?: Date, modifiedAt?: Date, deletedAt?: Date) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._createdAt = createdAt || new Date();
    this._modifiedAt = modifiedAt || undefined;
    this._deletedAt = deletedAt || undefined;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get modifiedAt(): Date {
    return this._modifiedAt;
  }

  get deletedAt(): Date {
    return this._deletedAt;
  }

  set name(name: string) {
    this._name = name;
  }

  set deletedAt(deletedAt: Date) {
    this._deletedAt = deletedAt;
  }

  set modifiedAt(modifiedAt: Date) {
    this._modifiedAt = modifiedAt;
  }
}
