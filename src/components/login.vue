<template>
  <div class="login_container">
    <div class="login_box">
      <el-form label-width="80px">
        <el-form-item label="用户名">
          <el-input></el-input>
        </el-form-item>

        <el-form-item label="密码">
          <el-input></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
  .login_container {
    background-image: url("../assets/bg.png");
    height: 100%;
  }

  .login_box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 420px;
    background-color: #fff;
    box-shadow: 15px 15px 30px rgba(0, 0, 0, .8);
  }

</style>
