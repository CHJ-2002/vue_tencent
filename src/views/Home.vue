<template>
  <div class="home">
    <div class="banner">
      <el-carousel :interval="2000" height="550px">
        <el-carousel-item v-for="item in imgurl" :key="item.id">
          <img :src="item.img" class="banner_img">
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="cent">
      <el-row :gutter="20">
        <el-col :span="14" :push="1">
          <div class="grid-content bg-purple boxShadow">
            <img src="../assets/home/375f23a4e3331fefad515a5d08a300fc.png_article.jpg" alt="" class="ten_img transform">
            <div class="ten_body">
              <span class="ten_tagline"><i>2002.07.04</i></span>
              <a>
                <h3>科技助力保护濒危野生东北虎</h3>
                <p>今年年初，腾讯与国家林业和草原局联合推出了首张东北虎豹国家公园12.5亿像素VR全景照片。</p>
              </a>
            </div>
          </div>
        </el-col>
        <el-col :span="8" :push="1">
          <div class="grid-content bg-purple boxShadow">
            <img src="../assets/home/234a4ea1e979b2dd0a3775fa3fbf0114.png" class="ten_img2 transform">
            <div class="ten_body2">
              <span class="ten_tagline--fine"><i>2022.07.19</i></span>
              <a>
                <h3>腾讯会议天籁实验室用AI帮听障人群“清”听世界</h3>
                <p>音频质量的改善和降噪效果可以为听障人群提供帮助，而这正是对腾讯“科技向善”使命的践行。</p>
              </a>
            </div>
          </div>
        </el-col>
      </el-row>

      <br>

      <el-row :gutter="20">
        <el-col :span="7" :push="1">
          <div class="grid-content bg-purple boxShadow">
            <img src="../assets/home/1e3ba2b71508a8875a0e33d054e15c40.png"
              style="width:100%;height:250px;cursor: pointer;" class="transform">
            <div class="ten_body2" style="background:#0052D9">
              <span class="ten_tagline--fine"><i>2022.07.08</i></span>
              <a>
                <h3>解锁数字人潜能</h3>
                <p>逼真的数字人对人类日常生活的影响越来越大。随着数字人群体扩大，你与数字人的互动也会越来越多。</p>
              </a>
            </div>
          </div>
        </el-col>
        <el-col :span="7" :push="1">
          <div class="grid-content bg-purple boxShadow">
            <img src="../assets/home/0935ca0ea65acc0543be19a34d66efdb.png_article.jpg"
              style="width:100%;height:250px;cursor: pointer" class="transform">
            <div class="ten_body" style="height:345px;background:#fff">
              <span class="ten_tagline"><i>2022.06.29</i></span>
              <a>
                <h3>游戏技术助益现实世界创新发展</h3>
                <p>游戏发展至今，其价值和意义远不止娱乐。增强现实和虚拟现实等游戏技术已成为解决现实世界问题的新方法。</p>
              </a>
            </div>
          </div>
        </el-col>
        <el-col :span="8" :push="1">
          <div class="grid-content bg-purple boxShadow">
            <img src="../assets/home/95462232bb47f1e5751d1299bee10335.jpg_article.jpg"
              style="width:100%;height:250px;cursor: pointer" class="transform">
            <div class="ten_body" style="height:345px;background:#eee">
              <span class="ten_tagline"><i>2022.06.24</i></span>
              <a>
                <h3>科技助力揭秘中华文化瑰宝三星堆</h3>
                <p>位于中国四川省的三星堆遗址被视为20世纪最重要的考古发现之一，它将人们的目光拉回4500年前神秘的古蜀国。</p>
              </a>
            </div>
          </div>
        </el-col>
      </el-row>

      <br>

      <el-row :gutter="20">
        <el-col :span="14" :push="1">
          <div class="grid-content bg-purple boxShadow">
            <img src="../assets/home/banner-wwl-2.jpg" alt="" class="ten_img transform">
            <div class="ten_body">
              <span class="ten_tagline"><i>2002.05</i></span>
              <a>
                <h3>为她力量喝彩</h3>
                <p>今年国际妇女节期间，我们推出#WomenWhoLead专题文章，分享腾讯七位女性领袖的事业与生活心得。</p>
              </a>
            </div>
          </div>
        </el-col>
        <el-col :span="8" :push="1">
          <div class="grid-content bg-purple boxShadow">
            <img src="../assets/home/8f1bd76063413ce21b6dd2450d8b0073.png_article.jpg" class="ten_img2 transform"
              style="height:254px">
            <div class="ten_body2" style="background:#0052D9">
              <span class="ten_tagline--fine"><i>2022.06.08</i></span>
              <a>
                <h3>能源专家推动腾讯碳中和</h3>
                <p>在很多人开始考虑退休的年纪，翟永平选择加入腾讯，帮助公司实现碳中和目标。</p>
              </a>
            </div>
          </div>
        </el-col>
      </el-row>

      <br>

      <el-row :gutter="20">
        <el-col :span="14" :push="1">
          <div class="grid-content bg-purple boxShadow">
            <img src="../assets/home/bg-together.png" class="ten_img3 transform">
            <div class="ten_img_shadow"></div>
            <div class="ten_img_txt">
              <div>
                <a>
                  <h3>全球战疫 一起行动</h3>
                  <p>腾讯发挥科技优势，为远程办公、学习和娱乐提供工具和服务，减缓新冠疫情传播。</p>
                </a>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="8" :push="1">
          <div class="grid-content bg-purple boxShadow ten_img_play--i">
            <img src="../assets/home/5b34859d0db41ef49fe47b31e3e42523.jpg_media.jpg" class="ten_img3 transform">
            <div class="ten_img_txt" style="padding:0 40px;">
              <div>
                <a>
                  <h3>让听障儿童首次享受音乐</h3>
                </a>
              </div>
              <a class="ten_img_play"></a>
            </div>
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="22" :push="1">
          <div class="grid-content bg-purple ten_main">
            <ul class="ten_links">
              <li>
                <h1>公司简介</h1>
              </li>
              <li>
                <h1>企业文化</h1>
              </li>
              <li>
                <h1>办公地点</h1>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="ten_bg--dark" style="font-style:italic">
      <div class="ten_main">
        <div class="ten_home--mobile"></div>
        <div class="ten_home">
          <div class="ten_home_l">
            <a @mouseover="left1" ref="left1">
              <h2>连接用户与生活</h2>
              <p>让生活更便捷更多彩</p>
              <img src="../assets/home/icon_arrow_r.png" alt="" ref="img1">
            </a>
            <a @mouseover="left2" ref="left2">
              <h2>连接企业与科技</h2>
              <p>数字化助手，助力产业升级</p>
              <img src="../assets/home/icon_arrow_r.png" alt="" ref="img2">
            </a>
            <a @mouseover="left3" ref="left3">
              <h2>连接现在与未来</h2>
              <p>探索面向未来的创新科技</p>
              <img src="../assets/home/icon_arrow_r.png" alt="" ref="img3">
            </a>
          </div>
          <div class="ten_home_r">
            <div class="ten_home_card home1" v-if="home === 'one'">
              <div class="ten_img">
                <img src="../assets/home/index_link_1_1.jpg" alt="">
                <a>
                  <h3>通信与社交</h3>
                  <p>连接人与人，提供功能丰富的即时通信和社交平台，让沟通更便捷。</p>
                </a>
              </div>
              <div class="ten_img">
                <img src="../assets/home/index_link_1_2.jpg" alt="">
                <a>
                  <h3>数字内容</h3>
                  <p>基于优质内容，以技术为驱动引擎，探索社交和内容融合的下一代形态。</p>
                </a>
              </div>
              <div class="ten_img">
                <img src="../assets/home/index_link_1_3.jpg" alt="">
                <a>
                  <h3>金融科技服务</h3>
                  <p>连接用户、商户和金融机构，提供安全、专业、便捷的金融产品与服务。</p>
                </a>
              </div>
              <div class="ten_img">
                <img src="../assets/home/index_link_1_4.jpg" alt="">
                <a>
                  <h3>工具</h3>
                  <p>提供多种工具性软件，帮助用户快速直接解决各项具体需求。</p>
                </a>
              </div>
            </div>
            <div class="ten_home_card home2" v-else-if="home === 'two'">
              <div class="ten_img">
                <img src="../assets/home/index_link_2_1.jpg" alt="">
                <a>
                  <h3>腾讯广告营销</h3>
                  <p>大数据营销平台，汇聚腾讯全量应用场景，提供一体化数字化营销方案。</p>
                </a>
              </div>
              <div class="ten_img">
                <img src="../assets/home/index_link_2_2.jpg" alt="">
                <a>
                  <h3>腾讯云</h3>
                  <p>提供领先的云产品与云服务，辅助企业走向数字化和全球化。</p>
                </a>
              </div>
              <div class="ten_img" style="width:100%;height: 315px;">
                <img src="../assets/home/index_link_2_3.jpg" alt="">
                <a>
                  <h3>智慧产业</h3>
                  <p>通过云、AI、大数据分析、安全、支付、小程序、LBS等互联网前沿技术和产品，
                    <br>
                    打造智慧产业方案，助力产业数字化升级。
                  </p>
                </a>
              </div>
            </div>
            <div class="ten_home_card home3" v-else-if="home === 'three'">
              <div class="ten_img">
                <img src="../assets/home/index_link_3_1.jpg" alt="">
                <a>
                  <h3>人工智能</h3>
                  <p>运用多种技术资产，提升人工智能实力，惠及人类和世界。</p>
                </a>
              </div>
              <div class="ten_img">
                <img src="../assets/home/index_link_3_2.jpg" alt="">
                <a>
                  <h3>物联网</h3>
                  <p>通过腾讯云物联网，致力提供IoT全栈产品和解决方案。</p>
                </a>
              </div>
              <div class="ten_img">
                <img src="../assets/home/index_link_3_3.jpg" alt="">
                <a>
                  <h3>多媒体</h3>
                  <p>腾讯多媒体实验室专注音视频通信技术的前瞻性研究。</p>
                </a>
              </div>
              <div class="ten_img">
                <img src="../assets/home/index_link_3_4.jpg" alt="">
                <a>
                  <h3>腾讯探索</h3>
                  <p>携手合作伙伴探索未来和相关技术，帮助解决全球在食物、能源和水源方面的挑战。</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="ten_subbanner--type1">
      <div class="ten_main">
        <div class="ten_main--left">
          <el-carousel :interval="4000" height="600px">
            <el-carousel-item v-for="item in imgLine" :key="item.id">
              <img :src="item.img">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="ten_subbanner_txt">
          <a>
            <h2><i>连接<br>责任与信任</i></h2>
            <h5><i>聚合微小善行，以科技让世界更美好</i></h5>
            <p>
              <img src="../assets/home/icon_arrow_r_dark.png" alt="">
            </p>
          </a>
        </div>
      </div>

    </div>

    <div class="ten_subbanner--type2">
      <el-carousel :interval="3000" height="680px">
        <el-carousel-item v-for="item in imgList" :key="item.id">
          <img :src="item.img">
        </el-carousel-item>
      </el-carousel>
    </div>

    <el-backtop></el-backtop>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      imgurl: [
        { id: 0, img: require("../assets/home/banner1.jpg") },
        { id: 1, img: require("../assets/home/banner2.jpg") },
        { id: 2, img: require("../assets/home/banner3.jpg") },
        { id: 3, img: require("../assets/home/banner4.jpg") },
      ],
      imgLine: [
        { id: 0, img: require("../assets/home/index_resp_bg0.png") },
        { id: 1, img: require("../assets/home/index_resp_bg1.jpg") },
        { id: 2, img: require("../assets/home/index_resp_bg2.jpg") },
        { id: 3, img: require("../assets/home/index_resp_bg3.jpg") },
      ],
      imgList: [
        { id: 0, img: require("../assets/home/index_develop_bg1.jpg") },
        { id: 1, img: require("../assets/home/index_develop_bg2.jpg") },
        { id: 2, img: require("../assets/home/index_develop_bg3.jpg") },
      ],
      home: 'one',
    }
  },
  mounted () {
    this.left1()
  },
  methods: {
    left1 () {
      this.$refs.left1.style.opacity = '1'
      this.$refs.left1.style.transform = 'translateX(20px)'
      this.$refs.left2.style.transform = ''
      this.$refs.left3.style.transform = ''
      this.$refs.left2.style.opacity = '0.5'
      this.$refs.left3.style.opacity = '0.5'
      this.home = 'one'
      this.$refs.img1.style.display = 'block'
      this.$refs.img2.style.display = 'none'
      this.$refs.img3.style.display = 'none'

    },
    left2 () {
      this.$refs.left1.style.transform = ''
      this.$refs.left2.style.transform = 'translateX(20px)'
      this.$refs.left3.style.transform = ''
      this.$refs.left1.style.opacity = '0.5'
      this.$refs.left2.style.opacity = '1'
      this.$refs.left3.style.opacity = '0.5'
      this.home = 'two'
      this.$refs.img1.style.display = 'none'
      this.$refs.img2.style.display = 'block'
      this.$refs.img3.style.display = 'none'
    },
    left3 () {
      this.$refs.left1.style.transform = ''
      this.$refs.left2.style.transform = ''
      this.$refs.left3.style.transform = 'translateX(20px)'
      this.$refs.left1.style.opacity = '0.5'
      this.$refs.left2.style.opacity = '0.5'
      this.$refs.left3.style.opacity = '1'
      this.home = 'three'
      this.$refs.img1.style.display = 'none'
      this.$refs.img2.style.display = 'none'
      this.$refs.img3.style.display = 'block'
    }
  }
}
</script>

