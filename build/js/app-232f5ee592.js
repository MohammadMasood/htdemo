/**
 * htdemo - htdemo Project Generated from HotTowel Angular
 * @authors 
 * @version v0.0.0
 * @link 
 * @license 
 */
!function(){"use strict";angular.module("app",["app.core","app.widgets","app.admin","app.dashboard","app.layout"])}(),function(){"use strict";angular.module("app.admin",["app.core","app.widgets"])}(),function(){"use strict";angular.module("blocks.exception",["blocks.logger"])}(),function(){"use strict";angular.module("blocks.logger",[])}(),function(){"use strict";angular.module("blocks.router",["ui.router","blocks.logger"])}(),function(){"use strict";angular.module("app.core",["ngAnimate","ngSanitize","blocks.exception","blocks.logger","blocks.router","ui.router","ngplus"])}(),function(){"use strict";angular.module("app.dashboard",["app.core","app.widgets"])}(),function(){"use strict";angular.module("app.layout",["app.core","ui.bootstrap.collapse"])}(),function(){"use strict";angular.module("app.widgets",[])}(),function(){"use strict";function t(t){function e(){t.info("Activated Admin View")}var a=this;a.title="Admin",e()}angular.module("app.admin").controller("AdminController",t),t.$inject=["logger"]}(),function(){"use strict";function t(t){t.configureStates(e())}function e(){return[{state:"admin",config:{url:"/admin",templateUrl:"app/admin/admin.html",controller:"AdminController",controllerAs:"vm",title:"Admin",settings:{nav:2,content:'<i class="fa fa-lock"></i> Admin'}}}]}angular.module("app.admin").run(t),t.$inject=["routerHelper"]}(),function(){"use strict";function t(){this.config={appErrorPrefix:void 0},this.configure=function(t){this.config.appErrorPrefix=t},this.$get=function(){return{config:this.config}}}function e(t){t.decorator("$exceptionHandler",a)}function a(t,e,a){return function(n,i){var o=e.config.appErrorPrefix||"",r={exception:n,cause:i};n.message=o+n.message,t(n,i),a.error(n.message,r)}}angular.module("blocks.exception").provider("exceptionHandler",t).config(e),e.$inject=["$provide"],a.$inject=["$delegate","exceptionHandler","logger"]}(),function(){"use strict";function t(t,e){function a(a){return function(n){var i,o;return n.data&&n.data.description&&(i="\n"+n.data.description,o=a+i),n.data.description=o,e.error(o),t.reject(n)}}var n={catcher:a};return n}t.$inject=["$q","logger"],angular.module("blocks.exception").factory("exception",t)}(),function(){"use strict";function t(t,e){function a(a,n,i){e.error(a,i),t.error("Error: "+a,n)}function n(a,n,i){e.info(a,i),t.info("Info: "+a,n)}function i(a,n,i){e.success(a,i),t.info("Success: "+a,n)}function o(a,n,i){e.warning(a,i),t.warn("Warning: "+a,n)}var r={showToasts:!0,error:a,info:n,success:i,warning:o,log:t.log};return r}angular.module("blocks.logger").factory("logger",t),t.$inject=["$log","toastr"]}(),function(){"use strict";function t(t,e,a){function n(t,n,o,r){function s(t,n){t.forEach(function(t){t.config.resolve=angular.extend(t.config.resolve||{},i.resolveAlways),e.state(t.state,t.config)}),n&&!g&&(g=!0,a.otherwise(n))}function l(){n.$on("$stateChangeError",function(e,a,n,i,o,s){if(!p){v.errors++,p=!0;var l=a&&(a.title||a.name||a.loadedTemplateUrl)||"unknown target",c="Error routing to "+l+". "+(s.data||"")+". <br/>"+(s.statusText||"")+": "+(s.status||"");r.warning(c,[a]),t.path("/")}})}function c(){l(),u()}function d(){return o.get()}function u(){n.$on("$stateChangeSuccess",function(t,e,a,o,r){v.changes++,p=!1;var s=i.docTitle+" "+(e.title||"");n.title=s})}var p=!1,g=!1,v={errors:0,changes:0},f={configureStates:s,getStates:d,stateCounts:v};return c(),f}var i={docTitle:void 0,resolveAlways:{}};window.history&&window.history.pushState||(window.location.hash="/"),t.html5Mode(!0),this.configure=function(t){angular.extend(i,t)},this.$get=n,n.$inject=["$location","$rootScope","$state","logger"]}angular.module("blocks.router").provider("routerHelper",t),t.$inject=["$locationProvider","$stateProvider","$urlRouterProvider"]}(),function(){"use strict";function t(t){t.options.timeOut=4e3,t.options.positionClass="toast-bottom-right"}function e(t,e,a){t.debugEnabled&&t.debugEnabled(!0),a.configure(n.appErrorPrefix),e.configure({docTitle:n.appTitle+": "})}var a=angular.module("app.core");a.config(t),t.$inject=["toastr"];var n={appErrorPrefix:"[htdemo Error] ",appTitle:"htdemo"};a.value("config",n),a.config(e),e.$inject=["$logProvider","routerHelperProvider","exceptionHandlerProvider"]}(),function(){"use strict";angular.module("app.core").constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function t(t){var a="/404";t.configureStates(e(),a)}function e(){return[{state:"404",config:{url:"/404",templateUrl:"app/core/404.html",title:"404"}}]}t.$inject=["routerHelper"],angular.module("app.core").run(t)}(),function(){"use strict";function t(t,e,a,n){function i(){return e.when(72)}function o(){function e(t){return t.data}function n(t){return a.catcher("XHR Failed for getPeople")(t)}return t.get("/api/people").then(e)["catch"](n)}var r={getPeople:o,getMessageCount:i};return r}angular.module("app.core").factory("dataservice",t),t.$inject=["$http","$q","exception","logger"]}(),function(){"use strict";function t(t,e,a){function n(){var e=[i(),o()];return t.all(e).then(function(){a.info("Activated Dashboard View")})}function i(){return e.getMessageCount().then(function(t){return r.messageCount=t,r.messageCount})}function o(){return e.getPeople().then(function(t){return r.people=t,r.people})}var r=this;r.news={title:"htdemo",description:"Hot Towel Angular is a SPA template for Angular developers."},r.messageCount=0,r.people=[],r.title="Dashboard",n()}angular.module("app.dashboard").controller("DashboardController",t),t.$inject=["$q","dataservice","logger"]}(),function(){"use strict";function t(t){t.configureStates(e())}function e(){return[{state:"dashboard",config:{url:"/",templateUrl:"app/dashboard/dashboard.html",controller:"DashboardController",controllerAs:"vm",title:"dashboard",settings:{nav:1,content:'<i class="fa fa-dashboard"></i> Dashboard'}}}]}angular.module("app.dashboard").run(t),t.$inject=["routerHelper"]}(),function(){"use strict";function t(){function t(t,e,a){function n(e){var a="dropy";e.preventDefault(),o.hasClass(a)?o.hasClass(a)&&(o.removeClass(a),i.slideUp(350,t.whenDoneAnimating)):(i.slideDown(350,t.whenDoneAnimating),o.addClass(a))}var i=e.find(".sidebar-inner"),o=e.find(".sidebar-dropdown a");e.addClass("sidebar"),o.click(n)}var e={link:t,restrict:"EA",scope:{whenDoneAnimating:"&?"}};return e}angular.module("app.layout").directive("htSidebar",t)}(),function(){"use strict";function t(){function t(t){t.isCollapsed=!0}var e={bindToController:!0,controller:t,controllerAs:"vm",restrict:"EA",scope:{navline:"="},templateUrl:"app/layout/ht-top-nav.html"};return t.$inject=["$scope"],e}angular.module("app.layout").directive("htTopNav",t)}(),function(){"use strict";function t(t,e,a,n){function i(){n.success(a.appTitle+" loaded!",null),o()}function o(){e(function(){t.showSplash=!1},1e3)}var r=this;r.busyMessage="Please wait ...",r.isBusy=!0,t.showSplash=!0,r.navline={title:a.appTitle,text:"Created by John Papa",link:"http://twitter.com/john_papa"},i()}angular.module("app.layout").controller("ShellController",t),t.$inject=["$rootScope","$timeout","config","logger"]}(),function(){"use strict";function t(t,e){function a(){n()}function n(){o.navRoutes=r.filter(function(t){return t.settings&&t.settings.nav}).sort(function(t,e){return t.settings.nav-e.settings.nav})}function i(e){if(!e.title||!t.current||!t.current.title)return"";var a=e.title;return t.current.title.substr(0,a.length)===a?"current":""}var o=this,r=e.getStates();o.isCurrent=i,a()}angular.module("app.layout").controller("SidebarController",t),t.$inject=["$state","routerHelper"]}(),function(){"use strict";function t(t){function e(t,e,i){i.$observe("htImgPerson",function(t){t=a+(t||n),i.$set("src",t)})}var a=t.imageBasePath,n=t.unknownPersonImageSource,i={link:e,restrict:"A"};return i}angular.module("app.widgets").directive("htImgPerson",t),t.$inject=["config"]}(),function(){"use strict";function t(){function t(t,e,a){t.toggleContent=function(){if("true"===t.allowCollapse){var a=angular.element(e).siblings(".widget-content");a.toggle()}}}var e={scope:{title:"@",subtitle:"@",rightText:"@",allowCollapse:"@"},templateUrl:"app/widgets/widget-header.html",restrict:"EA",link:t};return e}angular.module("app.widgets").directive("htWidgetHeader",t)}(),angular.module("app.core").run(["$templateCache",function(t){t.put("app/admin/admin.html",'<section class=mainbar><section class=matter><div class=container><div class=row><div class="widget wviolet"><div ht-widget-header title={{vm.title}}></div><div class="widget-content user"><h3>TODO: Implement Your Features</h3></div><div class=widget-foot><div class=clearfix></div></div></div></div></div></section></section>'),t.put("app/core/404.html",'<section id=dashboard-view class=mainbar><section class=matter><div class=container><div class=row><div class=col-md-12><ul class=today-datas><li class=bred><div class=pull-left><i class="fa fa-warning"></i></div><div class="datas-text pull-right"><a><span class=bold>404</span></a>Page Not Found</div><div class=clearfix></div></li></ul></div></div><div class=row><div class="widget wblue"><div ht-widget-header title="Page Not Found" allow-collapse=true></div><div class="widget-content text-center text-info"><div class=container>No soup for you!</div></div><div class=widget-foot><div class=clearfix></div></div></div></div></div></section></section>'),t.put("app/dashboard/dashboard.html",'<section id=dashboard-view class=mainbar><section class=matter><div class=container><div class=row><div class=col-md-12><ul class=today-datas><li class=blightblue><div class=pull-left><i class="fa fa-plane"></i></div><div class="datas-text pull-right"><span class=bold>May 18 - 19, 2015</span> Castle Resort, Neverland</div><div class=clearfix></div></li><li class=borange><div class=pull-left><i class="fa fa-envelope"></i></div><div class="datas-text pull-right"><span class=bold>{{vm.messageCount}}</span> Messages</div><div class=clearfix></div></li></ul></div></div><div class=row><div class=col-md-6><div class="widget wviolet"><div ht-widget-header title=People allow-collapse=true></div><div class="widget-content text-center text-info"><table class="table table-condensed table-striped"><thead><tr><th>First Name</th><th>Last Name</th><th>Age</th><th>Location</th></tr></thead><tbody><tr ng-repeat="p in vm.people"><td>{{p.firstName}}</td><td>{{p.lastName}}</td><td>{{p.age}}</td><td>{{p.location}}</td></tr></tbody></table></div><div class=widget-foot><div class=clearfix></div></div></div></div><div class=col-md-6><div class="widget wgreen"><div ht-widget-header title={{vm.news.title}} allow-collapse=true></div><div class="widget-content text-center text-info"><small>{{vm.news.description}}</small></div><div class=widget-foot><div class=clearfix></div></div></div></div></div></div></section></section>'),t.put("app/layout/ht-top-nav.html",'<nav class="navbar navbar-fixed-top navbar-inverse"><div class=navbar-header><a href="/" class=navbar-brand><span class=brand-title>{{vm.navline.title}}</span></a> <a class="btn navbar-btn navbar-toggle" ng-click="isCollapsed = !isCollapsed"><span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></a></div><div class="navbar-collapse collapse" uib-collapse=isCollapsed><div class="pull-right navbar-logo"><ul class="nav navbar-nav pull-right"><li><a ng-href={{vm.navline.link}} target=_blank>{{vm.navline.text}}</a></li><li class="dropdown dropdown-big"><a href=http://www.angularjs.org target=_blank><img src=images/AngularJS-small.png></a></li><li><a href="http://www.gulpjs.com/" target=_blank><img src=images/gulp-tiny.png></a></li></ul></div></div></nav>'),t.put("app/layout/shell.html",'<div ng-controller="ShellController as vm"><header class=clearfix><ht-top-nav navline=vm.navline></ht-top-nav></header><section id=content class=content><div ng-include="\'app/layout/sidebar.html\'"></div><div ui-view class=shuffle-animation></div><div ngplus-overlay ngplus-overlay-delay-in=50 ngplus-overlay-delay-out=700 ngplus-overlay-animation=dissolve-animation><img src=images/busy.gif><div class="page-spinner-message overlay-message">{{vm.busyMessage}}</div></div></section></div>'),t.put("app/layout/sidebar.html",'<div ng-controller="SidebarController as vm"><ht-sidebar when-done-animating=vm.sidebarReady()><div class=sidebar-filler></div><div class=sidebar-dropdown><a href=#>Menu</a></div><div class=sidebar-inner><div class=sidebar-widget></div><ul class=navi><li class="nlightblue fade-selection-animation" ng-class=vm.isCurrent(r) ng-repeat="r in vm.navRoutes"><a ui-sref={{r.name}} ng-bind-html=r.settings.content></a></li></ul></div></ht-sidebar></div>'),t.put("app/widgets/widget-header.html",'<div class=widget-head ng-class="{\'collapsive\': allowCollapse === \'true\'}" ng-click=toggleContent()><div class="page-title pull-left">{{title}}</div><small class=page-title-subtle ng-show=subtitle>({{subtitle}})</small><div class="widget-icons pull-right"></div><small class="pull-right page-title-subtle" ng-show=rightText>{{rightText}}</small><div class=clearfix></div></div>')}]);