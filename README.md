# vue.pagination

###Feature
- vue 1.x 翻页器
- 可绑定事件
- 样式基于bootstrap


###Usage
- 声明对象`pagination`: `<pagination :pagination.sync="pagination"></pagination>`
- watch`pagination.page`可监听翻页事件，执行自定义回调

###api
- `pagination`: 翻页器参数对象，双向绑定
- `pagination.page`: 当前页
- `pagination.limit`: 每页限定数量
- `pagination.count`: 共多少项
		
##Demo
[demo](http://embed.plnkr.co/ZttWPXVm3wgSoIruSrJi/)

##TODO
- 自定义样式

		




