const POST_URL = "https://jsonplaceholder.typicode.com/posts";

type TPostWithComments = {
  postId: number;
  title: string;
  comments: TComment[];
};
type TComment = {
  postId: number;
  id: number;
  email: string;
  body: string;
};
type TPost = {
  id: number;
  title: string;
};

export async function getPosts(userId: number | string): Promise<TPostWithComments[]> {
  const postsList = await fetch(`${POST_URL}?userId=${userId}`);
  const posts = (await postsList.json()) as TPost[];

  const postsWithComments = await Promise.all(
    posts.map(async (post: TPost) => {
      const commentsList = await fetch(`${POST_URL}/${post.id}/comments`);
      const commentsData = (await commentsList.json()) as TComment[];
      const comments = commentsData.map(({ postId, id, email, body }) => ({
        postId,
        id,
        email,
        body,
      }));

      return {
        postId: post.id,
        title: post.title,
        comments,
      };
    })
  );

  return postsWithComments;
}
