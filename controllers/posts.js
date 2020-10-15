import posts from "../postsModel.js";

export const registerposts = async (req, res) => {
  try {
    const createdposts = await posts.create({
      title: req.body.title,
      content: req.body.content,
    });
    res.status(201).json({
      success: true,
      message: createdposts,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "failed to insert a post",
    });
  }
};

export const findposts = async (req, res) => {
  try {
    const usersposts = await posts.find();
    res.status(200).json({
      success: true,
      message: usersposts,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "failed to find posts",
    });
  }
};

export const deleteposts = async (req, res) => {
  try {
    const deleteposts = await posts.findOneAndDelete({ _id: req.params.userId });
    res.status(200).json({
      success: "Deleted post successfully",
      user: deleteposts,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "failed to delete posts",
    });
  }
};

export const updateposts = async (req, res) => {
  try {
    const updatedposts = await posts.findOneAndUpdate(
      { _id: req.params.userId },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({
      success: true,
      user: updatedposts,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "failed to update posts",
    });
  }
};