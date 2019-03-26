import Route from '@ember/routing/route';
import EmberObject,{get,set} from '@ember/object';

export default Route.extend({
    model(){
        return{copy:{},
        devs : this.store.findAll('developers')
      };
    },

    actions:{
        save(model){
          //this.get('store');
          let copy=EmberObject.create(model.copy);
          if(copy.name == null||copy.descriptif==null||copy.owner==null||copy.startDate==null||copy.dueDate==null){
            alert('Veuillez remplir les champs.');
          }
          else {
            let dev = this.store.createRecord('project', copy);
            dev.save().then(this.transitionTo('projects'));
          }
      }
  }
});
