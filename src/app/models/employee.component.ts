export class Employee {

    

      public employeeId : string;
      public jobTitleName : string;
      public firstName : string;
      public lastName : string;
      public emailAddress : string;
  
    constructor(employeeId : string, jobTitleName : string, firstName : string, lastName : string, emailAddress : string) { 
      this.employeeId = employeeId;
      this.jobTitleName = jobTitleName;
      this.firstName = firstName;
      this.lastName = lastName;
      this.emailAddress = emailAddress;
    }
  }