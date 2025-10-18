const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  roots: ['<rootDir>/tests'], // テストディレクトリ指定
  testMatch: ['**/*.test.ts'], // テストファイルのパターン
  transform: {
    ...tsJestTransformCfg,
  },
};