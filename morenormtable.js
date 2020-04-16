/**
 * 多项选择联动生成表格
 * @param obj	
 * 参数为对象，属性有：
 * id ----- string  渲染table主题ID (必填)
 * tablekind ----- string   建表模式(分为"linkagetable"页面联动生成表单 和 "loadtable"载入已有数据生成表单)  (必填)
 * 		linkagetable:(对应的参数)  (必填)
 *      	gz  -----  object  联动生成建表的head选择包含内容 
 * 		
 * 		loadtable:(对应参数) (必填)
 * 		header  ------ arr[object]    载入生成建表的head； headerdata{title,key,edit,width}render,slot自定义内容;后期做  (必填)
 * 		data  ------  arr[object]   载入生成建表的body； (必填)
 * 
 * 	customtablehead:{},//自定义表头 暂时不做
	customtablefoot:{},//自定义结尾 暂时不做
	
	
 * 功能参数：(一下默认false)
 * 	abbreviationimg:bol,  //缩略图  
	hideprohibit:bol, //隐藏禁填行
	batchfill:bol,//批量填写
	savepost:bol,//生成表单json数据
	hidemark:bol,//隐藏编码
	integral:bol//积分促销
 * comeback
var normtable = new Morenormtable({
 	id:"normtable",
	tablekind:"linkagetable"				//linkagetable
	gz:item,//渲染内容头
 	functions:{
 		abbreviationimg:true,  //缩略图
 		hideprohibit:true, //隐藏禁填行
 		batchfill:true,//批量填写
 		savepost:true,//生成表单json数据
 		hidemark:true,//隐藏编码
 		integral:true//积分促销
 	},
	customtablehead:{},//自定义表头
	customtablefoot:{},//自定义结尾
 })
 * ---------------------------- usage:----------------------------
 */
