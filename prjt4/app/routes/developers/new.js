import Route from '@ember/routing/route';
import EmberObject,{get,set} from '@ember/object';

export default Route.extend({
    model(){
        return{copy:{}
      };
    },

    actions:{
        save(model){
            let copy=model.copy;
            console.log("copy.identity");
            if(copy.identity == null){
              alert('veuillez remplir le champ "Identité".');
            }
            else{
              let dev=this.store.createRecord('developers', Ember.Object.create(copy));
              dev.save().then(this.transitionTo('developers'));
            }
        }
    }
});
