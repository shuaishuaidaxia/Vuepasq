import request from './request'
const userApi = {
  getTreeinfo: '/module/kg/hierarchyTree/getPublicSecurityTreeChildrenList'
}
export function GetTreeInfo (parameter) {
  return request({
    url: userApi.getTreeinfo,
    method: 'get',
    params: parameter,
    headers: { 'content-type': 'application/json' },
  })
}
