angular.module('uResCore').service('uresources', 

	function() {
		
		const res = {
			"labelFilter"			: "Filter",
			"labelForfeit"			: "Forfeit",
			"buttonShowFilter"		: "Show Filter",
			"buttonHideFilter"		: "Hide Filter",
			"buttonNewMatch"		: "Add New Match",
			"buttonSubmit"			: "Submit",
			"buttonCancelAdding"	: "Hide Adding",
			"classCollapsed"		: "btn-default",
			"classExpanded"			: "btn-warning"
		};
		
		this.getString = function (key) {
		        return res[key];
		    };
		
		this.getResources = function () {
				return res;
			};
  	}
);
