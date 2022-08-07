if(process.env.NODE_ENV==='production'){ //환경변수이다.
    module.exports=require('./prod');
} else{
    module.exports=require('./dev');
}
