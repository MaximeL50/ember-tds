import Route from '@ember/routing/route';
import EmberObject, {set} from '@ember/object';

export default Route.extend({
  templateName:'projects/edit',
  afterModel( model){
    let copy = EmberObject.create(model.toJSON());
    set(model,'copy', copy);
    return model;
  },
  actions:{
    save(model){
      model.setProperties(JSON.parse(JSON.stringify(model.copy)));

      model.save().then(this.transitionTo('projects'));
    }
  }
});
