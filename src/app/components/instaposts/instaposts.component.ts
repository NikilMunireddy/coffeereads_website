import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component'
import { StaticDateServiceService } from "../../services/static-date-service.service"


@Component({
  selector: 'app-instaposts',
  templateUrl: './instaposts.component.html',
  styleUrls: ['./instaposts.component.css']
})
export class InstapostsComponent implements OnInit {

  isContentLoaded: boolean;
  staticPageContent: any;

  constructor(private homeComponent: HomeComponent, private staticDateServiceService: StaticDateServiceService) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
     this.staticDateServiceService.getData().subscribe(data =>{
      this.staticPageContent =data
    })
  }

}
