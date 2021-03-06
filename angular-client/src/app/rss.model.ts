export class Rss {
  _id: string;
  title: string;
  description: string;
  link: string;
  published: Date;
  sourceName: string;
  constructor(obj?: any) {
    this._id = obj && obj._id;
    this.title = obj && obj.title || '';
    this.description = obj && obj.description || '';
    this.link = obj && obj.link || '';
    this.published = obj && new Date(obj.published) || new Date();
    this.sourceName = obj && obj.sourceName || '';
  }

}
