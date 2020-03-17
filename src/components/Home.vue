<template>
  <el-container class="home-container">
    <!--头部区域-->
    <el-header>
      <div>
        <span>Dreamly Admin</span>
      </div>
      <!--退出按钮-->
      <el-button type="primary" @click="logout">退出</el-button>
    </el-header>
    <!--页面主题-->
    <el-container>
      <!--侧边栏-->
      <el-aside width="200px">
        <el-menu
          background-color="#20222A"
          text-color="#fff"
          active-text-color="#ffd04b">

          <!--一级菜单-->
          <el-submenu :index="item.id + ''" :key="item.id" v-for="item in menus">
            <!--一级菜单模板区-->
            <template slot="title">
              <!--图标-->
              <i class="el-icon-location"></i>
              <!--文本-->
              <span>{{item.authName}}</span>
            </template>

            <!--二级菜单-->
            <el-menu-item :index="subItem.id + ''" :key="subItem.id" v-for="subItem in item.children">
              <template slot="title">
                <!--图标-->
                <i class="el-icon-location"></i>
                <!--文本-->
                <span>{{subItem.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!--右侧内容主题体-->
      <el-main></el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    data () {
      return {
        // 左侧菜单数据
        menus: [],
        // 是否折叠
        isCollapse: false,
        // 被激活的链接地址
        activePath: ''
      }
    },
    created () {
      this.getMenuList()
      this.activePath = window.sessionStorage.getItem('activePath')
    },
    methods: {
      // 退出登录
      logout () {
        window.sessionStorage.clear()
        this.$router.push('/login')
      },
      // 获取所有的菜单
      async getMenuList () {
        const { data: res } = await this.$http.get('/menus')
        if (res.meta.status !== 200) {
          return this.$message.error(res.meta.msg)
        }
        this.menus = res.data
      }
    }
  }
</script>

<style lang="less" scoped>
  .el-header {
    display: flex;
    justify-content: space-between;
    background-color: #20222A;
    color: #B7987B;
    font-size: 20px;
    padding-left: 20px;
    align-items: center;

    > div {
      display: flex;
      align-items: center;
    }
  }

  .el-aside {
    background-color: #20222A;
  }

  .el-main {
    background-color: #F0F2F5;
  }

  .home-container {
    height: 100%;
  }

</style>