<style lang="less" scoped>
.boxShadow:hover {
  box-shadow: #999 0 0 5px;
  transform: translateY(-5px);
  transition: .5s;
  overflow: hidden;
}

.boxShadow:hover .transform {
  transform: scale(1.1);
  transition: all 1s;
}

.home {
  min-width: 1300px;

  .banner {
    .banner_img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .cent {
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;

    .ten_img {
      width: 100%;
      height: calc(600px - 248px);
      cursor: pointer;
    }

    .ten_body {
      width: 100%;
      height: 248px;
      background: #fff;
      padding: 24px;
      transform: translateY(-2.5px);

      h3 {
        font-weight: normal;
        font-size: 24px;
        margin: 12px 0px;
      }

      p {
        padding: 12px 0;
        font-size: 16px;
        line-height: 1.5em;
        margin: 12px 0px;
        font-weight: normal;
      }

      a:hover h3 {
        color: #0052D9;
      }
    }

    .ten_img2 {
      width: 100%;
      height: auto;
      cursor: pointer;
    }

    .ten_body2 {
      width: 100%;
      height: 345px;
      background: rgb(0, 169, 206);
      color: #FFF;
      padding: 24px;
      transform: translateY(-2.5px);

      h3 {
        font-weight: normal;
        font-size: 24px;
        margin: 12px 0px;
      }

      p {
        padding: 12px 0;
        font-size: 16px;
        line-height: 1.5em;
        margin: 12px 0px;
        font-weight: normal;
      }
    }

    .ten_img3 {
      width: 100%;
      height: 314px;
      object-fit: cover;
      cursor: pointer;
    }

    .ten_img_shadow {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 314px;
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);
    }

    .ten_img_txt {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: row;
      padding: 0px 80px;

      a {
        text-decoration: none;
        color: #fff;


        h3 {
          font-weight: normal;
          font-size: 24px;
          margin: 12px 0px;
        }

        p {
          padding: 12px 0;
          font-size: 16px;
          line-height: 1.5em;
          margin: 12px 0px;
          font-weight: normal;
        }
      }
    }

    .ten_img_play {
      display: block;
      border-radius: 50%;
      position: absolute;
      top: calc(50% - 36px);
      left: calc(50% - 36px);
      width: 72px;
      height: 72px;
      background: rgba(25, 74, 195, 0.95);
    }

    .ten_img_play:after {
      content: "";
      display: block;
      position: absolute;
      top: calc(50% - 12px);
      left: calc(50% - 4px);
      width: 0px;
      height: 0px;
      transform: scaleY(0.6);
      border-width: 12px;
      border-style: solid;
      border-color: transparent transparent transparent #FFF;
    }

    .ten_main {
      width: 1200px;
      padding-left: -10px;
      padding-right: -10px;
      margin: 75px auto;

      .ten_links {
        width: 100%;
        height: auto;
        display: flex;

        li {
          display: inline-block;
          width: 392px;
          height: 230px;
          line-height: 230px;
          cursor: pointer;

          h1 {
            color: #fff;
            text-align: center;

          }
        }

        li:hover h1 {
          animation: back 1s forwards;
        }

        li:nth-child(1) {
          background: url(../assets/home/index_detail_1.jpg) no-repeat;
          background-size: 100% 100%;
        }

        li:nth-child(2) {
          background: url(../assets/home/index_detail_2.jpg) no-repeat;
          background-size: 100% 100%;
          margin: 0 20px;
        }

        li:nth-child(3) {
          background: url(../assets/home/index_detail_3.jpg) no-repeat;
          background-size: 100% 100%;
        }
      }
    }

  }

  .ten_bg--dark {
    width: 100%;
    height: 630px;
    background: #1B1F25;
    color: #FFF;

    .ten_main {
      width: 100%;
      height: 630px;
      max-width: 1200px;
      margin: 0px auto;

      .ten_home {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        font-family: 'TencentSansw3';

        .ten_home_l {
          width: calc(33.33% - 12px);
          padding-top: 24px;

          a {
            height: 120px;
            display: block;
            margin: 12px 0px;
            opacity: 0.5;
            font-weight: normal;

            h2 {
              font-family: 'TencentSansw7';
              font-size: 32px;
              line-height: 1.2em;
              margin: 12px 0px;
              padding: 0px;
              font-weight: normal;
            }

            img {
              width: 48px;
              height: 20px;
              margin-top: 12px;
            }
          }

          a:first-child {
            opacity: 1;
          }
        }

        .ten_home_r {
          width: calc(66.66% - 12px);
          height: 630px;

          .ten_img {
            width: 50%;
            height: 315px;
            float: left;
            position: relative;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              z-index: 2;
            }

            a {
              padding: 24px;
              z-index: 999;
              position: absolute;
              bottom: 0;
              left: 0;

              h3 {
                font-size: 24px;
                line-height: 1.4em;
                margin: 12px 0px;
                padding: 0px;
                font-weight: normal;
              }

              p {
                display: none;
              }
            }

            a:hover p {
              display: block;
            }

          }
        }
      }
    }
  }

  .ten_subbanner--type1 {
    width: 100%;
    height: 600px;
    margin: 72px 0;

    .ten_main {
      width: 100%;
      max-width: 1200px;
      height: 600px;
      margin: 0px auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;

      .ten_main--left {
        width: 50%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: relative;
        }
      }

      .ten_subbanner_txt {
        width: 50%;
        padding-left: 72px;

        h2 {
          font-size: 32px;
          line-height: 1.2em;
          margin: 12px 0px;
          padding: 0px;
          font-weight: normal;
        }

        h5 {
          font-size: 18px;
          line-height: 1.8em;
          margin: 12px 0px;
          padding: 0px;
          font-weight: normal;
        }

        p {
          font-size: 16px;
          line-height: 1.5em;
          margin: 12px 0px;
          padding: 0px;
          font-weight: normal;

          img {
            width: 48px;
            height: 24px;
            display: none;
          }

          img:first-child {
            display: block;
          }
        }

        a:hover h2 {
          color: #0052D9;
        }
      }
    }
  }

  .ten_subbanner--type2 {
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
    }
  }
}

@keyframes back {
  from {
    background-color: none;
  }

  to {
    background-color: #0052D9;
    opacity: 0.8;
  }
}
</style>