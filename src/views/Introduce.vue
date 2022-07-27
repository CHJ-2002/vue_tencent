<template>
  <div class="Introduce">
    <div class="mod-section">
      <div class="mod-con">
        <h2><i>腾讯公司</i></h2>
      </div>
    </div>

    <div class="mod-tab-container" id="searchBar">
      <div class="mod-tab" :class="{ isFixed: searchBarFixed }">
        <div class="mod-con">
          <ul>
            <li :class="{ active: active === 0 }" @click="scrollTo(0)"><a>公司简介</a></li>
            <li :class="{ active: active === 1 }" @click="scrollTo(1)"><a>愿景及使命</a></li>
            <li :class="{ active: active === 2 }" @click="scrollTo(2)"><a>发展历程</a></li>
            <li :class="{ active: active === 3 }" @click="scrollTo(3)"><a>业务架构</a></li>
            <li :class="{ active: active === 4 }" @click="scrollTo(4)"><a>管理团队</a></li>
            <li :class="{ active: active === 5 }" @click="scrollTo(5)"><a>企业文化</a></li>
            <li :class="{ active: active === 6 }" @click="scrollTo(6)"><a>办公地点</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mod-tab-content">
      <div class="brand-item-a brand-item">
        <div class="item-a-txt">
          <h3><i>公司简介</i></h3>
          <h4>腾讯是一家世界领先的互联网科技公司，用创新的产品和服务提升全球各地人们的生活品质。</h4>
          <p class="desc">
            <br>腾讯成立于1998年，总部位于中国深圳。公司一直秉承科技向善的宗旨。我们的通信和社交服务连接全球逾10亿人，帮助他们与亲友联系，畅享便捷的出行、支付和娱乐生活。
            <br><br>腾讯发行多款风靡全球的电子游戏及其他优质数字内容，为全球用户带来丰富的互动娱乐体验。
            <br><br>腾讯还提供云计算、广告、金融科技等一系列企业服务，支持合作伙伴实现数字化转型，促进业务发展。
            <br><br>腾讯2004年于香港联合交易所上市。
          </p>
        </div>
      </div>
      <div class="brand-item-b brand-item">
        <div class="item-b-mess">
          <div class="l-mess">
            <p class="label"><i>愿景及使命</i></p>
          </div>
          <div class="r-mess">
            <p class="label">用户为本，科技向善</p>
            <p class="desc">
              一切以用户价值为依归，将社会责任融入产品及服务之中；
              <br>推动科技创新与文化传承，助力各行各业升级，促进社会的可持续发展。
            </p>
          </div>
          <img src="../assets/Introduce/text-bg.png" class="text-bg">
        </div>
      </div>
      <div class="brand-item-c brand-item">
        <div class="item-c-header"></div>
        <div class="item-c-content"></div>
      </div>
      <div class="brand-item-d brand-item">
        <div class="item-d-con">
          <div class="item-d-txt">
            <h3><i>业务架构</i></h3>
          </div>
          <div class="item-d-content">
            <div class="compy">
              <img src="../assets/Introduce/tencent_logo.png" alt="">
            </div>
            <div class="list-ul" ref="ul">
              <div class="li" @click="li1">
                <p class="label"><i>CDG</i></p>
                <p class="val">企业发展事业群</p>
                <img src="../assets/Introduce/san.png" class="san">
              </div>
              <div class="li" @click="li2">
                <p class="label"><i>CSIG</i></p>
                <p class="val">云与智慧产业事业群</p>
                <img src="../assets/Introduce/san.png" class="san">
              </div>
              <div class="li" @click="li3">
                <p class="label"><i>IEG</i></p>
                <p class="val">互动娱乐事业群</p>
                <img src="../assets/Introduce/san.png" class="san">
              </div>
              <div class="li" @click="li4">
                <p class="label"><i>PCG</i></p>
                <p class="val">平台与内容事业群</p>
                <img src="../assets/Introduce/san.png" class="san">
              </div>
              <div class="li" @click="li5">
                <p class="label"><i>TEG</i></p>
                <p class="val">技术工程事业群</p>
                <img src="../assets/Introduce/san.png" class="san">
              </div>
              <div class="li" @click="li6">
                <p class="label"><i>WXG</i></p>
                <p class="val">微信事业群</p>
                <img src="../assets/Introduce/san.png" class="san">
              </div>

            </div>
            <div class="li-mess-box">
              <div class="mess-text" v-if="label === 'CDG'">
                为公司新业务孵化和新业态探索的平台，推动包括基础支付、金融应用在内的金融科技业务、广告营销服务和国际业务等领域的发展和创新。同时作为专业支持平台，为公司及各事业群提供战略规划、投资并购、投资者关系及国际传讯、市场公关等专业支持。
              </div>
              <div class="mess-text" v-else-if="label === 'CSIG'">
                推进云与产业互联网战略，依托云、安全、人工智能等技术创新，打造智慧产业升级方案。探索用户与产业的创新互动，打通产业上下游不同企业，联动线上线下的场景与资源，助力零售、医疗、教育、交通等产业数字化升级，同时协助企业更智能地服务用户，构建连接用户与商业的智慧产业新生态。
              </div>
              <div class="mess-text" v-else-if="label === 'IEG'">
                发展网络游戏、电竞等互动娱乐业务，打造一个从策划、研发、发行，运营及营销的垂直生态链。致力为中国以及全球游戏用户创造高品质产品，并通过在线游戏，直播和线下电竞赛事联动用户，提升总体游戏体验。
              </div>
              <div class="mess-text" v-else-if="label === 'PCG'">
                推进互联网平台和内容文化生态融合发展，整合QQ、QQ空间等社交平台，和应用宝、浏览器等流量平台，以及新闻资讯、视频、体育、直播、动漫、影业等内容平台，为内容生态创造更好的生长环境。同时，以技术驱动，推动IP跨平台多形态发展，为更多用户创造多样化的优质数字内容体验。
              </div>
              <div class="mess-text" v-else-if="label === 'TEG'">
                为公司及各事业群提供技术及运营平台支持、研发管理、数据中心的建设与运营，并为用户提供全线产品的客户服务。作为运营着亚洲最大网络、服务器集群和数据中心的事业群，并牵头腾讯技术委员会，通过内部分布式开源协同，加强基础研发，建设技术中台等措施，支持业务创新。
              </div>
              <div class="mess-text" v-else-if="label === 'WXG'">
                搭建和运营微信生态体系，依托微信基础平台，以及微信公众号、小程序、微信支付、企业微信、微信搜索等开放平台，为各行各业的智慧化升级提供解决方案和连接能力。同时开发和运营包括邮箱、通讯录、微信读书等产品。
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="brand-item-e brand-item">
        <div class="item-e-con">
          <div class="con-flx">
            <h2><i>管理团队</i></h2>
          </div>
          <div class="team-box">
            <div class="li" v-for="item in team" :key="item.id">
              <div class="mess">
                <p class="label">{{ item.label }}</p>
                <div class="job-mess">
                  <p>{{ item.job1 }}</p>
                  <p>{{ item.job2 }}</p>
                  <p>{{ item.job3 }}</p>
                </div>
              </div>
              <div class="pic">
                <img :src="item.img" alt="img">
                <i class="block abc"></i>
              </div>
            </div>
            <h3 class="title-l">终身荣誉顾问</h3>
            <div class="row">
              <div class="li" v-for="item in row" :key="item.id">
                <div class="mess">
                  <p class="label">{{ item.label }}</p>
                  <div class="job-mess">
                    <p>{{ item.job1 }}</p>
                    <p>{{ item.job2 }}</p>
                    <p>{{ item.job3 }}</p>
                  </div>
                </div>
                <div class="pic">
                  <img :src="item.img" alt="img">
                  <i class="block abc"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="brand-item-f brand-item">
        <div class="mod-max-con">
          <div class="culture-box">
            <div class="t-box">
              <div class="pic">
                <img src="../assets/Introduce/pic.jpg" alt="">
              </div>
              <div class="mess-box">
                <div class="t-flx clearfix">
                  <div class="label-box">
                    <h3><i>企业文化</i></h3>
                  </div>
                  <div class="b-box">
                    <h4 class="item-title">价值观</h4>
                    <div class="boxx">
                      <div class="x-item">
                        <h3><i>正直</i></h3>
                        <p class="p">坚守底线，以德为先，坦诚公正不唯上</p>
                      </div>
                      <div class="x-item">
                        <h3><i>进取</i></h3>
                        <p class="p">无功便是过，勇于突破有担当</p>
                      </div>
                      <div class="x-item">
                        <h3><i>协作</i></h3>
                        <p class="p">开放协同，持续进化</p>
                      </div>
                      <div class="x-item">
                        <h3><i>创造</i></h3>
                        <p class="p">超越创新，探索未来</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="brand-item-g brand-item">
        <div class="mod-max-con">
          <h3 class="mod-m-title"><i>办公地点</i></h3>
          <div class="mod-con">
            <div class="address-tab">
              <div class="tab-ul-box">
                <ul class="tab-ul" ref="tab_ul">
                  <li class="li" @click="tab_li1">
                    <p class="label">亚太地区</p>
                  </li>
                  <li class="li" @click="tab_li2">
                    <p class="label">北美地区</p>
                  </li>
                  <li class="li" @click="tab_li3">
                    <p class="label">欧洲</p>
                  </li>
                  <li class="li" @click="tab_li4">
                    <p class="label">中东地区及非洲</p>
                  </li>
                </ul>
              </div>
              <div class="box">
                <div class="office-container" v-if="office === 'one'">
                  <div class="office">
                    <h4>深圳</h4>
                    <a href="https://router.map.qq.com/short?l=ffe29aec71f9fa07473dd693a1df169b" target="_blank">
                      <p><strong style="color: #0052d9">深圳总部</strong></p>
                      <p>深圳市南山区海天二路33号腾讯滨海大厦</p>
                      <p>邮编：518054</p>
                      <p>总机电话：+86-755-86013388</p>
                    </a>
                  </div>
                  <div class="office">
                    <h4>曼谷</h4>
                    <p>8 T One Building, 10th,11th and 12th Floor (Unit 4-5), Soi Sukhumvit 40, Sukhumvit Road, Phra
                      Khanong, Khlong Toei, Bangkok</p>
                    <p>邮编：10110</p>
                    <p>电话：+66-2-833-3000</p>
                    <p>网址： <a href="https://www.tencent.co.th/th" class="local-website"
                        target="_blank">https://www.tencent.co.th/th</a></p>
                  </div>
                  <div class="office">
                    <h4>香港</h4>
                    <p>湾仔</p>
                    <p>皇后大道东1号太古广场三期29楼</p>
                    <p>电话：+852-31485100</p>
                    <p style="margin-top: 10px;">尖沙咀</p>
                    <p>海港城环球金融中心南塔10楼</p>
                    <p>电话：+852-31485100</p>
                  </div>
                  <div class="office">
                    <h4>古尔冈</h4>
                    <p>S-31, 3rd floor, Block B, Vatika Atrium, Golf Course Road Sector 53, Gurgaon, 122001 Haryana
                    </p>
                    <p>邮编：122001</p>
                  </div>
                  <div class="office">
                    <h4>吉隆坡</h4>
                    <p>Suite 02 &amp; 03, Level 17, Centrepoint South Tower, Mid Valley City, Lingkaran Syed Putra,
                      59200 Kuala Lumpur</p>
                    <p>邮编：59200</p>
                    <p>电话：+60-3-22872388</p>
                  </div>
                  <div class="office">
                    <h4>首尔</h4>
                    <p>Tencent Korea, 40F Gangnam Finance Center, 152, Teheran-ro, Gangnam-gu, Seoul</p>
                    <p>邮编：06236</p>
                    <p>Tencent Korea, 18 Floor, WeWork tower, 302, Teheran-ro Gangnam-gu, Seoul</p>
                    <p>邮编：06210</p>
                    <p>网址：<a href="http://tencent.co.kr" class="local-website" target="_blank">http://tencent.co.kr</a>
                    </p>
                  </div>
                  <div class="office">
                    <h4>新加坡</h4>
                    <p>88 Market Street #40-01 CapitaSpring Singapore</p>
                    <p>邮编：048948</p>
                    <p>30 Raffles Place #12-01 Singapore</p>
                    <p>邮编：048622</p>


                  </div>
                  <div class="office">
                    <h4>台北</h4>
                    <p>台北市信义区忠孝东路5段68号21楼A1室</p>
                    <p>邮编：110</p>
                  </div>
                  <div class="office">
                    <h4>东京</h4>
                    <p>29F Toranomon Hills Mori Tower，1-23-1 Toranomon, Minato-ku ,Tokyo</p>
                    <p>邮编：105-6325</p>
                    <p>WeWork 45F, Shibuya Scramble Square, 2-24-12 Shibuya, Shibuya-ku, Tokyo</p>
                    <p>网址：<a href="https://tencentjapan.com" class="local-website"
                        target="_blank">https://tencentjapan.com</a></p>
                  </div>
                </div>
                <div class="office-container" v-else-if="office === 'two'">
                  <div class="office">
                    <h4>帕罗奥多</h4>
                    <p>2747 Park Boulevard, Palo Alto</p>
                    <p>邮编：94306</p>
                    <p>电话：+1-650-798-3300</p>
                  </div>
                  <div class="office">
                    <h4>洛杉矶</h4>
                    <p>12777 Jefferson Blvd, Building E, Los Angeles</p>
                    <p>邮编：90066</p>
                  </div>
                  <div class="office">
                    <h4>贝尔维尤</h4>
                    <p>10900 NE 8th St. Suite 600, Bellevue</p>
                    <p>邮编：98004</p>
                    <p>929 108th Ave., Suite 1100, Bellevue</p>
                    <p>邮编：98004</p>
                  </div>
                  <div class="office">
                    <h4>尔湾</h4>
                    <p>15201 Laguna Canyon RD, Suite 200 Irvine</p>
                    <p>邮编：92618</p>
                  </div>
                  <div class="office">
                    <h4>纽约</h4>
                    <p>7 Bryant Park, Suite 1502, New York, New York</p>
                    <p>邮编：10018</p>
                  </div>
                  <div class="office">
                    <h4>多伦多</h4>
                    <p>26 Wellington Street East, Suite 900, Toronto</p>
                    <p>邮编：M5E 1S2</p>
                  </div>
                  <div class="office">
                    <h4>蒙特利尔</h4>
                    <p>7450 Mile End Street, Montreal</p>
                    <p>邮编：H2R 2Z6</p>
                    <p>7236 rue Waverly, Montreal</p>
                    <p>邮编：H2R 0C2</p>
                  </div>
                </div>
                <div class="office-container" v-else-if="office === 'three'">
                  <div class="office">
                    <h4>阿姆斯特丹</h4>
                    <p>Tencent International Service Europe B.V., Buitenveldertselaan 1-5, 1082 VA, Amsterdam
                    </p>
                    <p>邮编：1082 VA</p>
                  </div>
                  <div class="office">
                    <h4>柏林</h4>
                    <p>C/O Regus Alexanderplatz office, Gontardstrasse 11, Berlin</p>
                    <p>邮编：10178</p>
                  </div>
                  <div class="office">
                    <h4>法兰克福</h4>
                    <p>Mindspace Eurotheum, Neue Mainzer Str. 66-68, Frankfurt am Main</p>
                    <p>邮编：60311</p>
                  </div>
                  <div class="office">
                    <h4>伊斯坦布尔</h4>
                    <p>1501,1502,1503, Barbaros, Mor Sumbul Sokagi No.1, Atasehir/Istanbul</p>
                    <p>邮编：34746</p>
                  </div>
                  <div class="office">
                    <h4>伦敦</h4>
                    <p>Berkeley Square House, Berkeley Square, London</p>
                    <p>邮编：W1J 6BD</p>
                  </div>
                  <div class="office">
                    <h4>利物浦</h4>
                    <p>Room 3.06, Clockwise, Edward Pavillion, Royal Albert Dock, Liverpool</p>
                    <p>邮编：L3 4AF</p>
                  </div>
                  <div class="office">
                    <h4>巴黎</h4>
                    <p>WeWork La Fayette, 33 rue La Fayette, Paris</p>
                    <p>邮编：75009</p>
                  </div>
                  <div class="office">
                    <h4>华沙</h4>
                    <p>WeWork Mennica Legacy Tower, Tencent, Prosta 20, Warsaw</p>
                    <p>邮编：00-850</p>
                  </div>
                </div>
                <div class="office-container" v-else-if="office === 'four'">
                  <div class="office">
                    <h4>开罗</h4>
                    <p>Room 535, 5/F, Bldg #55, Road 18, Sarayat EI Maddi, In front of gate #3 of Maddi Sporting Clud,
                      Cairo</p>
                  </div>
                  <div class="office">
                    <h4>迪拜</h4>
                    <p>201, 202, 203, second floor, Innovation Hub Building 2, DIC, Dubai</p>
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
  name: 'Introduce',
  data () {
    return {
      label: '',
      searchBarFixed: false,
      // 管理团队
      team: [
        { id: 1, label: '马化腾', job1: '主要创办人', job2: '董事会主席兼首席执行官', job3: '', img: require('../assets/Introduce/1.jpg') },
        { id: 2, label: '刘炽平', job1: '董事会执行董事兼公司总裁', job2: '', job3: '', img: require('../assets/Introduce/2.jpg') },
        { id: 3, label: '许晨晔', job1: '主要创办人', job2: '首席信息官', job3: '', img: require('../assets/Introduce/3.jpg') },
        { id: 4, label: '任宇昕', job1: '首席运营官', job2: '互动娱乐事业群总裁', job3: '平台与内容事业群总裁', img: require('../assets/Introduce/4.jpg') },
        { id: 5, label: '张小龙', job1: '集团高级执行副总裁', job2: '微信事业群总裁', job3: '', img: require('../assets/Introduce/5.jpg') },
        { id: 6, label: 'James Mitchell', job1: '首席战略官', job2: '集团高级执行副总裁', job3: '', img: require('../assets/Introduce/6.jpg') },
        { id: 7, label: '汤道生', job1: '集团高级执行副总裁', job2: '云与智慧产业事业群总裁', job3: '', img: require('../assets/Introduce/7.jpg') },
        { id: 8, label: '卢山', job1: '集团高级执行副总裁', job2: '技术工程事业群总裁', job3: '', img: require('../assets/Introduce/8.jpg') },
        { id: 9, label: '网大为', job1: '首席探索官', job2: '集团高级执行副总裁', job3: '', img: require('../assets/Introduce/10.jpg') },
        { id: 10, label: '马晓轶', job1: '集团高级副总裁', job2: '', job3: '', img: require('../assets/Introduce/11.jpg') },
        { id: 11, label: '林璟骅', job1: '集团高级副总裁', job2: '', job3: '', img: require('../assets/Introduce/19.jpg') },
        { id: 12, label: '罗硕瀚', job1: '首席财务官', job2: '集团高级副总裁', job3: '', img: require('../assets/Introduce/12.jpg') },
        { id: 13, label: '郭凯天', job1: '集团高级副总裁', job2: '', job3: '', img: require('../assets/Introduce/13.jpg') },
        { id: 14, label: '奚丹', job1: '集团高级副总裁', job2: '', job3: '', img: require('../assets/Introduce/14.jpg') },
        { id: 15, label: '杨国安', job1: '高级管理顾问', job2: '', job3: '', img: require('../assets/Introduce/15.jpg') },
      ],
      row: [
        { id: 1, label: '张志东', job1: '主要创办人', job2: '终身荣誉顾问', job3: '腾讯学堂荣誉院长', img: require('../assets/Introduce/16.jpg') },
        { id: 2, label: '陈一丹', job1: '主要创办人', job2: '终身荣誉顾问', job3: '腾讯公益慈善基金会发起人兼荣誉理事长', img: require('../assets/Introduce/17.jpg') },
        { id: 3, label: '曾李青', job1: '主要创办人', job2: '终身荣誉顾问', job3: '', img: require('../assets/Introduce/18.jpg') },
      ],
      // 办公地点
      office: '',
      active: 0 // 当前激活的导航索引
    }
  },
  mounted () {
    this.li1()
    window.addEventListener('scroll', this.handleScroll)
    this.tab_li1()
    // 监听滚动事件
    window.addEventListener('scroll', this.onScroll, false)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    // 业务架构的点击事件
    add () {
      for (var i = 0; i < 6; i++) {
        this.$refs.ul.children[i].style.background = '#F2F3F5';
        this.$refs.ul.children[i].children[2].style.display = 'none'
      }
    },
    li (i) {
      this.$refs.ul.children[i].style.background = '#fff';
      this.$refs.ul.children[i].children[2].style.display = 'block'

    },
    li1 () {
      this.add()
      this.li(0)
      this.label = 'CDG'
    },
    li2 () {
      this.add()
      this.li(1)
      this.label = 'CSIG'
    },
    li3 () {
      this.add()
      this.li(2)
      this.label = 'IEG'
    },
    li4 () {
      this.add()
      this.li(3)
      this.label = 'PCG'
    },
    li5 () {
      this.add()
      this.li(4)
      this.label = 'TEG'
    },
    li6 () {
      this.add()
      this.li(5)
      this.label = 'WXG'
    },
    // 滑动到顶部时固定在顶部
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let offsetTop = document.querySelector('#searchBar').offsetTop
      scrollTop > offsetTop ? this.searchBarFixed = true : this.searchBarFixed = false
    },
    // 办公地点的点击事件
    brang_g () {
      for (var i = 0; i < 4; i++) {
        this.$refs.tab_ul.children[i].style.borderBottom = 'none'
      }
    },
    tab_li (i) {
      this.$refs.tab_ul.children[i].style.borderBottom = '4px solid #0052d9'
    },
    tab_li1 () {
      this.brang_g()
      this.tab_li(0)
      this.office = 'one'
    },
    tab_li2 () {
      this.brang_g()
      this.tab_li(1)
      this.office = 'two'
    },
    tab_li3 () {
      this.brang_g()
      this.tab_li(2)
      this.office = 'three'
    },
    tab_li4 () {
      this.brang_g()
      this.tab_li(3)
      this.office = 'four'
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
      // 获取目标的 offsetTop
      // css选择器是从 1 开始计数，我们是从 0 开始，所以要 +1
      const targetOffsetTop = document.querySelector(`.mod-tab-content .brand-item:nth-child(${index + 1})`).offsetTop
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
.Introduce {
  .mod-section {
    width: 100%;
    height: 482px;
    overflow: hidden;
    background: url(../assets/Introduce/brief-1.jpg) no-repeat center bottom;
    background-size: cover;
  }

  .mod-tab-content {
    .brand-item-a {
      width: 1200px;
      margin: 0 auto;
      padding-top: 96px;
      font-weight: normal;

      h3 {
        width: 100%;
        overflow: hidden;
        text-align: center;
        font-size: 30px;
        color: #2a2e2e;
        font-family: 'TencentSansw7';
        margin-bottom: 52px;
      }

      h4 {
        font-size: 20px;
        color: #2A2E2E;
        letter-spacing: 0;
        text-align: left;
        line-height: 36px;
        font-weight: 400;
        margin: 16px auto;
      }

      h4 p {
        color: #5F6464;
      }
    }

    .brand-item-b {
      width: 1200px;
      margin: 0 auto;
      padding-bottom: 96px;

      .item-b-mess {
        background: #FBFBFB;
        height: 312px;
        width: 100%;
        position: relative;
        margin-top: 96px;
        padding: 60px 96px;
        box-sizing: border-box;

        .l-mess {
          float: left;

          .label {
            font-size: 30px;
            color: #2A2E2E;
            letter-spacing: 0;
            font-family: 'TencentSansw7';
            font-weight: 700;
          }
        }

        .r-mess {
          float: right;
          width: 390px;
          height: 190px;
          position: relative;

          .label {
            font-size: 20px;
            color: #2A2E2E;
            letter-spacing: 0;
            line-height: 36px;
          }

          .desc {
            font-size: 14px;
            color: #5F6464;
            letter-spacing: 0;
            line-height: 25px;
            margin-top: 16px;
          }
        }

        .r-mess::before {
          content: ' ';
          width: 1px;
          position: absolute;
          left: -60px;
          top: 0;
          display: block;
          bottom: 0;
          background: #D8D9DC;
        }

        .text-bg {
          width: 824px;
          position: absolute;
          left: 82px;
          bottom: 0;
        }
      }

    }

    .brand-item-c {
      width: 100%;
      height: 885px;

      .item-c-header {
        height: 384px;
        background-size: cover;
        background-image: url(../assets/Introduce/banner.jpg);
        background-position: center;
        color: #fff;
      }

      .item-c-content {
        height: 501px;
        background: #FBFBFB;
        color: #5F6464;
        overflow: hidden;
      }
    }

    .brand-item-d {
      background: #FBFBFB;
      margin-top: 20px;
      padding: 80px 0;
      width: auto;
      margin-left: 20px;
      margin-right: 20px;

      .item-d-con {
        width: 1200px;
        height: 480px;
        margin: 0 auto;

        .item-d-txt h3 {
          font-size: 30px;
          color: #2a2e2e;
        }

        .item-d-content {
          width: 100%;
          margin-top: 38px;
          text-align: center;

          .compy {
            text-align: center;
            margin-top: 12px;
            position: relative;
            margin-bottom: 64px;

            img {
              width: 183px;
            }
          }

          .compy::after {
            content: ' ';
            height: 26px;
            width: 2px;
            background: #D8D9DC;
            position: absolute;
            bottom: -38px;
            left: 50%;
          }

          .list-ul {
            width: 100%;
            position: relative;
            text-align: center;

            .li {
              width: 16.25%;
              background: #F2F3F5;
              padding: 32px 10px;
              box-sizing: border-box;
              text-align: center;
              float: left;
              margin-left: 0.5%;
              position: relative;
              cursor: pointer;

              .label {
                font-size: 30px;
                color: #0052D9;
                letter-spacing: 0;
              }

              .val {
                font-size: 14px;
                color: #5F6464;
                letter-spacing: 0;
                line-height: 25px;
              }

              .san {
                width: 48px;
                position: absolute;
                left: 40%;
                bottom: -49px;
              }
            }

            .li:first-child {
              margin-left: 0;
              background: #fff;
            }
          }

          .list-ul::before {
            content: ' ';
            position: absolute;
            left: 99px;
            width: 83.86%;
            top: -26px;
            height: 2px;
            background: #D8D9DC;
            display: block;
          }

          .list-ul .li::before {
            content: ' ';
            height: 26px;
            width: 2px;
            background: #D8D9DC;
            position: absolute;
            top: -26px;
          }

          .li-mess-box {
            width: 100%;
            margin-top: 48px;
            position: relative;

            .mess-text {
              padding: 32px 42px;
              font-size: 14px;
              color: #5F6464;
              letter-spacing: 0;
              line-height: 25px;
              text-align: left;
              position: absolute;
              top: 177px;
              background: #fff;
            }
          }
        }
      }
    }

    .brand-item-e {
      padding-top: 96px;
      padding-bottom: 96px;
      position: relative;

      .item-e-con {
        width: 1200px;
        margin: 0 auto;

        .con-flx h2 {
          font-size: 30px;
          color: #2a2e2e;
        }

        .team-box {
          margin-top: 48px;
          height: 1438px;

          .li {
            width: 25%;
            float: left;
            height: 260px;
            padding-left: 32px;
            box-sizing: border-box;
            position: relative;
            background: #FBFBFB;
            cursor: pointer;
            transition: all .5s linear;

            .mess {
              float: left;
              margin-top: 105px;
              width: 100%;

              .label {
                font-size: 20px;
                line-height: 30px;
                color: #0052d9;
                margin-bottom: 10px;
              }

              .job-mess {
                float: left;
                min-width: 160px;

                p {
                  width: 100%;
                  font-size: 14px;
                  line-height: 21px;
                  color: #5f6464;
                }
              }
            }

            .pic {
              position: absolute;
              right: 0;
              top: 0;

              img {
                width: 120px;
                height: 120px;
              }

              .block {
                width: 28px;
                height: 28px;
                background-color: #0052d9;
                position: absolute;
                left: -13px;
                bottom: -10px;
              }

              .abc {
                transition: all .2s linear;
              }
            }
          }

          .li:hover {
            background: #d6d1d1;

            .abc {
              transform: translateX(13px) translateY(-14px);
            }
          }

          .title-l {
            font-size: 24px;
            line-height: 43px;
            color: #2a2e2e;
            font-weight: 400;
            margin-top: 60px;
            margin-bottom: 35px;
            width: 100%;
            float: left;
          }
        }
      }
    }

    .brand-item-f {
      position: relative;

      .mod-max-con {
        width: auto;
        background: #FBFBFB;
        padding-left: 100px;
        box-sizing: border-box;
        margin-left: 12px;
        margin-right: 12px;

        .culture-box {
          width: 100%;
          overflow: hidden;

          .t-box {
            width: 100%;
            overflow: hidden;
            min-height: 610px;

            .pic {
              float: right;
              width: 60.2%;
              min-height: 610px;
              padding-left: 1%;
              box-sizing: border-box;
              position: relative;
              overflow: hidden;

              img {
                height: 100%;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
              }
            }

            .mess-box {
              width: 39.23%;
              float: left;
              margin-top: 56px;

              .label-box h3 {
                font-size: 30px;
                color: #2a2e2e;
                margin-bottom: 40px;
              }

              .b-box {
                width: 100%;
                overflow: hidden;
                padding-top: 0px;

                .item-title {
                  font-size: 20px;
                  color: #0052D9;
                  letter-spacing: 0;
                  line-height: 36px;
                  margin-bottom: 8px;
                  font-weight: 400;
                }

                .boxx {
                  .x-item {
                    width: 100%;
                    height: 71px;
                    margin-bottom: 20px;

                    h3 {
                      font-size: 24px;
                      color: #2a2e2e;
                    }

                    .p {
                      font-size: 16px;
                      color: #2A2E2E;
                      letter-spacing: 0;
                      line-height: 29px;
                      padding-top: 8px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    .brand-item-g {
      padding-top: 96px;
      padding-bottom: 96px;
      position: relative;

      .mod-max-con {
        width: auto;
        margin-left: 12px;
        margin-right: 12px;
        box-sizing: border-box;

        .mod-m-title {
          width: 100%;
          overflow: hidden;
          text-align: center;
          font-size: 30px;
          color: #2a2e2e;
          padding-top: 40px;
          padding-bottom: 30px;
        }

        .mod-con {
          width: 1200px;
          margin: 0 auto;

          .address-tab {
            width: 100%;
            margin-top: 15px;

            .tab-ul-box {
              position: relative;
              width: 100%;

              .tab-ul {
                padding: 0 40px;
                width: 100%;
                box-sizing: border-box;
                position: absolute;
                left: 0;
                top: 0;
                z-index: 1;
                overflow: hidden;
                white-space: nowrap;

                .li {
                  width: 25%;
                  margin-top: 8px;
                  display: inline-block;
                  position: relative;

                  .label {
                    font-size: 22px;
                    line-height: 44px;
                    text-align: center;
                    font-weight: bold;
                    color: #2a2e2e;
                    position: relative;
                    cursor: pointer;
                  }
                }
              }
            }

            .box {
              width: 1200px;
              padding: 16px 48px;
              transform: translateY(60px);

              .office-container {
                display: flex;
                width: 100%;
                flex-flow: row wrap;
                align-content: center;
                transform: translateX(20px);

                .office {
                  flex: 0 0 47%;
                  margin: 12px;
                  padding: 6px 24px;

                  h4 {
                    font-size: 18px;
                    font-weight: bold;
                    color: #0a0302;
                    margin-bottom: 12px;
                  }

                  p {
                    font-size: 14px;
                    line-height: 25px;
                    color: #5f6464;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

@keyframes transform {
  from {}

  to {
    transform: translateY(13px) translateX(14px);
  }
}
</style>