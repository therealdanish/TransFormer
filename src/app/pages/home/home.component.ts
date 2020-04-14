import { Component, OnInit } from '@angular/core';
import  Swal  from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
fgh(){

  this.router.navigate(['transformer/detail']);
}

 lala() {
    Swal.fire( "Transformer Details",
"<hr><h2 style='color:black;position:absolute;left 20px;'>ID: 868997035786613</h2><br><br><ul><li style='color:black'><h4 style='color:black;position:absolute;left:50px'>KVA :</h4></li><li style='color:black'><h4 style='color:black;position:absolute;left:50px'>Voltage Ratio : 2.11</h4></li><li style='color:black'><h4 style='color:black;position:absolute;left:50px'>Make : TRIPURA 1</h4></li><li style='color:black'><h4 style='color:black;position:absolute;left:50px'>Trans Slno :</h4></li><li style='color:black'><h4 style='color:black;position:absolute;left:50px'>MFG Year : 2018</h4></li><li style='color:black'><h4 style='color:black;position:absolute;left:50px'>Location : CBIT, Hyderabad</h4></li></ul>")
 }
}
