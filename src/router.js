import React from 'react'
import { Router, Route } from 'dva/router'

import Users from './routers/Users'
import IndexPage from './routers/IndexPage'

export default function RouterConfig ({ history }) {
  return (
    <Router history= { history }>
      <Route path= "/" component= { IndexPage }></Route>
      <Route path= "/users" component= { Users }></Route>
    </Router>
  )
}
