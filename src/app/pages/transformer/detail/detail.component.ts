import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
// import {Hero} from '../data.service';
import { Observable, from } from 'rxjs';
import{Herro, fall, esc, hil, mono} from './inter';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  month:string[]= ['January','February','March','April','May','June','July','August','September','October','Novermber','December'];
  k:fall={};
  q:Herro = {};
  g = [];
  h:esc = {};
  l:mono = {};
  a:hil= {};
  j:number;
  z:string;
  b:number;
  c:string=' ';
  today:number=Date.now();
  
  constructor( private s: DataService) { }

  ngOnInit(): void {
  
   {
     console.log("P Values are:-");
     this.s.FetchPData().subscribe(data=>{
          this.q=data;
          this.j=(this.q.DeviceImei);
          this.z=this.q.DeviceTimeStamp;
          this.b= +(this.z.substring(5,7));
          this.q.DeviceTimeStamp= this.z.substring(8,10)+' '+this.month[this.b -1] +' '+this.z.substring(11,16);
          this.q.DeviceImei=this.j - 868997035786000;
          
          console.log(this.q);
      });
   }
   {
    console.log(" CV Values are:-");
    this.s.FetchCVData().subscribe(data =>{
          this.k=data;
          this.z=this.k.DeviceTimeStamp;
          this.b= +(this.z.substring(5,7));
          this.k.DeviceTimeStamp=this.z.substring(8,10)+' '+this.month[this.b -1] +' '+this.z.substring(11,16);

          console.log(this.k);
    }); 
   }
   {
    console.log("PF Values are:-");
    this.s.FetchPFData().subscribe(data=>{
          this.h=data;
          this.z=this.h.DeviceTimeStamp;
          this.b= +(this.z.substring(5,7));
          this.h.DeviceTimeStamp=this.z.substring(8,10)+' '+this.month[this.b -1] +' '+this.z.substring(11,16);
          console.log(this.h);
    });
   }
   {
     console.log("The O values are :-");
     this.s.FetchOData().subscribe(data=>{
          this.l=data;
          this.z=this.l.DeviceTimeStamp;
          this.b= +(this.z.substring(5,7));
          this.l.DeviceTimeStamp=this.z.substring(8,10)+' '+this.month[this.b -1] +' '+this.z.substring(11,16);
          console.log(this.l);
     });
   }
   {
     console.log("Tp Values are :-");
     this.s.FetchTPData().subscribe(data=>{
          this.a=data;
          this.z=this.a.DeviceTimeStamp;
          this.b= +(this.z.substring(5,7));
          this.a.DeviceTimeStamp=this.z.substring(8,10)+' '+this.month[this.b -1] +' '+this.z.substring(11,16);
          console.log(this.a);
     });
   } 
      
      
   }
  }
  

