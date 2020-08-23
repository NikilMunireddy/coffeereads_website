import { Component, OnInit } from '@angular/core';
import { StaticDateServiceService } from "../../services/static-date-service.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  staticPageContent: string;
  isContentLoaded: boolean = false;

  constructor(private staticDateServiceService: StaticDateServiceService) { }

  ngOnInit(): void {
    this.staticDateServiceService.getData().subscribe(data =>{
      this.staticPageContent = data
      console.log(this.staticPageContent)
      this.isContentLoaded = true;
    })
  }

  getLoadedData() {
    if(this.isContentLoaded){
      return this.staticPageContent;
    } else {
      this.staticDateServiceService.getData().subscribe(data =>{
        this.staticPageContent = data
        console.log(this.staticPageContent)
        this.isContentLoaded = true;
      })
    }
  }

  loadingStatus(){
    return this.isContentLoaded;
  }

}
