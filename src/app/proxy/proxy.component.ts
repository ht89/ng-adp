import { Component, OnInit } from '@angular/core';
import { OnlineCommand } from './online-command';
import { ProxyfiedCommand } from './proxyfied-command';

@Component({
  selector: 'app-proxy',
  templateUrl: './proxy.component.html',
  styleUrls: ['./proxy.component.css']
})
export class ProxyComponent implements OnInit {
  command: ProxyfiedCommand = new ProxyfiedCommand();

  constructor() {}

  ngOnInit() {}
}
