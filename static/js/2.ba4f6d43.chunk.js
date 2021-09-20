(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{218:function(t,e,r){"use strict";var o=r(1),a=r.n(o);function n(){}function i(t){return!!(t||"").match(/\d/)}function s(t){return null===t||void 0===t}function u(t){return t.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function l(t,e){void 0===e&&(e=!0);var r="-"===t[0],o=r&&e,a=(t=t.replace("-","")).split(".");return{beforeDecimal:a[0],afterDecimal:a[1]||"",hasNagation:r,addNegation:o}}function p(t,e,r){for(var o="",a=r?"0":"",n=0;n<=e-1;n++)o+=t[n]||a;return o}function c(t,e){return Array(e+1).join(t)}function f(t,e){if(t.value=t.value,null!==t){if(t.createTextRange){var r=t.createTextRange();return r.move("character",e),r.select(),!0}return t.selectionStart||0===t.selectionStart?(t.focus(),t.setSelectionRange(e,e),!0):(t.focus(),!1)}}function h(t,e,r){return Math.min(Math.max(t,e),r)}function m(t){return Math.max(t.selectionStart,t.selectionEnd)}var g={displayType:"input",decimalSeparator:".",thousandsGroupStyle:"thousand",fixedDecimalScale:!1,prefix:"",suffix:"",allowNegative:!0,allowEmptyFormatting:!1,allowLeadingZeros:!1,isNumericString:!1,type:"text",onValueChange:n,onChange:n,onKeyDown:n,onMouseUp:n,onFocus:n,onBlur:n,isAllowed:function(){return!0}},d=function(t){function e(e){t.call(this,e);var r=e.defaultValue;this.validateProps();var o=this.formatValueProp(r);this.state={value:o,numAsString:this.removeFormatting(o),mounted:!1},this.selectionBeforeInput={selectionStart:0,selectionEnd:0},this.onChange=this.onChange.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onFocus=this.onFocus.bind(this),this.onBlur=this.onBlur.bind(this)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.componentDidMount=function(){this.setState({mounted:!0})},e.prototype.componentDidUpdate=function(t){this.updateValueIfRequired(t)},e.prototype.componentWillUnmount=function(){clearTimeout(this.focusTimeout),clearTimeout(this.caretPositionTimeout)},e.prototype.updateValueIfRequired=function(t){var e=this.props,r=this.state,o=this.focusedElm,a=r.value,n=r.numAsString;if(void 0===n&&(n=""),t!==e){this.validateProps();var i=this.formatNumString(n),u=s(e.value)?i:this.formatValueProp(),l=this.removeFormatting(u),p=parseFloat(l),c=parseFloat(n);(isNaN(p)&&isNaN(c)||p===c)&&i===a&&(null!==o||u===a)||this.updateValue({formattedValue:u,numAsString:l,input:o})}},e.prototype.getFloatString=function(t){void 0===t&&(t="");var e=this.props.decimalScale,r=this.getSeparators().decimalSeparator,o=this.getNumberRegex(!0),a="-"===t[0];a&&(t=t.replace("-","")),r&&0===e&&(t=t.split(r)[0]);var n=(t=(t.match(o)||[]).join("").replace(r,".")).indexOf(".");return-1!==n&&(t=t.substring(0,n)+"."+t.substring(n+1,t.length).replace(new RegExp(u(r),"g"),"")),a&&(t="-"+t),t},e.prototype.getNumberRegex=function(t,e){var r=this.props,o=r.format,a=r.decimalScale,n=r.customNumerals,i=this.getSeparators().decimalSeparator;return new RegExp("[0-9"+(n?n.join(""):"")+"]"+(!i||0===a||e||o?"":"|"+u(i)),t?"g":void 0)},e.prototype.getSeparators=function(){var t=this.props.decimalSeparator,e=this.props,r=e.thousandSeparator,o=e.allowedDecimalSeparators;return!0===r&&(r=","),o||(o=[t,"."]),{decimalSeparator:t,thousandSeparator:r,allowedDecimalSeparators:o}},e.prototype.getMaskAtIndex=function(t){var e=this.props.mask;return void 0===e&&(e=" "),"string"===typeof e?e:e[t]||" "},e.prototype.getValueObject=function(t,e){var r=parseFloat(e);return{formattedValue:t,value:e,floatValue:isNaN(r)?void 0:r}},e.prototype.validateProps=function(){var t=this.props.mask,e=this.getSeparators(),r=e.decimalSeparator,o=e.thousandSeparator;if(r===o)throw new Error("\n          Decimal separator can't be same as thousand separator.\n          thousandSeparator: "+o+' (thousandSeparator = {true} is same as thousandSeparator = ",")\n          decimalSeparator: '+r+" (default value for decimalSeparator is .)\n       ");if(t&&("string"===t?t:t.toString()).match(/\d/g))throw new Error("\n          Mask "+t+" should not contain numeric character;\n        ")},e.prototype.setPatchedCaretPosition=function(t,e,r){f(t,e),this.caretPositionTimeout=setTimeout(function(){t.value===r&&f(t,e)},0)},e.prototype.correctCaretPosition=function(t,e,r){var o=this.props,a=o.prefix,n=o.suffix,s=o.format;if(""===t)return 0;if(e=h(e,0,t.length),!s){var u="-"===t[0];return h(e,a.length+(u?1:0),t.length-n.length)}if("function"===typeof s)return e;if("#"===s[e]&&i(t[e]))return e;if("#"===s[e-1]&&i(t[e-1]))return e;var l=s.indexOf("#");e=h(e,l,s.lastIndexOf("#")+1);for(var p=s.substring(e,s.length).indexOf("#"),c=e,f=e+(-1===p?0:p);c>l&&("#"!==s[c]||!i(t[c]));)c-=1;return!i(t[f])||"left"===r&&e!==l||e-c<f-e?i(t[c])?c+1:c:f},e.prototype.getCaretPosition=function(t,e,r){var o,a,n=this.props.format,i=this.state.value,s=this.getNumberRegex(!0),u=(t.match(s)||[]).join(""),l=(e.match(s)||[]).join("");for(o=0,a=0;a<r;a++){var p=t[a]||"",c=e[o]||"";if((p.match(s)||p===c)&&("0"!==p||!c.match(s)||"0"===c||u.length===l.length)){for(;p!==e[o]&&o<e.length;)o++;o++}}return"string"!==typeof n||i||(o=e.length),o=this.correctCaretPosition(e,o)},e.prototype.removePrefixAndSuffix=function(t){var e=this.props,r=e.format,o=e.prefix,a=e.suffix;if(!r&&t){var n="-"===t[0];n&&(t=t.substring(1,t.length));var i=(t=o&&0===t.indexOf(o)?t.substring(o.length,t.length):t).lastIndexOf(a);t=a&&-1!==i&&i===t.length-a.length?t.substring(0,i):t,n&&(t="-"+t)}return t},e.prototype.removePatternFormatting=function(t){for(var e=this.props.format.split("#").filter(function(t){return""!==t}),r=0,o="",a=0,n=e.length;a<=n;a++){var i=e[a]||"",s=a===n?t.length:t.indexOf(i,r);if(-1===s){o=t;break}o+=t.substring(r,s),r=s+i.length}return(o.match(/\d/g)||[]).join("")},e.prototype.removeFormatting=function(t){var e=this.props,r=e.format,o=e.removeFormatting;return t?(r?t="string"===typeof r?this.removePatternFormatting(t):"function"===typeof o?o(t):(t.match(/\d/g)||[]).join(""):(t=this.removePrefixAndSuffix(t),t=this.getFloatString(t)),t):t},e.prototype.formatWithPattern=function(t){for(var e=this.props.format,r=0,o=e.split(""),a=0,n=e.length;a<n;a++)"#"===e[a]&&(o[a]=t[r]||this.getMaskAtIndex(r),r+=1);return o.join("")},e.prototype.formatAsNumber=function(t){var e=this.props,r=e.decimalScale,o=e.fixedDecimalScale,a=e.prefix,n=e.suffix,i=e.allowNegative,s=e.thousandsGroupStyle,u=this.getSeparators(),c=u.thousandSeparator,f=u.decimalSeparator,h=-1!==t.indexOf(".")||r&&o,m=l(t,i),g=m.beforeDecimal,d=m.afterDecimal,v=m.addNegation;return void 0!==r&&(d=p(d,r,o)),c&&(g=function(t,e,r){var o=function(t){switch(t){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}(r),a=t.search(/[1-9]/);return a=-1===a?t.length:a,t.substring(0,a)+t.substring(a,t.length).replace(o,"$1"+e)}(g,c,s)),a&&(g=a+g),n&&(d+=n),v&&(g="-"+g),t=g+(h&&f||"")+d},e.prototype.formatNumString=function(t){void 0===t&&(t="");var e=this.props,r=e.format,o=e.allowEmptyFormatting,a=e.customNumerals,n=t;if(a&&10===a.length){var i=new RegExp("["+a.join("")+"]","g");n=t.replace(i,function(t){return a.indexOf(t).toString()})}return n=""!==t||o?"-"!==t||r?"string"===typeof r?this.formatWithPattern(n):"function"===typeof r?r(n):this.formatAsNumber(n):"-":""},e.prototype.formatValueProp=function(t){var e=this.props,r=e.format,o=e.decimalScale,a=e.fixedDecimalScale,n=e.allowEmptyFormatting,i=this.props,u=i.value,f=i.isNumericString,h=!(u=s(u)?t:u)&&0!==u;return h&&n&&(u=""),h&&!n?"":("number"===typeof u&&(u=function(t){var e="-"===(t+="")[0]?"-":"";e&&(t=t.substring(1));var r=t.split(/[eE]/g),o=r[0],a=r[1];if(!(a=Number(a)))return e+o;var n=1+a,i=(o=o.replace(".","")).length;return n<0?o="0."+c("0",Math.abs(n))+o:n>=i?o+=c("0",n-i):o=(o.substring(0,n)||"0")+"."+o.substring(n),e+o}(u),f=!0),"Infinity"===u&&f&&(u=""),f&&!r&&"number"===typeof o&&(u=function(t,e,r){if(-1!==["","-"].indexOf(t))return t;var o=-1!==t.indexOf(".")&&e,a=l(t),n=a.beforeDecimal,i=a.afterDecimal,s=a.hasNagation,u=parseFloat("0."+(i||"0")),c=(i.length<=e?"0."+i:u.toFixed(e)).split(".");return(s?"-":"")+n.split("").reverse().reduce(function(t,e,r){return t.length>r?(Number(t[0])+Number(e)).toString()+t.substring(1,t.length):e+t},c[0])+(o?".":"")+p(c[1]||"",Math.min(e,i.length),r)}(u,o,a)),f?this.formatNumString(u):this.formatInput(u))},e.prototype.formatNegation=function(t){void 0===t&&(t="");var e=this.props.allowNegative,r=new RegExp("(-)"),o=new RegExp("(-)(.)*(-)"),a=r.test(t),n=o.test(t);return t=t.replace(/-/g,""),a&&!n&&e&&(t="-"+t),t},e.prototype.formatInput=function(t){return void 0===t&&(t=""),this.props.format||(t=this.removePrefixAndSuffix(t),t=this.formatNegation(t)),t=this.removeFormatting(t),this.formatNumString(t)},e.prototype.isCharacterAFormat=function(t,e){var r=this.props,o=r.format,a=r.prefix,n=r.suffix,i=r.decimalScale,s=r.fixedDecimalScale,u=this.getSeparators().decimalSeparator;return"string"===typeof o&&"#"!==o[t]||!(o||!(t<a.length||t>=e.length-n.length||i&&s&&e[t]===u))},e.prototype.correctInputValue=function(t,e,r){var o=this,a=this.props,n=a.format,i=a.allowNegative,s=a.prefix,u=a.suffix,p=a.decimalScale,c=this.getSeparators(),f=c.allowedDecimalSeparators,h=c.decimalSeparator,m=this.state.numAsString||"",g=this.selectionBeforeInput,d=g.selectionStart,v=g.selectionEnd,S=function(t,e){for(var r=0,o=0,a=t.length,n=e.length;t[r]===e[r]&&r<a;)r++;for(;t[a-1-o]===e[n-1-o]&&n-o>r&&a-o>r;)o++;return{start:r,end:a-o}}(e,r),y=S.start,x=S.end;if(!n&&y===x&&-1!==f.indexOf(r[d])){var w=0===p?"":h;return r.substr(0,d)+w+r.substr(d+1,r.length)}var b=n?0:s.length,P=e.length-(n?0:u.length);if(r.length>e.length||!r.length||y===x||0===d&&v===e.length||0===y&&x===e.length||d===b&&v===P)return r;var N=e.substr(y,x-y);if(!![].concat(N).find(function(t,r){return o.isCharacterAFormat(r+y,e)})){var F=e.substr(y),D={},C=[];[].concat(F).forEach(function(t,r){o.isCharacterAFormat(r+y,e)?D[r]=t:r>N.length-1&&C.push(t)}),Object.keys(D).forEach(function(t){C.length>t?C.splice(t,0,D[t]):C.push(D[t])}),r=e.substr(0,y)+C.join("")}if(!n){var V=this.removeFormatting(r),A=l(V,i),E=A.beforeDecimal,O=A.afterDecimal,j=A.addNegation,I=t<r.indexOf(h)+1;if(V.length<m.length&&I&&""===E&&!parseFloat(O))return j?"-":""}return r},e.prototype.updateValue=function(t){var e=t.formattedValue,r=t.input,o=t.setCaretPosition;void 0===o&&(o=!0);var a=t.numAsString,n=t.caretPos,i=this.props.onValueChange,s=this.state.value;if(r)if(o){if(!n){var u=t.inputValue||r.value,l=m(r);r.value=e,n=this.getCaretPosition(u,e,l)}this.setPatchedCaretPosition(r,n,e)}else r.value=e;void 0===a&&(a=this.removeFormatting(e)),e!==s&&(this.setState({value:e,numAsString:a}),i(this.getValueObject(e,a)))},e.prototype.onChange=function(t){var e=t.target,r=e.value,o=this.state,a=this.props,n=a.isAllowed,i=o.value||"",s=m(e);r=this.correctInputValue(s,i,r);var u=this.formatInput(r)||"",l=this.removeFormatting(u),p=n(this.getValueObject(u,l));p||(u=i),this.updateValue({formattedValue:u,numAsString:l,inputValue:r,input:e}),p&&a.onChange(t)},e.prototype.onBlur=function(t){var e=this.props,r=this.state,o=e.format,a=e.onBlur,n=e.allowLeadingZeros,i=r.numAsString,s=r.value;if(this.focusedElm=null,clearTimeout(this.focusTimeout),clearTimeout(this.caretPositionTimeout),!o){isNaN(parseFloat(i))&&(i=""),n||(i=function(t){if(!t)return t;var e="-"===t[0];e&&(t=t.substring(1,t.length));var r=t.split("."),o=r[0].replace(/^0+/,"")||"0",a=r[1]||"";return(e?"-":"")+o+(a?"."+a:"")}(i));var u=this.formatNumString(i);if(u!==s)return this.updateValue({formattedValue:u,numAsString:i,input:t.target,setCaretPosition:!1}),void a(t)}a(t)},e.prototype.onKeyDown=function(t){var e,r=t.target,o=t.key,a=r.selectionStart,n=r.selectionEnd,i=r.value;void 0===i&&(i="");var s=this.props,u=s.decimalScale,l=s.fixedDecimalScale,p=s.prefix,c=s.suffix,f=s.format,h=s.onKeyDown,m=void 0!==u&&l,g=this.getNumberRegex(!1,m),d=new RegExp("-"),v="string"===typeof f;if(this.selectionBeforeInput={selectionStart:a,selectionEnd:n},"ArrowLeft"===o||"Backspace"===o?e=a-1:"ArrowRight"===o?e=a+1:"Delete"===o&&(e=a),void 0!==e&&a===n){var S=e,y=v?f.indexOf("#"):p.length,x=v?f.lastIndexOf("#")+1:i.length-c.length;if("ArrowLeft"===o||"ArrowRight"===o){var w="ArrowLeft"===o?"left":"right";S=this.correctCaretPosition(i,e,w)}else if("Delete"!==o||g.test(i[e])||d.test(i[e])){if("Backspace"===o&&!g.test(i[e]))if(a<=y+1&&"-"===i[0]&&"undefined"===typeof f){var b=i.substring(1);this.updateValue({formattedValue:b,caretPos:S,input:r})}else if(!d.test(i[e])){for(;!g.test(i[S-1])&&S>y;)S--;S=this.correctCaretPosition(i,S,"left")}}else for(;!g.test(i[S])&&S<x;)S++;(S!==e||e<y||e>x)&&(t.preventDefault(),this.setPatchedCaretPosition(r,S,i)),t.isUnitTestRun&&this.setPatchedCaretPosition(r,S,i),h(t)}else h(t)},e.prototype.onMouseUp=function(t){var e=t.target,r=e.selectionStart,o=e.selectionEnd,a=e.value;if(void 0===a&&(a=""),r===o){var n=this.correctCaretPosition(a,r);n!==r&&this.setPatchedCaretPosition(e,n,a)}this.props.onMouseUp(t)},e.prototype.onFocus=function(t){var e=this;t.persist(),this.focusedElm=t.target,this.focusTimeout=setTimeout(function(){var r=t.target,o=r.selectionStart,a=r.selectionEnd,n=r.value;void 0===n&&(n="");var i=e.correctCaretPosition(n,o);i===o||0===o&&a===n.length||e.setPatchedCaretPosition(r,i,n),e.props.onFocus(t)},0)},e.prototype.render=function(){var t=this.props,e=t.type,r=t.displayType,o=t.customInput,n=t.renderText,i=t.getInputRef,s=t.format,u=(t.thousandSeparator,t.decimalSeparator,t.allowedDecimalSeparators,t.thousandsGroupStyle,t.decimalScale,t.fixedDecimalScale,t.prefix,t.suffix,t.removeFormatting,t.mask,t.defaultValue,t.isNumericString,t.allowNegative,t.allowEmptyFormatting,t.allowLeadingZeros,t.onValueChange,t.isAllowed,t.customNumerals,t.onChange,t.onKeyDown,t.onMouseUp,t.onFocus,t.onBlur,t.value,function(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&-1===e.indexOf(o)&&(r[o]=t[o]);return r}(t,["type","displayType","customInput","renderText","getInputRef","format","thousandSeparator","decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","decimalScale","fixedDecimalScale","prefix","suffix","removeFormatting","mask","defaultValue","isNumericString","allowNegative","allowEmptyFormatting","allowLeadingZeros","onValueChange","isAllowed","customNumerals","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value"])),l=this.state,p=l.value,c=l.mounted&&function(t){return t||"undefined"!==typeof navigator&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}(s)?"numeric":void 0,f=Object.assign({inputMode:c},u,{type:e,value:p,onChange:this.onChange,onKeyDown:this.onKeyDown,onMouseUp:this.onMouseUp,onFocus:this.onFocus,onBlur:this.onBlur});if("text"===r)return n?n(p,u)||null:a.a.createElement("span",Object.assign({},u,{ref:i}),p);if(o){var h=o;return a.a.createElement(h,Object.assign({},f,{ref:i}))}return a.a.createElement("input",Object.assign({},f,{ref:i}))},e}(a.a.Component);d.defaultProps=g,e.a=d}}]);
//# sourceMappingURL=2.ba4f6d43.chunk.js.map