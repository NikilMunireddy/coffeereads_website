import { Component, OnInit } from '@angular/core';
import { StaticDateServiceService } from "../../services/static-date-service.service"


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  staticPageContent: any;

  constructor(private staticDateServiceService: StaticDateServiceService) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.staticDateServiceService.getData().subscribe(data =>{
     this.staticPageContent =data
   })
 }

}
