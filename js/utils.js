/*
  General 

  KULeuven/LIBIS (c) 2017
  Mehmet Celik
*/
String.prototype.toCamelCase = function() {
  return this.split('-').map((d,i,a) =>  i > 0 ? d.charAt(0).toUpperCase() + d.slice(1) :d).join('');
}
