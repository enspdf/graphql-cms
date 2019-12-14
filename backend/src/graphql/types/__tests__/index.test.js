import typeDefs from "../index";

describe("#typeDefs", () => {
  it("Should match the GraphQL schema", () => {
    expect(typeDefs).toMatchSnapshot();
  });
});
