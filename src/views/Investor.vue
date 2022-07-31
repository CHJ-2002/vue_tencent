<template>
  <div class="Investor">
    <div class="mod-section">
      <div class="mod-con">
        <h2 style="color:#2A2E2E"><i>连接投资者</i></h2>
        <p style="color:#2A2E2E">开诚务实，为投资者创造长远价值</p>
      </div>
    </div>

    <div class="mod-tab-container" id="searchBar">
      <div class="mod-tab" :class="{ isFixed: searchBarFixed }">
        <div class="mod-con">
          <ul>
            <li :class="{ active: active === 0 }" @click="scrollTo(0)"><a>季度业绩及投资者新闻</a></li>
            <li :class="{ active: active === 1 }" @click="scrollTo(1)"><a>公告及财务报告</a></li>
            <li :class="{ active: active === 2 }" @click="scrollTo(2)"><a>业绩电话会及投资者日历</a></li>
            <li :class="{ active: active === 3 }" @click="scrollTo(3)"><a>工具包</a></li>
            <li :class="{ active: active === 4 }" @click="scrollTo(4)"><a>证券及债券信息</a></li>
            <li :class="{ active: active === 5 }" @click="scrollTo(5)"><a>环境、社会及管治</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mod-tab-content">
      <div></div>
      <div class="brand-item brand-item-a">
        <div class="ten_main">
          <div class="ten_investor_row">
            <div class="ten_investor_col">
              <div class="ten_investor_nav">
                <div>
                  <h2>季度业绩</h2>
                </div>
                <div>
                  <a class="ten_investor_nav_link">查看全部 </a>
                </div>
              </div>
              <a class="ten_investor_link" href="" target="_blank">
                <div>
                  <h3>腾讯公布二零二二年第一季业绩</h3>
                </div>
              </a>
              <div class="ten_investor_quarter">
                <a href="https://static.www.tencent.com/uploads/2022/05/18/9a46878abd6009cacd79f241a814442b.pdf"
                  target="_blank">
                  <img src="../assets/Investor/investor_pdf.png">业绩新闻 </a>
                <a href="https://static.www.tencent.com/uploads/2022/05/19/1501a739addd20a382dadeda55b3a7aa.pdf"
                  target="_blank">
                  <img src="../assets/Investor/investor_pdf.png">业绩演示 </a>
                <a href="https://edge.media-server.com/mmc/p/syf2pwot" target="_blank">
                  <img src="../assets/Investor/investor_web.png">电话会回放 </a>
                <a href="https://static.www.tencent.com/uploads/2022/05/18/c97b426f90d77fd5f4d94bce879041fc.pdf"
                  target="_blank">
                  <img src="../assets/Investor/investor_pdf.png">港交所公告 </a>
                <a href="https://mp.weixin.qq.com/s/HqwPuKHrmIzhF945btD4-Q" target="_blank">
                  <img src="../assets/Investor/investor_list.png">业绩摘要 </a>
              </div>
            </div>
            <div class="ten_investor_col">
              <div class="ten_investor_nav">
                <div>
                  <h2>投资者新闻</h2>
                </div>
                <div>
                  <a class="ten_investor_nav_link">查看全部 </a>
                </div>
              </div>
              <div class="ten_investor_news" v-for="index in ten_news" :key="index.id">
                <em class="li-ind">{{ index.id }}</em>
                <a :href=index.href target="_blank" class="ten_investor_link">
                  <p>
                    <label class="investor_news_label">
                      {{ index.label }}
                    </label>
                    <span class="ten_tagline ten_tagline--full">{{ index.time }}</span>
                  </p>
                  <span class="ten_download">PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="brand-item brand-item-b" style="background: #FBFBFB;">
        <div class="ten_main">
          <div class="ten_investor_row">
            <div class="ten_investor_col">
              <div class="ten_investor_nav">
                <div>
                  <h2>公告</h2>
                </div>
                <div>
                  <a class="ten_investor_nav_link">查看全部 </a>
                </div>
              </div>
              <div class="ten_investor_news" v-for="index in ten_ggao" :key="index.id">
                <em class="li-ind">{{ index.id }}</em>
                <a :href=index.href target="_blank" class="ten_investor_link">
                  <p>
                    <label class="investor_news_label">
                      {{ index.label }}
                    </label>
                    <span class="ten_tagline ten_tagline--full">{{ index.time }}</span>
                  </p>
                  <span class="ten_download">PDF</span>
                </a>
              </div>
            </div>
            <div class="ten_investor_col">
              <div class="ten_investor_nav">
                <div>
                  <h2>财务报告</h2>
                </div>

                <div>
                  <div style="float: left;">
                    <el-date-picker v-model="year" type="year" placeholder="选择年" value-format="yyyy" :clearable="false"
                      style="width: 100px;margin-right:15px">
                    </el-date-picker>
                  </div>
                  <a class="ten_investor_nav_link" style="line-height:40px">查看全部 </a>
                </div>
              </div>
              <div class="ten_investor_news">
                <div class="financial_report_list">
                  <div class="financial_report_row" style="display: inline-flex;" v-for="index in report_list"
                    :key="index.id" :id="'year-' + index.year" v-show="year === index.year">
                    <div class="financial_report_item">
                      <a :href=index.href1 target="_blank" class="ten_investor_report">
                        <img class="ten_report_sub" :src=index.src1 alt="">
                        <p>{{ index.year }} 年度报告</p>
                        <span class="ten_download">PDF</span>
                      </a>
                    </div>
                    <div class="financial_report_item">
                      <a :href=index.href2 target="_blank" class="ten_investor_report">
                        <img class="ten_report_sub" :src=index.src2 alt="">
                        <p>{{ index.year }} 中期报告</p>
                        <span class="ten_download">PDF</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="brand-item brand-item-c">
        <div class="ten_main">
          <div class="ten_investor_row">
            <div class="ten_investor_col">
              <div class="ten_investor_nav">
                <div>
                  <h2>业绩电话会</h2>
                  <div class="ten_investor_call">
                    <div class="ten_investor_call_row">
                      <div class="ten_investor_call_col">
                        <span class="ten_date">
                          18
                          <span>May
                          </span>
                        </span>
                      </div>
                      <div class="ten_investor_call_col ten_investor_call_col--title ten_investor_news">
                        <label class="investor_news_label">
                          腾讯2022年第一季度业绩公布
                        </label>
                        <p><span>2022年5月18日 20:00 香港时间/ 8:00 美东时间</span></p>
                      </div>
                    </div>
                    <div class="ten_investor_call_row">
                      <div class="ten_investor_call_col ten_investor_call_col--misc" style="width: 75%">
                        <p class="investor_conference_info web">
                          <strong>电话会网络回放</strong>

                          <a class="ten_call_play" href="https://edge.media-server.com/mmc/p/syf2pwot" target="_blank">
                            <span class="play"></span>
                            播放 </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="ten_investor_col">
              <div class="ten_investor_nav">
                <div>
                  <h2>投资者日历</h2>
                </div>
                <div>
                  <a class="ten_investor_nav_link">查看全部 </a>
                </div>
              </div>
              <div class="ten_investor_news" v-for="index in ten_calendar" :key="index.id">
                <em class="li-ind">{{ index.id }}</em>
                <a target="_blank" class="ten_investor_link">
                  <p>
                    <label class="investor_news_label">
                      {{ index.label }}
                    </label>
                    <span class="ten_tagline ten_tagline--full">{{ index.time }}</span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="brand-item brand-item-d" style="background: #FBFBFB;">
        <div class="ten_main">
          <div class="ten_investor_nav">
            <div>
              <h2>投资者工具包</h2>
            </div>
          </div>
          <div class="ten_news_card ten_investor_kit">
            <div class="ten_card ten_card--lightgrey" v-for="index in ten_card" :key="index.id">
              <a :href=index.href target="_blank" class="ten_card_body">
                <img :src=index.src alt="" class="ten_card_icon">
                <span href="" class="ten_download">PDF</span>
                <h3>{{ index.name }}</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="brand-item brand-item-e">
        <div class="ten_main">
          <div class="ten_investor_nav">
            <div>
              <h2>证券及债券信息</h2>
              <p>腾讯控股 (0700.HK)</p>
            </div>

          </div>
          <div class="ten_investor_row ten_investor_row--share">
            <div class="ten_investor_col">
              <div class="ten_investor_price">
                <div class="latest hkd-box ten_investor_price--box">
                  <span class="hkd-label">
                    HKD &nbsp;
                    <strong id="now-price">320.8</strong>
                  </span>
                  <br>
                  <span id="stock-flag" class="up">0.6 [0.19%]</span>
                </div>
                <div class="ten_investor_price--box">
                  <table>
                    <tbody>
                      <tr>
                        <td>成交量</td>
                        <td><span id="stock-volume">1535</span><span id="volume-measure">万股</span></td>
                      </tr>
                      <tr>
                        <td>市值</td>
                        <td><span id="stock-cap">3.09</span><span id="cap-measure">万亿</span></td>
                      </tr>
                      <tr>
                        <td>52周最高</td>
                        <td id="stock-52high">514.0</td>
                      </tr>
                      <tr>
                        <td>52周最低</td>
                        <td id="stock-52low">295.4</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="ten_investor_col">
              <a class="ten_investor_icon_link" href="https://www.tencent.com/zh-cn/investors/stocks.html"
                target="_blank">
                <img src="../assets/Investor/other-1-icon.png" alt="img">
                <p>股价互动资讯图及派息记录</p>
              </a>
              <a class="ten_investor_icon_link" href="https://www.tencent.com/zh-cn/investors/analysts.html"
                target="_blank">
                <img src="../assets/Investor/took-icon-5.png" alt="img">
                <p>分析师列表</p>
              </a>
              <a class="ten_investor_icon_link" href="https://www.tencent.com/zh-cn/investors/bond-credit-rating.html"
                target="_blank">
                <img src="../assets/Investor/other-2-icon.png" alt="img">
                <p>债券信用评级</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="brand-item brand-item-f" style="background: #FBFBFB;">
        <div class="ten_main">
          <div class="ten_investor_row ten_investor_row--env">
            <div class="ten_investor_col" style="padding-bottom: 0;">
              <div class="ten_investor_nav">
                <div>
                  <h2>环境、社会及管治</h2>
                </div>
              </div>
              <p>腾讯致力于将社会责任融入日常的运营、产品及服务，促进科技创新以为所有持份者创造长远价值。</p>
            </div>
          </div>
          <div class="ten_investor_row ten_investor_row--env esg-reports">
            <div class="ten_investor_col">
              <a class="ten_investor_icon_link" href="https://www.tencent.com/zh-cn/esg.html#respon-con-7"
                target="_blank">
                <img src="../assets/Investor/other-3-icon.png" alt="img">
                <p>ESG报告</p>
              </a>
              <a class="ten_investor_icon_link"
                href="/attachments/carbon-neutrality/tencent-carbon-neutrality-report.pdf" target="_blank">
                <img src="../assets/Investor/took-icon-1.png" alt="img">
                <p>碳中和报告</p>
              </a>
              <a class="ten_investor_icon_link" href="https://www.tencent.com/zh-cn/investors/corporate-governance.html"
                target="_blank">
                <img src="../assets/Investor/other-4-icon.png" alt="img">
                <p>企业管治</p>
              </a>
            </div>
          </div>
          <div class="ten_investor_row ten_investor_row--env esg-rating">
            <h4 style="width: 100%; font-size: 24px; font-family: 'KaiTi';font-style:italic">ESG评级</h4>
            <div class="ten_accordion_item inited" style="width: 90%; border-bottom: none;">
              <div class="ten_accordion_body" style="display: block">
                <div class="ten_esg">
                  <div class="ten_esg_icon"></div>
                  <div class="ten_esg_name">MSCI</div>
                  <div class="ten_esg_bar">
                    BBB
                  </div>
                </div>
                <div class="ten_esg">
                  <div class="ten_esg_icon"></div>
                  <div class="ten_esg_name">Sustainalytics <span>Risk Rating</span></div>
                  <div class="ten_esg_bar">
                    22.9/100
                    <div class="ten_esg_name"><span style="font-style: italic">分数越低，代表表现越好</span></div>
                  </div>
                </div>

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
  name: 'Investor',
  data () {
    return {
      searchBarFixed: false,
      active: 0,
      // 投资者新闻
      ten_news: [
        { id: 1, href: 'https://www.tencent.com/zh-cn/articles/2201261.html', label: '腾讯减持Sea Limited 2.6%股权', time: '2022.01.04' },
        { id: 2, href: 'https://static.www.tencent.com/uploads/2021/04/19/986586a0a4cb6e8e10df2c5fe74d4e8d.pdf', label: '腾讯发布新蓝图 “可持续社会价值创新”成为核心战略', time: '2021.04.19' },
        { id: 3, href: 'https://static.www.tencent.com/uploads/2021/04/16/6d75e6d19d526bf19a7211b421021827.pdf', label: ' 腾讯根据全球中期票据计划发行41.5亿美元票据的定价', time: '2021.04.16' },
      ],
      // 公告
      ten_ggao: [
        { id: 1, href: 'https://static.www.tencent.com/uploads/2022/07/15/6babbaf1f9f242cfce1e25f1705c9e24.pdf', label: '翌日披露报表 - 已发行股本变动及/或股份购回', time: '2022.07.15' },
        { id: 2, href: 'https://static.www.tencent.com/uploads/2022/07/14/e83c9f741010136145b4bc5e6c3dc3a0.pdf', label: '翌日披露报表 - 已发行股本变动及/或股份购回', time: '2022.07.14' },
        { id: 3, href: 'https://static.www.tencent.com/uploads/2022/07/13/bf518ef18e13e9f1b78816b485aa91a9.pdf', label: '翌日披露报表 - 已发行股本变动及/或股份购回', time: '2022.07.13' },
      ],
      // 财务报告
      report_list: [
        {
          id: 1, year: '2021', href1: 'https://static.www.tencent.com/uploads/2022/04/07/7fb064d564c26f7f0391836ab8b8bd05.PDF', src1: require('../assets/Investor/168f14f70db73acde59dc9cbe5ad403c.JPG_report.cover.jpg'),
          href2: 'https://static.www.tencent.com/uploads/2021/08/31/41f3fe664bf91be0400ad45eb0a233cd.pdf', src2: require('../assets/Investor/12ccd5b5c98a38489fe43e9ae45eef41.jpg_report.cover.jpg'),
        }, {
          id: 2, year: '2020', href1: 'https://static.www.tencent.com/uploads/2021/04/08/27ed851251241c67fc697a18d7d8dc88.pdf', src1: require('../assets/Investor/932a1cb29f42222c00038a3f5e767e1b.JPG_report.cover.jpg'),
          href2: 'https://cdc-tencent-com-1258344706.image.myqcloud.com/uploads/2020/08/26/92a625ffb6f781cecd011d0511c793a4.pdf', src2: require('../assets/Investor/4445c7321aaeace4b9ec863fd2d4a8cd.jpg_report.cover.jpg'),
        }, {
          id: 3, year: '2019', href1: 'https://static.www.tencent.com/uploads/2020/04/02/ef47087db40a44f5b1bd65334f3a52e4.pdf', src1: require('../assets/Investor/66a5b8bee938ae6a6578fd8e676b286f.JPG_report.cover.jpg'),
          href2: 'https://cdc-tencent-com-1258344706.image.myqcloud.com/uploads/2020/08/26/92a625ffb6f781cecd011d0511c793a4.pdf', src2: require('../assets/Investor/4445c7321aaeace4b9ec863fd2d4a8cd.jpg_report.cover.jpg'),
        }
      ],
      year: '2021',
      // 投资者日历
      ten_calendar: [
        { id: 1, href: '', label: '腾讯2022年第二季度及中期业绩公布', time: '2022.08.17 20:00 - 21:30' },
        { id: 2, href: '', label: '腾讯2022年第二季度及中期业绩香港路演', time: '2022.08.18' },
      ],
      // 投资者工具包
      ten_card: [
        { id: 1, href: "https://static.www.tencent.com/uploads/2022/05/19/88c4de2f05aba600a6d1700643e12c7e.pdf", src: require('../assets/Investor/other-3-icon.png'), name: '企业介绍' },
        { id: 2, href: "https://static.www.tencent.com/uploads/2022/05/18/6cb32e0f95fe4fc19599a88e536a5ffd.xls", src: require('../assets/Investor/took-icon-3.png'), name: '历史运营数据' },
        { id: 3, href: "https://static.www.tencent.com/uploads/2022/05/18/604ed4a13486a3207c38399440c26c69.pdf", src: require('../assets/Investor/took-icon-4.png'), name: '产品列表' },
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
    }
  }
}
</script>

