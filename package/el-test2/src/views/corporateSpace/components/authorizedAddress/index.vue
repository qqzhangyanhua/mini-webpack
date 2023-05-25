<template>
  <div class="home">
    <el-tabs v-model="activeName">
      <el-tab-pane label="个人通讯录" name="first">
        <el-form label-position="left" label-width="80px">
          <el-row :gutter="16">
            <el-col :span="6">
              <el-form-item label="名称">
                <el-input v-model="name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="手机号">
                <el-input v-model="name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="证件类型">
                <el-input v-model="name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-button>查询</el-button>
              <el-button>重置</el-button>
            </el-col>
            <el-col :span="2">
              <el-button icon="el-icon-plus" @click="handelAdd"
                >新增人员</el-button
              >
            </el-col>
          </el-row>
        </el-form>
        <el-table :data="tableData" style="width: 100%" :key="activeName">
          <el-table-column prop="relationName" label="姓名"> </el-table-column>
          <el-table-column prop="relationPhone" label="手机号码"> </el-table-column>
          <el-table-column prop="relationCardtype" label="证件类型"> </el-table-column>
          <el-table-column prop="relationUniqueid" label="证件号码"> </el-table-column>
          <el-table-column prop="action" label="操作">
            <template v-slot="scope">
              <el-row>
                <el-button type="text" @click="handelEdit(scope.row)"
                  >编辑</el-button
                >
                <el-button type="text" @click="handelDelete(scope.row)"
                  >删除</el-button
                >
              </el-row>
            </template>
          </el-table-column>
        </el-table>
        <div class="authorization-person__pagination">
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="1"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          >
          </el-pagination>
        </div>
      </el-tab-pane>
    </el-tabs>
    <AddPerson
      :showVisible="showVisible"
      @closed="showVisible = false"
      :dialogType="dialogType"
    />
  </div>
</template>

<script lang="ts">
import AddPerson from "./components/addPerson.vue";
export default {
  components: {
    AddPerson,
  },
  data() {
    return {
      dialogType: "add",
      showVisible: false,
      name: "",
      activeName: "first",
      tableData: [
        {
          relationPhone: "13212345678",
          relationName: "王小虎",
          relationUniqueid: "342342423543456464",
          relationCardtype:1
        },
        {
          relationPhone: "13212345653",
          relationName: "王小虎",
          relationUniqueid: "42342354645642342646",
           relationCardtype:1
        },
      ],
    };
  },
  methods: {
    handelDelete() {
      this.dialogType = "delete";
      this.showVisible = true;
    },
    handelEdit(row) {
      this.dialogType = "edit";
      console.log(row);
      this.showVisible = true;
    },
    handelAdd() {
      this.dialogType = "add";
      this.showVisible = true;
    },
    handleSizeChange() {},
    handleCurrentChange() {},
  },
};
</script>
