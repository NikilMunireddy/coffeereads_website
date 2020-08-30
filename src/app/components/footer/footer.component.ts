import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name: string = "";
  email: string = "";
  subject: string = "I want to know more about your page"
  message: string = ""
  toaddress: string = "coffeereadsfantasy@gmail.com"
  ccaddress: string = "coffeereads.dhiyo@gmail.com"


  mailToMe() {
    console.log(this.message)
    window.open(`mailto:${this.toaddress}?cc=${this.ccaddress}&subject=${this.subject}&body=${this.message}`)
  }
}
