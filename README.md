# echarts图表示例

## 基本用法

```
// 基本用法
var myEchart = echarts.init(document.getElementById('my-echart'));

myEchart.setOption({
	...options
})
```

## 同一个图表的多形态切换

```
// 多形态的依据就是数据的变化
var getOption = data => options;

myEchart.setOption({
	...getOption(data)
})
```

## 数据缓存策略

```
// 原始数据的缓存
var cacheData = {
	status1: [],
	status2: [],
	...status
}

var getData = type => {
	return new Promise((resolve, reject) => {
		if (!!cacheData[type]) return cacheData[type];

		$.ajax({url: '/remote'}).then(res => resolve(res)).fail(err => reject(err))
	})
}

getData('status1').then(data => {
	myEchart.setOption({
		...getOption(data)
	})
})
```
