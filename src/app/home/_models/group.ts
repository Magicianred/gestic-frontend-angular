export class Group {
  id: string;
  name: string;
  code: string;
  codeClassroom: string;
  linkClassroom: string;
  linkMeets: string;
  linkWpp: string;
  linkTel: string;

  constructor(options?) {
    if (options) { Object.assign(this, options); }
  }
}
