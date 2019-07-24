import { Component, OnInit } from '@angular/core';
import { DataframeService } from '../dataframe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private dataservice: DataframeService ) { }

  ngOnInit() {
  this.dataservice.showtable = false;
  this.dataservice.showtablecor = true;
  console.log( this.dataservice.showtable = false);
  }

}
