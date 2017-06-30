import React from 'react'
import { connect } from 'dva'// 进入connect 工具函数
import MainLayout from '../components/MainLayout/MainLayout'
import UsersComponent from '../components/UsersComponent/UsersComponent'

function Users(users) {
  const userListProps={
    total: 3,
    current: 1,
    loading: false,
    dataSource: [
      {
        id: '11',
        name: '张三',
        age: 23,
        address: '成都',
      },
      {
        id: '22',
        name: '李四',
        age: 24,
        address: '杭州',
      },
      {
        id: '33',
        name: '王五',
        age: 25,
        address: '上海',
      },
    ],
  };
  return (
    <MainLayout>
      <div>
        <UsersComponent {...userListProps} />
      </div>
    </MainLayout>
  )
}

function mapStateToProps({ users }) {
  console.log("这里的是",users)
  // return {users};
}

// 建立数据关联关系
export default connect(mapStateToProps)(Users);
