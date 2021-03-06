import DS from 'ember-data';

export default DS.Model.extend({
  slno: DS.attr('number'),
  payroll: DS.attr('string'),
  name: DS.attr('string'),
  department: DS.attr('string'),
  workcontact: DS.attr('string'),
  personalcontact: DS.attr('string'),
  tools: DS.hasMany('tool' ,{embedded: 'always', async:true}),
});
