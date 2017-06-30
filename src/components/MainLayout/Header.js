import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'dva/router'

function Header({ location }) {
  return (
    <div>
      <Link to="/"><Icon type="bars" />首页</Link>
      <Link to="/users"><Icon type="bars" />Users</Link>  
    </div>
  );
}

export default Header
