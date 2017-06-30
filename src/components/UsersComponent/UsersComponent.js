import React from 'react'
import { Table, Icon } from 'antd'

export default function UsersComponent({dataSource}) {


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
      <a href="#">Delete</a>
      <span className="ant-divider" />
      <a href="#" className="ant-dropdown-link">
        Edit <Icon type="down" />
      </a>
    </span>
  ),
}];
  return(
    <Table dataSource={dataSource} columns={columns} />
  )
}
