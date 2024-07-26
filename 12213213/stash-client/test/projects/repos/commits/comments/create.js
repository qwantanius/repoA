"use strict";

// Third Party
const defaults = require("lodash/defaults");
const include = require("include")(__dirname);

// Project
const stash = include("index"); // Normally: require("stash-client");

// Test
const stashConfig = include("test/config");
const config = defaults({
  limit: 100
}, stashConfig);
const projectKey = "TEST";
const repositorySlug = "test-repo";
const commitId = "200528952f87fd1e96cdbe98e83432bde857daf1";
const params = {};
const values = {
  text: "Test comment"
};

// jscs:disable jsDoc
stash(config).api().projects().repos(projectKey).commits(repositorySlug).comments(commitId).create(params, values)
  .then(response => console.log(response.body))
  .catch(console.error);
