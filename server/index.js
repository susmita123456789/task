
// require("./models/User");
// const express = require("express");
// const app = express();
// const userRoutes = require("./routes/User");
// const taskRoutes = require("./routes/taskroutes");

// const { connectDB,sequelize } = require("./config/database"); // make sure sequelize is export


// // const database = require("./config/database");
// // const { connectDB } = require("./config/database");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const dotenv = require("dotenv");

// dotenv.config();
// const PORT = process.env.PORT || 5000;

// //database connect
// // database.connect();
// connectDB()
// //middlewares


// app.use(express.json());
// app.use(cookieParser());
// app.use(
// 	cors({
// 		origin:"http://localhost:3000",
// 		credentials:true,
// 	})
// )



// //routes
// app.use("/api", userRoutes);
// app.use("/api", taskRoutes);



// //def route

// app.get("/", (req, res) => {
// 	return res.json({
// 		success:true,
// 		message:'Your server is up and running....'
// 	});
// });

// app.listen(PORT, () => {
// 	console.log(`App is running at ${PORT}`)
// })




// const express = require("express");
// const app = express();
// const dotenv = require("dotenv");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");

// const userRoutes = require("./routes/User");
// const taskRoutes = require("./routes/taskroutes");
// const { connectDB, sequelize } = require("./config/database");

// dotenv.config();
// const PORT = process.env.PORT || 5000;

// const startServer = async () => {
//   try {
//     // 1. ✅ Connect to DB
//     await connectDB();

//     // 2. ✅ Register models
//     require("./models/User");
//     require("./models/OTP"); // also required if OTP model exists

//     // 3. ✅ Sync all models with DB
//     await sequelize.sync({ alter: true });
//     console.log("✅ All models synced with database");

//     // 4. ✅ Apply middlewares
//     app.use(express.json());
//     app.use(cookieParser());
//     app.use(
//       cors({
//         origin: "http://localhost:3000",
//         credentials: true,
//       })
//     );

//     // 5. ✅ Register routes
//     app.use("/api/v1/auth", userRoutes);
//     app.use("/api/v1/tasks", taskRoutes);

//     app.get("/", (req, res) => {
//       res.json({ success: true, message: "Your server is up and running...." });
//     });

//     // 6. ✅ Start server
//     app.listen(PORT, () => {
//       console.log(`🚀 Server running on http://localhost:${PORT}`);
//     });
//   } //catch (error) {
//   //   console.error("❌ Failed to start server:", error.message);
//   //   process.exit(1);
//   // }
// };

// startServer();




// const express = require("express");
// const app = express();
// const dotenv = require("dotenv");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");

// const userRoutes = require("./routes/User");
// const taskRoutes = require("./routes/taskroutes");
// const { connectDB, sequelize } = require("./config/database");

// dotenv.config();
// const PORT = process.env.PORT || 5000;

// const startServer = async () => {
//   try {
//     // 1. ✅ Connect to DB
//     await connectDB();

//     // 2. ✅ Register models
//     require("./models/User");
//     require("./models/OTP"); // if you use OTP model
//     require("./models/Task"); // include if Task model is used

//     // 3. ✅ Sync all models with DB
//     await sequelize.sync({ alter: true });
//     console.log("✅ All models synced with database");

//     // 4. ✅ Apply middlewares
//     app.use(express.json());
//     app.use(cookieParser());
//     app.use(
//       cors({
//         origin: "http://localhost:3000",
//         credentials: true,
//       })
//     );

//     // 5. ✅ Register routes
//     app.use("/api/v1/auth", userRoutes);
//     app.use("/api/v1/tasks", taskRoutes);

//     // Test route
//     app.get("/", (req, res) => {
//       res.json({
//         success: true,
//         message: "Your server is up and running....",
//       });
//     });

//     // 6. ✅ Start server
//     app.listen(PORT, () => {
//       console.log(`🚀 Server running on http://localhost:${PORT}`);
//     });

//   }
// };

// startServer();




// const express = require("express");
// const app = express();
// const dotenv = require("dotenv");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");

// const userRoutes = require("./routes/User");
// const taskRoutes = require("./routes/taskroutes");
// const { connectDB, sequelize } = require("./controllers/database");

// dotenv.config();
// const PORT = process.env.PORT || 5000;

// // Middleware setup
// app.use(express.json());
// app.use(cookieParser());
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   })
// );

// // Routes
// app.use("/api/v1/auth", userRoutes);
// app.use("/api/v1/tasks", taskRoutes);

// app.get("/", (req, res) => {
//   res.json({
//     success: true,
//     message: "Your server is up and running....",
//   });
// });

// // Async initialization logic
// connectDB()
//   .then(() => {
//     require("./models/User");
//     require("./models/OTP");
//     require("./models/Task");

//     return sequelize.sync({ alter: true });
//   })
//   .then(() => {
//     console.log("✅ All models synced with database");
//     app.listen(PORT, () => {
//       console.log(`🚀 Server running on http://localhost:${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("❌ Failed to start server:", err.message);
//     process.exit(1);
//   });






const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const userRoutes = require("./routes/User");
const taskRoutes = require("./routes/taskroutes");
const { connectDB, sequelize } = require("./config/database");

dotenv.config();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Your server is up and running....",
  });
});

// Async initialization logic
connectDB()
  .then(() => {
    require("./models/User");
    require("./models/OTP");
    require("./models/Task");

    // Reset DB schema once - WARNING: This deletes all existing data!
    return sequelize.sync({ force: true });
  })
  .then(() => {
    console.log("✅ All models synced with database (force: true)");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to start server:", err.message);
    process.exit(1);
  });
