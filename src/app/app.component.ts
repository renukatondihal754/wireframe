import { Component } from '@angular/core';
import {  AfterViewInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Initialize Bootstrap dropdown
    $(document).ready(function () {
      $('.dropdown-toggle').dropdown();
    });
  }
}
