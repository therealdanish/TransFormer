import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { GrrService } from './grr.service';
import 'chartjs-plugin-zoom';


@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent implements OnInit {

  constructor(private f:GrrService) { }

month:string[]= ['January','February','March','April','May','June','July','August','September','October','Novermber','December'];
l=[];
g=[];
j=[];
k=[];
b='';
q;
w1;
w2;
w3;
nana:string='';
nana1:string='';
gan =[];
gang=[new Date('2020-04-01T23:45:05'), new Date('2020-04-01T23:30:04'), new Date('2020-04-01T23:15:05'), new Date("2020-04-01T23:00:05"), new Date("2020-04-01T22:45:05")];
lol:string='';
ww;
ctx;
cta;
myChart:any;
  ngOnInit(): void {

    this.ww=document.getElementById("warn");
    this.cta= document.getElementById('myChart');
    this.ctx=this.cta.getContext("2d");

  }


  gaga1(a:number){
        if(this.nana.localeCompare(this.nana1)==1){
          this.ww.innerHTML='Start Date is greater than End Date';
        }
        else{
             if(this.lol == 'Current'){
           this.ww.innerHTML= '';
           this.b=this.lol;
           this.w1='IL1';
           this.w2='IL2';
           this.w3='IL3';
           this.lol="Current-Voltage"; 
          this.f.getit(this.lol,'868997035786613',this.nana,this.nana1).subscribe(data=>{
                    console.log(data);
                    this.l=data;
                    this.g=this.l.map(obs=>{
                      let robjs={};
                      robjs['x']=new Date(obs.DeviceTimeStamp);
                      robjs['y']= obs.IL1;
                      return robjs;
                    
                    });
                    this.j=this.l.map(obs=>{
                      let rbs={};
                      rbs['x']=new Date(obs.DeviceTimeStamp);
                      rbs['y']=rbs['y']= obs.IL2;
                      return rbs;
                    });
                    this.k=this.l.map(obs=>{
                      let rbs={};
                      rbs['x']=new Date(obs.DeviceTimeStamp);
                      rbs['y']=rbs['y']= obs.IL3;
                      return rbs;
                    });
                    console.log(this.g);
                  });
          }
          else if(this.lol == 'Voltage'){
            this.ww.innerHTML= '';
            this.b=this.lol;
            this.w1='VL1';
           this.w2='VL2';
           this.w3='VL3';
            this.lol="Current-Voltage"; 
           this.f.getit(this.lol,'868997035786613',this.nana,this.nana1).subscribe(data=>{
                     console.log(data);
                     this.l=data;
                     this.g=this.l.map(obs=>{
                       let robjs={};
                       robjs['x']=new Date(obs.DeviceTimeStamp);
                       robjs['y']= obs.VL1;
                       return robjs;
                     
                     });
                     this.j=this.l.map(obs=>{
                       let rbs={};
                       rbs['x']=new Date(obs.DeviceTimeStamp);
                       rbs['y']=rbs['y']= obs.VL2;
                       return rbs;
                     });
                     this.k=this.l.map(obs=>{
                       let rbs={};
                       rbs['x']=new Date(obs.DeviceTimeStamp);
                       rbs['y']= obs.VL3;
                       return rbs;
                     });
                     console.log(this.g);
                     
           });
           }
           else  if(this.lol == 'Temp'){
            this.ww.innerHTML= '';
            this.b='Temperature';
            this.w1='ATI';
           this.w2='OTI';
           this.w3='WTI';
           this.lol="overview"; 
           this.f.getit(this.lol,'868997035786613',this.nana,this.nana1).subscribe(data=>{
                     console.log(data);
                     this.l=data;
                     this.g=this.l.map(obs=>{
                       let robjs={};
                       robjs['x']=new Date(obs.DeviceTimeStamp);
                       robjs['y']= obs.ATI;
                       return robjs;
                     
                     });
                     this.j=this.l.map(obs=>{
                       let rbs={};
                       rbs['x']=new Date(obs.DeviceTimeStamp);
                       rbs['y']= obs.OTI;
                       return rbs;
                     });
                     this.k=this.l.map(obs=>{
                       let rbs={};
                       rbs['x']=new Date(obs.DeviceTimeStamp);
                       rbs['y']= obs.WTI;
                       return rbs;
                     });
                     console.log(this.g);
                     
           });
           }
          
          // console.log(this.gang);
          var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
    gradientStroke.addColorStop(0, 'rgba(233,32,16,0)');

    var gradientStroke2 = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke2.addColorStop(1, 'rgba(29,140,248,0.2)');
    gradientStroke2.addColorStop(0.4, 'rgba(29,140,248,0.0)');
    gradientStroke2.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors

    var gradientStroke3 = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke3.addColorStop(1, 'rgba(66,134,121,0.15)');
    gradientStroke3.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
    gradientStroke3.addColorStop(0, 'rgba(66,134,121,0)'); //green colors
           new Promise(resolve => setTimeout(()=>resolve(), 5000)).then(()=>{
             console.log("fired");
             if(this.myChart){
              this.myChart.destroy();
            }
           
           this.myChart = new Chart(this.ctx, {
            type: 'line',
            data: {
                datasets: [{
                    label: this.w1,
                    data: this.g,
                    backgroundColor: gradientStroke,
                         //'rgba(255, 99, 132,0.2)'
                    //     // 'rgba(54, 162, 235, 0.2)',
                    //     // 'rgba(255, 206, 86, 0.2)',
                    //     // 'rgba(75, 192, 192, 0.2)',
                    //     // 'rgba(153, 102, 255, 0.2)',
                    //     // 'rgba(255, 159, 64, 0.2)'
                    //],
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                     pointBackgroundColor: '#ec250d',
                     pointBorderColor: 'rgba(255,255,255,0)',
                      pointHoverBackgroundColor: '#ec250d',
                     pointBorderWidth: 20,
                     pointHoverRadius: 4,
                     pointHoverBorderWidth: 15,
                     pointRadius: 4,
                    borderColor: [
                        'rgb(255,0,0)',
                        // 'rgba(54, 162, 235, 1)',
                        // 'rgba(255, 206, 86, 1)',
                        // 'rgba(75, 192, 192, 1)',
                        // 'rgba(153, 102, 255, 1)',
                        // 'rgba(255, 159, 64, 1)'
                    ],
                    
                },
                {
                  label: this.w2,
                  data: this.j,
                  backgroundColor: gradientStroke2,
                     //'rgba(54, 162, 235, 0.2)'
                  //     // 'rgba(54, 162, 235, 0.2)',
                  //     // 'rgba(255, 206, 86, 0.2)',
                  //     // 'rgba(75, 192, 192, 0.2)',
                  //     // 'rgba(153, 102, 255, 0.2)',
                  //     // 'rgba(255, 159, 64, 0.2)'
                   
                   pointBackgroundColor: '#0000ff',
                   pointBorderColor: 'rgba(255,255,255,0)',
                   pointHoverBackgroundColor: '#0000ff',
                   pointBorderWidth: 20,
                   pointHoverRadius: 4,
                   pointHoverBorderWidth: 15,
                   pointRadius: 4,
                  borderColor: '#1f8ef1',                      //'rgba(0,0,235)',
                      // 'rgba(54, 162, 235, 1)',
                      // 'rgba(255, 206, 86, 1)',
                      // 'rgba(75, 192, 192, 1)',
                      // 'rgba(153, 102, 255, 1)',
                      // 'rgba(255, 159, 64, 1)'
                  
                  borderWidth: 2
              },
              {
                label: this.w3,
                data: this.k,
                backgroundColor: gradientStroke3,
                   // 'rgb(153, 255, 153,0.2)'
                //     // 'rgba(54, 162, 235, 0.2)',
                //     // 'rgba(255, 206, 86, 0.2)',
                //     // 'rgba(75, 192, 192, 0.2)',
                //     // 'rgba(153, 102, 255, 0.2)',
                //     // 'rgba(255, 159, 64, 0.2)'
                 
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: '#00d6b4',
                pointBorderColor: 'rgba(255,255,255,0)',
                pointHoverBackgroundColor: '#00d6b4',
                pointBorderWidth: 20,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 15,
                pointRadius: 4,
                borderColor: '#00d6b4',
                    // 'rgba(0,200,0)',
                    // 'rgba(54, 162, 235, 1)',
                    // 'rgba(255, 206, 86, 1)',
                    // 'rgba(75, 192, 192, 1)',
                    // 'rgba(153, 102, 255, 1)',
                    // 'rgba(255, 159, 64, 1)'
                
                borderWidth: 2
            }
              ]
            },
            options: {
              tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
              },
                scales: {
                    yAxes:[{
                      ticks: {
                        beginAtZero:true
                    }
                    }],
                    xAxes:[{
                      type: 'time',
                      distribution: 'series'
                    }]
                },
                pan: {
                  enabled: true,
                  mode: 'xy',
                  speed: 10,
                  threshold: 10
                },
                zoom: {
                  enabled: true,
                  mode: 'xy',
                  drag:false,
                  limits: {
                    max: 10,
                    min: 0.5
                  }
                }
            }
        });
      });
        
        
        
      }
        
          }

}
