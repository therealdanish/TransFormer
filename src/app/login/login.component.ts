import { Component, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { LogginService } from './loggin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,
              private g:LogginService) { }

loginform:FormGroup;
k='';
j='';
l;

  ngOnInit(): void {
    this.loginform=this.fb.group({
		  'Name':['', 
    Validators.required
    
      ],
		  'Password':['',
        Validators.required
     
      ]
		
    })
    
    this.l=document.getElementById("warn1");
  }

  dd(frm){
      this.g.login(this.k,this.j).subscribe(data=>{
          console.log(data);
          if(data !='Logged-in Successfully !!!' ){
              this.l.innerHTML='Wrong Username or Password';

          }
          else if((data =='Logged-in Successfully !!!')){
            this.l.innerHTML='';
          }
        });
    
  }
  // ngAfterViewInit(){
  //   this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'backgroundColor', 'white');
  // }

}
