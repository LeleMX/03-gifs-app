import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environment';

@Component({
  selector: 'gifs-side-menu-header',
  templateUrl: './side-menu-header.component.html',
})
export class SideMenuHeaderComponent implements OnInit {
  envs = environment;

  ngOnInit(): void {
    console.log(this.envs);

    throw new Error('Method not implemented.');
  }
}
