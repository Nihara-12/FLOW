const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    role: {
      type: String,
      enum: ["citizen", "admin"],
      default: "citizen",
    },

    language: {
      type: String,
      enum: ["English", "Tamil", "Hindi"],
      default: "English",
    },

    accessibilityPreferences: {
      highContrast: {
        type: Boolean,
        default: false,
      },

      reducedMotion: {
        type: Boolean,
        default: false,
      },

      largeText: {
        type: Boolean,
        default: false,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);