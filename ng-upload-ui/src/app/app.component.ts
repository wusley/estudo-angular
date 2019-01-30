import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
} )
export class AppComponent {

  constructor( private http: HttpClient ) {}

  inputFileChange( event ) {

    if( event.target.files && event.target.files[ 0 ] ) {

      const file = event.target.files[ 0 ];

      const formData = new FormData();

      formData.append( 'file', file );

      console.log( file );

    }

  }

}
