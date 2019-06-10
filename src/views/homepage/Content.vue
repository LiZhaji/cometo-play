<template>
    <div class="content">
      <PersonalInfo></PersonalInfo>
      <Nav></Nav>
      <router-view></router-view>
    </div>
</template>

<script>
  import PersonalInfo from "../../components/PersonalInfo"
  import Nav from "../../components/Nav"
  export default {
    name: "content",
    components:{PersonalInfo, Nav}
  }
</script>

<style scoped>
.content{
  padding: 20px;
  height: 100%;
}
</style>
