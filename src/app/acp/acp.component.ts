import { Component, OnInit } from '@angular/core';
import { DataframeService } from '../dataframe.service';

@Component({
  selector: 'app-acp',
  templateUrl: './acp.component.html',
  styleUrls: ['./acp.component.css']
})
export class AcpComponent implements OnInit {
  dataToitere = [1 , 2  , 3 , 4 , 5 , 6,7 , 8 , 9 , 10];
  url;
  showgraph = false;
  databody ;
  dataheader;
  data;
  showtable = false;
  showvalue = false; 
  taux; 
  isPageLoading;


  constructor(private dataservice: DataframeService) { }

  ngOnInit() {
    this.url = {
      chemin: localStorage.getItem('chemin')
    };
    console.log(this.url);
  }


  // ce methuode permet d'uobtenir la cuouorbe de l'acp 

  load_data() {
    this.isPageLoading =true;
    this.showgraph = true ;
    this.showtable = false;
    // if(this.showgraph) {
    //   this.showvalue=false;
    //   this.showtable=false;

    // }
    // this.showvalue=true;
    // if(this.showvalue) {
    //   this.showgraph=false;
    //   this.showtable=false

    // }
    // else{
    //   this.showgraph=false;
    //   this.showvalue=false;

    // }
    // this.url = localStorage.getItem('nom');
    // console.log(this.url)
    console.log(this.url);
    this.dataservice.get_data_acp_graph(this.url ).subscribe(
      response => {
        this.data = response.data;
        this.dataheader = response.header
        this.databody = response.databody
        this.isPageLoading = false;


        console.log(response.databody ) ;
        console.log(response.header ) ;

        // this.dataservice.showtable = true;
        // this.databody = JSON.parse(response.message);
        // this.dataheader = response.header;
        // this.databody = response.body;
        // this.datatoitere = [this.dataheader.length];
        // console.log(   'le corps des donnes ' , this.databody);
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

  // pour charger les valeurs propres



  load_val() {
    this.isPageLoading = true;
    this.showvalue = false ;
    this.showtable = true;
    this.showgraph = false;
    // if(this.showgraph) {
    //   this.showvalue=false;
    //   this.showtable=false;

    // }
    // this.showvalue=true;
    // if(this.showvalue) {
    //   this.showgraph=false;
    //   this.showtable=false

    // }
    // else{
    //   this.showgraph=false;
    //   this.showvalue=false;

    // }
    // this.url = localStorage.getItem('nom');
    // console.log(this.url)
    console.log(this.url);
    this.dataservice.get_data_acp_graph(this.url ).subscribe(
      response => {
        this.data = response.data;
        this.dataheader = response.header
        this.databody = response.databody
        this.isPageLoading = false;


        console.log(response.databody ) ;
        console.log(response.header ) ;

        // this.dataservice.showtable = true;
        // this.databody = JSON.parse(response.message);
        // this.dataheader = response.header;
        // this.databody = response.body;
        // this.datatoitere = [this.dataheader.length];
        // console.log(   'le corps des donnes ' , this.databody);
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

// pour charger taux d'informations



load_taux() {
  this.isPageLoading = true;
  this.showvalue= true;
  this.showtable= false ;
  this.showgraph = false;
 
  // if(this.showgraph) {
  //   this.showvalue=false;
  //   this.showtable=false;

  // }
  // this.showvalue=true;
  // if(this.showvalue) {
  //   this.showgraph=false;
  //   this.showtable=false

  // }
  // else{
  //   this.showgraph=false;
  //   this.showvalue=false;

  // }
  // this.url = localStorage.getItem('nom');
  // console.log(this.url)
  console.log(this.url);
  this.dataservice.get_data_acp_graph(this.url ).subscribe(
    response => {
      this.data = response.data;
      this.dataheader = response.header
      this.databody = response.databody
      this.taux = response.taux;
      this.isPageLoading = false;


      console.log(response.databody ) ;
      console.log(response.header ) ;
      console.log(response.taux ) ;

      // this.dataservice.showtable = true;
      // this.databody = JSON.parse(response.message);
      // this.dataheader = response.header;
      // this.databody = response.body;
      // this.datatoitere = [this.dataheader.length];
      // console.log(   'le corps des donnes ' , this.databody);
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
