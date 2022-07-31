<template>
  <div class="Media">
    <div class="mod-section">
      <div class="mod-con">
        <h2 style="color:#2a2e2e"><i>媒体中心</i></h2>
      </div>
    </div>

    <div class="mod-tab-container" id="searchBar">
      <div class="mod-tab" :class="{ isFixed: searchBarFixed }">
        <div class="mod-con">
          <ul>
            <li :class="{ active: active === 0 }" @click="scrollTo(0)"><a>企业动态</a></li>
            <li :class="{ active: active === 1 }" @click="scrollTo(1)"><a>财务新闻</a></li>
            <li :class="{ active: active === 2 }" @click="scrollTo(2)"><a>腾讯视角</a></li>
            <li :class="{ active: active === 3 }" @click="scrollTo(3)"><a>媒体资料库</a></li>
            <li :class="{ active: active === 4 }" @click="scrollTo(4)"><a>联系我们</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mod-tab-content">
      <div></div>
      <div class="brand-item brand-item-a">
        <div class="mod-con">
          <div class="t-flx clearfix">
            <div class="label-box">
              <h3>企业动态</h3>
            </div>
            <div class="look-more">
              <a>查看全部<i></i></a>
            </div>
          </div>
          <div class="dynamics-flx">
            <div class="list-box" v-for="index in dynamics" :key="index.id">
              <a>
                <img :src=index.img class="img">
                <div class="mess">
                  <p class="title">{{ index.title }}</p>
                  <p class="desc">{{ index.desc }}</p>
                  <p class="date">{{ index.date }}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="brand-item brand-item-b" style="background: #FBFBFB;">
        <div class="mod-con">
          <div class="t-flx clearfix">
            <div class="label-box">
              <h3>财务新闻</h3>
            </div>
            <div class="look-more">
              <a>查看全部<i></i></a>
            </div>
          </div>
          <div class="new-mod-flx">
            <div class="b-box l-box">
              <h4>业绩新闻</h4>
              <div class="list-box">
                <div class="list clear-margin">
                  <div class="mess">
                    <p class="title"><a
                        href="https://static.www.tencent.com/uploads/2022/05/18/9a46878abd6009cacd79f241a814442b.pdf"
                        target="_blank">腾讯公布二零二二年第一季业绩</a></p>
                    <p class="abstract">
                      <a href="https://mp.weixin.qq.com/s/HqwPuKHrmIzhF945btD4-Q" style="color: #0052d9">
                        <span>业绩摘要</span>
                        <img class="blue-awart-icon" src="../assets/Media/blue-awart.png" alt="img">
                      </a>
                    </p>
                    <p class="date">2022.05.18</p>
                    <div class="line"></div>
                  </div>
                  <a href="https://static.www.tencent.com/uploads/2022/05/18/9a46878abd6009cacd79f241a814442b.pdf"
                    class="down-icon" target="_blank"></a>
                </div>
                <div class="list ">
                  <div class="mess">
                    <p class="title"><a
                        href="https://static.www.tencent.com/uploads/2022/03/23/cd1fcbdc7ba47fd0ac523ccc4f9daf7b.pdf"
                        target="_blank">腾讯公布二零二一年第四季及全年业绩</a></p>
                    <p class="abstract">
                      <a href="https://mp.weixin.qq.com/s/Y9sOpccpK9ZiOI66p6Fxhw" style="color: #0052d9">
                        <span>业绩摘要</span>
                        <img class="blue-awart-icon" src="../assets/Media/blue-awart.png" alt="img">
                      </a>
                    </p>
                    <p class="date">2022.03.23</p>
                    <div class="line"></div>
                  </div>
                  <a href="https://static.www.tencent.com/uploads/2022/03/23/cd1fcbdc7ba47fd0ac523ccc4f9daf7b.pdf"
                    class="down-icon" target="_blank"></a>
                </div>
              </div>
            </div>

            <div class="b-box r-box">
              <h4>其他重大新闻</h4>
              <div class="list-box">
                <div class="list clear-margin">
                  <div class="mess">
                    <p class="title"><a href="https://www.tencent.com/zh-cn/articles/2201261.html"
                        target="_blank">腾讯减持Sea Limited 2.6%股权</a></p>
                    <p class="date">2022.01.04</p>
                    <div class="line"></div>
                  </div>
                  <a href="https://www.tencent.com/zh-cn/articles/2201261.html" class="down-icon" target="_blank"></a>
                </div>
                <div class="list ">
                  <div class="mess">
                    <p class="title"><a
                        href="https://static.www.tencent.com/uploads/2021/04/19/986586a0a4cb6e8e10df2c5fe74d4e8d.pdf"
                        target="_blank">腾讯发布新蓝图 “可持续社会价值创新”成为核心战略</a></p>
                    <p class="date">2021.04.19</p>
                    <div class="line"></div>
                  </div>
                  <a href="https://static.www.tencent.com/uploads/2021/04/19/986586a0a4cb6e8e10df2c5fe74d4e8d.pdf"
                    class="down-icon" target="_blank"></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="brand-item brand-item-c">
        <div class="mod-con">
          <div class="t-flx">
            <div class="label-box">
              <h3>腾讯视角</h3>
            </div>
            <div class="look-more">
              <a>查看全部<i></i></a>
            </div>
          </div>
          <div class="perspective-flx clearfix">
            <div class="pic">
              <a>
                <img src="../assets/Media/375f23a4e3331fefad515a5d08a300fc.png" class="img">
                <div class="label">
                  <p class="txt">科技助力保护濒危野生东北虎</p>
                </div>
              </a>
            </div>
            <div class="list-box">
              <div class="li" v-for="index in perspective" :key="index.id">
                <a>
                  <p class="label">{{ index.label }}</p>
                  <p class="date">{{ index.date }}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="brand-item brand-item-d" style="background: #FBFBFB;">
        <div class="mod-con">
          <div class="t-flx">
            <div class="label-box">
              <h3>媒体资料库</h3>
            </div>
          </div>
          <div class="media-tab">
            <ul class="ul">
              <li :class="{ active_li: active_li === 0 }" @click="To(0)">
                <em class="line"></em>
                <img src="../assets/Media/icon-2.png" alt="img">
                <p class="label">视频资料</p>
              </li>
              <li :class="{ active_li: active_li === 1 }" @click="To(1)">
                <em class=" line"></em>
                <img src="../assets/Media/icon-3.png" alt="img">
                <p class="label">企业图片</p>
              </li>
              <li :class="{ active_li: active_li === 2 }" @click="To(2)">
                <em class=" line"></em>
                <img src="../assets/Media/icon-4.png" alt="img">
                <p class="label">活动图集</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="con-tab-box">
          <div class="mod-con">
            <div class="con-tab con-tab-2 video-con-tab" v-show="active_li === 0">
              <div class="list-box media-content">
                <div class="list" v-for="index in video_con" :key="index.id">
                  <a>
                    <div class="pic-box"
                      :style="{ backgroundImage: 'url(' + index.item + ')', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '158px' }">

                      <img class="down-icon" src="../assets/Media/play-icon.png" alt="img">
                    </div>
                    <p class="label">{{ index.label }}</p>
                  </a>
                </div>
                <div class="list">
                  <router-link to="/media/videos">
                    <div class="pic-box">
                      <img class="pic" src="../assets/Media/media-pc-6.jpg" alt="img">
                      <div class="look-all">
                        <p class="label">查看全部</p>
                        <p class="desc">共17个视频</p>
                      </div>
                    </div>
                    <p class="label"></p>
                  </router-link>
                </div>
              </div>
            </div>

            <div class="con-tab con-tab-3 image-con-tab" v-show="active_li === 1">
              <div class="list-box media-content">
                <div class="list" v-for="index in image_con" :key="index.id">
                  <a>
                    <div class="pic-box"
                      :style="{ backgroundImage: 'url(' + index.item + ')', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '158px' }">

                      <img class="down-icon" src="../assets/Media/down-icon.png" alt="img">
                    </div>
                  </a>
                </div>
                <div class="list">
                  <router-link to="/media/images">
                    <div class="pic-box">
                      <img class="pic" src="../assets/Media/media-pc-6.jpg" alt="img">
                      <div class="look-all">
                        <p class="label">查看全部</p>
                        <p class="desc">共10张图片</p>
                      </div>
                    </div>
                    <p class="label"></p>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="con-tab con-tab-4" v-show="active_li === 2">
              <div class="list-box media-content">
                <div class="list" v-for="index in imageList" :key="index.id">
                  <a>
                    <div class="pic-box"
                      :style="{ backgroundImage: 'url(' + index.item + ')', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '158px' }">

                      <img class="down-icon" src="../assets/Media/down-icon.png" alt="img">
                    </div>
                    <p class="label">{{ index.label }}</p>
                  </a>
                </div>
                <div class="list">
                  <router-link to="/media/activities">
                    <div class=" pic-box">
                      <img class="pic" src="../assets/Media/media-pc-6.jpg" alt="img">
                      <div class="look-all">
                        <p class="label">查看全部</p>
                        <p class="desc">共13部图集</p>
                      </div>
                    </div>
                    <p class="label"></p>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="brand-item brand-item-e">
        <div class="mod-con">
          <div class="link-box">
            <a>
              <img class="bg" src="../assets/Media/jons-bg.jpg" alt="img">
              <div class="mess">
                <h2>联系我们</h2>
                <p class="desc"></p>
                <div class="go-link">
                  <p>媒体查询</p>
                  <i class="go-icon"><img src="../assets/Media/go-icon.png" alt="img"></i>
                </div>
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
  name: 'Media',
  data () {
    return {
      searchBarFixed: false,
      active: 0,
      // 企业动态
      dynamics: [
        { id: 1, img: require('../assets/Media/b1d0c5c2eb24b7df7fe24af04dae207d.jpg_article.jpg'), title: '腾讯游戏连续两年荣获绿色游戏创意大奖', desc: '腾讯游戏推出的碳中和主题科普小游戏《碳碳岛》荣获第三届“绿色游戏创意计划”年度“最快落实奖”。', date: '2022.07.12' },
        { id: 2, img: require('../assets/Media/a376cf74c7ac7700f041e82f3cf1197b.jpg_article.jpg'), title: '腾讯游戏发布40余款产品与内容，探索游戏技术所带来的新价值与新体验', desc: '腾讯游戏SPARK 2022发布会在线上举行。', date: '2022.06.27' },
        { id: 3, img: require('../assets/Media/21db95cae43f3e4ab56809675a85c0c2.jpg_article.jpg'), title: '腾讯以科技助力三星堆考古与文物保护', desc: '6月14日，腾讯与四川省文物局宣布，将以四川广汉三星堆遗址为重点。', date: '2022.06.14' },
      ],
      // 腾讯视角
      perspective: [
        { id: 1, label: '微信支付助力实现碳中和目标', date: '2022.07.27' },
        { id: 2, label: '腾讯会议天籁实验室用AI帮听障人群“清”听世界', date: '2022.07.1' },
        { id: 3, label: '解锁数字人潜能', date: '2022.07.08' },
        { id: 4, label: '游戏技术助益现实世界创新发展', date: '2022.06.29' },
      ],
      // 媒体资料库的激活事件
      active_li: 0,
      video_con: [
        { id: 1, item: 'https://static.www.tencent.com/uploads/2021/09/17/5b34859d0db41ef49fe47b31e3e42523.jpg!media.cover', label: '让听障儿童首次享受音乐' },
        { id: 2, item: 'https://static.www.tencent.com/uploads/2021/09/07/6e33365a46d05c8e67e03e11a9730bec.png!media.cover', label: '99公益日' },
        { id: 3, item: 'https://static.www.tencent.com/uploads/2021/09/07/3e33667672e9aa8480a5be68d4f2a1ae.png!media.cover', label: '“天才妈妈”以祖传工艺打造潮流时尚' },
        { id: 4, item: 'https://static.www.tencent.com/uploads/2021/07/01/90ef63263a271e365004034fdd0c2dbf.jpg!media.cover', label: '腾讯美国洛杉矶办公室' },
        { id: 5, item: 'https://static.www.tencent.com/uploads/2021/06/22/e04e8afe4d0ec1c9c87f072bfd92628a.jpg!media.cover', label: '视障工程师帮助低视力人群扫除信息障碍' },
        { id: 6, item: 'https://static.www.tencent.com/uploads/2021/06/03/b32182a4858e1279b4ec594ed35f02cd.jpg!media.cover', label: '腾讯美国洛杉矶新办公室速览' },
        { id: 7, item: 'https://static.www.tencent.com/uploads/2021/06/03/7b45f27daf66a792c5ed188af0c64dd0.jpg!media.cover', label: '腾讯在美国洛杉矶开设新办公室' },
      ],
      image_con: [
        { id: 1, item: 'https://static.www.tencent.com/uploads/2019/11/10/adc22315dd4c4f33277e89bbdb1cdc91.jpg!media.cover' },
        { id: 2, item: 'https://static.www.tencent.com/uploads/2019/11/10/82924cc0132af1f1e6abd1ae39f73f2c.jpg!media.cover' },
        { id: 3, item: 'https://static.www.tencent.com/uploads/2019/11/10/80b906c3d4ff047e42a7320c84e47161.jpg!media.cover' },
        { id: 4, item: 'https://static.www.tencent.com/uploads/2019/11/10/4f34106479e212354f188666b8eb421b.jpg!media.cover' },
        { id: 5, item: 'https://static.www.tencent.com/uploads/2019/11/10/ea825f2e716b9bfacb4bc63a159c9aed.jpg!media.cover' },
        { id: 6, item: 'https://static.www.tencent.com/uploads/2019/11/10/7377509ff14de9b33f2d118e4e5d568e.jpg!media.cover' },
        { id: 7, item: 'https://static.www.tencent.com/uploads/2019/11/10/25a8bceda571cbb43a6775a035930efd.jpg!media.cover' },
      ],
      imageList: [
        { id: 1, item: 'https://static.www.tencent.com/uploads/2021/06/03/2649bbd8e971b74ecd5f09b05df455da.jpg!media.cover', label: '腾讯在美国洛杉矶开设新办公室' },
        { id: 2, item: 'https://static.www.tencent.com/uploads/2020/09/03/57fb115a68d8752c8edbb0882259ea14.jpg!media.cover', label: '2020全球电竞运动领袖峰会' },
        { id: 3, item: 'https://static.www.tencent.com/uploads/2020/01/15/6948111131e090941015951776adf346.jpg!media.cover', label: '2020微信公开课PRO' },
        { id: 4, item: 'https://static.www.tencent.com/uploads/2019/12/04/95dafa436a85cc0e63e1ec91bb51e36c.jpg!media.cover', label: '腾讯医学ME大会' },
        { id: 5, item: 'https://static.www.tencent.com/uploads/2019/12/03/a036e5e7981e89d40bce3f00945975be.jpg!media.cover', label: '腾讯科学WE大会2019' },
        { id: 6, item: 'https://static.www.tencent.com/uploads/2019/12/02/567b773db41ae1eee430a9dd298b7e4a.jpg!media.cover', label: '2019年99公益日' },
        { id: 7, item: 'https://static.www.tencent.com/uploads/2019/11/26/3f27bb5ff2310deb3e38b74fa77554c8.jpg!media.cover', label: '腾讯用户开放日(T-DAY)' },
      ],
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
      // 定义一次跳 50 个像素，数字越大跳得越快，但是会有掉帧得感觉
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
    },
    To (index) {
      this.active_li = index
    },
  }
}
</script>

