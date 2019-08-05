export class HeroFactory {
  private name: string;
  private health: number;

  constructor(name: string, health: number) {
    this.name = name;
    this.health = health;
  }

  introduce() {
    console.log(`Hello, I am ${this.name}. Pleased to meet you.`);
  }
}

export function createHero(name: string, health: number) {
  return new HeroFactory(name, health);
}
