export class Category {
  public id?:number;
  public name?:string;
  public avatar?:string;

  constructor(name: string, avatar: string) {
    this.name = name;
    this.avatar = avatar;
  }
setAvatar(avatar: string){
    this.avatar = avatar;
}
setName(name: string){
    this.name = name;
}
}
