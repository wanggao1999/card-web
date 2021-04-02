<template>
  <div class="autn_rz">
    <Back backnmae="实名认证"/>
    <div class="upload_info">
       <el-tabs v-model="activeName"  :stretch="true">
          <el-tab-pane  label="身份证上传" name="first">
            <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
              class="sfz-uploader"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <p>正面</p>
            <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
              class="sfz-uploader"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <p>反面</p>
            <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
              class="sfz-uploader"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <p>手持免冠</p>
            <div class="btn_sfz">提交身份证信息</div>
          </el-tab-pane>
          <el-tab-pane label="驾驶证上传" name="second">
             <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
              class="sfz-uploader"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <p>正面</p>
            <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
              class="sfz-uploader"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <p>反面</p>
            <div class="btn_sfz">提交身份证信息</div>
          </el-tab-pane>
        </el-tabs>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      activeName:'first',
      imageUrl:''
    };
  },
  mounted() {
    
  },
  methods: {
     beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
  },
};
</script>

<style lang="scss" scoped>
.autn_rz{
  width: 90%;
  margin: 0 auto;
  .upload_info{
    margin-top: 50px;
  }
  .sfz-uploader{
    border-radius: 15px;
    text-align: center;
    width: 85%;
    height: 150px;
    line-height: 150px;
    background-color: #32373d;
    font-size: 20px;
    margin: 0 auto;
    margin-top: 30px;
  }
  p{
    height: 35px;
    line-height: 34px;
    text-align: center;
    color: #f4f4f4;
  }
  .btn_sfz{
    width: 80%;
    height: 50px;
    border-radius: 30px;
    background-color: #00a3ff;
    text-align: center;
    line-height: 50px;
    color: white;
    margin: 0 auto;
    margin-top: 25px;
    cursor: pointer;
  }
}
</style>