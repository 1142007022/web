<template>
  <div id="upDateStudent">
        <el-button @click="backList">返回列表</el-button>
        <el-input v-model="student.id" type="hidden"></el-input>
        <el-form style="margin-top:20px" ref="form" :model="student" label-width="80px">
            <el-form-item label="学生姓名">
                <el-input v-model="student.name"></el-input>
            </el-form-item>
            <el-form-item label="学生成绩">
                <el-input v-model="student.score"></el-input>
            </el-form-item>
            <el-form-item label="联系方式">
                <el-input v-model="student.mobile"></el-input>
            </el-form-item>
           
            <el-form-item>
                <el-button type="primary" @click="onSubmit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>

</template>
<script>

import api from "../const/url"
export default {
  name: '',
  data(){
    return {
        student:{}
    }
  },
  methods: {
      backList:function(){
          this.$router.push("/");
      },
      onSubmit:function(){
          this.$http.put("/student/"+this.student.id,this.student).then(response => {
              if(response.data.status == "success") {
                  this.$message.success("修改成功");
                  this.$router.push("/");
              } else {
                  this.$message.error(response.data.message);
              }
          }).catch(error => {
              this.$message.error("系统提示:" + error.message);
          });
      }
  },
  mounted:function(){
      var id = this.$route.params.id;
      this.$http.get("/student/"+id).then(response=>{
          this.student = response.data;
      }).catch(error=>{
          this.$message.error("系统提示:" + error.message);
      });
  }
}

</script>
<style></style>