export class User {
  _id: string;
  name: string;
  role: 'ADMIN' | 'QUESTION_MANAGER' | 'CONCURSO_MANAGER';
  email: string;
  password: string;
  active = true;

  constructor(options?) {
    if (options) { Object.assign(this, options); }
  }

  trim(): User {
    const payload = new User(this);
    delete payload._id;
    return payload;
  }
}

