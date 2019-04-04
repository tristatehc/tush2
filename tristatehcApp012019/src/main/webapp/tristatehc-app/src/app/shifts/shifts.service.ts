import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Message} from '../model/message';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShiftsService {
        
    //messages:Map<string,string> = new Map<string,string>();
    selectedShifts: string[];
    comments : Map<string,string> = new Map<string,string>();
    messages : Map<string,string> = new Map<string,string>();
    

    constructor(private http: HttpClient) {  }
    
    getMessages(email:string){
        console.log("kkkkkkkkkkk---------get message",email);
        console.log("link---------get message",environment.resourceServerUrl+environment.myshiftUrl + email);
       //return this.http.get<Message[]>(environment.resourceServerUrl+environment.myshiftUrl + email);
        //TODO remove hardcoded values
        this.messages.set("11/08/2018","No messages to perform action");
        this.messages.set("11/08/2018","No messages to perform action");
        this.messages.set("11/08/2018","No messages to perform action");
        
        this.messages.set("08/08/2018","Confirm");
        //this.messages.set("08/08/2018:3-11","Confirm");
        this.messages.set("08/08/2018","Confirm");
        //this.messages.set("27/08/2018:7-3","Confirm");
        //this.messages.set("27/08/2018:3-11","Confirm");
        this.messages.set("12/08/2018","Confirm");
        //this.messages.set("27/08/2018:11-7","Confirm"); 
        return this.messages;
    }

    /**
     * Method to get all the shifts for which the staff member is available
     */
    getSelectedShifts(email:string){
        this.selectedShifts = ['11/08/2018:7-3','11/08/2018:3-11','11/08/2018:11-7','21/08/2018:7-3','21/08/2018:3-11','22/08/2018:3-11','21/08/2018:11-7'];
        return this.selectedShifts;
    }
    
    getComments(email :string){
        this.comments.set("11/08/2018","have a nice day"); 
        this.comments.set("21/08/2018","goodbye");
        return this.comments; 
    }
}
