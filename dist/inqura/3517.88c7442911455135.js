"use strict";(self.webpackChunksakai=self.webpackChunksakai||[]).push([[3517],{3517:(P,h,i)=>{i.r(h),i.d(h,{AccountReceivableModule:()=>w});var c=i(6895),u=i(9197),g=i(805),l=i(574),e=i(4650),b=i(7747),R=i(5384),d=i(5593),m=i(5552),v=i(2453),y=i(6768);function Z(a,M){if(1&a&&(e.TgZ(0,"tr",14)(1,"th",15),e._uU(2),e.qZA(),e.TgZ(3,"th",15),e._uU(4),e.qZA(),e.TgZ(5,"th",15),e._uU(6),e.ALo(7,"currency"),e.qZA(),e.TgZ(8,"th",15),e._uU(9),e.ALo(10,"date"),e.qZA(),e.TgZ(11,"th"),e._uU(12),e.ALo(13,"currency"),e.qZA(),e.TgZ(14,"th"),e._uU(15),e.qZA(),e.TgZ(16,"th"),e._uU(17),e.qZA(),e.TgZ(18,"th",15),e._uU(19),e.ALo(20,"currency"),e.qZA()()),2&a){const t=M.$implicit;e.xp6(2),e.Oqu(t.id),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(e.gM2(7,8,t.total,"L.","symbol","1.2-2")),e.xp6(3),e.Oqu(e.xi3(10,13,t.firstInvoice,"dd/MM/yyyy")),e.xp6(3),e.Oqu(e.gM2(13,16,t.maxAmountCredit,"L.","symbol","1.2-2")),e.xp6(3),e.Oqu(t.maxDayCredit),e.xp6(2),e.Oqu(t.dayCreditRest),e.xp6(2),e.Oqu(e.gM2(20,21,t.amoutCreditRest,"L.","symbol","1.2-2"))}}let C=(()=>{class a{constructor(t,o,s,r){this.router=t,this.productService=o,this.messageService=s,this.eventService=r,this.loading=!1,this.InvoiceList=[],this.payReport=[],this.redirect=!1,this.AccessName="/pages/receivable",this.accountFilter="Receivable",this.accountReceivableReport=[],this.AccountFilterList=[]}ngOnInit(){const o=this.eventService.getPermisionsException().split(",").map(s=>s.trim());this.redirect=o.includes(this.AccessName),this.redirect&&this.router.navigateByUrl("/pages/unautorized"),this.userSelected="",this.wareHouseSelectd="",this.AccountFilterList.push({value:"Receivable",viewValue:"Cuentas x Cobrar"}),this.AccountFilterList.push({value:"Payable",viewValue:"Cuentas x Pagar"}),this.GetUsersByRole(),this.GetWareHouseByRole()}load(){this.loading=!0,this.getAccountReceibableReport()}getAccountReceibableReport(){const t=this.eventService.getToken();this.productService.GetAccountReceivableReport(t,this.accountFilter).subscribe(o=>{console.log(o),o.data?(this.accountReceivableReport=o.data,console.log(this.accountReceivableReport)):this.messageService.add({severity:"error",summary:"Error",detail:o.message,life:3e3}),this.loading=!1},o=>{this.messageService.add({severity:"error",summary:"Error",detail:o.message,life:3e3}),this.loading=!1})}exportToExcel(){const o=[["Id","Cliente","Credito Actual","Factura Antigua","Maximo Credito Autorizado","Maximo Dias Autorizado","Dias Sobregirado","Monto Sobregirado"]];this.accountReceivableReport.forEach(n=>{o.push([n.id,n.name,n.total,n.firstInvoice,n.maxAmountCredit,n.maxDayCredit,n.dayCreditRest,n.amoutCreditRest])});const s=l.P6.aoa_to_sheet(o),r=l.P6.book_new();l.P6.book_append_sheet(r,s,"Detalle de CC");const f=[["Nombre de Pago","Tipo de Pago","Total"]];this.payReport.forEach(n=>{f.push([n.payName,n.payType,n.total])}),l.P6.aoa_to_sheet(f),l.NC(r,"DetalllesCC.xlsx")}filterUser(t){this.accountFilter=""==t||null==t?"":t}GetUsersByRole(){this.isLoading=!0,this.productService.GetUsersByRoleValues(this.eventService.getToken()).subscribe(t=>{t.data&&(this.usersDropDown=t.data,console.log(this.usersDropDown))})}filterWareHouse(t){this.wareHouseSelectd=t,console.log(this.wareHouseSelectd)}GetWareHouseByRole(){this.productService.GetWareHouseByRoleValues(this.eventService.getToken()).subscribe(t=>{t.data&&(this.wareHouseDropDown=t.data),this.isLoading=!1})}static#e=this.\u0275fac=function(o){return new(o||a)(e.Y36(u.F0),e.Y36(b.M),e.Y36(g.ez),e.Y36(R.P))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["ng-component"]],features:[e._Bn([g.ez])],decls:36,vars:6,consts:[["id","print-section"],[1,"grid"],[1,"col-12"],[1,"card"],[2,"display","flex","flex-wrap","wrap","justify-content","space-between"],[2,"flex","1","margin","5px"],["htmlFor","age1"],[3,"IsCreating","showFilter","DropDownDataSource","ValueSelectedChange"],["label","Search","icon","pi pi-search","iconPos","right",1,"space",2,"width","100%",3,"loading","onClick"],["id","PrintFull"],[2,"background-color","#7288a2","color","white"],["style","font-size: small;",4,"ngFor","ngForOf"],["printSectionId","PrintFull","ngxPrint","","pButton","","pRipple","","label","imprimir","icon","pi pi-print",1,"p-button-help"],["pButton","","pRipple","","label","Exportar a Excel","icon","pi pi-cloud-download",1,"p-button-success","mr-2",2,"margin-left","10px",3,"disabled","click"],[2,"font-size","small"],["align","left"]],template:function(o,s){1&o&&(e._UZ(0,"p-toast"),e.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"label",6),e._uU(8,"Tipo"),e.qZA(),e.TgZ(9,"app-drop-down",7),e.NdJ("ValueSelectedChange",function(A){return s.filterUser(A)}),e.qZA()(),e.TgZ(10,"div",5)(11,"p-button",8),e.NdJ("onClick",function(){return s.load()}),e.qZA()()(),e._UZ(12,"p")(13,"p"),e.TgZ(14,"div",9)(15,"table")(16,"tr",10)(17,"th"),e._uU(18,"Id"),e.qZA(),e.TgZ(19,"th"),e._uU(20,"Cliente"),e.qZA(),e.TgZ(21,"th"),e._uU(22,"Credito Actual"),e.qZA(),e.TgZ(23,"th"),e._uU(24,"Factura Antigua"),e.qZA(),e.TgZ(25,"th"),e._uU(26,"Maximo Credito Autorizado"),e.qZA(),e.TgZ(27,"th"),e._uU(28,"Maximo Dias Autorizado"),e.qZA(),e.TgZ(29,"th"),e._uU(30,"Dias Sobregirado"),e.qZA(),e.TgZ(31,"th"),e._uU(32,"Monto Sobregirado"),e.qZA()(),e.YNc(33,Z,21,26,"tr",11),e.qZA()()()()()(),e._UZ(34,"button",12),e.TgZ(35,"button",13),e.NdJ("click",function(){return s.exportToExcel()}),e.qZA()),2&o&&(e.xp6(9),e.Q6J("IsCreating",!1)("showFilter",!1)("DropDownDataSource",s.AccountFilterList),e.xp6(2),e.Q6J("loading",s.loading),e.xp6(22),e.Q6J("ngForOf",s.accountReceivableReport),e.xp6(2),e.Q6J("disabled",!s.accountReceivableReport||0===s.accountReceivableReport.length))},dependencies:[c.sg,d.Hq,d.zx,m.IH,v.FN,y.t,c.H9,c.uU],styles:["table[_ngcontent-%COMP%] {\n    border-collapse: collapse;\n    width: 100%;\n  }\n  \n  tr[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #ddd;\n  }\n  .space[_ngcontent-%COMP%] {\nwidth: 4px;\nheight: auto;\nmargin-left: 20px;\n}"]})}return a})(),x=(()=>{class a{static#e=this.\u0275fac=function(o){return new(o||a)};static#t=this.\u0275mod=e.oAB({type:a});static#o=this.\u0275inj=e.cJS({imports:[u.Bz.forChild([{path:"",component:C}]),u.Bz]})}return a})();var T=i(4006),S=i(5117),U=i(585),F=i(2210),D=i(4891);let w=(()=>{class a{static#e=this.\u0275fac=function(o){return new(o||a)};static#t=this.\u0275mod=e.oAB({type:a});static#o=this.\u0275inj=e.cJS({imports:[c.ez,x,T.u5,d.hJ,c.ez,S.L,U._8,m.K8,v.EV,F.kW,D.E]})}return a})()}}]);