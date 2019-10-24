<template>
    <div class="register-body">
      <div class="register-content">
        <img src="../assets/icon/x-icon.png" alt="">
        <h1>注册小米账号</h1>
        <div class="register-content-area">
          <h4>国家/地区</h4>
          <el-select v-model="value" placeholder="请选择">
            <el-option-group
              v-for="group in options"
              :key="group.label"
              :label="group.label">
              <el-option
                v-for="item in group.options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-option-group>
          </el-select>
          <h5>成功注册帐号后，国家/地区将不能被修改</h5>
        </div>
        <div class="register-content-phonenumber">
          <h4>手机号码</h4>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <input type="text" placeholder="请输入手机号码">
        </div>
        <button class="register-content-btn">立即注册</button>
        <a href="">已阅读并同意：小米 <span>用户协议</span> 和 <span>隐私政策</span></a>
      </div>
      <loginANDregisterFooter></loginANDregisterFooter>
    </div>
</template>

<script>
import loginANDregisterFooter from '../components/loginANDregisterFooter'
export default {
  name: 'Register',
  components: {
    loginANDregisterFooter
  },
  data () {
    return {
      options: [{
        label: '热门城市',
        options: [{
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Beijing',
          label: '北京'
        }]
      }, {
        label: '城市名',
        options: [{
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }, {
          value: 'Dalian',
          label: '大连'
        }]
      }],
      value: '',
      input3: '',
      select: ''
    }
  }
}
</script>

<style lang="scss">
  .register-body{
    .el-input__inner{
      border-radius: 0;
    }
    .el-select .el-input {
      width: 330px;
      margin: 10px auto;
    }
    .input-with-select .el-input-group__prepend {
      background-color: #fff;
    }
    .el-select .el-input__inner:focus, .el-select .el-input.is-focus .el-input__inner {
      border-color: #ff6700;
    }
    .register-content-phonenumber{
      .el-select .el-input{
        width: 72px;
      }
    }
  }
</style>
<style scoped lang="scss">
.register-body{
  background-color: #f9f9f9;
  width: 100%;
  height: 100vh;
  min-height: 700px;
  padding-top: 150px;
}
  .register-content{
    width: 854px;
    height: 548px;
    background-color: #fff;
    margin: 0 auto;
    text-align: center;
    h1{
      margin-top: 30px;
      font-size: 35px;
    }
    .register-content-area, .register-content-phonenumber{
      width: 330px;
      margin: 20px auto auto;
      text-align: left;
      font-weight: normal;
      font-size: 12px;
      color: #333;
      input{
        width: 236px;
        height: 38px;
        outline: none;
        border: 1px solid #DCDFE6;
        font-size: 14px;
        padding: 0 10px;
        &:focus{
          border-color: #ff6700;
        }
      }
    }
    .register-content-btn{
      display: block;
      cursor: pointer;
      margin: 20px auto;
      width: 330px;
      font-size: 18px;
      background-color: #ff6700;
      outline: none;
      border: 1px solid #ff6700;
      height: 40px;
      color: #fff;
    }
    a{
      display: block;
      margin-top: 70px;
      color: #757575;
      font-size: 14px;
      span{
        color: #333;
      }
    }
  }
</style>
