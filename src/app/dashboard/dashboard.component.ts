import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  alldata=[];
  constructor(private dataservice:DataService) { }
  ngOnInit() {
    this.dataservice.getData().subscribe(
      (response)=>{        
        console.log(typeof response);
        this.alldata.push(response);
      // this.alldata=response;
        console.log(this.alldata[0]);
      },
      (error)=>{
        console.log(error);
      }
    );
  }
}
