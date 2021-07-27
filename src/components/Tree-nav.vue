<template>
  <div>
  <el-tree
      ref="tree"
      :data="treeData"
      :props="defaultProps"
      :load="loadNode"
      @node-click="(click, checked)=>{handleCheckChange(click, checked)}"
      lazy>
  </el-tree>
  </div>
</template>

<script>
import {GetTreeInfo} from "../http/api";
export default {
  name: "Tree-nav",
  data(){
    return {
      treeData : [],
      defaultProps: {
        children: 'children',
        label: 'label',
        id: 'id',
        parentId: 'pId',
        isLeaf: 'leaf'      // 指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效
      },
      RootNode: { id: "", label: "全部"},
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
    getChildByList(_parentID, resolve) {     // 获取子节点请求
      console.log(_parentID)
      console.log(resolve)
      let params = {pId: _parentID, max: 'W4', hyzt: '0', level: ''};
      GetTreeInfo(params)
          .then(res => {
            console.log(res)

            let data = res.data;
            data.forEach(item => {
              item.label = item.label
              item.id = item.id
              item.parentId = item.pId
              item.isLeaf = item.leaf
              item.children = item.children
            })
            resolve(data)
            console.log(this.treeData,'treedata')
          })
          .catch(err => {
            console.log(err)
          })
    },
    handleCheckChange(item,e) {
      this.$emit("handleChechange",e);
    }
  }
}
</script >

<style scoped>

.el-tree{
  height: 800px;
}
</style>
