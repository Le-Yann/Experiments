!function (b, c, d, e) {
  function i(a) {
    c.push.apply(this, a && a.nodeType ? [a] : '' + a === a ? b.querySelectorAll(a) : e)
  }
  $ = function (a) {
    return /^f/.test(typeof a) ? /c/.test(b.readyState) ? a() : $(b).on('DOMContentLoaded', a) : new i(a)
  }

  $[d] = i[d] = $.fn = i.fn = {
    length:0,
    splice:c.splice,
    c:function(v,n,c,r){e=this;r=e[c='className'].replace(eval('/ *\\b'+n+'\\b/g'),'');return'has'==v?r!=e[c]:e[c]={add:1,toggle:r==e[c]}[v]?r+' '+n:r;}
  }

}(document, [], 'prototype');
eachify = function(what) {
  for (var property in what) {
    prop = Object.getOwnPropertyDescriptor(what, property);
    val = prop.value;
		if(typeof(val)=='function') {
      newval = function() {
        args=arguments;
        if(this[0]){
          for (i=0;i<this.length;i++) {
            this[i] = val.apply(this[i],args);
          }
          return(this)
        } else
          return(val(args));
      };
      prop.value =newval
      Object.defineProperty(what, property, prop);
    }
	}
};
eachify($.prototype);
console.log($('p').c('has','red'));
