<template>
  <el-form :model="formData" ref="formRef" v-bind="$attrs">
    <el-row>
      <el-col v-for="item in formConfig" :key="item.key" v-bind="item.colProps">
        <el-form-item v-bind="item.formItemProps" :prop="item.key">
          <slot v-if="item.type === 'slot'" :name="item.slotName"></slot>
          <template v-else-if="item.type === 'ElRadioGroup'">
            <el-radio-group v-model="formData[item.key]">
              <el-radio
                v-for="e in item?.groupProps?.options"
                :key="e.value"
                :label="e.value"
                >{{ e.label }}
              </el-radio>
            </el-radio-group>
          </template>
          <template v-else-if="item.type === 'ElCheckboxGroup'">
            <el-checkbox-group  v-model="formData[item.key]">
              <el-checkbox
                v-for="e in item?.groupProps?.options"
                :key="e.value"
                :label="e.value"
                >{{ e.label }} </el-checkbox
              >
            </el-checkbox-group>
          </template>
           <template v-else-if="item.type === 'ElSelect'">
            <el-select  v-model="formData[item.key]"  v-bind="item.componentProps">
              <el-option
                v-for="e in item?.groupProps?.options"
                :key="e.value"
                :label="e.label"
                :value="e.value"
                > </el-option
              >
            </el-select>
          </template>
          <component
            v-else
            :is="item.type"
            v-bind="item.componentProps"
            v-model="formData[item.key]"
            @blur="item.handel&&item.handel.blur && item.handel.blur(formData[item.key])"
          ></component>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>
<script>
export default {
  props: {
    formConfig: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      checkList: [],
      formData: {
        // sceneName6:[]
      },
    };
  },
  created() {
    this.getFormData();
  },
  computed: {},
  methods: {
    getFormData() {
      this.formConfig?.forEach((item) => {
        if (item.key) {
        //   formData.value[item.key] = item.value;
          this.$set(this.formData, item.key, item.value);
        }
      });
      console.log("formData================", this.formData);
    },
    getFormRef() {
      return this.$refs.formRef;
    },
    getFormDataValue() {
      return this.formData;
    },
  
  },
};
</script>
<style lang="scss" scoped></style>
