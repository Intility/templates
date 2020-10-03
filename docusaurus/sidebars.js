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
        'getting-started/installation',
        'getting-started/project-overview',
        'getting-started/included-dependencies',
        'getting-started/recommended-packages',
      ],
    },
    {
      type: 'category',
      label: 'Configuration',
      items: [
        'configuration/gitlab',
        'configuration/authentication',
        'configuration/environment-variables',
        'configuration/gitlab-ci',
        'configuration/sonarqube',
        'configuration/sentry',
        'configuration/deploy',
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
