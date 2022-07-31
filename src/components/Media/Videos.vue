<template>
  <div class="Videos">
    <inter :title="title"></inter>
    <div class="media-content ">
      <div class="list" v-for="index in video_con" :key="index.id" :class="{ list_4: index.id % 4 === 0 }">
        <a>
          <div class="pic-box"
            :style="{ backgroundImage: 'url(' + index.item + ')', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '158px' }">

            <img class="down-icon" src="../../assets/Media/play-icon.png" alt="img">
          </div>
          <p class="label">{{ index.label }}</p>
        </a>
      </div>
    </div>


  </div>
</template>

<script>
import inter from './inter.vue'
export default {
  name: 'Videos',
  data () {
    return {
      title: '视频资料',
      video_con: [
        { id: 1, item: 'https://static.www.tencent.com/uploads/2021/09/17/5b34859d0db41ef49fe47b31e3e42523.jpg!media.cover', label: '让听障儿童首次享受音乐' },
        { id: 2, item: 'https://static.www.tencent.com/uploads/2021/09/07/6e33365a46d05c8e67e03e11a9730bec.png!media.cover', label: '99公益日' },
        { id: 3, item: 'https://static.www.tencent.com/uploads/2021/09/07/3e33667672e9aa8480a5be68d4f2a1ae.png!media.cover', label: '“天才妈妈”以祖传工艺打造潮流时尚' },
        { id: 4, item: 'https://static.www.tencent.com/uploads/2021/07/01/90ef63263a271e365004034fdd0c2dbf.jpg!media.cover', label: '腾讯美国洛杉矶办公室' },
        { id: 5, item: 'https://static.www.tencent.com/uploads/2021/06/22/e04e8afe4d0ec1c9c87f072bfd92628a.jpg!media.cover', label: '视障工程师帮助低视力人群扫除信息障碍' },
        { id: 6, item: 'https://static.www.tencent.com/uploads/2021/06/03/b32182a4858e1279b4ec594ed35f02cd.jpg!media.cover', label: '腾讯美国洛杉矶新办公室速览' },
        { id: 7, item: 'https://static.www.tencent.com/uploads/2021/06/03/7b45f27daf66a792c5ed188af0c64dd0.jpg!media.cover', label: '腾讯在美国洛杉矶开设新办公室' },
        { id: 8, item: 'https://static.www.tencent.com/uploads/2021/01/19/8cb7e8e15c4aa1cc62092a4706678c9b.png!media.cover', label: '腾讯新文创' },
        { id: 9, item: 'https://static.www.tencent.com/uploads/2019/11/26/943cdbc7a41b479946a3ed28d341ed25.png!media.cover', label: '腾讯新使命愿景：用户为本，科技向善' },
        { id: 10, item: 'https://static.www.tencent.com/uploads/2019/11/28/9c473adfceafd937f57563cbd0948d82.png!media.cover', label: '腾讯游戏：去发现，无限可能' },
        { id: 11, item: 'https://static.www.tencent.com/uploads/2020/01/17/20ce83af33320c33613a8af4483adf65.png!media.cover', label: '腾讯微电影' },
        { id: 12, item: 'https://static.www.tencent.com/uploads/2019/11/10/0a97bec9ccd3811e394580c01811140c.png!media.cover', label: '腾讯微电影' },
        { id: 13, item: 'https://static.www.tencent.com/uploads/2019/11/10/bbbef0aa41d76d158ffd369e0e2338db.png!media.cover', label: '微信支付' },
        { id: 14, item: 'https://static.www.tencent.com/uploads/2019/11/10/8aebb07f03ce014a8714cb3652f262cc.png!media.cover', label: '企业微信' },
        { id: 15, item: 'https://static.www.tencent.com/uploads/2019/12/02/93624d94413dde78ba47c192f6f9c1cb.png!media.cover', label: '腾讯 AI Lab' },
        { id: 16, item: 'https://static.www.tencent.com/uploads/2019/11/10/bc83c8da068625bd44a1fea5eb589938.png!media.cover', label: '腾讯青年营' },
        { id: 17, item: 'https://static.www.tencent.com/uploads/2019/12/02/7e50bbb66dd1a5fec2483f74be9508df.png!media.cover', label: '腾讯机器人实验室' },
      ],
    }
  },
  components: {
    inter
  }
}
</script>

<style lang="less" scoped>
.Videos {
  .media-content {
    width: 1200px;
    margin: 0 auto;
    padding-top: 56px;
    padding-bottom: 98px;

    .list {
      margin-right: 24px;
    }

    .list_4 {
      margin-right: 0;
    }
  }
}
</style>