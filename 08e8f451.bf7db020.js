(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{300:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||r;return n?i.a.createElement(m,l(l({ref:t},p),{},{components:n})):i.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),i=n(6),r=(n(0),n(300)),o={id:"withRepeat",title:"withRepeat",sidebar_label:"withRepeat"},l={id:"version-2.0.0-rc.2/api/withRepeat",title:"withRepeat",description:"Repeats the provided animation several times.",source:"@site/versioned_docs/version-2.0.0-rc.2/api/withRepeat.md",permalink:"/react-native-reanimated/docs/api/withRepeat",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/versioned_docs/version-2.0.0-rc.2/api/withRepeat.md",version:"2.0.0-rc.2",sidebar_label:"withRepeat",sidebar:"version-2.0.0-rc.2/docs",previous:{title:"withSequence",permalink:"/react-native-reanimated/docs/api/withSequence"},next:{title:"measure",permalink:"/react-native-reanimated/docs/api/nativeMethods/measure"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],p={rightToc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Repeats the provided animation several times."),Object(r.b)("h3",{id:"arguments"},"Arguments"),Object(r.b)("h4",{id:"animation-animation"},Object(r.b)("inlineCode",{parentName:"h4"},"animation")," ","[animation]"),Object(r.b)("p",null,"The animation that will be repeated."),Object(r.b)("h4",{id:"numberofreps-number-default-2"},Object(r.b)("inlineCode",{parentName:"h4"},"numberOfReps")," ","[number]"," (default: ",Object(r.b)("inlineCode",{parentName:"h4"},"2"),")"),Object(r.b)("p",null,"Number of repetations that the animation is going to be run for.\nWhen negative, the animation will be repeated forever (until the shared value is torn down or the animation is cancelled)."),Object(r.b)("h4",{id:"reverse-bool-default-false"},Object(r.b)("inlineCode",{parentName:"h4"},"reverse")," ","[bool]"," (default: ",Object(r.b)("inlineCode",{parentName:"h4"},"false"),")"),Object(r.b)("p",null,"Specify whether we should attempt to reverse the animation every other repetition.\nWhen ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", this will cause the animation to run from the current value to the destination, after that the same animation will run in the reverse direction.\nNote that this option will only work when the provided animation is a plain, non-modified animation like ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"api/withTiming"}),Object(r.b)("inlineCode",{parentName:"a"},"withTiming"))," or ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"api/withSpring"}),Object(r.b)("inlineCode",{parentName:"a"},"withSpring")),".\nThe option is not supported for animation wrapped using other animation modifiers like ",Object(r.b)("inlineCode",{parentName:"p"},"withDelay")," or ",Object(r.b)("inlineCode",{parentName:"p"},"withSequence"),"."),Object(r.b)("h4",{id:"callback-function"},Object(r.b)("inlineCode",{parentName:"h4"},"callback")," ",Object(r.b)("a",Object(a.a)({parentName:"h4"},{href:"optional"}),"function")),Object(r.b)("p",null,"This function will be called when all repetitions of provided animation are complete or when ",Object(r.b)("inlineCode",{parentName:"p"},"withRepeat")," is cancelled.\nIn case the animation is cancelled, the callback will receive ",Object(r.b)("inlineCode",{parentName:"p"},"false")," as the argument, otherwise it will receive ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"."),Object(r.b)("h3",{id:"returns"},"Returns"),Object(r.b)("p",null,"This method returns an animation object. It can be either assigned directly to a Shared Value or can be used as a value for a style object returned from ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"useAnimatedStyle"}),Object(r.b)("inlineCode",{parentName:"a"},"useAnimatedStyle")),"."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("p",null,"The provided shared value will animate from its current value to 70 using timing animation, and then back to the original value."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"sharedValue.value = withRepeat(withTiming(70), 2, true)\n")),Object(r.b)("p",null,"One more example with the callbacks"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"sharedValue.value = withRepeat(\n    withTiming(70, undefined, (finished, currentValue) => {\n        if (finished) {\n            console.log('current withRepeat value is ' + currentValue);\n        } else {\n            console.log('inner animation cancelled')\n        }\n    }),\n    10,\n    true,\n    (finished) => {\n        const resultStr = (finished) ? 'All repeats are completed' : 'withRepeat cancelled';\n        console.log(resultStr);\n    }\n)\n")),Object(r.b)("p",null,"The callback passed to the inner animation(here ",Object(r.b)("inlineCode",{parentName:"p"},"withTiming"),") will be called on every repeat. The first argument tells us whether the animation finished or was cancelled. The second one hold animation's current value(when the animation has been cancelled it is ",Object(r.b)("inlineCode",{parentName:"p"},"undefined"),").\nThe callback passed to ",Object(r.b)("inlineCode",{parentName:"p"},"withRepeat")," is called in the end when animation is finished or cancelled with ",Object(r.b)("inlineCode",{parentName:"p"},"finished")," set accordingly."))}s.isMDXComponent=!0}}]);