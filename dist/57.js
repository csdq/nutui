/*! NutUI v1.1.1 Fri Mar 30 2018 10:22:08 GMT+0800 (中国标准时间) */
webpackJsonpnutui([57],{1037:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("SearchBar")]),t._v(" "),e("p",[t._v("一种可以自定义内容的搜索框。")]),t._v(" "),e("h5",[t._v("示例用法")]),t._v(" "),e("p",[t._v("默认用法")]),t._v(" "),e("nut-searchbar",{attrs:{placeText:"请输入自定义文案"}}),t._v(" "),e("p",[t._v("右侧搜索按钮可根据需要进行配置")]),t._v(" "),e("nut-searchbar",{attrs:{placeText:"请输入自定义文案",hasSearchButton:!1}}),t._v(" "),e("p",[t._v("可配置输入框前面是否显示搜索图标（图标可配置）、输入框高度、右侧是否显示文字按钮以及文字按钮宽度、显示文字、文字颜色")]),t._v(" "),e("nut-searchbar",{attrs:{placeText:"ERP/姓名/邮箱",hasIcon:!0,hasTextButton:!0,textInfo:"搜索",width:"1",height:"1",color:"#f23030"}}),t._v(" "),e("p",[t._v("可配置获取输入框焦点事件、输入事件、失去焦点事件、默认提交事件")]),t._v(" "),e("nut-searchbar",{attrs:{placeText:"请输入自定义文案"},on:{focus:t.focusFun,input:t.inputFun,blur:t.blurFun,submit:t.submitFun}})],1)},staticRenderFns:[]}},1120:function(t,n,e){var u=e(948);"string"==typeof u&&(u=[[t.i,u,""]]),u.locals&&(t.exports=u.locals);e(3)("22409a5e",u,!0)},732:function(t,n,e){function u(t){e(1120)}var r=e(1)(e(813),e(1037),u,null,null);t.exports=r.exports},813:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{demo1:'<nut-searchbar  placeText="请输入自定义文案"></nut-searchbar>',demo2:'<nut-searchbar  placeText="请输入自定义文案" :hasSearchButton="false"></nut-searchbar>',demo3:'<nut-searchbar  \n  placeText="ERP/姓名/邮箱"\n  :hasIcon="true"\n  :hasTextButton="true"\n  textInfo="搜索"\n  width="1"\n  height="1"\n  color="#f23030"\n></nut-searchbar>',demo4:'<nut-searchbar  \n  placeText="请输入自定义文案"\n  @focus="focusFun"\n  @input="inputFun"\n  @blur="blurFun"\n  @submit="submitFun"\n></nut-searchbar>'}},methods:{focusFun:function(){console.log("获取焦点操作！")},inputFun:function(){alert("您正在输入...")},blurFun:function(){console.log("您已失去焦点！")},submitFun:function(){console.log("默认提交操作！")}}}},948:function(t,n,e){n=t.exports=e(2)(),n.push([t.i,"",""])}});
//# sourceMappingURL=57.js.map