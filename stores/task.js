import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useTaskStore = defineStore('task', () => {
  // 回车登记所需要的所有参数数据
  const recordData = ref({
    // 运输任务id
    id: '',
    // 回车时间
    endTime: '',
    // 出车时间
    startTime: '',
    // 扣分数据
    deductPoints: '',

    /* 违章参数*/
    breakRulesDescription: '', //违章说明
    breakRulesType: '', //违章类型，1-闯红灯，2-无证驾驶，3-超载，4-酒后驾驶，5-超速行驶，6-其他,可用
    penaltyAmount: '', //罚款金额
    isBreakRules: false, //车辆是否违章
    /* 违章参数*/

    /* 故障类型参数*/
    faultDescription: '', //故障说明
    faultImagesList: [], //故障图片列表
    faultType: '', //故障类型，1-发动机启动困难，2-不着车，3-漏油，4-漏水，5-照明失灵，6-有异响，7-排烟异常，8-温度异常，9-其他,可用
    isFault: false, //车辆是否故障
    /* 故障类型参数*/

    /* 交通事故*/
    accidentType: '', //事故类型
    accidentDescription: '', //事故说明
    accidentImagesList: [], //事故图片列表
    isAccident: false //是否出现事故
    /* 交通事故*/
  });
  // 一定要将定义的数据和方法返回
  return { recordData };
});
