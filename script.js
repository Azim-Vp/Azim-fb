$(document).ready(function () {
  $("#signup-form").validate({
    rules: {
      fname: {
        required: true,
        minlength: 4,
      },
    },
  });
});
