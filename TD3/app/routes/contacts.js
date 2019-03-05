import Route from '@ember/routing/route';
import {computed, get} from '@ember/object';
import EmberObject from '@ember/object';


const Contact  = EmberObject.extend({
  datas : null,
  contacts : computed('datas@each.isDeleted', function(){
    return this.datas.filter(contact=>!this.deletds.include(get(contact, "nom")));
  }),
  deletds : null,
  deletedsCount : 0
});

export default Route.extend({
  model() {
    return Contact.create({
      datas: this.store.findAll('contact'),
      deletds: []
    });
  },
  actions:{
    delete(contact){
      contact.deleteRecord();
    }
  }
});
