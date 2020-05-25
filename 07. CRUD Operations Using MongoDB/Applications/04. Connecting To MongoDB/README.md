01. Connections:
- You can connect to MongoDB with the mongoose.connect() method.
- mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});
- This is the minimum needed to connect the myapp database running locally on the default port (27017). If connecting fails on your machine, try using 127.0.0.1 instead of localhost.
- You can also specify several more parameters in the uri:
- mongoose.connect('mongodb://username:password@host:port/database?options...', {useNewUrlParser: true});

02. mongoose.connect() returns promise :
- function connect(uris: string, options?: ConnectionOptions): Promise<typeof import("mongoose")> (+2 overloads)

03. mongoose.connect('mongodb://localhost/playground')
- If playground database is not there it will create it when we write something to this database for the very first time.

04. For installation on ubuntu : https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

