const response = require('../helpers/response');
const { Branch, Buffet } = require('../models');

const { Op } = require('sequelize');

exports.branchList = [
  async (req, res) => {
    try {
      let whereBranch = {};
      let whereBuffet = {};

      for (let key in req.query) {
        switch (key) {
          case 'name':
            whereBranch.name = {
              [Op.iRegexp]: req.query[key],
            };
            break;
          case 'opening_hours':
            whereBuffet.start_time = {
              [Op.lte]: req.query[key],
            };
            whereBuffet.end_time = {
              [Op.gte]: req.query[key],
            };
            break;
          case 'min_price':
          case 'max_price':
            if (req.query['min_price'] && req.query['max_price']) {
              whereBuffet.price = {
                [Op.gte]: req.query['min_price'],
                [Op.lte]: req.query['max_price'],
              };
            } else {
              whereBuffet.price = {
                [Op.or]: {
                  [Op.gte]: req.query['min_price'],
                  [Op.lte]: req.query['max_price'],
                },
              };
            }
            break;
          default:
            break;
        }
      }

      const branchList = await Branch.findAll({
        order: [
          ['id', 'DESC'],
          [Buffet, 'price'],
        ],
        where: Object.keys(whereBranch).length !== 0 ? whereBranch : null,
        include: [
          {
            where: Object.keys(whereBuffet).length !== 0 ? whereBuffet : null,
            model: Buffet,
          },
        ],
      });

      return response.successResponse(res, branchList);
    } catch (err) {
      return response.errorResponse(res, err);
    }
  },
];

exports.branchDetail = [
  async (req, res) => {
    try {
      const branchDetail = await Branch.findByPk(req.params.id);

      return response.successResponse(res, branchDetail);
    } catch (err) {
      return response.errorResponse(res, err);
    }
  },
];

exports.branchStore = [
  async (req, res) => {
    try {
      const { name, latitude, longitude, opening_hours } = req.body;

      const branchStore = await Branch.create({
        name,
        latitude,
        longitude,
        opening_hours,
      });

      return response.successResponse(res, branchStore);
    } catch (err) {
      return response.errorResponse(res, err);
    }
  },
];

exports.branchUpdate = [
  async (req, res) => {
    try {
      const { name, latitude, longitude, opening_hours } = req.body;

      const branchUpdate = await Branch.update(
        {
          name,
          latitude,
          longitude,
          opening_hours,
        },
        {
          where: {
            id: req.params.id,
          },
        },
      );

      return response.successResponse(res, branchUpdate);
    } catch (err) {
      return response.errorResponse(res, err);
    }
  },
];

exports.branchDelete = [
  async (req, res) => {
    try {
      const branchDelete = await Branch.destroy({
        where: {
          id: req.params.id,
        },
      });

      return response.successResponse(res, branchDelete);
    } catch (err) {
      return response.errorResponse(res, err);
    }
  },
];
