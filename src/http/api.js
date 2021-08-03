import request from './request'
const userApi = {
  getTreeinfo: '/module/kg/hierarchyTree/getPublicSecurityTreeChildrenList',
  getMainTable: '/module/kg/xqjbxx/getXQ', //小区详情信息
  getStreetLaneTreeChildrenList: '/module/kg/hierarchyTree/getStreetLaneTreeChildrenList',  //选择区地址后加载街路巷
  getSQListByXzq: '/module/kg/sqSqjbxx/getSQListByXzq', //选择区地址后加载社区
  getXQByXqxxbz: '/module/kg/xqjbxx/getXQByXqxxbz',  // /module/kg/xqjbxx/getXQByXqxxbz?xqxxbz=LYYXQ10810000000014v //获取小区详情
  getzrqBypcs: '/module/kg/hierarchyTree/getPublicSecurityTreeChildrenListForCommunity'   // /module/kg/hierarchyTree/getPublicSecurityTreeChildrenListForCommunity?pId=360199401000&max=W4&hyzt=0&level= 通过派出所获得社区
}
export function GetTreeInfo (parameter) {
  return request.get(userApi.getTreeinfo,{
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

export function getXQByXqxxbz(parameter) {
  return request({
    url: userApi.getXQByXqxxbz,
    method: 'get',
    params: parameter,
    headers: { 'content-type': 'application/json' },
  })
}
export function getSqBypcs(parameter) {
  return request({
    url: userApi.getzrqBypcs,
    method: 'get',
    params: parameter,
    headers: { 'content-type': 'application/json' },
  })
}
