import React from 'react'
import { Table, Icon } from 'antd'
import { connect } from 'dva'

function UsersComponent({dispatch, list}) {
function handleDelete(id){
  dispatch({
    type: 'users/removes',
    payload: id,
  })
  // console.log("传过来的id", id)
}
const columns = [{
  title: 'id',
  dataIndex: 'id',
  key: 'id',
},{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="#">Action 一 {record.name}</a>
      <span className="ant-divider" />
      <a  onClick={handleDelete.bind(null, record.id)}>Delete</a>
      <span className="ant-divider" />
      <a  className="ant-dropdown-link">
        Edit <Icon type="down" />
      </a>
    </span>
  ),
}];
  return(
    <Table dataSource={list} columns={columns} />
  )
}
export default connect()(UsersComponent); 