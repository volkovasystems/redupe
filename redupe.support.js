"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "redupe",
              			"path": "redupe/redupe.js",
              			"file": "redupe.js",
              			"module": "redupe",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/redupe.git",
              			"test": "redupe-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Clone and override property values.
              
              		The target will be the one to be cloned and overridden by the source.
              
              		There can be multiple sources, the last source will be the last overriding source.
              
              		Passing disregard as true will not override existing properties.
              	@end-module-documentation
              
              	@include:
              		{
              			"depher": "depher",
              			"falzy": "falzy",
              			"filled": "filled",
              			"fluctuate": "fluctuate",
              			"loosen": "loosen",
              			"pyck": "pyck",
              			"shft": "shft",
              			"transpher": "transpher",
              			"truu": "truu"
              		}
              	@end-include
              */var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var depher = require("depher");
var falzy = require("falzy");
var filled = require("filled");
var fluctuate = require("fluctuate");
var loosen = require("loosen");
var pyck = require("pyck");
var shft = require("shft");
var transpher = require("transpher");
var truu = require("truu");

var redupe = function redupe(target, source, disregard) {
	/*;
                                                         	@meta-configuration:
                                                         		{
                                                         			"target:required": [
                                                         				"object",
                                                         				Array
                                                         			],
                                                         			"source": [
                                                         				"object",
                                                         				Array,
                                                         				"..."
                                                         			],
                                                         			"disregard": "boolean"
                                                         		}
                                                         	@end-meta-configuration
                                                         */

	if (falzy(target) || (typeof target === "undefined" ? "undefined" : (0, _typeof3.default)(target)) != "object") {
		throw new Error("invalid target");
	}

	source = pyck(shft(arguments), OBJECT).filter(truu);

	target = loosen(target, true);

	disregard = depher(arguments, BOOLEAN, false);

	if (filled(source)) {
		source.forEach(function (source) {
			source = loosen(source, true);

			transpher(source, target, disregard);
		});
	}

	return fluctuate(target);
};

