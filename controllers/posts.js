import errorRes from '../helpers/errorHandler.js';
import successHandler from '../helpers/success.js';
import posts from "../postsModel.js";

export const post= async (req, res) => {
  const { title, content } = req.body;
  try {
    var datev1,datev2,datev3,datev4,datev5,datev6,datev7;
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var d = new Date();
                datev1=d.getFullYear();
                datev2=months[d.getMonth()];
                datev3=d.getDate();
                datev4=d.getHours();
                datev5=d.getMinutes();
                datev6=d.getSeconds();
                datev7=datev1+" "+datev2+" "+datev3+" "+datev4+":"+datev5+":"+datev6;
    const createdposts = await posts.create({
      title:title,
      content:content,
      createdAt:datev7,
    });
    successHandler(res, 201, 'new post created successfully', createdposts);
  } catch (error) {
    console.log(error);
    return errorRes(res, 500, 'Failed to create a post', error);
  }
};

export const findposts = async (req, res) => {
  try {
    const usersposts = await posts.find();
    res.status(200).json({
      message: "Retrivel post successfully",
      posts: usersposts,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "failed to find posts",
    });
  }
};

export const deleteposts = async (req, res) => {
  try {
    const deleteposts = await posts.findOneAndDelete({ _id: req.params.postId });
    res.status(200).json({
      success: "Deleted post successfully",
      user: deleteposts,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "failed to delete post",
    });
  }
};

export const updateposts = async (req, res) => {
  try {
    const updatedposts = await posts.findOneAndUpdate(
      { _id: req.params.postId },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({
      message: "Update successfully",
      post: updatedposts,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "failed to update posts",
    });
  }
};