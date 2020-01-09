export class Memento<T> {
  constructor(private state: T) {}

  getSavedState(): T {
    return this.state;
  }
}
