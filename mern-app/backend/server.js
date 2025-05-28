const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Routes
app.get("/", (req, res) => {
  res.send("API Running...");
});

// Users route
const usersRouter = require("./routes/users");
app.use("/api/users", usersRouter);

// Employee Benefits route
const employeeBenefitsRouter = require("./routes/employeeBenefits");
app.use("/api/employee-benefits", employeeBenefitsRouter);

// Employee Equipment route
const employeeEquipmentsRouter = require("./routes/employeeEquipments");
app.use("/api/employee-equipments", employeeEquipmentsRouter);

// Employee Leaves route
const employeeLeavesRouter = require("./routes/employeeLeaves");
app.use("/api/employee-leaves", employeeLeavesRouter);

// Employee Allowance route
 const employeeAllowanceRouter = require("./routes/employeeAllowances");
 app.use("/api/employee-allowance", employeeAllowanceRouter);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
