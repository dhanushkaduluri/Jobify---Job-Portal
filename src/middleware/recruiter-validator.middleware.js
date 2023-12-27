import {body, validationResult} from 'express-validator'
import JobsModel from '../models/jobs.model.js';

const validator=async(req,res,next)=>{
    const rules=[
        body('name').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Enter a valid email'),
        body('company').notEmpty().withMessage('Enter current company name'),
        body('password').isLength({min:6}).withMessage('Password should have minimum 6 characters'),
    ];
    await Promise.all(rules.map((rule)=>rule.run(req)));
    var validationErrors=validationResult(req);
    if(!validationErrors.isEmpty()){
        return res.render('recruiter-register',{errorMessage:validationErrors.array()})
    }else{
        next();
    }
}

export const formValidator=async(req,res,next)=>{
    const rules=[
        body('companyName').notEmpty().withMessage('Company name is required'),
        body('role').notEmpty().withMessage('Role is required'),
        body('deadline').notEmpty().withMessage('Deadline is required'),
        body('skills').notEmpty().withMessage('Skills are required'),
    ];
    await Promise.all(rules.map((rule)=>rule.run(req)));
    var validationErrors=validationResult(req);
    if(!validationErrors.isEmpty()){
        return res.render('post-new-job',{errorMessage:validationErrors.array(),userEmail:req.session.userEmail})
    }else{
        next();
    }
}

export const updateFormValidator=async(req,res,next)=>{
    const rules=[
        body('companyName').notEmpty().withMessage('Company name is required'),
        body('role').notEmpty().withMessage('Role is required'),
        body('deadline').notEmpty().withMessage('Deadline is required'),
        body('skills').notEmpty().withMessage('Skills are required'),
    ];
    await Promise.all(rules.map((rule)=>rule.run(req)));
    var validationErrors=validationResult(req);
    if(!validationErrors.isEmpty()){
        let id=req.params.id;
        let job=JobsModel.getJobById(id);
        return res.render('update-job',{job,errorMessage:validationErrors.array(),userEmail:req.session.userEmail})
    }else{
        next();
    }
}

export default validator;
