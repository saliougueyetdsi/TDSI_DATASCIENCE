import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataframeService {
  showtable = false;
  showtablecor = false;

baseurl = 'http://localhost:5000';
httpHeaders = new HttpHeaders({'Content-Type': 'application/json'  });

  constructor(private http: HttpClient) { }
  get_data(url): Observable<any> {
    // this.url = url.replace(/^.*\\/, '');

    console.log( this.baseurl + '/api/data/' + JSON.stringify(url) + '/'  , { headers: this.httpHeaders} );

    return this.http.post<any>(this.baseurl + '/api/data/' , JSON.stringify(url)  , { headers: this.httpHeaders});
  }





  get_data_cor(url): Observable<any> {
    // this.url = url.replace(/^.*\\/, '');

    console.log( this.baseurl + '/api/cor/' + JSON.stringify(url) + '/'  , { headers: this.httpHeaders} );

    return this.http.post<any>(this.baseurl + '/api/cor/' , JSON.stringify(url)  , { headers: this.httpHeaders});
  }


  get_data_description(url): Observable<any> {
    // this.url = url.replace(/^.*\\/, '');

    console.log( this.baseurl + '/api/description/' + JSON.stringify(url) + '/'  , { headers: this.httpHeaders} );

    return this.http.post<any>(this.baseurl + '/api/description/' , JSON.stringify(url)  , { headers: this.httpHeaders});
  }


  get_data_acp_graph(url): Observable<any> {
    // this.url = url.replace(/^.*\\/, '');

    console.log( this.baseurl + '/api/acp/' + JSON.stringify(url) + '/'  , { headers: this.httpHeaders} );

    return this.http.post<any>(this.baseurl + '/api/acp/' , JSON.stringify(url)  , { headers: this.httpHeaders});
  }

  get_histo(url): Observable<any> {
    // this.url = url.replace(/^.*\\/, '');

    console.log( this.baseurl + '/api/histogramme/' + JSON.stringify(url) + '/'  , { headers: this.httpHeaders} );

    return this.http.post<any>(this.baseurl + '/api/histogramme/' , JSON.stringify(url)  , { headers: this.httpHeaders});
  }

  get_histogramme_by_variable(url): Observable<any> {
    // this.url = url.replace(/^.*\\/, '');

    console.log( this.baseurl + '/api/histogramme_by_variable/' + JSON.stringify(url) + '/'  , { headers: this.httpHeaders} );

    return this.http.post<any>(this.baseurl + '/api/histogramme_by_variable/' , JSON.stringify(url)  , { headers: this.httpHeaders});
  }


  get_regression(url): Observable<any> {
    // this.url = url.replace(/^.*\\/, '');

    console.log( this.baseurl + '/api/regression/' + JSON.stringify(url) + '/'  , { headers: this.httpHeaders} );

    return this.http.post<any>(this.baseurl + '/api/regression/' , JSON.stringify(url)  , { headers: this.httpHeaders});
  }

  get_data_afc(url): Observable<any> {
    // this.url = url.replace(/^.*\\/, '');

    console.log( this.baseurl + '/api/afc/' + JSON.stringify(url) + '/'  , { headers: this.httpHeaders} );

    return this.http.post<any>(this.baseurl + '/api/afc/' , JSON.stringify(url)  , { headers: this.httpHeaders});
  }
  // get_valeurs_propres(url): Observable<any> {
  //   // this.url = url.replace(/^.*\\/, '');

  //   console.log( this.baseurl + '/api/description/' + JSON.stringify(url) + '/'  , { headers: this.httpHeaders} );

  //   return this.http.post<any>(this.baseurl + '/api/description/' , JSON.stringify(url)  , { headers: this.httpHeaders});
  // }

  // get_data_taux(url): Observable<any> {
  //   // this.url = url.replace(/^.*\\/, '');

  //   console.log( this.baseurl + '/api/description/' + JSON.stringify(url) + '/'  , { headers: this.httpHeaders} );

  //   return this.http.post<any>(this.baseurl + '/api/description/' , JSON.stringify(url)  , { headers: this.httpHeaders});
  // }
}
