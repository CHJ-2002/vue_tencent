<template>
  <div class="container">
    <div class="header">
      <div class="header-con">
        <router-link href="#" class="logo" to="/Home">
          <h1>Tentent腾讯</h1>
        </router-link>
        <ul class="menu_list">
          <li class="menu_item">
            <router-link class="txt" to="/Introduce">简介</router-link>
          </li>
          <li class="menu_item">
            <router-link class="txt" to="/Business">业务</router-link>
          </li>
          <li class="menu_item">
            <router-link class="txt" to="/Staff">员工</router-link>
          </li>
          <li class="menu_item">
            <router-link class="txt" to="/ESG">ESG</router-link>
          </li>
          <li class="menu_item">
            <router-link class="txt" to="/Investor">投资者</router-link>
          </li>
          <li class="menu_item">
            <router-link class="txt" to="/Media">媒体</router-link>
          </li>
        </ul>
      </div>
    </div>


    <router-view></router-view>


    <div class="footer">
      <div class="footer_con">
        <div class="focus_us">
          <h3 class="tit">关注我们</h3>
          <ul class="focus_list">
            <li>
              <a href="#" class="wechat_btn">
                <i class="icon i_wechat"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="icon i_weibo"></i>
              </a>
            </li>
            <li><a href="#">
                <i class="icon i_twitter"></i>
              </a></li>
            <li><a href="#">
                <i class="icon i_in"></i>
              </a></li>
          </ul>
        </div>
        <div class="join_us">
          <div class="tit_area">
            <h3 class="tit">加入我们</h3>
          </div>
          <ul class="join_list">
            <li><a>社会招聘</a></li>
            <li><a>校园招聘</a></li>
            <li><a>国际招聘</a></li>
          </ul>
        </div>
        <div class="contact_us">
          <div class="tit_area">
            <h3 class="tit">联系我们</h3>
          </div>
          <ul class="contact_list">
            <li><a>客户服务</a></li>
            <li><a>合作洽谈</a></li>
            <li><a>腾讯采购</a></li>
            <li><a>媒体及投资者</a></li>
          </ul>
        </div>
        <div class="legal_info">
          <div class="tit_area">
            <h3 class="tit">法律信息</h3>
          </div>
          <ul class="legal_list">
            <li><a>服务协议</a></li>
            <li><a>隐私政策</a></li>
            <li><a>知识产权</a></li>
          </ul>
        </div>
        <div class="logo_tencent">
          <img src="../assets/home/tencent_logo.png" alt="Tencent腾讯" />
        </div>
        <div class="footer_area">
          <ul class="links">
            <li><a>法律声明</a></li>
            <li><a>阳光准则</a></li>
            <li><a>网站地图</a></li>
            <li class="num"><a>粤网文【2017】6138-1456号</a></li>
            <li class="num"><a>粤B2-20090059</a></li>
            <li class="num"><a>粤公网安备 44030502008569号</a></li>
          </ul>
          <p class="copyright">
            Copyright © 1998 - 2022 Tencent. All Rights Reserved.
            &nbsp;
            腾讯公司 版权所有
          </p>
        </div>
      </div>
    </div>
    <el-backtop></el-backtop>
  </div>

</template>

<script>
import Home from './Home.vue'
export default {
  name: 'Main',
  components: {
    Home
  }
}
</script>

<style lang="less" scoped>
.container {
  min-width: 1300px;

  .header {
    width: auto;
    height: 72px;
    background: #fff;
    border-bottom: 1px solid #ccc;

    .header-con {
      display: block;
      width: 1200px;
      height: 72px;
      margin: 0px auto;
      position: relative;
      z-index: 2;

      .logo {
        display: block;
        height: 22px;
        width: 168px;
        position: absolute;
        left: 40px;
        top: 25px;

        h1 {
          display: block;
          height: 22px;
          width: 168px;
          background: url(../assets/home/menu_logo_hover.png) no-repeat 0 0;
          text-indent: -9999px;
          overflow: hidden;
          background-size: 100% 100%;
        }
      }

      .menu_list {
        display: block;
        height: 72px;
        position: absolute;
        right: 80px;
        top: 0px;
        cursor: pointer;

        .menu_item {
          display: inline-block;
          height: 72px;
          margin-left: 72px;
          position: relative;

          .txt {
            display: block;
            height: 72px;
            line-height: 72px;
            font-size: 16px;
            color: #2b2e2e;
            font-weight: bold;
            opacity: 0.95;
            position: relative;
            z-index: 2;
            text-decoration: none;
          }
        }
      }
    }
  }

  .footer {
    width: 100%;
    height: 480px;
    background: #fbfbfb;
    position: relative;
    z-index: 1;

    .footer_con {
      width: 1200px;
      margin: 0px auto;
      height: 480px;
      position: relative;

      .tit {
        display: block;
        font-size: 20px;
        color: #5f6464;
        font-weight: normal;
        margin-bottom: 30px;
      }

      ul li a {
        display: block;
        font-size: 16px;
        color: #5f6464;
        font-weight: normal;
        margin-bottom: 18px;
      }
    }

    .focus_us {
      display: block;
      height: 55px;
      width: 100%;
      border-bottom: 1px solid #f2f3f5;
      padding-top: 33px;
      margin-bottom: 40px;
      box-sizing: content-box;

      .tit {
        float: left;
        margin-right: 33px;
      }

      .focus_list {
        li {
          display: inline-block;
          margin-right: 28px;

          a {
            display: block;
            height: 28px;
            width: 28px;

            .icon {
              display: block;
              height: 28px;
              width: 28px;
              background: url(../assets/home/icon_wechat.png) no-repeat center;
              background-size: 100% 100%;
              position: relative;
            }

            .i_weibo {
              background: url(../assets/home/icon_weibo.png) no-repeat center;
              background-size: 100% 100%;
            }

            .i_twitter {
              background: url(../assets/home/icon_twitter.png) no-repeat center;
              background-size: 100% 100%;
            }

            .i_in {
              background: url(../assets/home/icon_in.png) no-repeat center;
              background-size: 100% 100%;
            }
          }
        }
      }
    }

    .join_us,
    .contact_us,
    .legal_info {
      float: left;
      width: 216px;

      a {
        cursor: pointer;
      }
    }

    .logo_tencent {
      display: block;
      height: 28px;
      width: 212px;
      position: absolute;
      right: 75px;
      top: 50%;
      margin-top: -21px;

      img {
        width: 100%;
      }
    }

    .footer_area {
      display: block;
      width: 100%;
      position: absolute;
      bottom: 51px;
      left: 0px;

      .links li {
        display: inline-block;
        margin-right: 20px;

        a {
          font-size: 14px;
          color: #5f6464;
          margin-bottom: 0px;
          cursor: pointer;
        }
      }

      .copyright {
        font-size: 14px;
        color: #5f6464;
        float: left;
        width: 100%;
        margin-top: 12px;
      }
    }
  }
}
</style>