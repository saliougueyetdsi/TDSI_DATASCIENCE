import { Component, OnInit } from '@angular/core';
import { DataframeService } from '../dataframe.service';

@Component({
  selector: 'app-afc',
  templateUrl: './afc.component.html',
  styleUrls: ['./afc.component.css']
})
export class AfcComponent implements OnInit {
  url;
  dataheader;
  data;
  showtable= true;
  datatoItere = [1,2,3,4];
  isPageLoading;

  constructor(private dataservice: DataframeService) { }

  ngOnInit() {
    this.url = {
      chemin: localStorage.getItem('chemin')
    };
    console.log(this.url);
  }

  load_fact() {
    this.isPageLoading = true;
    console.log(this.url);
    this.dataservice.get_data_afc(this.url ).subscribe(
      response => {
        console.log(response)
        this.dataheader = response.header;
        this.data = response.body;
        this.isPageLoading = false;
      } ,
      error => {
        console.log('error', error);
      }  );
  }

}
