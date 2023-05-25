<template>
  <div class="choose-third">
    <div class="choose-third__header">
      <div class="choose-third__header__title">
        <h3>第二类医疗器械经营变更备案</h3>
        <el-tag>授权服务</el-tag>
      </div>
      <p class="choose-third__header--info">
        <span>办事人:</span>
        <span>王箫二</span>
        <span>手机号码:</span>
        <span>132123344455</span>
      </p>
    </div>
    <div class="choose-third__content">
      <el-col :span="18">
        <el-form :model="formData" :rules="rules">
          <h3>授权有效期</h3>
          <el-form-item label="授权有效期" label-width="100px" prop="name">
            <el-date-picker
              v-model="formData.date"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </el-form-item>
          <h3>授权次数</h3>
          <el-form-item label="授权次数" label-width="100px" prop="name">
            <el-radio-group v-model="formData.radio">
              <el-radio :label="3">有效期内无次数限制</el-radio>
              <el-radio :label="6">特定次数</el-radio>
            </el-radio-group>
            <el-input-number
              style="margin-left: 20px"
              v-model="formData.num"
              :min="1"
              :max="10"
              label="描述文字"
            ></el-input-number>
          </el-form-item>
          <h3>授权说明</h3>
          <el-form-item label="授权说明" label-width="100px" prop="name">
            <el-input
              rows="4"
              maxlength="100"
              show-word-limit
              type="textarea"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        date: "",
        radio: "",
        num: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入授权有效期", trigger: "blur" },
        ],
      },
    };
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.choose-third {
  padding: 24px;
  &__header {
    padding-bottom: 24px;
    &__title {
      display: flex;
      align-items: center;
      h3 {
        font-size: 24px;
        margin: 0;
        margin-right: 10px;
      }
    }
    &--info {
      color: #999999;
      font-size: 14px;
      line-height: 22px;
      margin-top: 10px;
      span {
        &:nth-child(2n) {
          color: #333333;
          padding-left: 5px;
          padding-right: 10px;
        }
      }
    }
  }
  &__content {
    border-top: 1px solid #e5e5e5;
    padding-top: 16px;
    h3 {
      color: rgba(0, 0, 0, 0.8);
      font-size: 20px;
      line-height: 28px;
    }
  }
}
</style>
