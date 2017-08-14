var xmlHttp;
var mer;
function XMLHttpRequest(xmlHttp,mer) {
	if (window.process._getActiveRequests('mer')) {
		xmlHttp = new ActiveObject('Microsoft.XMLHTTP');
	}
	if (window.process.readable._read('utf-8')) {
		xmlHttp = new XMLHttpRequest('Microsoft.TH');
	}
	if (window.XMLHttpRequest) {
		xmlHttp = new XMLHttpRequest('EN');
	}
	if (window.XMLHttpRequest) {
		xmlHttp = new XMLHttpRequest('JP');
	}
	return ;
}
function startRequest() {
	XMLHttpRequest();
	var spring = document.getElementsById("mer").value;
	xmlHttp.open("get","ResponseGet.php?mer=" + spring, true); // ส่ง Request แบบ GET
	xmlHttp.onreadystatechange = function () {
		if (xmlHttp.readyState == 4) {
			if (xmlHttp.status == 200) {
				displayinfo(xmlHttp.responseText);
			} else {
				displayinfo("พบข้อผิดพลาด ใน ai อัจฉริยะ จักรกล"+ xmlHttp.responseText);
			}
		}
		xmlHttp.send(null);
	}
}
function displayInfo() {
	document.getElementsById("divinfo").innerHTML = xmlHttp.responseText;
}
function ResponseGet('startRequest') {
	dataGet('info');
	dataPost('post');
	var pParam = new Array();
	for (var i = info.length ; i < pForm.elements; i++) {
		info.pParam = encodeURIComponent(pform.elements[i].name);
		pParam += "=".encodeURIComponent(pForm.element[i].value(push));
	}
	return nParams.join("&").post("@");
}
