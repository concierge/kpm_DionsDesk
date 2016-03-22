function deskUp() {
	var data = {timeout:1};
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "http://harest.makereti.co.nz:9834/api/up", true);
	xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xhttp.send(JSON.stringify(data));
}

function deskDown() {
	var data = {timeout:1};
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "http://harest.makereti.co.nz:9834/api/down", true);
	xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xhttp.send(JSON.stringify(data));
}

exports.match = function(text, commandPrefix) {
    return text === commandPrefix + 'dionsdesk' || text.startsWith(commandPrefix + 'dionsdesk ');
};

exports.help = function() {
    return [
		[this.commandPrefix + 'dionsdesk','Calls you an idiot.'],
		[this.commandPrefix + 'dionsdesk up','Annoys the Dion by moving his desk up for 1 second.'],
		[this.commandPrefix + 'dionsdesk down','Crushes the Dion by moving his desk down for 1 second.']
	];
};

exports.run = function(api, event) {
	var cmds = event.body.split(' ');
	if (cmds.length === 1 || cmds.length > 2) {
		api.sendMessage("You are an idiot. Learn to desk please.", event.thread_id);
		return;
	}
	
	switch (cmds[1]) {
		case 'up': return deskUp(api, event);
		case 'down': return deskDown(api, event);
		default: return api.sendMessage("You are an idiot. Learn to desk please.", event.thread_id);
	}
	
	api.sendMessage("hello world", event.thread_id);
};
