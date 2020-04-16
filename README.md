/**
 * 轮播组件
 * @param obj	
 * 参数为对象，属性有：
 * id ----- string
 * imgarr ------ 数组    图片数组对象{id,urls}
 * kind -------轮播类型  string ("yslider"Y轴方向滚动,"xslider"X轴方向滚动)
 * direction ------ 轮播方向  string ("x"X轴,"y"Y轴)
 * intervaltime ------ num   轮播间隔时间s
 * evelnum ------ 每组数量 num  
 * isShowspot ------ bol  是否显示上一张下一张滑块
 * isShowslider ------bol   是否显示轮播导航点
 * 
 * style
 * class
 * 
 * comeback
// var Slideshow = new Jb_slideshow({
// 	id:"slideshow",
// 	imgarr:imgarr,
// 	kind:"yslider",
// 	direction:"x",
// 	intervaltime:5000,
// 	isShowslider:true,
// 	isShowspot:true,
// 	evelnum:"2"
// })
 * ---------------------------- usage:----------------------------
 */
 
/**
 * 时间组件
 * @param obj	
 * 参数为对象，属性有：
 * id (必填)
 * kind: "time","date","datetime","year","month","dateRange","timeRange","yearRange","monthRange","datetimeRange"，(必填)
 * date:"初始化时间" (非必填)
 * style
 * class
 * 方法有：
 * 上一年
 * 下一年
 * 上一月
 * 下一月
 * 日期选择
 * var newDate = new Jbdate({
	id:"jbdate"
});
 * ---------------------------- usage:----------------------------
 */
 
/**
 * 时间选择框
 * @param obj	
 * 参数为对象，属性有：
 * id
 * 键值
 * 类型（时间'time'，日期'date'，时间和日期'datetime',年'year',月'month'）
 * 点击触发事件
 * 日期选择
 * 时间选择
	var datetime = new Datetimes({
 	id:"datetime",
 	label:"时间选择",//to do
 	kind:"date",
 	nowtime:true,//to do
 })
 * ---------------------------- usage:----------------------------
 */
 
 /**
 * 多级联动
 * @param obj
 * 参数为对象，属性有：
 * id
 * 一级关键键值
 * 二级关键键值
 * 三级关键键值
 * class
 * 方法有：

 * ---------------------------- usage:----------------------------
 * var newThrlinkage = new Morelinkage({
	id:"jbdate",
	keys:[{
		key:"shi",
		name:"市"
	},{
		key:"xian",
		name:"县"
	},{
		key:"qu",
		name:"区"
	}],
	data:areadata,
	codekey:"code"	
});
 * 
 */
 多级联动，可使用二级以上的基本所有联动选择
 
/**
 * 页码组件
 * @param obj	
 * 参数为对象，属性有：
 * id ----- string(必填)  
 * allnum ------ number(必填)   //数据总数
 * pagenum -------number(必填)   //每页数
 * tis ------ bol   //是否有最左变总数提示
 * equipartnum ------ bol  //是否可以重新分页
 * gopage ------ bol  、、是否有页面跳转输入
 * style
 * class
 * 方法有：
 * 上一页   
 * 下一页   clickNextLi()
 * 选择页   clickli()
 * 跳转页   clickGopageBoxButton()
 * 重新分页   elnumSelectullifun()
 * comeback
var npage = new Page({
 	id:"page",
 	allnum:100,
 	pagenum:10;
 })
 * ---------------------------- usage:----------------------------
 */
