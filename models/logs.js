const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

module.exports = mongoose.model("logs", logsSchema);
