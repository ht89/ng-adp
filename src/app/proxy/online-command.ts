export class Item {
  constructor(private id: string, private name: string) {}
}

export interface OnlineCommand {
  fetchItems(): Item[];
}
