
var page = {};

function getPosts(form) {
	var profileLink = document.querySelector("#profile-link");
	page.id = form[0].value;
	FB.api(
		"/" + page.id,
		function (info) {
			page.id = info.id;
			page.name = info.name;
			profileLink.childNodes[1].innerHTML = info.name;
			profileLink.href = createBaseUrl();
			FB.api(
				"/" + page.id + "/feed",
				{limit: 100},
				handleRespone
			);
		}
	);
	FB.api(
		"/" + page.id + "/picture",
		function (response) {
			page.picture = response.data;
			profileLink.style.display = "";
			profileLink.childNodes[0].src = page.picture.url;
		}
	);
	event.preventDefault();
}

function getMore() {
	$.ajax({url: page.next, success: handleRespone});
}

function createBaseUrl() {
	return "https://www.facebook.com/" + page.id;
}

function createUrl(commentID) {
	return createBaseUrl() + "/posts/" + commentID.split("_")[0] + "?comment_id=" + commentID.split("_")[1];
}

function handleComments(response) {
	if (response && !response.error && response.data.length) {
		response.data.forEach(function (comment) {
			if (comment.from.id === page.id) {
				resultsDiv.innerHTML += "<a href='" + createUrl(comment.id) + "' target='_blank'>" + comment.message + "</a>" + "<br/><br/>";
			}
			if (comment.comment_count) {
				FB.api(
					"/" + comment.id + "/comments",
					{fields: "comment_count, from, message, created_time"},
					handleComments
				);
			}
		});
	}
}
	
function handleRespone(response) {
	var resultsDiv = document.querySelector("#results");
	response.data.forEach(function (post) {
		FB.api(
			"/" + post.id + "/comments",
			{fields: "comment_count, from, message, created_time"},
			handleComments
		);
	});
	page.next = response.paging.next;
}