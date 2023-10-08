/* 项目中会用的一系列工具方法 */

export const utils = {
  toast(title = '', icon = 'none') {
    uni.showToast({
      title,
      icon,
      mask: true
    });
  }
};

// 方便全局进行引用
uni.utils = utils;
