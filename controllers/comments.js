import comments from "../commentsModels.js";

export const registerComments = async (req, res) => {
  try {
    const createdComments = await comments.create({
      
      comment: req.body.comment,
    });
    res.status(201).json({
      success: true,
      message: createdComments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "failed to insert a comment",
    });
  }
};

export const findComments = async (req, res) => {
  try {
    const usersComments = await comments.find();
    res.status(200).json({
      success: true,
      message: usersComments,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "failed to find Comments",
    });
  }
};

export const deleteComments = async (req, res) => {
  try {
    const deleteComments = await comments.findOneAndDelete({ _id: req.params.userId });
    res.status(200).json({
      success: "Deleted comment successfully",
      user: deleteComments,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "failed to delete Comments",
    });
  }
};
