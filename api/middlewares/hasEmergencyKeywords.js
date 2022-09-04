const hasEmergencyKeywords = async (req, res, next) => {
  const isUpdated = req.isUpdated;
  if (isUpdated) {
    const emergencyAlertText = req.recentTweet.text;
    const keywords = ['지연', '안내', '참고'];
    const includesKeyword = keywords.some(item =>
      emergencyAlertText.includes(item),
    );
    req.includesKeyword = includesKeyword;
    next();
  } else {
    req.includesKeyword = false;
    next();
  }
};

export default hasEmergencyKeywords;
