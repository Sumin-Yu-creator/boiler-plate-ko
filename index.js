const express = require('express') //express 모듈을 가져온다
const app=express() //이 function을 활용하여 새로운 app을 만든다
const port=5000 //해당 포트를 백서버로 두겠다

const bodyParser=require('body-parser');

const config=require('./config/key');

const { User } = require("./models/User"); //이걸 이용해 인스턴스 만들자.

app.use(bodyParser.urlencoded({extended: true}));//application/x-www-form-urlencoded 이거를 클라이언트로부터 서버로 데이터를 분석해서 가져올 수 있도록 하는 것
app.use(bodyParser.json());  //application/json 타입으로 된 걸 분석해서 가져오기 위해

const mongoose=require('mongoose')
mongoose.connect(config.mongoURI, {
   useNewUrlParser: true, useUnifiedTopology: true, userCreateIndex: true, useFindAndModify: false //이걸 써 줘야 에러 같은 게 안 뜬다!
}).then(() => console.log('MongoDB Connected...'))//연결이 잘 되었는지 확인
.catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!!!'))  //'/'=루트 디렉토리! 여기 오면은 hellow world를 출력되게 해 준다

app.post('/register', (req, res) => {
   //회원가입할 때 필요한 정보들을 클라이언트에서 가져오면 그것들을 데이터베이스에 넣어준다.

const user=new User(req.body) //req.body를 통해서 정보를 받아주는 것
user.save((err, userInfo) => {
  if(err) return res.json({sucess: false, err})
  return res.status(200).json({
     success: true  //회원 가입 성공하면, success 띄워주라!
  })
  }) //save : 몽고디비에서 오는 메소드
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`)) //만약 listen을 하면, 저 문구가 출력