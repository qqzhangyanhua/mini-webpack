<template>
  <div id="app">
11111111
  <iframe src="http://localhost:8080/other-person-add" id="iframe"></iframe>
    <!-- <router-view/> -->
  </div>
</template>
<script>
const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
console.log('primaryColor11111111111111111111',primaryColor);
export default{
  mounted(){
  const iframe = document.getElementById('iframe');
iframe.contentWindow.postMessage({ primaryColor }, '*');

console.log('iframe99999999999999999',iframe);
    }
}

</script>
<style scoped>
#iframe{
  width: 1000px;
  height: 800px;
}
</style>


