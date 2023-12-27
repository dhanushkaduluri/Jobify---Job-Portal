
export const setLastVisited=(req,res,next)=>{
    if(req.cookies.lastVisited){
        res.locals.lastVisited=new Date(req.cookies.lastVisited).toLocaleString();
    }
    res.cookie('lastVisited',new Date().toISOString(),{
        maxAge:2*24*60*60*1000,
    }
    );
    next();
};
