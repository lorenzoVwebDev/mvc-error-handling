//node third parties modules and common core modules
const express = require('express');
const { v4: uuid } = require('uuid');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;
const app = express();
const cors = require('cors')
const corsOptions = require('./configuration/corsOptions.js');
//--------------- middlewares imports ------------------
const {requestLogger} = require('./middleware/logEvents.js');
const errorHandler = require('./middleware/errorHandler.js');
//------------------------------------------------------
const PORT = process.env.PORT || 3000;
//----------------middlewares---------------------------
app.use(requestLogger);

app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, '../','public')));

//----------------routing-------------------------------
app.use('/testerror', require('./routes/testerror.route.js'))
//----------------error handler-------------------------
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
