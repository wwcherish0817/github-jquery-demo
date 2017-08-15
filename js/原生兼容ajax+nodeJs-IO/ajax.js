/**
 * Created by ww on 2016/9/19.
 */

function myAjax(url,successCall){
    var http_request = false;
    if(window.XMLHttpRequest) { //Mozilla �����
        http_request = new XMLHttpRequest();
        if (http_request.overrideMimeType) {//����MiME���
            http_request.overrideMimeType('text/xml');
        }
    }
    else if (window.ActiveXObject) { // IE�����
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }
    }

    if(http_request){
        http_request.open("GET",url);
        http_request.onreadystatechange = function(){
            if(http_request.readyState==4 && http_request.status==200){

                successCall(http_request);
            }
        }
        http_request.send(null);
    }
    else{
        alert("����ajax����ʧ��");
    }
}
