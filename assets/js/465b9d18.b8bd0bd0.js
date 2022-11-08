"use strict";(self.webpackChunkauthor_workbench_knowledgebase=self.webpackChunkauthor_workbench_knowledgebase||[]).push([[742],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,b=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8114:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},s="Create a Lab",c={unversionedId:"labs/create-a-lab",id:"labs/create-a-lab",title:"Create a Lab",description:"Use labs to create interactive and engaging learning experiences.",source:"@site/docs/labs/create-a-lab.md",sourceDirName:"labs",slug:"/labs/create-a-lab",permalink:"/docs/labs/create-a-lab",draft:!1,editUrl:"https://github.com/ibm-skills-network/author-workbench-knowledgebase/tree/master/docs/labs/create-a-lab.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Using a Custom Outline",permalink:"/docs/guided-projects/advanced/configuring-sn-labs-tool-config"},next:{title:"Add a Lab to your Skills Network Course",permalink:"/docs/labs/adding-labs-to-courses/add-a-lab-to-a-skills-network-course"}},u={},p=[{value:"How to create a great Lab",id:"how-to-create-a-great-lab",level:2},{value:"Create your first Lab",id:"create-your-first-lab",level:2},{value:"Writing your instructions",id:"writing-your-instructions",level:2},{value:"Testing your lab",id:"testing-your-lab",level:2}],d={toc:p};function h(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-a-lab"},"Create a Lab"),(0,a.kt)("p",null,"Use labs to create ",(0,a.kt)("strong",{parentName:"p"},"interactive and engaging")," learning experiences.\nLabs typically consist of a ",(0,a.kt)("strong",{parentName:"p"},"short set of instructions"),", side by side with a ",(0,a.kt)("strong",{parentName:"p"},"code editor in the browser"),".\nLearners can use the in-browser code editor to write code, execute their code, and deploy their code to the cloud. All without installing packages and without ever leaving the browser."),(0,a.kt)("p",null,"Each lab should teach a ",(0,a.kt)("strong",{parentName:"p"},"single concept")," and should guide the learner to ",(0,a.kt)("strong",{parentName:"p"},"create something"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Labs Screenshot",src:n(9853).Z,width:"1582",height:"464"})),(0,a.kt)("h2",{id:"how-to-create-a-great-lab"},"How to create a great Lab"),(0,a.kt)("p",null,"First, think about what you aim to teach learners in your lab. Maybe you want to demonstrate how to get a JavaScript application to print Hello World. Or maybe you want to walk learners through training a Machine Learning model with PyTorch."),(0,a.kt)("p",null,"Thinking of a great title for your lab is a great way to get yourself to think about what you'll be teaching. It's also a great way to tell your learners what you're going to teach them."),(0,a.kt)("p",null,"Once you've decided on the goal of your lab, decide which of our tools best suits your needs. Consult our ",(0,a.kt)("a",{parentName:"p",href:"https://skills.network/lab-tools"},"lab tools")," page to learn more about each tool."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Some basic tools and their use cases:"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Try ",(0,a.kt)("inlineCode",{parentName:"li"},"Cloud IDE")," for general purpose coding and web apps \ud83d\ude80"),(0,a.kt)("li",{parentName:"ul"},"Try ",(0,a.kt)("inlineCode",{parentName:"li"},"JupyterLite")," for data science and machine learning with Python \ud83e\udde0"),(0,a.kt)("li",{parentName:"ul"},"Try ",(0,a.kt)("inlineCode",{parentName:"li"},"Intructional Lab")," for writing basic tutorials \ud83d\udca1"))),(0,a.kt)("h2",{id:"create-your-first-lab"},"Create your first Lab"),(0,a.kt)("p",null,"Let's create a simple lab to get started. We'll be using the ",(0,a.kt)("a",{parentName:"p",href:"https://skills.network/lab-tools/cloud-ide"},"Cloud IDE")," tool to guide a learner to build a basic Hello World application with JavaScript."),(0,a.kt)("p",null,"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Create Lab")," and select ",(0,a.kt)("inlineCode",{parentName:"p"},"Cloud IDE")," as the tool. For the title, enter ",(0,a.kt)("inlineCode",{parentName:"p"},"Hello World with JavaScript")," and for the description, enter ",(0,a.kt)("inlineCode",{parentName:"p"},'Learn how to print "Hello World" in Javascript'),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Once you have created your lab"),", you will be able to edit the instructions, test your lab, and easily insert it into your course."),(0,a.kt)("h2",{id:"writing-your-instructions"},"Writing your instructions"),(0,a.kt)("p",null,"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Edit Instructions")," to start. This will open ",(0,a.kt)("strong",{parentName:"p"},"Author IDE")," in a new tab."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Author IDE")," is the editing environment you will be using to work on your lab. You can write rich markdown with easy-to-use features like pagination, 1 click code execution, version control and more."),(0,a.kt)("p",null,"When you first open your lab instructions, there will be some useful text already in the editor. It will walk you through Author IDE's features and help you get familiar with the environment."),(0,a.kt)("p",null,"For the purposes of this short guide, let's ",(0,a.kt)("strong",{parentName:"p"},"replace all the text")," in the editor with the below text."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},'::page{title="Welcome to the Hello World with JavaScript Lab"}\n\nIn this lab, we will be showing you how to use JavaScript to print "Hello World" to the console.\n\nTo get started, create a new file in your code editor called `helloWorld.js` and paste the following code into it:\n\n```javascript\nconsole.log("hello world!");\n```\n\nNow just open the terminal and run `node helloWorld.js` and you should see "hello world!" printed to the console!\n')),(0,a.kt)("p",null,"You should see the preview updating on the right to reflect your changes. Now that we have some instructions, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Save")," to save your progress, and then ",(0,a.kt)("inlineCode",{parentName:"p"},"Publish")," to finalize your changes."),(0,a.kt)("p",null,"That's it! We've created our first lab."),(0,a.kt)("h2",{id:"testing-your-lab"},"Testing your lab"),(0,a.kt)("p",null,"Back on the course page, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Launch Lab")," to see your lab in action. This will open a new tab. Here, you can ",(0,a.kt)("strong",{parentName:"p"},"preview exactly how learners will experience your lab"),". Try following the instructions of our lab now!"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Cloud IDE Screenshot",src:n(2948).Z,width:"2551",height:"1567"})),(0,a.kt)("p",null,"Awesome! We now have a lab that's ready to be added to our course."))}h.isMDXComponent=!0},2948:function(e,t,n){t.Z=n.p+"assets/images/cloud-ide-screenshot-c304d94dde20404ce727ac67c505c5e4.png"},9853:function(e,t,n){t.Z=n.p+"assets/images/labsScreenshot-6c6843d15c4e23347cc7a066284473d1.png"}}]);