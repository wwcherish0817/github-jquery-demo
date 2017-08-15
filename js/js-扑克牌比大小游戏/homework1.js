/**
 * Created by ww on 2016/9/14.
 */
(function(){

    var myCount = 0;
    var otherCount = 0;
    var myCountDom =  document.getElementById("mycount");
    var otherCountDom =  document.getElementById("othercount");
    var showMyResultDom = document.getElementById("showMyResult"); //
    var showOtherResultDom = document.getElementById("showOtherResult"); //
    var showPaiDom =  document.getElementById("showpai");
    var HavePaiArr = [];
    var ShowPaiDomArr = [];

    //洗牌
    var paiArr = [
        {id:1,typeNmae:"红桃",num:1,zorder:5}, {id:2,typeNmae:"黑桃",num:1,zorder:4}, {id:3,typeNmae:"方片",num:1,zorder:3}, {id:4,typeNmae:"梅花",num:1,zorder:2},
        {id:5,typeNmae:"红桃",num:2,zorder:5}, {id:6,typeNmae:"黑桃",num:2,zorder:4}, {id:7,typeNmae:"方片",num:2,zorder:3}, {id:8,typeNmae:"梅花",num:2,zorder:2},
        {id:9,typeNmae:"红桃",num:3,zorder:5}, {id:10,typeNmae:"黑桃",num:3,zorder:4}, {id:11,typeNmae:"方片",num:3,zorder:3}, {id:12,typeNmae:"梅花",num:3,zorder:2},
        {id:13,typeNmae:"红桃",num:4,zorder:5}, {id:14,typeNmae:"黑桃",num:4,zorder:4}, {id:15,typeNmae:"方片",num:4,zorder:3}, {id:16,typeNmae:"梅花",num:4,zorder:2},
        {id:17,typeNmae:"红桃",num:5,zorder:5}, {id:18,typeNmae:"黑桃",num:5,zorder:4}, {id:19,typeNmae:"方片",num:5,zorder:3}, {id:20,typeNmae:"梅花",num:5,zorder:2},
        {id:21,typeNmae:"红桃",num:6,zorder:5}, {id:22,typeNmae:"黑桃",num:6,zorder:4}, {id:23,typeNmae:"方片",num:6,zorder:3}, {id:24,typeNmae:"梅花",num:6,zorder:2},
        {id:25,typeNmae:"红桃",num:7,zorder:5}, {id:26,typeNmae:"黑桃",num:7,zorder:4}, {id:27,typeNmae:"方片",num:7,zorder:3}, {id:28,typeNmae:"梅花",num:7,zorder:2},
        {id:29,typeNmae:"红桃",num:8,zorder:5}, {id:30,typeNmae:"黑桃",num:8,zorder:4}, {id:31,typeNmae:"方片",num:8,zorder:3}, {id:32,typeNmae:"梅花",num:8,zorder:2},
        {id:33,typeNmae:"红桃",num:9,zorder:5}, {id:34,typeNmae:"黑桃",num:9,zorder:4}, {id:35,typeNmae:"方片",num:9,zorder:3}, {id:36,typeNmae:"梅花",num:9,zorder:2},
        {id:37,typeNmae:"红桃",num:10,zorder:5}, {id:38,typeNmae:"黑桃",num:10,zorder:4}, {id:39,typeNmae:"方片",num:10,zorder:3}, {id:40,typeNmae:"梅花",num:10,zorder:2},
        {id:41,typeNmae:"红桃",num:11,zorder:5}, {id:42,typeNmae:"黑桃",num:11,zorder:4}, {id:43,typeNmae:"方片",num:11,zorder:3}, {id:44,typeNmae:"梅花",num:11,zorder:2}, {id:45,typeNmae:"红桃",num:12,zorder:5}, {id:46,typeNmae:"黑桃",num:12,zorder:4}, {id:47,typeNmae:"方片",num:12,zorder:3}, {id:48,typeNmae:"梅花",num:12,zorder:2},
        {id:49,typeNmae:"红桃",num:13,zorder:5}, {id:50,typeNmae:"黑桃",num:13,zorder:4}, {id:51,typeNmae:"方片",num:13,zorder:3}, {id:52,typeNmae:"梅花",num:13,zorder:2},
        {id:53,typeNmae:"红桃",num:14,zorder:5}, {id:54,typeNmae:"黑桃",num:14,zorder:4}, {id:55,typeNmae:"方片",num:14,zorder:3}, {id:56,typeNmae:"梅花",num:14,zorder:2},
        {id:57,typeNmae:"大王",num:100,zorder:7}, {id:58,typeNmae:"小王",num:99,zorder:6}
    ];

    document.getElementById("startBtn").addEventListener("click",function(){
        if(HavePaiArr.length == paiArr.length){
            alert("已经是新的一局了!");
            return false;
        }
        initGame();
    });
    //重置数据
    function initGame(){
        myCount = 0;
        otherCount =  0;
        showMyResultDom.style.display = "none";
        showOtherResultDom.style.display = "none";
        HavePaiArr = [];
        ShowPaiDomArr = [];
        showPaiDom.innerHTML = "";

        createPai();
        showCount();
    }
    //显示积分
    function showCount(){
        myCountDom.innerHTML = myCount;
        otherCountDom.innerHTML = otherCount;
    }

    //创建牌
    function createPai(){
        var innerDom = "";
        for(var i=0;i<paiArr.length;i++){
            var paiEvery = paiArr[i];
            HavePaiArr.push(paiEvery.id);

            var div = document.createElement("div");
            div.setAttribute("class", "paiInner");
            div.setAttribute("paiid", paiEvery.id);

            var pType =  document.createElement("p");
            pType.setAttribute("class", "type");
            pType.innerHTML = paiEvery.typeNmae;
            div.appendChild(pType);

            var pName =  document.createElement("p");
            pName.setAttribute("class", "num");
            var nameStr = getDataNum(paiEvery.num);

            pName.innerHTML = nameStr;
            div.appendChild(pName);

            showPaiDom.appendChild(div);

            ShowPaiDomArr.push(div);
        }
        var div = document.createElement("div");
        div.setAttribute("class", "clear");
        showPaiDom.appendChild(div);
    }

    //开始按钮
    document.getElementById("palyBtn").addEventListener("click",function(){
        if(HavePaiArr.length == 0){
            alert("请开始游戏!");
            return false;
        }
        playGame();
        document.getElementById("resultBtn").removeAttribute("disabled");
        this.setAttribute("disabled",true);
    });
    function playGame(){
        //先隐藏所有
        for(var i=0;i<ShowPaiDomArr.length;i++){
            var everyPai = ShowPaiDomArr[i];
            var ptype = everyPai.getElementsByClassName("type")[0];
            var pnum = everyPai.getElementsByClassName("num")[0];
            ptype.style.display="none";
            pnum.style.display="none";
        }

        var myCountRanDom = parseInt(HavePaiArr.length*Math.random());
        var myCountId = 0;
        for(var i=0;i<HavePaiArr.length;i++){
            if (i == myCountRanDom){
                myCountId = HavePaiArr[i];
                //HavePaiArr.splice(myCountRanDom,1);
                removeArrChild(myCountRanDom,myCountId);
                break;
            }
        }

        var otherCountRanDom= parseInt(HavePaiArr.length*Math.random());
        var OtherCountId = 0;
        for(var i=0;i<HavePaiArr.length;i++){
            if (i == otherCountRanDom){
                OtherCountId = HavePaiArr[i];
                //HavePaiArr.splice(otherCountRanDom,1);
                removeArrChild(otherCountRanDom,OtherCountId);
                break;
            }
        }

        for(var i=0;i<paiArr.length;i++){
            var paiEvery = paiArr[i];
            if(paiEvery.id == myCountId){
                showMyResultDom.style.display = "block";
                setShowResultItem(showMyResultDom,paiEvery);

            }
            else if(paiEvery.id == OtherCountId) {
                showOtherResultDom.style.display = "none";
                setShowResultItem(showOtherResultDom, paiEvery);
            }
        }

    }
    function removeArrChild(HavePaiArr_idx, ShowPaiDomArr_id){
        HavePaiArr.splice(HavePaiArr_idx,1);
        for(var i=0;i<ShowPaiDomArr.length;i++){
            var paiId = ShowPaiDomArr[i].getAttribute("paiid");
            if(paiId == ShowPaiDomArr_id){
                ShowPaiDomArr[i].remove();
                ShowPaiDomArr.splice(i,1);
                break;
            }
        }
    }
    function setShowResultItem(resultDom,data){
        resultDom.setAttribute("paiId", data.id);
        var pType = resultDom.getElementsByClassName("type")[0];
        var pName = resultDom.getElementsByClassName("num")[0];
        pType.innerHTML = data.typeNmae;
        pName.innerHTML = getDataNum(data.num);
    }
    function getDataNum(num){
        var nameStr = "";
        if(num == 11){
            nameStr = "J";
        }
        else if(num == 12){
            nameStr = "Q";
        }
        else if(num== 13){
            nameStr = "K";
        }
        else if(num == 14 ){
            nameStr = "A";
        }
        else
        {
            nameStr= num;
        }
        return nameStr;
    }
    //对比
    document.getElementById("resultBtn").addEventListener("click",function(){

        checkGame();
        this.setAttribute("disabled",true);
        document.getElementById("palyBtn").removeAttribute("disabled");
    });
    function checkGame(){
        showOtherResultDom.style.display = "block";
        //显示所有
        for(var i=0;i<ShowPaiDomArr.length;i++){
            var everyPai = ShowPaiDomArr[i];
            var ptype = everyPai.getElementsByClassName("type")[0];
            var pnum = everyPai.getElementsByClassName("num")[0];
            ptype.style.display="block";
            pnum.style.display="block";
        }
        var myresultId = showMyResultDom.getAttribute("paiid");
        var OtheresultId = showOtherResultDom.getAttribute("paiid");

        var myresultPaiObj,OtheresultPaiObj;
        for(var i=0;i<paiArr.length;i++){
            var paiEvery = paiArr[i];
            if(paiEvery.id == myresultId){
                myresultPaiObj= paiEvery;
            }
            else if(paiEvery.id == OtheresultId){
                OtheresultPaiObj = paiEvery;
            }
            else
            {
                continue;
            }
        }

        if(myresultPaiObj.num > OtheresultPaiObj.num){
            myCount++;
        }
        else if(myresultPaiObj.num < OtheresultPaiObj.num){
            otherCount++;
        }
        else
        {
            if(myresultPaiObj.zorder > OtheresultPaiObj.zorder){
                myCount++;
            }
            else
            {
                otherCount++;
            }
        }
        showCount();
    }
})();