import { OnlineCommand, Item } from './online-command';
import { RealCommand } from './real-command';

export class ProxyfiedCommand implements OnlineCommand {
  private real: RealCommand;

  constructor() {
    this.real = new RealCommand();
  }

  // This only exists as a placeholder. If needed, we'll use the real command
  fetchItems(): Item[] {
    // can execute code bf calling fetchItems()
    const items = this.real.fetchItems();
    // can execute code af calling fetchItems()
    console.log(items);
    return items;
  }
}
