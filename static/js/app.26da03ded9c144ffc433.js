webpackJsonp([1],{IGZx:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-inverse navbar-fixed-top"},[a("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),a("div",{staticClass:"navbar-collapse collapse",attrs:{id:"navbar"}},[t._m(1),t._v(" "),a("form",{staticClass:"navbar-form navbar-right",on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.searchValue},on:{input:function(e){e.target.composing||(t.searchValue=e.target.value)}}})])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-header"},[e("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbar","aria-expanded":"false","aria-controls":"navbar"}},[e("span",{staticClass:"sr-only"},[this._v("Toggle navigation")]),this._v(" "),e("span",{staticClass:"icon-bar"}),this._v(" "),e("span",{staticClass:"icon-bar"}),this._v(" "),e("span",{staticClass:"icon-bar"})]),this._v(" "),e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[this._v("Project name")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"nav navbar-nav navbar-right"},[e("li",[e("a",{attrs:{href:"#"}},[this._v("Dashboard")])]),this._v(" "),e("li",[e("a",{attrs:{href:"#"}},[this._v("Settings")])]),this._v(" "),e("li",[e("a",{attrs:{href:"#"}},[this._v("Profile")])]),this._v(" "),e("li",[e("a",{attrs:{href:"#"}},[this._v("Help")])])])}]};var n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"col-sm-3 col-md-2 sidebar"},[e("ul",{staticClass:"nav nav-sidebar"},[e("router-link",{attrs:{tag:"li",to:{name:"in_theaters"},"active-class":"active"}},[e("a",{attrs:{href:""}},[this._v("正在热播")])]),this._v(" "),e("router-link",{attrs:{tag:"li",to:{name:"coming_soon"},"active-class":"active"}},[e("a",{attrs:{href:""}},[this._v("即将上映")])]),this._v(" "),e("router-link",{attrs:{tag:"li",to:{name:"top250"},"active-class":"active"}},[e("a",{attrs:{href:""}},[this._v("Top250")])])],1)])])},staticRenderFns:[]};var r={name:"App",components:{AppHeader:a("VU/8")({data:function(){return{searchValue:""}},methods:{handleSubmit:function(){this.$router.push({name:"search",query:{q:this.searchValue}})}}},i,!1,function(t){a("Yh6k")},null,null).exports,AppSlider:a("VU/8")({},n,!1,function(t){a("bK7Z")},null,null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("app-header"),this._v(" "),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("app-slider"),this._v(" "),e("div",{staticClass:"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"},[e("router-view")],1)],1)])],1)},staticRenderFns:[]};var c=a("VU/8")(r,o,!1,function(t){a("IGZx")},null,null).exports,l=a("/ocq"),v=a("Dd8w"),u=a.n(v),m=a("NYxO"),h={created:function(){this.setData()},methods:u()({},Object(m.b)("movieList",["setData"])),computed:u()({},Object(m.c)("movieList",["title","subjects"])),watch:{$route:function(t,e){this.setData()}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"page-header"},[t._v(t._s(t.title))]),t._v(" "),t._l(t.subjects,function(e){return a("div",{key:e.id,staticClass:"media"},[a("div",{staticClass:"media-left"},[a("router-link",{attrs:{to:{name:"movie",params:{id:e.id}}}},[a("img",{staticClass:"media-object",attrs:{src:"https://images.weserv.nl?url="+e.images.small.substr(7),alt:""}})])],1),t._v(" "),a("div",{staticClass:"media-body"},[a("h2",{staticClass:"media-heading"},[t._v(t._s(e.title))]),t._v("\n      "+t._s(e.genres)+"\n    ")])])})],2)},staticRenderFns:[]};var p=a("VU/8")(h,d,!1,function(t){a("zjD1")},null,null).exports,f={created:function(){this.getMovieById()},methods:u()({},Object(m.b)("movieDetail",["getMovieById"])),computed:u()({},Object(m.c)("movieDetail",["movie"]))},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v(t._s(t.movie.title))]),t._v(" "),t.movie.images?a("img",{attrs:{src:t.movie.images.large,alt:""}}):t._e(),t._v(" "),a("hr"),t._v("\n  简介：\n  "),a("p",[t._v(t._s(t.movie.summary))])])},staticRenderFns:[]};var b=a("VU/8")(f,_,!1,function(t){a("iMeC")},null,null).exports;s.a.use(l.a);var g=new l.a({routes:[{name:"home",path:"/",redirect:{name:"in_theaters"}},{name:"in_theaters",path:"/in_theaters",component:p},{name:"coming_soon",path:"/coming_soon",component:p},{name:"top250",path:"/top250",component:p},{name:"search",path:"/search",component:p},{name:"movie",path:"/movie/:id",component:b}]}),C=a("hU7x"),j=a.n(C),y={namespaced:!0,state:{title:"正在加载...",subjects:[]},mutations:{setData:function(t,e){t.title=e.title,t.subjects=e.subjects}},actions:{setData:function(t){var e=t.rootState,a=e.route.path,s=e.route.query.q;j()("http://api.douban.com/v2/movie"+a+"?q="+s,null,function(e,a){e||t.commit(u()({type:"setData"},a))})}}},D={namespaced:!0,state:{movie:{}},mutations:{setMovie:function(t,e){t.movie=e.movie}},actions:{getMovieById:function(t){var e=t.rootState.route.params.id;j()("https://api.douban.com/v2/movie/subject/"+e,null,function(e,a){e||t.commit({type:"setMovie",movie:a})})}}};s.a.use(m.a);var x=new m.a.Store({state:{},getters:{},mutations:{},actions:{},modules:{movieList:y,movieDetail:D}}),V=a("9JMe");a("Jmt5"),a("n4oI");Object(V.sync)(x,g),s.a.config.productionTip=!1,new s.a({el:"#app",router:g,store:x,components:{App:c},template:"<App/>"})},Yh6k:function(t,e){},bK7Z:function(t,e){},iMeC:function(t,e){},n4oI:function(t,e){},zjD1:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.26da03ded9c144ffc433.js.map