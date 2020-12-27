$(document).ready(
  function () {
        let x = "";
        $.ajax({
            type: 'GET',
            url: 'https://api.github.com/users/GvinianidzeGivi?fbclid=IwAR1SyP8IhPkeJ4Vl2FMJQbs1P4i5d_D5nIbagN8e4x3zT_5Q8k-eo7-OlCo',
            dataType: "json",
            data: { name: 'value' },
            success: function (data) {
            x =data.avatar_url;
            document.getElementById("demo").src = x;

            }
        });
    });