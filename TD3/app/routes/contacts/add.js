import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.store.createRecord('contact', {
      nom:"Pas de nom" /*pas obligatoire */
    });
  },
  actions: {
    addContact(contact){
      contact.save().then(
        ()=>{
          this.transitionTo('contacts')}
      );
    }
  }
});