<style lang="less" scoped>
.Media {
  .mod-section {
    background: url(../assets/Media/media-1.jpg) no-repeat center bottom;
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

        .t-flx {
          .label-box {
            width: auto;
            float: left;

            h3 {
              font-size: 30px;
              color: #2a2e2e;
            }
          }

          .look-more {
            float: right;
            margin-top: 12px;

            a {
              font-size: 16px;
              color: #5F6464;
              letter-spacing: 0;
              font-weight: bold;

              i {
                width: 8px;
                height: 14px;
                background: url(../assets/Media/more-awart.png) no-repeat center;
                background-size: 100% 100%;
                display: inline-block;
                margin-left: 10px;
              }
            }
          }
        }

        .clearfix:after {
          clear: both;
          overflow: hidden;
        }

        .clearfix:before {
          content: "";
          display: table;
        }
      }
    }

    .brand-item-a {
      .dynamics-flx {
        width: 100%;
        padding-top: 44px;
        overflow: hidden;

        .list-box {
          width: 32%;
          float: left;
          margin-right: 2%;

          img {
            width: 100%;
            margin-bottom: 24px;
          }

          .mess {
            padding: 0 16px;

            .title {
              font-size: 20px;
              color: #2A2E2E;
              letter-spacing: 0;
              line-height: 30px;
              font-weight: bold;
              width: 100%;
              overflow: hidden;
              text-overflow: -o-ellipsis-lastline;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              line-clamp: 2;
            }

            .desc {
              font-size: 16px;
              color: #2A2E2E;
              letter-spacing: 0;
              line-height: 29px;
              width: 100%;
              overflow: hidden;
              margin-top: 8px;
              margin-bottom: 24px;
              height: 58px;
              text-overflow: -o-ellipsis-lastline;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              line-clamp: 2;
              -webkit-box-orient: vertical;
            }

            .date {
              font-size: 16px;
              color: #919797;
              letter-spacing: 0;
              line-height: 28.8px;
              width: 100%;
              overflow: hidden;
            }
          }
        }

        .list-box:last-child {
          margin-right: 0;
        }
      }
    }

    .brand-item-b {
      .new-mod-flx {
        width: 100%;
        padding-top: 44px;
        overflow: hidden;

        .l-box {
          float: left;
          margin-left: 0.5%;
        }

        .r-box {
          float: right;
          margin-left: 0.5%;
        }

        .b-box {
          width: 49%;
          background: #fff;
          border: 1px solid #EFEFEF;
          padding: 32px 45px 41px 0px;
          box-sizing: border-box;

          h4 {
            font-size: 16px;
            color: #5f6464;
            letter-spacing: 0;
            line-height: 25px;
            font-weight: bold;
            padding-left: 32px;
          }

          .list-box {
            margin-top: 40px;

            .list {
              width: 100%;
              margin-top: 23px;
              position: relative;
              min-height: 93px;
              cursor: pointer;

              .mess {
                width: 82%;
                padding-left: 32px;
                box-sizing: border-box;
                position: relative;

                .title {
                  font-size: 20px;
                  color: #2A2E2E;
                  letter-spacing: -0.01px;
                  line-height: 30px;
                  font-weight: bold;
                  margin-bottom: 4px;
                  width: 100%;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  word-break: break-word;

                  a {
                    color: #2A2E2E;
                  }
                }

                .abstract {
                  font-size: 16px;
                  font-weight: bold;
                  color: #0052d9;
                  margin-bottom: 4px;
                  width: 100%;
                  overflow: hidden;

                  span {
                    float: left;
                  }

                  .blue-awart-icon {
                    width: 20px;
                    float: left;
                    margin-left: 3px;
                    margin-top: 2px;
                  }
                }

                .date {
                  font-size: 16px;
                  color: #919797;
                  letter-spacing: 0;
                  line-height: 29px;
                  width: 100%;
                }
              }

              .down-icon {
                width: 36px;
                height: 36px;
                background: url(../assets/Media/down-icon.png) no-repeat center;
                background-size: 100% 100%;
                display: block;
                position: absolute;
                right: 0;
                top: 12px;
                display: none;
              }

              .line {
                width: 6px;
                height: 100%;
                background: #0052D9;
                position: absolute;
                left: -1px;
                top: 0;
                display: none;
              }
            }

            .list:hover .down-icon {
              display: block;
            }

            .list:hover .line {
              display: block;
            }
          }
        }
      }
    }

    .brand-item-c {
      .perspective-flx {
        width: 100%;
        overflow: hidden;
        padding-top: 44px;

        .pic {
          width: 588px;
          float: left;
          margin-right: 72px;
          position: relative;
          height: 391px;

          a {
            display: block;
            width: 100%;
            height: 100%;

            img {
              width: 100%;
              object-fit: cover;
              height: 100%;
            }
          }

          .label {
            position: absolute;
            padding: 24px;
            box-sizing: border-box;
            bottom: 0;
            font-size: 26px;
            color: #FFFFFF;
            letter-spacing: 0;
            line-height: 43px;
            font-weight: bold;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 100%;
            background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, .03), rgba(0, 0, 0, .1), rgba(0, 0, 0, .2), rgba(0, 0, 0, .3));
          }
        }

        .list-box {
          overflow: hidden;

          .li {
            width: 100%;
            margin-top: 41px;

            .label {
              font-size: 20px;
              color: #2A2E2E;
              letter-spacing: 0;
              line-height: 30px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              width: 100%;
              font-weight: bold;
            }

            .date {
              font-size: 16px;
              color: #919797;
              letter-spacing: 0;
              line-height: 29px;
              margin-top: 8px;
            }
          }

          .li:first-child {
            margin-top: 0;
          }
        }
      }
    }

    .brand-item-d {
      height: 854px;
      padding-bottom: 20px;

      .media-tab {
        width: 100%;
        overflow: hidden;
        padding-top: 24px;

        ul {
          width: 100%;
          float: left;

          li {
            width: 200px;
            float: left;
            height: 174px;
            box-sizing: border-box;
            padding-top: 37px;
            padding-bottom: 36px;
            cursor: pointer;
            position: relative;

            .line {
              background: #0052D9;
              height: 4px;
              width: 100%;
              position: absolute;
              top: -4px;
              left: 0;
              display: none;
            }

            img {
              display: block;
              margin: 0 auto;
              height: 60px;
              margin-bottom: 9px;
            }

            .label {
              width: 100%;
              text-align: center;
              font-size: 18px;
              color: #2A2E2E;
              letter-spacing: 0;
              line-height: 29px;
              font-weight: bold;
            }
          }

          .active_li {
            background: #fff;

            .line {
              display: block;
            }
          }
        }
      }

      .con-tab-box {
        width: 100%;
        background: #fff;

        .con-tab {
          height: 495px;
          box-sizing: border-box;
          padding-top: 40px;

          .list-box {
            .list:last-child {
              .pic {
                width: 276px;
                height: 155px;
              }

              .look-all {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 82, 217, 0.8);
                display: block;

                .label {
                  font-size: 24px;
                  color: #FFFFFF;
                  letter-spacing: 0;
                  line-height: 36px;
                  margin-top: 48px;
                  text-align: center;
                }

                .desc {
                  font-size: 16px;
                  color: #FFFFFF;
                  letter-spacing: 0;
                  line-height: 25px;
                  text-align: center;
                }
              }
            }

          }
        }
      }
    }

    .brand-item-e {
      .link-box {
        width: 100%;
        overflow: hidden;
        position: relative;

        a {
          .bg {
            width: 100%;
          }
        }

        .mess {
          position: absolute;
          left: 78px;
          top: 132px;

          h2 {
            font-size: 30px;
            color: #2a2e2e;
          }

          .desc {
            font-size: 20px;
            line-height: 36px;
            color: #2a2e2e;
            margin: 4px 0 0px 0;
          }

          .go-link {
            font-size: 20px;
            font-weight: 500;
            line-height: 36px;
            color: #0052d9;
            margin-top: 16px;

            p {
              float: left;
              margin-right: 9px;
            }

            .go-icon {
              float: left;
              height: 36px;

              img {
                width: 19px;
                float: left;
                margin-top: 10px;
              }
            }
          }
        }
      }
    }
  }
}
</style>