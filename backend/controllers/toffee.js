const Toffee = require("../models/Toffee");
exports.deleteToffee = async (req, resp) => {
  const id = req.params.id;
  try {
    const biki_hui_toffee = await Toffee.findByPk(id);
    biki_hui_toffee.destroy();
    resp.status(200).send("bik gayi toffeee");
  } catch (error) {
    resp.status(404).send("things look dark!!");
  }
};

exports.getToffees = async (req, resp) => {
  try {
    const res = await Toffee.findAll();
    resp.status(200).json(res);
  } catch (error) {
    resp.status(404).json({ message: "no data found" });
  }
};

exports.postToffee = async (req, resp) => {
  const { title, about, quant } = req.body;
  try {
    var res = await Toffee.create({
      title: title,
      about: about,
      quant: quant,
    });
    resp.status(200).send(res);
  } catch (error) {
    resp.status(404).send(error);
  }
};
exports.reduceCount = async (req, resp) => {
  const id = req.params.id;
  const sold = req.body.sold;
  try {
    const elem = await Toffee.findByPk(id);
    if(elem.quant<=0){throw new Error('ye kya mazak hai ')}
    elem.quant = elem.quant - sold;
    elem.save();
    resp.status(200).send("done");
  } catch (error) {
    resp.status(404).send(error.message);
  }
};
