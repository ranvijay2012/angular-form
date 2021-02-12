export class Emp {

    empid: number;
    empname: string;
    password: string;
    empemail: string;

    constructor(empid: number,
        empname: string,
        password: string,
        empemail: string) {
        this.empid = empid;
        this.empname = empname;
        this.password = password;
        this.empemail = empemail;
    }
    
}