function Morenormtable(obj){
	var obj = obj;
	var tablediv = $("#" + obj.id);
	
	//隐藏表格自定义组件	
	var slotarr = 	$("#" + obj.id + " div[data-slot]");
	slotarr.hide()
	
	var normTableContont = $("<div></div>");
	normTableContont.addClass("norm-table-contont")
	tablediv.append(normTableContont)
	
	
	//渲染功能
	function functionsRendering(){
		var functionsdiv = $("<div></div>");
		functionsdiv.addClass("functions-div");
		
		// if(obj.functions.abbreviationimg){
		// 	var abbreviationimg = $("<button></button>");
		// 	abbreviationimg.addClass("abbreviationimg");
		// 	abbreviationimg.html("隐藏缩略图")
		// 	addEventHandler(abbreviationimg[0], 'click', clickabbreviationimg);
			
		// 	functionsdiv.append(abbreviationimg)
		// }
		if(!obj.functions){
			return
		}
		if(obj.functions.hideprohibit){
			var hideprohibit = $("<button></button>");
			hideprohibit.addClass("hide-pro-hibit");
			hideprohibit.html("隐藏禁填行")
			addEventHandler(hideprohibit[0], 'click', clickHideProHibit);
			
			functionsdiv.append(hideprohibit)
		}
		if(obj.functions.batchfill){
			var batchfill = $("<button></button>");
			batchfill.addClass("batch-fill");
			batchfill.html("批量填写")
			addEventHandler(batchfill[0], 'click', clickBatchFill);
			
			functionsdiv.append(batchfill)
		}
		if(obj.functions.savepost){
			var savepost = $("<button></button>");
			savepost.addClass("save-post");
			savepost.html("生成表单json数据")
			addEventHandler(savepost[0], 'click', clickSavePost);
			
			functionsdiv.append(savepost)
		}
		if(obj.functions.hidemark){
			var hidemark = $("<button></button>");
			hidemark.addClass("hide-mark");
			hidemark.html("隐藏编码")
			addEventHandler(hidemark[0], 'click', clickHideMark);
			
			functionsdiv.append(hidemark)
		}
		if(obj.functions.integral){
			var integral = $("<button></button>");
			integral.addClass("integral");
			integral.html("开启积分促销")
			addEventHandler(integral[0], 'click', clickIntegral);
			
			functionsdiv.append(integral)
		}
		normTableContont.append(functionsdiv)
	}
	//渲染表	
	function tableRenderings(){
		var table = $("<table></table>");
		table.prop("cellspacing",0)
		table.prop("cellpadding",0)
		table.prop("border",0)
		normTableContont.append(table)
	}	
		
	//渲染表头
	function theadRendering(tableitem){
		var thead = $("<thead></thead>");
		$("#" + obj.id + " .norm-table-contont table").append(thead);
		var tr = $("<tr></tr>");
		thead.append(tr);
		if(obj.tablekind == "linkagetable"){
			for(var i=0;i<obj.gz.length;i++){
				var th = $("<th></th>");
				th.attr("data-th",obj.gz[i].th)
				th.html(obj.gz[i].name);	
				if(obj.gz[i].cantxt){
					var input = $("<input />");	
					th.append(input)
					tr.append(th);
				}else{
					if(tableitem[obj.gz[i].th].sec.length>0){		
						tr.append(th);
					}			
				}	
			}	
			if(obj.functions && obj.functions.hideprohibit){
				tr.prepend("<th>隐藏</th>");
			}
			var items = [];
			var j = 0;
			while(j<obj.gz.length) {
				if(tableitem[obj.gz[j].th] && tableitem[obj.gz[j].th].sec.length>0){
					items = itemsFun(items,tableitem[obj.gz[j].th].sec,obj.gz[j].th)
				}			
				j ++;
				if(j>obj.gz.length - 1){
					tbodyRendering(items)
					return
				}
			}
		}else if(obj.tablekind == "loadtable"){
			var headdata = obj.header;
			for(var i = 0;i<headdata.length;i++){			
				var th = $("<th></th>");
				th.attr("data-th",headdata[i].key);
				th.html(headdata[i].title)
				if(headdata[i].render){
					var fun = headdata[i].render
					th.html(fun(customLabel,"中国共产党"))
				}		
				if(headdata[i].edit){
					var input = $("<input />");
					th.append(input)
				}
				tr.append(th);				
			}		
			if(obj.functions && obj.functions.hideprohibit){
				tr.prepend("<th>隐藏</th>");
			}
			tbodyRendering(obj.data)
		}							
	}
	
	//渲染tbody
	function tbodyRendering(items){
		var tbody = $("<tbody></tbody>");
		$("#" + obj.id + " .norm-table-contont table").append(tbody);		
		for(var i = 0;i<items.length;i++){
			var tr = $("<tr></tr>");			
			if(obj.functions && obj.functions.hideprohibit){
				var hidetd = $("<td></td>")
				var span = $("<span></span>")
				span.html("×")
				addEventHandler(span[0],"click",hideSingleTd)
				hidetd.append(span)
				tr.prepend(hidetd);
			}
			if(obj.tablekind == "linkagetable"){
				for(var j = 0;j<items[i].length;j++){
					var td = $("<td></td>")			
					td.attr("data-td",items[i][items[i].length-1-j].thtxt)
					td.html(items[i][items[i].length-1-j].name);
					tr.append(td)
				}
				obj.gz.forEach(function(item,idx){
					if(item.cantxt){
						var cantd = $("<td></td>");
						cantd.attr("data-td",item.th)
						cantd.html("<input />");
						tr.append(cantd)
					}
				})	
			}else if(obj.tablekind == "loadtable"){
				for(var j = 0;j<obj.header.length;j++){
					var td = $("<td></td>")			
					td.attr("data-td",obj.header[j].key)					
					if(obj.header[j].edit){
						var input = $("<input />");
						input.val(items[i][obj.header[j].key])
						td.append(input)
					}else{
						td.html(items[i][obj.header[j].key]);
					}
					if(obj.header[j].slot){//自定义表格渲染样式
						//eval(str)					
						slotarr.each(function(idx,item){
							var data = items[i];
							var zz = /\{.*?\}/gi;
							var txt = item.innerHTML.trim()
							var htm = txt.match(zz)[0].substring(1,txt.match(zz)[0].length-1)
							var ntxt = eval(htm)
							td.html(txt.replace(/\{.*?\}/gi,ntxt))
						})					
					}
					tr.append(td)
				}
			}			
			tbody.append(tr);
		}
	}
		
	//生成td表格数组
	function itemsFun(item,arr,thtxt){
		var item = item;
		var arr = arr;
			
		var narrs = [];
		if(item.length == 0){
			for(var i = 0;i<arr.length;i++){
				narrs.push([{thtxt:thtxt,name:arr[i].name}])
			}
		}else{
			item.forEach(function(items,idx){			
				for(var j = 0;j<arr.length;j++){			
					var newarr = [{thtxt:thtxt,name:arr[j].name}].concat(items)								
					narrs.push(newarr)
				}
			})
		}
		return narrs
	}
	
	//功能点击事件	
	function clickAbbrEviatioNimg(){
		console.log("缩略图")
	}
	
	function hideSingleTd(){
		console.log(1)	
		if($(this).html() == "×"){
			$(this).html("✔");
			$(this).parents("tr").addClass("hidecur")
			$(this).parents("tr").children().children("input").attr("disabled",true)
		}else{
			$(this).html("×");
			$(this).parents("tr").removeClass("hidecur")
			$(this).parents("tr").children().children("input").attr("disabled",false)
		}	
	}
	
	function clickHideProHibit(){
		console.log("隐藏禁填行")
		if($(this).html() == "隐藏禁填行"){
			$(this).html("显示禁填行")
			$("#" + obj.id + " table tbody tr.hidecur").hide()
		}else{
			$(this).html("隐藏禁填行")
			$("#" + obj.id + " table tbody tr.hidecur").show()
		}	
	}
	
	function clickBatchFill(){
		var hadwrithsth = $("#" + obj.id + " table thead").find("[data-th]")
		var edata = [];
		for(var i = 0 ;i<hadwrithsth.length;i++){	
			if($(hadwrithsth[i]).find("input").length>0&&$(hadwrithsth[i]).find("input")[0].value != ""){
				edata.push({
					name:$(hadwrithsth[i]).attr("data-th"),
					value:$(hadwrithsth[i]).find("input")[0].value,
				})
			}
		}
		edata.forEach(function(item,idx){
			var godatatd = $("#" + obj.id + " table tbody").find("[data-td='"+item.name+"']")
			for(var j = 0;j<godatatd.length;j++){
				if($(godatatd[j]).parents("tr")[0].className.indexOf("hidecur") == -1){
					$(godatatd[j]).find("input")[0].value = item.value
				}	
			}
		})
	}
	
	function clickSavePost(){
		var trs = $("#" + obj.id + " table tbody tr");
		var postdata = []
		for(var i = 0;i<trs.length;i++){
			if(trs[i].className.indexOf("hidecur") == -1){		
				var item = {};
				for(var j = 0;j<trs.eq(i).find("td").length;j++){
					var its = trs.eq(i).find("td")[j]
					if($(its).attr("data-td")){
						if($(its).find("input").length>0){
							item[$(its).attr("data-td")] = $(its).find("input")[0].value
						}else{
							item[$(its).attr("data-td")] = $(its).html()
						}						
					}				
				}	
				postdata.push(item)
			}
		}
		var postjsonobject = {
			name:"关于某某表单的数据",
			data:postdata,
		}
		console.log(JSON.stringify(postjsonobject))
	}
	
	function clickHideMark(){
		if($(this).html() == "显示编码"){
			$(this).html("隐藏编码")
			$("#" + obj.id + " table thead th[data-th='txm']").show();
			$("#" + obj.id + " table thead th[data-th='goodm']").show();
			$("#" + obj.id + " table tbody td[data-td='txm']").show();
			$("#" + obj.id + " table tbody td[data-td='goodm']").show()
		}else{
			$(this).html("显示编码")
			$("#" + obj.id + " table thead th[data-th='txm']").hide();
			$("#" + obj.id + " table thead th[data-th='goodm']").hide();
			$("#" + obj.id + " table tbody td[data-td='txm']").hide();
			$("#" + obj.id + " table tbody td[data-td='goodm']").hide()
		}	
	}
	
	function clickIntegral(){
		if($(this).html() == "开启积分促销"){
			$(this).html("关闭积分促销")
			$("#" + obj.id + " table thead th[data-th='txm']");
			var thsale = $("<th></th>")
			thsale.html("售卖 <input />元")
			thsale.attr("data-th","thsale")
			
			var thaddpoint = $("<th></th>")	
			thaddpoint.html("积<input />分")
			thaddpoint.attr("data-th","thaddpoint")
			
			var thgivepoint = $("<th></th>")
			thgivepoint.html("赠送<input />分")
			thgivepoint.attr("data-th","thgivepoint")
			
			$("#" + obj.id + " table thead tr").append(thsale);
			$("#" + obj.id + " table thead tr").append(thaddpoint);
			$("#" + obj.id + " table thead tr").append(thgivepoint);
			
			var trds = $("#" + obj.id + " table tbody tr");
			trds.each(function(idx,item){
				console.log(item)
				var td1 = $("<td></td>")			
				td1.attr("data-td","thsale")
				td1.html("<input />")
				
				var td2 = $("<td></td>")	
				td2.html("<input />")
				td2.attr("data-td","thaddpoint")
						
				var td3 = $("<td></td>")
				td3.html("<input />")
				td3.attr("data-td","thgivepoint") 
				
				$(item).append(td1);
				$(item).append(td2);
				$(item).append(td3);
			})
		}else{
			$(this).html("开启积分促销");
			$("#" + obj.id + " table thead th[data-th='thsale']").remove();
			$("#" + obj.id + " table thead th[data-th='thaddpoint']").remove();
			$("#" + obj.id + " table thead th[data-th='thgivepoint']").remove();
			
			$("#" + obj.id + " table tbody td[data-td='thsale']").remove();
			$("#" + obj.id + " table tbody td[data-td='thaddpoint']").remove();
			$("#" + obj.id + " table tbody td[data-td='thgivepoint']").remove();
		}			
	}
	
	this.tableRendering = function(tableitem){
		$("#" + obj.id + " .norm-table-contont table").html("")
		theadRendering(tableitem)				
	}
	
	this.init = function(){
		functionsRendering();
		tableRenderings()
	}
	
	this.comeback = function(){
		 
	}
}

