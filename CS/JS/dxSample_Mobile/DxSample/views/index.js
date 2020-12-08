DxSample.Index = function (params) {
    var viewModel = {
        autocompleteData: [
            "Afghanistan",
            "Akrotiri",
            "Albania",
            "Algeria",
            "American Samoa",
            "Andorra",
            "Angola"
        ],
        maxlength: ko.observable(5),
        placeholder: ko.observable("Max length is set to "),
        viewRendered: function () {
            $('#autocompleteContainer input').attr('placeholder', viewModel.placeholder() + viewModel.maxlength());
            $('#autocompleteContainer input').attr('maxlength', viewModel.maxlength());
        }
    };
    return viewModel;
};