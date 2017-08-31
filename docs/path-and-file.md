####路径和文件存放说明
models文件存放在根,已经加上了namespace声明，与目录相似
/database/models/admin
/database/models/catalog

controllers文件存放路径：
/app/Http/controllers/Admin/
/app/Http/controllers/Catalog/

Languages文件存放路径：
/resources/languages/
    
Views文件存放路径：    
/resources/views/admin
/resources/views/catalog/theme/

js/css/image存放路径：
/resources/assets/admin
/resources/assets/catalog

数据库里domain相关的表可以删除，相关数据可以写进store表里
cli模式处理数据，还是要针对店铺往下执行，否则系统$_SERVER变量没有数据

####模板路径装配完成，js文件处理完成
jQuery要单独存放，以免bootstrap.js 找不到jquery。

#### 翻译待处理？
#### 数据填充？，模板twig转义是否正确？

#### 域名缓存差异？
http://www.mytcart.com/index.php?route=common/home
http://www.myt2cart.com/index.php?route=common/home





 