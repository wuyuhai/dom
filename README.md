# dom
个人常用Dom
/**
 * 页码组件
 * @param obj	
 * 参数为对象，属性有：
 * id ----- string
 * imgarr ------ 数组
 * kind -------轮播类型  string
 * direction ------ 轮播方向  string
 * intervaltime ------ num
 * evelnum ------ 每组数量 num
 * isShowspot ------ bol
 * isShowslider ------bol
 * style
 * class
 * 方法有：
 * 上一页
 * 下一页
 * 选择页
 * 跳转页
 * 重新分页
 * comeback
var npage = new Jb_slideshow({
 	
 })
 * ---------------------------- usage:----------------------------
 */
 大图滚动
 
 /**
 * 时间组件
 * @param obj	
 * 参数为对象，属性有：
 * id
 * changemonth
 * changeyear
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
 日期组件
 
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
 	label:"时间选择",
 	kind:"date",
 	nowtime:true,
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
 * id ----- string
 * allnum ------ number
 * pagenum -------number
 * tis ------ bol
 * equipartnum ------ bol
 * gopage ------ bol
 * style
 * class
 * 方法有：
 * 上一页
 * 下一页
 * 选择页
 * 跳转页
 * 重新分页
 * comeback
var npage = new Page({
 	id:"page",
 	allnum:100,
 	pagenum:10;
 })
 * ---------------------------- usage:----------------------------
 */
