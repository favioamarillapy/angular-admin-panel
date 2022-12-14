import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Company';
  constructor(private elementRef: ElementRef, public _router: Router) { }

  ngOnInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }

  validateRoute() {
    return this._router.url !== '/register'
      && this._router.url !== '/login'
      && this._router.url !== '/404'
      && this._router.url !== '/contact'
  }
}
