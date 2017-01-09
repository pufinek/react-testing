
export function maHacky(slovo){
	    var reg = /[ěščřžýáíéúů]/gi;
        var ceskeZnaky = slovo.match(reg);
        const maHacky= (ceskeZnaky!==null) ? true :false;
        return maHacky;
}