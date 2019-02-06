import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
      save(note){
        if(note.get('content')) {
          note.set('info', 'Note sauvegardée !');
        }
      }
    }
});
