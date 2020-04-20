- Every route function is a middleware.
- app.get('/', function(req, res) {    res.send('Hello Sir')    });
- function : route function

- app.use(express.json());
- This is a built-in middleware function in Express.
- It parses incoming requests with JSON payloads and is based on body-parser.