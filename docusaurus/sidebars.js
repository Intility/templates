module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'introduction',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/prerequisites',
        'getting-started/installation',
        'getting-started/create-react-app',
      ],
    },
    {
      type: 'category',
      label: 'Code',
      items: [
        'code/overview',
        'code/bifrost',
        'code/routing',
        'code/recommended-packages',
      ],
    },
    {
      type: 'category',
      label: 'Setup',
      items: [
        'setup/gitlab',
        'setup/authentication',
        'setup/gitlab-ci',
        'setup/sonarqube',
        'setup/sentry',
        'setup/deploy',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: [
        'advanced/adfs',
        'advanced/publish-image',
        'advanced/deploy-azure',
        'advanced/deploy-zone1',
      ],
    },
  ],
};
