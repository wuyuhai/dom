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
 
 /**
 * 穿梭框
 * @param obj	
 * 参数为对象，属性有：
	* - [必须] leftId：实例框的id。
	* - [必须] rightId：实例框的id。
	* - [必须] leftData：初始左边数据。
	* - [非必须] rightData：初始右边数据。
	* - [非必须]checkedIcon:"src/hadseck.png",//当点击样式为'checkbox',可传样式，勾选中的图标 默认为“src/hadseck”  可以不传
	* -	[非必须]disCheckedIcon:"src/noseck.png",//当点击样式为'checkbox',可传样式，没勾选中的图标 默认为“src/noseck”
	* var shuttleBox = new Jb_shuuule({
		leftId:"shuttleBoxLeft",
		rightId:"shuttleBoxRight",
		leftData:leftdata,
		// liClass:"cumclass",
		checkedIcon:"src/hadseck.png",//当点击样式为'checkbox',可传样式，勾选中的图标 默认为“src/hadseck”  可以不传
		disCheckedIcon:"src/noseck.png",//当点击样式为'checkbox',可传样式，没勾选中的图标 默认为“src/noseck”
	})
	$("#transrams").click(function(){					
		shuttleBox.transramsFun()
	})
	$("#saveDatas").click(function(){
		shuttleBox.thisSavedata()			
	})
	shuttleBox.saveData = function(a,b){
		console.log(a).
		console.log(b)
	}
	shuttleBox.unOrAnCheckCameBack = function(item,arr){
		console.log(item);
		console.log(arr);
	}
**/

/**
 * 树
 * @param obj	
 * 参数为对象，属性有：
	* - [必须] id：实例框的id。
	* - [必须] data：实例的节点数据为。
	* - [可选] closeIocn:收缩时节点图标,有默认值'src/add.png'
	* - [可选] openIcon:展开时节点图标,有默认值，"src/jian.png"
	* - [可选] nodeIcon: 节点内容图标 默认所有节点 可以不传，暂时默认为：“src/1.png”
	* - [可选] cilckType: 选择的类型，两种 "radio"单选中时，"checked"复习中时 不传默认单独选中"radio"
	* - [可选] cilckCurCss: //"radio"单选节点点击选中时样式  不传默认“trees-li-div-spancur”,
	* - [可选] checkedIcon: 当选择样式为'checkbox',勾选中的图标 默认为“src/hadseck” 
	* - [可选] disCheckedIcon:,当选择样式为'checkbox',没勾选中的图标 默认为“src/noseck” 
	* 注 ： 默认图片样式根据实际路径显示
 * var treedata = [{  data数据样式
		id:'1',	//节点ID									
		text:'根节点',	//节点字段				
		pid:'',//节点父ID
		nodeIcon:"src/2.png",//节点图标，没有默认跟所有节点图标相同
		child:[{
			id:'2',																								
			text:'根节点',						
			pid:'1',
			nodeIcon:"src/3.png",
			child:[{
				id:'3',																												
				text:'根节点',						
				pid:'2',
				child:[{
					id:'4',																																
					text:'根节点',							
					pid:'3',
				}]
			}],
		}]	
	}]
var myTree = new Jb_tree({
	id:"myTree",//id 必传
	data:treedata,//treedata 必传
	closeIocn:'src/dleft.png',//有默认值，可以不传					
	openIcon:'src/dright.png',//有默认值，可以不传
	nodeIcon:"src/1.png",//节点图标 默认所有节点 可以不传，暂时默认为：“src/1.png”
	cilckType:'checkbox',//选择的类型，两种 "radio"单选中时，"checked"复习中时 不传默认单独选中"radio"
	cilckCurCss:'trees-li-div-spancur',//节点点击选中时样式  不传默认“trees-li-div-spancur”,
	checkedIcon:"src/hadseck.png",//当点击样式为'checkbox',可传样式，勾选中的图标 默认为“src/hadseck”  可以不传
	disCheckedIcon:"src/noseck.png",//当点击样式为'checkbox',可传样式，没勾选中的图标 默认为“src/noseck”  可以不传
})
$("#treeEdit").click(function(){ 
	myTree.edit() //外部按钮编辑节点
})
$("#treeEditHide").click(function(){
	myTree.hideEdit()  //外部按钮隐藏编辑节点
})
$("#saveJson").click(function(){
	myTree.saveJson()   //外部按钮保存JSON格式数据
})
$("#saveXml").click(function(){
	myTree.saveXml()   //外部按钮保存XML格式数据  暂时为写
})
$("#onShowAll").click(function(){
	myTree.onShowAll()   //外部按钮展开所有按钮
})
$("#shrinkageAll").click(function(){
	myTree.shrinkageAll()  //外部按钮收缩所有按钮
})
								
myTree.removeLiCameBack = function(item){
	console.log("要删除的node",item)  //编辑节点时删除按钮点击触发的回调
}
myTree.editLiCameBack = function(item){
	console.log("要编辑的node",item)  //编辑节点时编辑按钮点击触发的回调
}
myTree.clickNodeCameBack = function(item){
	console.log("当前点击的node",item)   //radio单选时点击最底层触发的回调
}
myTree.checkboxNodeCameBack = function(node,hadcheckeddata){
	console.log('当前节点',node)     //checkbox复选时勾选和取消复选框触发的回调
	console.log('所有选中的node',hadcheckeddata)
}

 * ---------------------------- usage:----------------------------
 */
