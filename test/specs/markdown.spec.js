'use strict';

describe('directive: bnoMarkdown', function() {
  var $compile, $rootScope, $httpBackend;

  beforeEach(module('bno.markdown'));

  // instantiate service
  beforeEach(inject(injectCallback));

  function injectCallback(_$compile_, _$rootScope_, _$httpBackend_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;

    $httpBackend.whenGET().respond('*hi*');
  }

  //////////////////////////////////////////////////////////////////////////////

  it('should work as an element', function() {
    var element = angular.element('<bno-markdown load="README.md"></bno-markdown>');
    $compile(element)($rootScope);

    $rootScope.$digest();
    $httpBackend.flush();

    expect(element.html().trim()).toEqual('<p><em>hi</em></p>');
  });

  it('should work as an attribute', function () {
    var element = angular.element('<div bno-markdown="README.md"></div>');
    $compile(element)($rootScope);

    $rootScope.$digest();
    $httpBackend.flush();

    expect(element.html().trim()).toEqual('<p><em>hi</em></p>');
  });

});
