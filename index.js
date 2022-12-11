// const express = require("express");
// const dotenv = require("dotenv").config();
// const port = process.env.PORT || 5000;

// const app = express();

// app.listen(port, () => console.log(`server started on port ${port}`));

const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
// const port = process.env.PORT || 5000;
const port = 3000;

const app = express();

//enable body parse

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/openai", require("./routes/openairoutes"));

// Enable body parser
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // Set static folder
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, () => console.log(`Server started on port ${port}`));
