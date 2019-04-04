import { Component, OnInit} from '@angular/core';
import {EnterAvailabilityService} from './enter-availability.service';
import {MessageService} from 'primeng/api';
import { OktaAuthService } from '@okta/okta-angular';

const CUSTOMER = "customer";
const NEW_EMPLOYEE = "newEmployee";

@Component({
  selector: 'app-enter-availability',
  templateUrl: './enter-availability.component.html',
  styleUrls: ['./enter-availability.component.css'],
  providers:[EnterAvailabilityService,MessageService]
})
export class EnterAvailabilityComponent implements OnInit {
    
    employees : any[];
    cols : any[];
    isEmployeeSelected : boolean = false;
    isCustomerSelected : boolean = false;
    isNewEmployeeSelected : boolean = false;
    isRadioButtonDisabled : boolean = false;
    selectedValue : string;
    namesList : any[];
    isDisabled : boolean = false;
    blocked : boolean;
    isAuthenticated: boolean;
    email: string;
   
    constructor(private oktaAuth: OktaAuthService,private service : EnterAvailabilityService, private messageService: MessageService) {
        this.service.isDisabled.subscribe(isDisabled =>{
            this.isDisabled = isDisabled;
        });
        this.service.isBlocked.subscribe(isBlocked => {
            this.blocked = isBlocked;
        })
    
    }
   async  ngOnInit() {
        this.cols = [
            { field: 'fname',  header: 'Search' },
            { field: 'lname',  header: 'Search' },
            { field: 'lastName'},
            { field: 'facCity'},
            { field: 'facState'},
            { field: 'firstName'},
            { field: 'lastName'}
        ];
        this.isAuthenticated = await this.oktaAuth.isAuthenticated();
        if(this.isAuthenticated){
            
            this.oktaAuth.getUser().then(user => {
              this.email = user.preferred_username;
            //  this.getAvailabilities(this.email);
        });
        
        }
       

    }
    

    /**
     * Get either list of customers or employees
     *
     */
        getList(){
            this.blocked = true;
            this.namesList = [];
            let userList : any[] = [];
            if(this.selectedValue  === CUSTOMER){
                this.service.getAllCustomers(this.email).subscribe(customers => {
                    customers.forEach(customer => userList.push(customer));
                    this.namesList = userList;
                    this.blocked = false;
                },error =>{
                    this.messageService.add({severity:'error', summary: 'Error', detail:'Customers could not be retrieved please try later!!'});
                    this.blocked = false;
                });
                this.isCustomerSelected = true;
                this.isNewEmployeeSelected = false;
                this.isEmployeeSelected = false;
            }else if(this.selectedValue === NEW_EMPLOYEE){
                this.service.getAllNewEmployees().subscribe(newEmps =>{
                    newEmps.forEach(emp => userList.push(emp));
                    this.namesList = userList;
                    this.blocked = false;
                },error =>{
                    this.messageService.add({severity:'error', summary: 'Error', detail:'Employees could not be retrieved please try later!!'});
                    this.blocked = false;
                });
                this.isNewEmployeeSelected = true;
                this.isCustomerSelected = false;
                this.isEmployeeSelected = false;
            } else{
                this.service.getAllEmployees().subscribe(users => {
                    users.forEach(user => userList.push(user));
                    this.namesList = userList;
                    this.blocked = false;
                },error =>{
                    this.messageService.add({severity:'error', summary: 'Error', detail:'Employees could not be retrieved please try later!!'});
                    this.blocked = false;
                });
                this.isEmployeeSelected = true;
                this.isCustomerSelected = false;
                this.isNewEmployeeSelected = false;
            }
        
        }
    
        
}
