const removeUrl = emergencyAlertText => {
  return emergencyAlertText.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
};
export default removeUrl;
