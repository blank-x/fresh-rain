import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式

router.beforeEach((to, from, next) => {
    NProgress.start() // 开启Progress
    next();
   
})

router.afterEach(() => {
    NProgress.done() // 结束Progress
   
})
