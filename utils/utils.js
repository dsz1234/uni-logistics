/* 项目中会用的一系列工具方法 */

export const utils = {
  toast(title = '', icon = 'none') {
    uni.showToast({
      title,
      icon,
      mask: true
    });
  },
  // 获取年和月
  getYearAndMonth() {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth() + 1;

    if (month < 10) {
      month = '0' + month;
    }
    return { year, month };
  }
};

// 方便全局进行引用
uni.utils = utils;
