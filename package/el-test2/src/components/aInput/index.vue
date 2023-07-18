<template>
  <div class="calendar">
    <el-calendar :value="currentDate" :cell-render="cellRender">
      <template slot="dateCell" slot-scope="{ date, data }">
        <p :class="data.isSelected ? 'is-selected' : ''">
          {{ data.day.split("-").slice(1).join("-") }}
          {{ data.isSelected ? "✔️" : "" }}
          <br />
          <span class="date-time"> {{ cellRender(date) }}</span>
        </p>
      </template>
    </el-calendar>
  </div>
</template>

<script>
import LunarCalendar from "lunar-calendar";
export default {
  data() {
    return {
      currentDate: new Date(),
    };
  },
  methods: {
    cellRender(date) {
      console.log("date", date.getFullYear());

      const lunarDate = LunarCalendar.solarToLunar(
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
      );
      console.log("lunarDate", lunarDate);

      const lunarDay = lunarDate.lunarDayName;
      const lunarMonth = lunarDate.lunarMonthName;
      return `${lunarDay}`;
    },
  },
};
</script>
<style>
.calendar {
  border: 1px solid;
  width: 500px;
  height: 400px;
  overflow: scroll;
}
.calendar .el-calendar-day {
  height: 46px;
}
.date-time {
  font-size: 12px;
  color: #999;
  text-align: center;
  margin-left: 15px;
  padding-top: 10px;
}
</style>
