const e = require("express");
const { db } = require("../connection");

module.exports = {
  getEmployee: (req, res) => {
    let sql = "SELECT * FROM employees";
    db.query(sql, (error, result) => {
      if (error) res.status(500).send(error);
      res.status(200).send(result);
    });
  },
  getEmployeeById: (req, res) => {
    const { id } = req.params;
    let sql = `SELECT * FROM EMPLOYEES WHERE id=${id}`;
    db.query(sql, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },
  addEmployee: (req, res) => {
    console.log(req.body);
    let sql = `INSERT INTO employees SET ?`;
    db.query(sql, req.body, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(201).send(result);
    });
  },
  editEmployee: (req, res) => {
    let { id } = req.params;
    let sql = `SELECT * FROM employees WHERE id=${id}`;
    db.query(sql, (err, result) => {
      if (result.length) {
        let sql = `UPDATE employees SET ? where id=${id}`;
        db.query(sql, req.body, (err1, result1) => {
          if (err) res.status(500).send(err1);
          res.status(200).send(result1);
        });
      } else {
        res.status(500).send({ notFound: "id employee tidak ditemukan" });
      }
    });
  },
  deleteEmployee: (req, res) => {
    let { id } = req.params;
    let sql = `SELECT * FROM employees WHERE id=${id}`;
    db.query(sql, (err, result) => {
      if (result.length) {
        let sql = `DELETE from employees where id=${id}`;
        db.query(sql, (err, result) => {
          if (err) res.status(500).send(err);
          res.status(204).send({ isDeleteSuccess: true });
        });
      } else {
        res
          .status(500)
          .send({
            notFound: "id employee yang ingin didelete tidak ditemukan ",
          });
      }
    });
  },
};
