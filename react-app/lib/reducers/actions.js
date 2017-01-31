// action creators

module.exports.actionSetCompetition = competition => ({
  type: 'SET_COMPETITION',
  competition: competition
});

module.exports.actionSetTabs = key => ({
  type: 'SET_TABS',
  tab: key
});