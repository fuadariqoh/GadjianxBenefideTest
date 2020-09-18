const express = require("express");
const { employeeControllers } = require("../controllers");
const router = express.Router();

router.get("/employees", employeeControllers.getEmployee);
router.get("/employees/:id", employeeControllers.getEmployeeById);
router.post("/employees", employeeControllers.addEmployee);
router.put("/employees/:id", employeeControllers.editEmployee);
router.delete("/employees/:id", employeeControllers.deleteEmployee);
module.exports = router;
