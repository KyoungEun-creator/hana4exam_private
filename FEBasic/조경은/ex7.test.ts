import assert from "assert";
import { getPosts, TComment } from "./ex7";

const getCommentsFromPost = async (postId: number): Promise<TComment[]> => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    const data = await response.json();
    return data as TComment[];
  } catch (error) {
    console.error(error);
    return [];
  }
};

async function fetchCommentsFromPost(postId: number) {
  return await getCommentsFromPost(postId);
}

async function test(userId: string | number) {
  const posts = await getPosts(userId);
  const commentsFromPost1 = await fetchCommentsFromPost(1);

  assert.strictEqual(posts?.length, 10);
  assert.strictEqual(posts?.at(-1)?.comments?.length, 5);
  assert.deepStrictEqual(posts[0], {
    postId: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    comments: [
      {
        postId: 1,
        id: 1,
        email: "Eliseo@gardner.biz",
        body:
          "laudantium enim quasi est quidem magnam voluptate ipsam eos\n" +
          "tempora quo necessitatibus\n" +
          "dolor quam autem quasi\n" +
          "reiciendis et nam sapiente accusantium",
      },
      {
        postId: 1,
        id: 2,
        email: "Jayne_Kuhic@sydney.com",
        body:
          "est natus enim nihil est dolore omnis voluptatem numquam\n" +
          "et omnis occaecati quod ullam at\n" +
          "voluptatem error expedita pariatur\n" +
          "nihil sint nostrum voluptatem reiciendis et",
      },
      {
        postId: 1,
        id: 3,
        email: "Nikita@garfield.biz",
        body:
          "quia molestiae reprehenderit quasi aspernatur\n" +
          "aut expedita occaecati aliquam eveniet laudantium\n" +
          "omnis quibusdam delectus saepe quia accusamus maiores nam est\n" +
          "cum et ducimus et vero voluptates excepturi deleniti ratione",
      },
      {
        postId: 1,
        id: 4,
        email: "Lew@alysha.tv",
        body:
          "non et atque\n" +
          "occaecati deserunt quas accusantium unde odit nobis qui voluptatem\n" +
          "quia voluptas consequuntur itaque dolor\n" +
          "et qui rerum deleniti ut occaecati",
      },
      {
        postId: 1,
        id: 5,
        email: "Hayden@althea.biz",
        body:
          "harum non quasi et ratione\n" +
          "tempore iure ex voluptates in ratione\n" +
          "harum architecto fugit inventore cupiditate\n" +
          "voluptates magni quo et",
      },
    ],
  });

  // 추가 테스트 코드를 작성하시오.
  assert.deepStrictEqual(posts[0]?.comments[0]?.email, commentsFromPost1[0]?.email);

  assert.deepStrictEqual(posts[1]?.title, "qui est esse");
  assert.deepStrictEqual(posts[2]?.comments[0]?.email, "Veronica_Goodwin@timmothy.net");
  assert.deepStrictEqual(posts[3]?.comments[1]?.email, "Preston_Hudson@blaise.tv");
  assert.deepStrictEqual(
    posts[4]?.comments[2]?.body,
    "voluptates provident repellendus iusto perspiciatis ex fugiat ut\nut dolor nam aliquid et expedita voluptate\nsunt vitae illo rerum in quos\nvel eligendi enim quae fugiat est"
  );
  assert.deepStrictEqual(posts[5]?.comments[3]?.id, 29);
  assert.deepStrictEqual(posts[6]?.title, "magnam facilis autem");
  assert.deepStrictEqual(posts[7]?.comments[4]?.email, "Clare.Aufderhar@nicole.ca");
  assert.deepStrictEqual(posts[8]?.comments[1]?.id, 42);
  assert.deepStrictEqual(posts[9]?.comments[2]?.email, "Manuela_Stehr@chelsie.tv");
}
