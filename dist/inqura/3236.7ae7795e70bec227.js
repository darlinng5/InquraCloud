"use strict";(self.webpackChunksakai=self.webpackChunksakai||[]).push([[3236],{7116:(x,T,o)=>{o.d(T,{R:()=>m});var e=o(4650),l=o(3162);let m=(()=>{class d{constructor(){}static#t=this.\u0275fac=function(p){return new(p||d)};static#e=this.\u0275cmp=e.Xpm({type:d,selectors:[["app-progress-bar"]],decls:1,vars:0,consts:[["mode","indeterminate"]],template:function(p,t){1&p&&e._UZ(0,"mat-progress-bar",0)},dependencies:[l.pW],encapsulation:2})}return d})()},3236:(x,T,o)=>{o.r(T),o.d(T,{ProductListModule:()=>w});var e=o(6895),l=o(9197),m=o(5861),d=o(805),y=o(6166),g=o(4159),p=o.n(g),t=o(4650),f=o(7747),h=o(5384),n=o(5593),u=o(7116),r=o(1383),v=o(5108),I=o(302);function _(i,U){1&i&&(t.TgZ(0,"div"),t._UZ(1,"app-progress-bar"),t.qZA())}function F(i,U){if(1&i&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"lempira"),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"lempira"),t.qZA()()),2&i){const a=U.$implicit;t.xp6(2),t.Oqu(a.name),t.xp6(2),t.Oqu(a.category),t.xp6(2),t.Oqu(a.actualInventary),t.xp6(2),t.Oqu(t.lcZ(9,5,a.actualCost)),t.xp6(3),t.Oqu(t.lcZ(12,7,a.actualInventoryCost))}}let H=(()=>{class i{constructor(a,s,c,Z){this.router=a,this.productService=s,this.eventService=c,this.messageService=Z,this.isLoading=!1,this.totalActualInventoryCost=0,this.redirect=!1,this.AccessName="/pages/product-list",this.GetProductsByWareHouse()}ngOnInit(){const s=this.eventService.getPermisionsException().split(",").map(c=>c.trim());this.redirect=s.includes(this.AccessName),this.redirect&&this.router.navigateByUrl("/pages/unautorized")}GetProductsByWareHouse(){this.isLoading=!0,this.productService.getProductsActualInventory(this.eventService.getToken()).subscribe(a=>{a.data?(this.products=a.data,this.message=a.message,this.calculateTotalActualInventoryCost()):this.messageService.add({severity:"error",summary:"Error",detail:"No tiene productos creados",life:3e3}),this.isLoading=!1},a=>{this.messageService.add({severity:"error",summary:"Error",detail:a.message,life:6e3}),this.isLoading=!1})}calculateTotalActualInventoryCost(){this.totalActualInventoryCost=this.products.reduce((a,s)=>a+s.actualInventoryCost,0)}printReport(){var a=this;return(0,m.Z)(function*(){a.isLoading=!0;const s=document.getElementById("print-section"),c=new y.ZP("p","pt","a4"),Z={background:"white",scale:3},Y=c.internal.pageSize.getWidth(),z=c.internal.pageSize.getHeight(),C={top:15,bottom:15,left:15,right:15},D=Y-C.left-C.right,L=z-C.top-C.bottom;function G(b,B,P){B.addImage(b,"PNG",C.left,P,D,0,void 0,"FAST")}try{const b=yield p()(s,Z),P=(b.toDataURL("image/png"),b.width),A=P/D;let O=b.height/A,S=C.top,R=1;for(;O>0;){const E=Math.min(L,O),M=document.createElement("canvas"),k=M.getContext("2d");M.width=P,M.height=E*A,k.drawImage(b,0,(R-1)*L*A,P,E*A,0,0,P,E*A),G(M.toDataURL("image/png"),c,S),O-=L,S=C.top,O>0&&(c.addPage(),R++)}const j=c.output("blob"),K=URL.createObjectURL(j);a.isLoading=!1,window.open(K,"_blank")}catch(b){console.error("Error generando PDF:",b),a.isLoading=!1}})()}static#t=this.\u0275fac=function(s){return new(s||i)(t.Y36(l.F0),t.Y36(f.M),t.Y36(h.P),t.Y36(d.ez))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["ng-component"]],features:[t._Bn([d.ez])],decls:35,vars:6,consts:[[4,"ngIf"],["id","print-section"],[1,"grid"],[1,"col-12"],[1,"card"],[2,"text-align","center"],[1,"product-table"],[4,"ngFor","ngForOf"],["colspan","4",1,"total-label"],["styleClass","mb-4"],[1,"my-2"],["align","left"],["pButton","","label","Imprimir","icon","pi pi-print",1,"p-button-outlined","mb-2",3,"click"]],template:function(s,c){1&s&&(t.YNc(0,_,2,0,"div",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h3"),t._uU(7,"Reporte de cantidades actuales"),t.qZA()(),t._uU(8),t.TgZ(9,"table",6)(10,"thead")(11,"tr")(12,"th"),t._uU(13,"Nombre"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Categor\xeda"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Inventario Actual"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Costo Actual"),t.qZA(),t.TgZ(20,"th"),t._uU(21,"Costo de Inventario Actual"),t.qZA()()(),t.TgZ(22,"tbody"),t.YNc(23,F,13,9,"tr",7),t.qZA(),t.TgZ(24,"tfoot")(25,"tr")(26,"td",8),t._uU(27,"Total Costo de Inventario Actual:"),t.qZA(),t.TgZ(28,"td"),t._uU(29),t.ALo(30,"lempira"),t.qZA()()()()()()()(),t.TgZ(31,"p-toolbar",9)(32,"div",10)(33,"p-divider",11)(34,"button",12),t.NdJ("click",function(){return c.printReport()}),t.qZA()()()()),2&s&&(t.Q6J("ngIf",c.isLoading),t.xp6(8),t.hij(" ",c.message," "),t.xp6(15),t.Q6J("ngForOf",c.products),t.xp6(6),t.Oqu(t.lcZ(30,4,c.totalActualInventoryCost)))},dependencies:[e.sg,e.O5,n.Hq,u.R,r.o,v.i,I.E],styles:["[_nghost-%COMP%] {\n      --primary-color: #023b78;\n      --secondary-color: #1565bb;\n      --background-color: #f0f8ff;\n      --text-color: #333;\n      --border-color: #ccc;\n      --hover-color: #e9ecef;\n    }\n\n    .product-table[_ngcontent-%COMP%] {\n      width: 100%;\n      border-collapse: collapse;\n      background-color: var(--background-color);\n      color: var(--text-color);\n      font-family: Arial, sans-serif;\n    }\n\n    .product-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .product-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n      padding: 12px;\n      text-align: left;\n      border-bottom: 1px solid var(--border-color);\n    }\n\n    .product-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n      background-color: var(--primary-color);\n      color: white;\n      font-weight: bold;\n    }\n\n    .product-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n      background-color: var(--hover-color);\n    }\n\n    .product-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] {\n      font-weight: bold;\n    }\n\n    .product-table[_ngcontent-%COMP%]   .total-label[_ngcontent-%COMP%] {\n      text-align: right;\n    }"]})}return i})(),J=(()=>{class i{static#t=this.\u0275fac=function(s){return new(s||i)};static#e=this.\u0275mod=t.oAB({type:i});static#n=this.\u0275inj=t.cJS({imports:[l.Bz.forChild([{path:"",component:H}]),l.Bz]})}return i})();var N=o(5552),W=o(4891);let w=(()=>{class i{static#t=this.\u0275fac=function(s){return new(s||i)};static#e=this.\u0275mod=t.oAB({type:i});static#n=this.\u0275inj=t.cJS({imports:[e.ez,J,n.hJ,N.K8,W.E,r.V,v.x]})}return i})()},1383:(x,T,o)=>{o.d(T,{V:()=>h,o:()=>f});var e=o(4650),l=o(6895),m=o(805);function d(n,u){1&n&&e.GkF(0)}function y(n,u){if(1&n&&(e.TgZ(0,"div",3),e.YNc(1,d,1,0,"ng-container",4),e.qZA()),2&n){const r=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",r.leftTemplate)}}function g(n,u){1&n&&e.GkF(0)}function p(n,u){if(1&n&&(e.TgZ(0,"div",5),e.YNc(1,g,1,0,"ng-container",4),e.qZA()),2&n){const r=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",r.rightTemplate)}}const t=["*"];let f=(()=>{class n{constructor(r){this.el=r}getBlockableElement(){return this.el.nativeElement.children[0]}ngAfterContentInit(){this.templates.forEach(r=>{switch(r.getType()){case"left":this.leftTemplate=r.template;break;case"right":this.rightTemplate=r.template}})}}return n.\u0275fac=function(r){return new(r||n)(e.Y36(e.SBq))},n.\u0275cmp=e.Xpm({type:n,selectors:[["p-toolbar"]],contentQueries:function(r,v,I){if(1&r&&e.Suo(I,m.jx,4),2&r){let _;e.iGM(_=e.CRH())&&(v.templates=_)}},hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass"},ngContentSelectors:t,decls:4,vars:6,consts:[["role","toolbar",3,"ngClass","ngStyle"],["class","p-toolbar-group-left",4,"ngIf"],["class","p-toolbar-group-right",4,"ngIf"],[1,"p-toolbar-group-left"],[4,"ngTemplateOutlet"],[1,"p-toolbar-group-right"]],template:function(r,v){1&r&&(e.F$t(),e.TgZ(0,"div",0),e.Hsn(1),e.YNc(2,y,2,1,"div",1),e.YNc(3,p,2,1,"div",2),e.qZA()),2&r&&(e.Tol(v.styleClass),e.Q6J("ngClass","p-toolbar p-component")("ngStyle",v.style),e.xp6(2),e.Q6J("ngIf",v.leftTemplate),e.xp6(1),e.Q6J("ngIf",v.rightTemplate))},dependencies:[l.mk,l.O5,l.tP,l.PC],styles:[".p-toolbar{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap}.p-toolbar-group-left,.p-toolbar-group-right{display:flex;align-items:center}\n"],encapsulation:2,changeDetection:0}),n})(),h=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.ez]}),n})()},5861:(x,T,o)=>{function e(m,d,y,g,p,t,f){try{var h=m[t](f),n=h.value}catch(u){return void y(u)}h.done?d(n):Promise.resolve(n).then(g,p)}function l(m){return function(){var d=this,y=arguments;return new Promise(function(g,p){var t=m.apply(d,y);function f(n){e(t,g,p,f,h,"next",n)}function h(n){e(t,g,p,f,h,"throw",n)}f(void 0)})}}o.d(T,{Z:()=>l})}}]);