(function(window, undefined) {
    window.Asc.plugin.init = function() {
        // Listen for commands from the web app
        window.parent.Common.Gateway.on('internalcommand', function(data) {
            if (data.command === 'insertText' && data.data && data.data.text) {
                var textToInsert = data.data.text;
                
                // Insert text at the current cursor position
                window.Asc.plugin.callCommand(function() {
                    var oDocument = Api.GetDocument();
                    var oSelection = oDocument.GetSelection();
                    var oRun = Api.CreateRun();
                    oRun.AddText(textToInsert);
                    oSelection.Add(oRun); // Adds text at cursor/selection
                }, true);
            }
        });
    };
    
    window.Asc.plugin.button = function(id) {
        this.executeCommand("close", "");
    };
})(window, undefined);