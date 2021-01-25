// variables
var prekidac = 0;
// jQuery


//Funkcije
function prevediText() {
	let faketext= $(".fake-text");
	let realtext= $(".real-text");
	if( prekidac == 0 ){
		realtext.show()
		faketext.hide()
		prekidac = 1;
	}
	else if (prekidac==1){
		realtext.hide()
		faketext.show()
		prekidac = 0;
	}

 }




