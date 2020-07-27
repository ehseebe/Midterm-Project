
$(document).ready(function() {
  $(".btn1").click(function() {
    if ($(".search-form").is(":visible")) {
      $(".search-form").slideUp();
    } else {
      $(".search-form").slideDown();
    }
  });
});

$(document).ready(function () {
  $('.search-form').submit(function(e) {
    e.preventDefault();
    let input = $('.category-search').val();
    console.log(input)
    $.ajax({
      url: "/api/categories/search",
      data: { s: input },
      type: "GET"
    }).done(function(data) {
      console.log('Done', data);
    });
  });
});