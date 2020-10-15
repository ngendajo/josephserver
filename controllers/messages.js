import messages from "../messagesModel.js";

export const register = async (req, res) => {
  try {
    const createdmessages = await messages.create({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
      likes: req.body.likes,
      subscribes: req.body.subscribes,
    });
    res.status(201).json({
      success: true,
      message: createdmessages,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "failed to insert a message",
    });
  }
};

export const findmessages = async (req, res) => {
  try {
    const usersmessages = await messages.find();
    res.status(200).json({
      success: true,
      message: usersmessages,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "failed to find messages",
    });
  }
};

export const deletemessages = async (req, res) => {
  try {
    const deletemessages = await messages.findOneAndDelete({ _id: req.params.userId });
    res.status(200).json({
      success: "Deleted message successfully",
      user: deletemessages,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "failed to delete message",
    });
  }
};

export const updatemessages = async (req, res) => {
  try {
    const updatedmessages = await messages.findOneAndUpdate(
      { _id: req.params.userId },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({
      success: true,
      user: updatedmessages,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "failed to update message",
    });
  }
};