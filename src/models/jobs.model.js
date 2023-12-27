
export default class JobsModel{
    constructor(id,companyName,role,location,ctc,skills,deadline,noOfOpenings,noOfApplicants, dateOfJobPosting){
        this.id=id;
        this.companyName=companyName;
        this.role=role;
        this.location=location;
        this.ctc=ctc;
        this.skills=skills;
        this.deadline=deadline;
        this.noOfOpenings=noOfOpenings;
        this.noOfApplicants=noOfApplicants;
        this.dateOfJobPosting=dateOfJobPosting;
    }

    static getJobs(){
        return jobs;
    }

    static setJob(job){
        job.id=jobs.length+1;
        job.noOfApplicants=0;
        job.dateOfJobPosting=new Date().toISOString();
        console.log(job.dateOfJobPosting);
        jobs.push(job);
    }

    static getJobById(id){
        return jobs.find((job)=>job.id==id);
    }

    static updateById(id,updatedJob){
        let index = jobs.findIndex((job) => job.id === id);
        // console.log(id);
        // console.log(index);
        updatedJob.id=id;
        updatedJob.noOfApplicants=0;
        updatedJob.dateOfJobPosting=new Date().toISOString();
        jobs[index]=updatedJob;
    }

    static setApplicantsById(id){
        let index = jobs.findIndex((job) => job.id === id);
        jobs[index].noOfApplicants=parseInt(jobs[index].noOfApplicants)+1;
    }

    static deleteById(id){
        let index = jobs.findIndex((job) => job.id === id);
        jobs.splice(index,1);
    }

    static getJobsByName(name){
        let result=jobs.filter((job)=>job.role==name);
        return result;
    }

}

const jobs=[
    new JobsModel('1','Microsoft','Java Developer','Telanagana','10-15',['Core Java','DSA','HTML','CSS','sql'],'24/Jan/2024',5,0,'12-12-2023'),
    new JobsModel('2','Google','SDE-II','Telanagana','10-15',['Core Java','DSA','HTML','CSS','Backend',],'24/Jan/2024',5,0,'12-12-2023'),
    new JobsModel('2','Amazon','Data Analyst','Telanagana','10-15',['Python','SQL','Power BI','Statastics',],'24/Jan/2024',5,0,'12-12-2023'),
];