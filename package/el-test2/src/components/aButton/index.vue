
<template>
  <div>
    子组件-------------------------
    <br/>
      {{form.name}}
      {{form.age}}
      我子的值{{formData.name}}
      {{formData.age}}

      <button @click="handelClick">改变名字</button>
  </div>
</template>
<script>
export default {
  props:{
    form:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data() {
    return {
          formData:{
            name:'王五',  //麻子
            age:1111
          }
    };
  },
  created() {},

  methods: {
    handelClick(){
      this.$emit('changeName','麻子')
    },
    changeName(val){
      this.formData.name=val
    }
  },
};
</script>
