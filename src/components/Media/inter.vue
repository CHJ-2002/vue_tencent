<template>
  <div class="Inter">

    <div class="mod-section">
      <div class="mod-con">
        <h2 style="color:#2a2e2e"><i>{{ title }}</i></h2>
      </div>
    </div>
    <div class="crumbs-1">
      <el-breadcrumb separator-class="el-icon-arrow-right" class="f-content">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/media' }">媒体</el-breadcrumb-item>
        <el-breadcrumb-item>{{ title }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>


  </div>
</template>

<script>
export default {
  name: 'Inter',
  props: ['title']
}
</script>

<style lang="less" scoped>
.Inter {
  .mod-section {
    width: 100%;
    height: 350px;
    background-image: url('../../assets/Media/media-1.jpg');
    background-size: cover;

    h2 {
      margin-top: 150px;
    }
  }

  .crumbs-1 {
    height: 56px;
    background-color: #f2f3f5;
    line-height: 56px;
    font-size: 16px;

    .f-content {
      width: 1200px;
      margin: auto;
      position: relative;
      overflow: hidden;
    }
  }
}
</style>