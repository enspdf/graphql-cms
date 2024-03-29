import post from "../post";
import { isFunction } from "../../../utils/is";

describe("#Query", () => {
  it("Should have getPosts method", async () => {
    expect(isFunction(post.Query.getPosts)).toBe(true);
  });
});

describe("#Mutation", () => {
  it("Should have createPost method", async () => {
    expect(isFunction(post.Mutation.createPost)).toBe(true);
  });
});