// var loadtable = new Morenormtable({
// 	id:"loadtable",
// 	tablekind:"loadtable",
// 	header:[{
// 		title: '序号',
// 		slot: 'xh',
// 		width: 60,
// 		key:"xh"
// 	},{
// 		title: '用户账号',
// 		key: 'userName',
// 		edit:true
// 	},{
// 		title: '姓名',
// 		render:function(h, params){
// 			var tst = ""
// 			tst = params
// 			return h('div', {
// 				color:"red",
// 				background:"#000",
// 			}, tst)
// 		},
// 		// render: (h, params) => {
// 		// 	var tst = ""		
// 		// 	tst = params
// 		// 	return h('div', {
// 		// 		color:"red",
// 		// 		background:"#000",
// 		// 	}, tst)
// 		// },
// 		key:"name"
// 	},{
// 		title: '身份证号',
// 		key:"idcad"
// 	},{
// 		title: '联系电话',
// 		key:"phone"
// 	}],
// 	data:[{
// 		xh:1,
// 		userName:"wuyuhai",
// 		name:"吴玉海",
// 		idcad:"522425199104097219",
// 		phone:"8960311"
// 	}],
// 	functions:{
// 		abbreviationimg:true,  //缩略图
// 		hideprohibit:true, //隐藏禁填行
// 		batchfill:true,//批量填写
// 		savepost:true,//生成表单json数据
// 		hidemark:true,//隐藏编码
// 		integral:true//积分促销
// 	},
// })
// loadtable.init()
// loadtable.tableRendering()

