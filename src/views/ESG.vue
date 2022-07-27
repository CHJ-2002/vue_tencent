<template>
  <div class="ESG">
    <div class="mod-section">
      <div class="mod-con">
        <h2 style="color:#FFF"><i>环境、社会与治理</i></h2>
        <p style="color:#FFF">秉持“用户为本，科技向善”的使命及愿景，腾讯致力于通过科技创新来促进环境可持续发展，解决社会问题，提高公司治理透明度。</p>
      </div>
    </div>

    <div class="mod-tab-container" id="searchBar">
      <div class="mod-tab" :class="{ isFixed: searchBarFixed }">
        <div class="mod-con">
          <ul>
            <li :class="{ active: active === 0 }" @click="scrollTo(0)"><a>环境</a></li>
            <li :class="{ active: active === 1 }" @click="scrollTo(1)"><a>社会</a></li>
            <li :class="{ active: active === 2 }" @click="scrollTo(2)"><a>治理</a></li>
            <li :class="{ active: active === 3 }" @click="scrollTo(3)"><a>ESG评级</a></li>
            <li :class="{ active: active === 4 }" @click="scrollTo(4)"><a>报告</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mod-tab-content">
      <div class="brand-item-con">
        <div class="mod-con esg-intro">
          <div class="t-flx clearfix">
            <h3 class="mod-m-title">
              <q>我们相信企业可以提供创新的解决方案来创造社会价值以及服务社会公益。</q>
            </h3>
            <div class="brief-text-box">
              <h4 class="quote-person">腾讯联合创始人兼首席执行官马化腾</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="brand-item brand-item-a" v-for="index in item" :key="index.id">
        <div class="mod-con">
          <div class="article-box">
            <div class="text-box">
              <h3>{{ index.name }}</h3>
              <h4></h4>
              <a>
                <p class="desc">{{ index.desc }}}</p>
              </a>
              <a class="go-icon">
                <img src="../assets/ESG/go-icon.png" alt="img"></a>
            </div>
            <img :src=index.img alt="img" class="bg pc-bg">
          </div>
        </div>
      </div>
      <div class="brand-item brand-item-d">
        <div class="mod-con">
          <div class="t-flx">
            <h3 class="mod-m-title">ESG评级</h3>
            <div class="desc-box">
            </div>
          </div>
          <div class="ten_accordion_item">
            <div class="ten_accordion_body">
              <div class="ten_esg" v-for="index in ten_esg" :key="index.id">
                <div class="ten_esg_icon"></div>
                <div class="ten_esg_name">
                  {{ index.name }}
                  <span>{{ index.span }}</span>
                </div>
                <div class="ten_esg_bar">
                  {{ index.bar }}
                  <div class="ten_esg_name">
                    <span style="font-style: italic">{{ index.span2 }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="brand-item brand-item-f">
        <div class="mod-con">
          <div class="t-flx">
            <h3>报告</h3>
            <div class="desc-box"></div>
          </div>
          <div class="mod-type-box">
            <div class="item" v-for="index in itemlist" :key="index.id">
              <div class="mask-bg"><img :src=index.img alt="img"></div>
              <div class="mess">
                <p class="label">{{ index.label }}</p>
                <p class="desc">{{ index.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ESG',
  data () {
    return {
      searchBarFixed: false,
      active: 0,
      item: [
        { id: 1, name: '环境', desc: '腾讯努力推动环境保护，在日常运营、员工参与、产品环境责任、公众理念倡导等多个方面取得进展。', img: require('../assets/ESG/environment-bg-1.jpg') },
        { id: 2, name: '社会', desc: '科技发展一日千里，善用科技将为人类社会带来福祉。在发展同时，腾讯亦需承担相应的技术与产品责任。', img: require('../assets/ESG/tech-for-good-bg.jpg') },
        { id: 3, name: '治理', desc: '腾讯致力于维持最高水平的企业治理。', img: require('../assets/ESG/esg-govern-bg.jpg') },
      ],
      ten_esg: [
        { id: 1, name: 'MSCI', span: '', bar: 'BBB', span2: '' },
        { id: 2, name: 'Sustainalytics', span: 'Risk Rating', bar: '22.9/100', span2: '分数越低，代表表现越好' },
        { id: 3, name: 'S&P ESG Score', span: '', bar: '34/100', span2: '行业前17%' },
      ],
      itemlist: [
        { id: 1, img: require('../assets/ESG/esg-report-bg-pc-1-small.jpg'), label: 'ESG报告', desc: '欢迎获取腾讯的ESG年度披露内容' },
        { id: 2, img: require('../assets/ESG/pdf-bg-small.jpg'), label: '企业社会责任报告', desc: '腾讯企业社会责任报告' },
        { id: 3, img: require('../assets/ESG/carbon-report-bg-small.jpg'), label: '腾讯碳中和目标及行动路线报告', desc: '点击了解腾讯可持续发展和碳中和目标细节' },
        { id: 4, img: require('../assets/ESG/ssv-report-bg-small.jpg'), label: '腾讯可持续社会价值报告', desc: '点击了解腾讯首份可持续社会价值报告细节' }
      ]
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    // 监听滚动事件
    window.addEventListener('scroll', this.onScroll, false)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    // 滑动到顶部时固定在顶部
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let offsetTop = document.querySelector('#searchBar').offsetTop
      scrollTop > offsetTop ? this.searchBarFixed = true : this.searchBarFixed = false
    },
    // 滚动监听器
    onScroll () {
      // 获取所有锚点元素
      const navContents = document.querySelectorAll('.mod-tab-content .brand-item')
      // 所有锚点元素的 offsetTop
      const offsetTopArr = []
      navContents.forEach(item => {
        offsetTopArr.push(item.offsetTop)
      })
      // 获取当前文档流的 scrollTop
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 定义当前点亮的导航下标
      let navIndex = 0
      for (let n = 0; n < offsetTopArr.length; n++) {
        // 如果 scrollTop 大于等于第n个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
        // 那么此时导航索引就应该是n了
        if (scrollTop >= offsetTopArr[n]) {
          navIndex = n
        }
      }
      this.active = navIndex
    },
    // 跳转到指定索引的元素
    scrollTo (index) {
      console.log(index)
      // 获取目标的 offsetTop
      // css选择器是从 1 开始计数，我们是从 0 开始，所以要 +1
      const targetOffsetTop = document.querySelector(`.mod-tab-content .brand-item:nth-child(${index + 2})`).offsetTop
      // 获取当前 offsetTop
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 定义一次跳 50 个像素，数字越大跳得越快，但是会有掉帧得感觉，步子迈大了会扯到蛋
      const STEP = 50
      // 判断是往下滑还是往上滑
      if (scrollTop > targetOffsetTop) {
        // 往上滑
        smoothUp()
      } else {
        // 往下滑
        smoothDown()
      }
      // 定义往下滑函数
      function smoothDown () {
        // 如果当前 scrollTop 小于 targetOffsetTop 说明视口还没滑到指定位置
        if (scrollTop < targetOffsetTop) {
          // 如果和目标相差距离大于等于 STEP 就跳 STEP
          // 否则直接跳到目标点，目标是为了防止跳过了。
          if (targetOffsetTop - scrollTop >= STEP) {
            scrollTop += STEP
          } else {
            scrollTop = targetOffsetTop
          }
          document.body.scrollTop = scrollTop
          document.documentElement.scrollTop = scrollTop
          // 关于 requestAnimationFrame 可以自己查一下，在这种场景下，相比 setInterval 性价比更高
          requestAnimationFrame(smoothDown)
        }
      }
      // 定义往上滑函数
      function smoothUp () {
        if (scrollTop > targetOffsetTop) {
          if (scrollTop - targetOffsetTop >= STEP) {
            scrollTop -= STEP
          } else {
            scrollTop = targetOffsetTop
          }
          document.body.scrollTop = scrollTop
          document.documentElement.scrollTop = scrollTop
          requestAnimationFrame(smoothUp)
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.ESG {
  .mod-section {
    background: url(../assets/ESG/esg-banner.jpg) no-repeat center bottom;
    background-size: cover;
  }

  .mod-tab-content {
    .brand-item {
      padding-top: 96px;
      padding-bottom: 96px;
      position: relative;

      .mod-con {
        width: 1200px;
        margin: 0 auto;
      }
    }

    .brand-item-con {
      padding-top: 96px;
      padding-bottom: 96px;
      position: relative;
      margin-bottom: 96px;

      .esg-intro {
        width: 1200px;
        margin: 0 auto;

        .t-flx {
          .mod-m-title {
            width: 80%;
            font-size: 32px;
            margin: 0 auto;
            overflow: hidden;
            text-align: center;
            color: #2a2e2e;
            font-family: 'KaiTi';

            q::before {
              content: open-quote;
              font-weight: bold;
              font-size: 64px;
              color: #889c0b;
            }

            q::after {
              content: close-quote;
              font-weight: bold;
              font-size: 64px;
              color: #889c0b;
              vertical-align: top;
            }
          }

          .brief-text-box {
            float: right;

            h4 {
              font-size: 20px;
              font-style: italic;
              color: #2A2E2E;
              letter-spacing: 0;
              text-align: center;
              line-height: 40px;
              font-weight: 400;
              margin: 24px auto;
            }
          }
        }
      }
    }

    .brand-item-a {
      background-color: #fbfbfb;

      .mod-con {
        .article-box {
          width: 100%;
          position: relative;

          .text-box {
            position: absolute;
            padding: 64px 88px 88px 64px;
            width: 514px;
            height: 452px;
            background: #FFFFFF;
            box-sizing: border-box;
            top: 47px;
            opacity: 0.8;
            z-index: 5;

            h3 {
              font-size: 30px;
              color: #2A2E2E;
              letter-spacing: 0;
              font-family: 'KaiTi';
              line-height: 45px;
              font-weight: bold;
            }

            h4 {
              font-size: 20px;
              color: #2A2E2E;
              letter-spacing: 0;
              line-height: 30px;
              margin-top: 16px;
              margin-bottom: 4px;
              font-weight: 400;
            }

            .desc {
              font-size: 16px;
              color: #000000;
              letter-spacing: 0;
              line-height: 28px;
              margin-top: 48px;
              width: 412px;
            }

            .go-icon {
              width: 40px;
              margin-top: 24px;
              display: block;

              img {
                width: 100%;
                position: relative;
                cursor: pointer;
              }
            }
          }
        }
      }
    }

    .brand-item-a:nth-child(3) {
      background-color: #fff;
    }

    .brand-item-d {
      background-color: #fbfbfb;

      .mod-con {
        .t-flx {
          .mod-m-title {
            width: 100%;
            overflow: hidden;
            text-align: center;
            font-size: 30px;
            color: #2a2e2e;
            font-family: 'KaiTi';
            font-style: italic;
          }

          .desc-box {
            overflow: hidden;
            margin-top: 24px;
          }
        }

        .ten_accordion_item {
          width: 90%;
          border-bottom: none;
          margin: 0 auto;
          display: block;

          .ten_accordion_body {
            padding: 0px 0px 24px 0px;

            .ten_esg {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              margin: 24px 0px;

              .ten_esg_icon {
                display: block;
                width: 48px;
                height: 48px;
                border-radius: 50%;
                margin-right: 24px;
                background: #194AC3;
                background-size: 18px;
                background-repeat: no-repeat;
                background-position: center center;
              }

              .ten_esg_name {
                font-size: 18px;
                color: #0a0302;

                span {
                  font-size: 12px;
                  color: #5f6464;
                  display: block;
                }
              }

              .ten_esg_bar {
                text-align: left;
                justify-self: flex-end;
                width: 25%;
                position: relative;
                padding: 0px 0px 20px 0px;
                max-width: 300px;
                margin-right: 25%;
                margin-left: auto;
                color: #194AC3;
                font-size: 18px;
              }
            }

            .ten_esg:nth-child(1),
            .ten_esg:nth-child(3) {
              .ten_esg_icon {
                background-image: url(../assets/ESG/stats.png);
              }
            }

            .ten_esg:nth-child(2) {
              .ten_esg_icon {
                background-image: url(../assets/ESG/clipboard.png);
              }
            }
          }
        }
      }
    }

    .brand-item-f {
      .mod-con {
        .t-flx {
          h3 {
            width: 100%;
            overflow: hidden;
            text-align: center;
            font-size: 30px;
            color: #2a2e2e;
            font-family: 'KaiTi';
            font-style: italic;
          }

          .desc-box {
            overflow: hidden;
            margin-top: 24px;
          }
        }

        .mod-type-box {
          overflow: hidden;

          .item {
            width: 45%;
            margin: 12px;
            float: left;
            position: relative;
            overflow: hidden;

            .mask-bg {
              width: 100%;
              overflow: hidden;
              box-sizing: border-box;

              img {
                height: 320px;
                width: 100%;
                display: block;
              }
            }

            .mess {
              position: absolute;
              width: 100%;
              box-sizing: border-box;
              padding: 32px;
              left: 0;
              bottom: 30%;

              .label {
                font-size: 24px;
                color: #2a2e2e;
                font-family: 'KaiTi';
                margin-bottom: 8px;
                font-weight: bold;
                font-style: italic;
              }
            }
          }
        }
      }
    }
  }
}
</style>