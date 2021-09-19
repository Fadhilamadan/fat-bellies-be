const response = require('../helpers/response');
const { Branch, Buffet } = require('../models');

exports.buffetList = [
  async (req, res) => {
    try {
      const buffetList = await Buffet.findAll({
        include: [
          {
            model: Branch,
          },
        ],
      });

      return response.successResponse(res, buffetList);
    } catch (err) {
      return response.errorResponse(res, err);
    }
  },
];

exports.buffetDetail = [
  async (req, res) => {
    try {
      const buffetDetail = await Buffet.findByPk(req.params.id, {
        include: [
          {
            model: Branch,
          },
        ],
      });

      return response.successResponse(res, buffetDetail);
    } catch (err) {
      return response.errorResponse(res, err);
    }
  },
];

exports.buffetStore = [
  async (req, res) => {
    try {
      const {
        branch_id,
        plan_name,
        max_capacity,
        on_demand,
        price,
        day,
        start_time,
        end_time,
      } = req.body;

      const buffetStore = await Buffet.create({
        branch_id,
        plan_name,
        max_capacity,
        on_demand,
        price,
        day,
        start_time,
        end_time,
      });

      return response.successResponse(res, buffetStore);
    } catch (err) {
      return response.errorResponse(res, err);
    }
  },
];

exports.buffetUpdate = [
  async (req, res) => {
    try {
      const {
        branch_id,
        plan_name,
        max_capacity,
        on_demand,
        price,
        day,
        start_time,
        end_time,
      } = req.body;

      const buffetUpdate = await Buffet.update(
        {
          branch_id,
          plan_name,
          max_capacity,
          on_demand,
          price,
          day,
          start_time,
          end_time,
        },
        {
          where: {
            id: req.params.id,
          },
        },
      );

      return response.successResponse(res, buffetUpdate);
    } catch (err) {
      return response.errorResponse(res, err);
    }
  },
];

exports.buffetDelete = [
  async (req, res) => {
    try {
      const buffetDelete = await Buffet.destroy({
        where: {
          id: req.params.id,
        },
      });

      return response.successResponse(res, buffetDelete);
    } catch (err) {
      return response.errorResponse(res, err);
    }
  },
];
