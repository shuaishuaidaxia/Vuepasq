import request from './request'
const userApi = {
  getTreeinfo: '/module/kg/hierarchyTree/getPublicSecurityTreeChildrenList',
  getMainTable: '/module/kg/xqjbxx/getXQ',
  getStreetLaneTreeChildrenList: '/module/kg/hierarchyTree/getStreetLaneTreeChildrenList'
}
export function GetTreeInfo (parameter) {
  return request({
    url: userApi.getTreeinfo,
    method: 'get',
    params: parameter,
    headers: { 'content-type': 'application/json' },
  })
}
export function GetMainTableninfo (parameter) {
  return request({
    url: userApi.getMainTable,
    method: 'post',
    data: parameter,
    headers: {'content-type': 'application/json'},
  })
}
export function GetTreeChildren(parameter) {
  return request({
    url: userApi.getStreetLaneTreeChildrenList,
    method: 'get',
    params: parameter,
    headers: { 'content-type': 'application/json' },
  })
}