function customLabel(plabel,nlabel,cont){
	//nlabel = 样式
	var pl = $("<" + plabel + ">" + "</" + plabel + ">");
	pl.css(nlabel)
	pl.html(cont)
	return pl
}
function Htmlrendering(obj){
	var obj = obj;
	var objthis = this
	this.normtable = "";
	var htmls = $("#" + obj.id);
	var htmlscont = $("<div></div>");
	htmlscont.addClass("htmlscont");
	
	htmls.append(htmlscont)
	
	function rendering(){
		var div = $("<div></div>")
		div.html('<p>颜色选择</p>'+
					'<div>'+
						'<p>色系</p>'+
						'<div class="colorkind">'+
							
						'</div>'+
					'</div>	'+
					'<div>'+
						'<p>色类</p>'+
						'<div class="colors">'+
			
						'</div>'+
					'</div>')
		
		htmlscont.append(div)
		for(var i = 0;i<obj.mors.color.length;i++){
			var input = $("<input />")
			input.attr("type","checkbox")
			input.attr("name","colorkinds")
			input.css({
				marginLeft:17.5 + "px",
			})
			var label = $("<label></label>")
			label.html(obj.mors.color[i].name);
			input.val(obj.mors.color[i].num)
			addEventHandler(input[0], 'click', seleccolorkind);	
			$(".colorkind").append(input)
			$(".colorkind").append(label)
		}
	}
	
	function renderingcolor(num){
		$(".colors").html("");
		for(var i = 0;i<obj.mors.color.length;i++){
			if(obj.mors.color[i].num == num){
				for(var j = 0;j<obj.mors.color[i].child.length;j++){
					var input = $("<input />")
					input.attr("type","checkbox")
					input.attr("name","colors")
					input.css({
						marginLeft:17.5 + "px",
					})
					hadselect.colors.sec.forEach(function(item,idx){
						if(item.num == obj.mors.color[i].child[j].num){
							input.prop("checked",true)
						}
					})
					var label = $("<label></label>")
					label.html(obj.mors.color[i].child[j].name);
					input.val(obj.mors.color[i].child[j].num)
					addEventHandler(input[0], 'click', seleccolors);			
					$(".colors").append(input)
					$(".colors").append(label)
				}
				return
			}
		}				
	}
	
	function renderingtwo(){
		var div = $("<div></div>")	
		div.html('<p>尺码规格</p>'+
					'<div class="gg">'+
					'</div>');
		htmlscont.append(div)
		for(var i = 0;i<obj.mors.cicun.length;i++){
			var input = $("<input />")
			input.attr("type","checkbox")
			input.attr("name","cicun")
			input.css({
				marginLeft:17.5 + "px",
			})
			var label = $("<label></label>")
			label.html(obj.mors.cicun[i].name);
			input.val(obj.mors.cicun[i].cc)	
			addEventHandler(input[0], 'click', seleccolors);
			$(".gg").append(input)
			$(".gg").append(label)
		}			
	}
	
	function renderingthr(){
		var div = $("<div></div>")
		div.html('<p>生成表单</p>')
		var normtable = $("<div></div>");
		normtable.attr("id","normtable");
		normtable.addClass("normtable")
		div.append(normtable);
		htmlscont.append(div)	
		var gz = [{
				th:"colors",
				lev:99,
				name:"颜色",		
			},{
				th:"cicun",
				lev:1,
				name:"尺寸"
			},{
				th:"heigt",
				lev:1,
				name:"质量"
			},{
				th:"styles",
				lev:1,
				name:"款式"
			},{
				th:"img",
				lev:1,
				name:"图片"
			},{
				th:"txm",
				cantxt:true,
				lev:-2,
				name:"条形码"
			},{	
				th:"goodm",
				cantxt:true,
				lev:-1,
				name:"商家编码"	
			}
		]
		objthis.normtable = new Morenormtable({
			id:"normtable",
			gz:gz,
			tablekind:"linkagetable",//两种类型，一种是根据选择的类容
			functions:{
				abbreviationimg:true,  //缩略图
				hideprohibit:true, //隐藏禁填行
				batchfill:true,//批量填写
				savepost:true,//生成表单json数据
				hidemark:true,//隐藏编码
				integral:true//积分促销
			},
		})
		objthis.normtable.init()
	}
	
	var hadselect = {
		colors:{
			name:"颜色",
			sec:[]
		},
		cicun:{
			name:"尺寸",
			sec:[],
		},
		heigt:{
			name:"重量",
			sec:[
				{
				name:"58kg",
				num:58
			},
			],
		},
		img:{
			name:"图片",
			sec:[
				{
				name:"人物",
				num:1
			},{
				name:"天使",
				num:2
			},{
				name:"动物",
				num:3
			},
			],
		},
		styles:{
			name:"款式",
			sec:[
				{
				name:"花款",
				num:1
			},{
				name:"天空款",
				num:2
			},{
				name:"海洋款",
				num:3
			},
			],
		}
	};
	function seleccolors(){
		var t = this;
		if($(this)[0].checked==true){
			if($(this).parent()[0].className.indexOf("gg")!=-1){
				hadselect.cicun.sec.push({name:$(this).next().html(),num:$(this).val()})
			}
			if($(this).parent()[0].className.indexOf("colors")!=-1){
				hadselect.colors.sec.push({name:$(this).next().html(),num:$(this).val()})
			}		
		}else{
			var arrs = [];		
			if($(this).parent()[0].className.indexOf("colors")!=-1){
				arrs = hadselect.colors.sec
			}
			if($(this).parent()[0].className.indexOf("gg")!=-1){
				arrs = hadselect.cicun.sec
			}
			arrs.forEach(function(item,idx){
				if(item.num == $(t).val()){
					arrs.splice(idx, 1)
					if($(t).parent()[0].className.indexOf("colors")!=-1){
						hadselect.colors.sec = arrs
					}
					if($(t).parent()[0].className.indexOf("gg")!=-1){
						hadselect.cicun.sec = arrs
					}
				}
			})			
		}
		objthis.normtable.tableRendering(hadselect)
	}
	
	function seleccolorkind(){	
		$(this).parent().children("input").prop("checked",false)
		$(this).prop("checked",true)
		if($(this)[0].checked==true){
			renderingcolor($(this).val())
		}
	}
		
	this.init = function(){
		rendering();
		renderingtwo();
		renderingthr()
	}
	this.comeback = function(){
		
	}
}

