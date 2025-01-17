// DEPENDENCIES
const stages = require("express").Router();
const db = require("../models");
const { Stage } = db;
const { Op } = require("sequelize");

// FIND ALL StageS
stages.get("/", async (req, res) => {
  try {
    const foundStages = await Stage.findAll({
      order: [["available_start_time", "ASC"]],
      where: {
        name: { [Op.like]: `%${req.query.name ? req.query.name : ""}%` },
      },
    });
    res.status(200).json(foundStages);
  } catch (error) {
    res.status(500).json(error);
  }
});

// FIND A SPECIFIC Stage
stages.get("/:stage_name", async (req, res) => {
  try {
    const foundStage = await Stage.findOne({
      where: { Stage_id: req.params.id },
      include: {
        model: Event,
        as: "events",
        through: { attributes: [] },
      },
      order: [[{ model: Event, as: "events" }, "date", "ASC"]],
    });
    res.status(200).json(foundStage);
  } catch (error) {
    res.status(500).json(error);
  }
});

// CREATE A Stage
stages.post("/", async (req, res) => {
  try {
    const newStage = await Stage.create(req.body);
    res.status(200).json({
      message: "Successfully inserted a new Stage",
      data: newStage,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE A Stage
stages.put("/:id", async (req, res) => {
  try {
    const updatedStages = await Stage.update(req.body, {
      where: {
        Stage_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Successfully updated ${updatedStages} Stage(s)`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE A Stage
stages.delete("/:id", async (req, res) => {
  try {
    const deletedStages = await Stage.destroy({
      where: {
        Stage_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Successfully deleted ${deletedStages} Stage(s)`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// EXPORT
module.exports = stages;
