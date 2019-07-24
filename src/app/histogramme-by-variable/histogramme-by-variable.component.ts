import { Component, OnInit } from '@angular/core';
import { DataframeService } from '../dataframe.service';

@Component({
  selector: 'app-histogramme-by-variable',
  templateUrl: './histogramme-by-variable.component.html',
  styleUrls: ['./histogramme-by-variable.component.css']
})
export class HistogrammeByVariableComponent implements OnInit {
  url;
  dataheader;
  showform;
  urlist;
  data;
  showhisto;
isPageLoading;

  constructor(private dataservice:DataframeService) { }

  ngOnInit() {
    this.url = {
      chemin: localStorage.getItem('chemin')
    };
    this.get_data();
    this.urlist = {
      chemin:localStorage.getItem('chemin'),
      variable: ''

    }
  }

  get_data() {
    this.showform = true;

    console.log(this.url);
    this.dataservice.get_data_cor(this.url ).subscribe(
      response => {
        this.dataservice.showtable = true;
        this.dataheader = response.header;
        

      } ,
      error => {
        console.log('error', error);
      }  );
  }
  tracer_hist() {
    this.isPageLoading = true;
    this.showhisto = true;

   
    console.log(this.urlist);
    this.dataservice.get_histogramme_by_variable(this.urlist ).subscribe(
      response => {
        this.data = response.image
        this.isPageLoading = false;
        

      




      } ,
      error => {
        console.log('error', error);
      }  );

  }

}
