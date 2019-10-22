import { OnlineCommand, Item } from './online-command';

// the only one that has the right to do API calls
export class RealCommand implements OnlineCommand {
  fetchItems(): Item[] {
    return [
      new Item('1', 'Go to the Google Search page'),
      new Item('2', 'Enter a search key'),
      new Item('3', 'Hit Enter to start the search')
    ];
  }
}
