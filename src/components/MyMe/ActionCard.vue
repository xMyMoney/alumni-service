<script setup lang="ts">
import { Cell, CellGroup } from 'vant';
</script>
<template>
  <div class="main">
    <CellGroup inset class="envelop">
      <Cell icon="envelop-o" title="致校友的一封信"
            size="large" is-link to="/letter"/>
    </CellGroup>

    <CellGroup inset class="vCard">
      <Cell icon="envelop-o" title="校友申请" size="large" is-link to="/applyCard"/>
      <Cell icon="envelop-o" title="校友名片" size="large" is-link to="/alumniCard"/>
    </CellGroup>

    <CellGroup inset class="actions">
      <Cell icon="info-o" title="修改资料" size="large" is-link to="/info"/>
      <Cell icon="info-o" title="联系母校" size="large" is-link to="/connect"/>
      <Cell icon="info-o" title="关于母校" size="large" is-link to="/about"/>
      <Cell icon="info-o" title="意见反馈" size="large" is-link to="/feedback"/>
    </CellGroup>
  </div>
</template>
<style scoped lang="less">
.main {
  //.envelop {
  //  margin-top: 1rem;
  //  border: 1px solid #ccc;
  //}
  //.vCard {
  //  border: 1px solid #ccc;
  //  margin-top: 0.5rem;
  //  margin-bottom: 0.5rem;
  //}
  //.actions {
  //  border: 1px solid #ccc;
  //  margin-top: 0.5rem;
  //  margin-bottom: 0.5rem;
  //}


  //background-color: #f7f8fa;
  .envelop,.vCard,.actions {
    margin: 0 auto;
    margin-bottom: 1rem;
    //padding: 0.5rem 1rem;
    padding: 1rem;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 8px 12px #ebedf0;
    width: 80%;
  }
}
</style>
