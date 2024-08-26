"use strict";(self.webpackChunksakai=self.webpackChunksakai||[]).push([[3236],{7116:(x,m,n)=>{n.d(m,{R:()=>C});var l=n(4650),g=n(3162);let C=(()=>{class s{constructor(){}static#t=this.\u0275fac=function(u){return new(u||s)};static#o=this.\u0275cmp=l.Xpm({type:s,selectors:[["app-progress-bar"]],decls:1,vars:0,consts:[["mode","indeterminate"]],template:function(u,t){1&u&&l._UZ(0,"mat-progress-bar",0)},dependencies:[g.pW],encapsulation:2})}return s})()},3236:(x,m,n)=>{n.r(m),n.d(m,{ProductListModule:()=>Y});var l=n(6895),g=n(9197),C=n(5861),s=n(805),E=n(6166),P=n(4159),u=n.n(P),t=n(4650),B=n(7747),R=n(5384),Z=n(5593),S=n(7116),b=n(1383),O=n(5108),D=n(302);function F(e,T){1&e&&(t.TgZ(0,"div"),t._UZ(1,"app-progress-bar"),t.qZA())}function H(e,T){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"lempira"),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"lempira"),t.qZA()()),2&e){const o=T.$implicit;t.xp6(2),t.Oqu(o.name),t.xp6(2),t.Oqu(o.category),t.xp6(2),t.Oqu(o.actualInventary),t.xp6(2),t.Oqu(t.lcZ(9,5,o.actualCost)),t.xp6(3),t.Oqu(t.lcZ(12,7,o.actualInventoryCost))}}let W=(()=>{class e{constructor(o,r,a,h){this.router=o,this.productService=r,this.eventService=a,this.messageService=h,this.isLoading=!1,this.totalActualInventoryCost=0,this.redirect=!1,this.AccessName="/pages/product-list",this.GetProductsByWareHouse()}ngOnInit(){const r=this.eventService.getPermisionsException().split(",").map(a=>a.trim());this.redirect=r.includes(this.AccessName),this.redirect&&this.router.navigateByUrl("/pages/unautorized")}GetProductsByWareHouse(){this.isLoading=!0,this.productService.getProductsActualInventory(this.eventService.getToken()).subscribe(o=>{o.data?(this.products=o.data,this.message=o.message,this.calculateTotalActualInventoryCost()):this.messageService.add({severity:"error",summary:"Error",detail:"No tiene productos creados",life:3e3}),this.isLoading=!1},o=>{this.messageService.add({severity:"error",summary:"Error",detail:o.message,life:6e3}),this.isLoading=!1})}calculateTotalActualInventoryCost(){this.totalActualInventoryCost=this.products.reduce((o,r)=>o+r.actualInventoryCost,0)}printReport(){var o=this;return(0,C.Z)(function*(){o.isLoading=!0;const r=document.getElementById("print-section"),a=new E.ZP("p","pt","a4"),h={background:"white",scale:3},j=a.internal.pageSize.getWidth(),G=a.internal.pageSize.getHeight(),c={top:15,bottom:15,left:15,right:15},L=j-c.left-c.right,A=G-c.top-c.bottom;function q(i,M,d){M.addImage(i,"PNG",c.left,d,L,0,void 0,"FAST")}try{const i=yield u()(r,h),d=(i.toDataURL("image/png"),i.width),p=d/L;let v=i.height/p,U=c.top,I=1;for(;v>0;){const y=Math.min(A,v),f=document.createElement("canvas"),V=f.getContext("2d");f.width=d,f.height=y*p,V.drawImage(i,0,(I-1)*A*p,d,y*p,0,0,d,y*p),q(f.toDataURL("image/png"),a,U),v-=A,U=c.top,v>0&&(a.addPage(),I++)}const Q=a.output("blob"),X=URL.createObjectURL(Q);o.isLoading=!1,window.open(X,"_blank")}catch(i){console.error("Error generando PDF:",i),o.isLoading=!1}})()}static#t=this.\u0275fac=function(r){return new(r||e)(t.Y36(g.F0),t.Y36(B.M),t.Y36(R.P),t.Y36(s.ez))};static#o=this.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],features:[t._Bn([s.ez])],decls:35,vars:6,consts:[[4,"ngIf"],["id","print-section"],[1,"grid"],[1,"col-12"],[1,"card"],[2,"text-align","center"],[1,"product-table"],[4,"ngFor","ngForOf"],["colspan","4",1,"total-label"],["styleClass","mb-4"],[1,"my-2"],["align","left"],["pButton","","label","Imprimir","icon","pi pi-print",1,"p-button-outlined","mb-2",3,"click"]],template:function(r,a){1&r&&(t.YNc(0,F,2,0,"div",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h3"),t._uU(7,"Reporte de cantidades actuales"),t.qZA()(),t._uU(8),t.TgZ(9,"table",6)(10,"thead")(11,"tr")(12,"th"),t._uU(13,"Nombre"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Categor\xeda"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Inventario Actual"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Costo Actual"),t.qZA(),t.TgZ(20,"th"),t._uU(21,"Costo de Inventario Actual"),t.qZA()()(),t.TgZ(22,"tbody"),t.YNc(23,H,13,9,"tr",7),t.qZA(),t.TgZ(24,"tfoot")(25,"tr")(26,"td",8),t._uU(27,"Total Costo de Inventario Actual:"),t.qZA(),t.TgZ(28,"td"),t._uU(29),t.ALo(30,"lempira"),t.qZA()()()()()()()(),t.TgZ(31,"p-toolbar",9)(32,"div",10)(33,"p-divider",11)(34,"button",12),t.NdJ("click",function(){return a.printReport()}),t.qZA()()()()),2&r&&(t.Q6J("ngIf",a.isLoading),t.xp6(8),t.hij(" ",a.message," "),t.xp6(15),t.Q6J("ngForOf",a.products),t.xp6(6),t.Oqu(t.lcZ(30,4,a.totalActualInventoryCost)))},dependencies:[l.sg,l.O5,Z.Hq,S.R,b.o,O.i,D.E],styles:["[_nghost-%COMP%] {\n      --primary-color: #023b78;\n      --secondary-color: #1565bb;\n      --background-color: #f0f8ff;\n      --text-color: #333;\n      --border-color: #ccc;\n      --hover-color: #e9ecef;\n    }\n\n    .product-table[_ngcontent-%COMP%] {\n      width: 100%;\n      border-collapse: collapse;\n      background-color: var(--background-color);\n      color: var(--text-color);\n      font-family: Arial, sans-serif;\n    }\n\n    .product-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .product-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n      padding: 12px;\n      text-align: left;\n      border-bottom: 1px solid var(--border-color);\n    }\n\n    .product-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n      background-color: var(--primary-color);\n      color: white;\n      font-weight: bold;\n    }\n\n    .product-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n      background-color: var(--hover-color);\n    }\n\n    .product-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] {\n      font-weight: bold;\n    }\n\n    .product-table[_ngcontent-%COMP%]   .total-label[_ngcontent-%COMP%] {\n      text-align: right;\n    }"]})}return e})(),z=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#o=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[g.Bz.forChild([{path:"",component:W}]),g.Bz]})}return e})();var N=n(5552),J=n(4891);let Y=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#o=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[l.ez,z,Z.hJ,N.K8,J.E,b.V,O.x]})}return e})()}}]);