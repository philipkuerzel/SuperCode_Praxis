import { verifyAuthorization } from "./verifyAuthorization.js";

describe ("Test Authorization Module", () => {
  test("undefinded parameter should return error", () => {
    expect(verifyAuthorization(undefined)).toStrictEqual({status: "error"});
  })
})