import { Component, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { LogginService } from './loggin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  constructor(private fb:FormBuilder,
              private g:LogginService,
              private router:Router) { }

loginform:FormGroup;
k='';
j='';
l;

  ngOnInit(): void {

    console.log(localStorage.getItem('CurrentUser'))

    if(localStorage.getItem('CurrentUser')){

      this.router.navigate(['dashboard']);
    }
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
  ngAfterViewInit(){

    if(localStorage.getItem('CurrentUser')!=null){

      this.router.navigate[('#/dashboard')];
    }
  }

  dd(frm){
      this.g.login(this.k,this.j).subscribe(data=>{
          console.log(data);
        
          if(data !='Logged-in Successfully !!!' ){
              this.l.innerHTML='<b>Wrong Username or Password</b>';

          }
          else if((data =='Logged-in Successfully !!!')){
            this.l.innerHTML='';
            localStorage.setItem('CurrentUser',this.k);
            this.router.navigate(['dashboard']);
       
            
          }
        });
    
  }

  

  // ngAfterViewInit(){
  //   this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'backgroundColor', 'white');
  // }

}
