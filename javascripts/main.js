jQuery.fn.replaceAmpersand = function() {
 function innerReplaceAmpersand(node) {
  var pat = ' & ';
  var skip = 0;
  if (node.nodeType == 3) {
   var pos = node.data.toUpperCase().indexOf(pat);
   if (pos >= 0) {
    var spannode = document.createElement('span');
    spannode.className = 'amp';
    var middlebit = node.splitText(pos);
    var endbit = middlebit.splitText(pat.length);
    var middleclone = middlebit.cloneNode(true);
    spannode.appendChild(middleclone);
    middlebit.parentNode.replaceChild(spannode, middlebit);
    skip = 1;
   }
  }
  else if (node.nodeType == 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
   for (var i = 0; i < node.childNodes.length; ++i) {
    i += innerReplaceAmpersand(node.childNodes[i], pat);
   }
  }
  return skip;
 }
 return this.each(function() {
  innerReplaceAmpersand(this);
 });
};

$(document).ready(function(){
  $('body').replaceAmpersand();
})