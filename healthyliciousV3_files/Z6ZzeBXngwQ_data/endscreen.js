(function(g){var window=this;'use strict';var rjb=function(a,b){a.jb("onAutonavCoundownStarted",b)},j5=function(a,b,c){g.ep(a.element,"ytp-suggestion-set",!!b.videoId);
var d=b.playlistId;c=b.hh(c?c:"mqdefault.jpg");var e=null,f=null;b instanceof g.yP&&(b.lengthText?(e=b.lengthText||null,f=b.Sx||null):b.lengthSeconds&&(e=g.ty(b.lengthSeconds),f=g.ty(b.lengthSeconds,!0)));var h=!!d;d=h&&g.wP(d).type==="RD";var l=b instanceof g.yP?b.isLivePlayback:null,m=b instanceof g.yP?b.isUpcoming:null,n=b.author,p=b.shortViewCount,q=b.publishedTimeText,r=[],t=[];n&&r.push(n);p&&(r.push(p),t.push(p));q&&t.push(q);c={title:b.title,author:n,author_and_views:r.join(" \u2022 "),aria_label:b.ariaLabel||
g.gD("Watch $TITLE",{TITLE:b.title}),duration:e,timestamp:f,url:b.Kl(),is_live:l,is_upcoming:m,is_list:h,is_mix:d,background:c?"background-image: url("+c+")":"",views_and_publish_time:t.join(" \u2022 "),autoplayAlternativeHeader:b.Ft};b instanceof g.xP&&(c.playlist_length=b.playlistLength);a.update(c)},k5=function(a){var b=a.U(),c=b.D;
g.S.call(this,{I:"a",S:"ytp-autonav-suggestion-card",X:{href:"{{url}}",target:c?b.Y:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},V:[{I:"div",Ma:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],X:{style:"{{background}}"},V:[{I:"div",X:{"aria-label":"{{timestamp}}"},Ma:["ytp-autonav-timestamp"],xa:"{{duration}}"},{I:"div",Ma:["ytp-autonav-live-stamp"],xa:"Live"},{I:"div",
Ma:["ytp-autonav-upcoming-stamp"],xa:"Upcoming"},{I:"div",S:"ytp-autonav-list-overlay",V:[{I:"div",S:"ytp-autonav-mix-text",xa:"Mix"},{I:"div",S:"ytp-autonav-mix-icon"}]}]},{I:"div",Ma:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],xa:"{{title}}"},{I:"div",Ma:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],xa:"{{author}}"},{I:"div",Ma:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],xa:"{{views_and_publish_time}}"}]});this.J=a;this.suggestion=
null;this.j=c;this.listen("click",this.onClick);this.listen("keypress",this.onKeyPress)},l5=function(a,b){b=b===void 0?!1:b;
g.S.call(this,{I:"div",S:"ytp-autonav-endscreen-countdown-overlay"});var c=this;this.K=b;this.cancelCommand=this.G=void 0;this.C=0;this.container=new g.S({I:"div",S:"ytp-autonav-endscreen-countdown-container"});g.P(this,this.container);this.container.Ja(this.element);b=a.U();var d=b.D;this.J=a;this.suggestion=null;this.onVideoDataChange("newdata",this.J.getVideoData());this.T(a,"videodatachange",this.onVideoDataChange);this.j=new g.S({I:"div",S:"ytp-autonav-endscreen-upnext-container",X:{"aria-label":"{{aria_label}}",
"data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},V:[{I:"div",S:"ytp-autonav-endscreen-upnext-header"},{I:"div",S:"ytp-autonav-endscreen-upnext-alternative-header",xa:"{{autoplayAlternativeHeader}}"},{I:"a",S:"ytp-autonav-endscreen-link-container",X:{href:"{{url}}",target:d?b.Y:""},V:[{I:"div",S:"ytp-autonav-endscreen-upnext-thumbnail",X:{style:"{{background}}"},V:[{I:"div",X:{"aria-label":"{{timestamp}}"},Ma:["ytp-autonav-timestamp"],
xa:"{{duration}}"},{I:"div",Ma:["ytp-autonav-live-stamp"],xa:"Live"},{I:"div",Ma:["ytp-autonav-upcoming-stamp"],xa:"Upcoming"}]},{I:"div",S:"ytp-autonav-endscreen-video-info",V:[{I:"div",S:"ytp-autonav-endscreen-premium-badge"},{I:"div",S:"ytp-autonav-endscreen-upnext-title",xa:"{{title}}"},{I:"div",S:"ytp-autonav-endscreen-upnext-author",xa:"{{author}}"},{I:"div",S:"ytp-autonav-view-and-date",xa:"{{views_and_publish_time}}"},{I:"div",S:"ytp-autonav-author-and-view",xa:"{{author_and_views}}"}]}]}]});
g.P(this,this.j);this.j.Ja(this.container.element);d||this.T(this.j.Fa("ytp-autonav-endscreen-link-container"),"click",this.lV);this.J.createClientVe(this.container.element,this,115127);this.J.createClientVe(this.j.Fa("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.S({I:"div",S:"ytp-autonav-overlay"});g.P(this,this.overlay);this.overlay.Ja(this.container.element);this.B=new g.S({I:"div",S:"ytp-autonav-endscreen-button-container"});g.P(this,this.B);this.B.Ja(this.container.element);
this.cancelButton=new g.S({I:"button",Ma:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button",b.L("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],X:{"aria-label":"Cancel autoplay"},xa:"Cancel"});g.P(this,this.cancelButton);this.cancelButton.Ja(this.B.element);this.cancelButton.listen("click",this.a5,this);this.J.createClientVe(this.cancelButton.element,this,115129);this.playButton=new g.S({I:"a",Ma:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-play-button",
b.L("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],X:{href:"{{url}}",role:"button","aria-label":"Play next video"},xa:"Play Now"});g.P(this,this.playButton);this.playButton.Ja(this.B.element);this.playButton.listen("click",this.lV,this);this.J.L("web_player_autonav_next_button_renderer")?(this.J.createServerVe(this.playButton.element,this.playButton,!0),(b=this.J.getVideoData())&&sjb(this,b)):this.J.createClientVe(this.playButton.element,this,115130);this.D=new g.To(function(){tjb(c)},
500);
g.P(this,this.D);this.kV();this.T(a,"autonavvisibility",this.kV);this.J.L("web_autonav_color_transition")&&(this.T(a,"autonavchange",this.Z4),this.T(a,"onAutonavCoundownStarted",this.Iaa))},m5=function(a){var b=a.J.uo(!0,a.J.isFullscreen());
g.ep(a.container.element,"ytp-autonav-endscreen-small-mode",a.Qg(b));g.ep(a.container.element,"ytp-autonav-endscreen-is-premium",!!a.suggestion&&!!a.suggestion.QM);g.ep(a.J.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!a.J.Gf());g.ep(a.J.getRootNode(),"countdown-running",a.Pl());g.ep(a.container.element,"ytp-player-content",a.J.Gf());g.$l(a.overlay.element,{width:b.width+"px"});if(!a.Pl()){a.J.Gf()?ujb(a,Math.round(vjb(a)/1E3)):ujb(a);b=!!a.suggestion&&!!a.suggestion.Ft;var c=a.J.Gf()||!b;
g.ep(a.container.element,"ytp-autonav-endscreen-upnext-alternative-header-only",!c&&b);g.ep(a.container.element,"ytp-autonav-endscreen-upnext-no-alternative-header",c&&!b);g.ix(a.B,a.J.Gf());g.ep(a.element,"ytp-enable-w2w-color-transitions",wjb(a))}},tjb=function(a){var b=vjb(a),c=Math,d=c.min;
var e=a.C?Date.now()-a.C:0;c=d.call(c,e,b);ujb(a,Math.ceil((b-c)/1E3));b-c<=500&&a.Pl()?a.select(!0):a.Pl()&&a.D.start()},vjb=function(a){if(a.J.isFullscreen()){var b;
a=(b=a.J.getVideoData())==null?void 0:b.MD;return a===-1||a===void 0?8E3:a}return a.J.Ut()>=0?a.J.Ut():g.dC(a.J.U().experiments,"autoplay_time")||1E4},sjb=function(a,b){a.J.L("web_player_autonav_next_button_renderer");
b=b.J4;a.G=b==null?void 0:b.navigationEndpoint;b=b==null?void 0:b.trackingParams;a.playButton&&b&&a.J.setTrackingParams(a.playButton.element,b)},wjb=function(a){var b;
return!((b=a.J.getVideoData())==null||!b.watchToWatchTransitionRenderer)},ujb=function(a,b){b=b===void 0?-1:b;
a=a.j.Fa("ytp-autonav-endscreen-upnext-header");g.le(a);if(b>=0){b=String(b);var c="Up next in $SECONDS".match(RegExp("\\$SECONDS","gi"))[0],d="Up next in $SECONDS".indexOf(c);if(d>=0){a.appendChild(g.ie("Up next in $SECONDS".slice(0,d)));var e=g.he("span");g.Zo(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.pe(e,b);a.appendChild(e);a.appendChild(g.ie("Up next in $SECONDS".slice(d+c.length)));return}}g.pe(a,"Up next")},n5=function(a,b){g.S.call(this,{I:"div",
Ma:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},o5=function(a){g.S.call(this,{I:"div",
Ma:["ytp-upnext","ytp-player-content"],X:{"aria-label":"{{aria_label}}"},V:[{I:"div",S:"ytp-cued-thumbnail-overlay-image",X:{style:"{{background}}"}},{I:"span",S:"ytp-upnext-top",V:[{I:"span",S:"ytp-upnext-header",xa:"Up Next"},{I:"span",S:"ytp-upnext-title",xa:"{{title}}"},{I:"span",S:"ytp-upnext-author",xa:"{{author}}"}]},{I:"a",S:"ytp-upnext-autoplay-icon",X:{role:"button",href:"{{url}}","aria-label":"Play next video"},V:[{I:"svg",X:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},
V:[{I:"circle",S:"ytp-svg-autoplay-circle",X:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{I:"circle",S:"ytp-svg-autoplay-ring",X:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{I:"path",S:"ytp-svg-fill",X:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{I:"span",S:"ytp-upnext-bottom",V:[{I:"span",S:"ytp-upnext-cancel"},{I:"span",S:"ytp-upnext-paused",
xa:"Autoplay is paused"}]}]});this.api=a;this.cancelButton=null;this.G=this.Fa("ytp-svg-autoplay-ring");this.C=this.notification=this.j=this.suggestion=null;this.D=new g.To(this.uJ,5E3,this);this.B=0;var b=this.Fa("ytp-upnext-cancel");this.cancelButton=new g.S({I:"button",Ma:["ytp-upnext-cancel-button","ytp-button"],X:{tabindex:"0","aria-label":"Cancel autoplay"},xa:"Cancel"});g.P(this,this.cancelButton);this.cancelButton.listen("click",this.b5,this);this.cancelButton.Ja(b);this.cancelButton&&this.api.createClientVe(this.cancelButton.element,
this,115129);g.P(this,this.D);this.api.createClientVe(this.element,this,18788);b=this.Fa("ytp-upnext-autoplay-icon");this.T(b,"click",this.c5);this.api.createClientVe(b,this,115130);this.mV();this.T(a,"autonavvisibility",this.mV);this.T(a,"mdxnowautoplaying",this.xba);this.T(a,"mdxautoplaycanceled",this.yba);g.ep(this.element,"ytp-upnext-mobile",this.api.U().B)},xjb=function(a,b){if(b)return b;
if(a.api.isFullscreen()){var c;a=(c=a.api.getVideoData())==null?void 0:c.MD;return a===-1||a===void 0?8E3:a}return a.api.Ut()>=0?a.api.Ut():g.dC(a.api.U().experiments,"autoplay_time")||1E4},yjb=function(a,b){b=xjb(a,b);
var c=Math,d=c.min;var e=(0,g.wt)()-a.B;c=d.call(c,e,b);b=b===0?1:Math.min(c/b,1);a.G.setAttribute("stroke-dashoffset",""+-211*(b+1));b>=1&&a.Pl()&&a.api.getPresentingPlayerType()!==3?a.select(!0):a.Pl()&&a.j.start()},p5=function(a){n5.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=null;this.table=new g.S({I:"div",S:"ytp-suggestion-panel",V:[{I:"div",Ma:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],xa:"More videos"}]});this.N=new g.S({I:"div",S:"ytp-suggestions-container"});this.videos=[];this.C=null;this.G=this.K=!1;this.B=new l5(this.player);g.P(this,this.B);this.B.Ja(this.element);a.getVideoData().Tf?this.j=this.B:(this.j=new o5(a),g.BR(this.player,this.j.element,4),g.P(this,this.j));this.overlay=new g.S({I:"div",
S:"ytp-autonav-overlay-cancelled-state"});g.P(this,this.overlay);this.overlay.Ja(this.element);this.D=new g.tE(this);g.P(this,this.D);g.P(this,this.table);this.table.Ja(this.element);this.table.show();g.P(this,this.N);this.N.Ja(this.table.element);this.hide()},q5=function(a){var b=a.Gf();
b!==a.G&&(a.G=b,a.player.publish("autonavvisibility"),a.G?(a.B!==a.j&&a.B.hide(),a.table.hide()):(a.B!==a.j&&a.B.show(),a.table.show()))},r5=function(a,b){g.S.call(this,{I:"button",
Ma:["ytp-watch-on-youtube-button","ytp-button"],xa:"{{content}}"});this.J=a;this.buttonType=this.buttonType=b;this.I2();this.buttonType===2&&g.ap(this.element,"ytp-continue-watching-button");this.listen("click",this.onClick);this.listen("videodatachange",this.I2);g.ix(this,!0)},s5=function(a,b){n5.call(this,a,"embeds-lite-endscreen");
this.J=a;this.Me=b;this.J.createClientVe(this.element,this,156943);this.watchButton=new r5(a,2);g.P(this,this.watchButton);this.watchButton.Ja(this.element);this.hide()},zjb=function(a){n5.call(this,a,"subscribecard-endscreen");
this.j=new g.S({I:"div",S:"ytp-subscribe-card",V:[{I:"img",S:"ytp-author-image",X:{src:"{{profilePicture}}"}},{I:"div",S:"ytp-subscribe-card-right",V:[{I:"div",S:"ytp-author-name",xa:"{{author}}"},{I:"div",S:"html5-subscribe-button-container"}]}]});g.P(this,this.j);this.j.Ja(this.element);var b=a.getVideoData();this.subscribeButton=new g.yY("Subscribe",null,"Unsubscribe",null,!0,!1,b.im,b.subscribed,"trailer-endscreen",null,a,!1);g.P(this,this.subscribeButton);this.subscribeButton.Ja(this.j.Fa("html5-subscribe-button-container"));
this.T(a,"videodatachange",this.Ta);this.Ta();this.hide()},t5=function(a){var b=a.U(),c=g.pE||g.AO?{style:"will-change: opacity"}:void 0,d=b.D,e=["ytp-videowall-still"];
b.B&&e.push("ytp-videowall-show-text");g.S.call(this,{I:"a",Ma:e,X:{href:"{{url}}",target:d?b.Y:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},V:[{I:"div",S:"ytp-videowall-still-image",X:{style:"{{background}}"}},{I:"span",S:"ytp-videowall-still-info",X:{"aria-hidden":"true"},V:[{I:"span",S:"ytp-videowall-still-info-bg",V:[{I:"span",S:"ytp-videowall-still-info-content",X:c,V:[{I:"span",S:"ytp-videowall-still-info-title",xa:"{{title}}"},
{I:"span",S:"ytp-videowall-still-info-author",xa:"{{author_and_views}}"},{I:"span",S:"ytp-videowall-still-info-live",xa:"Live"},{I:"span",S:"ytp-videowall-still-info-duration",xa:"{{duration}}"}]}]}]},{I:"span",Ma:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],X:{"aria-hidden":"true"},V:[{I:"span",S:"ytp-videowall-still-listlabel-icon"},"Playlist",{I:"span",S:"ytp-videowall-still-listlabel-length",V:[" (",{I:"span",xa:"{{playlist_length}}"},")"]}]},{I:"span",Ma:["ytp-videowall-still-listlabel-mix",
"ytp-videowall-still-listlabel"],X:{"aria-hidden":"true"},V:[{I:"span",S:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{I:"span",S:"ytp-videowall-still-listlabel-length",xa:" (50+)"}]}]});this.suggestion=null;this.B=d;this.api=a;this.j=new g.tE(this);g.P(this,this.j);this.listen("click",this.onClick);this.listen("keypress",this.onKeyPress);this.j.T(a,"videodatachange",this.onVideoDataChange);a.createServerVe(this.element,this);this.onVideoDataChange()},u5=function(a){n5.call(this,a,"videowall-endscreen");
var b=this;this.J=a;this.C=0;this.stills=[];this.D=this.videoData=null;this.G=this.N=!1;this.Y=null;this.B=new g.tE(this);g.P(this,this.B);this.K=new g.To(function(){g.ap(b.element,"ytp-show-tiles")},0);
g.P(this,this.K);var c=new g.S({I:"button",Ma:["ytp-button","ytp-endscreen-previous"],X:{"aria-label":"Previous"},V:[g.px()]});g.P(this,c);c.Ja(this.element);c.listen("click",this.g5,this);this.table=new g.fx({I:"div",S:"ytp-endscreen-content"});g.P(this,this.table);this.table.Ja(this.element);c=new g.S({I:"button",Ma:["ytp-button","ytp-endscreen-next"],X:{"aria-label":"Next"},V:[g.qx()]});g.P(this,c);c.Ja(this.element);c.listen("click",this.f5,this);a.getVideoData().Tf?this.j=new l5(a,!0):this.j=
new o5(a);g.P(this,this.j);g.BR(this.player,this.j.element,4);a.createClientVe(this.element,this,158789);this.hide()},v5=function(a){return g.CR(a.player)&&a.wE()&&!a.D},w5=function(a){var b=a.Gf();
b!==a.N&&(a.N=b,a.player.publish("autonavvisibility"))},x5=function(a){n5.call(this,a,"watch-again-on-youtube-endscreen");
this.watchButton=new r5(a,1);g.P(this,this.watchButton);this.watchButton.Ja(this.element);g.g9a(a)&&(this.j=new g.b1(a),g.P(this,this.j),this.B=new g.S({I:"div",Ma:["ytp-watch-again-on-youtube-endscreen-more-videos-container"],X:{tabIndex:"-1"},V:[this.j]}),g.P(this,this.B),this.j.Ja(this.B.element),this.B.Ja(this.element));a.createClientVe(this.element,this,156914);this.hide()},Djb=function(a){g.SX.call(this,a);
var b=this;this.endScreen=null;this.B=this.j=this.C=this.D=!1;this.listeners=new g.tE(this);g.P(this,this.listeners);var c=a.U(),d=a.getVideoData();d=d&&d.limitedPlaybackDurationInSeconds!==0;g.ds(g.LO(c))&&d&&!g.xR(a)?(this.B=!0,this.endScreen=new s5(a,g.iR(a))):a.hd()?this.endScreen=new x5(a):Ajb(a)?(this.D=!0,Bjb(this),this.j?this.endScreen=new p5(a):this.endScreen=new u5(a)):c.Jg?this.endScreen=new zjb(a):this.endScreen=new n5(a);g.P(this,this.endScreen);g.BR(a,this.endScreen.element,4);Cjb(this);
this.listeners.T(a,"videodatachange",this.onVideoDataChange,this);this.listeners.T(a,g.WC("endscreen"),function(e){b.onCueRangeEnter(e)});
this.listeners.T(a,g.XC("endscreen"),function(e){b.onCueRangeExit(e)})},Bjb=function(a){var b=a.player.getVideoData();
if(!b||a.j===b.mm&&a.C===b.Tf)return!1;a.j=b.mm;a.C=b.Tf;return!0},Ajb=function(a){a=a.U();
return a.Dd&&!a.Jg},Cjb=function(a){a.player.rf("endscreen");
var b=a.player.getVideoData();b=new g.UC(Math.max((b.lengthSeconds-10)*1E3,0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.UC(0x8000000000000,0x8000000000000,{id:"load",priority:8,namespace:"endscreen"});a.player.kf([b,c])};
g.tR.prototype.Ut=g.ba(14,function(){return this.app.Ut()});
g.E_.prototype.Ut=g.ba(13,function(){return this.getVideoData().u_});
g.pR.prototype.Os=g.ba(12,function(a){this.Li().Os(a)});
g.NY.prototype.Os=g.ba(11,function(a){this.j!==a&&(this.j=a,this.Ta())});
g.TZ.prototype.Os=g.ba(10,function(a){this.overflowButton&&this.overflowButton.Os(a)});
g.pR.prototype.Ps=g.ba(9,function(a){this.Li().Ps(a)});
g.SY.prototype.Ps=g.ba(8,function(a){this.j!==a&&(this.j=a,this.Ta())});
g.TZ.prototype.Ps=g.ba(7,function(a){this.shareButton&&this.shareButton.Ps(a)});
g.pR.prototype.yC=g.ba(6,function(a){this.Li().yC(a)});
g.rY.prototype.yC=g.ba(5,function(a){this.SS!==a&&(this.SS=a,this.er())});
g.pR.prototype.xC=g.ba(4,function(a){this.Li().xC(a)});
g.TZ.prototype.xC=g.ba(3,function(a){this.RS!==a&&(this.RS=a,this.Zq())});g.z(k5,g.S);k5.prototype.select=function(){this.J.yp(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.aF||void 0)&&this.J.logClick(this.element)};
k5.prototype.onClick=function(a){g.vS(a,this.J,this.j,this.suggestion.sessionData||void 0)&&this.select()};
k5.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:a.defaultPrevented||(this.select(),a.preventDefault())}};g.z(l5,g.S);g.k=l5.prototype;g.k.BI=function(a){this.suggestion!==a&&(this.suggestion=a,j5(this.j,a),this.playButton.updateValue("url",this.suggestion.Kl()),m5(this))};
g.k.Pl=function(){return this.C>0};
g.k.HC=function(){this.Pl()||(this.C=Date.now(),tjb(this),rjb(this.J,vjb(this)),g.ep(this.J.getRootNode(),"countdown-running",this.Pl()))};
g.k.Dy=function(){this.Tq();tjb(this);var a=this.j.Fa("ytp-autonav-endscreen-upnext-header");a&&g.pe(a,"Up next")};
g.k.Tq=function(){this.Pl()&&(this.D.stop(),this.C=0)};
g.k.select=function(a){this.J.nextVideo(!1,a===void 0?!1:a);this.Tq()};
g.k.lV=function(a){g.vS(a,this.J)&&(a.currentTarget===this.playButton.element?this.J.logClick(this.playButton.element):a.currentTarget===this.j.Fa("ytp-autonav-endscreen-link-container")&&(a=this.j.Fa("ytp-autonav-endscreen-link-container"),this.J.logVisibility(a,!0),this.J.logClick(a)),this.J.L("web_player_autonav_next_button_renderer")&&this.G?(this.J.jb("innertubeCommand",this.G),this.Tq()):this.select())};
g.k.a5=function(){this.J.logClick(this.cancelButton.element);g.vR(this.J,!0);this.cancelCommand&&this.J.jb("innertubeCommand",this.cancelCommand)};
g.k.onVideoDataChange=function(a,b){this.J.L("web_player_autonav_next_button_renderer")&&sjb(this,b);var c;this.cancelCommand=(c=b.E4)==null?void 0:c.command};
g.k.Iaa=function(a){if(wjb(this)){var b=this.J.getVideoData().watchToWatchTransitionRenderer,c=b==null?void 0:b.fromColorPaletteDark;b=b==null?void 0:b.toColorPaletteDark;if(c&&b){var d=this.element;d.style.setProperty("--w2w-start-background-color",g.Fy(c.surgeColor));d.style.setProperty("--w2w-start-primary-text-color",g.Fy(c.primaryTitleColor));d.style.setProperty("--w2w-start-secondary-text-color",g.Fy(c.secondaryTitleColor));d.style.setProperty("--w2w-end-background-color",g.Fy(b.surgeColor));
d.style.setProperty("--w2w-end-primary-text-color",g.Fy(b.primaryTitleColor));d.style.setProperty("--w2w-end-secondary-text-color",g.Fy(b.secondaryTitleColor));d.style.setProperty("--w2w-animation-duration",a+"ms")}g.ep(this.element,"ytp-w2w-animate",!0)}};
g.k.Z4=function(a){this.J.L("web_autonav_color_transition")&&a!==2&&g.ep(this.element,"ytp-w2w-animate",!1)};
g.k.kV=function(){var a=this.J.Gf();this.K&&this.Gb!==a&&g.ix(this,a);m5(this);this.J.logVisibility(this.container.element,a);this.J.logVisibility(this.cancelButton.element,a);this.J.logVisibility(this.j.Fa("ytp-autonav-endscreen-link-container"),a);this.J.logVisibility(this.playButton.element,a)};
g.k.Qg=function(a){return a.width<400||a.height<459};g.z(n5,g.S);g.k=n5.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.wE=function(){return!1};
g.k.Gf=function(){return!1};
g.k.e_=function(){return!1};g.z(o5,g.S);g.k=o5.prototype;g.k.uJ=function(){this.notification&&(this.D.stop(),this.Mc(this.C),this.C=null,this.notification.close(),this.notification=null)};
g.k.BI=function(a){this.suggestion=a;j5(this,a,"hqdefault.jpg")};
g.k.mV=function(){g.ix(this,this.api.Gf());this.api.logVisibility(this.element,this.api.Gf());this.api.logVisibility(this.Fa("ytp-upnext-autoplay-icon"),this.api.Gf());this.cancelButton&&this.api.logVisibility(this.cancelButton.element,this.api.Gf())};
g.k.Gba=function(){window.focus();this.uJ()};
g.k.HC=function(a){var b=this;this.Pl()||(g.fv("a11y-announce","Up Next "+this.suggestion.title),this.B=(0,g.wt)(),this.j=new g.To(function(){yjb(b,a)},25),yjb(this,a),rjb(this.api,xjb(this,a)));
g.cp(this.element,"ytp-upnext-autoplay-paused")};
g.k.hide=function(){g.S.prototype.hide.call(this)};
g.k.Pl=function(){return!!this.j};
g.k.Dy=function(){this.Tq();this.B=(0,g.wt)();yjb(this);g.ap(this.element,"ytp-upnext-autoplay-paused")};
g.k.Tq=function(){this.Pl()&&(this.j.dispose(),this.j=null)};
g.k.select=function(a){a=a===void 0?!1:a;if(this.api.U().L("autonav_notifications")&&a&&window.Notification&&typeof document.hasFocus==="function"){var b=Notification.permission;b==="default"?Notification.requestPermission():b!=="granted"||document.hasFocus()||(this.uJ(),this.notification=new Notification("Up Next",{body:this.suggestion.title,icon:this.suggestion.hh()}),this.C=this.T(this.notification,"click",this.Gba),this.D.start())}this.Tq();this.api.nextVideo(!1,a)};
g.k.c5=function(a){!g.oe(this.cancelButton.element,a.target)&&g.vS(a,this.api)&&(this.api.Gf()&&this.api.logClick(this.Fa("ytp-upnext-autoplay-icon")),this.select())};
g.k.b5=function(){this.api.Gf()&&this.cancelButton&&this.api.logClick(this.cancelButton.element);g.vR(this.api,!0)};
g.k.xba=function(a){this.api.getPresentingPlayerType();this.show();this.HC(a)};
g.k.yba=function(){this.api.getPresentingPlayerType();this.Tq();this.hide()};
g.k.ya=function(){this.Tq();this.uJ();g.S.prototype.ya.call(this)};g.z(p5,n5);g.k=p5.prototype;g.k.create=function(){n5.prototype.create.call(this);this.D.T(this.player,"appresize",this.tD);this.D.T(this.player,"onVideoAreaChange",this.tD);this.D.T(this.player,"videodatachange",this.onVideoDataChange);this.D.T(this.player,"autonavchange",this.nV);this.D.T(this.player,"onAutonavCancelled",this.d5);this.onVideoDataChange()};
g.k.show=function(){n5.prototype.show.call(this);(this.K||this.C&&this.C!==this.videoData.clientPlaybackNonce)&&g.vR(this.player,!1);g.CR(this.player)&&this.wE()&&!this.C?(q5(this),this.videoData.autonavState===2?this.player.getVisibilityState()===3?this.j.select(!0):this.j.HC():this.videoData.autonavState===3&&this.j.Dy()):(g.vR(this.player,!0),q5(this));this.tD()};
g.k.hide=function(){n5.prototype.hide.call(this);this.j.Dy();q5(this)};
g.k.tD=function(){var a=this.player.uo(!0,this.player.isFullscreen());q5(this);m5(this.B);g.ep(this.element,"ytp-autonav-cancelled-small-mode",this.Qg(a));g.ep(this.element,"ytp-autonav-cancelled-tiny-mode",this.UK(a));g.ep(this.element,"ytp-autonav-cancelled-mini-mode",a.width<=400||a.height<=360);this.overlay&&g.$l(this.overlay.element,{width:a.width+"px"});if(!this.G)for(a=0;a<this.videos.length;a++)g.ep(this.videos[a].element,"ytp-suggestion-card-with-margin",a%2===1)};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((a=this.videoData.suggestions)&&a.length||this.player.L("web_player_autonav_empty_suggestions_fix")){var b=g.iQ(this.videoData);b&&(this.j.BI(b),this.j!==this.B&&this.B.BI(b))}if(a&&a.length)for(b=0;b<Ejb.length;++b){var c=Ejb[b];if(a&&a[c]){this.videos[b]=new k5(this.player);var d=this.videos[b];c=a[c];d.suggestion!==c&&(d.suggestion=c,j5(d,c));g.P(this,this.videos[b]);this.videos[b].Ja(this.N.element)}}this.tD()}};
g.k.nV=function(a){a===1?(this.K=!1,this.C=this.videoData.clientPlaybackNonce,this.j.Tq(),this.Gb&&this.tD()):(this.K=!0,this.Gf()&&(a===2?this.j.HC():a===3&&this.j.Dy()))};
g.k.d5=function(a){a?this.nV(1):(this.C=null,this.K=!1)};
g.k.wE=function(){return this.videoData.autonavState!==1};
g.k.Qg=function(a){return(a.width<910||a.height<459)&&!this.UK(a)&&!(a.width<=400||a.height<=360)};
g.k.UK=function(a){return a.width<800&&!(a.width<=400||a.height<=360)};
g.k.Gf=function(){return this.Gb&&g.CR(this.player)&&this.wE()&&!this.C};
var Ejb=[1,3,2,4];g.z(r5,g.S);g.k=r5.prototype;g.k.I2=function(){switch(this.buttonType){case 1:var a="Watch again on YouTube";var b=156915;break;case 2:a="Continue watching on YouTube";b=156942;break;default:a="Continue watching on YouTube",b=156942}this.update({content:a});this.J.hasVe(this.element)&&this.J.destroyVe(this.element);this.J.createClientVe(this.element,this,b)};
g.k.onClick=function(a){this.J.L("web_player_log_click_before_generating_ve_conversion_params")&&this.J.logClick(this.element);g.wS(this.getVideoUrl(),this.J,a);this.J.L("web_player_log_click_before_generating_ve_conversion_params")||this.J.logClick(this.element)};
g.k.getVideoUrl=function(){var a=!0;switch(this.buttonType){case 1:a=!0;break;case 2:a=!1}a=this.J.getVideoUrl(a,!1,!1,!0);var b=this.J.U();if(g.CO(b)){var c={};g.CO(b)&&g.dR(this.J,"addEmbedsConversionTrackingParams",[c]);a=g.Li(a,c)}return a};
g.k.logVisibility=function(){this.J.logVisibility(this.element,this.Gb&&this.Z)};
g.k.show=function(){g.S.prototype.show.call(this);this.logVisibility()};
g.k.hide=function(){g.S.prototype.hide.call(this);this.logVisibility()};
g.k.Lc=function(a){g.S.prototype.Lc.call(this,a);this.logVisibility()};g.z(s5,n5);s5.prototype.show=function(){this.player.getPlayerState()!==3&&(n5.prototype.show.call(this),this.Me.xC(!0),this.Me.Ps(!0),this.J.U().We||this.Me.Os(!0),this.J.logVisibility(this.element,!0),this.watchButton.Lc(!0))};
s5.prototype.hide=function(){n5.prototype.hide.call(this);this.Me.xC(!1);this.Me.Ps(!1);this.Me.Os(!1);this.J.logVisibility(this.element,!1);this.watchButton.Lc(!1)};g.z(zjb,n5);zjb.prototype.Ta=function(){var a=this.player.getVideoData();this.j.update({profilePicture:a.profilePicture,author:a.author});this.subscribeButton.channelId=a.im;var b=this.subscribeButton;a.subscribed?b.j():b.B()};g.z(t5,g.S);t5.prototype.select=function(){this.api.yp(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.aF||void 0)&&this.api.logClick(this.element)};
t5.prototype.onClick=function(a){if(g.CO(this.api.U())&&this.api.L("web_player_log_click_before_generating_ve_conversion_params")){this.api.logClick(this.element);var b=this.suggestion.Kl(),c={};g.yR(this.api,c);b=g.Li(b,c);g.wS(b,this.api,a)}else g.vS(a,this.api,this.B,this.suggestion.sessionData||void 0)&&this.select()};
t5.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:a.defaultPrevented||(this.select(),a.preventDefault())}};
t5.prototype.onVideoDataChange=function(){var a=this.api.getVideoData(),b=this.api.U();this.B=a.If?!1:b.D};g.z(u5,n5);g.k=u5.prototype;g.k.create=function(){n5.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.videoData=a);this.rr();this.B.T(this.player,"appresize",this.rr);this.B.T(this.player,"onVideoAreaChange",this.rr);this.B.T(this.player,"videodatachange",this.onVideoDataChange);this.B.T(this.player,"autonavchange",this.yN);this.B.T(this.player,"onAutonavCancelled",this.e5);a=this.videoData.autonavState;a!==this.Y&&this.yN(a);this.B.T(this.element,"transitionend",this.Uca)};
g.k.destroy=function(){g.xs(this.B);g.jb(this.stills);this.stills=[];n5.prototype.destroy.call(this);g.cp(this.element,"ytp-show-tiles");this.K.stop();this.Y=this.videoData.autonavState};
g.k.wE=function(){return this.videoData.autonavState!==1};
g.k.show=function(){var a=this.Gb;n5.prototype.show.call(this);g.cp(this.element,"ytp-show-tiles");this.player.U().B?g.Vo(this.K):this.K.start();(this.G||this.D&&this.D!==this.videoData.clientPlaybackNonce)&&g.vR(this.player,!1);v5(this)?(w5(this),this.videoData.autonavState===2?this.player.getVisibilityState()===3?this.j.select(!0):this.j.HC():this.videoData.autonavState===3&&this.j.Dy()):(g.vR(this.player,!0),w5(this));a!==this.Gb&&this.player.logVisibility(this.element,!0)};
g.k.hide=function(){var a=this.Gb;n5.prototype.hide.call(this);this.j.Dy();w5(this);a!==this.Gb&&this.player.logVisibility(this.element,!1)};
g.k.Uca=function(a){a.target===this.element&&this.rr()};
g.k.rr=function(){var a,b,c,d;var e=((a=this.videoData)==null?0:(b=a.suggestions)==null?0:b.length)?(c=this.videoData)==null?void 0:c.suggestions:[(d=this.videoData)==null?void 0:g.iQ(d)];if(e.length){g.ap(this.element,"ytp-endscreen-paginate");var f=this.J.uo(!0,this.J.isFullscreen());if(a=g.iR(this.J))a=a.Kh()?48:32,f.width-=a*2;var h=f.width/f.height;d=96/54;b=a=2;var l=Math.max(f.width/96,2),m=Math.max(f.height/54,2);c=e.length;var n=Math.pow(2,2);var p=c*n+(Math.pow(2,2)-n);p+=Math.pow(2,2)-
n;for(p-=n;p>0&&(a<l||b<m);){var q=a/2,r=b/2,t=a<=l-2&&p>=r*n,u=b<=m-2&&p>=q*n;if((q+1)/r*d/h>h/(q/(r+1)*d)&&u)p-=q*n,b+=2;else if(t)p-=r*n,a+=2;else if(u)p-=q*n,b+=2;else break}d=!1;p>=3*n&&c*n-p<=6&&(b>=4||a>=4)&&(d=!0);n=a*96;p=b*54;h=n/p<h?f.height/p:f.width/n;h=Math.min(h,2);n=Math.floor(Math.min(f.width,n*h));p=Math.floor(Math.min(f.height,p*h));f=this.table.element;f.ariaLive="polite";g.qm(f,n,p);g.$l(f,{marginLeft:n/-2+"px",marginTop:p/-2+"px"});this.j.BI(g.iQ(this.videoData));this.j instanceof
l5&&m5(this.j);g.ep(this.element,"ytp-endscreen-takeover",v5(this));w5(this);n+=4;p+=4;h=0;f.ariaBusy="true";for(l=0;l<a;l++)for(m=0;m<b;m++)if(q=h,t=0,d&&l>=a-2&&m>=b-2?t=1:m%2===0&&l%2===0&&(m<2&&l<2?m===0&&l===0&&(t=2):t=2),q=g.Dd(q+this.C,c),t!==0){r=this.stills[h];r||(r=new t5(this.player),this.stills[h]=r,f.appendChild(r.element));u=Math.floor(p*m/b);var y=Math.floor(n*l/a),A=Math.floor(p*(m+t)/b)-u-4,C=Math.floor(n*(l+t)/a)-y-4;g.gm(r.element,y,u);g.qm(r.element,C,A);g.$l(r.element,"transitionDelay",
(m+l)/20+"s");g.ep(r.element,"ytp-videowall-still-mini",t===1);g.ep(r.element,"ytp-videowall-still-large",t>2);t=Math.max(C,A);g.ep(r.element,"ytp-videowall-still-round-large",t>=256);g.ep(r.element,"ytp-videowall-still-round-medium",t>96&&t<256);g.ep(r.element,"ytp-videowall-still-round-small",t<=96);q=e[q];r.suggestion!==q&&(r.suggestion=q,t=r.api.U(),u=g.$o(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",j5(r,q,u),g.CO(t)&&!r.api.L("web_player_log_click_before_generating_ve_conversion_params")&&
(t=q.Kl(),u={},g.dR(r.api,"addEmbedsConversionTrackingParams",[u]),t=g.Li(t,u),r.updateValue("url",t)),(q=(q=q.sessionData)&&q.itct)&&r.api.setTrackingParams(r.element,q));h++}f.ariaBusy="false";g.ep(this.element,"ytp-endscreen-paginate",h<c);for(e=this.stills.length-1;e>=h;e--)a=this.stills[e],g.ne(a.element),g.ib(a);this.stills.length=h}};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData(1);this.videoData!==a&&(a!=null&&g.iQ(a)?(this.C=0,this.videoData=a,this.rr()):this.player.oa("missg",{vid:(a==null?void 0:a.videoId)||"",cpn:(a==null?void 0:a.clientPlaybackNonce)||""}))};
g.k.f5=function(){this.C+=this.stills.length;this.rr()};
g.k.g5=function(){this.C-=this.stills.length;this.rr()};
g.k.e_=function(){return this.j.Pl()};
g.k.yN=function(a){a===1?(this.G=!1,this.D=this.videoData.clientPlaybackNonce,this.j.Tq(),this.Gb&&this.rr()):(this.G=!0,this.Gb&&v5(this)&&(a===2?this.j.HC():a===3&&this.j.Dy()))};
g.k.e5=function(a){if(a){for(a=0;a<this.stills.length;a++)this.J.logVisibility(this.stills[a].element,!0);this.yN(1)}else this.D=null,this.G=!1;this.rr()};
g.k.Gf=function(){return this.Gb&&v5(this)};g.z(x5,n5);x5.prototype.show=function(){if(this.player.getPlayerState()!==3){n5.prototype.show.call(this);var a=this.B;if(a){var b=this.j.suggestionData.length>0;g.ep(this.element,"ytp-shorts-branded-ui",b);b?a.show():a.hide()}var c;(c=g.iR(this.player))==null||c.yC(!0);this.player.logVisibility(this.element,!0);this.watchButton.Lc(!0)}};
x5.prototype.hide=function(){n5.prototype.hide.call(this);var a;(a=g.iR(this.player))==null||a.yC(!1);this.player.logVisibility(this.element,!1);this.watchButton.Lc(!1)};g.z(Djb,g.SX);g.k=Djb.prototype;g.k.zv=function(){var a=this.player.getVideoData(),b=a.mutedAutoplay;if((this.player.hd()||this.B)&&!b)return!0;var c;var d=!!((a==null?0:g.iQ(a))||(a==null?0:(c=a.suggestions)==null?0:c.length));d=!Ajb(this.player)||d;a=a.Pj;c=this.player.mF();return d&&!a&&!c&&!b};
g.k.Gf=function(){return this.endScreen.Gf()};
g.k.x$=function(){return this.Gf()?this.endScreen.e_():!1};
g.k.ya=function(){this.player.rf("endscreen");g.SX.prototype.ya.call(this)};
g.k.load=function(){var a=this.player.getVideoData();var b=a.transitionEndpointAtEndOfStream;if(b&&b.videoId){var c=this.player.Cb().Fe.get("heartbeat"),d=g.iQ(a);!d||b.videoId!==d.videoId||a.LW?(this.player.yp(b.videoId,void 0,void 0,!0,!0,b),c&&c.cL("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0):a=!1}else a=!1;a||(g.SX.prototype.load.call(this),this.endScreen.show())};
g.k.unload=function(){g.SX.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.onCueRangeEnter=function(a){this.zv()&&(this.endScreen.created||this.endScreen.create(),a.getId()==="load"&&this.load())};
g.k.onCueRangeExit=function(a){a.getId()==="load"&&this.loaded&&this.unload()};
g.k.onVideoDataChange=function(){Cjb(this);this.D&&Bjb(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.j?this.endScreen=new p5(this.player):this.endScreen=new u5(this.player),g.P(this,this.endScreen),g.BR(this.player,this.endScreen.element,4))};g.RX("endscreen",Djb);})(_yt_player);
