import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  private _server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  set server(server: {id: number, name: string, status: string}) {
    this._server = server;
    this.serverName = server.name;
    this.serverStatus = server.status;
  }

  get server() {
    return this._server;
  }

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    this.serversService.selectedServerChanged.subscribe(server => this.server = server);
    this.server = this.serversService.selectedServer;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
