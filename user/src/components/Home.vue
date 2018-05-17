<template>
    <div id="home">
        <el-button type="primary" @click="addStudent">新增学生</el-button>
        <el-button type="default" @click="delBanch">删除选中</el-button>
        <el-table
        :data="student"
        style="width: 100%">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column
                prop="name"
                label="学生姓名">
            </el-table-column>
            <el-table-column
                prop="score"
                label="成绩"
                width="80">
            </el-table-column>
            <el-table-column
                prop="mobile"
                label="手机号"
                width="100">
            </el-table-column>
        
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            background
            layout="prev, pager, next,total"
            :total="total"
            :current-page="currentPage"
            @current-change="pageData">
        </el-pagination>
    </div>

</template>
<script>

import api from "../const/url"
export default {
  name: 'Home',
  data(){
    return {
        student:[],
        total:0,
        currentPage:1
    }
  },
  methods: {
      addStudent:function(){
          this.$router.push("/new");
      },
      delBanch:function(index,students){
          alert("即将删除选中！");
          console.log(index);
          console.log(students);
      },
      handleDelete:function(index,row){
          var id = row.id;
          this.$confirm("确定要删除该记录吗?").then(()=>{
              this.$http.delete("/student/"+id).then(response=>{
                if(response.data.status == "success") {
                    this.$message.success("删除成功");
                   
                    this.student.splice(index,1);
                }
              }).catch(error=>{
                this.$message.error("系统提示:" + error.message);
              });
          }).catch(()=>{});
      },
      handleEdit:function(index,row){
          var id = row.id;
          this.$router.push("/update/"+id);
      },
      pageData:function(pageNo){
          this.currentPage = pageNo;
          this.loadData(this.currentPage);
      },
      loadData:function(pageNum){
          this.$http.get(api.studentHome+"/?p=" + pageNum).then(response => {
            this.student = response.data.list;
            this.total = response.data.total;
          }).catch(error => {
            this.$message.error("系统提示:" + error.message);
          });
      }
  },
  mounted:function(){
      this.loadData(1);
  }
}

</script>
<style></style>