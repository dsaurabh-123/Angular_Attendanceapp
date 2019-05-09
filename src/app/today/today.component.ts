import { DataService } from './../data.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import {NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class TodayComponent implements OnInit {
  model:string;
  @ViewChild('emp') nameof :ElementRef;
  // @ViewChild('date') dateof :ElementRef;

  todaysData=[];
  employees=[];
  employee:string ='';
  totalStrength=0;
  todaydate: string ='';

  constructor(private dataservice:DataService) { }

  ngOnInit() {
  }

  onSubmit(data){
  this.todaysData=[];
   const employeedata=data.value;
   this.todaysData.push({
     totalattendence:this.employees,
     otherdata:employeedata,
     TotalStrenght:this.totalStrength,
   });
   console.log(this.todaysData);
  data.reset();
  this.employees=[];
  this.totalStrength=0;

  this.dataservice.storetodaydata(this.todaysData)
  .subscribe(
    (response)=>console.log(response),
    (error)=>console.log(error)
  );
   
  }

  addEmpoloyee(data){
   const emp=data.value
    this.employees.push(
      emp
    );

    this.totalStrength=this.employees.length;
    this.nameof.nativeElement.value='';
  }

  delete(data){
   const index:number=this.employees.indexOf(data);
   if(index!==-1){
     this.employees.splice(index,1);
   }  
   this.totalStrength=this.employees.length;
  }

}
