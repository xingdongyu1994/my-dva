//  这里以用户数据为基础     用户信息的展示   用户信息的操作
//  设计的model  数据角度来考虑的、   业务角度来考
import { hashHistory } from 'dva/router'
import * as usersService from '../base/apiuser';
export default {
  namespace: "users",
  state: {
    list: []//用于用户展示的信息
  },
  //这里用来先订阅数据
  subscriptions: {
     
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/users') {
          const list=[
          {
            id: 1,
            name: '1111111',
            age: 23,
            address: '成都',
          },
          {
            id: 2,
            name: '2222222222',
            age: 24,
            address: '杭州',
          },
          {
            id: 3,
            name: '3333333',
            age: 25,
            address: '上海',
          },
        ]
          dispatch({ 
            type: 'fethchs',
            payload: list 
          })
        }
      });
    },
  },
  effects: {
    *fethchs({payload}, { put, call }) {//调用服务器的数据    
       console.log("删除后的数据",payload)
       yield put({
         type: 'querySuccess',
         payload: payload
       })
    },
    *query(){}, //查询
    *create(){},//创建
    *removes({ payload: id }, { call, put }){
       yield call(usersService.remove, id)
       yield put({
        type: 'reloads'
       })
    },//删除
    *reloads(action, { put }) {
       const list=[
          {
            id: 1,
            name: '1111111',
            age: 23,
            address: '1111111111',
          },
          {
            id: 2,
            name: '2222222222',
            age: 24,
            address: '222222222222',
          },
          {
            id: 3,
            name: '3333333',
            age: 25,
            address: '3333333333',
          },
        ]
       yield put({ 
        type: 'fethchs', 
        payload: list 
      })
    },
    *update(){}//修改
  },
  reducers: {
    //使用静态的数据来返回
		querySuccess(state,{ payload: payload }){
      const list = payload
      return { ...state, list}
    },
		createSuccess(){},
		deleteSuccess(){},
		updateSuccess(){},
	}
}
