import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('developers', function() {
    this.route('new');
    this.route('edit', {path:'edit/:developer_id'});
    this.route('remove', {path:'remove/:developer_id'});
  }),
  this.route('projects', function(){
    this.route('new');
    this.route('remove',{path:'remove/:project_id'});
    this.route('edit', {path:'edit/:project_id'});

  })
});

export default Router;
