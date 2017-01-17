
export function maHacky(slovo){
	    var reg = /[ěščřžýáíéúů]/gi;
        var ceskeZnaky = slovo.match(reg);
        const maHacky= (ceskeZnaky!==null) ? true :false;
        return maHacky;
}

export function randomZnak(retezec){
	    var randomIndex=random(0, retezec.length);
        return retezec.charAt(randomIndex);
}
export function randomZnaky(retezec, pocet){

	//nahodne vybrat nekolik znaku a nalepit je na sebe
	var znaky="";
	for(var i=0; i<pocet; i++){
		 var randomIndex=random(0, retezec.length);
		 znaky=znaky+retezec.charAt(randomIndex); //concat?
	}
	   
    return znaky;
}

export function random(min, max){ //vcetne min a bez max
	     return Math.floor(Math.random() * (max - min) + min);
}