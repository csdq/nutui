/*! NutUI v1.1.1 Fri Mar 30 2018 10:22:08 GMT+0800 (中国标准时间) */
webpackJsonpnutui([26],{1049:function(t,v,n){var _=n(877);"string"==typeof _&&(_=[[t.i,_,""]]),_.locals&&(t.exports=_.locals);n(3)("008f13d6",_,!0)},763:function(t,v,n){function _(t){n(1049)}var i=n(1)(n(845),n(965),_,null,null);t.exports=i.exports},845:function(t,v,n){"use strict";Object.defineProperty(v,"__esModule",{value:!0}),v.default={data:function(){return{loading:null,demo:'<a href="javascript:;" @click="showLoading">Demo</a>'}},mounted:function(){this.loading=this.$loading({maxDuring:5e3,iconUrl:"//misc.360buyimg.com/mtd/pc/o2_toolbar/1.0.0/home/images/loading.gif"})},methods:{showLoading:function(t){this.loading.show()},hideLoading:function(t){this.loading.hide()}}}},877:function(t,v,n){v=t.exports=n(2)(),v.push([t.i,"",""])},965:function(t,v){t.exports={render:function(){var t=this,v=t.$createElement,n=t._self._c||v;return n("div",[n("h1",[t._v("Loading")]),t._v(" "),n("p",[t._v("“加载中”提示蒙层。")]),t._v(" "),n("h5",[t._v("依赖")]),t._v(" "),n("p",[t._v("Mask")]),t._v(" "),n("h5",[t._v("基本用法")]),t._v(" "),n("pre",[n("code",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._v("this.$loading(options);")])]),t._v(" "),n("a",{staticClass:"button button-primary",attrs:{href:"javascript:;"},on:{click:t.showLoading}},[t._v("Demo")]),t._v(" "),n("pre",[n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],domProps:{textContent:t._s(t.demo)}})]),t._v(" "),n("pre",[n("code",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._v("export default {\n    data(){\n        return{\n          loading:null\n        }\n    },\n    mounted(){\n      this.loading = this.$loading({\n        maxDuring:5000,\n        iconUrl:'//misc.360buyimg.com/mtd/pc/o2_toolbar/1.0.0/home/images/loading.gif'\n      });\n    },\n    methods:{\n      showLoading(options){\n        this.loading.show();\n      },\n      hideLoading(options){\n        this.loading.hide();\n      },\n    }\n}")])]),t._v(" "),n("h5",[t._v("Options")]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,v=t.$createElement,n=t._self._c||v;return n("div",{staticClass:"tbl-wrapper"},[n("table",{staticClass:"u-full-width"},[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")]),t._v(" "),n("th",[t._v("可选值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("maxDuring")]),t._v(" "),n("td",[t._v("最大展示时长")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("0（0为不消失）")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("bgColor")]),t._v(" "),n("td",[t._v("遮罩层颜色")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("'rgba(0,0,0,.5)'")]),t._v(" "),n("td",[t._v("支持HEX、RGBA")])]),t._v(" "),n("tr",[n("td",[t._v("iconUrl")]),t._v(" "),n("td",[t._v("icon图片地址")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("''")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("text")]),t._v(" "),n("td",[t._v("提示文字")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("'加载中...'")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("textColor")]),t._v(" "),n("td",[t._v("文字颜色")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("'#000000'")]),t._v(" "),n("td",[t._v("支持HEX、RGBA")])]),t._v(" "),n("tr",[n("td",[t._v("userClose")]),t._v(" "),n("td",[t._v("是否允许用户点击关闭")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("true")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("fade")]),t._v(" "),n("td",[t._v("是否开启渐隐渐现动效")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("--")])])])])])}]}}});
//# sourceMappingURL=26.js.map