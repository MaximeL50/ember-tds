import Component from '@ember/component';

import Ember from 'ember';

export default Component.extend({
  tagName: 'select',
  classNames: ['form-control'],
  selectedIds:[],
  attributeBindings: ['multiple','size'],
  multiple: true,
  size: 10,
  selectedElements: Ember.computed('selectedIds.[]', function() {
    return this.get('selectedIds').map((id) => {
      return this.get('elements').findBy('id', id);
    });
  }),
  change(event){
    const selectedIds = Ember.$(event.target).val();
    this.set('selectedIds', selectedIds || []);
  },
  doubleClick(event){
    const selected = Ember.$(event.target).val();
    this.sendAction('dblClick',selected,this.get('id'));
  }
});
