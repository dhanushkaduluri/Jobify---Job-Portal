
export default class ApplicationModel{
    constructor(id,name,email,resume){
        this.id=id,
        this.name=name;
        this.email=email;
        this.resume=resume;
    }

    static getApplications(){
        return applications;
    }

    static setApplication(resume,file){
        let newApp=new ApplicationModel(file.id, file.name, file.email, resume);
        applications.push(newApp);
    }

    static getApplicantsById(id){
        let applicants=applications.filter((application)=>application.id==id);
        return applicants;
    }
}

const applications=[

];