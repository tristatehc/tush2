package com.tristatehc.dto;

import java.util.List;

import com.tristatehc.entity.FacilityRelation;

public class JobseekerDTO {
	
	private String lastName ;
	private String firstName ;
	private String middleInitial;
	private String address;
	private String city;
	private String state;
	private String zip;
	private String homePhone;
	private String cellPhone;
	private String cellPhoneProvider;
	private String email;
	private String email2;
	
	private String ssn;
	private String adult;
	private String emergencyContact;
	private String emergencyPhone;
	private String positions;
	private String unavailable;
	private String highSchoolName;
	private String highSchoolAddress;
	private int highSchoolYears;
	private String highSchoolDegree;
	private String collegeName;
	private String collegeAddress;
	private int collegeYears;
	private String collegeDegree;
	private String tradeName;
	private String tradeAddress;
	private int tradeYears;
	private String tradeDegree;
	private String graduateName;
	private String graduateAddress;
	private int graduateYears;
	private String graduateDegree;
	private String refName1;
	private String refPosition1;
	private String ref1FacilityName;
	private String ref2FacilityName;
	private String refAddress1;
	private String refPhone1;
	private String refName2;
	private String refPosition2;
	private String refAddress2;
	private String refPhone2;
	private String bankName ;
	private String bankAddress;
	private String bankCity;
	private String bankState;
	private String bankZip;
	private String accountType;
	private String accountNumber;
	private String routingNumber;
	private String id ;
	private String idExpiry;
	private String medLicenseNumber;
	private String licenseState;
	private String medLicenseExpiry;
	private String status;
	private String comments;
	private String myComments;
	private double rate;
	private String lastUpdatedBy;
	private List<FacilityRelation> relation;
	
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getMiddleInitial() {
		return middleInitial;
	}
	public void setMiddleInitial(String middleInitial) {
		this.middleInitial = middleInitial;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getZip() {
		return zip;
	}
	public void setZip(String zip) {
		this.zip = zip;
	}
	public String getHomePhone() {
		return homePhone;
	}
	public void setHomePhone(String homePhone) {
		this.homePhone = homePhone;
	}
	public String getCellPhone() {
		return cellPhone;
	}
	public void setCellPhone(String cellPhone) {
		this.cellPhone = cellPhone;
	}
	
	public String getEmail2() {
		return email2;
	}
	public void setEmail2(String email2) {
		this.email2 = email2;
	}
	
	
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	
	
	
	public String getSsn() {
		return ssn;
	}
	public void setSsn(String ssn) {
		this.ssn = ssn;
	}
	public String getEmergencyContact() {
		return emergencyContact;
	}
	public void setEmergencyContact(String emergencyContact) {
		this.emergencyContact = emergencyContact;
	}
	public String getEmergencyPhone() {
		return emergencyPhone;
	}
	public void setEmergencyPhone(String emergencyPhone) {
		this.emergencyPhone = emergencyPhone;
	}
	public String getPositions() {
		return positions;
	}
	public void setPositions(String positions) {
		this.positions = positions;
	}
	public String getUnavailable() {
		return unavailable;
	}
	public void setUnavailable(String unavailable) {
		this.unavailable = unavailable;
	}
	public String getHighSchoolName() {
		return highSchoolName;
	}
	public void setHighSchoolName(String highSchoolName) {
		this.highSchoolName = highSchoolName;
	}
	public String getHighSchoolAddress() {
		return highSchoolAddress;
	}
	public void setHighSchoolAddress(String highSchoolAddress) {
		this.highSchoolAddress = highSchoolAddress;
	}
	public int getHighSchoolYears() {
		return highSchoolYears;
	}
	public void setHighSchoolYears(int highSchoolYears) {
		this.highSchoolYears = highSchoolYears;
	}
	public String getHighSchoolDegree() {
		return highSchoolDegree;
	}
	public void setHighSchoolDegree(String highSchoolDegree) {
		this.highSchoolDegree = highSchoolDegree;
	}
	public String getCollegeName() {
		return collegeName;
	}
	public void setCollegeName(String collegeName) {
		this.collegeName = collegeName;
	}
	public String getCollegeAddress() {
		return collegeAddress;
	}
	public void setCollegeAddress(String collegeAddress) {
		this.collegeAddress = collegeAddress;
	}
	public int getCollegeYears() {
		return collegeYears;
	}
	public void setCollegeYears(int collegeYears) {
		this.collegeYears = collegeYears;
	}
	public String getCollegeDegree() {
		return collegeDegree;
	}
	public void setCollegeDegree(String collegeDegree) {
		this.collegeDegree = collegeDegree;
	}
	public String getTradeName() {
		return tradeName;
	}
	public void setTradeName(String tradeName) {
		this.tradeName = tradeName;
	}
	public String getTradeAddress() {
		return tradeAddress;
	}
	public void setTradeAddress(String tradeAddress) {
		this.tradeAddress = tradeAddress;
	}
	public int getTradeYears() {
		return tradeYears;
	}
	public void setTradeYears(int tradeYears) {
		this.tradeYears = tradeYears;
	}
	public String getTradeDegree() {
		return tradeDegree;
	}
	public void setTradeDegree(String tradeDegree) {
		this.tradeDegree = tradeDegree;
	}
	public String getGraduateName() {
		return graduateName;
	}
	public void setGraduateName(String graduateName) {
		this.graduateName = graduateName;
	}
	public String getGraduateAddress() {
		return graduateAddress;
	}
	public void setGraduateAddress(String graduateAddress) {
		this.graduateAddress = graduateAddress;
	}
	public int getGraduateYears() {
		return graduateYears;
	}
	public void setGraduateYears(int graduateYears) {
		this.graduateYears = graduateYears;
	}
	public String getGraduateDegree() {
		return graduateDegree;
	}
	public void setGraduateDegree(String graduateDegree) {
		this.graduateDegree = graduateDegree;
	}
	public String getRefName1() {
		return refName1;
	}
	public void setRefName1(String refName1) {
		this.refName1 = refName1;
	}
	public String getRefPosition1() {
		return refPosition1;
	}
	public void setRefPosition1(String refPosition1) {
		this.refPosition1 = refPosition1;
	}
	public String getRefAddress1() {
		return refAddress1;
	}
	public void setRefAddress1(String refAddress1) {
		this.refAddress1 = refAddress1;
	}
	public String getRefPhone1() {
		return refPhone1;
	}
	public void setRefPhone1(String refPhone1) {
		this.refPhone1 = refPhone1;
	}
	public String getRefName2() {
		return refName2;
	}
	public void setRefName2(String refName2) {
		this.refName2 = refName2;
	}
	public String getRefPosition2() {
		return refPosition2;
	}
	public void setRefPosition2(String refPosition2) {
		this.refPosition2 = refPosition2;
	}
	public String getRefAddress2() {
		return refAddress2;
	}
	public void setRefAddress2(String refAddress2) {
		this.refAddress2 = refAddress2;
	}
	public String getRefPhone2() {
		return refPhone2;
	}
	public void setRefPhone2(String refPhone2) {
		this.refPhone2 = refPhone2;
	}
	public String getCellPhoneProvider() {
		return cellPhoneProvider;
	}
	public void setCellPhoneProvider(String cellPhoneProvider) {
		this.cellPhoneProvider = cellPhoneProvider;
	}
	
	public String getBankName() {
		return bankName;
	}
	public void setBankName(String bankName) {
		this.bankName = bankName;
	}
	public String getBankAddress() {
		return bankAddress;
	}
	public void setBankAddress(String bankAddress) {
		this.bankAddress = bankAddress;
	}
	public String getBankCity() {
		return bankCity;
	}
	public void setBankCity(String bankCity) {
		this.bankCity = bankCity;
	}
	public String getBankState() {
		return bankState;
	}
	public void setBankState(String bankState) {
		this.bankState = bankState;
	}
	public String getBankZip() {
		return bankZip;
	}
	public void setBankZip(String bankZip) {
		this.bankZip = bankZip;
	}
	public String getAccountType() {
		return accountType;
	}
	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}
	public String getAccountNumber() {
		return accountNumber;
	}
	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}
	public String getRoutingNumber() {
		return routingNumber;
	}
	public void setRoutingNumber(String routingNumber) {
		this.routingNumber = routingNumber;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getIdExpiry() {
		return idExpiry;
	}
	public void setIdExpiry(String idExpiry) {
		this.idExpiry = idExpiry;
	}
	public String getMedLicenseNumber() {
		return medLicenseNumber;
	}
	public void setMedLicenseNumber(String medLicenseNumber) {
		this.medLicenseNumber = medLicenseNumber;
	}
	public String getLicenseState() {
		return licenseState;
	}
	public void setLicenseState(String licenseState) {
		this.licenseState = licenseState;
	}
	public String getMedLicenseExpiry() {
		return medLicenseExpiry;
	}
	public void setMedLicenseExpiry(String medLicenseExpiry) {
		this.medLicenseExpiry = medLicenseExpiry;
	}
	public String getAdult() {
		return adult;
	}
	public void setAdult(String adult) {
		this.adult = adult;
	}
	public String getRef1FacilityName() {
		return ref1FacilityName;
	}
	public void setRef1FacilityName(String ref1FacilityName) {
		this.ref1FacilityName = ref1FacilityName;
	}
	public String getRef2FacilityName() {
		return ref2FacilityName;
	}
	public void setRef2FacilityName(String ref2FacilityName) {
		this.ref2FacilityName = ref2FacilityName;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getComments() {
		return comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	}
	public String getMyComments() {
		return myComments;
	}
	public void setMyComments(String myComments) {
		this.myComments = myComments;
	}
	public double getRate() {
		return rate;
	}
	public void setRate(double rate) {
		this.rate = rate;
	}
	public String getLastUpdatedBy() {
		return lastUpdatedBy;
	}
	public void setLastUpdatedBy(String lastUpdatedBy) {
		this.lastUpdatedBy = lastUpdatedBy;
	}
	public List<FacilityRelation> getRelation() {
		return relation;
	}
	public void setRelation(List<FacilityRelation> relation) {
		this.relation = relation;
	}
	@Override
	public String toString() {
		return "JobseekerDTO [" + (lastName != null ? "lastName=" + lastName + ", " : "")
				+ (firstName != null ? "firstName=" + firstName + ", " : "")
				+ (middleInitial != null ? "middleInitial=" + middleInitial + ", " : "")
				+ (address != null ? "address=" + address + ", " : "") + (city != null ? "city=" + city + ", " : "")
				+ (state != null ? "state=" + state + ", " : "") + (zip != null ? "zip=" + zip + ", " : "")
				+ (homePhone != null ? "homePhone=" + homePhone + ", " : "")
				+ (cellPhone != null ? "cellPhone=" + cellPhone + ", " : "")
				+ (cellPhoneProvider != null ? "cellPhoneProvider=" + cellPhoneProvider + ", " : "")
				+ (email != null ? "email=" + email + ", " : "") 
				+ (email2 != null ? "email2=" + email2 + ", " : "") 
				+ (ssn != null ? "ssn=" + ssn + ", " : "")
				+ (adult != null ? "adult=" + adult + ", " : "")
				+ (emergencyContact != null ? "emergencyContact=" + emergencyContact + ", " : "")
				+ (emergencyPhone != null ? "emergencyPhone=" + emergencyPhone + ", " : "")
				+ (positions != null ? "positions=" + positions + ", " : "")
				+ (unavailable != null ? "unavailable=" + unavailable + ", " : "")
				+ (highSchoolName != null ? "highSchoolName=" + highSchoolName + ", " : "")
				+ (highSchoolAddress != null ? "highSchoolAddress=" + highSchoolAddress + ", " : "")
				+ "highSchoolYears=" + highSchoolYears + ", "
				+ (highSchoolDegree != null ? "highSchoolDegree=" + highSchoolDegree + ", " : "")
				+ (collegeName != null ? "collegeName=" + collegeName + ", " : "")
				+ (collegeAddress != null ? "collegeAddress=" + collegeAddress + ", " : "") + "collegeYears="
				+ collegeYears + ", " + (collegeDegree != null ? "collegeDegree=" + collegeDegree + ", " : "")
				+ (tradeName != null ? "tradeName=" + tradeName + ", " : "")
				+ (tradeAddress != null ? "tradeAddress=" + tradeAddress + ", " : "") + "tradeYears=" + tradeYears
				+ ", " + (tradeDegree != null ? "tradeDegree=" + tradeDegree + ", " : "")
				+ (graduateName != null ? "graduateName=" + graduateName + ", " : "")
				+ (graduateAddress != null ? "graduateAddress=" + graduateAddress + ", " : "") + "graduateYears="
				+ graduateYears + ", " + (graduateDegree != null ? "graduateDegree=" + graduateDegree + ", " : "")
				+ (refName1 != null ? "refName1=" + refName1 + ", " : "")
				+ (refPosition1 != null ? "refPosition1=" + refPosition1 + ", " : "")
				+ (ref1FacilityName != null ? "ref1FacilityName=" + ref1FacilityName + ", " : "")
				+ (ref2FacilityName != null ? "ref2FacilityName=" + ref2FacilityName + ", " : "")
				+ (refAddress1 != null ? "refAddress1=" + refAddress1 + ", " : "")
				+ (refPhone1 != null ? "refPhone1=" + refPhone1 + ", " : "")
				+ (refName2 != null ? "refName2=" + refName2 + ", " : "")
				+ (refPosition2 != null ? "refPosition2=" + refPosition2 + ", " : "")
				+ (refAddress2 != null ? "refAddress2=" + refAddress2 + ", " : "")
				+ (refPhone2 != null ? "refPhone2=" + refPhone2 + ", " : "")
				+ (bankName != null ? "bankName=" + bankName + ", " : "")
				+ (bankAddress != null ? "bankAddress=" + bankAddress + ", " : "")
				+ (bankCity != null ? "bankCity=" + bankCity + ", " : "")
				+ (bankState != null ? "bankState=" + bankState + ", " : "")
				+ (bankZip != null ? "bankZip=" + bankZip + ", " : "")
				+ (accountType != null ? "accountType=" + accountType + ", " : "")
				+ (accountNumber != null ? "accountNumber=" + accountNumber + ", " : "")
				+ (routingNumber != null ? "routingNumber=" + routingNumber + ", " : "")
				+ (id != null ? "id=" + id + ", " : "") + (idExpiry != null ? "idExpiry=" + idExpiry + ", " : "")
				+ (medLicenseNumber != null ? "medLicenseNumber=" + medLicenseNumber + ", " : "")
				+ (licenseState != null ? "licenseState=" + licenseState + ", " : "")
				+ (medLicenseExpiry != null ? "medLicenseExpiry=" + medLicenseExpiry + ", " : "")
				+ (status != null ? "status=" + status + ", " : "")
				+ (comments != null ? "comments=" + comments + ", " : "")
				+ (myComments != null ? "myComments=" + myComments + ", " : "") + "rate=" + rate + ", "
				+ (lastUpdatedBy != null ? "lastUpdatedBy=" + lastUpdatedBy + ", " : "")
				+ (relation != null ? "relation=" + relation : "") + "]";
	}
	
				
}
