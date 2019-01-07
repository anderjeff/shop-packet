import { Component } from '@angular/core';
import * as pdfjs from "pdfjs-dist"; 
import { Url } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-packet';

  loadPdf(url: string) {
    var loadingTask = pdfjs.PDFJS.getDocument(url);
    
  }
}
