import { Component, OnInit } from '@angular/core';
import { DataframeService } from '../dataframe.service';

@Component({
  selector: 'app-correlation',
  templateUrl: './correlation.component.html',
  styleUrls: ['./correlation.component.css']
})
export class CorrelationComponent implements OnInit {
  url;
  // data = [];
  databody = [];
  dataheader = [];
  dataToitere = [1 , 2  , 3 , 4 , 5 , 6];
  isPageLoading;


  constructor(private dataservice: DataframeService ) { }

  ngOnInit() {
    this.url = {
      chemin: localStorage.getItem('chemin')
    };
    console.log(this.url);
  }

  load_data() {
    this.isPageLoading = true;
    // this.url = localStorage.getItem('nom');
    // console.log(this.url);

    console.log(this.url);
    this.dataservice.get_data_cor(this.url ).subscribe(
      response => {
        this.dataservice.showtable = true;
        // this.databody = JSON.parse(response.message);
        this.dataheader = response.header;
        this.databody = response.body;
        this.isPageLoading = false;
        // this.datatoitere = [this.dataheader.length];
        console.log(   'le corps des donnes ' , this.databody);
        // console.log(this.dataheader);
        // console.log(this.data);

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
