Opencart整合进lumem

##重新规划路径
    controller -> /app/Http/Controllers
    model -> /app/Models
    System -> /app/System
    routes -> /routes/web.php
    views -> /resources/views
    js -> /resources/assets/
    css -> /resources/assets/
    languages -> /resources/languages
    js/css/images(系统) -> /public/static/
    images(商品图) -> /public/media/

###剩下需要做的事情：
1. controller快捷的取值方式，不打算改变opencart的子控制器路由方式，保持opencart的轻便，规范类名和文件名统一使用驼峰命名规则。
   目前window下测试ok，有些原始opencart的类名大小写估计是有问题的，没有测试。
2. 系统图片、css、js、语言包加载配方法需要重新写
    引入主题名称，则对于的位置切换可能不一致
    已经加入model的默认构造方法_construct，在产生代理前之前执行，可以在系统加载的时候完成主题、语言包的切换、进一步完成资源位置的切换 
4. 后台需要增加店铺域名(1)及资源baseurl(2)，db读写独立的配置(3),商品图片可以引用网络图片（4），如此就能多店铺多域名多数据库分布式。
3. 后台编辑单店铺模式，不需要每次编辑都是多店铺模式,数据不用重复提交。 编辑数据的店铺切换。



