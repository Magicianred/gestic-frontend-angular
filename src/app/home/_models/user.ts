export class User {
  _id: string;
  name: string;
  cpf: string;
  email: string;
  password: string;
  tag: string;

  constructor(options?) {
    if (options) { Object.assign(this, options); }
  }
}

