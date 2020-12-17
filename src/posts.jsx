import React from 'react';

// posts
function Blog(listOfProps) { // 'listOfProps' contains the property 'listOfPosts' added in call to function 'Blog'
	const sidebar = (
	<p>
	  <ol>
		{listOfProps.listOfPosts.map((post) =>
		  <li key={post.id}>{post.title}</li>
		)}
	  </ol>
	</p>	
	);

	const content = listOfProps.listOfPosts.map((post) =>  
	  <div key={post.id}>
		<h3>{post.title}</h3>
		<p>{post.content}</p>
	  </div>
	);

	return (
	  <div>
		<hr />
		{sidebar}
		<hr />
		{content}    
	  </div>
	);
}
  

export default Blog;