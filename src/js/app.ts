import {Injectable} from 'angular2/angular2';
import {UpgradeAdapter} from 'angular2/upgrade';

let upgradeAdapter = new UpgradeAdapter();

// Angular 2

@Injectable()
class MyService {
  getValue() { return 'lol'; }
}
upgradeAdapter.addProvider(MyService);

// Angular 1

declare var angular:any;

angular.module('myApp', [])
  .controller('MyCtrl', ['myService', function(myService) {
    this.value = myService.getValue();
  }])
  .factory('myService', upgradeAdapter.downgradeNg2Provider(MyService));


// Bootstrap
upgradeAdapter.bootstrap(document.body, ['myApp']);
