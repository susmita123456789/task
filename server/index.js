
// // // require("./models/User");
// // // const express = require("express");
// // // const app = express();
// // // const userRoutes = require("./routes/User");
// // // const taskRoutes = require("./routes/taskroutes");

// // // const { connectDB,sequelize } = require("./config/database"); // make sure sequelize is export


// // // // const database = require("./config/database");
// // // // const { connectDB } = require("./config/database");
// // // const cookieParser = require("cookie-parser");
// // // const cors = require("cors");
// // // const dotenv = require("dotenv");

// // // dotenv.config();
// // // const PORT = process.env.PORT || 5000;

// // // //database connect
// // // // database.connect();
// // // connectDB()
// // // //middlewares


// // // app.use(express.json());
// // // app.use(cookieParser());
// // // app.use(
// // // 	cors({
// // // 		origin:"http://localhost:3000",
// // // 		credentials:true,
// // // 	})
// // // )



// // // //routes
// // // app.use("/api", userRoutes);
// // // app.use("/api", taskRoutes);



// // // //def route

// // // app.get("/", (req, res) => {
// // // 	return res.json({
// // // 		success:true,
// // // 		message:'Your server is up and running....'
// // // 	});
// // // });

// // // app.listen(PORT, () => {
// // // 	console.log(`App is running at ${PORT}`)
// // // })




// // // const express = require("express");
// // // const app = express();
// // // const dotenv = require("dotenv");
// // // const cookieParser = require("cookie-parser");
// // // const cors = require("cors");

// // // const userRoutes = require("./routes/User");
// // // const taskRoutes = require("./routes/taskroutes");
// // // const { connectDB, sequelize } = require("./config/database");

// // // dotenv.config();
// // // const PORT = process.env.PORT || 5000;

// // // const startServer = async () => {
// // //   try {
// // //     // 1. ✅ Connect to DB
// // //     await connectDB();

// // //     // 2. ✅ Register models
// // //     require("./models/User");
// // //     require("./models/OTP"); // also required if OTP model exists

// // //     // 3. ✅ Sync all models with DB
// // //     await sequelize.sync({ alter: true });
// // //     console.log("✅ All models synced with database");

// // //     // 4. ✅ Apply middlewares
// // //     app.use(express.json());
// // //     app.use(cookieParser());
// // //     app.use(
// // //       cors({
// // //         origin: "http://localhost:3000",
// // //         credentials: true,
// // //       })
// // //     );

// // //     // 5. ✅ Register routes
// // //     app.use("/api/v1/auth", userRoutes);
// // //     app.use("/api/v1/tasks", taskRoutes);

// // //     app.get("/", (req, res) => {
// // //       res.json({ success: true, message: "Your server is up and running...." });
// // //     });

// // //     // 6. ✅ Start server
// // //     app.listen(PORT, () => {
// // //       console.log(`🚀 Server running on http://localhost:${PORT}`);
// // //     });
// // //   } //catch (error) {
// // //   //   console.error("❌ Failed to start server:", error.message);
// // //   //   process.exit(1);
// // //   // }
// // // };

// // // startServer();




// // // const express = require("express");
// // // const app = express();
// // // const dotenv = require("dotenv");
// // // const cookieParser = require("cookie-parser");
// // // const cors = require("cors");

// // // const userRoutes = require("./routes/User");
// // // const taskRoutes = require("./routes/taskroutes");
// // // const { connectDB, sequelize } = require("./config/database");

// // // dotenv.config();
// // // const PORT = process.env.PORT || 5000;

// // // const startServer = async () => {
// // //   try {
// // //     // 1. ✅ Connect to DB
// // //     await connectDB();

// // //     // 2. ✅ Register models
// // //     require("./models/User");
// // //     require("./models/OTP"); // if you use OTP model
// // //     require("./models/Task"); // include if Task model is used

// // //     // 3. ✅ Sync all models with DB
// // //     await sequelize.sync({ alter: true });
// // //     console.log("✅ All models synced with database");

// // //     // 4. ✅ Apply middlewares
// // //     app.use(express.json());
// // //     app.use(cookieParser());
// // //     app.use(
// // //       cors({
// // //         origin: "http://localhost:3000",
// // //         credentials: true,
// // //       })
// // //     );

