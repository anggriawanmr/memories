export default (posts = [], action) => {
  switch (action.type) {
    case 'UPDATE':
      return posts.map((post) =>
        post._id == action.payload._id ? action.payload : post
      );
    case 'FETCH_ALL':
      return action.payload;

    // Showing all post in array, then add new post and store in action.payload
    case 'CREATE':
      return [...posts, action.payload];

    default:
      return posts;
  }
};
