import { Component, OnInit } from "@angular/core";
import {DattaService} from './datta.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {fall} from '../transformer/detail/inter';
import * as $ from 'jquery';
import * as XLSX from 'xlsx'; 
import { Subject } from 'rxjs';
import{debounceTime} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: "app-history",
  templateUrl: "history.component.html"
})

export class HistoryComponent implements OnInit {
  constructor(private g:DattaService,
              private toastr:ToastrService) {}

  month:string[]=['January','February','March','April','May','June','July','August','September','October','Novermber','December'];
  a=[];
  t1;t2;t3;t4;t5;t6;t7;t8;t9;t10;t11;t12;t13;t14;t0; 
  i;
  y='';
  b=[];
  name;
  model:NgbDateStruct;
  nana:string='';
  nana1:string='';
  iss:boolean=true;
  lol:string='';
  ww;
  from='top';
  align='left';
  private _success= new Subject<string>();
  staticAlertClosed = false;
  successMessage = '';
  z;
  page = 1;
  pageSize = 4;
  collectionSize = this.a.length;
  pageOfItems: Array<any>;  
  baba=true;
  yui=true;
  
  
  ngOnInit() {
    // setTimeout(() => this.staticAlertClosed = true, 20000);

    // this._success.subscribe(message => this.successMessage = message);
    // this._success.pipe(
    //   debounceTime(5000)
    // ).subscribe(() => this.successMessage = '');
  
      this.ww=<HTMLInputElement>document.getElementById("warn");
      this.t1=<HTMLInputElement>document.getElementById("t1");
      this.t2=<HTMLInputElement>document.getElementById("t2");
      this.t3=<HTMLInputElement>document.getElementById("t3");
      this.t4=<HTMLInputElement>document.getElementById("t4");
      this.t5=<HTMLInputElement>document.getElementById("t5");
      this.t6=<HTMLInputElement>document.getElementById("t6");
      this.t7=<HTMLInputElement>document.getElementById("t7");
      this.t8=<HTMLInputElement>document.getElementById("t8");
      this.t9=<HTMLInputElement>document.getElementById("t9");
      this.t10=<HTMLInputElement>document.getElementById("t10");
      this.t11=<HTMLInputElement>document.getElementById("t11");
      this.t12=<HTMLInputElement>document.getElementById("t12");
      this.t13=<HTMLInputElement>document.getElementById("t13");
      this.t14=<HTMLInputElement>document.getElementById("t14");
      this.t0=document.getElementById('t0');
      
      
  }



