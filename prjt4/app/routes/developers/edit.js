import Route from '@ember/routing/route';
import EmberObject from '@ember/object';  

export default Route.extend({
    templateName: 'developers/new',
    afterModel(model){
        model=EmberObject.create({copy:{identity:'aaa'}});
        return model;
    }
});
