﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebVella.Erp.Web.Hooks;
using WebVella.Erp.Web.Models;
using WebVella.Erp.Web.Services;

namespace WebVella.Erp.Plugins.SDK.Components
{

	[RenderHookAttachment("body-top", 10)]
	public class BodyTopIncludes : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync(BaseErpPageModel pageModel)
        {
			ViewBag.ScriptTags = new List<ScriptTagInclude>();
			if (pageModel.AppName == "sdk") {
				#region === <script> ===
				{
					var includedScriptTags = pageModel.HttpContext.Items.ContainsKey(typeof(List<ScriptTagInclude>)) ? (List<ScriptTagInclude>)pageModel.HttpContext.Items[typeof(List<ScriptTagInclude>)] : new List<ScriptTagInclude>();
					var scriptTagsToInclude = new List<ScriptTagInclude>();

					//Your includes below >>>>

					#region << wv-pb-manager >>
					{
						//Always add
						scriptTagsToInclude.Add(new ScriptTagInclude()
						{
							Src = "/js/wv-pb-manager/wv-pb-manager.js"
						});
					}
					#endregion

					#region << wv-sitemap-manager >>
					{
						//Always add
						scriptTagsToInclude.Add(new ScriptTagInclude()
						{
							Src = "/js/wv-sitemap-manager/wv-sitemap-manager.js"
						});
					}
					#endregion

					//<<<< Your includes up

					includedScriptTags.AddRange(scriptTagsToInclude);
					pageModel.HttpContext.Items[typeof(List<ScriptTagInclude>)] = includedScriptTags;
					ViewBag.ScriptTags = scriptTagsToInclude;
				}
				#endregion
			}

			return await Task.FromResult<IViewComponentResult>(View("Sdk_Default"));
        }
    }
}
