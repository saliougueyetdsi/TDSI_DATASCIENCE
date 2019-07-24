import { Component, OnInit } from '@angular/core';
import { DataframeService } from '../dataframe.service';

@Component({
  selector: 'app-histogramme',
  templateUrl: './histogramme.component.html',
  styleUrls: ['./histogramme.component.css']
})
export class HistogrammeComponent implements OnInit {
  url;
  data;
  showfigure
  isPageLoading;

  constructor(private dataservice: DataframeService ) { }

  ngOnInit() {
    this.url = {
      chemin: localStorage.getItem('chemin')
    };
    console.log(this.url);
  }

voir_histo() {
  this.isPageLoading = true;
  this.showfigure = true;
  console.log(this.url);
  this.dataservice.get_histo(this.url ).subscribe(
    response => {
      this.data = response.image
      this.isPageLoading = false;


      console.log(response.image ) ;
      

     
    } ,
    error => {
      console.log('error', error);
    }  );

}
}
