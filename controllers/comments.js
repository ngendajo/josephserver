import comments from "../commentsModels.js";
import posts from "../postsModel.js";
import errorRes from '../helpers/errorHandler.js';
import successHandler from '../helpers/success.js';

export const createComment = async (req, res) => {
  const { comment,createdAt } = req.body;
  try {
    if (!comment) errorRes(res, 500, 'Some filed are not field');
    const ocomment = await comments.create({
      comment,
      createdAt,
    });
    const post = await posts.findById(req.params.postId);
    if (!post) errorRes(res, 404, 'no such post found');
    post.comments.push(ocomment._id);
    post.commentsCount += 1;
    await post.save();

    successHandler(res, 201, 'successfully commented', ocomment);
  } catch (error) {
    console.log(error);
    errorRes(res, 500, 'there was error commenting');
  }
};
export const getAllCommentsOnPost = async (req, res) => {
  try {
    const foundPost = await posts.findById({_id:req.params.postId}).populate('comments');
    successHandler(
      res,
      200,
      'successfully fetched all comments',
      foundPost.comments,
    );
  } catch (error) {
    console.log(error);
    errorRes(res, 500, 'there was error fetching all comments');
  }
};

export const like = async (req, res) => {
  try {
    const foundPost = await posts.findById({_id:req.params.postId});
    if (!foundPost) errorRes(res, 404, 'cant find that post');
    foundPost.likes += 1;
    await foundPost.save();
    successHandler(res, 200, 'successfully liked');
  } catch (error) {
    console.log(error);
    errorRes(res, 500, 'there was error while liking');
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
