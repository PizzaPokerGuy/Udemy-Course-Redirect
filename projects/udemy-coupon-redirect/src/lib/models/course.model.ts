export class Course {
  public courseKey: string;
  public urlTitle: string;

  constructor(data: Course) {
    this.courseKey = data.courseKey;
    this.urlTitle = data.urlTitle;
  }
}
