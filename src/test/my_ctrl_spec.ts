import {beforeEach, describe, expect, it} from 'angular2/testing';
import '../js/app';

declare var angular:any;

describe('MyCtrl', () => {

  // How to bootstrap so that ng2 dependencies are present?
  
  beforeEach(angular.mock.module('myApp'));

  it('shows value', angular.mock.inject(($controller, $rootScope) => {
    let ctrl = $controller('MyCtrl', {$scope: $rootScope.$new()});
    expect(ctrl.value).toBe('lol');
  }));

});
