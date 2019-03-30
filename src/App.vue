<template>
  <div class="layout">
    <Layout>
      <Header :style="{position: 'fixed', width: '100%'}">
        <Menu 
          mode="horizontal" 
          theme="dark" 
          active-name="1">
          <div class="layout-logo"/>
          <div class="layout-nav">
            <MenuItem 
              name="1" 
              to="/">
            <Icon type="ios-navigate"/>
            form
                        </MenuItem>
            <MenuItem 
              name="2" 
              to="/table">
            <Icon type="ios-keypad"/>
            table
                        </MenuItem>
            <MenuItem 
              name="3" 
              to="/extend">
            <Icon type="ios-analytics"/>
            extend
                        </MenuItem>
            <MenuItem 
              name="4" 
              to="/component">
            <Icon type="ios-paper"/>
            vue-defined
                        </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
        <router-view/>
      </Content>
      <Footer class="layout-footer-center">{{ new Date().getFullYear() }} &copy; double bean</Footer>
    </Layout>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }

}
</script>
<style scoped lang="scss">
   .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
    }
    .ivu-menu-horizontal .ivu-menu-item, .ivu-menu-horizontal .ivu-menu-submenu{
      padding: 0 15px;
    }
    .ivu-layout-header{
      padding: 0 20px;
    }
</style>
