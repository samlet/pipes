const PubSub = require('pubsub-js');

// import { MY_TOPIC } from './event-types.js'
topic = require('./event-types').MY_TOPIC
PubSub.subscribe(topic, function (msg, data) {
    console.log(data)
});
 
PubSub.publish(topic, 'world');

