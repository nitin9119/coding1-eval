const express = require('express');
const { ppid } = require('process');
const jobs = require('./jobs.json');
const app = express();

app.use(express.json());

/** normal get request */
app.get("/",(req, res) => {
    res.send({ jobs })
})


/** find all the jobs that are available as Work from home. */
// app.get("/jobs/:work_from_home",(req, res) =>{
//     const new_job1 = jobs.filter((ele)=>{
//         if(ele.work_from_home == String(req.params.work_from_home)){
//             console.log(ele);
//         }
//     })
//     res.send("hello");
// })

/**get all jobs in a particular city which matches a particular skill */
app.get("/jobs/:company/:skill",(req, res) => {
    const new_job = jobs.filter((ele)=>{
        if(ele.company === req.params.company && ele.skill === req.params.skill){
            return ele;
        }
    })
    
    res.send(new_job);
})

/** find all the jobs that will accept a notice period of 2 months. */
app.get("/jobs/:notice_period",(req, res) => {
    const new_job = jobs.filter((ele)=>{
        if(ele.notice_period == req.params.notice_period){
            return ele;
        }
    })
    
    res.send(new_job);
})


app.listen(2345,function(){
    console.log('listening on port 2345');
})
