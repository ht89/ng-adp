export class MySingleton {
  private static instance: MySingleton = new MySingleton();

  // it's impossible to do "let singleton = new MySingleton()"
  // do this: "let singleton = MySingleton.getInstance()"
  private constructor() {}

  static getInstance(): MySingleton {
    if (MySingleton.instance == null) {
      MySingleton.instance = new MySingleton();
    }

    return MySingleton.instance;
  }
}
