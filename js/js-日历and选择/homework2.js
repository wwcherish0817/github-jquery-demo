/**
 * Created by ww on 2016/9/14.
 */
(function(){
    var weekDay = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

    function getXq(dateStr){
        var myDate = new Date(Date.parse(dateStr.replace(/-/g, "/")));
        return myDate.getDay();
    }
    //返回一个月有多少天
    function getDayS(year,month){
        var curDate = new Date();
        curDate.setYear(year);
        curDate.setMonth(month);
        curDate.setDate(0);
        return curDate.getDate();
    }
    var tabelDemo = document.getElementById("rltable");
    function initTabel(){
        tabelDemo.innerHTML = "";
    }
    function addXqTitle(){
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.innerHTML="星期日";
        tr.appendChild(td1);

        td1 = document.createElement("td");
        td1.innerHTML="星期一";
        tr.appendChild(td1);

        td1 = document.createElement("td");
        td1.innerHTML="星期二";
        tr.appendChild(td1);


        td1 = document.createElement("td");
        td1.innerHTML="星期三";
        tr.appendChild(td1);

        td1 = document.createElement("td");
        td1.innerHTML="星期四";
        tr.appendChild(td1);

        td1 = document.createElement("td");
        td1.innerHTML="星期五";
        tr.appendChild(td1);

        td1 = document.createElement("td");
        td1.innerHTML="星期六";
        tr.appendChild(td1);

        tabelDemo.appendChild(tr);
    }
    function createFunBtn(_year,_month,_day){
        var todaytr = document.createElement("tr");
        var todaytd = document.createElement("td");
        todaytd.setAttribute("colspan",7);

        var dataInfoSapn = document.createElement("span");
        dataInfoSapn.innerHTML="当前的日期是:"+_year+"-"+_month+"-"+_day;
        todaytd.appendChild(dataInfoSapn);

        var newYea_last,newMonth_last;
        if(parseInt(_month) == 1){
            newYea_last = parseInt(_year)-1;
            newMonth_last = 12;
        }
        else{
            newYea_last =  parseInt(_year);
            newMonth_last = parseInt(_month)-1;
        }
        var lastMonthBtn = document.createElement("button");
        var lastDesStr = newYea_last+"-"+newMonth_last+"-"+_day;
        lastMonthBtn.setAttribute("datainfo",lastDesStr);
        lastMonthBtn.innerHTML = "<<";
        lastMonthBtn.addEventListener("click",function(){
            GoDay(this.getAttribute("datainfo"));
        });
        todaytd.appendChild(lastMonthBtn);

        var newYea_next,newMonth_next;
        if(parseInt(_month) == 12){
            newYea_next = parseInt(_year)+1;
            newMonth_next = 1;
        }
        else
        {
            newYea_next = parseInt(_year);
            newMonth_next = parseInt(_month)+1;
        }
        var nextMonthBtn = document.createElement("button");
        var nextDesStr = newYea_next+"-"+newMonth_next+"-"+_day;
        nextMonthBtn.setAttribute("datainfo",nextDesStr);
        nextMonthBtn.innerHTML = ">>";
        nextMonthBtn.addEventListener("click",function(){
            GoDay(this.getAttribute("datainfo"));
        });
        todaytd.appendChild(nextMonthBtn);

        var curDate = new Date();
        var todayyear = curDate.getFullYear();
        var todaymonth = curDate.getMonth()+1;
        var todayDesStr = todayyear+"-"+todaymonth+"-"+curDate.getDate();
        var todayMonthBtn = document.createElement("button");

        todayMonthBtn.setAttribute("datainfo",todayDesStr);
        todayMonthBtn.innerHTML = "today";
        todayMonthBtn.addEventListener("click",function(){

            GoDay(this.getAttribute("datainfo"));
        });
        todaytd.appendChild(todayMonthBtn);


        todaytr.appendChild(todaytd);
        tabelDemo.appendChild(todaytr);
    }
    function GoDay(dataInfo){
        var ymdarr = dataInfo.split("-");
        if(ymdarr.length == 3){
            showRl(ymdarr[0],ymdarr[1],ymdarr[2]);
        }
    }
    function showRl(_year_,_month_,_day_){
        initTabel();
        createFunBtn(_year_,_month_,_day_);
        addXqTitle();

        var dateStr = _year_+"-"+_month_+"-"+_day_+" "+"00:00:00";
        var dataStrOne = _year_+"-"+_month_+"-"+1+" "+"00:00:00";
        var getOneDayXq = getXq(dataStrOne);

        var riLiArr = [];

        //计算上个月显示
        var newYea_last,newMonth_last;
        if(parseInt(_month_) == 1){
            newYea_last = parseInt(_year_)-1;
            newMonth_last = 12;
        }
        else{
            newYea_last =  parseInt(_year_);
            newMonth_last = parseInt(_month_)-1;
        }
        var lastMontDayCount = getDayS(newYea_last,newMonth_last);
        var lastAddNum = 0;
        if(getOneDayXq != 0 ){
            lastAddNum = getOneDayXq;
        }
        else if(getOneDayXq == 0){
            lastAddNum = 7;
        }
        for(var i=0;i<lastAddNum;i++){
            var obj = new Object();
            obj.year = newYea_last;
            obj.month = newMonth_last;
            var newDay_last = lastMontDayCount - (lastAddNum-i)+1;
            obj.day = newDay_last;
            riLiArr.push(obj);
        }
        //把这个月的加上
        var thisYearMonthDayCount = getDayS(_year_,_month_);
        for(var i=0;i<thisYearMonthDayCount;i++){
            var obj = new Object();
            obj.year = _year_;
            obj.month = _month_;
            var day = i+1;
            obj.day = day;
            riLiArr.push(obj);
        }

        //把下个月的加上
        var nextDayCount = 42- riLiArr.length;
        var newYea_next,newMonth_next;
        if(parseInt(_month_) == 12){
            newYea_next = parseInt(_year_)+1;
            newMonth_next = 1;
        }
        else
        {
            newYea_next = parseInt(_year_);
            newMonth_next = parseInt(_month_)+1;
        }
        for(var i=0;i<nextDayCount;i++){
            var obj = new Object();
            obj.year = newYea_next;
            obj.month = newMonth_next;
            var day = i+1;
            obj.day = day;
            riLiArr.push(obj);
        }

        var dayTrArr = [];
        var idx = 1;
        for(var i=0;i<riLiArr.length;i++){
            if(idx >7){
                idx = 1;
            }
            if(idx == 1){
                var createTr = document.createElement("tr");
                dayTrArr.push(createTr);
            }
            var pushTrDom = dayTrArr[dayTrArr.length-1];

            var dayTd =  document.createElement("td");
            var dataInfoStr = riLiArr[i].year+"-"+riLiArr[i].month+"-"+riLiArr[i].day;
            dayTd.setAttribute("datainfo", dataInfoStr);
            if(riLiArr[i].year == _year_ && riLiArr[i].month==_month_ && riLiArr[i].day==_day_){
                dayTd.style.color = "#E71F62";
            }
            else if(riLiArr[i].year < _year_ || riLiArr[i].month <_month_){
                dayTd.style.color = "#ccc";
            }
            else if(riLiArr[i].year > _year_ ||riLiArr[i].month >_month_){
                dayTd.style.color = "#ccc";
            }
            else {
                dayTd.style.color = "#515151";
            }

            dayTd.addEventListener("click",function(){
                touchDay(this);
            });

            dayTd.innerHTML = riLiArr[i].day;
            pushTrDom.appendChild(dayTd);
            idx++;
        }
        for(var i=0;i<dayTrArr.length;i++)
        {
            tabelDemo.appendChild(dayTrArr[i]);
        }
    }
    function toDay(){
        var curDate = new Date();
        var todayyear = curDate.getFullYear();
        var todaymonth = curDate.getMonth()+1;
        var today = curDate.getDate();
        showRl(todayyear,todaymonth,today);
        tabelDemo.style.display="none";
    }toDay();
    function touchDay(tdDom){
        var touchday = tdDom.getAttribute("datainfo");
        document.getElementById("selectdataInput").value = touchday;
        tabelDemo.style.display="none";
    }
    document.getElementById("selectdataInput").onclick = function(){
        tabelDemo.style.display="block";
    }
})();
