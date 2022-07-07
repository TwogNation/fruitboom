var postMsg = ''

function postText(value){
	console.log('iFrame sender: ' + value) 
	parent.postMessage(value, "*")
}



const scriptsInEvents = {

		async Es_result_Event1_Act8(runtime, localVars)
		{
			postText(runtime.globalVars.postMsg)
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

