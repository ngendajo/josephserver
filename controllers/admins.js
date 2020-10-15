import admin from "../adminModel.js";

export const registeradmin = async (req, res) => {
  try {
    const createdadmin = await admin.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(201).json({
      success: true,
      message: createdadmin,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "failed to insert a admin",
    });
  }
};

export const findadmin = async (req, res) => {
  try {
    const usersadmin = await admin.find();
    res.status(200).json({
      success: true,
      message: usersadmin,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "failed to find admin",
    });
  }
};

export const deleteadmin = async (req, res) => {
  try {
    const deletemessages = await admin.findOneAndDelete({ _id: req.params.userId });
    res.status(200).json({
      success: "Deleted message successfully",
      user: deleteadmin,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "failed to delete admin",
    });
  }
};

export const updateadmin = async (req, res) => {
  try {
    const updatedadmin = await admin.findOneAndUpdate(
      { _id: req.params.userId },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({
      success: true,
      user: updatedadmin,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "failed to update admin",
    });
  }
};