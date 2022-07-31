<template>
  <div class="Activities">
    <inter :title="title"></inter>

    <div class="media-content">
      <div class="shown" v-for="index in imageList" :key="index.id">
        <div class="title">
          <div class="left">
            <h4>{{ index.label }}</h4>
          </div>
          <div class="both"></div>
        </div>
        <div class="list" v-show="index.num >= 1">
          <a>
            <div class="pic-box"
              :style="{ backgroundImage: 'url(' + index.item1 + ')', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '158px' }">
            </div>
          </a>
        </div>
        <div class="list" v-show="index.num >= 2">
          <a>
            <div class="pic-box"
              :style="{ backgroundImage: 'url(' + index.item2 + ')', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '158px' }">
            </div>
          </a>
        </div>

        <div class="list" v-show="index.num >= 3">
          <a>
            <div class="pic-box"
              :style="{ backgroundImage: 'url(' + index.item3 + ')', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '158px' }">
            </div>
          </a>
        </div>
        <div class="list list_4" v-show="index.num >= 4">
          <a>
            <div class="pic-box"
              :style="{ backgroundImage: 'url(' + index.item4 + ')', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '158px' }">
            </div>
          </a>
        </div>
        <div class="list" v-show="index.num >= 5">
          <a>
            <div class="pic-box"
              :style="{ backgroundImage: 'url(' + index.item5 + ')', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '158px' }">
            </div>
          </a>
        </div>
        <div class="list" v-show="index.num >= 6">
          <a>
            <div class="pic-box"
              :style="{ backgroundImage: 'url(' + index.item6 + ')', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '158px' }">
            </div>
          </a>
        </div>
        <div class="list" v-show="index.num >= 7">
          <a>
            <div class="pic-box"
              :style="{ backgroundImage: 'url(' + index.item7 + ')', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '158px' }">
            </div>
          </a>
        </div>
        <div class="list list_4" v-show="index.num >= 8">
          <a>
            <div class="pic-box"
              :style="{ backgroundImage: 'url(' + index.item8 + ')', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '158px' }">
            </div>
          </a>
        </div>
        <div class="list" v-show="index.num >= 9">
          <a>
            <div class="pic-box"
              :style="{ backgroundImage: 'url(' + index.item9 + ')', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '158px' }">
            </div>
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import inter from './inter.vue'
export default {
  name: 'Activities',
  data () {
    return {
      title: '活动图集',
      imageList: [
        {
          id: 1, label: '腾讯在美国洛杉矶开设新办公室', num: 5,
          item1: require('../../assets/Activities/10001.jpg'),
          item2: require('../../assets/Activities/10002.jpg'),
          item3: require('../../assets/Activities/10003.jpg'),
          item4: require('../../assets/Activities/10004.jpg'),
          item5: require('../../assets/Activities/10005.jpg'),
        },
        {
          id: 2, label: '2020全球电竞运动领袖峰会', num: 6,
          item1: require('../../assets/Activities/10006.jpg'),
          item2: require('../../assets/Activities/10007.jpg'),
          item3: require('../../assets/Activities/10008.jpg'),
          item4: require('../../assets/Activities/10009.jpg'),
          item5: require('../../assets/Activities/10010.jpg'),
          item6: require('../../assets/Activities/10011.jpg'),
        },
        {
          id: 3, label: '2020微信公开课PRO', num: 6,
          item1: require('../../assets/Activities/10012.jpg'),
          item2: require('../../assets/Activities/10013.jpg'),
          item3: require('../../assets/Activities/10014.jpg'),
          item4: require('../../assets/Activities/10015.jpg'),
          item5: require('../../assets/Activities/10016.jpg'),
          item6: require('../../assets/Activities/10017.jpg'),
        },
        {
          id: 4, label: '腾讯医学ME大会', num: 5,
          item1: require('../../assets/Activities/10018.jpg'),
          item2: require('../../assets/Activities/10019.jpg'),
          item3: require('../../assets/Activities/10020.jpg'),
          item4: require('../../assets/Activities/10021.jpg'),
          item5: require('../../assets/Activities/10022.jpg'),
        },
        {
          id: 5, label: '腾讯科学WE大会2019', num: 5,
          item1: require('../../assets/Activities/10023.jpg'),
          item2: require('../../assets/Activities/10024.jpg'),
          item3: require('../../assets/Activities/10025.jpg'),
          item4: require('../../assets/Activities/10026.jpg'),
          item5: require('../../assets/Activities/10027.jpg'),
        },
        {
          id: 6, label: '2019年99公益日', num: 5,
          item1: require('../../assets/Activities/10028.jpg'),
          item2: require('../../assets/Activities/10029.jpg'),
          item3: require('../../assets/Activities/10030.jpg'),
          item4: require('../../assets/Activities/10031.jpg'),
          item5: require('../../assets/Activities/10032.jpg'),
        },
        {
          id: 7, label: '腾讯用户开放日(T-DAY)', num: 5,
          item1: require('../../assets/Activities/10033.jpg'),
          item2: require('../../assets/Activities/10034.jpg'),
          item3: require('../../assets/Activities/10035.jpg'),
          item4: require('../../assets/Activities/10036.jpg'),
          item5: require('../../assets/Activities/10037.jpg'),
        },
        {
          id: 8, label: '粤港澳湾区青年营', num: 5,
          item1: require('../../assets/Activities/10038.jpg'),
          item2: require('../../assets/Activities/10039.jpg'),
          item3: require('../../assets/Activities/10040.jpg'),
          item4: require('../../assets/Activities/10041.jpg'),
          item5: require('../../assets/Activities/10042.jpg'),
        },
        {
          id: 9, label: '2019腾讯影业年度发布会', num: 5,
          item1: require('../../assets/Activities/10043.jpg'),
          item2: require('../../assets/Activities/10044.jpg'),
          item3: require('../../assets/Activities/10045.jpg'),
          item4: require('../../assets/Activities/10046.jpg'),
          item5: require('../../assets/Activities/10047.jpg'),
        },
        {
          id: 10, label: '腾讯电竞领袖峰会', num: 5,
          item1: require('../../assets/Activities/10048.jpg'),
          item2: require('../../assets/Activities/10049.jpg'),
          item3: require('../../assets/Activities/10050.jpg'),
          item4: require('../../assets/Activities/10051.jpg'),
          item5: require('../../assets/Activities/10052.jpg'),
        },
        {
          id: 11, label: '数字生态大会', num: 5,
          item1: require('../../assets/Activities/10053.jpg'),
          item2: require('../../assets/Activities/10054.jpg'),
          item3: require('../../assets/Activities/10055.jpg'),
          item4: require('../../assets/Activities/10056.jpg'),
          item5: require('../../assets/Activities/10057.jpg'),
        },
        {
          id: 12, label: 'UP2019新文创生态大会', num: 9,
          item1: require('../../assets/Activities/10058.jpg'),
          item2: require('../../assets/Activities/10059.jpg'),
          item3: require('../../assets/Activities/10060.jpg'),
          item4: require('../../assets/Activities/10061.jpg'),
          item5: require('../../assets/Activities/10062.jpg'),
          item6: require('../../assets/Activities/10063.jpg'),
          item7: require('../../assets/Activities/10064.jpg'),
          item8: require('../../assets/Activities/10065.jpg'),
          item9: require('../../assets/Activities/10066.jpg'),
        },
        {
          id: 13, label: '微信公开课PRO 2019', num: 5,
          item1: require('../../assets/Activities/10067.jpg'),
          item2: require('../../assets/Activities/10068.jpg'),
          item3: require('../../assets/Activities/10069.jpg'),
          item4: require('../../assets/Activities/10070.jpg'),
          item5: require('../../assets/Activities/10071.jpg'),
        },
      ],
    }
  },
  components: {
    inter
  }
}
</script>

<style lang="less" scoped>
.Activities {
  .media-content {
    width: 1200px;
    margin: 0 auto;
    padding-top: 56px;

    .title {
      height: 56px;
      line-height: 36px;
      border-bottom: 1px solid #d8d9dc;
      margin-bottom: 24px;
      padding: 10px 0;
      clear: both;

      h4 {
        color: #2a2e2e;
        font-size: 24px;
        font-weight: 100;
      }
    }

    .list {
      margin-right: 24px;
    }

    .list_4 {
      margin-right: 0;
    }
  }

}
</style>