  gaga(){
        if(this.nana.localeCompare(this.nana1) == 1){
          this.ww.innerHTML='Start Date is greater than End Date';
        }
        else{
          this.yui=false;
          if(this.lol == 'Current-Voltage'){
          this.ww.innerHTML='';
          this.name='CurrandVolt';
          this.t0.innerHTML='Date & Time';
          this.t1.innerHTML='IL1';
            this.t2.innerHTML='IL2';
            this.t3.innerHTML='IL3';
            this.t4.innerHTML='VL1';
            this.t5.innerHTML='VL2';
            this.t6.innerHTML='VL3';
            this.t7.innerHTML='VL12';
            this.t8.innerHTML='VL23';
            this.t9.innerHTML='VL31';
            this.t10.innerHTML='ALV';
            this.t11.innerHTML='INUT';
            this.t12.innerHTML='';
            this.t13.innerHTML='';
            this.t14.innerHTML='';
          this.y='Current and Voltage';
          this.g.getValues(this.lol,'868997035786613',this.nana,this.nana1).subscribe(data=> {
          this.a=data;
          this.b= this.a.map(obj=>{
            let rObj = {} 
            let r:string=obj.DeviceTimeStamp;
            let n:number = +(r.substring(5,7));
            rObj[0]= r.substring(8,10)+' '+this.month[n -1] +' '+r.substring(0,4)+' '+r.substring(11,16);
            rObj[1]=obj.IL1; 
            rObj[2]=obj.IL2;
            rObj[3]=obj.IL3;
            rObj[4]=obj.VL1;
            rObj[5]=obj.VL2;
            rObj[6]=obj.VL3;
            rObj[7]=obj.VL12;
            rObj[8]=obj.VL23;
            rObj[9]=obj.VL31;
            rObj[10]=obj.AVL;
            rObj[11]=obj.INUT;
            return rObj;
            
          });
          
          console.log(this.b);
          
        
    });
            }
          else if(this.lol == 'Power'){
            this.ww.innerHTML='';
            this.name='Power';
            this.y=this.lol;
            this.t0.innerHTML='Date & Time';
            this.t1.innerHTML='WL1';
            this.t2.innerHTML='WL2';
            this.t3.innerHTML='WL3';
            this.t4.innerHTML='VAL1';
            this.t5.innerHTML='VAL2';
            this.t6.innerHTML='VAL3';
            this.t7.innerHTML='';
            this.t8.innerHTML='';
            this.t9.innerHTML='';
            this.t10.innerHTML='';
            this.t11.innerHTML='';
            this.t12.innerHTML='';
            this.t13.innerHTML='';
            this.t14.innerHTML='';

      
            this.g.getValues(this.lol,'868997035786613',this.nana,this.nana1).subscribe(data=> {
            this.a=data;
            this.b= this.a.map(obj=>{
              let rObj = {} 
              let r:string=obj.DeviceTimeStamp;
              let n:number = +(r.substring(5,7));
              rObj[0]= r.substring(8,10)+' '+this.month[n -1]+' '+r.substring(0,4) +' '+r.substring(11,16);
              rObj[1]= obj.WL1;
              rObj[2]= obj.WL2;
              rObj[3]= obj.WL3;
              rObj[4]= obj.VAL1;
              rObj[5]= obj.VAL2;
              rObj[6]= obj.VAL3;
              return rObj;
              
            });
           
            
            console.log(this.b);
       
          
      });
      
    }
    else if(this.lol=='Power-Factor'){

      this.ww.innerHTML='';
      this.name='PowerwFactor'
      this.y='Power Factor';
      this.t0.innerHTML='Date & Time';
      this.t1.innerHTML='PFL1';
            this.t2.innerHTML='PFL2';
            this.t3.innerHTML='PFL3';
            this.t4.innerHTML='PF';
            this.t5.innerHTML='FRQ';
            this.t6.innerHTML='THDVL1';
            this.t7.innerHTML='THDVL2';
            this.t8.innerHTML='THDVL3';
            this.t9.innerHTML='THDIL1';
            this.t10.innerHTML='THDIL2';
            this.t11.innerHTML='THDIL3';
            this.t12.innerHTML='MDIL1';
            this.t13.innerHTML='MDIL2';
            this.t14.innerHTML='MDIL3';
            this.g.getValues(this.lol,'868997035786613',this.nana,this.nana1).subscribe(data=>{

              this.a=data;
              this.b= this.a.map(obj=>{

                let robj={};
                let r:string=obj.DeviceTimeStamp;
                let n:number = +(r.substring(5,7));
                robj[0]= r.substring(8,10)+' '+this.month[n -1] +' '+r.substring(0,4)+' '+r.substring(11,16);
                robj[1]=obj.PFL1;
                robj[2]=obj.PFL2;
                robj[3]=obj.PFL3;
                robj[4]=obj.Avg_PF;
                robj[5]=obj.FRQ;
                robj[6]=obj.THDVL1;
                robj[7]=obj.THDVL2;
                robj[8]=obj.THDVL3;
                robj[9]=obj.THDIL1;
                robj[10]=obj.THDIL2;
                robj[11]=obj.THDIL3;
                robj[12]=obj.MDIL1;
                robj[13]=obj.MDIL2;
                robj[14]=obj.MDIL3;
                return robj;

              });
              console.log(this.b);
            });
    }
    else if(this.lol=='TotalPower'){

      this.ww.innerHTML='';
      this.name='TotalPower'
      this.y='Total Power';
      this.t0.innerHTML='Date & Time';
      this.t1.innerHTML='KWH';
            this.t2.innerHTML='KVARH';
            this.t3.innerHTML='KW';
            this.t4.innerHTML='KVA';
            this.t5.innerHTML='KVAR';
            this.t6.innerHTML='MPD';
            this.t7.innerHTML='MKVAD';
            this.t8.innerHTML='';
            this.t9.innerHTML='';
            this.t10.innerHTML='';
            this.t11.innerHTML='';
            this.t12.innerHTML='';
            this.t13.innerHTML='';
            this.t14.innerHTML='';
            this.g.getValues(this.lol,'868997035786613',this.nana,this.nana1).subscribe(data=>{

              this.a=data;
              this.b= this.a.map(obj=>{

                let robj={};
                let r:string=obj.DeviceTimeStamp;
                let n:number = +(r.substring(5,7));
                robj[0]= r.substring(8,10)+' '+this.month[n -1] +' '+r.substring(0,4) +' '+r.substring(11,16);
                robj[1]=obj.KWH;
                robj[2]=obj.KVARH;
                robj[3]=obj.KW;
                robj[4]=obj.KVA;
                robj[5]=obj.KVAR;
                robj[6]=obj.MPD;
                robj[7]=obj.MKVAD;
                return robj;

              });
              console.log(this.b);
            });
    }
    else if(this.lol=='overview'){

      this.ww.innerHTML='';
      this.y='Alarm and Trips';
      this.name='AlarmandTrips';
      this.t0.innerHTML='Date & Time';
      this.t1.innerHTML='OTI_A';
            this.t2.innerHTML='WTI_A';
            this.t3.innerHTML='GOR_A';
            this.t4.innerHTML='MOG_A';
            this.t5.innerHTML='OTI_T';
            this.t6.innerHTML='WTI_T';
            this.t7.innerHTML='GOR_T';
            this.t8.innerHTML='SR_T';
            this.t9.innerHTML='PRV_T';
            this.t10.innerHTML='OLTC_SURGE';
            this.t11.innerHTML='OLTC_PRV';
            this.t12.innerHTML='';
            this.t13.innerHTML='';
            this.t14.innerHTML='';
            this.g.getValues(this.lol,'868997035786613',this.nana,this.nana1).subscribe(data=>{
              console.log(data);
              this.a=data;
              this.b= this.a.map(obj=>{

                let robj={};
                let r:string=obj.DeviceTimeStamp;
                let n:number = +(r.substring(5,7));
                robj[0]= r.substring(8,10)+' '+this.month[n -1] +' '+r.substring(11,16);
                robj[1]=obj.OTI_A;
                robj[2]=obj.WTI_A;
                robj[3]=obj.GOR_A;
                robj[4]=obj.MOG_A;
                robj[5]=obj.OTI_T;
                robj[6]=obj.WTI_T;
                robj[7]=obj.GOR_T;
                robj[8]=obj.SR_T;
                robj[9]=obj.PRV_T;
                robj[10]=obj.OLTCSURGE;
                robj[11]=obj.OLTC_PRV;
                return robj;

              });
              console.log(this.b);
            });
    }
  }
}

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
exportexcel(): void 
    {   
      // this._success.next('Download started ');
      this.toastr.info('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Download has Started', '', {
        disableTimeOut: true,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-info alert-with-icon",
        positionClass: 'toast-' + this.from + '-' +this.align
      });
       /* table id is passed over here */   
       let element = document.getElementById('excel-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       this.name=this.name+'.xlsx'
       XLSX.writeFile(wb, this.name);
			
    }
}


