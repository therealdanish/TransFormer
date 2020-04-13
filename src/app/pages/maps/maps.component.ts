import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  constructor() { }
  texto : string = 'Wenceslau Braz - Cuidado com as cargas';
  lat: number = 17.3920;
  lng: number = 78.3194;
  zoom: number = 18;
  ngOnInit(): void {
  }

}
