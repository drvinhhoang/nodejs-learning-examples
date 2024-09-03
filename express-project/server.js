const express = require('express');

const messageController = require('./controllers/messages.controller');
const friendController = require('./controllers/friends.controller');

const app = express();

const PORT = 3000;


app.use((req, res, next) => {
    const start = Date.now();

    console.log(`${res.statusCode} Request ${req.method} ${req.url}`);
    next();
    const delta = Date.now() - start;
    console.log(`${res.statusCode} Finished ${req.method} ${req.url}: ${delta}ms`);

});

app.use(express.json());

app.get('/friends', friendController.getFriends);

app.post('/friends', friendController.postFriend);


app.get('/friends/:friendId', friendController.getFriend);

app.get('/messages', messageController.getMessage);

app.post('/messages', messageController.postMessage);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
});

