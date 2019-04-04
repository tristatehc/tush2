import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { UserProfile } from '../model/user-profile';
import { environment } from '../../environments/environment';
import { Customer } from '../model/customer';
import { JobseekersData } from '../model/jobseekers-data';

@Injectable({
  providedIn: 'root'
})
export class EnterAvailabilityService {
    
      isDisabledSource = new Subject<boolean>();
      isBlockedSource = new Subject<boolean>();
    
      isDisabled = this.isDisabledSource.asObservable();
      isBlocked = this.isBlockedSource.asObservable();
  
    constructor(private http: HttpClient) { }

       
    disableElement(isDisabled : boolean){
        this.isDisabledSource.next(isDisabled);        
    }
    
    blockUI(isBlocked :boolean){
        this.isBlockedSource.next(isBlocked);
    }
    
    
    /**
     * Get all employees
     */
    getAllEmployees(){
        return this.http.get<UserProfile[]>(environment.resourceServerUrl+environment.userUrl);
    }
    
    /**
     * Get all customers
     */
    getAllCustomers(email: string){
        console.log(" Get all Customer enter-availability.service.tst...........0000000000000----->",environment.resourceServerUrl+environment.customerUrl);
        return this.http.get<Customer[]>(environment.resourceServerUrl+environment.customerUrl+email);
      //  return this.http.get<Customer[]>(environment.resourceServerUrl+environment.customerUrl);
    }
    
    /**
     * Get all new employees
     */
    getAllNewEmployees(){
        return this.http.get<JobseekersData[]>(environment.resourceServerUrl+environment.jobseekerUrl);
    }
    
}
