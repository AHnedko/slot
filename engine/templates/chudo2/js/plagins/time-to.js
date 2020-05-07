/**
 * Time-To jQuery plug-in
 * Show countdown timer or realtime clock
 *
 * @author Alexey Teterin <altmoc@gmail.com>
 * @version 1.1.2
 * @license MIT http://opensource.org/licenses/MIT
 * @date 2015-11-26
 */
"use strict";!function(t){if("object"==typeof exports){var i=require("jquery");module.exports=t(i||$)}else"function"==typeof define&&define.amd?define(["jquery"],t):t(i||$)}(function(t){function i(i,n){var o=this.data(),l=this.find("ul"),r=!1;if(o.vals&&0!==l.length){i||(i=o.seconds),o.intervalId&&(r=!0,clearTimeout(o.intervalId));var d=Math.floor(i/s),c=d*s,u=Math.floor((i-c)/a);c+=u*a;var h=Math.floor((i-c)/60);c+=60*h;for(var f,p=i-c,m=(100>d?"0"+(10>d?"0":""):"")+d+(10>u?"0":"")+u+(10>h?"0":"")+h+(10>p?"0":"")+p,y=o.vals.length-1,v=m.length-1;y>=0;y--,v--)f=parseInt(m.substr(v,1)),o.vals[y]=f,l.eq(y).children().html(f);if(r||n){var g=this;o.ttStartTime=t.now(),o.intervalId=setTimeout(function(){e.call(g)},1e3),this.data("intervalId",o.intervalId)}}}function e(i){var s=this.find("ul"),a=this.data();if(!a.vals||0==s.length)return a.intervalId&&(clearTimeout(a.intervalId),this.data("intervalId",null)),void(a.callback&&a.callback());void 0==i&&(i=a.iSec);var n=a.vals[i],o=s.eq(i),l=o.children(),r=a.countdown?-1:1;if(l.eq(1).html(n),n+=r,i==a.iSec){var d=a.tickTimeout,c=t.now()-a.ttStartTime;a.sec+=r,d+=Math.abs(a.seconds-a.sec)*d-c,a.intervalId=setTimeout(function(){e.call(u)},d)}(0>n||n>a.limits[i])&&(0>n?(n=a.limits[i],i==a.iHour&&a.displayDays>0&&i>0&&0==a.vals[i-1]&&(n=3)):n=0,i>0&&e.call(this,i-1)),l.eq(0).html(n);var u=this;t.support.transition?(o.addClass("transition"),o.css({top:0}),setTimeout(function(){o.removeClass("transition"),l.eq(1).html(n),o.css({top:"-"+a.height+"px"}),r>0||i!=a.iSec||(a.sec==a.countdownAlertLimit&&s.parent().addClass("timeTo-alert"),0===a.sec&&(s.parent().removeClass("timeTo-alert"),a.intervalId&&(clearTimeout(a.intervalId),u.data("intervalId",null)),"function"==typeof a.callback&&a.callback()))},410)):o.stop().animate({top:0},400,i!=a.iSec?null:function(){l.eq(1).html(n),o.css({top:"-"+a.height+"px"}),r>0||i!=a.iSec||(a.sec==a.countdownAlertLimit?s.parent().addClass("timeTo-alert"):0==a.sec&&(s.parent().removeClass("timeTo-alert"),a.intervalId&&(clearTimeout(a.intervalId),u.data("intervalId",null)),"function"==typeof a.callback&&a.callback()))}),a.vals[i]=n}var s=86400,a=3600,n={callback:null,captionSize:0,countdown:!0,countdownAlertLimit:10,displayCaptions:!1,displayDays:0,displayHours:!0,fontFamily:"Verdana, sans-serif",fontSize:0,lang:"en",seconds:0,start:!0,theme:"white",width:25,height:30,gap:11,vals:[0,0,0,0,0,0,0,0,0],limits:[9,9,9,2,9,5,9,5,9],iSec:8,iHour:4,tickTimeout:1e3,intervalId:null},o={start:function(s){var a,n=this;s&&(i.call(this,s),a=setTimeout(function(){e.call(n)},1e3),this.data("ttStartTime",t.now()),this.data("intervalId",a))},stop:function(){var t=this.data();return t.intervalId&&(clearTimeout(t.intervalId),this.data("intervalId",null)),t},reset:function(t){var e=o.stop.call(this);this.find("div").css({backgroundPosition:"left center"}),this.find("ul").parent().removeClass("timeTo-alert"),"undefined"==typeof t&&(t=e.seconds),i.call(this,t,!0)}},l={en:{days:"days",hours:"hours",min:"minutes",sec:"seconds"},ru:{days:"д",hours:"ч",min:"м",sec:"с"},ua:{days:"днiв",hours:"годин",min:"хвилин",sec:"секунд"},de:{days:"Tag",hours:"Uhr",min:"Minuten",sec:"Secunden"},fr:{days:"jours",hours:"heures",min:"minutes",sec:"secondes"},sp:{days:"días",hours:"horas",min:"minutos",sec:"segundos"},it:{days:"giorni",hours:"ore",min:"minuti",sec:"secondi"},nl:{days:"dagen",hours:"uren",min:"minuten",sec:"seconden"},no:{days:"dager",hours:"timer",min:"minutter",sec:"sekunder"},pt:{days:"dias",hours:"horas",min:"minutos",sec:"segundos"},tr:{days:"gün",hours:"saat",min:"dakika",sec:"saniye"}};return"undefined"==typeof t.support.transition&&(t.support.transition=function(){var t=document.body||document.documentElement,i=t.style,e=void 0!==i.transition||void 0!==i.WebkitTransition||void 0!==i.MozTransition||void 0!==i.MsTransition||void 0!==i.OTransition;return e}()),t.fn.timeTo=function(){var e,r,d,c,u,h,f,p,m,y,v={},g=t.now();for(r=0;d=arguments[r];++r)0==r&&"string"==typeof d?e=d:"object"==typeof d?"function"==typeof d.getTime?v.timeTo=d:v=t.extend(v,d):"function"==typeof d?v.callback=d:(c=parseInt(d,10),isNaN(c)||(v.seconds=c));if(v.timeTo)v.timeTo.getTime?u=v.timeTo.getTime():"number"==typeof v.timeTo&&(u=v.timeTo),u>g?v.seconds=Math.floor((u-g)/1e3):v.seconds=0;else if(v.time||!v.seconds)if(u=v.time,u||(u=new Date),"object"==typeof u&&u.getTime)v.seconds=u.getHours()*a+60*u.getMinutes()+u.getSeconds(),v.countdown=!1;else if("string"==typeof u){for(f=u.split(":"),p=0,m=1;y=f.pop();)p+=y*m,m*=60;v.seconds=p,v.countdown=!1}return v.countdown!==!1&&v.seconds>s&&"undefined"==typeof v.displayDays?(h=Math.floor(v.seconds/s),v.displayDays=10>h&&1||100>h&&2||3):v.displayDays===!0?v.displayDays=3:v.displayDays&&(v.displayDays=v.displayDays>0?Math.floor(v.displayDays):3),this.each(function(){var s,a,r,d=t(this),c=d.data(),u={};if(c.intervalId&&(clearInterval(c.intervalId),c.intervalId=null),c.vals)"reset"!==e&&t.extend(c,v);else{s=c.opt?c.options:v;for(a in n)t.isArray(n[a])?u[a]=n[a].slice(0):u[a]=n[a];c=t.extend(u,s),c.options=s,c.height=Math.round(100*c.fontSize/93)||c.height,c.width=Math.round(.8*c.fontSize+.13*c.height)||c.width,c.displayHours=!(!c.displayDays&&!c.displayHours),r={fontFamily:c.fontFamily},c.fontSize>0&&(r.fontSize=c.fontSize+"px"),d.addClass("timeTo").addClass("timeTo-"+c.theme).css(r);var h=Math.round(c.height/10),f='<ul style="left:'+h+"px; top:-"+c.height+'px"><li>0</li><li>0</li></ul></div>',p=c.fontSize?' style="width:'+c.width+"px; height:"+c.height+'px;"':' style=""',m='<div class="first"'+p+">"+f,y="<div"+p+">"+f,g="<span>:</span>",T=Math.round(2*c.width+3),I=c.captionSize||c.fontSize&&Math.round(.43*c.fontSize),w=I?"font-size:"+I+"px;":"",S=I?' style="'+w+'"':"",x=(c.displayCaptions?(c.displayHours?'<figure style="max-width:'+T+'px">$1<figcaption'+S+">"+l[c.lang].hours+"</figcaption></figure>"+g:"")+'<figure style="max-width:'+T+'px">$1<figcaption'+S+">"+l[c.lang].min+"</figcaption></figure>"+g+'<figure style="max-width:'+T+'px">$1<figcaption'+S+">"+l[c.lang].sec+"</figcaption></figure>":(c.displayHours?"$1"+g:"")+"$1"+g+"$1").replace(/\$1/g,m+y);if(c.displayDays>0){var M=.4*c.fontSize||n.gap,b=m;for(a=c.displayDays-1;a>0;a--)b+=1===a?y.replace('">',"margin-right:"+Math.round(M)+'px">'):y;x=(c.displayCaptions?'<figure style="width:'+Math.round(c.width*c.displayDays+M+4)+'px">$1<figcaption style="'+w+"padding-right:"+Math.round(M)+'px">'+l[c.lang].days+"</figcaption></figure>":"$1").replace(/\$1/,b)+x}d.html(x)}var k=d.find("div");if(k.length<c.vals.length){var D=c.vals.length-k.length,z=c.vals,C=c.limits;for(c.vals=[],c.limits=[],a=0;a<k.length;a++)c.vals[a]=z[D+a],c.limits[a]=C[D+a];c.iSec=c.vals.length-1,c.iHour=c.vals.length-5}c.sec=c.seconds,d.data(c),e&&o[e]?o[e].call(d,c.seconds):c.start?o.start.call(d,c.seconds):i.call(d,c.seconds)})},jQuery});