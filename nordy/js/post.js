$(document).ready(function() {
	$("form.send_form").submit(function() {
		
		var $form = $(this);

		if ( true ) { /* validateForm($form) */
			var data = $form.serialize();
			$.post(
				"./mail/mail.php",
				data,
				function(resp) {
				}
			);
		} else {
			return false;
		}
		return false;
	});

});
function validateForm($form) {
	var valid = true;
	$form.find(".required").each(function(index, element) {
		if ($(element).val() == "") {
			$(element).addClass("error");
			valid = false;
		}
		else {
			$(element).removeClass("error");
		}
	});
	return valid;
}