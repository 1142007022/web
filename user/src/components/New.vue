<template>
  <div id="addStudent">
        <el-button @click="backList">返回列表</el-button>

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
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
            </el-form-item>
        </el-form>
    </div>

</template>
<script>

import api from "../const/url"
export default {
  name: 'AddMovie',
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
          this.$http.post(api.addStudent,this.student).then(response => {
              if(response.data.status == "success") {
                  this.$message({
                    message: '新增成功',
                    type: 'success'
                  });
                  this.$router.push("/");
              } else {
                  this.$message.error(response.data.message);
              }
          }).catch(error => {
              this.$message.error("系统提示:" + error.message);
          });
      }
      
  }
}

</script>
<style></style>