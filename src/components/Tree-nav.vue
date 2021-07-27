<template>
  <div style="height: 200px">
  <el-tree
      :data="treeData"
      :props="defaultProps"
      :load="loadNode"
      lazy
      >
  </el-tree>
  </div>
</template>

<script>
import {GetTreeInfo} from "../http/api";

export default {
  name: "Tree-nav",
  data() {
    return {
      treeData: [ ],
      defaultProps: {
        label: 'label',
        children: 'children',
        isLeaf: 'leaf',
        parentId: 'pId'
      },
    };
  },
  methods: {
    loadNode(node,resolve){
     /*加载父节点数据*/
      console.log(node+resolve)
      let that = this;

      if (node.level === 0) {
        that.loadtreeData(resolve);
      }

      if (node.level >= 1) {
        this.getChildByList(node.data.id, resolve);
        return resolve([]); // 加上这个，防止在该节点没有子节点时一直转圈的问题发生。
      }
    },
    loadtreeData(resolve) {      // 获取loadtreeData 就是父节点数据，getChildByList就是异步获取子节点数据
      let params = {pId: "360100000000",max: 'W4',hyzt: '0',level: ''};
      GetTreeInfo(params)
      .then(res =>{
        console.log(res)
        let data = res.data;
        data.forEach(item =>{
          // eslint-disable-next-line no-self-assign
          item.label = item.label
          // eslint-disable-next-line no-self-assign
          item.id = item.id
          // eslint-disable-next-line no-self-assign
          item.pId = item.pId
          // eslint-disable-next-line no-self-assign
          item.leaf = item.leaf
          // eslint-disable-next-line no-self-assign
          item.children = item.children
        })
        resolve(data)
      })
       .catch(err =>{
         console.log(err)
       })
    },
    getChildByList( /*_parentID,resolve*/) {     // 获取子节点请求
    /*  let params = {ParentID : _parentID};
      this.$http({url: "",data: params,type: 'get'}).then(res =>{
        if(res.success == true) {
          let data = res.data;
          data.forEach(item => {
            item.name = item.name;
            item.parentId = item.parentId;
            item.id = item.id;
            item.isLeaf = false;
          });
          resolve(data);
        } else {
          return false;
        }
      }).catch(err =>{
        console.log(err);
      });*/
    },

    handleNodeClick(data) {          // 节点被点击时的回调
      console.log(data)
    },

  }
};
</script>


<style scoped>

</style>
