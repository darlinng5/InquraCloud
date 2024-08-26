"use strict";(self.webpackChunksakai=self.webpackChunksakai||[]).push([[2378],{2378:(x,m,s)=>{s.r(m),s.d(m,{AccountTransactionModule:()=>K});var d=s(6895),p=s(9197),h=s(805);class u{constructor(a,n,e,o){this.comments=a,this.date=n,this.userId=e,this.lines=o}}class T{constructor(a,n,e,o){this.creditAccount=isNaN(a)?0:a,this.creditAmount=isNaN(n)?0:n,this.debitAccount=isNaN(e)?0:e,this.debitAmount=isNaN(o)?0:o}}var t=s(4650),g=s(5384),f=s(7747),l=s(4006),_=s(5593),M=s(7116),v=s(1383),A=s(2453);function b(i,a){1&i&&(t.TgZ(0,"div"),t._UZ(1,"app-progress-bar"),t.qZA())}function Z(i,a){if(1&i){const n=t.EpF();t.TgZ(0,"div",27),t.NdJ("click",function(){const r=t.CHM(n).$implicit,c=t.oxw(2).index,C=t.oxw();return t.KtG(C.selectAccount(c,"credit",r))}),t._uU(1),t.qZA()}if(2&i){const n=a.$implicit;t.xp6(1),t.hij(" ",n.name," ")}}function y(i,a){if(1&i&&(t.TgZ(0,"div",25),t.YNc(1,Z,2,1,"div",26),t.qZA()),2&i){const n=t.oxw().index,e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.filteredCreditAccounts[n])}}function P(i,a){if(1&i){const n=t.EpF();t.TgZ(0,"div",27),t.NdJ("click",function(){const r=t.CHM(n).$implicit,c=t.oxw(2).index,C=t.oxw();return t.KtG(C.selectAccount(c,"debit",r))}),t._uU(1),t.qZA()}if(2&i){const n=a.$implicit;t.xp6(1),t.hij(" ",n.name," ")}}function O(i,a){if(1&i&&(t.TgZ(0,"div",25),t.YNc(1,P,2,1,"div",26),t.qZA()),2&i){const n=t.oxw().index,e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.filteredDebitAccounts[n])}}function D(i,a){if(1&i){const n=t.EpF();t.TgZ(0,"div",14)(1,"div",15)(2,"input",16),t.NdJ("ngModelChange",function(o){const c=t.CHM(n).$implicit;return t.KtG(c.creditAccount=o)})("input",function(){const r=t.CHM(n).index,c=t.oxw();return t.KtG(c.filterAccounts(r,"credit"))}),t.qZA(),t.YNc(3,y,2,1,"div",17),t.qZA(),t.TgZ(4,"div",15)(5,"input",18),t.NdJ("ngModelChange",function(o){const c=t.CHM(n).$implicit;return t.KtG(c.creditDescription=o)}),t.qZA()(),t.TgZ(6,"div",15)(7,"input",19),t.NdJ("ngModelChange",function(o){const c=t.CHM(n).$implicit;return t.KtG(c.creditAmount=o)}),t.qZA()(),t._UZ(8,"div",20),t.TgZ(9,"div",15)(10,"input",21),t.NdJ("ngModelChange",function(o){const c=t.CHM(n).$implicit;return t.KtG(c.debitAccount=o)})("input",function(){const r=t.CHM(n).index,c=t.oxw();return t.KtG(c.filterAccounts(r,"debit"))}),t.qZA(),t.YNc(11,O,2,1,"div",17),t.qZA(),t.TgZ(12,"div",15)(13,"input",18),t.NdJ("ngModelChange",function(o){const c=t.CHM(n).$implicit;return t.KtG(c.debitDescription=o)}),t.qZA()(),t.TgZ(14,"div",15)(15,"input",22),t.NdJ("ngModelChange",function(o){const c=t.CHM(n).$implicit;return t.KtG(c.debitAmount=o)}),t.qZA()(),t.TgZ(16,"p-button",23),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.addLine())}),t.qZA(),t.TgZ(17,"p-button",24),t.NdJ("click",function(){const r=t.CHM(n).index,c=t.oxw();return t.KtG(c.removeLine(r))}),t.qZA()()}if(2&i){const n=a.$implicit,e=a.index,o=t.oxw();t.xp6(2),t.Q6J("ngModel",n.creditAccount),t.xp6(1),t.Q6J("ngIf",o.filteredCreditAccounts[e]&&o.filteredCreditAccounts[e].length>0),t.xp6(2),t.Q6J("title",n.creditDescription)("ngModel",n.creditDescription),t.xp6(2),t.Q6J("ngModel",n.creditAmount),t.xp6(3),t.Q6J("ngModel",n.debitAccount),t.xp6(1),t.Q6J("ngIf",o.filteredDebitAccounts[e]&&o.filteredDebitAccounts[e].length>0),t.xp6(2),t.Q6J("title",n.debitDescription)("ngModel",n.debitDescription),t.xp6(2),t.Q6J("ngModel",n.debitAmount)}}let J=(()=>{class i{constructor(n,e,o){this.messageService=n,this.eventService=e,this.productService=o,this.isLoading=!1,this.lines=[{creditAccount:"",creditAmount:0,creditDescription:"",debitAccount:"",debitAmount:0,debitDescription:""}],this.comments="",this.date="",this.allAccounts=[],this.filteredCreditAccounts=[[]],this.filteredDebitAccounts=[[]],this.getAccounts()}addLine(){this.lines.push({creditAccount:"",creditAmount:0,creditDescription:"",debitAccount:"",debitAmount:0,debitDescription:""}),this.filteredCreditAccounts.push([]),this.filteredDebitAccounts.push([])}removeLine(n){this.lines.splice(n,1),this.filteredCreditAccounts.splice(n,1),this.filteredDebitAccounts.splice(n,1)}filterAccounts(n,e){const o="credit"===e?this.lines[n].creditAccount:this.lines[n].debitAccount,r=this.allAccounts.filter(c=>c.name.toLowerCase().includes(o.toLowerCase()));"credit"===e?this.filteredCreditAccounts[n]=r:this.filteredDebitAccounts[n]=r}selectAccount(n,e,o){"credit"===e?(this.lines[n].creditAccount=o.id.toString(),this.lines[n].creditDescription=o.description,this.filteredCreditAccounts[n]=[]):(this.lines[n].debitAccount=o.id.toString(),this.lines[n].debitDescription=o.description,this.filteredDebitAccounts[n]=[])}getTotalCredits(){return this.lines.reduce((n,e)=>n+e.creditAmount,0)}getTotalDebits(){return this.lines.reduce((n,e)=>n+e.debitAmount,0)}save(){this.getTotalCredits()!=this.getTotalDebits()&&this.messageService.add({severity:"error",summary:"Error",detail:"El monto total de credito debe ser igual al monto de debito",life:3e3}),console.log(this.lines);const n=this.lines.map(r=>new T(parseInt(r.creditAccount),r.creditAmount,parseInt(r.debitAccount),r.debitAmount)),e=this.eventService.getToken();var o=new u(this.comments,this.date,e,n);this.PostAccountTransaction(o)}getAccounts(){this.isLoading=!0;const n=this.eventService.getToken();this.productService.GetAccounts(n).subscribe(e=>{console.log(e),e.data?(this.allAccounts=e.data,console.log(this.allAccounts)):this.messageService.add({severity:"error",summary:"Error",detail:e.message,life:3e3}),this.isLoading=!1},e=>{this.isLoading=!1,this.messageService.add({severity:"error",summary:"Error",detail:e.message,life:3e3})})}PostAccountTransaction(n){this.isLoading=!0,this.productService.PostAccountTransaction(n).subscribe(e=>{console.log(e),e.data?(this.lines=[],this.comments="",this.date="",this.addLine(),this.messageService.add({severity:"success",summary:"Success",detail:"Exito al guardar los datos",life:3e3})):this.messageService.add({severity:"error",summary:"Error",detail:e.message,life:3e3}),this.isLoading=!1},e=>{this.messageService.add({severity:"error",summary:"Error",detail:e.message,life:3e3}),this.isLoading=!1})}static#t=this.\u0275fac=function(e){return new(e||i)(t.Y36(h.ez),t.Y36(g.P),t.Y36(f.M))};static#n=this.\u0275cmp=t.Xpm({type:i,selectors:[["ng-component"]],features:[t._Bn([h.ez])],decls:24,vars:14,consts:[[1,"card","px-6","py-6"],[4,"ngIf"],[1,"container"],["class","form-row",4,"ngFor","ngForOf"],[1,"totals"],[1,"additional-info"],[1,"input-group","full-width"],["placeholder","Comentarios",3,"ngModel","ngModelChange"],["type","date",3,"ngModel","ngModelChange"],["styleClass","mb-4"],[1,"my-2"],["routerLink","/"],["pButton","","pRipple","","label","Cancelar","icon","pi pi-arrow-circle-left",1,"mr-2","inline-block"],["pButton","","pRipple","","label","Guardar","icon","pi pi-save",1,"p-button-help",3,"click"],[1,"form-row"],[1,"input-group"],["type","text","placeholder","Cuenta Credito",3,"ngModel","ngModelChange","input"],["class","autocomplete",4,"ngIf"],["readonly","true","type","text","placeholder","Desc.",3,"title","ngModel","ngModelChange"],["type","number","placeholder","Monto Credito",3,"ngModel","ngModelChange"],[1,"separator"],["type","text","placeholder","Cuenta Debito",3,"ngModel","ngModelChange","input"],["type","number","placeholder","Monto Debito",3,"ngModel","ngModelChange"],["icon","pi pi-plus","styleClass","p-button-rounded p-button-success p-button-text",3,"click"],["icon","pi pi-trash","styleClass","p-button-rounded p-button-danger p-button-text",3,"click"],[1,"autocomplete"],["class","autocomplete-item",3,"click",4,"ngFor","ngForOf"],[1,"autocomplete-item",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,b,2,0,"div",1),t._UZ(2,"p-toast"),t.TgZ(3,"div",2)(4,"h4"),t._uU(5,"Crear Partidas Contables"),t.qZA(),t.YNc(6,D,18,10,"div",3),t.TgZ(7,"div",4)(8,"div"),t._uU(9),t.ALo(10,"currency"),t.qZA(),t.TgZ(11,"div"),t._uU(12),t.ALo(13,"currency"),t.qZA()(),t.TgZ(14,"div",5)(15,"div",6)(16,"textarea",7),t.NdJ("ngModelChange",function(c){return o.comments=c}),t.qZA()(),t.TgZ(17,"div",6)(18,"input",8),t.NdJ("ngModelChange",function(c){return o.date=c}),t.qZA()()()()(),t.TgZ(19,"p-toolbar",9)(20,"div",10)(21,"a",11),t._UZ(22,"button",12),t.qZA(),t.TgZ(23,"button",13),t.NdJ("click",function(){return o.save()}),t.qZA()()()),2&e&&(t.xp6(1),t.Q6J("ngIf",o.isLoading),t.xp6(5),t.Q6J("ngForOf",o.lines),t.xp6(3),t.hij("Total Cr\xe9ditos: ",t.Dn7(10,6,o.getTotalCredits(),"L. ","symbol"),""),t.xp6(3),t.hij("Total D\xe9bitos: ",t.Dn7(13,10,o.getTotalDebits(),"L. ","symbol"),""),t.xp6(4),t.Q6J("ngModel",o.comments),t.xp6(2),t.Q6J("ngModel",o.date))},dependencies:[d.sg,d.O5,p.rH,l.Fj,l.wV,l.JJ,l.On,_.Hq,_.zx,M.R,v.o,A.FN,d.H9],styles:[".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 1000px;\n  margin-bottom: 10px; \n}\n\n.input-group[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  flex: 1;\n  position: relative; \n}\n\n.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  font-size: 14px;\n}\n\n.input-group[_ngcontent-%COMP%]:last-of-type {\n  margin-right: 0;\n}\n\n.separator[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 40px;\n  background-color: black;\n  margin: 0 20px;\n}\n\n.add-line[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.add-line[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n\n.remove-line[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #dc3545;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.remove-line[_ngcontent-%COMP%]:hover {\n  background-color: #c82333;\n}\n\n.save[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 10px 20px;\n  background-color: #28a745;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.save[_ngcontent-%COMP%]:hover {\n  background-color: #218838;\n}\n\n.totals[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  max-width: 1000px;\n  margin-top: 20px;\n}\n\n.additional-info[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 10px;\n}\n\n.autocomplete[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background-color: white;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  max-height: 150px;\n  overflow-y: auto;\n  z-index: 1000;\n}\n\n.autocomplete-item[_ngcontent-%COMP%] {\n  padding: 10px;\n  cursor: pointer;\n}\n\n.autocomplete-item[_ngcontent-%COMP%]:hover {\n  background-color: #f1f1f1;\n}\n\n@media (max-width: 768px) {\n  .form-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .separator[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .input-group[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-bottom: 10px;\n  }\n\n  .additional-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n  }\n\n  .totals[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .save[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}"]})}return i})(),N=(()=>{class i{static#t=this.\u0275fac=function(e){return new(e||i)};static#n=this.\u0275mod=t.oAB({type:i});static#e=this.\u0275inj=t.cJS({imports:[p.Bz.forChild([{path:"",component:J}]),p.Bz]})}return i})();var w=s(4144),L=s(3805),E=s(9549),k=s(7392),S=s(3238),F=s(585),H=s(4891);let K=(()=>{class i{static#t=this.\u0275fac=function(e){return new(e||i)};static#n=this.\u0275mod=t.oAB({type:i});static#e=this.\u0275inj=t.cJS({imports:[d.ez,N,l.u5,_.hJ,l.u5,H.E,l.UX,w.c,L.Bb,E.lN,k.Ps,S.XK,v.V,F._8,A.EV]})}return i})()},7116:(x,m,s)=>{s.d(m,{R:()=>h});var d=s(4650),p=s(3162);let h=(()=>{class u{constructor(){}static#t=this.\u0275fac=function(g){return new(g||u)};static#n=this.\u0275cmp=d.Xpm({type:u,selectors:[["app-progress-bar"]],decls:1,vars:0,consts:[["mode","indeterminate"]],template:function(g,f){1&g&&d._UZ(0,"mat-progress-bar",0)},dependencies:[p.pW],encapsulation:2})}return u})()}}]);