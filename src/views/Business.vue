<template>
  <div class="Business">
    <div class="mod-section">
      <div class="mod-con">
        <h2 style="color:#2A2E2E"><i>连接生态</i></h2>
        <p style="color:#2A2E2E">从连接人、服务及设备，到连接企业及未来科技，形成共赢的产业生态</p>
      </div>
    </div>

    <div class="mod-tab-container" id="searchBar">
      <div class="mod-tab" :class="{ isFixed: searchBarFixed }">
        <div class="mod-con">
          <ul>
            <li :class="{ active: active === 0 }" @click="To(0)"><a>面向用户</a></li>
            <li :class="{ active: active === 1 }" @click="To(1)"><a>面向企业</a></li>
            <li :class="{ active: active === 2 }" @click="To(2)"><a>创新科技</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mod-tab-wrap">
      <div class="mod-tab-content content-1" v-if="active === 0">
        <div class="mod-max-con">
          <div class="section-item con-1">
            <div class="section-item-con">
              <div class="item-txt-l">
                <div class="item-title">
                  <h3>通信与社交</h3>
                  <p class="desc">腾讯从连接人与人出发，开发和提供功能丰富、易于使用的即时通信和社交平台，以创新的方式让沟通、分享和交流变得更便捷、生动和个性化，丰富人们的生活。</p>
                </div>
              </div>
              <div class="item-con-r">
                <div class="box back1" v-for="index in item1" :key="index.id">
                  <div class="logo-pic"><img :src="index.img" alt="img"></div>
                  <div class="mess">
                    <p class="name">{{ index.name }}</p>
                    <p class="desc">{{ index.desc }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="section-item con-2" style="background: #fbfbfb;">
            <div class="section-item-con" style="padding:40px 0;">
              <div class="item-txt-l">
                <div class="item-title">
                  <h3>数字内容</h3>
                  <p class="desc">
                    腾讯不断探索更适合未来趋势的多元化社交娱乐融合体。基于优质内容，以技术为驱动引擎，我们不断探索社交和内容融合的下一代形态。透过跨屏幕、多平台、多形态的模式，为互联网用户提供多元化、多维度的内容，以满足用户的不同娱乐体验。
                    同时，腾讯深明版权及IP对创意产业发展的重要性。在尊重版权的基础上，我们不断在内容业务生态体系内发掘有潜质的IP，助力其成长。目前，我们的数字内容产品主要包括: 游戏、视频、直播、新闻、音乐、文学。
                  </p>
                </div>
              </div>
              <div class="item-con-r">
                <div class="box back2" v-for="index in item2" :key="index.id">
                  <div class="logo-pic"><img :src="index.img" alt="img"></div>
                  <div class="mess">
                    <p class="name">{{ index.name }}</p>
                    <p class="desc">{{ index.desc }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="section-item con-1">
            <div class="section-item-con">
              <div class="item-txt-l">
                <div class="item-title">
                  <h3>金融科技服</h3>
                  <p class="desc">
                    秉承合规、精品、风控、开放、有所为有所不为的发展理念，腾讯金融科技以微信支付和QQ钱包两大平台为基础，致力于连接人与金融，构建金融生态，与合作伙伴携手为全球用户提供移动支付、财富管理、信贷服务、证券投资等创新金融服务
                  </p>
                </div>
              </div>
              <div class="item-con-r">
                <div class="box back1" v-for="index in item3" :key="index.id">
                  <div class="logo-pic"><img :src="index.img" alt="img"></div>
                  <div class="mess">
                    <p class="name">{{ index.name }}</p>
                    <p class="desc">{{ index.desc }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="section-item con-2" style="background: #fbfbfb; margin-bottom: 20px;">
            <div class="section-item-con" style="padding:40px 0;">
              <div class="item-txt-l">
                <div class="item-title">
                  <h3>工具</h3>
                  <p class="desc">
                    腾讯为用户提供多种工具性软件，帮助用户快速直接地解决网络安全管理、快捷浏览、定位出行、应用管理、电子邮件等具体需求。
                  </p>
                </div>
              </div>
              <div class="item-con-r">
                <div class="box back2" v-for="index in item4" :key="index.id">
                  <div class="logo-pic"><img :src="index.img" alt="img"></div>
                  <div class="mess">
                    <p class="name">{{ index.name }}</p>
                    <p class="desc">{{ index.desc }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mod-tab-content content-2" v-else-if="active === 1">
        <div class="brand-item">
          <div class="mod-con">
            <a>
              <div class="t-flx">
                <div class="label-box">
                  <img src="../assets/Business/txad.png" alt="腾讯广告">
                </div>
                <div class="desc-box">
                  <p class="desc">国内领先的大数据营销平台，汇聚腾讯公司全量的应用场景，基于海量商业数据、营销技术与专业服务能力，提供一体化数字化营销方案。
                    腾讯广告致力于高效的营销解决方案，构建品牌与用户的美好连接，为客户提供高效的营销解决方案。</p>
                  <div class="go-icon">
                    <img src="../assets/Business/go-icon.png" alt="img">
                  </div>
                </div>
              </div>
              <div class="b-flx">
                <img src="../assets/Business/flx-1.jpg" alt="">
              </div>
            </a>
          </div>
        </div>

        <div class="brand-item" style="background: #fbfbfb;">
          <div class="mod-con">
            <a>
              <div class="t-flx">
                <div class="label-box">
                  <img src="../assets/Business/txcloud.png" alt="腾讯云">
                </div>
                <div class="desc-box">
                  <p class="desc">
                    腾讯倾力打造的云服务品牌，为客户提供领先的云产品与云服务。依托遍布全球的数据中心，我们将云计算、大数据、人工智能、物联网、安全等先进技术与智慧产业业务场景相结合，同时面向金融、教育、医疗、零售、工业、交通、能源、广电等领域，打造全面的智慧行业解决方案。
                  </p>
                  <div class="go-icon">
                    <img src="../assets/Business/go-icon.png" alt="img">
                  </div>
                </div>
              </div>
              <div class="b-flx">
                <img src="../assets/Business/flx-2.jpg" alt="">
              </div>
            </a>
          </div>
        </div>

        <div class="brand-item">
          <div class="mod-con">
            <a>
              <div class="t-flx">
                <div class="label-box">
                  <h1>智慧产业</h1>
                </div>
                <div class="desc-box">
                  <p class="desc">
                    腾讯作为“数字化助手”，利用云、AI、大数据分析、安全、支付、小程序、LBS等多种前沿互联网平台服务与技术，帮助各行各业进行数字化升级，打造智慧产业方案，不仅为他们节省成本、提高效率，还帮助客户找到新商业模式或者盈利增长点，构建连接用户与商业的智慧产业新生态。目前，腾讯已经在金融、零售、民生服务、旅游、医疗、出行和教育等产业展开布局。
                  </p>
                </div>
              </div>
              <div class="b-flx">
                <img src="../assets/Business/banner-1.jpg" alt="" v-if="active_li === 0">
                <img src="../assets/Business/banner-2.jpg" alt="" v-else-if="active_li === 1">
                <img src="../assets/Business/banner-3.jpg" alt="" v-else-if="active_li === 2">
                <img src="../assets/Business/banner-4.jpg" alt="" v-else-if="active_li === 3">
              </div>
              <div class="tab-box">
                <ul class="box">
                  <li :class="{ active_li: active_li === 0 }" @mouseenter="onEnterTd(0)">
                    <a href="https://www.tencent.com/zh-cn/business/smart-retail.html">
                      <h4 class="label">智慧零售</h4>
                      <p class="desc">腾讯智慧零售旨在为合作伙伴提供包括咨询、规划、试点运营及部署实施在内的一站式解决方案及服务。</p>
                    </a>
                  </li>
                  <li :class="{ active_li: active_li === 1 }" @mouseenter="onEnterTd(1)">
                    <a href="https://www.tencent.com/zh-cn/business/smart-healthcare.html">
                      <h4 class="label">智慧医疗</h4>
                      <p class="desc">腾讯智慧医疗，聚焦科技助力，推动医疗健康领域的技术创新、应用创新、合作模式创新。</p>
                    </a>
                  </li>
                  <li :class="{ active_li: active_li === 2 }" @mouseenter="onEnterTd(2)">
                    <a href="https://www.tencent.com/zh-cn/business/smart-transportation.html">
                      <h4 class="label">智慧出行</h4>
                      <p class="desc">在智慧出行方面，腾讯依托人工智能、高精地图、仿真平台、社交体系、移动支付及网络安全，将传统交通运输业和互联网进行融合。</p>
                    </a>
                  </li>
                  <li :class="{ active_li: active_li === 3 }" @mouseenter="onEnterTd(3)">
                    <a href="https://www.tencent.com/zh-cn/business/smart-education.html">
                      <h4 class="label">智慧教育</h4>
                      <p class="desc">腾讯智慧教育以连接、内容、社会责任为出发点，借助腾讯服务11亿用户的连接能力、科技力量、丰富的数字内容积累。</p>
                    </a>
                  </li>
                </ul>
              </div>
            </a>
          </div>
        </div>

        <div class="product-box">
          <h3><i>智慧产业工具</i></h3>
          <div class="item">
            <div class="pic">
              <img src="../assets/Business/qywx.png" alt="企业微信">
            </div>
            <p class="desc">企业微信，是腾讯微信团队为企业打造的通信与办公工具，具有与微信一致的沟通体验、丰富的OA应用及连接微信的能力，可帮助企业以连接为基础，实现智慧管理、智慧生态、智慧服务。</p>
          </div>
          <div class="item" style="margin: 0 2%;">
            <div class="pic">
              <img src="../assets/Business/txhy.png" alt="腾讯会议">
            </div>
            <p class="desc">
              腾讯会议是腾讯云旗下的一款音视频会议产品，为提升跨企业、跨区域沟通协作效率而设计，为全球用户提供高清流畅、便捷易用、安全可靠的云端会议体验。腾讯会议于2019年12月底上线，国际版（VooV
              Meeting）于2020年3月上线。</p>
          </div>
          <div class="item">
            <div class="pic">
              <img src="../assets/Business/xcx.png" alt="小程序">
            </div>
            <p class="desc">
              微信小程序为商家、企业和机构提供便捷的开发工具、运营平台以及运营支持，开发及利用小程序向微信用户提供更佳的服务，让优质的服务更多地触达用户。同时，平台也努力提高小程序商业变现的能力，通过支持广告变现等形式，为商家创造更多价值。
            </p>
          </div>
        </div>
      </div>

      <div class="mod-tab-content content-2" v-else-if="active === 2">
        <div class="brand-item">
          <div class="mod-con">
            <a>
              <div class="t-flx">
                <div class="label-box">
                  <h1><i>人工智能</i></h1>
                </div>
                <div class="desc-box">
                  <p class="desc">腾讯应用各种不同的科技资产，包括强大的计算能力、丰富的数据资料及多元的使用场景，致力提升人工智能的理解、决策及创造能力，把人工智能的研究硕果惠及人类和世界。</p>
                  <div class="go-icon">
                    <img src="../assets/Business/go-icon.png" alt="img">
                  </div>
                </div>
              </div>
              <div class="b-flx">
                <img src="../assets/Business/flx-3.jpg" alt="">
              </div>
            </a>
          </div>
        </div>

        <div class="brand-item" style="background: #fbfbfb;">
          <div class="mod-con">
            <a>
              <div class="t-flx">
                <div class="label-box">
                  <h1><i>前沿科技</i></h1>
                </div>
                <div class="desc-box">
                  <p class="desc">
                    腾讯已建立创新科技为基础的研发矩阵，打造面向未来的科技引擎，让技术创新惠及消费者，并在农业、工业、零售到医疗等多行业实现。
                  </p>
                  <br>
                </div>
              </div>
              <div class="b-flx b-flx-img">
                <img src="../assets/Business/type-box-1.jpg" alt="多媒体实验室" style="width:50%">
                <img src="../assets/Business/type-box-2.jpg" alt="物联网" style="width:50%">
                <img src="../assets/Business/type-box-3.jpg" alt="机器人" style="width:50%;transform: translateY(-5px);">
                <img src="../assets/Business/type-box-4.jpg" alt="量子计算" style="width:50%;transform: translateY(-5px)">
              </div>
            </a>
          </div>
        </div>

        <div class="brand-item">
          <div class="mod-con">
            <a>
              <div class="t-flx">
                <div class="label-box">
                  <h1><i>未来探索</i></h1>
                </div>
                <div class="desc-box">
                  <p class="desc">
                    腾讯致力营造更有活力的自然生态环境。我们与合作伙伴一起探索未来，努力发展新技术，务求克服有关粮食、能源及水资源管理等全球关键问题。目前，我们与瓦格宁根大学合作，研究以人工智能及智慧温室改善农产的方法，缓解粮食短缺的问题。
                  </p>
                  <div class="go-icon">
                    <img src="../assets/Business/go-icon.png" alt="img">
                  </div>
                </div>
              </div>
              <div class="b-flx">
                <img src="../assets/Business/flx-4.jpg" alt="">
              </div>
            </a>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Business',
  data () {
    return {
      searchBarFixed: false,
      active: 0, // 当前激活的导航索引
      // 面向用户的信息
      item1: [
        { id: 1, img: require('../assets/Business/1.1.png'), name: '微信', desc: '微信，是一个生活方式' },
        { id: 2, img: require('../assets/Business/1.2.png'), name: 'QQ', desc: '每一天，乐在沟通' },
        { id: 3, img: require('../assets/Business/1.3.png'), name: 'QQ空间', desc: '分享生活，留住感动' },
      ],
      item2: [
        { id: 1, img: require('../assets/Business/2.1.png'), name: '腾讯游戏', desc: '去发现，无限可能!' },
        { id: 2, img: require('../assets/Business/2.2.png'), name: '腾讯视频', desc: '不负好时光' },
        { id: 3, img: require('../assets/Business/2.3.png'), name: '腾讯影业', desc: '' },
        { id: 4, img: require('../assets/Business/2.4.png'), name: '微视', desc: '发现更有趣' },
        { id: 5, img: require('../assets/Business/2.5.1.png'), name: '腾讯新闻', desc: '你的关心 关系世界' },
        { id: 6, img: require('../assets/Business/2.6.png'), name: '腾讯体育', desc: '' },
        { id: 7, img: require('../assets/Business/2.7.png'), name: '腾讯动漫', desc: '' },
        { id: 8, img: require('../assets/Business/2.8.png'), name: '腾讯音乐娱乐', desc: '创造音乐无限可能' },
        { id: 9, img: require('../assets/Business/2.9.png'), name: '阅文集团', desc: '阅世界，悦无界' },
        { id: 10, img: require('../assets/Business/2.10.png'), name: '腾讯电竞', desc: '为你加冕' },
        { id: 11, img: require('../assets/Business/2.11.png'), name: '腾讯看点', desc: '看懂世界，点亮生活' },
      ],
      item3: [
        { id: 1, img: require('../assets/Business/3.7.png'), name: '微信支付', desc: '微信支付 不止支付!' },
        { id: 2, img: require('../assets/Business/3.2.png'), name: 'QQ钱包', desc: '一站式生活服务' },
        { id: 3, img: require('../assets/Business/3.3.png'), name: '理财通', desc: '微信理财，你就理财通' },
        { id: 4, img: require('../assets/Business/3.4.png'), name: '信用卡还款', desc: '发现更有趣' },
        { id: 5, img: require('../assets/Business/3.5.1.png'), name: '手机充值', desc: '' },
        { id: 6, img: require('../assets/Business/3.6.png'), name: '乘车码', desc: '' },
        { id: 7, img: require('../assets/Business/3.7.png'), name: '微信香港钱包', desc: '' },
        { id: 8, img: require('../assets/Business/3.7.png'), name: '维信马来西亚钱包', desc: '' },
        { id: 9, img: require('../assets/Business/3.9.png'), name: '腾讯区块链', desc: '' },
        { id: 10, img: require('../assets/Business/3.11.png'), name: '腾讯自选股', desc: '' },
        { id: 11, img: require('../assets/Business/3.12.png'), name: '退讯通', desc: '' },
        { id: 12, img: require('../assets/Business/3.14.png'), name: '财付通商企付', desc: '' },
      ],
      item4: [
        { id: 1, img: require('../assets/Business/4.1.png'), name: '腾讯手机管家', desc: '有实力 无所谓' },
        { id: 2, img: require('../assets/Business/4.2.png'), name: '腾讯电脑管家', desc: '' },
        { id: 3, img: require('../assets/Business/4.3.png'), name: 'QQ浏览器', desc: '我的兴趣世界' },
        { id: 4, img: require('../assets/Business/4.4.png'), name: '腾讯地图', desc: '' },
        { id: 5, img: require('../assets/Business/4.5.png'), name: '应用宝', desc: '上应用宝，下一种生活' },
        { id: 6, img: require('../assets/Business/4.6.png'), name: 'QQ邮箱', desc: '' },
        { id: 7, img: require('../assets/Business/4.7.png'), name: '微信小程序', desc: '' },
      ],
      // 面向企业的智慧产业
      active_li: 0,
    }
  },
  mounted () {
    // 监听滚动事件
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    // 滑动到顶部时固定在顶部
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let offsetTop = document.querySelector('#searchBar').offsetTop
      scrollTop > offsetTop ? this.searchBarFixed = true : this.searchBarFixed = false
    },
    To (index) {
      this.active = index
    },
    onEnterTd (index) {
      this.active_li = index
    }
  }
}
</script>

<style lang="less" scoped>
.Business {

  .mod-section {
    background: url(../assets/Business/business-1.jpg) no-repeat center bottom;
    background-size: cover;
  }

  .mod-tab-container {
    width: 100%;
    height: 69px;

    .mod-tab {
      height: 68px;
      background: #fff;
      border-bottom: 1px solid #f4f4f4;

      .mod-con ul {
        li {
          height: 68px;

          a {
            padding: 16px 0;
            display: block;
            font-size: 20px;
            position: relative;
            line-height: 36px;
          }
        }
      }
    }
  }

  .mod-tab-wrap {
    .content-1 {
      .mod-max-con {
        width: auto;
        margin-left: 12px;
        margin-right: 12px;

        .section-item {
          width: 100%;

          .section-item-con {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 96px 0;
            position: relative;
            width: 100%;

            .item-txt-l {
              width: 500px;
              margin-top: 44px;

              .item-title {
                width: 344px;
                margin: 0 auto;

                h3 {
                  font-family: 'KaiTi';
                  font-size: 24px;
                  line-height: 36px;
                  margin-bottom: 24px;
                  color: #2a2e2e;
                }

                .desc {
                  font-size: 14px;
                  line-height: 25px;
                  color: #5f6464;
                }
              }

            }

            .item-con-r {
              width: calc(100% - 500px);
              margin-top: 45px;

              .box {
                width: 25%;
                min-height: 224px;
                float: left;
                text-align: center;
                padding-top: 26px;
                box-sizing: border-box;
                cursor: pointer;
                transition: background-color 0.2s linear;

                .logo-pic {
                  width: 100%;

                  img {
                    width: 96px;
                  }
                }

                .mess {
                  margin-top: 8px;
                  width: 100%;

                  .name {
                    font-size: 20px;
                    line-height: 36px;
                    color: #2a2e2e;
                  }

                  .desc {
                    font-size: 14px;
                    line-height: 25px;
                    text-align: center;
                    color: #5f6464;
                  }
                }
              }

              .back1:hover {
                background: #fbfbfb;
              }

              .back2:hover {
                background: #fff;
              }
            }
          }
        }
      }
    }

    .content-2 {
      .brand-item {
        padding-top: 96px;
        padding-bottom: 96px;

        .mod-con {
          width: 1200px;
          margin: 0 auto;

          a {
            .t-flx {
              .label-box {
                width: auto;
                float: left;
                min-width: 240px;
                margin-right: 20px;

                img {
                  width: 200px
                }
              }

              .desc-box {
                overflow: hidden;

                .desc {
                  font-size: 14px;
                  line-height: 25px;
                  color: #5f6464;
                  margin-top: 7px;
                }

                .go-icon {
                  margin-top: 15px;
                  display: inline-block;

                  img {
                    width: 40px;
                  }
                }
              }
            }

            .b-flx {
              margin-top: 43px;
              overflow: hidden;

              img {
                width: 100%;
              }
            }


            .tab-box {
              overflow: hidden;
              height: 240px;

              .box {
                height: 240px;

                li {
                  float: left;
                  width: 25%;
                  height: 240px;
                  padding: 32px 40px 20px 40px;
                  box-sizing: border-box;
                  position: relative;
                  cursor: pointer;
                  background-color: #f2f3f5;

                  a {
                    h4 {
                      font-size: 20px;
                      line-height: 36px;
                      color: #2a2e2e;
                      margin-bottom: 8px;
                    }

                    .desc {
                      font-size: 14px;
                      line-height: 25px;
                      color: #5f6464;
                    }
                  }
                }

                .active_li {
                  background-color: #fbfbfb;
                  border-bottom: 4px solid #0052d9;
                }
              }
            }
          }
        }
      }

      .product-box {
        width: 1200px;
        height: 388px;
        margin: 0 auto;
        margin-top: -30px;
        margin-bottom: 100px;

        h3 {
          font-size: 24px;
          color: #2a2e2e;
          margin-bottom: 32px;
          width: 100%;
          text-align: center;
          font-weight: normal;
        }

        .item {
          width: 32%;
          background-color: #fbfbfb;
          height: 320px;
          box-sizing: border-box;
          padding: 53px 48px;
          float: left;

          .pic {
            margin-bottom: 16px;

            img {
              height: 32px;
            }
          }

          .desc {
            font-size: 14px;
            line-height: 25px;
            color: #5f6464;
          }
        }
      }
    }
  }
}
</style>