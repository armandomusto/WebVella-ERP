﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using WebVella.Erp.Api;
using WebVella.Erp.Eql;
using WebVella.Erp.Exceptions;
using WebVella.Erp.Web;
using WebVella.Erp.Web.Models;
using WebVella.Erp.Web.Utils;

namespace WebVella.Erp.Plugins.SDK.Pages.ErpDataSource
{
	public class CreateModel : BaseErpPageModel
	{
		public CreateModel([FromServices]ErpRequestContext reqCtx) { ErpRequestContext = reqCtx; }

		[BindProperty(Name = "name")]
		public string Name { get; set; }

		[BindProperty(Name = "eql_input")]
		public string EqlInput { get; set; }

		[BindProperty(Name = "description")]
		public string Description { get; set; }

		[BindProperty(Name = "weight")]
		public int Weight { get; set; }

		[BindProperty(Name = "param_defaults")]
		public string ParamDefaults { get; set; }

		public string ResultModel { get { return "EntityRecordList"; } }

		public List<string> HeaderActions { get; private set; } = new List<string>();

		public void InitPage()
		{
			Init();

			HeaderActions.AddRange(new List<string>() {

				PageUtils.GetActionTemplate(PageUtilsActionType.SubmitForm, label: "Create Data Source",formId:"CreateRecord", btnClass:"btn btn-green btn-sm", iconClass:"ti-plus"),
				PageUtils.GetActionTemplate(PageUtilsActionType.Cancel, returnUrl: ReturnUrl)
			});

		}

		public IActionResult OnGet()
        {
			InitPage();

			ErpRequestContext.PageContext = PageContext;
			return Page();
		}

		public IActionResult OnPost()
		{
			if (!ModelState.IsValid) throw new Exception("Antiforgery check failed.");

			InitPage();
		
			var entMan = new EntityManager();
			try
			{
				try
				{
					DataSourceManager dsMan = new DataSourceManager();
					var ds = dsMan.Create( Name, Description, Weight, EqlInput, ParamDefaults);
					return Redirect($"/sdk/objects/data_source/r/{ds.Id}/");
				}
				catch (EqlException eqlEx)
				{
					ValidationException valEx = new ValidationException(eqlEx.Message, eqlEx);
					foreach (var err in eqlEx.Errors)
						valEx.Errors.Add(new ValidationError("", err.Message));
					throw valEx;
				}
			}
			catch (ValidationException ex)
			{
				Validation.Message = ex.Message;
				Validation.Errors = ex.Errors;
			}
			catch (Exception ex)
			{
				Validation.Message = ex.Message;
			}

			ErpRequestContext.PageContext = PageContext;
			return Page();
		}

	}
}