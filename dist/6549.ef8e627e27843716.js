"use strict";(self.webpackChunksakai=self.webpackChunksakai||[]).push([[6549],{6549:(P,x,l)=>{l.r(x),l.d(x,{UsersModule:()=>le});var t=l(6895),f=l(9197),U=l(1546),C=l(805);class A{}class M{}class v{}var e=l(4650),g=l(7747),u=l(5384),T=l(99),y=l(2453),E=l(1383),O=l(5593),J=l(1493),I=l(1740),Z=l(4006),p=l(7116),w=l(6768),o=l(9766);function s(r,_){1&r&&(e.TgZ(0,"div"),e._UZ(1,"app-progress-bar"),e.qZA())}function c(r,_){if(1&r){const n=e.EpF();e.TgZ(0,"div",47),e._UZ(1,"p-toast"),e.TgZ(2,"button",48),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.openNew())}),e.qZA()()}}function b(r,_){1&r&&(e.TgZ(0,"tr")(1,"th",49),e._uU(2,"Nombre"),e._UZ(3,"p-sortIcon",50),e.qZA(),e.TgZ(4,"th",51),e._uU(5,"Apellido "),e._UZ(6,"p-sortIcon",52),e.qZA(),e.TgZ(7,"th",53),e._uU(8,"Correo "),e._UZ(9,"p-sortIcon",54),e.qZA(),e.TgZ(10,"th",55),e._uU(11,"Celular "),e._UZ(12,"p-sortIcon",54),e.qZA(),e.TgZ(13,"th",56),e._uU(14,"Rol "),e._UZ(15,"p-sortIcon",54),e.qZA(),e.TgZ(16,"th"),e._uU(17,"Asignar Talonario/Editar Permisos"),e.qZA()())}function D(r,_){if(1&r){const n=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td")(12,"p-button",57),e.NdJ("click",function(){const m=e.CHM(n).$implicit,h=e.oxw();return e.KtG(h.AsignarTalonario(m))}),e.qZA(),e.TgZ(13,"p-button",58),e.NdJ("click",function(){const m=e.CHM(n).$implicit,h=e.oxw();return e.KtG(h.ViewPermisions(m))}),e.qZA()()()}if(2&r){const n=_.$implicit;e.xp6(2),e.Oqu(n.name),e.xp6(2),e.Oqu(n.middleName),e.xp6(2),e.Oqu(n.email),e.xp6(2),e.Oqu(n.cellphone),e.xp6(2),e.Oqu(n.role)}}function S(r,_){1&r&&(e.TgZ(0,"div"),e._UZ(1,"app-progress-bar"),e.qZA())}function V(r,_){1&r&&(e.TgZ(0,"small",59),e._uU(1," El nombre es requerido. "),e.qZA())}function q(r,_){if(1&r&&(e.TgZ(0,"option",60),e._uU(1),e.qZA()),2&r){const n=_.$implicit;e.Q6J("value",n),e.xp6(1),e.Oqu(n)}}function R(r,_){1&r&&(e.TgZ(0,"small",59),e._uU(1," El rol es requerido. "),e.qZA())}function G(r,_){1&r&&(e.TgZ(0,"small",59),e._uU(1," Ingrese un correo electr\xf3nico v\xe1lido. "),e.qZA())}function Q(r,_){1&r&&(e.TgZ(0,"small",59),e._uU(1," La contrase\xf1a debe tener al menos 5 caracteres. "),e.qZA())}function Y(r,_){if(1&r){const n=e.EpF();e.TgZ(0,"button",61),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.hideDialog())}),e.qZA()}}function K(r,_){1&r&&(e.TgZ(0,"div"),e._UZ(1,"app-progress-bar"),e.qZA())}function L(r,_){if(1&r){const n=e.EpF();e.TgZ(0,"div",10)(1,"div",62)(2,"div",1)(3,"div",63)(4,"label",64),e._uU(5,"Usuario:"),e.qZA(),e.TgZ(6,"strong"),e._uU(7),e.qZA()()()(),e.TgZ(8,"div",62)(9,"div",1)(10,"div",63)(11,"label",65),e._uU(12,"Punto de Venta"),e.qZA(),e.TgZ(13,"app-drop-down",66),e.NdJ("ValueSelectedChange",function(i){e.CHM(n);const m=e.oxw();return e.KtG(m.filterPointOfSale(i))}),e.qZA()(),e.TgZ(14,"div",63)(15,"label",67),e._uU(16,"Talonario"),e.qZA(),e.TgZ(17,"app-drop-down",66),e.NdJ("ValueSelectedChange",function(i){e.CHM(n);const m=e.oxw();return e.KtG(m.filterTalonario(i))}),e.qZA()()()()()}if(2&r){const n=e.oxw();e.xp6(7),e.AsE("",n.userSelectd.name," ",n.userSelectd.middleName,""),e.xp6(6),e.Q6J("IsCreating",!1)("DropDownDataSource",n.pointOfSaleValues),e.xp6(4),e.Q6J("IsCreating",!1)("DropDownDataSource",n.talonarios)}}function W(r,_){if(1&r){const n=e.EpF();e.TgZ(0,"button",61),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.showChangeTalonarioDialog=!1)}),e.qZA(),e.TgZ(1,"button",68),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.saveUserTalonario())}),e.qZA()}}function H(r,_){1&r&&(e.TgZ(0,"div"),e._UZ(1,"app-progress-bar"),e.qZA())}function z(r,_){if(1&r){const n=e.EpF();e.TgZ(0,"div",62)(1,"div",69)(2,"div",70)(3,"label",64),e._uU(4,"Usuario: "),e.TgZ(5,"strong"),e._uU(6),e.qZA()()()()(),e.TgZ(7,"div",62)(8,"div",69)(9,"div",70)(10,"label",64),e._uU(11,"Permisos a denegar"),e.qZA(),e.TgZ(12,"p-chips",71),e.NdJ("ngModelChange",function(i){e.CHM(n);const m=e.oxw();return e.KtG(m.userSelectd.permisionDenied=i)}),e.qZA()()()()}if(2&r){const n=e.oxw();e.xp6(6),e.AsE(" ",n.userSelectd.name," ",n.userSelectd.middleName,""),e.xp6(6),e.Q6J("ngModel",n.userSelectd.permisionDenied)}}function j(r,_){if(1&r){const n=e.EpF();e.TgZ(0,"button",61),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.showChangeTalonarioDialog=!1)}),e.qZA(),e.TgZ(1,"button",68),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.saveUserTalonario())}),e.qZA()}}function $(r,_){1&r&&(e.TgZ(0,"div"),e._UZ(1,"app-progress-bar"),e.qZA())}function X(r,_){if(1&r){const n=e.EpF();e.TgZ(0,"div",43)(1,"app-drop-down",72),e.NdJ("ValueSelectedChange",function(i){e.CHM(n);const m=e.oxw();return e.KtG(m.filterPermision(i))}),e.qZA()()}if(2&r){const n=e.oxw();e.xp6(1),e.Q6J("showFilter",!0)("IsCreating",!1)("DropDownDataSource",n.permisionDeniedAllowed)}}function ee(r,_){if(1&r){const n=e.EpF();e.TgZ(0,"button",61),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.showDialogEditPermisions=!1)}),e.qZA(),e.TgZ(1,"button",68),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.savePermisions(i.userSelectd))}),e.qZA()}}const te=function(){return{"min-width":"50rem"}},ne=function(){return[10,25,50]},B=function(){return{width:"1200px"}},F=function(){return{width:"850px"}};let ie=(()=>{class r{constructor(n,a,i,m,h){this.router=n,this.productService=a,this.eventService=i,this.messageService=m,this.cdr=h,this.pointOfSaleId=0,this.talonarioId=0,this.pointOfSaleValues=[],this.talonarios=[],this.showDialog=!1,this.users=[],this.user=new A,this.userSelectd=new A,this.roles=["SuperAdmin","Administrador","Vendedor"],this.showProgressBar=!1,this.showChangeTalonarioDialog=!1,this.permisionDeniedList=[],this.permisionDeniedAllowed=[],this.redirect=!1,this.AccessName="/pages/users"}ngOnInit(){const a=this.eventService.getPermisionsException().split(",").map(i=>i.trim());this.redirect=a.includes(this.AccessName),this.redirect&&this.router.navigateByUrl("/pages/unautorized"),this.GetPointOfSaleValuesByWareHouse(),this.GetTalonariosByWareHouse(),this.GetDeniedPermisionsAvailable(),this.GetSuppliers()}hideDialog(){this.showDialog=!1}openNew(){this.showDialog=!0}onSubmit(n){this.user.userId=this.eventService.getToken(),n.valid&&this.AddNewUser(this.user)}AsignarTalonario(n){this.userSelectd=n,this.showChangeTalonarioDialog=!0}AddNewUser(n){this.showProgressBar=!0,this.productService.AddNewUser(n).subscribe(a=>{a.data?(this.messageService.add({severity:"success",summary:"Success",detail:"El usuario "+n.name+" "+n.middleName+" se ha guardado",life:3e3}),this.showDialog=!1,this.GetSuppliers()):this.messageService.add({severity:"error",summary:"Error",detail:a.message,life:3e3}),this.showProgressBar=!1})}GetPointOfSaleValuesByWareHouse(){this.productService.GetPoinOfSaleValues(this.eventService.getToken()).subscribe(n=>{n.data?this.pointOfSaleValues=n.data:this.messageService.add({severity:"error",summary:"Error",detail:n.message,life:3e3})})}GetTalonariosByWareHouse(){this.productService.GetTalonariosValues(this.eventService.getToken()).subscribe(n=>{n.data?this.talonarios=n.data:this.messageService.add({severity:"error",summary:"Error",detail:n.message,life:3e3})})}GetDeniedPermisionsAvailable(){this.productService.GetPermisionsDeniedAllowed(this.eventService.getToken()).subscribe(n=>{n.data?this.permisionDeniedAllowed=n.data:this.messageService.add({severity:"error",summary:"Error",detail:n.message,life:3e3})})}filterTalonario(n){null!=n&&(this.talonarioId=n)}filterPermision(n){console.log(n),"-1"!=n&&(this.permisionDeniedAllowed?.find(i=>i.value===n)&&(this.exceptionsByUser.includes(n)||(this.exceptionsByUser=[...this.exceptionsByUser,n])),this.cdr.detectChanges())}filterPointOfSale(n){null!=n&&(this.pointOfSaleId=n)}saveUserTalonario(){var n=new M;n.pointOfSale=this.pointOfSaleId,n.talonario=this.talonarioId,n.userEmail=null==this.userSelectd.email?"":this.userSelectd.email,n.userId=this.eventService.getToken(),this.showProgressBar=!0,this.productService.AddNewUserTalonario(n).subscribe(a=>{a.data?(this.messageService.add({severity:"success",summary:"Success",detail:a.data,life:8e3}),this.showChangeTalonarioDialog=!1):this.messageService.add({severity:"error",summary:"Error",detail:a.message,life:3e3}),this.showProgressBar=!1})}GetSuppliers(){this.showProgressBar=!0,this.productService.GetUsersByWareHouse(this.eventService.getToken()).subscribe(n=>{n.data?this.users=n.data:this.messageService.add({severity:"error",summary:"Error",detail:n.message,life:3e3}),this.showProgressBar=!1})}ViewPermisions(n){this.showDialogEditPermisions=!0,this.userSelectd=n;const i=n.permisionDenied.split(",").map(m=>m.trim());this.exceptionsByUser=[],this.exceptionsByUser=i,this.exceptionsByUser=this.exceptionsByUser.filter(m=>""!==m.trim()&&!m.includes("Permision"))}savePermisions(n){console.log(this.userSelectd),this.showDialogEditPermisions=!1,this.showProgressBar=!0,this.permisionDeniedList=this.exceptionsByUser.map(a=>{const i=new v;return i.name=a,i.id=this.userSelectd.userId,i.description=this.eventService.getToken(),i}),this.productService.AddUserPermisionDenied(this.permisionDeniedList,this.eventService.getToken()).subscribe(a=>{a.data?(this.messageService.add({severity:"success",summary:"Exito",detail:a.data,life:3e3}),this.GetSuppliers()):this.messageService.add({severity:"error",summary:"Error",detail:a.message,life:3e3}),this.showProgressBar=!1})}static#e=this.\u0275fac=function(a){return new(a||r)(e.Y36(f.F0),e.Y36(g.M),e.Y36(u.P),e.Y36(C.ez),e.Y36(e.sBO))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["ng-component"]],features:[e._Bn([C.ez])],decls:86,vars:48,consts:[[4,"ngIf"],[1,"grid"],[1,"col-12"],[1,"card"],["styleClass","mb-4"],["pTemplate","left"],["currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","paginator","rows","showCurrentPageReport","tableStyle","rowsPerPageOptions"],["pTemplate","header"],["pTemplate","body"],["header","Nuevo Usuario",3,"visible","modal","visibleChange"],[1,"container"],[1,"card","p-fluid"],[3,"ngSubmit"],["form","ngForm"],[1,"form-group"],["for","name"],["type","text","id","name","name","name","required","",3,"ngModel","ngModelChange"],["nameInput","ngModel"],["class","error-message",4,"ngIf"],["for","middleName"],["type","text","id","middleName","name","middleName",3,"ngModel","ngModelChange"],["for","role"],["id","role","name","role","required","",3,"ngModel","ngModelChange"],["roleInput","ngModel"],["value",""],[3,"value",4,"ngFor","ngForOf"],["for","email"],["type","email","id","email","name","email","required","","pattern","[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",3,"ngModel","ngModelChange"],["emailInput","ngModel"],["for","cellphone"],["type","tel","id","cellphone","name","cellphone",3,"ngModel","ngModelChange"],["for","password"],["type","password","id","password","name","password","required","","minlength","5",3,"ngModel","ngModelChange"],["passwordInput","ngModel"],["type","submit",3,"disabled"],["pTemplate","footer"],["header","Asignar Talonario",3,"visible","modal","visibleChange"],["pTemplate","content"],["header","Ver Permisos Denegados",3,"visible","modal","visibleChange"],["header","Confirm",3,"visible","modal","visibleChange"],[1,"card","p-fluid",2,"max-height","500px","overflow-y","auto"],[1,"field","grid"],["htmlFor","email3",1,"col-12","mb-2","md:col-2","md:mb-0"],[1,"col-12","md:col-10"],["class","col-12 md:col-10",4,"ngIf"],["readonly","true","autocomplete","off","pInputText","","id","email3","type","text","placeholder","Nombre",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],[1,"my-2"],["pButton","","pRipple","","label","Nuevo","icon","pi pi-plus",1,"p-button-success","mr-2",3,"click"],["pSortableColumn","name",2,"width","20%"],["field","rtn"],["pSortableColumn","middleName",2,"width","20%"],["field","name"],["pSortableColumn","email",2,"width","20%"],["field","middleName"],["pSortableColumn","cellphone",2,"width","20%"],["pSortableColumn","role",2,"width","20%"],["icon","pi pi-box","styleClass","p-button-rounded p-button-help p-button-text",3,"click"],["icon","pi pi-pencil","styleClass","p-button-rounded p-button-success p-button-text",3,"click"],[1,"error-message"],[3,"value"],["pButton","","pRipple","","icon","pi pi-times","label","Cancelar",1,"p-button-text",3,"click"],[1,"field"],[1,"col"],["for","user"],["for","pointOfSale"],[3,"IsCreating","DropDownDataSource","ValueSelectedChange"],["for","talonario"],["pButton","","pRipple","","icon","pi pi-check","label","Guardar",1,"p-button-text",3,"click"],[1,"formgrid","grid"],[1,"field","col"],[2,"margin-left","20px",3,"ngModel","ngModelChange"],[3,"showFilter","IsCreating","DropDownDataSource","ValueSelectedChange"]],template:function(a,i){if(1&a){const m=e.EpF();e.YNc(0,s,2,0,"div",0),e.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",3)(5,"p-toolbar",4),e.YNc(6,c,3,0,"ng-template",5),e.qZA(),e.TgZ(7,"p-table",6),e.YNc(8,b,18,0,"ng-template",7),e.YNc(9,D,14,5,"ng-template",8),e.qZA()()()()(),e.TgZ(10,"p-dialog",9),e.NdJ("visibleChange",function(d){return i.showDialog=d}),e.YNc(11,S,2,0,"div",0),e.TgZ(12,"div",10)(13,"div",11)(14,"h5"),e._uU(15,"Registro de Usuario"),e.qZA(),e.TgZ(16,"form",12,13),e.NdJ("ngSubmit",function(){e.CHM(m);const d=e.MAs(17);return e.KtG(i.onSubmit(d))}),e.TgZ(18,"div",14)(19,"label",15),e._uU(20,"Nombre:"),e.qZA(),e.TgZ(21,"input",16,17),e.NdJ("ngModelChange",function(d){return i.user.name=d}),e.qZA(),e.YNc(23,V,2,0,"small",18),e.qZA(),e.TgZ(24,"div",14)(25,"label",19),e._uU(26,"Apellido:"),e.qZA(),e.TgZ(27,"input",20),e.NdJ("ngModelChange",function(d){return i.user.middleName=d}),e.qZA()(),e.TgZ(28,"div",14)(29,"label",21),e._uU(30,"Rol:"),e.qZA(),e.TgZ(31,"select",22,23),e.NdJ("ngModelChange",function(d){return i.user.role=d}),e.TgZ(33,"option",24),e._uU(34,"Seleccione un rol"),e.qZA(),e.YNc(35,q,2,2,"option",25),e.qZA(),e.YNc(36,R,2,0,"small",18),e.qZA(),e.TgZ(37,"div",14)(38,"label",26),e._uU(39,"Correo:"),e.qZA(),e.TgZ(40,"input",27,28),e.NdJ("ngModelChange",function(d){return i.user.email=d}),e.qZA(),e.YNc(42,G,2,0,"small",18),e.qZA(),e.TgZ(43,"div",14)(44,"label",29),e._uU(45,"Celular:"),e.qZA(),e.TgZ(46,"input",30),e.NdJ("ngModelChange",function(d){return i.user.cellphone=d}),e.qZA()(),e.TgZ(47,"div",14)(48,"label",31),e._uU(49,"Contrase\xf1a:"),e.qZA(),e.TgZ(50,"input",32,33),e.NdJ("ngModelChange",function(d){return i.user.password=d}),e.qZA(),e.YNc(52,Q,2,0,"small",18),e.qZA(),e.TgZ(53,"button",34),e._uU(54,"Guardar"),e.qZA()()()(),e.YNc(55,Y,1,0,"ng-template",35),e.qZA(),e.TgZ(56,"p-dialog",36),e.NdJ("visibleChange",function(d){return i.showChangeTalonarioDialog=d}),e.YNc(57,K,2,0,"div",0),e.YNc(58,L,18,6,"ng-template",37),e.YNc(59,W,2,0,"ng-template",35),e.qZA(),e.TgZ(60,"p-dialog",38),e.NdJ("visibleChange",function(d){return i.showViewPermisionsDialot=d}),e.YNc(61,H,2,0,"div",0),e.YNc(62,z,13,3,"ng-template",37),e.YNc(63,j,2,0,"ng-template",35),e.qZA(),e.TgZ(64,"p-dialog",39),e.NdJ("visibleChange",function(d){return i.showDialogEditPermisions=d}),e.YNc(65,$,2,0,"div",0),e.TgZ(66,"div",40)(67,"div",11)(68,"div",41),e._UZ(69,"label",42)(70,"div",43),e.qZA(),e.TgZ(71,"div",41)(72,"label",42),e._uU(73,"Seleccione Permiso a Denegar"),e.qZA(),e.YNc(74,X,2,3,"div",44),e.qZA(),e.TgZ(75,"div",41)(76,"label",42),e._uU(77,"Usuario"),e.qZA(),e.TgZ(78,"div",43)(79,"input",45),e.NdJ("ngModelChange",function(d){return i.userSelectd.name=d}),e.qZA()()(),e.TgZ(80,"div",41)(81,"label",42),e._uU(82,"Permisos Denegados"),e.qZA(),e.TgZ(83,"div",43)(84,"p-chips",46),e.NdJ("ngModelChange",function(d){return i.exceptionsByUser=d}),e.qZA()()()()(),e.YNc(85,ee,2,0,"ng-template",35),e.qZA()}if(2&a){const m=e.MAs(17),h=e.MAs(22),d=e.MAs(32),N=e.MAs(41),k=e.MAs(51);e.Q6J("ngIf",i.showProgressBar),e.xp6(7),e.Q6J("value",i.users)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("tableStyle",e.DdM(42,te))("rowsPerPageOptions",e.DdM(43,ne)),e.xp6(3),e.Akn(e.DdM(44,B)),e.Q6J("visible",i.showDialog)("modal",!0),e.xp6(1),e.Q6J("ngIf",i.showProgressBar),e.xp6(10),e.Q6J("ngModel",i.user.name),e.xp6(2),e.Q6J("ngIf",h.invalid&&(h.dirty||h.touched)),e.xp6(4),e.Q6J("ngModel",i.user.middleName),e.xp6(4),e.Q6J("ngModel",i.user.role),e.xp6(4),e.Q6J("ngForOf",i.roles),e.xp6(1),e.Q6J("ngIf",d.invalid&&(d.dirty||d.touched)),e.xp6(4),e.Q6J("ngModel",i.user.email),e.xp6(2),e.Q6J("ngIf",N.invalid&&(N.dirty||N.touched)),e.xp6(4),e.Q6J("ngModel",i.user.cellphone),e.xp6(4),e.Q6J("ngModel",i.user.password),e.xp6(2),e.Q6J("ngIf",k.invalid&&(k.dirty||k.touched)),e.xp6(1),e.Q6J("disabled",m.invalid),e.xp6(3),e.Akn(e.DdM(45,F)),e.Q6J("visible",i.showChangeTalonarioDialog)("modal",!0),e.xp6(1),e.Q6J("ngIf",i.showProgressBar),e.xp6(3),e.Akn(e.DdM(46,F)),e.Q6J("visible",i.showViewPermisionsDialot)("modal",!0),e.xp6(1),e.Q6J("ngIf",i.showProgressBar),e.xp6(3),e.Akn(e.DdM(47,B)),e.Q6J("visible",i.showDialogEditPermisions)("modal",!0),e.xp6(1),e.Q6J("ngIf",i.showProgressBar),e.xp6(9),e.Q6J("ngIf",!i.showProgressBar),e.xp6(5),e.Q6J("ngModel",i.userSelectd.name),e.xp6(5),e.Q6J("ngModel",i.exceptionsByUser)}},dependencies:[t.sg,t.O5,T.iA,C.jx,T.lQ,T.fz,y.FN,E.o,O.Hq,O.zx,J.V,I.o,Z._Y,Z.YN,Z.Kr,Z.Fj,Z.EJ,Z.JJ,Z.JL,Z.Q7,Z.wO,Z.c5,Z.On,Z.F,p.R,w.t,o.cL],styles:['[_nghost-%COMP%] {\n    --primary-color: #023b78;\n    --secondary-color: #1565bb;\n    --background-color: #f0f8ff;\n    --text-color: #333;\n    --border-color: #ccc;\n    --error-color: #dc3545;\n    --success-color: #28a745;\n    \n    font-family: \'Arial\', sans-serif;\n    color: var(--text-color);\n    background-color: var(--background-color);\n  }\n\n  .container[_ngcontent-%COMP%] {\n    max-width: 600px;\n    margin: 0 auto;\n    padding: 20px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    background-color: white;\n    border-radius: 8px;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n    padding: 20px;\n  }\n\n  h5[_ngcontent-%COMP%] {\n    color: var(--primary-color);\n    margin-bottom: 20px;\n  }\n\n  .form-group[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n\n  label[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 5px;\n    font-weight: bold;\n  }\n\n  input[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px;\n    border: 1px solid var(--border-color);\n    border-radius: 4px;\n    font-size: 16px;\n  }\n\n  input[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n    outline: none;\n    border-color: var(--secondary-color);\n    box-shadow: 0 0 0 2px rgba(21, 101, 187, 0.25);\n  }\n\n  .error-message[_ngcontent-%COMP%] {\n    color: var(--error-color);\n    font-size: 14px;\n    margin-top: 5px;\n  }\n\n  button[type="submit"][_ngcontent-%COMP%] {\n    background-color: var(--primary-color);\n    color: white;\n    padding: 10px 20px;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    font-size: 16px;\n    transition: background-color 0.3s ease;\n  }\n\n  button[type="submit"][_ngcontent-%COMP%]:hover:not(:disabled) {\n    background-color: var(--secondary-color);\n  }\n\n  button[type="submit"][_ngcontent-%COMP%]:disabled {\n    background-color: var(--border-color);\n    cursor: not-allowed;\n  }\n\n  .field[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n\n  .grid[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    margin: -10px;\n  }\n\n  .col[_ngcontent-%COMP%] {\n    flex: 1;\n    padding: 10px;\n    min-width: 200px;\n  }\n\n  label[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 5px;\n    font-weight: bold;\n    color: var(--primary-color);\n  }\n\n  strong[_ngcontent-%COMP%] {\n    color: var(--secondary-color);\n  }\n\n  app-drop-down[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n    \nlabel[_ngcontent-%COMP%] {\n  color: #6b6d6e;\n  font-weight: bold;\n}\n\n\ninput[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  padding: 10px;\n  margin-bottom: 20px;\n  width: 100%;\n}\ninput[type="text"][_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n\ninput[type="password"][_ngcontent-%COMP%] {\n  border-radius: 15px;\n}\n\n\nbutton[type="submit"][_ngcontent-%COMP%] {\n  background-color: #0077c9;\n  color: #fff;\n  padding: 10px 20px;\n  border: none;\n  cursor: pointer;\n}\n\n\nbutton[type="submit"][disabled][_ngcontent-%COMP%] {\n  background-color: #ccc;\n  cursor: not-allowed;\n}']})}return r})(),oe=(()=>{class r{static#e=this.\u0275fac=function(a){return new(a||r)};static#t=this.\u0275mod=e.oAB({type:r});static#n=this.\u0275inj=e.cJS({imports:[f.Bz.forChild([{path:"",component:ie,canActivate:[U.j]}]),f.Bz]})}return r})();var se=l(4891),re=l(7147);let le=(()=>{class r{static#e=this.\u0275fac=function(a){return new(a||r)};static#t=this.\u0275mod=e.oAB({type:r});static#n=this.\u0275inj=e.cJS({imports:[t.ez,oe,T.U$,y.EV,E.V,O.hJ,J.S,I.j,Z.u5,se.E,re.o,o.Gg]})}return r})()},6768:(P,x,l)=>{l.d(x,{t:()=>M});var t=l(4650),f=l(7747),U=l(5384),C=l(4006),A=l(2210);let M=(()=>{class v{constructor(g,u){this.commonService=g,this.eventService=u,this.ValueSelectedChange=new t.vpe,this.categorys=[],this.Filter=!1}ngOnInit(){this.data=this.DropDownDataSource,this.Filter=this.showFilter}changeValue(){this.ValueSelected=this.selectedData?.value,this.ValueSelectedChange.emit(this.ValueSelected)}selectedValue(){this.ValueSelected=this.selectedData?.value,this.ValueSelectedChange.emit(this.ValueSelected)}static#e=this.\u0275fac=function(u){return new(u||v)(t.Y36(f.M),t.Y36(U.P))};static#t=this.\u0275cmp=t.Xpm({type:v,selectors:[["app-drop-down"]],inputs:{ValueSelected:"ValueSelected",IsCreating:"IsCreating",showFilter:"showFilter",DropDownDataSource:"DropDownDataSource"},outputs:{ValueSelectedChange:"ValueSelectedChange"},decls:1,vars:3,consts:[["optionLabel","viewValue",3,"filter","options","ngModel","onClick","onChange","ngModelChange"]],template:function(u,T){1&u&&(t.TgZ(0,"p-dropdown",0),t.NdJ("onClick",function(){return T.selectedValue()})("onChange",function(){return T.changeValue()})("ngModelChange",function(E){return T.selectedData=E}),t.qZA()),2&u&&t.Q6J("filter",T.Filter)("options",T.data)("ngModel",T.selectedData)},dependencies:[C.JJ,C.On,A.Lt],encapsulation:2})}return v})()},2384:(P,x,l)=>{l.d(x,{b:()=>t});class t{}},7116:(P,x,l)=>{l.d(x,{R:()=>U});var t=l(4650),f=l(3162);let U=(()=>{class C{constructor(){}static#e=this.\u0275fac=function(v){return new(v||C)};static#t=this.\u0275cmp=t.Xpm({type:C,selectors:[["app-progress-bar"]],decls:1,vars:0,consts:[["mode","indeterminate"]],template:function(v,e){1&v&&t._UZ(0,"mat-progress-bar",0)},dependencies:[f.pW],encapsulation:2})}return C})()},7083:(P,x,l)=>{l.d(x,{K:()=>M});var t=l(529),f=l(2340),U=l(2384),C=l(4650);const A=f.N.baseUrl;let M=(()=>{class v{constructor(g){this.http=g}addUser(g){return this.http.post(`${A}auth/register`,g)}login(g,u){var T=new U.b;return T.email=g,T.password=u,this.http.post(`${A}auth/login`,T)}GetUserPermisions(){const y={headers:new t.WM({"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhcmxpbm5nNUBnbWFpbC5jb20iLCJuYW1lIjoiRGFybGluIiwiRW50ZXJwcmlzZSI6IjEiLCJXYXJlSG91c2UiOiIyIiwiUG9pbnRPZlNhbGUiOiIzIiwiQ29ycmVsYXRpdmUiOiI0IiwibmJmIjoxNjYzMjExNTA1LCJleHAiOjE2NjMyOTc5MDUsImlhdCI6MTY2MzIxMTUwNSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MTM0In0.ZZQR0YuVwR5erkrQoErfRnlT9stXaVuDpt2SjFkl8PiAy0RP18-4nmyTRm8yYGqkPM-Eht-EbreVdHFYyRgSxQ"})};return this.http.get("http://localhost:5134/api/auth/test",y)}static#e=this.\u0275fac=function(u){return new(u||v)(C.LFG(t.eN))};static#t=this.\u0275prov=C.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"})}return v})()},1546:(P,x,l)=>{l.d(x,{j:()=>A});var t=l(4650),f=l(5384),U=l(9197),C=l(7083);let A=(()=>{class M{constructor(e,g,u){this.eventService=e,this.router=g,this._userService=u,this.isTokenValid=!1}canActivate(e,g){const u=this.eventService.getToken();return(""==u||null==u||null==u)&&this.router.navigateByUrl("/auth/login"),!0}static#e=this.\u0275fac=function(g){return new(g||M)(t.LFG(f.P),t.LFG(U.F0),t.LFG(C.K))};static#t=this.\u0275prov=t.Yz7({token:M,factory:M.\u0275fac,providedIn:"root"})}return M})()},9766:(P,x,l)=>{l.d(x,{Gg:()=>Z,cL:()=>I});var t=l(4650),f=l(6895),U=l(805),C=l(1740),A=l(4006);const M=["inputtext"];function v(p,w){1&p&&t.GkF(0)}function e(p,w){if(1&p&&(t.TgZ(0,"span",12),t._uU(1),t.qZA()),2&p){const o=t.oxw().$implicit,s=t.oxw();t.xp6(1),t.Oqu(s.field?s.resolveFieldData(o,s.field):o)}}function g(p,w){if(1&p){const o=t.EpF();t.TgZ(0,"span",13),t.NdJ("click",function(c){t.CHM(o);const b=t.oxw().index,D=t.oxw();return t.KtG(D.removeItem(c,b))}),t.qZA()}}const u=function(p){return{$implicit:p}};function T(p,w){if(1&p){const o=t.EpF();t.TgZ(0,"li",7,8),t.NdJ("click",function(c){const D=t.CHM(o).$implicit,S=t.oxw();return t.KtG(S.onItemClick(c,D))}),t.YNc(2,v,1,0,"ng-container",9),t.YNc(3,e,2,1,"span",10),t.YNc(4,g,1,0,"span",11),t.qZA()}if(2&p){const o=w.$implicit,s=t.oxw();t.xp6(2),t.Q6J("ngTemplateOutlet",s.itemTemplate)("ngTemplateOutletContext",t.VKq(4,u,o)),t.xp6(1),t.Q6J("ngIf",!s.itemTemplate),t.xp6(1),t.Q6J("ngIf",!s.disabled)}}function y(p,w){if(1&p){const o=t.EpF();t.TgZ(0,"i",14),t.NdJ("click",function(){t.CHM(o);const c=t.oxw();return t.KtG(c.clear())}),t.qZA()}}const E=function(p,w){return{"p-inputtext p-chips-multiple-container":!0,"p-focus":p,"p-disabled":w}},O=function(p){return{"p-chips-clearable":p}},J={provide:A.JU,useExisting:(0,t.Gpc)(()=>I),multi:!0};let I=(()=>{class p{constructor(o,s){this.el=o,this.cd=s,this.allowDuplicate=!0,this.showClear=!1,this.onAdd=new t.vpe,this.onRemove=new t.vpe,this.onFocus=new t.vpe,this.onBlur=new t.vpe,this.onChipClick=new t.vpe,this.onClear=new t.vpe,this.onModelChange=()=>{},this.onModelTouched=()=>{}}ngAfterContentInit(){this.templates.forEach(o=>{o.getType(),this.itemTemplate=o.template}),this.updateFilledState()}onClick(){this.inputViewChild.nativeElement.focus()}onInput(){this.updateFilledState()}onPaste(o){this.disabled||(this.separator&&((o.clipboardData||window.clipboardData).getData("Text").split(this.separator).forEach(c=>{this.addItem(o,c,!0)}),this.inputViewChild.nativeElement.value=""),this.updateFilledState())}updateFilledState(){this.filled=!(!this.value||0===this.value.length)||this.inputViewChild&&this.inputViewChild.nativeElement&&""!=this.inputViewChild.nativeElement.value}onItemClick(o,s){this.onChipClick.emit({originalEvent:o,value:s})}writeValue(o){this.value=o,this.updateMaxedOut(),this.updateFilledState(),this.cd.markForCheck()}registerOnChange(o){this.onModelChange=o}registerOnTouched(o){this.onModelTouched=o}setDisabledState(o){this.disabled=o,this.cd.markForCheck()}resolveFieldData(o,s){if(o&&s){if(-1==s.indexOf("."))return o[s];{let D=s.split("."),S=o;for(var c=0,b=D.length;c<b;++c)S=S[D[c]];return S}}return null}onInputFocus(o){this.focus=!0,this.onFocus.emit(o)}onInputBlur(o){this.focus=!1,this.addOnBlur&&this.inputViewChild.nativeElement.value&&this.addItem(o,this.inputViewChild.nativeElement.value,!1),this.onModelTouched(),this.onBlur.emit(o)}removeItem(o,s){if(this.disabled)return;let c=this.value[s];this.value=this.value.filter((b,D)=>D!=s),this.onModelChange(this.value),this.onRemove.emit({originalEvent:o,value:c}),this.updateFilledState(),this.updateMaxedOut()}addItem(o,s,c){this.value=this.value||[],s&&s.trim().length&&(this.allowDuplicate||-1===this.value.indexOf(s))&&(this.value=[...this.value,s],this.onModelChange(this.value),this.onAdd.emit({originalEvent:o,value:s})),this.updateFilledState(),this.updateMaxedOut(),this.inputViewChild.nativeElement.value="",c&&o.preventDefault()}clear(){this.value=null,this.updateFilledState(),this.onModelChange(this.value),this.onClear.emit()}onKeydown(o){switch(o.which){case 8:if(0===this.inputViewChild.nativeElement.value.length&&this.value&&this.value.length>0){this.value=[...this.value];let s=this.value.pop();this.onModelChange(this.value),this.onRemove.emit({originalEvent:o,value:s}),this.updateFilledState()}break;case 13:this.addItem(o,this.inputViewChild.nativeElement.value,!0);break;case 9:this.addOnTab&&""!==this.inputViewChild.nativeElement.value&&this.addItem(o,this.inputViewChild.nativeElement.value,!0);break;default:this.max&&this.value&&this.max===this.value.length?o.preventDefault():this.separator&&","===this.separator&&188===o.which&&this.addItem(o,this.inputViewChild.nativeElement.value,!0)}}updateMaxedOut(){this.inputViewChild&&this.inputViewChild.nativeElement&&(this.inputViewChild.nativeElement.disabled=!(!this.max||!this.value||this.max!==this.value.length)||this.disabled||!1)}}return p.\u0275fac=function(o){return new(o||p)(t.Y36(t.SBq),t.Y36(t.sBO))},p.\u0275cmp=t.Xpm({type:p,selectors:[["p-chips"]],contentQueries:function(o,s,c){if(1&o&&t.Suo(c,U.jx,4),2&o){let b;t.iGM(b=t.CRH())&&(s.templates=b)}},viewQuery:function(o,s){if(1&o&&t.Gf(M,5),2&o){let c;t.iGM(c=t.CRH())&&(s.inputViewChild=c.first)}},hostAttrs:[1,"p-element","p-inputwrapper"],hostVars:6,hostBindings:function(o,s){2&o&&t.ekj("p-inputwrapper-filled",s.filled)("p-inputwrapper-focus",s.focus)("p-chips-clearable",s.showClear)},inputs:{style:"style",styleClass:"styleClass",disabled:"disabled",field:"field",placeholder:"placeholder",max:"max",ariaLabelledBy:"ariaLabelledBy",tabindex:"tabindex",inputId:"inputId",allowDuplicate:"allowDuplicate",inputStyle:"inputStyle",inputStyleClass:"inputStyleClass",addOnTab:"addOnTab",addOnBlur:"addOnBlur",separator:"separator",showClear:"showClear"},outputs:{onAdd:"onAdd",onRemove:"onRemove",onFocus:"onFocus",onBlur:"onBlur",onChipClick:"onChipClick",onClear:"onClear"},features:[t._Bn([J])],decls:8,vars:21,consts:[[3,"ngClass","ngStyle","click"],[3,"ngClass"],["class","p-chips-token",3,"click",4,"ngFor","ngForOf"],[1,"p-chips-input-token",3,"ngClass"],["type","text",3,"disabled","ngStyle","keydown","input","paste","focus","blur"],["inputtext",""],["class","p-chips-clear-icon pi pi-times",3,"click",4,"ngIf"],[1,"p-chips-token",3,"click"],["token",""],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","p-chips-token-label",4,"ngIf"],["class","p-chips-token-icon pi pi-times-circle",3,"click",4,"ngIf"],[1,"p-chips-token-label"],[1,"p-chips-token-icon","pi","pi-times-circle",3,"click"],[1,"p-chips-clear-icon","pi","pi-times",3,"click"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0),t.NdJ("click",function(){return s.onClick()}),t.TgZ(1,"ul",1),t.YNc(2,T,5,6,"li",2),t.TgZ(3,"li",3)(4,"input",4,5),t.NdJ("keydown",function(b){return s.onKeydown(b)})("input",function(){return s.onInput()})("paste",function(b){return s.onPaste(b)})("focus",function(b){return s.onInputFocus(b)})("blur",function(b){return s.onInputBlur(b)}),t.qZA()(),t.TgZ(6,"li"),t.YNc(7,y,1,0,"i",6),t.qZA()()()),2&o&&(t.Tol(s.styleClass),t.Q6J("ngClass","p-chips p-component")("ngStyle",s.style),t.xp6(1),t.Q6J("ngClass",t.WLB(16,E,s.focus,s.disabled)),t.xp6(1),t.Q6J("ngForOf",s.value),t.xp6(1),t.Q6J("ngClass",t.VKq(19,O,s.showClear&&!s.disabled)),t.xp6(1),t.Tol(s.inputStyleClass),t.Q6J("disabled",s.disabled)("ngStyle",s.inputStyle),t.uIk("id",s.inputId)("placeholder",s.value&&s.value.length?null:s.placeholder)("tabindex",s.tabindex)("aria-labelledby",s.ariaLabelledBy),t.xp6(3),t.Q6J("ngIf",null!=s.value&&s.filled&&!s.disabled&&s.showClear))},dependencies:[f.mk,f.sg,f.O5,f.tP,f.PC],styles:[".p-chips{display:inline-flex}.p-chips-multiple-container{margin:0;padding:0;list-style-type:none;cursor:text;overflow:hidden;display:flex;align-items:center;flex-wrap:wrap}.p-chips-token{cursor:default;display:inline-flex;align-items:center;flex:0 0 auto}.p-chips-input-token{flex:1 1 auto;display:inline-flex}.p-chips-token-icon{cursor:pointer}.p-chips-input-token input{border:0 none;outline:0 none;background-color:transparent;margin:0;padding:0;box-shadow:none;border-radius:0;width:100%}.p-fluid .p-chips{display:flex}.p-chips-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-chips-clearable .p-inputtext{position:relative}\n"],encapsulation:2,changeDetection:0}),p})(),Z=(()=>{class p{}return p.\u0275fac=function(o){return new(o||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({imports:[f.ez,C.j,U.m8,C.j,U.m8]}),p})()}}]);