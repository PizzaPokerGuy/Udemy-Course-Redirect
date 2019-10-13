export class Course {
  public courseKey: string;
  public name: string;
  public urlTitle: string;

  constructor(data: Course) {
    this.courseKey = data.courseKey;
    this.name = data.name;
    this.urlTitle = data.urlTitle;
  }
}
