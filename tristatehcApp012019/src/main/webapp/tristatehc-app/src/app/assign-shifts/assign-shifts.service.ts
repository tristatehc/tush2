import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { AssignShift } from '../model/assign-shift';
import { AssignShiftReq } from '../model/assignshift-req';
import { CreateAssignShiftReq } from '../model/create-assign-shift';


@Injectable({
  providedIn: 'root'
})
export class AssignShiftsService {

  constructor(private http: HttpClient) { }
    
    
  
      
    /**
     * Get all assigned shifts
     */
    getAllAssignedShifts(assignShiftRequest:AssignShiftReq){
     console.log("22222222222221111111111000000000000000newAssignShift--------------->",assignShiftRequest);

         return this.http.post<AssignShift[]>(environment.resourceServerUrl+environment.assignShiftUrl,assignShiftRequest); 
    }
    
    /**
     * Get new value for assigned shift
     */
    getNewAssignedShiftValue(assignShiftRequest:AssignShiftReq){
     console.log("1111111111000000000000000newAssignShift--------------->",assignShiftRequest);

         return this.http.post<AssignShift>(environment.resourceServerUrl+environment.newValueForassignShift,assignShiftRequest); 
    }
    
    /**
     * Get all assigned shifts
     */
    newAssignment(newAssignShift:CreateAssignShiftReq){
         console.log("000000000000000newAssignShift--------------->",newAssignShift);
        
         return this.http.post<AssignShift[]>(environment.resourceServerUrl+environment.createAssignShift,newAssignShift); 
    }
    
}
