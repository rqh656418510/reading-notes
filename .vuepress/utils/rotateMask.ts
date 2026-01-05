export interface RotateMaskOptions {
    maxWidth?: number
    text?: string
}

// 横屏时显示的提示遮罩层
export function rotateMask(options: RotateMaskOptions = {}) {
    const {
        maxWidth = 768,
        text = '请将设备旋转至横屏以继续使用',
    } = options

    const MASK_ID = 'rotate-mask'

    function createMask() {
        if (document.getElementById(MASK_ID)) {
            return
        }

        const mask = document.createElement('div')
        mask.id = MASK_ID
        mask.innerHTML = `
        <div class="rotate-mask-content">
          <div class="icon">🔄</div>
          <div class="text">${text}</div>
        </div>
      `
        document.body.appendChild(mask)
    }

    function isSmallScreen() {
        return Math.min(window.innerWidth, window.innerHeight) <= maxWidth
    }

    function isPortrait() {
        return window.matchMedia('(orientation: portrait)').matches
    }

    function updateMask() {
        const mask = document.getElementById(MASK_ID)
        if (!mask) {
            return
        }

        if (isSmallScreen() && isPortrait()) {
            mask.style.display = 'flex'
            document.body.style.overflow = 'hidden'
        } else {
            mask.style.display = 'none'
            document.body.style.overflow = ''
        }
    }

    function bind() {
        updateMask()
        window.addEventListener('resize', updateMask)
        window.addEventListener('orientationchange', updateMask)
    }

    function init() {
        createMask()
        bind()
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init)
    } else {
        init()
    }
}
