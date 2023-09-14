const request = require("request");
const app = require('../app')


// describe("study test node",()=>{
//     var server;
//     var data = {}
// //? test endpoint "bonus ==> two endpoints"
//     beforeAll((done)=>{ //(done) as a async
//         server = require("../app.js");
//         request.get("http://localhost:3000/", (error, res,body)=>{
//             data.status =  res.statusCode;
//             data.body =  body;
//             done()
//         })
//     });
//     afterAll(()=>{
//         server.close();
//     });

//     it("test status code",()=>{
//         expect(data.status).toEqual(200)
//     })
//     it("test body",()=>{
//         expect(data.body).toEqual("hello world")
//     })
// })


describe('GET /', () => {
    it('responds with "hello world" and status 200', (done) => {
        request(app)
        .get('/')
        .expect(200)
        .expect('hello world')
        .end((err, res) => {
            if (err) return done.fail(err);
            done();
        });
    });
});

describe('POST /post', () => {
    it('responds with "Hello Jasmine" and status 200', (done) => {
        request(app)
        .post('/post')
        .send({})
        .expect(200)
        .expect('Hello Jasmine')
        .end((err, res) => {
            if (err) return done.fail(err);
            done();
        });
    });
});