<style lang="less" scoped>
.Investor {
  .mod-section {
    background: url(../assets/Investor/investor-1.jpg) no-repeat center bottom;
    background-size: cover;
  }

  .mod-tab-content {
    .brand-item {
      padding-top: 96px;
      padding-bottom: 96px;
      position: relative;

      .ten_main {
        width: 100%;
        max-width: 1200px;
        margin: 0px auto;
      }
    }

    .ten_investor_row {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .ten_investor_col {
        display: block;
        width: 50%;
        padding: 24px 0px;
        align-items: stretch;
        flex-wrap: wrap;

        .ten_investor_nav {
          display: flex;
          justify-content: space-between;
          align-items: center;

          h2 {
            font-size: 32px;
            line-height: 1.2em;
            margin: 12px 0px;
            padding: 0px;
            font-family: 'KaiTi';
            margin-bottom: 24px;
          }

          .ten_investor_nav_link {
            white-space: nowrap;
            font-weight: bold;
            font-size: 16px;
          }

          .ten_investor_nav_link:after {
            content: "";
            display: inline-block;
            vertical-align: middle;
            width: 6px;
            height: 6px;
            margin-left: 6px;
            margin-bottom: 3px;
            border-top: 1px solid #0052D9;
            border-right: 1px solid #0052D9;
            transform: rotate(45deg);
          }
        }

        .ten_investor_link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 24px 0px;

          h3 {
            color: #2b2e2e;
            font-size: 24px;
            line-height: 1.4em;
            margin: 12px 0px;
            padding: 0px;
            font-weight: normal;
          }
        }

        .ten_investor_quarter {
          display: flex;
          align-items: stretch;
          justify-content: flex-start;
          flex-wrap: wrap;

          a {
            width: 50%;
            font-size: 16px;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding: 24px 0px;
            border-bottom: 1px solid #CCC;
            color: #2b2e2e;

            img {
              width: 32px;
              height: auto;
              margin-right: 24px;
            }
          }
        }

        .ten_investor_news {
          .li-ind {
            width: 21px;
            height: 20px;
            background: url(../assets/Investor/ind-bg.png) no-repeat center;
            background-size: 100% 100%;
            float: left;
            text-align: center;
            line-height: 20px;
            font-style: normal;
            font-family: 'TencentSansw7';
            font-size: 10px;
            color: #FFFFFF;
            letter-spacing: -0px;
            margin-right: 24px;
            margin-top: 5px;
          }

          .ten_investor_link {
            color: #2b2e2e;

            p {
              width: calc(100% - 72px);
              font-size: 16px;
              line-height: 1.5em;
              padding: 0px;
              font-weight: normal;

              .investor_news_label {
                font-size: 16px;
                display: block;
                margin-bottom: 12px;
                font-weight: bold;
              }

              span {
                transform: translateX(25px);
              }
            }

            span {
              color: #0052D9;
            }
          }
        }

        a:hover,
        a:hover .investor_news_label {
          color: #0052D9;
        }
      }

      .ten_investor_col:nth-of-type(odd) {
        padding-right: 48px;
        border-right: 1px solid #919797;
      }

      .ten_investor_col:nth-of-type(even) {
        padding-left: 48px;
      }
    }

    .brand-item-b {
      .ten_investor_news {
        .financial_report_list {
          .financial_report_row {
            .financial_report_item {
              flex: 1;
              height: 400px;
              margin: 24px 0px 0px 0px;

              .ten_investor_report {
                display: block;
                width: 280px;
                padding-right: 12px;

                img {
                  width: 80%;
                  height: auto;
                  display: block;
                  margin: 0 auto;
                }

                p {
                  margin: 12px auto;
                  text-align: center;
                  font-size: 18px;
                  color: #212525;
                  letter-spacing: 0;
                  font-family: 'KaiTi';
                  font-weight: bold;
                }

                .ten_download {
                  display: none;
                  margin: 0 auto;
                }
              }


            }

            .financial_report_item:hover .ten_download {
              display: block;
            }

            .financial_report_item:hover a {
              transform: translateY(-5px);
              transition: ease all 0.3s;
            }
          }
        }
      }
    }

    .brand-item-c {
      .ten_investor_call {
        margin: 36px 0;

        .ten_investor_call_row {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;

          .ten_investor_call_col {
            .ten_date {
              font-family: 'KaiTi';
              display: inline-block;
              padding: 8px 0px 0px 0px;
              background: #0052D9;
              color: #FFF;
              font-size: 24px;
              text-align: center;
              width: 60px;
              height: 60px;

              span {
                display: block;
                font-size: 12px;
              }
            }

            strong {
              display: block;
              color: #0052D9;
              margin: 24px 0px 6px 0px;
            }

            .ten_call_play {

              .play {
                display: inline-block;
                vertical-align: middle;
                width: 24px;
                height: 24px;
                margin: 0px 6px 3px 0px;
                color: #0052D9;
                background: #FFF;
                border-radius: 50%;
                position: relative;
                border: 1px solid #0052D9;
              }

              .play:after {
                content: "";
                display: block;
                position: absolute;
                transform: scaleY(0.5);
                width: 0px;
                height: 0px;
                top: calc(50% - 6px);
                left: calc(50% - 2px);
                border-style: solid;
                border-width: 6px;
                border-color: transparent transparent transparent #0052D9;
              }
            }

            .ten_call_play:hover .play {
              background: #0052D9;
              color: #FFF;
            }

            .ten_call_play:hover .play:after {
              border-color: transparent transparent transparent #FFF;
            }

          }

          .ten_investor_call_col--title {
            width: calc(100% - 84px);

            .investor_news_label {
              font-size: 16px;
              display: block;
              margin-bottom: 12px;
              font-weight: bold;
            }

            P {
              font-size: 16px;
              line-height: 1.5em;
              margin: 12px 0px;
              padding: 0px;
              font-weight: bold;

              span {
                font-family: 'KaiTi';
                color: #0052D9;
              }
            }
          }
        }
      }
    }

    .brand-item-d {
      .ten_investor_nav {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2 {
          font-size: 32px;
          line-height: 1.2em;
          margin: 12px 0px;
          padding: 0px;
          font-family: 'KaiTi';
          margin-bottom: 24px;
        }
      }

      .ten_news_card {
        display: flex;
        justify-content: flex-start;
        align-items: stretch;
        flex-wrap: wrap;
        margin-left: -24px;

        .ten_card {
          width: calc(25% - 24px);
          margin-left: 24px;
          padding: 36px 36px;
          cursor: pointer;

          .ten_card_body {
            .ten_card_icon {
              display: block;
              width: 60px;
              height: 60px;
            }

            .ten_download {
              float: right;
            }

            h3 {
              color: #2b2e2e;
              font-size: 24px;
              line-height: 1.4em;
              margin: 12px 0px;
              padding: 0px;
              font-weight: normal;
            }
          }
        }

        .ten_card:hover {
          background: #fff;
          transform: translateY(-4px);
          transition: ease all 0.5s;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
        }

        .ten_card:hover .ten_card_body h3 {
          color: #0052D9;
        }
      }
    }

    .brand-item-e {
      .ten_investor_nav {
        h2 {
          font-size: 32px;
          line-height: 1.2em;
          margin: 12px 0px;
          padding: 0px;
          font-family: 'KaiTi';
          margin-bottom: 24px;
        }

        p {
          font-size: 16px;
          line-height: 1.5em;
          margin: 12px 0px;
          padding: 0px;
          font-weight: normal;
        }
      }

      .ten_investor_row {
        .ten_investor_col {
          border: none !important;
          align-self: center;

          .ten_investor_price {
            display: flex;
            align-items: center;
            flex-wrap: wrap;

            .ten_investor_price--box {
              width: 50%;
            }

            .latest {
              font-family: 'KaiTi';
              line-height: 3em;

              span strong {
                font-size: 48px;
              }

              .up {
                font-weight: bold;
                color: #488F34;
              }

              .up::before {
                content: "";
                display: inline-block;
                vertical-align: middle;
                width: 30px;
                height: 30px;
                background-image: url(../assets/Investor/up.png);
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center center;
                margin-right: 6px;
              }
            }

            table {
              width: 100%;

              td {
                padding: 6px 0px;
                font-size: 16px;
                line-height: 1.5em;
              }

              td:nth-of-type(odd) {
                width: 50%;
              }

              td:nth-of-type(even) {
                font-weight: bold;
              }


            }
          }


        }

      }
    }

    .brand-item-f {
      .ten_investor_row--env {
        .ten_investor_col:nth-of-type(odd) {
          width: 100%;
        }

        .ten_investor_col {
          border: none !important;
          align-self: center;
        }

        .ten_investor_icon_link {
          width: 25%;
          float: left;
        }
      }
    }
  }
}

.ten_investor_icon_link {
  display: flex;
  margin: 24px 0px 0px 0px;

  img {
    width: 60px;
    height: 60px;
    margin-right: 24px;
  }

  p {
    color: #2b2e2e;
    font-size: 16px;
    line-height: 1.5em;
    margin: 12px 0px;
    padding: 0px;
    font-weight: bold;
  }

  p:after {
    content: "";
    display: block;
    width: 36px;
    height: 36px;
    background-image: url(../assets/Investor/go-icon.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    margin-left: 0px;
    transition: ease all 0.3s;
  }
}

.ten_investor_icon_link:hover p {
  color: #0052D9;
}

.ten_investor_icon_link:hover p:after {
  margin-left: 12px;
}
</style>