module.exports = redupe;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVwZS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImRlcGhlciIsInJlcXVpcmUiLCJmYWx6eSIsImZpbGxlZCIsImZsdWN0dWF0ZSIsImxvb3NlbiIsInB5Y2siLCJzaGZ0IiwidHJhbnNwaGVyIiwidHJ1dSIsInJlZHVwZSIsInRhcmdldCIsInNvdXJjZSIsImRpc3JlZ2FyZCIsIkVycm9yIiwiYXJndW1lbnRzIiwiT0JKRUNUIiwiZmlsdGVyIiwiQk9PTEVBTiIsImZvckVhY2giLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNFQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsU0FBU0YsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNRyxZQUFZSCxRQUFTLFdBQVQsQ0FBbEI7QUFDQSxJQUFNSSxTQUFTSixRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1LLE9BQU9MLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTU0sT0FBT04sUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNTyxZQUFZUCxRQUFTLFdBQVQsQ0FBbEI7QUFDQSxJQUFNUSxPQUFPUixRQUFTLE1BQVQsQ0FBYjs7QUFFQSxJQUFNUyxTQUFTLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCQyxNQUF6QixFQUFpQ0MsU0FBakMsRUFBNEM7QUFDMUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLEtBQUlYLE1BQU9TLE1BQVAsS0FBbUIsUUFBT0EsTUFBUCx1REFBT0EsTUFBUCxNQUFpQixRQUF4QyxFQUFrRDtBQUNqRCxRQUFNLElBQUlHLEtBQUosQ0FBVyxnQkFBWCxDQUFOO0FBQ0E7O0FBRURGLFVBQVNOLEtBQU1DLEtBQU1RLFNBQU4sQ0FBTixFQUF5QkMsTUFBekIsRUFBa0NDLE1BQWxDLENBQTBDUixJQUExQyxDQUFUOztBQUVBRSxVQUFTTixPQUFRTSxNQUFSLEVBQWdCLElBQWhCLENBQVQ7O0FBRUFFLGFBQVliLE9BQVFlLFNBQVIsRUFBbUJHLE9BQW5CLEVBQTRCLEtBQTVCLENBQVo7O0FBRUEsS0FBSWYsT0FBUVMsTUFBUixDQUFKLEVBQXNCO0FBQ3JCQSxTQUFPTyxPQUFQLENBQWdCLFVBQUVQLE1BQUYsRUFBYztBQUM3QkEsWUFBU1AsT0FBUU8sTUFBUixFQUFnQixJQUFoQixDQUFUOztBQUVBSixhQUFXSSxNQUFYLEVBQW1CRCxNQUFuQixFQUEyQkUsU0FBM0I7QUFDQSxHQUpEO0FBS0E7O0FBRUQsUUFBT1QsVUFBV08sTUFBWCxDQUFQO0FBQ0EsQ0FyQ0Q7O0FBdUNBUyxPQUFPQyxPQUFQLEdBQWlCWCxNQUFqQiIsImZpbGUiOiJyZWR1cGUuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJyZWR1cGVcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwicmVkdXBlL3JlZHVwZS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJyZWR1cGUuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJyZWR1cGVcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvcmVkdXBlLmdpdFwiLFxyXG5cdFx0XHRcInRlc3RcIjogXCJyZWR1cGUtdGVzdC5qc1wiLFxyXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0XHRDbG9uZSBhbmQgb3ZlcnJpZGUgcHJvcGVydHkgdmFsdWVzLlxyXG5cclxuXHRcdFRoZSB0YXJnZXQgd2lsbCBiZSB0aGUgb25lIHRvIGJlIGNsb25lZCBhbmQgb3ZlcnJpZGRlbiBieSB0aGUgc291cmNlLlxyXG5cclxuXHRcdFRoZXJlIGNhbiBiZSBtdWx0aXBsZSBzb3VyY2VzLCB0aGUgbGFzdCBzb3VyY2Ugd2lsbCBiZSB0aGUgbGFzdCBvdmVycmlkaW5nIHNvdXJjZS5cclxuXHJcblx0XHRQYXNzaW5nIGRpc3JlZ2FyZCBhcyB0cnVlIHdpbGwgbm90IG92ZXJyaWRlIGV4aXN0aW5nIHByb3BlcnRpZXMuXHJcblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJkZXBoZXJcIjogXCJkZXBoZXJcIixcclxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXHJcblx0XHRcdFwiZmlsbGVkXCI6IFwiZmlsbGVkXCIsXHJcblx0XHRcdFwiZmx1Y3R1YXRlXCI6IFwiZmx1Y3R1YXRlXCIsXHJcblx0XHRcdFwibG9vc2VuXCI6IFwibG9vc2VuXCIsXHJcblx0XHRcdFwicHlja1wiOiBcInB5Y2tcIixcclxuXHRcdFx0XCJzaGZ0XCI6IFwic2hmdFwiLFxyXG5cdFx0XHRcInRyYW5zcGhlclwiOiBcInRyYW5zcGhlclwiLFxyXG5cdFx0XHRcInRydXVcIjogXCJ0cnV1XCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGRlcGhlciA9IHJlcXVpcmUoIFwiZGVwaGVyXCIgKTtcclxuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcclxuY29uc3QgZmlsbGVkID0gcmVxdWlyZSggXCJmaWxsZWRcIiApO1xyXG5jb25zdCBmbHVjdHVhdGUgPSByZXF1aXJlKCBcImZsdWN0dWF0ZVwiICk7XHJcbmNvbnN0IGxvb3NlbiA9IHJlcXVpcmUoIFwibG9vc2VuXCIgKTtcclxuY29uc3QgcHljayA9IHJlcXVpcmUoIFwicHlja1wiICk7XHJcbmNvbnN0IHNoZnQgPSByZXF1aXJlKCBcInNoZnRcIiApO1xyXG5jb25zdCB0cmFuc3BoZXIgPSByZXF1aXJlKCBcInRyYW5zcGhlclwiICk7XHJcbmNvbnN0IHRydXUgPSByZXF1aXJlKCBcInRydXVcIiApO1xyXG5cclxuY29uc3QgcmVkdXBlID0gZnVuY3Rpb24gcmVkdXBlKCB0YXJnZXQsIHNvdXJjZSwgZGlzcmVnYXJkICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJ0YXJnZXQ6cmVxdWlyZWRcIjogW1xyXG5cdFx0XHRcdFx0XCJvYmplY3RcIixcclxuXHRcdFx0XHRcdEFycmF5XHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRcInNvdXJjZVwiOiBbXHJcblx0XHRcdFx0XHRcIm9iamVjdFwiLFxyXG5cdFx0XHRcdFx0QXJyYXksXHJcblx0XHRcdFx0XHRcIi4uLlwiXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRcImRpc3JlZ2FyZFwiOiBcImJvb2xlYW5cIlxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGlmKCBmYWx6eSggdGFyZ2V0ICkgfHwgdHlwZW9mIHRhcmdldCAhPSBcIm9iamVjdFwiICl7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCB0YXJnZXRcIiApO1xyXG5cdH1cclxuXHJcblx0c291cmNlID0gcHljayggc2hmdCggYXJndW1lbnRzICksIE9CSkVDVCApLmZpbHRlciggdHJ1dSApO1xyXG5cclxuXHR0YXJnZXQgPSBsb29zZW4oIHRhcmdldCwgdHJ1ZSApO1xyXG5cclxuXHRkaXNyZWdhcmQgPSBkZXBoZXIoIGFyZ3VtZW50cywgQk9PTEVBTiwgZmFsc2UgKTtcclxuXHJcblx0aWYoIGZpbGxlZCggc291cmNlICkgKXtcclxuXHRcdHNvdXJjZS5mb3JFYWNoKCAoIHNvdXJjZSApID0+IHtcclxuXHRcdFx0c291cmNlID0gbG9vc2VuKCBzb3VyY2UsIHRydWUgKTtcclxuXHJcblx0XHRcdHRyYW5zcGhlciggc291cmNlLCB0YXJnZXQsIGRpc3JlZ2FyZCApO1xyXG5cdFx0fSApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGZsdWN0dWF0ZSggdGFyZ2V0ICk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHVwZTtcclxuIl19
//# sourceMappingURL=redupe.support.js.map
