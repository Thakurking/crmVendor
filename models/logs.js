/******************MODULES******************/
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
/*******************************************/

//#region Logs Schema For Work Flow
const logsSchema = new Schema({
  workFlowName: {
    type: String,
  },
  level: [
    {
      approvers: [
        {
          users: {
            type: String,
          },
          approvalAction: {
            type: String,
          },
          workFlowStatus: {
            type: String,
          },
        },
      ],
      approvalType: {
        type: String,
      },
    },
  ],
});
//#endregion

module.exports = mongoose.model("logs", logsSchema);
