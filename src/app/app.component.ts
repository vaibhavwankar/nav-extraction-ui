import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nav-extraction-ui';
  article="";

  constructor(private http: HttpClient) {}

  submit() {
    alert("yes")
    this.http.post<any>('https://navextractor.herokuapp.com/extractNetAssetValueFromText', this.article)
    .subscribe(data => {
      console.log(data);
    })
  }
}
