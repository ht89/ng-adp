import { Memento } from './memento';

export class Originator<T> {
  private state: T;

  set(state: T) {
    this.state = state;
    console.log(`Originator: Setting state to ${state}`);
  }

  saveToMemento(): Memento<T> {
    console.log('Originator: Saving to Memento.');
    return new Memento(this.state);
  }

  restoreFromMemento(memento: Memento<T>) {
    this.state = memento.getSavedState();
    console.log(
      `Originator: State after restoring from Memento: ${this.state}`
    );
  }
}
