// 当屏幕宽度在 1221px ~ 1884px 之间时，导航栏启用横向滚动
const MEDIA_QUERY = '(min-width: 1221px) and (max-width: 1884px)';

let dropdownObserver: MutationObserver | null = null;

/**
 * 计算并定位导航栏下拉菜单的位置
 */
function positionDropdown(dropdown: HTMLElement): void {
  const wrapper = dropdown.closest('.dropdown-link');
  const title = wrapper?.querySelector<HTMLElement>('.dropdown-link__title');

  if (!title) {
    return;
  }

  const rect = title.getBoundingClientRect();
  dropdown.style.left = `${rect.left}px`;
  dropdown.style.top = `${rect.bottom}px`;
}

/**
 * 启用导航栏下拉菜单的定位逻辑
 */
function enableDropdownFix(): void {
  if (dropdownObserver) return;

  dropdownObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === 'attributes' &&
        mutation.target instanceof HTMLElement &&
        mutation.target.classList.contains('dropdown-link__container') &&
        mutation.target.style.display !== 'none'
      ) {
        positionDropdown(mutation.target);
      }
    });
  });

  dropdownObserver.observe(document.body, {
    subtree: true,
    attributes: true,
    attributeFilter: ['style'],
  });
}

/**
 * 关闭导航栏下拉菜单的定位逻辑
 */
function disableDropdownFix(): void {
  if (!dropdownObserver) return;

  dropdownObserver.disconnect();
  dropdownObserver = null;
}

/**
 * 导航栏自适应横向滚动（中屏幕）
 */
export function responsiveDropdown(): void {
  const mediaQuery = window.matchMedia(MEDIA_QUERY);

  const apply = () => {
    if (mediaQuery.matches) {
      // 启用横向滚动
      enableDropdownFix();
    } else {
      // 禁用横向滚动
      disableDropdownFix();
    }
  };

  apply();

  mediaQuery.addEventListener('change', apply);
}