<script setup lang="ts">
import { Cell, CellGroup } from 'vant';
</script>
<template>
  <div class="main">
    <CellGroup inset class="envelop">
      <Cell icon="envelop-o" title="致校友的一封信" size="large" is-link />
    </CellGroup>

    <CellGroup inset class="vCard">
      <Cell icon="envelop-o" title="我的名片" size="large" is-link />
      <Cell icon="envelop-o" title="校友名片" size="large" is-link />
    </CellGroup>

    <CellGroup inset class="actions">
      <Cell icon="info-o" title="修改资料" size="large" is-link />
      <Cell icon="info-o" title="联系母校" size="large" is-link />
      <Cell icon="info-o" title="关于母校" size="large" is-link />
      <Cell icon="info-o" title="意见反馈" size="large" is-link />
    </CellGroup>
  </div>
</template>
<style scoped lang="less">
.main {
  .envelop {
    margin-top: 1rem;
    border: 1px solid #ccc;
  }
  .vCard {
    border: 1px solid #ccc;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .actions {
    border: 1px solid #ccc;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
}
</style>
