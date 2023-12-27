import nodemailer from 'nodemailer'

export const sendMail=async(req,res)=>{
    const {email}=req.body;
    let message='Congratulatios! your application successfully forwarded to the recruiter';
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user: "codingninjas2k16@gmail.com",
            pass: "slwvvlczduktvhdj",
        },
    });

    const mailOptions={
        from:'codingninjas2k16@gmail.com',
        to:email,
        subject:'Successfully Applied',
        text:message,
      };
    
    try{
        const result=await transporter.sendMail(mailOptions);
        // customEvent.emit('mailSent', email);
    }catch(err){
        console.log('unable to send the mail');
    }
}

