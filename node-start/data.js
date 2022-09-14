const data = () => {
  const currentMonth = new Date();
  return currentMonth.getMonth() + 1;
};

module.exports = data;
