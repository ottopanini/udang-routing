import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.serversService.selectedServerChanged.subscribe((server) => this.server = server);
    this.serversService.selectServer(0);

    this.server = this.serversService.getServer(+this.route.snapshot.params.id); // the + is just only used to convert the string of the url to a number
    this.route.params.subscribe((params) => this.server = this.serversService.getServer(+params.id));
  }

}
