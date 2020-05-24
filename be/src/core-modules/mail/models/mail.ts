export class Mail {
  constructor(
    private _subject: string,
    private _context: any,
    private _template: string,
    private _toEmail: string,
    private _from: string
  ) {}

  get toEmail(): string {
    return this._toEmail;
  }

  set toEmail(value: string) {
    this._toEmail = value;
  }

  get from(): string {
    return this._from;
  }

  set from(value: string) {
    this._from = value;
  }

  get subject(): string {
    return this._subject;
  }

  set subject(value: string) {
    this._subject = value;
  }

  get context(): any {
    return this._context;
  }

  set context(value: any) {
    this._context = value;
  }

  get template(): string {
    return this._template;
  }
  set template(value: string) {
    this._template = value;
  }
}
