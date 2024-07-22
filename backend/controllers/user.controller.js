import User from "../models/user.model.js";

export const getUsersSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filterdUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");
    res.status(200).json(filterdUsers);
  } catch (error) {
    console.error("Error in getUsersSidebar", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
