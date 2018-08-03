!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(a){function s(t,e){var i,s,n,o=t.nodeName.toLowerCase();return"area"===o?(s=(i=t.parentNode).name,!(!t.href||!s||"map"!==i.nodeName.toLowerCase())&&(!!(n=a("img[usemap='#"+s+"']")[0])&&h(n))):(/^(input|select|textarea|button|object)$/.test(o)?!t.disabled:"a"===o&&t.href||e)&&h(t)}function h(t){return a.expr.filters.visible(t)&&!a(t).parents().addBack().filter(function(){return"hidden"===a.css(this,"visibility")}).length}var t,e,i,n;a.ui=a.ui||{},a.extend(a.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),a.fn.extend({scrollParent:function(t){var e=this.css("position"),i="absolute"===e,s=t?/(auto|scroll|hidden)/:/(auto|scroll)/,n=this.parents().filter(function(){var t=a(this);return(!i||"static"!==t.css("position"))&&s.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==e&&n.length?n:a(this[0].ownerDocument||document)},uniqueId:(t=0,function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&a(this).removeAttr("id")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(e){return function(t){return!!a.data(t,e)}}):function(t,e,i){return!!a.data(t,i[3])},focusable:function(t){return s(t,!isNaN(a.attr(t,"tabindex")))},tabbable:function(t){var e=a.attr(t,"tabindex"),i=isNaN(e);return(i||0<=e)&&s(t,!i)}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(t,i){function s(t,e,i,s){return a.each(n,function(){e-=parseFloat(a.css(t,"padding"+this))||0,i&&(e-=parseFloat(a.css(t,"border"+this+"Width"))||0),s&&(e-=parseFloat(a.css(t,"margin"+this))||0)}),e}var n="Width"===i?["Left","Right"]:["Top","Bottom"],o=i.toLowerCase(),h={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+i]=function(t){return t===undefined?h["inner"+i].call(this):this.each(function(){a(this).css(o,s(this,t)+"px")})},a.fn["outer"+i]=function(t,e){return"number"!=typeof t?h["outer"+i].call(this,t):this.each(function(){a(this).css(o,s(this,t,!0,e)+"px")})}}),a.fn.addBack||(a.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),a("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(a.fn.removeData=(e=a.fn.removeData,function(t){return arguments.length?e.call(this,a.camelCase(t)):e.call(this)})),a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),a.fn.extend({focus:(n=a.fn.focus,function(e,i){return"number"==typeof e?this.each(function(){var t=this;setTimeout(function(){a(t).focus(),i&&i.call(t)},e)}):n.apply(this,arguments)}),disableSelection:(i="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.bind(i+".ui-disableSelection",function(t){t.preventDefault()})}),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(t!==undefined)return this.css("zIndex",t);if(this.length)for(var e,i,s=a(this[0]);s.length&&s[0]!==document;){if(("absolute"===(e=s.css("position"))||"relative"===e||"fixed"===e)&&(i=parseInt(s.css("zIndex"),10),!isNaN(i)&&0!==i))return i;s=s.parent()}return 0}}),a.ui.plugin={add:function(t,e,i){var s,n=a.ui[t].prototype;for(s in i)n.plugins[s]=n.plugins[s]||[],n.plugins[s].push([e,i[s]])},call:function(t,e,i,s){var n,o=t.plugins[e];if(o&&(s||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(n=0;n<o.length;n++)t.options[o[n][0]]&&o[n][1].apply(t.element,i)}}}),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(u){var o,i=0,a=Array.prototype.slice;return u.cleanData=(o=u.cleanData,function(t){var e,i,s;for(s=0;null!=(i=t[s]);s++)try{(e=u._data(i,"events"))&&e.remove&&u(i).triggerHandler("remove")}catch(n){}o(t)}),u.widget=function(t,i,e){var s,n,o,h,a={},r=t.split(".")[0];return t=t.split(".")[1],s=r+"-"+t,e||(e=i,i=u.Widget),u.expr[":"][s.toLowerCase()]=function(t){return!!u.data(t,s)},u[r]=u[r]||{},n=u[r][t],o=u[r][t]=function(t,e){if(!this._createWidget)return new o(t,e);arguments.length&&this._createWidget(t,e)},u.extend(o,n,{version:e.version,_proto:u.extend({},e),_childConstructors:[]}),(h=new i).options=u.widget.extend({},h.options),u.each(e,function(e,s){var n,o;u.isFunction(s)?a[e]=(n=function(){return i.prototype[e].apply(this,arguments)},o=function(t){return i.prototype[e].apply(this,t)},function(){var t,e=this._super,i=this._superApply;return this._super=n,this._superApply=o,t=s.apply(this,arguments),this._super=e,this._superApply=i,t}):a[e]=s}),o.prototype=u.widget.extend(h,{widgetEventPrefix:n&&h.widgetEventPrefix||t},a,{constructor:o,namespace:r,widgetName:t,widgetFullName:s}),n?(u.each(n._childConstructors,function(t,e){var i=e.prototype;u.widget(i.namespace+"."+i.widgetName,o,e._proto)}),delete n._childConstructors):i._childConstructors.push(o),u.widget.bridge(t,o),o},u.widget.extend=function(t){for(var e,i,s=a.call(arguments,1),n=0,o=s.length;n<o;n++)for(e in s[n])i=s[n][e],s[n].hasOwnProperty(e)&&i!==undefined&&(u.isPlainObject(i)?t[e]=u.isPlainObject(t[e])?u.widget.extend({},t[e],i):u.widget.extend({},i):t[e]=i);return t},u.widget.bridge=function(o,e){var h=e.prototype.widgetFullName||o;u.fn[o]=function(i){var t="string"==typeof i,s=a.call(arguments,1),n=this;return t?this.each(function(){var t,e=u.data(this,h);return"instance"===i?(n=e,!1):e?u.isFunction(e[i])&&"_"!==i.charAt(0)?(t=e[i].apply(e,s))!==e&&t!==undefined?(n=t&&t.jquery?n.pushStack(t.get()):t,!1):void 0:u.error("no such method '"+i+"' for "+o+" widget instance"):u.error("cannot call methods on "+o+" prior to initialization; attempted to call method '"+i+"'")}):(s.length&&(i=u.widget.extend.apply(null,[i].concat(s))),this.each(function(){var t=u.data(this,h);t?(t.option(i||{}),t._init&&t._init()):u.data(this,h,new e(i,this))})),n}},u.Widget=function(){},u.Widget._childConstructors=[],u.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,e){e=u(e||this.defaultElement||this)[0],this.element=u(e),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=u(),this.hoverable=u(),this.focusable=u(),e!==this&&(u.data(e,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===e&&this.destroy()}}),this.document=u(e.style?e.ownerDocument:e.document||e),this.window=u(this.document[0].defaultView||this.document[0].parentWindow)),this.options=u.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:u.noop,_getCreateEventData:u.noop,_create:u.noop,_init:u.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(u.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:u.noop,widget:function(){return this.element},option:function(t,e){var i,s,n,o=t;if(0===arguments.length)return u.widget.extend({},this.options);if("string"==typeof t)if(o={},t=(i=t.split(".")).shift(),i.length){for(s=o[t]=u.widget.extend({},this.options[t]),n=0;n<i.length-1;n++)s[i[n]]=s[i[n]]||{},s=s[i[n]];if(t=i.pop(),1===arguments.length)return s[t]===undefined?null:s[t];s[t]=e}else{if(1===arguments.length)return this.options[t]===undefined?null:this.options[t];o[t]=e}return this._setOptions(o),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!e),e&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(h,a,t){var r,l=this;"boolean"!=typeof h&&(t=a,a=h,h=!1),t?(a=r=u(a),this.bindings=this.bindings.add(a)):(t=a,a=this.element,r=this.widget()),u.each(t,function(t,e){function i(){if(h||!0!==l.options.disabled&&!u(this).hasClass("ui-state-disabled"))return("string"==typeof e?l[e]:e).apply(l,arguments)}"string"!=typeof e&&(i.guid=e.guid=e.guid||i.guid||u.guid++);var s=t.match(/^([\w:-]*)\s*(.*)$/),n=s[1]+l.eventNamespace,o=s[2];o?r.delegate(o,n,i):a.bind(n,i)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e),this.bindings=u(this.bindings.not(t).get()),this.focusable=u(this.focusable.not(t).get()),this.hoverable=u(this.hoverable.not(t).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){u(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){u(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){u(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){u(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,e,i){var s,n,o=this.options[t];if(i=i||{},(e=u.Event(e)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),e.target=this.element[0],n=e.originalEvent)for(s in n)s in e||(e[s]=n[s]);return this.element.trigger(e,i),!(u.isFunction(o)&&!1===o.apply(this.element[0],[e].concat(i))||e.isDefaultPrevented())}},u.each({show:"fadeIn",hide:"fadeOut"},function(o,h){u.Widget.prototype["_"+o]=function(e,t,i){"string"==typeof t&&(t={effect:t});var s,n=t?!0===t||"number"==typeof t?h:t.effect||h:o;"number"==typeof(t=t||{})&&(t={duration:t}),s=!u.isEmptyObject(t),t.complete=i,t.delay&&e.delay(t.delay),s&&u.effects&&u.effects.effect[n]?e[o](t):n!==o&&e[n]?e[n](t.duration,t.easing,i):e.queue(function(t){u(this)[o](),i&&i.call(e[0]),t()})}}),u.widget}),function(t){"function"==typeof define&&define.amd?define(["jquery","./widget"],t):t(jQuery)}(function(n){var o=!1;return n(document).mouseup(function(){o=!1}),n.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(t){if(!0===n.data(t.target,e.widgetName+".preventClickEvent"))return n.removeData(t.target,e.widgetName+".preventClickEvent"),t.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!o){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var e=this,i=1===t.which,s=!("string"!=typeof this.options.cancel||!t.target.nodeName)&&n(t.target).closest(this.options.cancel).length;return!(i&&!s&&this._mouseCapture(t))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){e.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=!1!==this._mouseStart(t),!this._mouseStarted)?(t.preventDefault(),!0):(!0===n.data(t.target,this.widgetName+".preventClickEvent")&&n.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return e._mouseMove(t)},this._mouseUpDelegate=function(t){return e._mouseUp(t)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),o=!0))}},_mouseMove:function(t){if(this._mouseMoved){if(n.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button)return this._mouseUp(t);if(!t.which)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,t),this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&n.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),o=!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})}),function(t){"function"==typeof define&&define.amd?define(["jquery","./core","./mouse","./widget"],t):t(jQuery)}(function(_){return _.widget("ui.resizable",_.ui.mouse,{version:"1.11.4",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseInt(t,10)||0},_isNumber:function(t){return!isNaN(parseInt(t,10))},_hasScroll:function(t,e){if("hidden"===_(t).css("overflow"))return!1;var i=e&&"left"===e?"scrollLeft":"scrollTop",s=!1;return 0<t[i]||(t[i]=1,s=0<t[i],t[i]=0,s)},_create:function(){var t,e,i,s,o=this,n=this.options;if(this.element.addClass("ui-resizable"),_.extend(this,{_aspectRatio:!!n.aspectRatio,aspectRatio:n.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:n.helper||n.ghost||n.animate?n.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(_("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=n.handles||(_(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=_(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},e=0;e<t.length;e++)i=_.trim(t[e]),(s=_("<div class='ui-resizable-handle "+("ui-resizable-"+i)+"'></div>")).css({zIndex:n.zIndex}),"se"===i&&s.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[i]=".ui-resizable-"+i,this.element.append(s);this._renderAxis=function(t){var e,i,s,n;for(e in t=t||this.element,this.handles)this.handles[e].constructor===String?this.handles[e]=this.element.children(this.handles[e]).first().show():(this.handles[e].jquery||this.handles[e].nodeType)&&(this.handles[e]=_(this.handles[e]),this._on(this.handles[e],{mousedown:o._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(i=_(this.handles[e],this.element),n=/sw|ne|nw|se|n|s/.test(e)?i.outerHeight():i.outerWidth(),s=["padding",/ne|nw|n/.test(e)?"Top":/se|sw|s/.test(e)?"Bottom":/^e$/.test(e)?"Right":"Left"].join(""),t.css(s,n),this._proportionallyResize()),this._handles=this._handles.add(this.handles[e])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(s=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=s&&s[1]?s[1]:"se")}),n.autoHide&&(this._handles.hide(),_(this.element).addClass("ui-resizable-autohide").mouseenter(function(){n.disabled||(_(this).removeClass("ui-resizable-autohide"),o._handles.show())}).mouseleave(function(){n.disabled||o.resizing||(_(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,e=function(t){_(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(e(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),e(this.originalElement),this},_mouseCapture:function(t){var e,i,s=!1;for(e in this.handles)((i=_(this.handles[e])[0])===t.target||_.contains(i,t.target))&&(s=!0);return!this.options.disabled&&s},_mouseStart:function(t){var e,i,s,n=this.options,o=this.element;return this.resizing=!0,this._renderProxy(),e=this._num(this.helper.css("left")),i=this._num(this.helper.css("top")),n.containment&&(e+=_(n.containment).scrollLeft()||0,i+=_(n.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:e,top:i},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:o.width(),height:o.height()},this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()},this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()},this.originalPosition={left:e,top:i},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio="number"==typeof n.aspectRatio?n.aspectRatio:this.originalSize.width/this.originalSize.height||1,s=_(".ui-resizable-"+this.axis).css("cursor"),_("body").css("cursor","auto"===s?this.axis+"-resize":s),o.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var e,i,s=this.originalMousePosition,n=this.axis,o=t.pageX-s.left||0,h=t.pageY-s.top||0,a=this._change[n];return this._updatePrevProperties(),a&&(e=a.apply(this,[t,o,h]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(e=this._updateRatio(e,t)),e=this._respectSize(e,t),this._updateCache(e),this._propagate("resize",t),i=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),_.isEmptyObject(i)||(this._updatePrevProperties(),this._trigger("resize",t,this.ui()),this._applyChanges())),!1},_mouseStop:function(t){this.resizing=!1;var e,i,s,n,o,h,a,r=this.options,l=this;return this._helper&&(s=(i=(e=this._proportionallyResizeElements).length&&/textarea/i.test(e[0].nodeName))&&this._hasScroll(e[0],"left")?0:l.sizeDiff.height,n=i?0:l.sizeDiff.width,o={width:l.helper.width()-n,height:l.helper.height()-s},h=parseInt(l.element.css("left"),10)+(l.position.left-l.originalPosition.left)||null,a=parseInt(l.element.css("top"),10)+(l.position.top-l.originalPosition.top)||null,r.animate||this.element.css(_.extend(o,{top:a,left:h})),l.helper.height(l.size.height),l.helper.width(l.size.width),this._helper&&!r.animate&&this._proportionallyResize()),_("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var e,i,s,n,o,h=this.options;o={minWidth:this._isNumber(h.minWidth)?h.minWidth:0,maxWidth:this._isNumber(h.maxWidth)?h.maxWidth:Infinity,minHeight:this._isNumber(h.minHeight)?h.minHeight:0,maxHeight:this._isNumber(h.maxHeight)?h.maxHeight:Infinity},(this._aspectRatio||t)&&(e=o.minHeight*this.aspectRatio,s=o.minWidth/this.aspectRatio,i=o.maxHeight*this.aspectRatio,n=o.maxWidth/this.aspectRatio,e>o.minWidth&&(o.minWidth=e),s>o.minHeight&&(o.minHeight=s),i<o.maxWidth&&(o.maxWidth=i),n<o.maxHeight&&(o.maxHeight=n)),this._vBoundaries=o},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,i=this.size,s=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===s&&(t.left=e.left+(i.width-t.width),t.top=null),"nw"===s&&(t.top=e.top+(i.height-t.height),t.left=e.left+(i.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,i=this.axis,s=this._isNumber(t.width)&&e.maxWidth&&e.maxWidth<t.width,n=this._isNumber(t.height)&&e.maxHeight&&e.maxHeight<t.height,o=this._isNumber(t.width)&&e.minWidth&&e.minWidth>t.width,h=this._isNumber(t.height)&&e.minHeight&&e.minHeight>t.height,a=this.originalPosition.left+this.originalSize.width,r=this.position.top+this.size.height,l=/sw|nw|w/.test(i),u=/nw|ne|n/.test(i);return o&&(t.width=e.minWidth),h&&(t.height=e.minHeight),s&&(t.width=e.maxWidth),n&&(t.height=e.maxHeight),o&&l&&(t.left=a-e.minWidth),s&&l&&(t.left=a-e.maxWidth),h&&u&&(t.top=r-e.minHeight),n&&u&&(t.top=r-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var e=0,i=[],s=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],n=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];e<4;e++)i[e]=parseInt(s[e],10)||0,i[e]+=parseInt(n[e],10)||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,e=0,i=this.helper||this.element;e<this._proportionallyResizeElements.length;e++)t=this._proportionallyResizeElements[e],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var t=this.element,e=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||_("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++e.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize;return{left:this.originalPosition.left+e,width:i.width-e}},n:function(t,e,i){var s=this.originalSize;return{top:this.originalPosition.top+i,height:s.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(t,e,i){return _.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,e,i]))},sw:function(t,e,i){return _.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,e,i]))},ne:function(t,e,i){return _.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,e,i]))},nw:function(t,e,i){return _.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,e,i]))}},_propagate:function(t,e){_.ui.plugin.call(this,t,[e,this.ui()]),"resize"!==t&&this._trigger(t,e,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),_.ui.plugin.add("resizable","animate",{stop:function(e){var i=_(this).resizable("instance"),t=i.options,s=i._proportionallyResizeElements,n=s.length&&/textarea/i.test(s[0].nodeName),o=n&&i._hasScroll(s[0],"left")?0:i.sizeDiff.height,h=n?0:i.sizeDiff.width,a={width:i.size.width-h,height:i.size.height-o},r=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,l=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(_.extend(a,l&&r?{top:l,left:r}:{}),{duration:t.animateDuration,easing:t.animateEasing,step:function(){var t={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};s&&s.length&&_(s[0]).css({width:t.width,height:t.height}),i._updateCache(t),i._propagate("resize",e)}})}}),_.ui.plugin.add("resizable","containment",{start:function(){var i,s,t,e,n,o,h,a=_(this).resizable("instance"),r=a.options,l=a.element,u=r.containment,d=u instanceof _?u.get(0):/parent/.test(u)?l.parent().get(0):u;d&&(a.containerElement=_(d),/document/.test(u)||u===document?(a.containerOffset={left:0,top:0},a.containerPosition={left:0,top:0},a.parentData={element:_(document),left:0,top:0,width:_(document).width(),height:_(document).height()||document.body.parentNode.scrollHeight}):(i=_(d),s=[],_(["Top","Right","Left","Bottom"]).each(function(t,e){s[t]=a._num(i.css("padding"+e))}),a.containerOffset=i.offset(),a.containerPosition=i.position(),a.containerSize={height:i.innerHeight()-s[3],width:i.innerWidth()-s[1]},t=a.containerOffset,e=a.containerSize.height,n=a.containerSize.width,o=a._hasScroll(d,"left")?d.scrollWidth:n,h=a._hasScroll(d)?d.scrollHeight:e,a.parentData={element:d,left:t.left,top:t.top,width:o,height:h}))},resize:function(t){var e,i,s,n,o=_(this).resizable("instance"),h=o.options,a=o.containerOffset,r=o.position,l=o._aspectRatio||t.shiftKey,u={top:0,left:0},d=o.containerElement,p=!0;d[0]!==document&&/static/.test(d.css("position"))&&(u=a),r.left<(o._helper?a.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-a.left:o.position.left-u.left),l&&(o.size.height=o.size.width/o.aspectRatio,p=!1),o.position.left=h.helper?a.left:0),r.top<(o._helper?a.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-a.top:o.position.top),l&&(o.size.width=o.size.height*o.aspectRatio,p=!1),o.position.top=o._helper?a.top:0),s=o.containerElement.get(0)===o.element.parent().get(0),n=/relative|absolute/.test(o.containerElement.css("position")),s&&n?(o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top):(o.offset.left=o.element.offset().left,o.offset.top=o.element.offset().top),e=Math.abs(o.sizeDiff.width+(o._helper?o.offset.left-u.left:o.offset.left-a.left)),i=Math.abs(o.sizeDiff.height+(o._helper?o.offset.top-u.top:o.offset.top-a.top)),e+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-e,l&&(o.size.height=o.size.width/o.aspectRatio,p=!1)),i+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-i,l&&(o.size.width=o.size.height*o.aspectRatio,p=!1)),p||(o.position.left=o.prevPosition.left,o.position.top=o.prevPosition.top,o.size.width=o.prevSize.width,o.size.height=o.prevSize.height)},stop:function(){var t=_(this).resizable("instance"),e=t.options,i=t.containerOffset,s=t.containerPosition,n=t.containerElement,o=_(t.helper),h=o.offset(),a=o.outerWidth()-t.sizeDiff.width,r=o.outerHeight()-t.sizeDiff.height;t._helper&&!e.animate&&/relative/.test(n.css("position"))&&_(this).css({left:h.left-s.left-i.left,width:a,height:r}),t._helper&&!e.animate&&/static/.test(n.css("position"))&&_(this).css({left:h.left-s.left-i.left,width:a,height:r})}}),_.ui.plugin.add("resizable","alsoResize",{start:function(){var t=_(this).resizable("instance").options;_(t.alsoResize).each(function(){var t=_(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})},resize:function(t,i){var e=_(this).resizable("instance"),s=e.options,n=e.originalSize,o=e.originalPosition,h={height:e.size.height-n.height||0,width:e.size.width-n.width||0,top:e.position.top-o.top||0,left:e.position.left-o.left||0};_(s.alsoResize).each(function(){var t=_(this),s=_(this).data("ui-resizable-alsoresize"),n={},e=t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];_.each(e,function(t,e){var i=(s[e]||0)+(h[e]||0);i&&0<=i&&(n[e]=i||null)}),t.css(n)})},stop:function(){_(this).removeData("resizable-alsoresize")}}),_.ui.plugin.add("resizable","ghost",{start:function(){var t=_(this).resizable("instance"),e=t.options,i=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:i.height,width:i.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof e.ghost?e.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=_(this).resizable("instance");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=_(this).resizable("instance");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),_.ui.plugin.add("resizable","grid",{resize:function(){var t,e=_(this).resizable("instance"),i=e.options,s=e.size,n=e.originalSize,o=e.originalPosition,h=e.axis,a="number"==typeof i.grid?[i.grid,i.grid]:i.grid,r=a[0]||1,l=a[1]||1,u=Math.round((s.width-n.width)/r)*r,d=Math.round((s.height-n.height)/l)*l,p=n.width+u,c=n.height+d,f=i.maxWidth&&i.maxWidth<p,g=i.maxHeight&&i.maxHeight<c,m=i.minWidth&&i.minWidth>p,w=i.minHeight&&i.minHeight>c;i.grid=a,m&&(p+=r),w&&(c+=l),f&&(p-=r),g&&(c-=l),/^(se|s|e)$/.test(h)?(e.size.width=p,e.size.height=c):/^(ne)$/.test(h)?(e.size.width=p,e.size.height=c,e.position.top=o.top-d):/^(sw)$/.test(h)?(e.size.width=p,e.size.height=c,e.position.left=o.left-u):((c-l<=0||p-r<=0)&&(t=e._getPaddingPlusBorderDimensions(this)),0<c-l?(e.size.height=c,e.position.top=o.top-d):(c=l-t.height,e.size.height=c,e.position.top=o.top+n.height-c),0<p-r?(e.size.width=p,e.position.left=o.left-u):(p=r-t.width,e.size.width=p,e.position.left=o.left+n.width-p))}}),_.ui.resizable});