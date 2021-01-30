const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

module.exports = mongoose.model("workFlow", workFlowSchema);
