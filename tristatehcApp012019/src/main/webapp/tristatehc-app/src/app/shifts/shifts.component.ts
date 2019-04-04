import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {ShiftsService} from './shifts.service';
import { OktaAuthService } from '@okta/okta-angular';
import { Router} from '@angular/router';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShiftsComponent implements OnInit {
    
        
    selectedShifts : string[] = [];
    comments : Map<string,string> = new Map<string,string>();
    darkBlueLabel : Map<string,string> = new Map<string,string>();
    skyBlueLabel : Map<string,string> = new Map<string,string>();
    grayLabel : Map<string,string> = new Map<string,string>();
    greenLabel : Map<string,string> = new Map<string,string>();
    orangeLabel : Map<string,string> = new Map<string,string>();
    redLabel : Map<string,string> = new Map<string,string>();
    
    view: string = 'month';
    messages:Map<string,string> = new Map<string,string>();
    viewDate: Date = new Date();
    email:string;
    loadComponent : boolean = false;

    constructor(private shifts : ShiftsService, private oktaAuth : OktaAuthService, private router : Router) {  
      this.oktaAuth.getUser().then(user => {
          console.log('dd--inconsutrucor----------------------',user.preferred_username);
         
           this.email = user.preferred_username; 
           
         //  this.getAvailabilities(this.email);
         });

     }   
    
    async ngOnInit() {
      
      this.oktaAuth.getUser().then(user => {
     /*  
        console.log('dd------------------------',user.email);
        console.log('dd------------------------',user.email_verified);
        console.log('dd------------------------',user.auth_time);
        console.log('dd------------------------',user.family_name);
        console.log('dd------------------------',user.family_name);
        console.log('dd------------------------',user.family_name);
        console.log('dd------------------------',user.family_name);
        console.log('dd------------------------',user.given_name);
        console.log('dd------------------------',user.given_name);
      */ 
      console.log('dd------------------------',user.preferred_username);
      
        this.email = user.preferred_username; 
        
      //  this.getAvailabilities(this.email);
      });
      console.log('dd-ee-----------------------',this.email);
      
      //  this.oktaAuth.getUser().then(user => {this.email = user.email;
    //       this.messages = this.shifts.getMessages(this.email); 
    //       this.selectedShifts = this.shifts.getSelectedShifts(this.email); 
     //      this.comments = this.shifts.getComments(this.email); 
        //});
          
        console.log("-------------this.message[0] and 1------>",this.messages.size);

      //  this.grayLabel.set(this.messages[0],this.messages[1]);

        this.messages.forEach((value: string, key: string) => {
          console.log('key-->',key,'value-->', value);
          this.grayLabel.set(key,value);
    
        });
    
    
       // this..set("yoyoy",this.map1);
        /*
        this.grayLabel.set("10/28/2018","todays 10/28/2018");
          this.darkBlueLabel.set("10/28/2018","today 10/28/2018 ");
          this.skyBlueLabel.set("10/28/2018","today 10/28/2018 ");
          this.greenLabel.set("10/28/2018","today 10/28/2018");
          this.orangeLabel.set("10/28/2018","today 10/28/2018");
         this.redLabel.set("10/28/2018","today 10/28/2018");
        */
        
        /*
        // this.grayLabel.set("10/19/2018","todays 10/19/2018");
          this.darkBlueLabel.set("10/19/2018","today 10/19/2018");
        //  this.skyBlueLabel.set("10/19/2018","today 10/19/2018");
          this.greenLabel.set("10/19/2018","today 10/19/2018");
          this.orangeLabel.set("10/19/2018","today 10/19/2018");
         this.redLabel.set("10/19/2018","today 10/19/2018");
        
         this.grayLabel.set("10/11/2018","todays 10/11/2018");
          this.darkBlueLabel.set("10/11/2018","today 10/11/2018");
          this.skyBlueLabel.set("10/11/2018","today 10/11/2018");
          this.greenLabel.set("10/11/2018","today 10/11/2018");
          this.orangeLabel.set("10/11/2018","today 10/11/2018");
         this.redLabel.set("10/11/2018","today 10/11/2018");
        
         this.grayLabel.set("10/23/2018","todays grayLabel");
          this.darkBlueLabel.set("10/23/2018","today darkBlueLabel");
          this.skyBlueLabel.set("10/23/2018","today skyBlueLabel");
          this.greenLabel.set("10/23/2018","today greenLabel");
          this.orangeLabel.set("10/23/2018","today orangeLabel");
         this.redLabel.set("10/23/2018","today redLabel");
        
         this.grayLabel.set("02/14/2019","todays grayLabel");
          this.darkBlueLabel.set("02/14/2019","today darkBlueLabel");
          this.skyBlueLabel.set("02/14/2019","today skyBlueLabel");
          this.greenLabel.set("02/14/2019","today greenLabel");
          this.orangeLabel.set("02/14/2019","today orangeLabel");
         this.redLabel.set("02/14/2019","today redLabel");
         */
   
        this.getshifts(this.email);
        }
    
    
    getshifts(emails : String){

   console.log('email----------->',emails);
   // this.oktaAuth.getUser().then(user => {this.email = user.email;
      this.messages = this.shifts.getMessages(this.email); 
      this.selectedShifts = this.shifts.getSelectedShifts(this.email); 
      this.comments = this.shifts.getComments(this.email); 
  // });
     
   console.log("-------------get okta user------>",this.email);

 //  this.grayLabel.set(this.messages[0],this.messages[1]);

   this.messages.forEach((value: string, key: string) => {
     console.log(key, value);

   });
  }
    getShiftDetails(){
      console.log("get shift detail()");
        this.router.navigate(['/myshifts/shiftdetails']);
    }
    


}
