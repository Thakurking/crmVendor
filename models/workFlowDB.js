/*******************MODULES*******************/
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
/*********************************************/

//#region Work Flow Schema
const workFlowSchema = new Schema(
  {
    name: {
      type: String,
    },
    status: {
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
  },
  {
    timestamps: true,
  }
);
//#endregion

module.exports = mongoose.model("workFlow", workFlowSchema);
