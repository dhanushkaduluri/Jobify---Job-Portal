import express from 'express';
import path from 'path';
import UserController from './src/controllers/user.controller.js';
import ejsLayouts from 'express-ejs-layouts'
import RecruiterController from './src/controllers/recruiter.controller.js';
import session from 'express-session';
import validator from './src/middleware/recruiter-validator.middleware.js';
import { formValidator, updateFormValidator } from './src/middleware/recruiter-validator.middleware.js';
import { uploadFile } from './src/middleware/file-handler.middleware.js';
import cookieParser from 'cookie-parser';
import { setLastVisited } from './src/middleware/lastVisited-cookie.middleware.js';
import { sendMail } from './src/middleware/email-sender.middleware.js';


const server=express();

server.set("view engine","ejs")
server.set("views",path.join(path.resolve(),'src','views'))
server.use(ejsLayouts)
server.use(express.static('src/views'));
server.use(express.static('public'));
server.use(express.urlencoded({extended:true}));

//setting up session
server.use(session({
    secret:'secreteMonkey',
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false},
}));

//setting up cookies
server.use(cookieParser());
server.use(setLastVisited);


const userController=new UserController();
const recruiterController=new RecruiterController();

server.get("/",userController.getHomeScreen)
server.get('/jobs',userController.getJobs)
server.get('/recruiter-login',recruiterController.getRecruiterLogin)
server.post('/recruiter-login', recruiterController.postRecruiterLogin)
server.get('/recruiter-register',recruiterController.getRecruiterRegister)
server.post('/recruiter-register', validator ,recruiterController.postRecruiterRegister)
server.get('/recruiter-logout',recruiterController.recruiterLogout)
server.get('/post-new-job',userController.getNewJob)
server.post('/post-new-job',formValidator ,userController.postNewJob)
server.get('/job-details/:id',userController.getJobDetails)
server.get('/update/:id',userController.getUpdateJob)
server.post('/update/:id',updateFormValidator, userController.postUpdateJob)
server.get('/delete/:id',userController.deleteJob)
server.get('/apply/:id',userController.getApply)
server.post('/apply',uploadFile, userController.postApply,sendMail)
server.get('/applicants/:id', userController.getApplicants)
server.post('/search',userController.getSearchResults)


export default server;