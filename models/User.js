const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const userSchema=mongoose.Schema({
    name: {
        type: String,
        maxlength:50
    },
    email: {
        type: String,
        trim: true,  //스페이스를 없애주는 역할
        unique :1  //똑같은 이메일 못 쓰게
    },
    password: {
        type: String,
        minlength:5
    },
    lastname:{
        type: String,
        maxlength: 50
    },
    role : { //관리자인지 일반인인지
        type : Number,
        default: 0
    },
    image: String,
    token:{
        type: String
    },
    tokenExp: {
        type: Number
    }
})

const User=mongoose.model('User', userSchema)

module.exports={ User } //다른 곳에서도 쓰고 싶을 수 있으니까