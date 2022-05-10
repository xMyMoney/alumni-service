<template>
  <MyNavBar/>
  <div>
    <MyAlumniItem
    v-for="item in response"
    :key="item.id"
    :alumni="item"
    :all="0"
    />
  </div>
</template>

<script setup lang="ts">

import MyAlumniItem from "@components/MyAlumni/MyAlumniItem.vue";
import MyNavBar from "@components/MyNavBar/MyNavBar.vue";
import {provide, ref} from "vue";
import {Alumni, getMyAlumniList} from "@api/alumni";
import {useXhr} from "@hooks/useXhr";
import {getUserId} from "@utils/auth";
provide('navTitle','校友名片')
const adapter = async ()=> (await getMyAlumniList(getUserId() as unknown as number)).data;
const [request, response, loading] = useXhr(adapter, [],true);
// const {loading,response:data} = useRequest<Alumni[]>(async ()=> (await getAlumniList(1)),[]);

</script>


<style scoped>

</style>
