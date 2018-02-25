export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
    },
    {
      name: 'Rule Authoring',
      url: '/ruleAuthoring',
      children: [
        {
          name: 'Add New Rule',
          url: '/ruleAuthoring/addNewRule',
        },
        {
          name: 'Update Existing Rule',
          url: '/ruleAuthoring/updateExistingRule',
        }
      ]
    },
    {
      name: 'Administration',
      url: '/administration',
    }
  ]
};
