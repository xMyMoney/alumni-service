<template>
  <NavBar
      class="nav"
      title="回馈母校"
      left-text="返回"
      left-arrow
      @click-left="comeback"
  />
  <MyDonationItem/>
  <MyDonationItem/>
  <MyDonationItem/>
</template>

<script setup lang="ts">
import {NavBar} from "vant";
import MyDonationItem from "@components/MyDonation/MyDonationItem.vue";

const comeback = () => {
  history.back()
}
</script>

<style scoped>

</style>
