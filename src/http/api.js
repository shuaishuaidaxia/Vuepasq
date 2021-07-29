import request from './request'
const userApi = {
  getTreeinfo: '/module/kg/hierarchyTree/getPublicSecurityTreeChildrenList',
  getMainTable: '/module/kg/xqjbxx/getXQ', //小区信息
  getStreetLaneTreeChildrenList: '/module/kg/hierarchyTree/getStreetLaneTreeChildrenList',  //选择区地址后加载街路巷
  getSQListByXzq: '/module/kg/sqSqjbxx/getSQListByXzq', //选择区地址后加载社区
  getXQByXqxxbz: '/module/kg/xqjbxx/getXQByXqxxbz'   //http://114.117.208.129:18280/kg-zhsq/module/kg/xqjbxx/getXQByXqxxbz?xqxxbz=LYYXQ10810000000014
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
export function GetSqListByXzq(parameter) {
  return request({
    url: userApi.getSQListByXzq,
    method: 'get',
    params: parameter,
    headers: { 'content-type': 'application/json' },
  })
}
