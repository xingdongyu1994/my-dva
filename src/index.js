import dva from 'dva';
import { browserHistory } from 'dva/router'
import './index.html'

// 1. Initialize
const app = dva({
  // history: browserHistory
})
//这里 在数据model准备好后  通过dva来  注册model
app.model(require('./models/users.js'))



app.router(require('./router'))

app.start('#root')


//dva  五部曲
/*
1. const  app = dva()   创建一个dva  应用
2. plugins  该项为选择项
3. model 注册  app.model(require('./models/example'))
4. 配置rourer  app.rourer(require('./router'))
5. start  app.start('#root') start开启
 */
