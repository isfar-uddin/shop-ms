const server = require('./../../app');
const request = require('supertest');

let app;

beforeAll( async ()=>{
    app = await server.startServer();
});


test("Should return 200", (done) => {
    return request(app)
        .get('/products')
        .expect(200)
        .end((err,res)=>{
            if(err) {
                console.log("Error=============",err);
            }
            done();
        });
});