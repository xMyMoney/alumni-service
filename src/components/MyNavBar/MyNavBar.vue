<script setup lang="ts">
import { NavBar } from "vant";
import {inject} from "vue";

const comeback = () => {
  history.back()
}
const title = inject('navTitle')
</script>

<template>
  <div>
    <NavBar
        class="nav"
        :title= "title"
        left-text="返回"
        left-arrow
        @click-left="comeback"
    />
  </div>


</template>
