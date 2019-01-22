﻿using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Threading.Tasks;

namespace WebVella.Erp.Web.TagHelpers
{
	[HtmlTargetElement("wv-filter-url")]
	public class WvFilterUrl : WvFilterBase
	{
		public override Task ProcessAsync(TagHelperContext context, TagHelperOutput output)
		{
			#region << Init >>
			var initSuccess = InitFilter(context, output);

			if (!initSuccess)
			{
				return Task.CompletedTask;
			}

			var inputGroupEl = new TagBuilder("div");
			inputGroupEl.AddCssClass("input-group");

			inputGroupEl.InnerHtml.AppendHtml(FilterTypeSelect);
			inputGroupEl.InnerHtml.AppendHtml(ValueTextControl);


			output.Content.AppendHtml(inputGroupEl);

			return Task.CompletedTask;
		}

		#endregion
	}
}
