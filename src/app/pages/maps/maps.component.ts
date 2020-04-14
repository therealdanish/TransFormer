import { Component, OnInit } from '@angular/core';
import {fall} from '../transformer/detail/inter';
import { DataService } from '../transformer/data.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  constructor(private g:DataService) { }
  texto : string = 'Wenceslau Braz - Cuidado com as cargas';
  lat: number = 17.3920;
  lng: number = 78.3194;
  h:string='http://maps.google.com/mapfiles/ms/micons/green-dot.png';
  zoom: number = 18;
  y:fall={};

 

  jkl(){
    this.g.FetchCVData().subscribe(data=>{

      this.y=data;

    })
  }
  ngOnInit(): void {
    this.g.FetchCVData().subscribe(data=>{

      this.y=data;
      if((this.y.VL1==0 || this.y.VL1 >1100)||(this.y.VL2==0 || this.y.VL2>1100)||(this.y.VL3==0 || this.y.VL3>1100)){
                  this.h='http://maps.google.com/mapfiles/ms/micons/red-dot.png';
      }
    });
  }

}
