var request = require('request');
var i = 0;

function deskctl(dir, api, event) {
	request.post({url:'http://harest.makereti.co.nz:9834/api/'+dir,body:JSON.stringify({timeout:1}),headers: {'content-type' : 'application/json'}}, function(error, response, body) {
		if (error) {
			return api.sendMessage("Dion got pissed off with you fiddling with his desk. Come back later.", event.thread_id);
		}
		
		var responses = [
			"Congrats, he's annoyed.",
			"How about another?",
			"Cause why not?",
			"Keep going...",
			"Almost there..."
		];
		
		api.sendMessage(responses[i++%responses.length], event.thread_id);
	});
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
		case 'up': return deskctl('up', api, event);
		case 'down': return deskctl('down', api, event);
		default: return api.sendMessage("You are an idiot. Learn to desk please.", event.thread_id);
	}
	
	api.sendMessage("hello world", event.thread_id);
};
