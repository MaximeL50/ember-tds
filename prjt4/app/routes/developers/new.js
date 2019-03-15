import Route from '@ember/routing/route';
import EmbetObject,{get,set} from '@ember/object';

export default Route.extend({
    model(){
        return{copy:{}};
    },

    actions:{
        save(model){
            let copy=model.copy;
            let dev=this.store.createRecord('developer', Ember.Object.create(copy));
            dev.save();
        }
    }
});
