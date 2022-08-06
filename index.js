const express = require('express') //express 모듈을 가져온다
const app=express() //이 function을 활용하여 새로운 app을 만든다
const port=5000 //해당 포트를 백서버로 두겠다

const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://YuSumin:yh6873171717@S@boilerplate.b675w.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, userCreateIndex: true, useFindAndModify: false //이걸 써 줘야 에러 같은 게 안 뜬다!
}).then(() => console.log('MongoDB Connected...'))//연결이 잘 되었는지 확인
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!'))  //'/'=루트 디렉토리! 여기 오면은 hellow world를 출력되게 해 준다
app.listen(port, () => console.log(`Example app listening on port ${port}!`)) //만약 listen을 하면, 저 문구가 출력