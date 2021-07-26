<template>
  <el-tree
            :data="treeData"
            :props="defaultProps"
            :load="loadNode"
           @node-click="handleNodeClick"
              lazy>
    </el-tree>
</template>

<script>
import {GetTreeInfo} from "../http/api";
export default {
  name: "Tree-nav",
  data(){
    return {
      treeData : [ ],
      defaultProps: {
        children: 'children',
        label: 'label',
        id: 'id',
        parentId: 'pId',
        isLeaf: 'leaf'      // 指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效
      },
      RootNode: { id: "360100000000", label: "全部"},
    }
  },
  mounted() {
    this.treeData.push(this.RootNode)
  },
  methods: {
    loadNode(node, resolve) {        // 加载 树数据

      if (node.level >= 1) {
        this.getChildByList(node.data.id, resolve);
      /*  return resolve([]); */// 加上这个，防止在该节点没有子节点时一直转圈的问题发生。
      }
    },
  /*  loadtreeData( resolve) {      // 获取loadtreeData 就是父节点数据，getChildByList就是异步获取子节点数据
      let params = {pId: '360100000000',max: 'W4',hyzt: '0',level: ''};
      GetTreeInfo(params)
      .then( res =>{
        console.log(res)
        let data = res.data;
      /!*  data.forEach(item =>{
          item.label = item.label
          item.id = item.id
          item.parentId = item.pId
          item.isLeaf = item.leaf
          item.children = item.children
          this.treeData.push(item)
        })*!/
        resolve(data)
        console.log(resolve)
      })
      .catch( err =>{
        console.log(err)
      })
    },*/
    getChildByList( _parentID,resolve) {     // 获取子节点请求
      console.log(_parentID)
      console.log(resolve)
      let params = {pId: _parentID,max: 'W4',hyzt: '0',level: ''};
      GetTreeInfo(params)
          .then( res =>{
            console.log(res)
            let data = res.data;
            data.forEach(item =>{
            item.label = item.label
            item.id = item.id
            item.parentId = item.pId
            item.isLeaf = item.leaf
            item.children = item.children
          })
           resolve(data)
          })
          .catch( err =>{
            console.log(err)
          })
    },

    handleNodeClick(data) {          // 节点被点击时的回调
      console.log(data)
    },
  }
}
</script>

<style>

</style>