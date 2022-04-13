"use strict";(self.webpackChunkauthor_workbench_knowledgebase=self.webpackChunkauthor_workbench_knowledgebase||[]).push([[742],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(r),d=a,h=b["".concat(s,".").concat(d)]||b[d]||p[d]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},8114:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:1},s="Create a Lab",u={unversionedId:"labs/create-a-lab",id:"labs/create-a-lab",title:"Create a Lab",description:"Use labs to create interactive and engaging learning experiences.",source:"@site/docs/labs/create-a-lab.md",sourceDirName:"labs",slug:"/labs/create-a-lab",permalink:"/labs/create-a-lab",editUrl:"https://github.com/ibm-skills-network/author-workbench-knowledgebase/tree/master/docs/labs/create-a-lab.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/tutorial-extras/translate-your-site"}},c={},p=[{value:"How to create a great Lab",id:"how-to-create-a-great-lab",level:2},{value:"Create your first Lab",id:"create-your-first-lab",level:2},{value:"Writing our instructions",id:"writing-our-instructions",level:2},{value:"Testing our lab",id:"testing-our-lab",level:2},{value:"Inserting our lab into our course",id:"inserting-our-lab-into-our-course",level:2}],b={toc:p};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},b,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-lab"},"Create a Lab"),(0,o.kt)("p",null,"Use labs to create ",(0,o.kt)("strong",{parentName:"p"},"interactive and engaging")," learning experiences.\nLabs typically consist of a ",(0,o.kt)("strong",{parentName:"p"},"short set of instructions"),", side by side with a ",(0,o.kt)("strong",{parentName:"p"},"code editor in the browser"),".\nLearners can use the in-browser code editor to write code, execute their code, and deploy their code to the cloud. All without installing packages and without ever leaving the browser."),(0,o.kt)("p",null,"Each lab should teach a ",(0,o.kt)("strong",{parentName:"p"},"single concept")," and should guide the learner to ",(0,o.kt)("strong",{parentName:"p"},"create something"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Labs Screenshot",src:r(9853).Z,width:"1582",height:"464"})),(0,o.kt)("h2",{id:"how-to-create-a-great-lab"},"How to create a great Lab"),(0,o.kt)("p",null,"First, think about what you aim to teach learners in your lab. Maybe you want to demonstrate how to get a JavaScript application to print Hello World. Or maybe you want to walk learners through training a Machine Learning model with PyTorch."),(0,o.kt)("p",null,"Thinking of a great title for your lab is a great way to get yourself to think about what you'll be teaching. It's also a great way to tell your learners what you're going to teach them."),(0,o.kt)("p",null,"Once you've decided on the goal of your lab, decide which of our tools best suits your needs. Consult our ",(0,o.kt)("a",{parentName:"p",href:"https://skills.network/lab-tools"},"lab tools")," page to learn more about each tool."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Some basic tools and their use cases:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Try ",(0,o.kt)("inlineCode",{parentName:"li"},"Cloud IDE")," for general purpose coding and web apps \ud83d\ude80"),(0,o.kt)("li",{parentName:"ul"},"Try ",(0,o.kt)("inlineCode",{parentName:"li"},"JupyterLite")," for data science and machine learning with Python \ud83e\udde0"),(0,o.kt)("li",{parentName:"ul"},"Try ",(0,o.kt)("inlineCode",{parentName:"li"},"Intructional Lab")," for writing basic tutorials \ud83d\udca1"))),(0,o.kt)("h2",{id:"create-your-first-lab"},"Create your first Lab"),(0,o.kt)("p",null,"Let's create a simple lab to get started. We'll be using the ",(0,o.kt)("a",{parentName:"p",href:"https://skills.network/lab-tools/cloud-ide"},"Cloud IDE")," tool to guide a learner to build a basic Hello World application with JavaScript."),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Create Lab")," and select ",(0,o.kt)("inlineCode",{parentName:"p"},"Cloud IDE")," as the tool. For the title, enter ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello World with JavaScript")," and for the description, enter ",(0,o.kt)("inlineCode",{parentName:"p"},'Learn how to print "Hello World" in Javascript'),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Once you have created your lab"),", you will be able to edit the instructions, test your lab, and easily insert it into your course."),(0,o.kt)("h2",{id:"writing-our-instructions"},"Writing our instructions"),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit Instructions")," to edit the instructions for your lab."),(0,o.kt)("h2",{id:"testing-our-lab"},"Testing our lab"),(0,o.kt)("h2",{id:"inserting-our-lab-into-our-course"},"Inserting our lab into our course"))}d.isMDXComponent=!0},9853:function(e,t,r){t.Z=r.p+"assets/images/labsScreenshot-6c6843d15c4e23347cc7a066284473d1.png"}}]);