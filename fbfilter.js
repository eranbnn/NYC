
var pageID;
var nextPage;

function getPosts(form) {
	pageID = form[0].value;
	FB.api(
		"/" + pageID,
		function (info) {
			pageID = info.id;
			FB.api(
				"/" + pageID + "/feed",
				{limit: 100},
				handleRespone
			);
		}
	);
	event.preventDefault();
}

function getMore() {
	FB.api(
		"/",
		{id: nextPage},
		handleRespone
	);
}

function createUrl(commentID) {
	return "https://www.facebook.com/" + pageID + "/posts/" + commentID.split("_")[0] + "?comment_id=" + commentID.split("_")[1];
}
	
function handleRespone(response) {
	var resultsDiv = document.querySelector("#results");
	response.data.forEach(function (post) {
		FB.api(
			"/" + post.id + "/comments",
			function (response) {
			  if (response && !response.error) {
				for (var i = 0 ; i < response.data.length ; i++) {
					if (response.data[i].from.id === pageID) {
						resultsDiv.innerHTML += "<a href='" + createUrl(response.data[i].id) + "' target='_blank'>" + response.data[i].message + "</a>" + "<br/><br/>";
					}
				}
			  }
			}
		);
	});
	nextPage = response.paging.next;
}