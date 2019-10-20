export class User {
  constructor(private firstName: string, private lastName: string) {}

  hello() {
    console.log(`Hi I am ${this.firstName} ${this.lastName}`);
  }
}
