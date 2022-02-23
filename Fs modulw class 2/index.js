//how do work write funciton;
//How do work appendFile function;
//how do work readFile function;
//how do work rename function;
//how do work unlink functon;---------kono file delete korar jonno babohar kora hoy;
//how do word exists function;



const fs = require("fs");

/*
============writeFile==========
fs.writeFile('demo1.txt',"Hi guys, iam tota roy",(err) =>{
    if(err){
        console.log("err")
    }else{
        console.log("succesfull")
    }
})
==============appendFile============
fs.appendFile("demo1.txt"," I am 28 years old",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("succesfull")
    }
})

============readFile funciton============

// readFile funciton babohar korle 2 jinis poya jay 1at errora and 2 data,,
// utf-8 it name is coding system;

fs.readFile("demo1.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})
===============rename function==============
fs.rename("demo1.txt","demo.txt",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("succesfull")
    }
})
===========unlink============
fs.unlink("demo.txt",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("succesfull")
    }
})
*/

fs.exists("demo.txt",(result)=>{
    if(result){
        console.log("found")
    }else(
        console.log("not found")
    )
})