$(document).ready(function(){
	$("#add_input").hide();
	
	$( "#add_new_task" ).click(function() {
		$("#add_input").toggle(500);
	});

	$("#discard_btn").click(function(){
		$("#add_input").hide(500);
	});

	$("#add_btn").click(function(){
		var title = $("#task-title").val();
		var desc = $("#task-desc").val();
		var timeline = $("#task-date").val();
		$("#all-task-list").prepend(
			"<div class=\"task-list\">" +
            	"<div class=\"ribbon-wrapper\">" +
            		"<div class=\"ribbon\">To Do</div>" +
            	"</div>" +
            	"<h5>" + title + "</h5>" +
            	"<h6><b>Deadline-</b>" + timeline + "</h6><br>" +
            	"<p>" +  desc + "</p><br>" +
            	"<i class=\"complete-task material-icons right\">check_circle</i>" +
            	"<i class=\"remove-task material-icons right\" >delete</i>" +
        	"</div>"
		);
	});

	$("#all-task-list").on('click', '.remove-task', function() {
		$(this).parent().remove();
	});
	$("#all-task-list").on('click', '.complete-task', function() {
		$(this).parent().css({
			"background-color" : "#2DAFA7",
      		"text-decoration" : "line-through"
		}).find(".ribbon").html("Completed");
	});

});