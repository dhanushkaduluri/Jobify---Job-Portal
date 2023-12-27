import RecruiterModel from "../models/recruiter.model.js";

export default class RecruiterController{

    getRecruiterLogin(req,res){
        res.render('recruiter-login',{errorMessage:null});
    }

    postRecruiterLogin(req,res){
        let result=RecruiterModel.checkRecruiter(req.body);
        if(result){
            req.session.userEmail=req.body.email;
            res.redirect('/jobs');
        }else{
            res.render('recruiter-login',{errorMessage:'invalid credentials'});
        }
    }

    getRecruiterRegister(req,res){
        res.render('recruiter-register',{errorMessage:null});
    }

    postRecruiterRegister(req,res){
        RecruiterModel.setRecruiter(req.body);
        res.redirect('/recruiter-login');
    }

    recruiterLogout(req,res){
        req.session.destroy((err)=>{
            if(err){
                console.log(err);
            }else{
                res.redirect('/');
            }
        })
    }

}