import {EventEmitter} from '@angular/core';

export class ServersService {
  private servers = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online'
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline'
    }
  ];

  private _selectedServer: {id: number, name: string, status: string};

  selectedServerChanged = new EventEmitter<{id: number, name: string, status: string}>();

  get selectedServer() {
    return this._selectedServer;
  }
  // server objects itself are still not defended
  getServers() {
    return [...this.servers];
  }

  getServer(id: number) {
    return this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
  }

  updateServer(id: number, serverInfo: {name: string, status: string}) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }

  selectServer(index: number) {
    this._selectedServer = this.servers[index];
    this.selectedServerChanged.emit(this._selectedServer);
  }
}
