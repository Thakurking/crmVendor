/***********************MODULES***********************/
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
/*****************************************************/

/**********************DATABASE***********************/
const workFlow = require("../models/workFlowDB");
const Logs = require("../models/logs");
/*****************************************************/

//#region Add Work Flow
router.post("/addWorkFlow", async (req, res) => {
  const isWorkExist = await workFlow.findOne({ name: req.body.name });
  if (isWorkExist) {
    const logs = {};
    const filter = {
      name: req.body.name,
    };
    logs.workFlowName = req.body.name;
    const update = {
      level: req.body.level,
    };
    logs.level = req.body.level;
    let doc = await workFlow.findOneAndUpdate(filter, update, {
      new: true,
    });
    let saveLogs = await Logs.create(logs);
    console.log(saveLogs);
    console.log(saveLogs);
    if (doc) {
      for (const m in doc.level) {
        for (const n in doc.level[m].approvers) {
          doc.level[m].approvers[n].workFlowStatus =
            doc.level[m].approvers[n].approvalAction == "approved"
              ? "Active"
              : "Terminated";
        }
      }
      if (await workFlow.findOneAndUpdate(filter, doc)) {
        console.log(doc);
      }
    }
  } else {
    console.log(req.body);
    let WorkFlowDB = new workFlow({
      name: req.body.name,
      status: null,
      level: req.body.level,
    });
    const saveWorkFlow = await WorkFlowDB.save();
    console.log(saveWorkFlow);
  }
});
//#endregion

//#region  Get Work Flow Status
router.get("/getWorkFlowStatus", async (req, res) => {
  const workFlowName = req.query.workFlowName;
  const isWorkExist = await workFlow.findOne({ name: workFlowName });
  if (isWorkExist) {
    for (const m in isWorkExist.level) {
      for (const n in isWorkExist.level[m].approvers) {
        if (isWorkExist.level[m].approvers[n].workFlowStatus == "Terminated") {
          let update = {
            status: "Terminated",
          };
          let saveStatus = await workFlow.findOneAndUpdate(
            workFlowName,
            update
          );
          if (saveStatus) {
            console.log(saveStatus);
            return;
          }
        }
      }
    }
    let update = {
      status: "Executed",
    };
    let saveStatus = await workFlow.findOneAndUpdate(workFlowName, update);
    console.log(saveStatus);
    return;
  }
});
//#endregion

module.exports = router;
