
/*---
/plugins/metarunner/export/export.js
---*/
BS.MetaRunners={showDialog:function(a,b){$j("#metaRunnersExportButtons").hide();BS.MetaRunners.Dialog.settingsId=b;BS.MetaRunners.Dialog.show();return false;},Dialog:OO.extend(BS.PluginPropertiesForm,OO.extend(BS.AbstractModalDialog,{settingsId:"",show:function(){var a=this;a.showCentered();a.refreshContent({metainit:1},function(){a.showCentered();$j("#metaRunnersExportButtons").show();a.bindCtrlEnterHandler(a.saveNamesPage.bind(a));BS.AdminActions.prepareCustomIdGenerator("meta-runner",$j("#metaRunnerExportId").get(0),$j("#metaRunnerExportName").get(0),$j("#metaRunnerExportProjectId").get(0),false);});},getBaseParameters:function(a){a=OO.extend({id:this.settingsId},a||{});return Object.toQueryString(a);},refreshContent:function(f,d){var e=d;var c=this;var b=function(){if(e){e.apply(this,arguments);}BS.VisibilityHandlers.updateVisibility();};$("metaRunnersRefresh").innerHTML='<i class="icon-refresh icon-spin ring-loader-inline"></i> Loading...';var a=$("metaRunnersRefresh").getAttribute("data-url");BS.ajaxUpdater($("metaRunnersRefresh"),a,{method:"get",evalScripts:true,parameters:c.getBaseParameters(f),onComplete:b});},save:function(){return false;},saveNamesPage:function(){var a=this;BS.FormSaver.save(this,this.formElement().action+"?"+this.getBaseParameters(),OO.extend(BS.ErrorsAwareListener,{onBeginSave:function(b){BS.Util.show("metaRunnersSaving");a.clearErrors();},onCompleteSave:function(e,g,d){BS.Util.hide("metaRunnersSaving");var c=BS.XMLResponse.processErrors(g,{onGenerationError:function(h){$("error_export").innerHTML=h.firstChild.nodeValue;},onIdClashError:function(i){d=true;var h=confirm("Replace existing meta-runner with newly created one?");if(h){$j("#metaRunnerConfirmReplace").val("true");setTimeout(function(){a.saveNamesPage();},10);}}},a.propertiesErrorsHandler)||d;BS.ErrorsAwareListener.onCompleteSave(e,g,c);if(c){BS.Util.reenableForm(e.formElement());return;}var f=g.getElementsByTagName("jredirect");if(!!f&&f.length>0){a.refreshContent({metaStep:f[0].getAttribute("metaStep")},function(){a.clearErrors();BS.Util.reenableForm(a.formElement());});return;}var b=g.getElementsByTagName("jcomplete");if(!!b&&b.length>0){setTimeout(function(){document.location.href=base_uri+b[0].getAttribute("redirectUrl");},10);}}}));return false;},close:function(){this.settingsId="";(BS.AbstractModalDialog.close.bind(this))();},getContainer:function(){return $("metaRunnersExportDialog");},formElement:function(){return $("metaRunnersExport");}}))};