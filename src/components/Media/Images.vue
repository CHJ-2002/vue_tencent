<template>
  <div class="Images">
    <inter :title="title"></inter>

    <div class="media-content">
      <div class="list" v-for="index in image_con" :key="index.id" :class="{ list_4: index.id % 4 === 0 }">
        <a>
          <div class="pic-box"
            :style="{ backgroundImage: 'url(' + index.item + ')', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '158px' }">

            <img class="down-icon" src="../../assets/Media/down-icon.png" alt="img">
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
  name: 'Images',
  data () {
    return {
      title: '企业图片',
      image_con: [
        { id: 1, item: 'https://static.www.tencent.com/uploads/2019/11/10/adc22315dd4c4f33277e89bbdb1cdc91.jpg!media.cover' },
        { id: 2, item: 'https://static.www.tencent.com/uploads/2019/11/10/82924cc0132af1f1e6abd1ae39f73f2c.jpg!media.cover' },
        { id: 3, item: 'https://static.www.tencent.com/uploads/2019/11/10/80b906c3d4ff047e42a7320c84e47161.jpg!media.cover' },
        { id: 4, item: 'https://static.www.tencent.com/uploads/2019/11/10/4f34106479e212354f188666b8eb421b.jpg!media.cover' },
        { id: 5, item: 'https://static.www.tencent.com/uploads/2019/11/10/ea825f2e716b9bfacb4bc63a159c9aed.jpg!media.cover' },
        { id: 6, item: 'https://static.www.tencent.com/uploads/2019/11/10/7377509ff14de9b33f2d118e4e5d568e.jpg!media.cover' },
        { id: 7, item: 'https://static.www.tencent.com/uploads/2019/11/10/25a8bceda571cbb43a6775a035930efd.jpg!media.cover' },
        { id: 8, item: 'https://static.www.tencent.com/uploads/2019/11/10/a817c3fedc499d701fc2c9d865f83ecc.jpg!media.cover' },
        { id: 9, item: 'https://static.www.tencent.com/uploads/2019/11/10/7b43130e3794612132dbac1da10ec23d.jpg!media.cover' },
        { id: 10, item: 'https://static.www.tencent.com/uploads/2019/11/10/e1f46121901a5ab08020ad7954f3a040.jpg!media.cover' },
      ],
    }
  },
  components: {
    inter
  }
}
</script>

<style lang="less" scoped>
.Images {
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