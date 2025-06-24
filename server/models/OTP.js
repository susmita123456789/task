




const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const mailSender = require("../utils/mailSender"); // make sure this exists
const emailTemplate = require("../mail/templates/emailVerificationTemplate"); // your template

const OTP = sequelize.define("OTP", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  otp: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

// ✅ Sequelize Hook: after OTP is created
OTP.afterCreate(async (otpInstance, options) => {
  try {
    const response = await mailSender(
      otpInstance.email,
      "Verification Email",
      emailTemplate(otpInstance.otp)
    );
    console.log("✅ Email sent:", response.response);
  } catch (error) {
    console.error("❌ Failed to send OTP email:", error);
    // Optional: log this somewhere or notify admin
  }
});

module.exports = OTP;



// // Define a function to send emails
// async function sendVerificationEmail(email, otp) {
// 	// Create a transporter to send emails

// 	// Define the email options

// 	// Send the email
// 	try {
// 		const mailResponse = await mailSender(
// 			email,
// 			"Verification Email",
// 			emailTemplate(otp)
// 		);
// 		console.log("Email sent successfully: ", mailResponse.response);
// 	} catch (error) {
// 		console.log("Error occurred while sending email: ", error);
// 		throw error;
// 	}
// }

// // Define a post-save hook to send email after the document has been saved
// OTPSchema.pre("save", async function (next) {
// 	console.log("New document saved to database");

// 	// Only send an email when a new document is created
// 	if (this.isNew) {
// 		await sendVerificationEmail(this.email, this.otp);
// 	}
// 	next();
// });

// const OTP = mongoose.model("OTP", OTPSchema);

// module.exports = OTP;