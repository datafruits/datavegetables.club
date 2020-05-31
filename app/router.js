import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('vol01');
  this.route('datazone');
  this.route('dieing');
  this.route('memories-of-onsen');
  this.route('no-talk');
  this.route('world-wide-wow');
  this.route('kindofadirtychineserestaurant');
  this.route('timestrangers');
  this.route('manga-relay');
});
