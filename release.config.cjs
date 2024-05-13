/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  branches: ['develop'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/gitlab',
    '@semantic-release/npm',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
}
