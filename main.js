
	// all posts function

	$('#all-posts').click(() => {
		$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', (posts) => {
			var p = $('<p></p>');
			p.text(JSON.stringify(posts));
			$('#posts').append(p);
		})
	});

	// get post of id 10

	$("#post10").click( () => {
		$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', { id: 10 }, (posts) => {
			posts.forEach( () => {
				var p = $('<p></p>');
				p.text(JSON.stringify(posts));
				$('#posts').append(p);
			});
		})
});

	// button 3
	$("#post12").click(() => {
		$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments', { id: 12 }, (posts) => {
			posts.forEach( () => {
				var p = $('<p></p>');
				p.empty();
				p.text(JSON.stringify(posts));
				$('#posts').append(p);
			});
		})
});

	// button 4
	$("#user2").click( () => {
		$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/userID', { userID: 2 }, (posts) => {
			posts.forEach( () => {
				var p = $('<p></p>');
				p.empty();
				p.text(JSON.stringify(posts));
				$('#posts').append(p);
			});
		})
});

// button 5

$("#create-post").click( () => {
	let title = "hello";
	let body = "world";

	$.post("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts", { "title": "postTitle", "body": "postBody" })
		.done((data) => {
			console.log(data);
			$("#posts").text('id: ' + data.id)
		})
})



// button 6

// $("#replace").click(() => {
// 	$.put('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments', { id: 15 }




// })
