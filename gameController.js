const Farm = require('../models/farm');

exports.plantCrop = async (req, res) => {
  const { userId, cropType } = req.body;
  try {
    const farm = await Farm.findOne({ userId });
    farm.crops.push({ type: cropType, plantedAt: new Date() });
    await farm.save();
    res.status(200).json({ message: 'Crop planted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.harvestCrop = async (req, res) => {
  const { userId } = req.body;
  try {
    const farm = await Farm.findOne({ userId });
    const harvestedCrops = farm.crops.filter(crop => new Date() - crop.plantedAt >= crop.growthTime);
    farm.crops = farm.crops.filter(crop => !harvestedCrops.includes(crop));
    await farm.save();
    res.status(200).json({ harvestedCrops });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add this missing function
exports.getFarm = async (req, res) => {
  const { userId } = req.query; // Get userId from query params
  try {
    const farm = await Farm.findOne({ userId });
    res.status(200).json(farm);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};