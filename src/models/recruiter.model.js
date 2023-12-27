
export default class RecruiterModel{
    constructor(name,email,company,password){
        this.name=name;
        this.email=email;
        this.company=company;
        this.password=password;
    }

    static setRecruiter(newRecruiter){
        let newRec= new RecruiterModel(newRecruiter.name,newRecruiter.email,newRecruiter.company,newRecruiter.password);
        recruiters.push(newRec);
    }

    static checkRecruiter(check){
        let result=recruiters.find((recruiter)=>recruiter.email==check.email && recruiter.password==check.password);
        return result;
    }
}

const recruiters=[
    new RecruiterModel('dhanush','dhanushkaduluri@gmail.com','Google','123456'),
];