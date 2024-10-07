"use strict";(self.webpackChunkinfops_portal=self.webpackChunkinfops_portal||[]).push([[9927],{2944:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var r=t(4848),i=t(8453);const s={custom_edit_url:null},o="Telemetry",l={id:"knowledge-base/packages/telemetry/README",title:"Telemetry",description:"Motive",source:"@site/docs/knowledge-base/packages/telemetry/README.md",sourceDirName:"knowledge-base/packages/telemetry",slug:"/knowledge-base/packages/telemetry/",permalink:"/docs/knowledge-base/packages/telemetry/",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"knowledgeBaseSidebar",previous:{title:"read-pkg",permalink:"/docs/knowledge-base/packages/read-pkg/"},next:{title:"tsconfig",permalink:"/docs/knowledge-base/packages/tsconfig/"}},c={},a=[{value:"Motive",id:"motive",level:2},{value:"Manual for easy local grafana deployment",id:"manual-for-easy-local-grafana-deployment",level:2},{value:"example",id:"example",level:2},{value:"Tracing",id:"tracing",level:3},{value:"Metrics",id:"metrics",level:3},{value:"Semantic Conventions",id:"semantic-conventions",level:2},{value:"The package&#39;s Semantic Conventions submodule defines a common set of (semantic) attributes which provide meaning to data when collecting, producing and consuming it.",id:"the-packages-semantic-conventions-submodule-defines-a-common-set-of-semantic-attributes-which-provide-meaning-to-data-when-collecting-producing-and-consuming-it",level:4},{value:"Configuration",id:"configuration",level:2},{value:"Common configuration",id:"common-configuration",level:3},{value:"Tracing configuration",id:"tracing-configuration",level:3},{value:"Metric configuration",id:"metric-configuration",level:3},{value:"How to release",id:"how-to-release",level:3}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"telemetry",children:"Telemetry"})}),"\n",(0,r.jsx)(n.h2,{id:"motive",children:"Motive"}),"\n",(0,r.jsx)(n.p,{children:"This package goal is to make the experience of configuring and working with OpenTelemetry easier."}),"\n",(0,r.jsx)(n.h2,{id:"manual-for-easy-local-grafana-deployment",children:(0,r.jsx)(n.a,{href:"https://github.com/MapColonies/telemetry/blob/master/docs/localManual.md",children:"Manual for easy local grafana deployment"})}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"example"}),"\n",(0,r.jsxs)(n.p,{children:["Below are short examples for tracing and metrics. More examples are available at the ",(0,r.jsx)(n.a,{href:"https://github.com/MapColonies/telemetry/blob/master/examples/",children:"examples folder"}),", and the various opentelemetry repos."]}),"\n",(0,r.jsx)(n.h3,{id:"tracing",children:"Tracing"}),"\n",(0,r.jsx)(n.p,{children:"The following code shows a simple example of how to work with tracing. please notice that you need to manually install any auto-instrumentation library that you require."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { Tracing } from '@map-colonies/telemetry';\nimport { trace } from '@opentelemetry/api';\n\nconst tracing = new Tracing();\n\ntracing.start();\n\nconst tracer = trace.getTracer('tracing-name')\n\nconst span = tracer.startSpan('some-action');\n\nspan.setAttribute('some-attribute');\n\n// DO STUFF\n\nspan.end();\n\ntracing.stop().then(() => console.log('done'));\n"})}),"\n",(0,r.jsx)(n.p,{children:"Another way for initialize tracing with custom resource:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { Tracing } from '@map-colonies/telemetry';\nimport { Resource } from '@opentelemetry/resources';\n\nconst resource = new Resource({ 'service.version': number, 'service.name': 'my-service-name' });\n\nconst tracing = new Tracing([], resource);\n...\n"})}),"\n",(0,r.jsx)(n.h3,{id:"metrics",children:"Metrics"}),"\n",(0,r.jsx)(n.p,{children:"The following code shows a simple example of how to work with metrics."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { Metrics } from '@map-colonies/telemetry';\n\nconst metrics = new Metrics('sample-meter');\n\nconst meter = metrics.start();\n\nconst counter = meter.createCounter('sample_counter');\n\ncounter.add(1);\n\nmetrics.stop().then(() => console.log('done'));\n"})}),"\n",(0,r.jsx)(n.h2,{id:"semantic-conventions",children:"Semantic Conventions"}),"\n",(0,r.jsx)(n.h4,{id:"the-packages-semantic-conventions-submodule-defines-a-common-set-of-semantic-attributes-which-provide-meaning-to-data-when-collecting-producing-and-consuming-it",children:"The package's Semantic Conventions submodule defines a common set of (semantic) attributes which provide meaning to data when collecting, producing and consuming it."}),"\n",(0,r.jsxs)(n.p,{children:["Based on the ",(0,r.jsx)(n.a,{href:"https://opentelemetry.io/docs/specs/semconv/",children:"official OpenTelemetry conventions"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/MapColonies/telemetry/blob/master/src/semanticConventions/README.md",children:"Link to full documentation"})}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.h3,{id:"common-configuration",children:"Common configuration"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"name"}),(0,r.jsx)(n.th,{children:"allowed value"}),(0,r.jsx)(n.th,{children:"default value"}),(0,r.jsx)(n.th,{children:"description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"TELEMETRY_SERVICE_NAME"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"from package.json"}),(0,r.jsx)(n.td,{children:"The service name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"TELEMETRY_SERVICE_VERSION"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"from package.json"}),(0,r.jsx)(n.td,{children:"The service version"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"TELEMETRY_HOST_NAME"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"os.hostname()"})}),(0,r.jsx)(n.td,{children:"The host name"})]})]})]}),"\n",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.h3,{id:"tracing-configuration",children:"Tracing configuration"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"name"}),(0,r.jsx)(n.th,{children:"allowed value"}),(0,r.jsx)(n.th,{children:"default value"}),(0,r.jsx)(n.th,{children:"description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"TELEMETRY_TRACING_ENABLED"}),(0,r.jsx)(n.td,{children:"'true', 'false'"}),(0,r.jsx)(n.td,{children:"'false'"}),(0,r.jsx)(n.td,{children:"Should Tracing be enabled"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["TELEMETRY_TRACING_URL",(0,r.jsx)(n.span,{style:{color:"red"},children:"*"})]}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"http://localhost:4318/v1/traces",children:"http://localhost:4318/v1/traces"})}),(0,r.jsx)(n.td,{children:"The URL to the OpenTelemetry Collector"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"TELEMETRY_TRACING_RATIO"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"The amount of traces to sample"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.span,{style:{color:"red"},children:"*"})," required (only when tracing is enabled).\n",(0,r.jsx)(n.br,{})]}),"\n",(0,r.jsx)(n.h3,{id:"metric-configuration",children:"Metric configuration"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"name"}),(0,r.jsx)(n.th,{children:"allowed value"}),(0,r.jsx)(n.th,{children:"default value"}),(0,r.jsx)(n.th,{children:"description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"TELEMETRY_METRICS_ENABLED"}),(0,r.jsx)(n.td,{children:"'true', 'false'"}),(0,r.jsx)(n.td,{children:"'false'"}),(0,r.jsx)(n.td,{children:"Should Metrics be enabled"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["TELEMETRY_METRICS_URL",(0,r.jsx)(n.span,{style:{color:"red"},children:"*"})]}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"http://localhost:4318/v1/metrics",children:"http://localhost:4318/v1/metrics"})}),(0,r.jsx)(n.td,{children:"The URL to the OpenTelemetry Collector"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"TELEMETRY_METRICS_INTERVAL"}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"15000"}),(0,r.jsx)(n.td,{children:"The interval in miliseconds between sending data to the collector"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.span,{style:{color:"red"},children:"*"})," required (only when tracing is enabled)."]}),"\n",(0,r.jsx)(n.h3,{id:"how-to-release",children:"How to release"}),"\n",(0,r.jsxs)(n.p,{children:["Run the command ",(0,r.jsx)(n.code,{children:"npm run release --"})," to bump the version in all the files and create a changelog."]}),"\n",(0,r.jsxs)(n.p,{children:["For more detailed documentation and examples check: ",(0,r.jsx)(n.a,{href:"https://github.com/conventional-changelog/standard-version",children:"https://github.com/conventional-changelog/standard-version"})]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["This page was generated from a remote source. you can find it on ",(0,r.jsx)(n.a,{href:"https://github.com/MapColonies/telemetry/blob/master/README.md",children:"https://github.com/MapColonies/telemetry/blob/master/README.md"})]})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(6540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);