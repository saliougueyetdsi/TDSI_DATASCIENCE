import { Component, OnInit } from '@angular/core';
import { DataframeService } from '../dataframe.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  url;
  data = [];
  databody = [];
  dataheader  = [];
  dataitere = ['count' , 'mean' , 'ecart-type' , 'min' , '25%' , '50%' , '75%' , 'max' ];
  isPageLoading;

  constructor(private dataservice: DataframeService) { }

  ngOnInit() {
    this.url = {
      chemin: localStorage.getItem('chemin')
    };
    console.log(this.url);
  }
  load_data() {
    this.isPageLoading = true;

    console.log(this.url);
    this.dataservice.get_data_description(this.url ).subscribe(
      response => {
        this.dataservice.showtable = true;
        this.data = JSON.parse(response.message);
        this.dataheader = response.header;
        this.databody = response.body;
        this.isPageLoading = false;
        // this.datatoitere = [this.dataheader.length];
        // console.log(   'le corps des donnes ' , this.databody);
        // console.log(this.dataheader);
        console.log(this.databody);

        // this.dataservice.showtable = true;
        // this.databody = JSON.parse(response.message);
        // this.dataheader = response.header;
        // this.data = response.body;
        // console.log(this.data);
      } ,
      error => {
        console.log('error', error);
      }  );

  }

}
