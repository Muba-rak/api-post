const router = require("express").Router();

const {
  getAllStories,
  getAStory,
  getAllUserStories,
  getAUserstory,
  createStory,
  editStory,
  deleteStory,
} = require("../controllers/storyController");

router.get("/all", getAllStories);
router.get("/all/:storyId", getAStory);

router.route("/story").get(getAllUserStories).post(createStory);
router
  .route("/story/:storyId")
  .get(getAUserstory)
  .patch(editStory)
  .delete(deleteStory);

module.exports = router;
