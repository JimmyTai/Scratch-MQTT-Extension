(function(ext) {
    
    console.log('fuck you');
    
    var mqtt = require('mqtt');
    var client = mqtt.connect('mqtt://140.138.41.50:3423');

    client.on('connect', function () {
        console.log("mqtt connected")
        client.subscribe('jimmytai0315')
    });

    client.on('message', function (topic, message) {
        console.log('mqtt message arrived-> topic: ' + topic + ', payload: '+ message.toString())
    });
    
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        console.log("_getStatus");
        return {status: 2, msg: 'Ready'};
    };

    ext.my_first_block = function() {
        // Code that gets executed when the block is run
        console.log("my_first_block");
    };
    
    ext.power = function(base, exponent) {
        return Math.pow(base, exponent);
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            [' ', 'my first block', 'my_first_block'],
            ['r', '%n ^ %n', 'power', 2, 3],
        ]
    };

    // Register the extension
    ScratchExtensions.register('My first extension', descriptor, ext);
    
})({});
