import { defineClientConfig } from '@vuepress/client';
import { rotateMask } from './utils/rotateMask';
import { responsiveDropdown } from './utils/responsiveDropdown';

export default defineClientConfig({
  enhance() {
    if (typeof window === 'undefined') {
      return;
    }

    // 横屏时显示的提示遮罩层
    rotateMask({
      maxWidth: 768,
      text: '请将设备旋转至横屏以继续使用'
    });

    // 导航栏自适应横向滚动（中屏幕）
    responsiveDropdown();
  }
});
