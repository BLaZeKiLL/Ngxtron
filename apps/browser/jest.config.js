module.exports = {
  name: 'browser',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/browser',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
