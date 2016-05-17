$(function() {
	var p = navigator.platform;

	// mac
	/*if (p.indexOf("Mac") !== -1) {
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

	// Android or iDevice
	else */
	if (p.indexOf("Android") !== -1 || p.indexOf("iPad") !== -1 || p.indexOf("iPod") !== -1 || p.indexOf("iPhone") !== -1) {
		$("#desktopRow").hide();
	}
});