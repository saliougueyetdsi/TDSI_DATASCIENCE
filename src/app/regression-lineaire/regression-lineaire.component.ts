import { Component, OnInit } from '@angular/core';
import { DataframeService } from '../dataframe.service';

@Component({
  selector: 'app-regression-lineaire',
  templateUrl: './regression-lineaire.component.html',
  styleUrls: ['./regression-lineaire.component.css']
})
export class RegressionLineaireComponent implements OnInit {
  url;
  dataheader;
  showform;
  urlist;
  data;
  showregression;
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

  voir_regression() {
    this.isPageLoading=true;
    this.showregression = true;

   
    console.log(this.urlist);
    this.dataservice.get_regression(this.urlist ).subscribe(
      response => {
        this.data = response.image
        this.isPageLoading = false;
        

      




      } ,
      error => {
        console.log('error', error);
      }  );

  }

}
