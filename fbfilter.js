
var pageID;
var nextPage;

function getPosts(form) {
	pageID = form[0].value;
	FB.api(
		"/" + pageID,
		function (info) {
			console.log(info);
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
		{id: nextPage.replace(/\//g,"\\/")},
		handleRespone
	);
}

function createUrl(commentID) {
	return "https://www.facebook.com/" + pageID + "/posts/" + commentID.split("_")[0] + "?comment_id=" + commentID.split("_")[1];
}
	
function handleRespone(response) {
	response.data.forEach(function (post) {
		FB.api(
			"/" + post.id + "/comments",
			function (response) {
			  if (response && !response.error) {
				for (var i = 0 ; i < response.data.length ; i++) {
					if (response.data[i].from.id === pageID) {
						document.body.innerHTML += "<a href='" + createUrl(response.data[i].id) + "' target='_blank'>" + response.data[i].message + "</a>" + "<br/><br/>";
					}
				}
			  }
			}
		);
	});
	nextPage = response.paging.next;
}