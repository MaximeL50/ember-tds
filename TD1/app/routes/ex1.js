import Route from '@ember/routing/route';
import  EmberObject, { computed } from '@ember/object';

const Note=EmberObject.extend({
    content: '',
    MAX: 100,
    info : null,
    size: computed('content',function () {
      this.set('info',null);
      return this.MAX-this.content.length;
    }),
  style : computed('content',function () {
    let size=this.get('size');
    if(size<20){
      return 'danger';
    }else if(size<50){
      return 'warning';
    }
    else{
      return 'info';
    }
  })
  }
);
export default Route.extend({
  model(){
    return Note.create();
  }
});
