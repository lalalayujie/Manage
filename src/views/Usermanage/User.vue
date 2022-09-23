<template>
  <div>
    <el-table
      :data="
        tableData.filter(
          (data) =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
    >
      <el-table-column label="Date" prop="date"> </el-table-column>
      <el-table-column label="Name" prop="name"> </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-button
          class="btn"
            type="primary"
            @click="addnote(scope.$index, scope.row)"
            plain
            >添加用户</el-button
          >
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="editinfo(scope.$index, scope.row)"
            >Edit</el-button
          >

          <el-dialog title="修改信息" :visible.sync="dialogFormVisible">
            <el-form>
              <el-form-item label="日期" :label-width="formLabelWidth">
                <el-input v-model="inputdate" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input v-model="inputname" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="handleEdit"
                >确 定</el-button
              >
            </div>
          </el-dialog>

          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- <Edit v-if="zhenjia"></Edit> -->
  </div>
</template>
  
<script>
import Edit from "./Edit.vue";
export default {
  components: { Edit },
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: "120px",
      tableData: [
        {
          date: "2020-01-01",
          name: "张三",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2020-01-01",
          name: "李四",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2020-01-01",
          name: "王五",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2020-01-01",
          name: "赵六",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      search: "",
      inputdate: "",
      inputname: "",
      num:"",
    };
  },
  methods: {
    editinfo(index){
      this.dialogFormVisible = true
      this.num = index;
    },
    handleEdit(num) {
      this.dialogFormVisible = false;
      this.tableData[this.num].date = this.inputdate;
      this.tableData[this.num].name = this.inputname;
      this.inputdate = "";
      this.inputname = ""
    },
    handleDelete(index, row) {
      this.tableData.splice(index, 1);
    },
    addnote(index, row) {
      this.tableData.push({
        date: "2000-01-01",
        name: "张三",
        address: "上海市普陀区金沙江路 1517 弄",
      });
    },
  },
};
</script>

<style scoped>
.btn{
  margin-bottom: 50px;
}
</style>