var mors = {
	color:[{
		name:"白色系",
		num:"001",
		child:[{
			name:"白色",
			num:"001001"
		},{
			name:"乳白",
			num:"001002"
		},{
			name:"米白",
			num:"001003"
		}]
	},{
		name:"黑色系",
		num:"002",
		child:[{
			name:"黑色",
			num:"002001"
		}]
	},{
		name:"灰色系",
		num:"003",
		child:[{
			name:"灰色",
			num:"003001"
		},{
			name:"浅灰",
			num:"003002"
		},{
			name:"中灰",
			num:"003003"
		},{
			name:"深灰",
			num:"003004"
		},{
			name:"银灰",
			num:"003005"
		}]
	},{
		name:"红色系",
		num:"004",
		child:[{
			name:"红色",
			num:"004001"
		},{
			name:"深红",
			num:"004002"
		},{
			name:"大红",
			num:"004003"
		},{
			name:"橘红",
			num:"004004"
		},{
			name:"粉红",
			num:"004005"
		},{
			name:"酒红",
			num:"004006"
		},{
			name:"西瓜红",
			num:"004007"
		},{
			name:"藕色",
			num:"004008"
		},{
			name:"姨妈红",
			num:"004009"
		}]
	},{
		name:"黄色系",
		num:"005",
		child:[{
			name:"黄色",
			num:"005001"
		}]
	},{
		name:"绿色系",
		num:"006",
		child:[{
			name:"绿色",
			num:"006001"
		}]
	}],
	cicun:[{
		name:"50ml",
		cc:50,
	},{
		name:"100ml",
		cc:100,
	},{
		name:"125ml",
		cc:125,
	},{
		name:"250ml",
		cc:250,
	},{
		name:"500ml",
		cc:500,
	},{
		name:"1L",
		cc:1000,
	}]
}
// var htmls = new Htmlrendering({
// 	id:"htmls",
// 	mors:mors,
// })
// htmls.init()
// htmls.comeback = function(){
		
// }
