import request from '../utils/request'

// 初始化
export function fetch() {
  return request(`/api/users?_page=3&_limit=5`);
}
// 删除
export function remove(id) {
  return request(`/api/users/${id}`, {
  	method: 'DELETE'
  })
}

