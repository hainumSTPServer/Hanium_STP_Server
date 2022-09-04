import library from '../../library/index.js';

const manufactureEmergencyAlertText = async (req, res, next) => {
  const includesKeyword = req.includesKeyword;
  const emergencyAlertText = req.recentTweet.text;
  if (includesKeyword) {
    req.emergencyAlertText = library.removeUrl(emergencyAlertText);
  } else {
    req.emergencyAlertText = '';
    req.isUpdated = false;
  }
  next();
};

export default manufactureEmergencyAlertText;
