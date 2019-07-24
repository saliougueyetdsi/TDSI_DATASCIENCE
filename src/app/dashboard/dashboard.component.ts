import { Component, OnInit } from '@angular/core';
import { DataframeService } from '../dataframe.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataheader = [];
  databody = [];
  data = [];
  dataToitere = [ 0, 1 , 2 , 3 , 4  , 5 ];
  isPageLoading;
  // showtable = false;
  url = {
    chemin: ''
  };

  constructor(private dataservice: DataframeService ) { }

  ngOnInit() {
    this.url = {
      chemin: ''
    };
    // this.load_data();
  }

 basename(path) {
    return path.replace(/\\/g, '/').replace( /.*\//, '' );
}
 load_data() {
  this.isPageLoading = true;
    // this.url = this.basename(this.url);
    localStorage.setItem('chemin' , this.url.chemin);

    console.log(this.url);
    this.dataservice.get_data(this.url ).subscribe(
      response => {

        this.dataservice.showtable = true;
        // console.log('response', response);
      this.databody = JSON.parse(response.message);
      this.isPageLoading = false;
      console.log(this.databody)
        this.dataheader = response.header;
        this.data = response.body;
        // console.log(this.data);
        console.log(this.databody);

        // console.log(response.message);

        // this.data.forEach(element => {
        //   return element;
        //   console.log(element);

        // });


        console.log('object', this.databody);

      } ,
      error => {
        console.log('error', error);
      }  );



  }



}
