function getInfo(){
	$.get("http://127.0.0.1/laoliaoceshi/php/getInfo.php", function(result){

	    	var jsonTxt = JSON.parse(result);
	    	console.log(jsonTxt);
	    	var liStr = "";
	    	for (var i = 0;i< jsonTxt.length; i++) {
	    		
				var li1Idx = i+1;
				var ceng = 1;
	    		var li1Str = toChild(jsonTxt[i],li1Idx,ceng);
	    		liStr+=li1Str;
	    		if (jsonTxt[i]._child_ && (jsonTxt[i]._child_).length) {
	    			for (var j = 0; j <(jsonTxt[i]._child_).length ; j++) {
	    					var childObj = jsonTxt[i]._child_[j];
		    				var li2Idx = li1Idx+ "_"+ (j+1);
		    				var ceng2 = 2;
		    				var li2Str = toChild(childObj,li2Idx,ceng2);
		    				liStr += li2Str;

		    				if (childObj._child_ && (childObj._child_).length) {
		    					for (var x = 0 ; x < childObj._child_.length ;x++) {
		    							var childObj3 = childObj._child_[x];
		    							var li3Idx = li2Idx+ "_"+ (x+1);
		    							var ceng3 = 3;
					    				var li3Str = toChild(childObj3,li3Idx,ceng3);
					    				liStr += li3Str;

		    					};

		    				};
		    		};
	    		}
	    	};
	    	$("#listUl").html(liStr);

	    	$("#listUl li").find(".fold").bind("click",function(){
	    		var this_idx = $(this).parent().attr("idx");
	    		var showNum = $(this).parent().attr("show");
	    		if (showNum == "1") {
	    			$(this).parent().attr("show","0");
	    			eashLi_hide(this_idx);
	    		}
	    		else
	    		{
	    			$(this).parent().attr("show","1");
	    			eashLi_show(this_idx);
	    		};
				
	    	})
	    	$("#listUl li").find(".checkTo").bind("click",function(){
	    		var this_idx = $(this).parent().attr("idx");
	    		if ($(this).is(':checked')) {
	    			//toNoCheckedAll(this_idx);
	    			console.log(true);
	    			toCheckedAll(this_idx);
	    		}
	    		else
	    		{
	    			console.log(false);
	    			toNoCheckedAll(this_idx);
	    			//toCheckedAll(this_idx);
	    		};
				
	    	})
			
	  });
}getInfo();

function toChild(childObj,indx,ceng){
	var liStr = "";
	var li_id = childObj.id;
	var li_name = childObj.name;
	var checkedType = false;
	if (childObj.select && parseInt(childObj.select)>0) { checkedType = true};
	var checkedStr = checkedType ? "checked=checked" : "";
	var cengStr = "li"+ceng;
	if (childObj._child_ && (childObj._child_).length) {
		liStr = "<li show='1' class="+cengStr+" id="+li_id+" idx="+indx+">" +
	    			"&lt;<span class='fold'>+</span>&gt;"+ 
	    			  "<span class='name'>" + li_name+"</span>" +  
	    			  "<input class='checkTo' type='checkbox' value="+li_id+" "+checkedStr+" >" + 
	    			 "</li>";
	}
	else
	{
		liStr = "<li show='1' class="+cengStr+" id="+li_id+" idx="+indx+">" +li_name+ "<input class='checkTo' type='checkbox' value="+li_id+"  "+checkedStr+" >" +"</li>" ;
	}
	return liStr;
}

function eashLi_hide(Idxstr)
{
	var idxArr = Idxstr.split("_");
	var f_Idx = idxArr[0];
	$("#listUl li").each(function(){
		var this_idx = $(this).attr("idx");	
		var chidx_idxArr = this_idx.split("_");
		if (chidx_idxArr.length > idxArr.length && chidx_idxArr[0] == idxArr[0]) {
			$(this).hide();
		};
	})
}
function eashLi_show(Idxstr)
{
	var idxArr = Idxstr.split("_");
	var f_Idx = idxArr[0];
	$("#listUl li").each(function(){
		var this_idx = $(this).attr("idx");	
		var chidx_idxArr = this_idx.split("_");
		if (chidx_idxArr.length > idxArr.length && chidx_idxArr[0] == idxArr[0]) {
			$(this).show();
			
		};
	})
}

function toChangInfo(){
	var checkedArr = [];
	$("#listUl li").find('input').each(function(){
		if($(this).is(':checked')){
			checkedArr.push($(this).val());
		}
	});
	var innerStr = "toJson input Checked: \n"+checkedArr;
	$(".toJson").html(innerStr);
}
function toCheckedAll(Idxstr){
	var idxArr = Idxstr.split("_");

	if (idxArr.length == 1) {
		$("#listUl li").each(function(){
			var this_idx = $(this).attr("idx");
			var chidx_idxArr = this_idx.split("_");
			if (chidx_idxArr.length > idxArr.length && chidx_idxArr[0] == idxArr[0] && chidx_idxArr.length == (idxArr.length+1) ) {
					inputAddChecked($(this).find("input"));
			};
		})
	}
	else if(idxArr.length == 2)
	{
		$("#listUl li").each(function(){
					var this_idx = $(this).attr("idx");
					var chidx_idxArr = this_idx.split("_");
					if (chidx_idxArr.length > idxArr.length &&
					 chidx_idxArr[0] == idxArr[0] && chidx_idxArr[1] == idxArr[1] &&
					  chidx_idxArr.length == (idxArr.length+1) ) {
							inputAddChecked($(this).find("input"));
					};
				})
	}
	else
	{
		return false;
	};
}
function inputAddChecked(inputObj){
	inputObj.prop("checked",true);	
}
function toNoCheckedAll(Idxstr){
	var idxArr = Idxstr.split("_");
	if (idxArr.length == 1) {
		$("#listUl li").each(function(){
		var this_idx = $(this).attr("idx");
		var chidx_idxArr = this_idx.split("_");
		if (chidx_idxArr.length > idxArr.length && chidx_idxArr[0] == idxArr[0] && chidx_idxArr.length == (idxArr.length+1)) {
						inputRemoveChecked($(this).find("input"));
			};
		})
	}
	else if(idxArr.length == 2)
	{
		$("#listUl li").each(function(){
					var this_idx = $(this).attr("idx");
					var chidx_idxArr = this_idx.split("_");
					if (chidx_idxArr.length > idxArr.length &&
					 chidx_idxArr[0] == idxArr[0] && chidx_idxArr[1] == idxArr[1] &&
					  chidx_idxArr.length == (idxArr.length+1) ) {
							inputRemoveChecked($(this).find("input"));
					};
				})
	}
	else
	{
		return false;
	};
}
function inputRemoveChecked(inputObj){
	inputObj.removeAttr("checked");
}