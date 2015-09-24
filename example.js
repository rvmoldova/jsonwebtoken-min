var jws = require('./jwt.js');


var payload = {
    user: 'test User',
    uid: 'test:uid'
};

var token = jws.sign(payload, 'secret1234', {
    expiresInSeconds: 200
});

var dec;


try {
    dec = jws.verify(token, 'secret1234');
} catch (e) {
    console.log(e.message);
}

console.log(dec);

try {
    dec = jws.verify(token, 'wrong-secret');
} catch (e) {
    console.log(e.message); // invalid signature
}


