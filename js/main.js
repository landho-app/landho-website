$(function() {
	var p = navigator.platform;

	// mac
	if (p.indexOf("Mac") !== -1) {
		$("#dlWin,#dlLin").hide();
		$("#dlMac").show();
	}

	// Windows
	else if (p.indexOf("Win") !== -1) {
		$("#dlMac,#dlLin").hide();
		$("#dlWin").show();
	}

	// Linux
	else if (p.indexOf("Linux") !== -1) {
		$("#dlMac,#dlWin").hide();
		$("#dlLin").show();
	}
});