﻿var app = angular.module('app', ['ngResource']);

app.run(function ($rootScope) {
    $rootScope.pageTitle = 'Demo App...';
});