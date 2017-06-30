//  这里以用户数据为基础     用户信息的展示   用户信息的操作
//  设计的model  数据角度来考虑的、   业务角度来考虑
export default {
  namespace: "users",
  state: {
    list: []//用于用户展示的信息
  },
  effects: {
    *query(){}, //查询
    *create(){},//创建
    *'delete'(){},//删除
    *update(){}//修改
  },
  reducers: {
    //使用静态的数据来返回
		querySuccess(state){
      const mock = {
        list: [
          {
            id: 1,
            name: '张三',
            age: 23,
            address: '成都',
          },
          {
            id: 2,
            name: '李四',
            age: 24,
            address: '杭州',
          },
          {
            id: 3,
            name: '王五',
            age: 25,
            address: '上海',
          },
        ],

      }
      return {...state, ...mock}
    },
		createSuccess(){},
		deleteSuccess(){},
		updateSuccess(){},
	}
}
