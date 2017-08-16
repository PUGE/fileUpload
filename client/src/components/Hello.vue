<template>
  <div class="hello">
    <P>测试</P>
    <div id="app">
      <input type="file" id="upload" @change="change"/>
      <img :src="img"><img>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      img: ''
    }
  },
  methods: {
    change (e) {
      const file = e.target.files
      const reader = new FileReader()
      reader.readAsDataURL(file[0])
      reader.onload = (e) => {
        this.img = e.target.result
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
