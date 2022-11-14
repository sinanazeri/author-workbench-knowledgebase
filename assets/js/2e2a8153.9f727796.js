"use strict";(self.webpackChunkauthor_workbench_knowledgebase=self.webpackChunkauthor_workbench_knowledgebase||[]).push([[812],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return p}});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var s=n.createContext({}),i=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},d=function(t){var e=i(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,o=t.originalType,s=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),k=i(a),p=l,b=k["".concat(s,".").concat(p)]||k[p]||c[p]||o;return a?n.createElement(b,r(r({ref:e},d),{},{components:a})):n.createElement(b,r({ref:e},d))}));function p(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var o=a.length,r=new Array(o);r[0]=k;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=t,u.mdxType="string"==typeof t?t:l,r[1]=u;for(var i=2;i<o;i++)r[i]=a[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5478:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return c}});var n=a(3117),l=a(102),o=(a(7294),a(3905)),r=["components"],u={},s="Add a Lab to your Coursera Course",i={unversionedId:"labs/adding-labs-to-courses/add-a-lab-to-a-coursera-course",id:"labs/adding-labs-to-courses/add-a-lab-to-a-coursera-course",title:"Add a Lab to your Coursera Course",description:"Once you have created a lab, you then need to add it to your course via Coursera. When you are adding a lab to your course, you embed your lab into a unit of your course. This way, learners will naturally progress through the course, and complete your labs as they go.",source:"@site/docs/labs/adding-labs-to-courses/add-a-lab-to-a-coursera-course.md",sourceDirName:"labs/adding-labs-to-courses",slug:"/labs/adding-labs-to-courses/add-a-lab-to-a-coursera-course",permalink:"/docs/labs/adding-labs-to-courses/add-a-lab-to-a-coursera-course",draft:!1,editUrl:"https://github.com/ibm-skills-network/author-workbench-knowledgebase/tree/master/docs/labs/adding-labs-to-courses/add-a-lab-to-a-coursera-course.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create a Lab",permalink:"/docs/labs/create-a-lab"},next:{title:"Add a Lab to your Skills Network Course",permalink:"/docs/labs/adding-labs-to-courses/add-a-lab-to-a-skills-network-course"}},d={},c=[{value:"Add an Instructional Lab to your Course",id:"add-an-instructional-lab-to-your-course",level:2},{value:"Add a (Non-Instructional) Lab to your Course",id:"add-a-non-instructional-lab-to-your-course",level:2},{value:"LTI Credentials",id:"lti-credentials",level:3},{value:"Custom Parameters",id:"custom-parameters",level:3}],k={toc:c};function p(t){var e=t.components,u=(0,l.Z)(t,r);return(0,o.kt)("wrapper",(0,n.Z)({},k,u,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"add-a-lab-to-your-coursera-course"},"Add a Lab to your Coursera Course"),(0,o.kt)("p",null,"Once you have created a lab, you then need to ",(0,o.kt)("strong",{parentName:"p"},"add it to your course via Coursera"),". When you are adding a lab to your course, you ",(0,o.kt)("strong",{parentName:"p"},"embed your lab into a unit of your course"),". This way, learners will naturally progress through the course, and complete your labs as they go."),(0,o.kt)("h2",{id:"add-an-instructional-lab-to-your-course"},"Add an Instructional Lab to your Course"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This section is only for instructional labs. If you wish to add a different lab type to your course, see the ",(0,o.kt)("a",{parentName:"p",href:"#add-a-non-instructional-lab-to-your-course"},"Add a (Non-Instructional) Lab to your Course")," section below.")),(0,o.kt)("p",null,'As a Skills Network author, you can create "instructional labs". These are labs that include step by step instructions for working with tools external to Skills Network Labs, such as services on IBM Cloud. '),(0,o.kt)("p",null,"HTML files will be automatically generated from instructional labs so they can be easliy embedded or linked to from your course. To embed an instructional lab in your course, follow the steps below."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On your course page, navigate to the lab you want (under the ",(0,o.kt)("inlineCode",{parentName:"li"},"Labs"),' tab) and click "Add to Course"')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:a(1869).Z,width:"2624",height:"1056"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Copy the JSON configuration provided ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:a(1478).Z,width:"1018",height:"750"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Close the pop-up and navigate to your Course Outline in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Content"),' tab on your course page. Press the "Edit in Coursera" button to open the outline in Coursera')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:a(9526).Z,width:"2344",height:"856"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Select the version of the course you want to add your instructional lab to")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:a(1868).Z,width:"2968",height:"1074"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Navigate to the week and unit you wish to add your instructional lab in, and insert an ungraded plugin")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:a(8386).Z,width:"1744",height:"896"})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After naming your plugin as desired, click on the item to edit it")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click on the "Choose Plugin" button and select "Pop Up Template"'))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:a(8113).Z,width:"3330",height:"1520"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:a(5458).Z,width:"1424",height:"1234"})),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},'After pressing "Continue", scroll down to the bottom of the page and select "Edit Configuration"')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:a(88).Z,width:"3344",height:"1824"})),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},'Replace all existing content with the JSON you copied in step 2 and click "Save Configuration"')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:a(4514).Z,width:"1632",height:"1492"})),(0,o.kt)("ol",{start:10},(0,o.kt)("li",{parentName:"ol"},"Now, your instructional lab should appear in the plugin. You can now publish your changes, or view your instructional lab as a learner.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:a(9889).Z,width:"3332",height:"1264"})),(0,o.kt)("h2",{id:"add-a-non-instructional-lab-to-your-course"},"Add a (Non-Instructional) Lab to your Course"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This section is only applicable for any lab type ",(0,o.kt)("em",{parentName:"p"},"other")," than an instructional lab. If you wish to add an instructional lab to your course, see the ",(0,o.kt)("a",{parentName:"p",href:"#add-an-instructional-lab-to-your-course"},"Add an Instructional Lab to your Course")," section.")),(0,o.kt)("p",null,"To add a (non-instructional) lab to your course in ",(0,o.kt)("strong",{parentName:"p"},"Coursera"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In Coursera, go to the week and unit you want your lab to be in and add a new LTI Item.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:a(6983).Z,width:"1826",height:"1058"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Add the following values to the corresponding fields within the LTI Item")),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",null," Launch URL ")," ",(0,o.kt)("td",null," ",(0,o.kt)("code",null,"https://labs.cognitiveclass.ai/login/lti")," ")),(0,o.kt)("tr",null,(0,o.kt)("td",null," Consumer Key ")," ",(0,o.kt)("td",null," See the ",(0,o.kt)("a",{href:"#custom-parameters"},"LTI Credentials")," section below. ")),(0,o.kt)("tr",null,(0,o.kt)("td",null," Secret ")," ",(0,o.kt)("td",null," See the ",(0,o.kt)("a",{href:"#custom-parameters"},"LTI Credentials")," section below. ")),(0,o.kt)("tr",null,(0,o.kt)("td",null," Learner Privacy ")," ",(0,o.kt)("td",null," ",(0,o.kt)("code",null,"Share learner ID, full name, and email address")," ")),(0,o.kt)("tr",null,(0,o.kt)("td",null," Custom Parameters ")," ",(0,o.kt)("td",null," See the ",(0,o.kt)("a",{href:"#custom-parameters"},"Custom Parameters")," section below. "))),(0,o.kt)("h3",{id:"lti-credentials"},"LTI Credentials"),(0,o.kt)("p",null,"The consumer key and secret can be found in Author Workbench on your course page. Navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Advanced")," tab and and scroll to the ",(0,o.kt)("inlineCode",{parentName:"p"},"LTI Credentials (Advanced Users Only)")," section. Here, you will be able to copy the consumer key and secret. If you are publishing your course to Coursera, please use the ",(0,o.kt)("inlineCode",{parentName:"p"},"LTI Credential (Coursera)")," credentials. Otherwise, use ",(0,o.kt)("inlineCode",{parentName:"p"},"LTI Credential (Skills Network / edX)"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:a(7759).Z,width:"2328",height:"1566"})),(0,o.kt)("h3",{id:"custom-parameters"},"Custom Parameters"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Custom Parameters")," field is where you will specify the details of your lab. Depending on the ",(0,o.kt)("strong",{parentName:"p"},"tool your lab uses"),", the custom parameters ",(0,o.kt)("strong",{parentName:"p"},"will be different"),". Reference your tool type below to find out what the custom parameters are."),(0,o.kt)("hr",null),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("h4",{id:"cloud-ide"},"Cloud IDE")),(0,o.kt)("p",null,(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"sn_asset_library_instructions_url")),(0,o.kt)("td",null,"Link to the Markdown instructions (",(0,o.kt)("code",null,".md"),") file obtained from the link copied in Author Workbench (",(0,o.kt)("a",{href:"#add-an-instructional-lab-to-your-course"},"in step 2"),").")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"sn_labs_tool")),(0,o.kt)("td",null,"Tool in Skills Network Labs with which to open the Markdown instructions file. (",(0,o.kt)("code",null,"cloud-ide"),", ",(0,o.kt)("code",null,"cloud-ide-docker"),", ",(0,o.kt)("code",null,"cloud-ide-openshift"),")"))),(0,o.kt)("p",null,"Example:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sn_asset_library_instructions_url"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/here-metrics-on-openshift/instructions.md"},"https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/here-metrics-on-openshift/instructions.md"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sn_labs_tool"),(0,o.kt)("td",{parentName:"tr",align:null},"cloud-ide-openshift")))))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("h4",{id:"jupyterlite"},"JupyterLite")),(0,o.kt)("p",null,(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"sn_labs_filepath")),(0,o.kt)("td",null,"Path to store the lab in a student\u2019s ",(0,o.kt)("code",null,"/resources")," folder.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"sn_asset_library_notebook_url")),(0,o.kt)("td",null,"Link to the JupyterLite Notebook (",(0,o.kt)("code",null,".ipynb"),") file obtained from the link copied in Author Workbench (",(0,o.kt)("a",{href:"#add-an-instructional-lab-to-your-course"},"in step 2"),").")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"sn_labs_tool")),(0,o.kt)("td",null,'Tool to open your Lab - in this case it would be "',(0,o.kt)("code",null,"jupyterlite"),'"'))),(0,o.kt)("p",null,"Example:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sn_asset_library_notebook_url"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBM-PY0101ES-edX/labs/Module2/PY0101ES-2.2_notebook_quizz_sets.ipynb"},"https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBM-PY0101ES-edX/labs/Module2/PY0101ES-2.2_notebook_quizz_sets.ipynb"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sn_labs_filepath"),(0,o.kt)("td",{parentName:"tr",align:null},"/labs/Module2/PY0101ES-2.2_notebook_quizz_sets.ipynb")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sn_labs_tool"),(0,o.kt)("td",{parentName:"tr",align:null},"jupyterlite")))))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("h4",{id:"jupyterlab"},"JupyterLab")),(0,o.kt)("p",null,(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"sn_labs_filepath")),(0,o.kt)("td",null,"Path to store the lab in a student\u2019s ",(0,o.kt)("code",null,"/resources")," folder.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"sn_asset_library_notebook_url")),(0,o.kt)("td",null,"Link to the JupyterNotebook (",(0,o.kt)("code",null,".ipynb"),") file obtained from the link copied in Author Workbench (",(0,o.kt)("a",{href:"#add-an-instructional-lab-to-your-course"},"in step 2"),").")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"sn_labs_tool")),(0,o.kt)("td",null,'Tool to open your Lab - in this case it would be "',(0,o.kt)("code",null,"jupyterlab"),'"'))),(0,o.kt)("p",null,"Example:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sn_asset_library_notebook_url"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBM-PY0101ES-edX/labs/Module2/PY0101ES-2.2_notebook_quizz_sets.ipynb"},"https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBM-PY0101ES-edX/labs/Module2/PY0101ES-2.2_notebook_quizz_sets.ipynb"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sn_labs_filepath"),(0,o.kt)("td",{parentName:"tr",align:null},"/labs/Module2/PY0101ES-2.2_notebook_quizz_sets.ipynb")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sn_labs_tool"),(0,o.kt)("td",{parentName:"tr",align:null},"jupyterlab")))))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("h4",{id:"rstudio"},"RStudio")),(0,o.kt)("p",null,(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"sn_asset_library_instructions_url")),(0,o.kt)("td",null,"Path where to store the lab in a student\u2019s /resources folder.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"sn_asset_library_notebook_url")),(0,o.kt)("td",null,"Link to the Markdown instructions (.md) file obtained from the link copied in Author Workbench (",(0,o.kt)("a",{href:"#add-an-instructional-lab-to-your-course"},"in step 2"),").")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"sn_labs_tool")),(0,o.kt)("td",null,'Tool to open your Lab - in this case it would be "',(0,o.kt)("code",null,"rstudio-ide"),'"'))))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("h4",{id:"datasette"},"Datasette")),(0,o.kt)("p",null,(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"sn_labs_filepath")),(0,o.kt)("td",null,"Path where to store the lab in a student\u2019s ",(0,o.kt)("code",null,"/resources")," folder.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"sn_asset_library_sqlite_db_url")),(0,o.kt)("td",null,"Link to the sqlite db file (",(0,o.kt)("code",null,".db"),") file obtained from the Skills Network Asset Library.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"sn_labs_tool")),(0,o.kt)("td",null,'Tool to open your Lab - in this case it would be "',(0,o.kt)("code",null,"datasette"),'"')),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"sn_asset_library_instructions_url")),(0,o.kt)("td",null,"Link to the Markdown instructions (",(0,o.kt)("code",null,".md"),") file obtained from the link copied in Author Workbench (",(0,o.kt)("a",{href:"#add-an-instructional-lab-to-your-course"},"in step 2"),")."))))))}p.isMDXComponent=!0},9526:function(t,e,a){e.Z=a.p+"assets/images/SN-AW-Course-Outline-Coursera-e07e3a2cdecc1549653ea1926d0fe3a1.png"},7759:function(t,e,a){e.Z=a.p+"assets/images/SN-AW-LTI-Credentials-Coursera-bcaf37172f19551ccb68941a77b5f1bb.png"},1869:function(t,e,a){e.Z=a.p+"assets/images/SN-AW-add-to-course-f3bbed2a88f79770898192d13c74976e.png"},1478:function(t,e,a){e.Z=a.p+"assets/images/SN-AW-instructional-lab-modal-json-cfbd494b08e3767ff5b9ae63434ccb30.png"},4514:function(t,e,a){e.Z=a.p+"assets/images/SN-Coursera-JSON-d15978ffa217f48683c5f0b179b4afdf.png"},6983:function(t,e,a){e.Z=a.p+"assets/images/SN-Coursera-add-LTI-item-3445f99e0889de760170611ec1104efd.png"},8386:function(t,e,a){e.Z=a.p+"assets/images/SN-Coursera-add-ungraded-plugin-ef07f270a42934b15cccb9f444399612.png"},8113:function(t,e,a){e.Z=a.p+"assets/images/SN-Coursera-choose-plugin-button-1f3184f526eef1f7943916af3c6c4940.png"},88:function(t,e,a){e.Z=a.p+"assets/images/SN-Coursera-edit-configuration-225da09c2cec7cf91fce0933bd8295a5.png"},9889:function(t,e,a){e.Z=a.p+"assets/images/SN-Coursera-instructional-lab-publish-view-as-learner-5754ae7ca85372efcedf4dcd2d1e9096.png"},5458:function(t,e,a){e.Z=a.p+"assets/images/SN-Coursera-pop-up-template-ebc91001768c2899e64315e7558670dd.png"},1868:function(t,e,a){e.Z=a.p+"assets/images/SN-Coursera-version-e4f0798ae7870dda2ae674186e7f471c.png"}}]);