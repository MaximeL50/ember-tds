import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return {
      nom:null,
      prenom:null,
      email:null
    };
  },
  actions:{
    addContact(contact){
      let ligne=this.store.createRecord('contact',{
        nom: contact.nom,
        prenom: contact.prenom,
        email:contact.email
      })
      ligne.save().then(
        ()=>{this.transitionTo('contacts');}
      );
    },
    }
});
