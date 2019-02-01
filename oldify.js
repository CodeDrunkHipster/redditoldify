(function(){
	var currentUrl = window.location.href.split("//")[1];
	var aux = currentUrl.split('.');
	if(aux[0]!=="old"){
		var url ="old."+rejoin(aux);
		window.location="https://"+url;
	}

	function rejoin(arr){
		arr.splice(0,1)
		return arr.join(".");
	}




})();