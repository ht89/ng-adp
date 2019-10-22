import { OnlineCommand, Item } from './online-command';
import { RealCommand } from './real-command';

export class ProxyfiedCommand implements OnlineCommand {
  private real: RealCommand;

  constructor() {
    this.real = new RealCommand();
  }

  // This only exists as a placeholder. If needed, we'll use the real command
  fetchItems(): Item[] {
    const items = this.real.fetchItems();
    return items;
  }
}
