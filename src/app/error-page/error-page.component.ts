import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  error: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.error = this.route.snapshot.data.message;
    this.route.data.subscribe((data) => this.error = data.message);
  }
}
