import { Component,OnInit,ViewEncapsulation } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { Data } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { EmployeeProfileService } from './employee-profile.service';
import { JobseekersData } from '../model/jobseekers-data';
import { State } from '../model/state';
import { CellPhoneProvider } from '../model/cell-phone-provider';
import {MessageService} from 'primeng/api';
import { environment } from '../../environments/environment';
import {SelectItem} from 'primeng/api';
import { OktaAuthService } from '@okta/okta-angular';
import { ActivatedRoute } from '@angular/router';
import { EnterAvailabilityService } from '../enter-availability/enter-availability.service';
import { FacilityRelation } from '../model/facility-relation';
import { Customer } from '../model/customer';

const FAVORITE  = "favorite";
const BANNED = "banned";

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class EmployeeProfileComponent implements OnInit {
    jobForm : FormGroup;
    providers : any[] = [];
    accountTypes : SelectItem[];
    states : SelectItem[];
    yearRange : string;   
    employeeEmail : string;
    usaStates : State[];
    titles: SelectItem[] = [{label:"Select Title", value:""}];
    facilities: SelectItem[] =[];
    today : Date;
    statuses: SelectItem[] =[];
    loggedInUser : string = "";
    favorites : any[];
    banned : any[];
    customers : Map<string,string> = new Map<string,string>();
    constructor(private formBuilder: FormBuilder, private service : EmployeeProfileService, private messageService: MessageService,private oktaAuth: OktaAuthService,private route : ActivatedRoute,private availablility:EnterAvailabilityService) { 
    }
    
    async ngOnInit() {
        console.log('-----------------ngoninit-------------');
      // this.availablility.blockUI(true);
       this.availablility.disableElement(true);
       this.employeeEmail = this.route.snapshot.paramMap.get('email');
       this.today = new Date();
       this.yearRange = (this.today.getFullYear()) + ':' + (this.today.getFullYear() + 30);
       this.getUsaStates();
       this.getProviders();
       this.getAllFacilities();
       this.accountTypes = environment.accountTypes;
        
       this.jobForm =  this.formBuilder.group({

      /*
            lastName : new FormControl('',Validators.required),
            firstName : new FormControl('',Validators.required),
            middleInitial: new FormControl(''),
            address: new FormControl('',Validators.required),
            city: new FormControl('',Validators.required),
            state: new FormControl('',Validators.required),
            zip: new FormControl('',Validators.compose([ Validators.required,Validators.pattern('[0-9]{5}')])),
            homePhone: new FormControl('',Validators.compose([Validators.required, Validators.pattern('[0-9]{3}[-][0-9]{3}[-][0-9]{4}')])),
            cellPhone: new FormControl('',Validators.compose([Validators.required, Validators.pattern('[0-9]{3}[-][0-9]{3}[-][0-9]{4}')])),
            cellPhoneProvider: new FormControl('',Validators.required),
            email: new FormControl({value:'',disabled:true}),
            ssn: new FormControl('',Validators.compose([Validators.pattern('[0-9]{9}')])),
            adult: new FormControl('',Validators.required),
            id : new FormControl('',Validators.required),
            idExpiry: new FormControl('',Validators.required),
            medLicenseNumber: new FormControl('',Validators.required),
            licenseState: new FormControl('',Validators.required),
            medLicenseExpiry: new FormControl('',Validators.required),
            emergencyContact: new FormControl('',Validators.required),
            emergencyPhone: new FormControl('',Validators.compose([Validators.required, Validators.pattern('[0-9]{3}[-][0-9]{3}[-][0-9]{4}')])),
            positions: new FormControl('',Validators.required),
            unavailable: new FormControl(''),
            highSchoolName: new FormControl(''),
            highSchoolAddress: new FormControl(''),
            highSchoolYears: new FormControl(''),
            highSchoolDegree: new FormControl(''),
            collegeName: new FormControl(''),
            collegeAddress: new FormControl(''),
            collegeYears: new FormControl(''),
            collegeDegree: new FormControl(''),
            tradeName: new FormControl(''),
            tradeAddress: new FormControl(''),
            tradeYears: new FormControl(''),
            tradeDegree: new FormControl(''),
            graduateName: new FormControl(''),
            graduateAddress: new FormControl(''),
            graduateYears: new FormControl(''),
            graduateDegree: new FormControl(''),
            refName1:new FormControl('',Validators.required),
            refPosition1: new FormControl('',Validators.required),
            ref1FacilityName: new FormControl('',Validators.required),
            refAddress1: new FormControl('',Validators.required),
            refPhone1: new FormControl('',Validators.compose([Validators.required, Validators.pattern('[0-9]{3}[-][0-9]{3}[-][0-9]{4}')])),
            refName2: new FormControl('',Validators.required),
            refPosition2: new FormControl('',Validators.required),
            ref2FacilityName: new FormControl('',Validators.required),
            refAddress2: new FormControl('',Validators.required),
            refPhone2: new FormControl('',Validators.compose([Validators.required, Validators.pattern('[0-9]{3}[-][0-9]{3}[-][0-9]{4}')])),
            bankName : new FormControl(''),
            bankAddress: new FormControl(''),
            bankCity: new FormControl(''),
            bankState: new FormControl(''),
            bankZip: new FormControl('',Validators.compose([Validators.pattern('[0-9]{5}')])),
            accountType: new FormControl(''),
            accountNumber: new FormControl(''),
            routingNumber: new FormControl(''),
            status : new FormControl(''),
            comments : new FormControl({value:'',disabled:true}),
            commentText : new FormControl(''),
            favorites : new FormControl(''),
            banned : new FormControl(''),
            myComments : new FormControl({value:'',disabled:true}),
            rate : new  FormControl(''),
 
*/
 

lastName : new FormControl('',Validators.required),
firstName : new FormControl('',Validators.required),
middleInitial: new FormControl(''),
address: new FormControl(''),
city: new FormControl('',Validators.required),
state: new FormControl('',Validators.required),
zip: new FormControl('',Validators.compose([ Validators.required,Validators.pattern('[0-9]{5}')])),
homePhone: new FormControl('',Validators.compose([Validators.required, Validators.pattern('[0-9]{3}[-][0-9]{3}[-][0-9]{4}')])),
cellPhone: new FormControl('',Validators.compose([Validators.required, Validators.pattern('[0-9]{3}[-][0-9]{3}[-][0-9]{4}')])),
cellPhoneProvider: new FormControl('',Validators.required),
email: new FormControl({value:'',disabled:true}),
email2: new FormControl({value:'',disabled:false}),

ssn: new FormControl('',Validators.compose([Validators.pattern('[0-9]{9}')])),
adult: new FormControl('',Validators.required),
id : new FormControl(''),
idExpiry: new FormControl(''),
medLicenseNumber: new FormControl(''),
licenseState: new FormControl(''),
medLicenseExpiry: new FormControl(''),
emergencyContact: new FormControl(''),
emergencyPhone: new FormControl('',Validators.compose([Validators.required, Validators.pattern('[0-9]{3}[-][0-9]{3}[-][0-9]{4}')])),
positions: new FormControl(''),
unavailable: new FormControl(''),
highSchoolName: new FormControl(''),
highSchoolAddress: new FormControl(''),
highSchoolYears: new FormControl(''),
highSchoolDegree: new FormControl(''),
collegeName: new FormControl(''),
collegeAddress: new FormControl(''),
collegeYears: new FormControl(''),
collegeDegree: new FormControl(''),
tradeName: new FormControl(''),
tradeAddress: new FormControl(''),
tradeYears: new FormControl(''),
tradeDegree: new FormControl(''),
graduateName: new FormControl(''),
graduateAddress: new FormControl(''),
graduateYears: new FormControl(''),
graduateDegree: new FormControl(''),
refName1:new FormControl(''),
refPosition1: new FormControl(''),
ref1FacilityName: new FormControl(''),
refAddress1: new FormControl(''),
refPhone1: new FormControl('',Validators.compose([  Validators.pattern('[0-9]{3}[-][0-9]{3}[-][0-9]{4}')])),
refName2: new FormControl(''),
refPosition2: new FormControl(''),
ref2FacilityName: new FormControl(''),
refAddress2: new FormControl(''),
refPhone2: new FormControl('',Validators.compose([  Validators.pattern('[0-9]{3}[-][0-9]{3}[-][0-9]{4}')])),
bankName : new FormControl(''),
bankAddress: new FormControl(''),
bankCity: new FormControl(''),
bankState: new FormControl(''),
bankZip: new FormControl('',Validators.compose([Validators.pattern('[0-9]{5}')])),
accountType: new FormControl(''),
accountNumber: new FormControl(''),
routingNumber: new FormControl(''),
status : new FormControl(''),
comments : new FormControl({value:'',disabled:true}),
commentText : new FormControl(''),
favorites : new FormControl(''),
banned : new FormControl(''),
myComments : new FormControl({value:'',disabled:true}),
rate : new  FormControl(''),

 
















            });
           let isAuthenticated = await this.oktaAuth.isAuthenticated();
            if(isAuthenticated){
                  this.oktaAuth.getUser().then(user => {
                    this.loggedInUser  = user.name;
              });
            
           } 
           this.getProfileData();
       
        
    }
   
   getProfileData(){
    console.log('-----------------setformdata-------------');
        this.service.getApplicantData(this.employeeEmail).subscribe(info =>{
           this.getTitleToSetForm(info.state, info.positions);
           
           //Get all statuses from database and then set form data
           this.service.getAllStatuses().subscribe(statuses =>{
               this.statuses = [{label:"Select Status", value:""}];
           statuses.forEach(status =>{
               this.statuses.push({label:status.status, value:status.status});
                });
               this.setFormData(info);
               this.availablility.blockUI(false);
            }); 
            
        },error => {
            this.messageService.add({severity:'error', summary: 'Error', detail:'Profile could not be retrieved please try later!!'});
            this.availablility.blockUI(false);
           });    
   
   } 
    
   onSubmit(){

    console.log('-----------------submit-------------');
        this.availablility.blockUI(true);
        if (this.jobForm.invalid) {
            return;
        }
       
        let jobApp : JobseekersData;
        jobApp = new JobseekersData();
        jobApp.lastName = this.jobForm.value.lastName;
        jobApp.firstName = this.jobForm.value.firstName;
        jobApp.middleInitial= this.jobForm.value.middleInitial;
        jobApp.address= this.jobForm.value.address;
        jobApp.city= this.jobForm.value.city;
        jobApp.state= this.jobForm.value.state;
        jobApp.zip= this.jobForm.value.zip;
        jobApp.homePhone= this.jobForm.value.homePhone;
        jobApp.cellPhone= this.jobForm.value.cellPhone;
        jobApp.cellPhoneProvider = this.jobForm.value.cellPhoneProvider;
        jobApp.email= this.jobForm.getRawValue().email;
        jobApp.email2= this.jobForm.getRawValue().email2;
        
        jobApp.ssn= this.jobForm.value.ssn;
        jobApp.adult= this.jobForm.value.adult;
        jobApp.emergencyContact= this.jobForm.value.emergencyContact;
        jobApp.emergencyPhone= this.jobForm.value.emergencyPhone;
        jobApp.positions= this.jobForm.value.positions;
        jobApp.unavailable= this.jobForm.value.unavailable;
        jobApp.highSchoolName= this.jobForm.value.highSchoolName;
        jobApp.highSchoolAddress= this.jobForm.value.highSchoolAddress;
        jobApp.highSchoolYears= this.jobForm.value.highSchoolYears;
        jobApp.highSchoolDegree= this.jobForm.value.highSchoolDegree;
        jobApp.collegeName= this.jobForm.value.collegeName;
        jobApp.collegeAddress= this.jobForm.value.collegeAddress;
        jobApp.collegeYears= this.jobForm.value.collegeYears;
        jobApp.collegeDegree= this.jobForm.value.collegeDegree;
        jobApp.tradeName= this.jobForm.value.tradeName;
        jobApp.tradeAddress= this.jobForm.value.tradeAddress;
        jobApp.tradeYears= this.jobForm.value.tradeYears;
        jobApp.tradeDegree= this.jobForm.value.tradeDegree;
        jobApp.graduateName= this.jobForm.value.graduateName;
        jobApp.graduateAddress= this.jobForm.value.graduateAddress;
        jobApp.graduateYears= this.jobForm.value.graduateYears;
        jobApp.graduateDegree= this.jobForm.value.graduateDegree;
        jobApp.refName1= this.jobForm.value.refName1;
        jobApp.refPosition1= this.jobForm.value.refPosition1;
        jobApp.ref1FacilityName = this.jobForm.value.ref1FacilityName;
        jobApp.refAddress1= this.jobForm.value.refAddress1;
        jobApp.refPhone1= this.jobForm.value.refPhone1;
        jobApp.refName2= this.jobForm.value.refName2;
        jobApp.refPosition2= this.jobForm.value.refPosition2;
        jobApp.ref2FacilityName =this.jobForm.value.ref2FacilityName;
        jobApp.refAddress2= this.jobForm.value.refAddress2;
        jobApp.refPhone2= this.jobForm.value.refPhone2;
        jobApp.bankName = this.jobForm.value.bankName;
        jobApp.bankAddress= this.jobForm.value.bankAddress;
        jobApp.bankCity= this.jobForm.value.bankCity;
        jobApp.bankState= this.jobForm.value.bankState;
        jobApp.bankZip= this.jobForm.value.bankZip;
        jobApp.accountType= this.jobForm.value.accountType;
        jobApp.accountNumber= this.jobForm.value.accountNumber;
        jobApp.routingNumber= this.jobForm.value.routingNumber;
        jobApp.id = this.jobForm.value.id;
        jobApp.idExpiry= this.setDate(this.jobForm.value.idExpiry);
        jobApp.medLicenseNumber= this.jobForm.value.medLicenseNumber;
        jobApp.licenseState= this.jobForm.value.licenseState;
        jobApp.medLicenseExpiry= this.setDate(this.jobForm.value.medLicenseExpiry);
        jobApp.status = this.jobForm.value.status;
        jobApp.comments = this.setComments();
        jobApp.myComments = this.jobForm.getRawValue().myComments;
        jobApp.rate = this.jobForm.value.rate;
        jobApp.lastUpdatedBy = this.loggedInUser;
        jobApp.relation = [];
        let favorites = this.jobForm.value.favorites;
        favorites.forEach(fav => {
            let relation : FacilityRelation = new FacilityRelation();
            relation.candidateId = this.employeeEmail;
            relation.customerId = fav;
            relation.relation = FAVORITE;
            jobApp.relation.push(relation);
        });
        let banned = this.jobForm.value.banned;
        banned.forEach(ban => {
            let relation : FacilityRelation = new FacilityRelation();
            relation.candidateId = this.employeeEmail;
            relation.customerId = ban;
            relation.relation = BANNED;
            jobApp.relation.push(relation);
        });
        this.service.saveApplication(jobApp).subscribe(data => {
          this.getProfileData();  
          this.availablility.blockUI(false);
          this.messageService.add({severity:'success', summary:'Success', detail:'Profile was successfully updated!!'});  
       }, error => {
           this.availablility.blockUI(false);
           this.messageService.add({severity:'error', summary:'Error', detail:'Application could not be saved'});
       })
   }
    
    setComments(){
        console.log('-----------------set comments-------------');
        let comments : string;
        if(this.jobForm.value.commentText !== ""){
            let timeStamp : Date = new Date();
            let cmntStamp : string = (timeStamp.getMonth()+1)+"-"+timeStamp.getDate()+"-"+timeStamp.getFullYear()+" "+timeStamp.getHours()+":"+timeStamp.getMinutes()+":"+timeStamp.getSeconds()+" ("+this.loggedInUser+") - "+this.jobForm.value.commentText
            if(this.jobForm.getRawValue().comments !== null){
                comments = this.jobForm.getRawValue().comments+"\n"+cmntStamp;
            } else{
                comments = cmntStamp;
            }
                
        } else{
            comments = this.jobForm.getRawValue().comments;
        }   
        return comments; 
    }
    
    setDate(date : any){
        if(date !== ""){
            date = (date.getMonth()+1)+"-"+date.getDate()+"-"+date.getFullYear();
        }
        return date;
    }
    
   //to get easy access to fields
    get jobform() { 
        console.log('-----------------sobform-------------');
        return this.jobForm.controls;
    }

    //Get all cell providers from database
    getProviders(){
        let cellProviders : any[] = [];
        cellProviders.push({label:"Select Provider", value:""});
        this.service.getAllProviders().subscribe(providersList =>{
            providersList.forEach(provider => {
                cellProviders.push({label:provider.providerName, value:provider.providerName});
            })
            this.providers = cellProviders;
        });
    }
    
    //Get all states from database
    getUsaStates(){
        let usaStates : any[] = [];
        usaStates.push({label:"Select State", value:""});
        this.service.getAllUsaStates().subscribe(stateList =>{
            stateList.forEach(state =>{
                usaStates.push({label:state.stateName, value:state.stateCode});
            })
        });
        this.states = usaStates;
    }
    
    //Get titles from database corresponding to the state where the applicant lives
    getTitles(){
        console.log('-----------------gettitle-------------');
        let state = this.jobForm.value.state;
        this.titles = [];
        this.titles = [{label:"Select Title", value:""}];
        if(state !== ""){
            this.service.getTitlesByState(state).subscribe(titles => {
               titles.forEach(title => {
               this.titles.push({label:title.title, value:title.title});
           }); 
        });
        }
    }
    
    //On applicant data retrieval from database set the retrieved title value in dropdown
    getTitleToSetForm(state:string,position:string){
        this.titles = [];
        this.service.getTitlesByState(state).subscribe(titles => {
            titles.forEach(title=> {
                    if(title.title === position){
                       this.titles = [{label:title.title, value:title.title}]; 
                    }
                });
            this.titles.push({label:"Select Title", value:""});
            titles.forEach(title => {
                
                if(title.title !== position){
                       this.titles.push({label:title.title, value:title.title}); 
                    }
            });
        });
        
    }
    
    cancel(){
        console.log('-----------------cancel-------------');
       this.availablility.disableElement(false); 
    }
    
    
    //Set form data that is retrieved from database
    setFormData(data : JobseekersData){
        console.log('-----------------setformdata-------------');
        let idExpiry: Date;
        if(data.idExpiry !=  null){
            idExpiry = new Date(data.idExpiry);
        }
        let medLicenseExpiry :Date;
        if(data.medLicenseExpiry !=null){
            medLicenseExpiry = new Date(data.medLicenseExpiry);
        }
        this.favorites = [];
        let favs : any[] =[];
        data.relation.filter(rel => rel.relation == FAVORITE).forEach(relation =>{
            favs.push(relation.customerId);
            this.favorites.push(this.customers.get(relation.customerId));
        });
        this.banned =[];
        let ban : any[] =[];
        data.relation.filter(rel => rel.relation == BANNED).forEach(relation =>{
            ban.push(relation.customerId);
            this.banned.push(this.customers.get(relation.customerId));
        });
        this.jobForm.patchValue({lastName:data.lastName,
            firstName:data.firstName,
            middleInitial: data.middleInitial,
            address: data.address,
            city: data.city,
            state: data.state,
            zip: data.zip,
            homePhone: data.homePhone,
            cellPhone: data.cellPhone,
            cellPhoneProvider: data.cellPhoneProvider,
            ssn: data.ssn,
  //          ssn: " ",
            adult: data.adult,
            id : data.id,
            idExpiry: idExpiry,
            email:data.email,
            email2:data.email2,
            
            medLicenseNumber: data.medLicenseNumber,
            licenseState: data.licenseState,
            medLicenseExpiry: medLicenseExpiry,
            emergencyContact: data.emergencyContact,
            emergencyPhone: data.emergencyPhone,
            positions: data.positions,
            unavailable: data.unavailable,
            highSchoolName: data.highSchoolName,
            highSchoolAddress: data.highSchoolAddress,
            highSchoolYears: data.highSchoolYears,
            highSchoolDegree: data.highSchoolDegree,
            collegeName: data.collegeName,
            collegeAddress: data.collegeAddress,
            collegeYears: data.collegeYears,
            collegeDegree: data.collegeDegree,
            tradeName: data.tradeName,
            tradeAddress:data.tradeAddress,
            tradeYears: data.tradeYears,
            tradeDegree: data.tradeDegree,
            graduateName: data.graduateName,
            graduateAddress: data.graduateAddress,
            graduateYears: data.graduateYears,
            graduateDegree: data.graduateDegree,
            refName1:data.refName1,
            refPosition1: data.refPosition1,
            ref1FacilityName: data.ref1FacilityName,
            refAddress1: data.refAddress1,
            refPhone1: data.refPhone1,
            refName2: data.refName2,
            refPosition2: data.refPosition2,
            ref2FacilityName: data.ref2FacilityName,
            refAddress2: data.refAddress2,
            refPhone2: data.refPhone2,
            bankName : data.bankName,
            bankAddress: data.bankAddress,
            bankCity: data.bankCity,
            bankState: data.bankState,
            bankZip: data.bankZip,
            accountType: data.accountType,
            accountNumber: data.accountNumber,
            routingNumber: data.routingNumber,
            status:data.status,
            comments : data.comments,
            commentText:"",
            myComments:data.myComments,
            rate:data.rate,
            favorites:favs,
            banned:ban
        });
    }
    
    getAllFacilities(){
        console.log('-----------------getAllfacilities-------------');
       this.service.getAllCustomers().subscribe(customers => {
            customers.forEach(customer => {
                this.facilities.push({label:customer.lastName, value:customer.facilityName});
                this.customers.set(customer.facilityName, customer.lastName);
            });
            
       });  
        
    }
    
}
