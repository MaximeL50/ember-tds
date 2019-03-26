import Route from '@ember/routing/route';
import EmberObject,{get,set} from '@ember/object';

export default Route.extend({
  templateName:'developers/remove',
  afterModel( model){
    let copy = EmberObject.create(model.toJSON());
    set(model,'copy', copy);
    return model;
  },
    actions:{
      delete(dev){
          dev.destroyRecord().then(this.transitionTo('developers'));
      }
    }
});
