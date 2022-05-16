// import { getAPI } from "../src/main";

// test("the data is peanut butter", () => {
//   expect(1).toBe(1);
// });

// test("getAPI", () => {
//   expect(getAPI("https://postman-echo.com/get?test=123")).toBe({});
// });

const fetch = require("isomorphic-fetch"); // So that fetch is available in the test environment
import { YouTube } from "../src";
import { getYoutubeVideoInfoTest } from "./cases";

describe("YouTube test suite", () => {
  let globalYoutube: YouTube;
  beforeAll(async function () {
    globalYoutube = await new YouTube().init();
  });

  test.each(getYoutubeVideoInfoTest)(
    "if getVideoInfo works as expected",
    async function (testCase) {
      const result = await globalYoutube.getVideoDetails(testCase.input);
      expect(result).toMatchObject(testCase.expected);
    }
  );
});
