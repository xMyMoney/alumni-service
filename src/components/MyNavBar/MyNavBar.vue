<script setup lang="ts">
import { NavBar,Icon } from "vant";
import { ref } from "vue";
const active = ref(0)
</script>

<template>

    <NavBar title="标题" left-text="返回" left-arrow :fixed=true>
        <template #right>
            <Icon name="search" size="18" />
        </template>
    </NavBar>
</template>