// // //     // 5. ✅ Register routes
// // //     app.use("/api/v1/auth", userRoutes);
// // //     app.use("/api/v1/tasks", taskRoutes);

// // //     // Test route
// // //     app.get("/", (req, res) => {
// // //       res.json({
// // //         success: true,
// // //         message: "Your server is up and running....",
// // //       });
// // //     });

// // //     // 6. ✅ Start server
// // //     app.listen(PORT, () => {
// // //       console.log(`🚀 Server running on http://localhost:${PORT}`);
// // //     });

// // //   }
// // // };

// // // startServer();




// // // const express = require("express");
// // // const app = express();
// // // const dotenv = require("dotenv");
// // // const cookieParser = require("cookie-parser");
// // // const cors = require("cors");

// // // const userRoutes = require("./routes/User");
// // // const taskRoutes = require("./routes/taskroutes");
// // // const { connectDB, sequelize } = require("./controllers/database");

// // // dotenv.config();
// // // const PORT = process.env.PORT || 5000;

// // // // Middleware setup
// // // app.use(express.json());
// // // app.use(cookieParser());
// // // app.use(
// // //   cors({
// // //     origin: "http://localhost:3000",
// // //     credentials: true,
// // //   })
// // // );

// // // // Routes
// // // app.use("/api/v1/auth", userRoutes);
// // // app.use("/api/v1/tasks", taskRoutes);

// // // app.get("/", (req, res) => {
// // //   res.json({
// // //     success: true,
// // //     message: "Your server is up and running....",
// // //   });
// // // });

// // // // Async initialization logic
// // // connectDB()
// // //   .then(() => {
// // //     require("./models/User");
// // //     require("./models/OTP");
// // //     require("./models/Task");

// // //     return sequelize.sync({ alter: true });
// // //   })
// // //   .then(() => {
// // //     console.log("✅ All models synced with database");
// // //     app.listen(PORT, () => {
// // //       console.log(`🚀 Server running on http://localhost:${PORT}`);
// // //     });
// // //   })
// // //   .catch((err) => {
// // //     console.error("❌ Failed to start server:", err.message);
// // //     process.exit(1);
// // //   });






// // // const express = require("express");
// // // const app = express();
// // // const dotenv = require("dotenv");
// // // const cookieParser = require("cookie-parser");
// // // const cors = require("cors");

// // // const userRoutes = require("./routes/User");
// // // const taskRoutes = require("./routes/taskroutes");
// // // const { connectDB, sequelize } = require("./config/database");

// // // dotenv.config();
// // // const PORT = process.env.PORT || 5000;

// // // // Middleware setup
// // // app.use(cors());
// // // app.use(express.json());
// // // app.use(cookieParser());
// // // app.use(
// // //   cors({
// // //     origin: "http://localhost:3000",
// // //     credentials: true,
// // //   })
// // // );

// // // Routes
// // app.use("/api/v1/auth", userRoutes);
// // app.use("/api/v1/tasks", taskRoutes);

// // app.get("/", (req, res) => {
// //   res.json({
// //     success: true,
// //     message: "Your server is up and running....",
// //   });
// // });

// // // Async initialization logic
// // connectDB()
// //   .then(() => {
// //     require("./models/User");
// //     require("./models/OTP");
// //     require("./models/Task");

// //     // Reset DB schema once - WARNING: This deletes all existing data!
// //     return sequelize.sync({ force: true });
// //   })
// //   .then(() => {
// //     console.log("✅ All models synced with database (force: true)");
// //     app.listen(PORT, () => {
// //       console.log(`🚀 Server running on http://localhost:${PORT}`);
// //     });
// //   })
// //   .catch((err) => {
// //     console.error("❌ Failed to start server:", err.message);
// //     process.exit(1);
// //   });




// // // index.js

// // const express = require("express");
// // const dotenv = require("dotenv");
// // const cookieParser = require("cookie-parser");
// // const cors = require("cors");

// // const userRoutes = require("./routes/User");
// // const taskRoutes = require("./routes/taskroutes");
// // const { connectDB, sequelize } = require("./config/database");

// // dotenv.config();

// // const app = express();
// // const PORT = process.env.PORT || 5000;

