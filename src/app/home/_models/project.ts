export class Project {
  id: string;
  userId: string;
  name: string;
  description: string;

  constructor(options?) {
    if (options) { Object.assign(this, options); }
  }
}
