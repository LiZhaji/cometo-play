<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html, body, #app {
    height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
  }
  .clear-fix:before,
  .clear-fix:after{
    content: '';
    display: table;
    clear: both;
  }
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