// // // Connect to database and sync models, then start server
// // connectDB()
// //   .then(async () => {
// //     console.log("✅ Database connected");

// //     // Sync all Sequelize models with database tables
// //     await sequelize.sync({ alter: true }); 
// //     console.log("✅ Database synced");

// //     // CORS middleware - allow frontend origin
// //     app.use(
// //       cors({
// //         origin: "http://localhost:3000",
// //         credentials: true,
// //       })
// //     );

// //     app.use(express.json());
// //     app.use(cookieParser());

// //     // Routes
// //     app.use("/api/v1/user", userRoutes);
// //     app.use("/api/v1/tasks", taskRoutes);

// //     // Start server after DB is ready
// //     app.listen(PORT, () => {
// //       console.log(`🚀 Server running on port ${PORT}`);
// //     });
// //   })
// //   .catch((error) => {
// //     console.error("❌ Failed to connect to database:", error);
// //     process.exit(1);
// //   });



// // // index.js

// // const express = require("express");
// // const dotenv = require("dotenv");
// // const cookieParser = require("cookie-parser");
// // const cors = require("cors");

// // const userRoutes = require("./routes/User");
// // const taskRoutes = require("./routes/taskroutes");
// // const { connectDB, sequelize } = require("./config/database");

// // dotenv.config();

// // const app = express();
// // const PORT = process.env.PORT || 5000;

// // // CORS middleware - allow frontend origin
// // app.use(
// //   cors({
// //     origin: "http://localhost:3000",
// //     credentials: true,
// //   })
// // );

// // app.use(express.json());
// // app.use(cookieParser());

// // // Routes
// // app.use("/api/v1/user", userRoutes);
// // app.use("/api/v1/tasks", taskRoutes);

// // // Connect to DB and then start server
// // connectDB()
// //   .then(async () => {
// //     console.log("✅ Database connected");

// //     // Sync models
// //     await sequelize.sync({ alter: true });
// //     console.log("✅ Database synced");

// //     app.listen(PORT, () => {
// //       console.log(`🚀 Server running on port ${PORT}`);
// //     });
// //   })
// //   .catch((error) => {
// //     console.error("❌ Failed to connect to database:", error);
// //     process.exit(1);
// //   });



// // // index.js
// // const express = require("express");
// // const dotenv = require("dotenv");
// // const cookieParser = require("cookie-parser");
// // const cors = require("cors");

// // const userRoutes = require("./routes/User");
// // const taskRoutes = require("./routes/taskroutes");
// // const { connectDB, sequelize } = require("./config/database");

// // dotenv.config();

// // const app = express();
// // const PORT = process.env.PORT || 5000;

// // /* --------------------------  CORS  -------------------------- */
// // const corsOptions = {
// //   origin: "http://localhost:3000",   // React front-end
// //   credentials: true,                 // allow cookies / auth headers
// // };

// // app.use(cors(corsOptions));          // attach CORS headers
// // app.options("*", cors(corsOptions)); // reply to every pre-flight OPTIONS

// // /* ------------------------  Parsers  ------------------------- */
// // app.use(express.json());
// // app.use(cookieParser());

// // /* -------------------------  Routes  ------------------------- */
// // app.use("/api/v1/user", userRoutes);
// // app.use("/api/v1/tasks", taskRoutes);

// // /* ---------------  DB connection & server start  ------------- */
// // (async () => {
// //   try {
// //     await connectDB();
// //     console.log("✅ Database connected");

// //     await sequelize.sync({ alter: true });  // update tables to match models
// //     console.log("✅ Database synced");

// //     app.listen(PORT, () => {
// //       console.log(`🚀 Server running on port ${PORT}`);
// //     });
// //   } catch (err) {
// //     console.error("❌ Failed to start server:", err);
// //     process.exit(1);
// //   }
// // })();





// // index.js

// // const express = require("express");
// // const dotenv = require("dotenv");
// // const cookieParser = require("cookie-parser");
// // const cors = require("cors");

// // const userRoutes = require("./routes/User");

// // const taskRoutes = require("./routes/taskroutes");
// // const { connectDB, sequelize } = require("./config/database");

// // dotenv.config();

