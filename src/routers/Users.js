import React from 'react'
import { connect } from 'dva'// 进入connect 工具函数
import MainLayout from '../components/MainLayout/MainLayout'
import UsersComponent from '../components/UsersComponent/UsersComponent'

function Users({list}) {
  
  console.log("在render中的数据", list)
  const userlistprops = {
    list
  }
  console.log("展开的是", {...userlistprops})
  return (
    <MainLayout>
      <div>
        <UsersComponent {...userlistprops}/>
      </div>
    </MainLayout>
  )
}
//这里关联了 users reducers数据  需要dispath 
function mapStateToProps( state ) {
  console.log("这里的是",state)
  const { list } = state.users;
  return {
    list
  }
  // return {users};
}

// 建立数据关联关系
export default connect(mapStateToProps)(Users);
