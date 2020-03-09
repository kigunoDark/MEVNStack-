const express = require('express'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      postRout = require('./routes/postsRout');
      userRout = require('./routes/usersRout');
      app = express(),
      port = 4000;

require('dotenv').config();

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.DB_URL, { 
                 useNewUrlParser: true,
                 useUnifiedTopology: true,
                 useFindAndModify: false
        })
        .then(() => console.log("Db is connected!"))
        .catch(err => console.log(err))

app.use('/posts',postRout);
app.use('/auth', userRout);

app.listen(port, () => {
  console.log(`Your server is running on a port ${port}`);
})
