import JobsModel from "../models/jobs.model.js";
import ApplicationModel from "../models/applications.model.js";

export default class UserController{

    getHomeScreen(req,res){
        res.render('home-screen');
    }

    getJobs(req,res){
        let jobs=JobsModel.getJobs();
        res.render('jobs',{jobs,userEmail:req.session.userEmail});
    }

    getNewJob(req,res){
        res.render('post-new-job',{errorMessage:null,userEmail:req.session.userEmail})
    }

    postNewJob(req,res){
        JobsModel.setJob(req.body);
        res.redirect('/jobs');
    }

    getJobDetails(req,res){
        let id=req.params.id;
        let job=JobsModel.getJobById(id);
        res.render('job-details',{job,userEmail:req.session.userEmail})
    }

    getUpdateJob(req,res){
        let id=req.params.id;
        let job=JobsModel.getJobById(id);
        res.render('update-job',{job,errorMessage:null,userEmail:req.session.userEmail})
    }

    postUpdateJob(req,res){
        let id=req.params.id;
        JobsModel.updateById(id,req.body);
        let jobs=JobsModel.getJobs();
        res.render('jobs',{jobs,userEmail:req.session.userEmail});
    }

    getApply(req,res){
        console.log(req.params.id)
        res.render('apply-job',{id:req.params.id});
    }

    postApply(req,res,next){
        let resume='resumes/'+ req.file.filename;
        ApplicationModel.setApplication(resume,req.body);
        JobsModel.setApplicantsById(req.body.id);
        res.render('successful');
    }

    getApplicants(req,res){
        let id=req.params.id;
        let applicants=ApplicationModel.getApplicantsById(id);
        res.render('applications-view',{applicants})
    }

    deleteJob(req,res){
        let id=req.params.id;
        JobsModel.deleteById(id);
        res.redirect('/jobs');
    }

    getSearchResults(req,res){
        let search=req.body.name;
        let jobs=JobsModel.getJobsByName(search);
        res.render('search-results',{jobs,userEmail:req.session.userEmail});
    }

}