// // const app = express();
// // const PORT = process.env.PORT || 5000;

// // /* --------------------------  CORS CONFIG  -------------------------- */
// // const corsOptions = {
// //   origin: "http://localhost:3000",   // Frontend origin
// //   credentials: true,                 // Allow cookies/auth headers
// // };

// // // Apply CORS before any other middleware or routes
// // app.use(cors(corsOptions));
// // app.options("*", cors(corsOptions)); // Enable preflight for all routes

// // /* ---------------------- BODY & COOKIE PARSERS ---------------------- */
// // app.use(express.json());
// // app.use(cookieParser());

// // /* --------------------------- API ROUTES --------------------------- */
// // app.use("/api/v1/auth", userRoutes);
// // app.use("/api/v1/tasks", taskRoutes);

// // /* --------------------- DB CONNECTION & SERVER --------------------- */
// // const startServer = async () => {
// //   try {
// //     await connectDB();
// //     console.log("✅ Database connected");

// //     await sequelize.sync({ alter: true });
// //     console.log("✅ Sequelize synced with DB");

// //     app.listen(PORT, () => {
// //       console.log(`🚀 Server running at http://localhost:${PORT}`);
// //     });
// //   } catch (err) {
// //     console.error("❌ Server startup failed:", err.message);
// //     process.exit(1);
// //   }
// // };

// // startServer();



// const express = require("express");
// const dotenv = require("dotenv");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");

// const userRoutes = require("./routes/User");
// const taskRoutes = require("./routes/taskroutes");
// const { connectDB, sequelize } = require("./config/database");

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 4000;

// /* --------------------------  CORS CONFIG  -------------------------- */
// const corsOptions = {
//   origin: "http://localhost:3000",   // Frontend origin
//   credentials: true,                 // Allow cookies/auth headers
// };

// // Apply CORS before any other middleware or routes
// app.use(cors(corsOptions));
// app.options("*", cors(corsOptions)); // Enable preflight for all routes

// // Middleware to log the Access-Control-Allow-Origin header for each response
// app.use((req, res, next) => {
//   res.on('finish', () => {
//     console.log('Access-Control-Allow-Origin:', res.getHeader('Access-Control-Allow-Origin'));
//   });
//   next();
// });

// /* ---------------------- BODY & COOKIE PARSERS ---------------------- */
// app.use(express.json());
// app.use(cookieParser());

// /* --------------------------- API ROUTES --------------------------- */
// app.use("/api/v1/auth", userRoutes);
// app.use("/api/v1/tasks", taskRoutes);

// /* --------------------- DB CONNECTION & SERVER --------------------- */
// const startServer = async () => {
//   try {
//     await connectDB();
//     console.log("✅ Database connected");

//     await sequelize.sync({ alter: true });
//     console.log("✅ Sequelize synced with DB");

//     app.listen(PORT, () => {
//       console.log(`🚀 Server running at http://localhost:${PORT}`);
//     });
//   } catch (err) {
//     console.error("❌ Server startup failed:", err.message);
//     process.exit(1);
//   }
// };

// startServer();






const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const userRoutes = require("./routes/User");
const taskRoutes = require("./routes/taskroutes");
const { connectDB, sequelize } = require("./config/database");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

/* --------------------------  CORS CONFIG  -------------------------- */
const allowedOrigins = ["http://localhost:3000", "http://localhost:4000"];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl, Postman)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

// Apply CORS middleware before other middlewares/routes
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

// Middleware to log Access-Control-Allow-Origin header
app.use((req, res, next) => {
  res.on("finish", () => {
    console.log("Access-Control-Allow-Origin:", res.getHeader("Access-Control-Allow-Origin"));
  });
  next();
});

/* ---------------------- BODY & COOKIE PARSERS ---------------------- */
app.use(express.json());
app.use(cookieParser());

/* --------------------------- API ROUTES --------------------------- */
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/tasks", taskRoutes);

/* --------------------- DB CONNECTION & SERVER --------------------- */
const startServer = async () => {
  try {
    await connectDB();
    console.log("✅ Database connected");

    await sequelize.sync({ alter: true });
    console.log("✅ Sequelize synced with DB");

    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Server startup failed:", err.message);
    process.exit(1);
  }
};

startServer();
