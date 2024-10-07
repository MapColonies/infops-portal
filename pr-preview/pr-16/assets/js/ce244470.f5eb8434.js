"use strict";(self.webpackChunkinfops_portal=self.webpackChunkinfops_portal||[]).push([[2284],{1231:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var i=s(4848),o=s(8453);const t={custom_edit_url:null},r="Map Colonies ESLint configs",l={id:"knowledge-base/packages/eslint-config/README",title:"Map Colonies ESLint configs",description:"A collection of ESlint configs for various frameworks and enviornments.",source:"@site/docs/knowledge-base/packages/eslint-config/README.md",sourceDirName:"knowledge-base/packages/eslint-config",slug:"/knowledge-base/packages/eslint-config/",permalink:"/docs/knowledge-base/packages/eslint-config/",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"knowledgeBaseSidebar",previous:{title:"error-express-handler",permalink:"/docs/knowledge-base/packages/error-express-handler/"},next:{title:"express-access-log-middleware",permalink:"/docs/knowledge-base/packages/express-access-log-middleware/"}},a={},c=[{value:"Available Configs",id:"available-configs",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Adding new Configs",id:"adding-new-configs",level:2},{value:"Issues",id:"issues",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"map-colonies-eslint-configs",children:"Map Colonies ESLint configs"})}),"\n",(0,i.jsx)(n.p,{children:"A collection of ESlint configs for various frameworks and enviornments."}),"\n",(0,i.jsx)(n.h2,{id:"available-configs",children:"Available Configs"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ts-base"}),": base configurations for typescript."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"react"}),": rules for react (extends react-app)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"jest"}),": rules for jest."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ npm install --save-dev eslint @map-colonies/eslint-config\n"})}),"\n",(0,i.jsx)(n.p,{children:"or"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ yarn add --dev eslint @map-colonies/eslint-config\n"})}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:["Add the configs you want to the extend section of your ",(0,i.jsx)(n.code,{children:"eslintConfig"})," of your ",(0,i.jsx)(n.code,{children:"package.json"}),", or to your ",(0,i.jsx)(n.code,{children:".eslintrc"})," configuration file.\n",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Note:"})," make sure to add ",(0,i.jsx)(n.code,{children:"ts-base"})," last."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:' "eslintConfig": {\n    "extends": [\n        "@map-colonies/eslint-config/react",\n        "@map-colonies/eslint-config/ts-base"\n      ]\n  }\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Then add the path to your TypeScript configuration file to the ",(0,i.jsx)(n.code,{children:"parserOptions"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'"eslintConfig": {\n    "parserOptions": {\n      "project": "./path/to/your/tsconfig.json"\n    }\n  }\n'})}),"\n",(0,i.jsx)(n.h2,{id:"adding-new-configs",children:"Adding new Configs"}),"\n",(0,i.jsx)(n.p,{children:"Add a new file and name it as you would like. Inside export the ESLint configuration."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"module.exports = {\n  extends: ['plugin:jest/recommended', 'plugin:jest/style'],\n  plugins: ['jest'],\n  env: {\n    'jest/globals': true,\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["after you finished developing the config, make sure it works by using the ",(0,i.jsx)(n.code,{children:"--print-config"})," flag of ESLint, in the project you use for testing."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ npx eslint --print-config index.ts\n"})}),"\n",(0,i.jsx)(n.p,{children:"Dont forget adding the config to this readme \ud83d\ude0a"}),"\n",(0,i.jsx)(n.h2,{id:"issues",children:"Issues"}),"\n",(0,i.jsx)(n.p,{children:"If any linting error is appearing twice, or you have any other problem, please open an issue with all the details you have."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["This page was generated from a remote source. you can find it on ",(0,i.jsx)(n.a,{href:"https://github.com/MapColonies/eslint-config/blob/master/README.md",children:"https://github.com/MapColonies/eslint-config/blob/master/README.md"})]})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var i=s(6540);const o={},t=i.createContext(o);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);