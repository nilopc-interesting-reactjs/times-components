import React from "react";
import { storiesOf } from "dextrose/storiesOfOverloader";
import { decorateAction } from "@storybook/addon-actions";
import RelatedArticles from "./related-articles";

const singleRelatedArticleFixture = require("./fixtures/related-article.json");

const preventDefaultedAction = decorateAction([
  ([e, ...args]) => {
    e.preventDefault();
    return ["[SyntheticEvent (storybook prevented default)]", ...args];
  }
]);

storiesOf("Related Articles", module).add("Single article with images", () => {
  const props = {
    ...singleRelatedArticleFixture.data.article,
    onPress: preventDefaultedAction("onArticlePress")
  };

  return <RelatedArticles {...props} />;
});
