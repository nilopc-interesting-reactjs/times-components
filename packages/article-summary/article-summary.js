import React from "react";
import { Text, View, Platform } from "react-native";
import PropTypes from "prop-types";
import { renderTrees, treePropType } from "@times-components/markup";
import DatePublication from "@times-components/date-publication";
import renderer from "./article-summary-renderer";

const styles = {
  container: {},
  label: {
    color: "#333333",
    fontFamily: "GillSansMTStd-Medium",
    fontSize: 12,
    marginBottom: 2,
    letterSpacing: 1
  },
  headline: {
    color: "#333333",
    fontSize: 22,
    lineHeight: 22,
    marginBottom: 6,
    fontFamily: "TimesModern-Bold",
    fontWeight: "400",
    ...Platform.select({
      web: { WebkitFontSmoothing: "auto" }
    })
  },
  text: {
    color: "#696969",
    fontSize: 14,
    fontFamily: "TimesDigitalW04",
    lineHeight: 20,
    marginBottom: 10,
    flexWrap: "wrap"
  },
  metaText: {
    color: "#696969",
    fontSize: 13,
    lineHeight: 15,
    fontFamily: "GillSansMTStd-Medium",
    marginBottom: 10
  }
};

const summarise = text => {
  if (!text.length) {
    return text;
  }

  const initial = text.slice(0, text.length - 1);
  const last = text[text.length - 1];
  const teaser = Object.assign({}, last, {
    name: "teaser",
    attributes: { isSingle: initial.length === 0 }
  });

  return [...initial, teaser];
};

const ArticleSummary = props => {
  const {
    label,
    headline,
    text,
    date,
    publication,
    showPublication,
    byline,
    containerStyles
  } = props;
  const summary = summarise(text);
  const labelText = label && label.toUpperCase && label.toUpperCase();

  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{labelText}</Text> : null}
      <Text style={[styles.headline, containerStyles.headline]}>{headline}</Text>
      <Text style={styles.text}>{renderTrees(summary, renderer)}</Text>
      <Text
        style={styles.metaText}
        accessibilityLabel="datePublication"
        testID="datePublication"
      >
        <DatePublication
          date={date}
          publication={publication}
          showPublication={showPublication}
        />
      </Text>
      {byline ? <Text style={styles.metaText}>{byline}</Text> : null}
    </View>
  );
};

ArticleSummary.propTypes = {
  label: PropTypes.string,
  headline: PropTypes.string,
  text: PropTypes.arrayOf(treePropType),
  date: DatePublication.propTypes.date,
  publication: DatePublication.propTypes.publication,
  showPublication: DatePublication.propTypes.showPublication,
  byline: PropTypes.string,
  containerStyles: Text.propTypes.style
};

ArticleSummary.defaultProps = {
  label: "",
  headline: "",
  text: [],
  date: null,
  publication: DatePublication.defaultProps.publication,
  showPublication: DatePublication.defaultProps.showPublication,
  byline: "",
  containerStyles: {} 
};

export default ArticleSummary;
