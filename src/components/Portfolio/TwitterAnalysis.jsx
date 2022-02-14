import React from "react";
import { Typography } from "@mui/material";
import { Heading } from "../Heading/Heading";

export const TwitterAnalysis = () => {
  return (
    <>
      <Heading
        firstText="Question to"
        secondText="Keep in Mind"
        variant="h4"
        fontWeight={600}
        hasSpace
        mb="10px"
      />
      <Typography variant="h6" color="whites.main">
        Do any patterns emerge in response to trending topics related to ethics,
        society, and technology, and can these patterns be visualized in a way
        that is clear to non-technical professionals?
      </Typography>
      <Heading
        firstText="Purpose"
        secondText="and Methods"
        variant="h4"
        fontWeight={600}
        hasSpace
        mb="10px"
      />
      <Typography variant="h6" color="whites.main">
        The purpose of this project is to create visualizations of NLP (natural
        language processing) analyses for non-technical professionals. <br />{" "}
        <br />
        We plan on using 2 methods for analysis:
        <br />
        1) Use Tweepy to access a stream of Twitter data and apply the inbuilt
        TextBlob for semantic analysis and classification.
        <br />
        2) Use sklearn text analysis within Python scikit-learn. Use TFIDF (Term
        Frequency - Inverse Document Frequency) within sklearn to build a text
        semantic analysis, to get a better idea of what kind of analysis might
        suit our objective and best answer our research question.
        <br />
        <br />
        As soon as we see the results from including these analyses, we will
        decide whether to stick to them or to proceed in a different direction.
        Depending on the patterns that emerge, we hope to apply the
        visualization techniques that are available to us, such as Many Eyes, or
        Google Data Studio, or Open Refine, and compare and contrast the
        results.
      </Typography>
      <Heading
        firstText="Expected"
        secondText="Outcome"
        variant="h4"
        fontWeight={600}
        hasSpace
        mb="10px"
      />
      <Typography variant="h6" color="whites.main">
        Use Twitter’s Live and historical data and create a visual
        representation that shows rises and falls of specific trends relevant to
        ethical and societal issues.
        <br />
        <br />
        For each given tweet, we will derive:
        <br />
        1) A tone depending on the phraseology and word choice
        <br />
        2) A measurement of thefrequencies of different classes of associated
        harmful behavior
        <br />
        <br />
        The following data will be visualized in a way, which will help
        non-technical professionals understand its context and the implications
        of the replies and retweets. We hope this will provide an opportunity
        for non-technical professionals to quickly identify the most prominent
        problems whose mitigation should be prioritized.
      </Typography>
      <Heading
        firstText="Deliver"
        secondText="ables"
        variant="h4"
        fontWeight={600}
        mb="10px"
      />
      <Typography variant="h6" color="whites.main">
        We plan to share our experiences and visualizations in a published paper
        where our focus will be on heuristic data. This would help contribute
        towards a tool that would help people understand large quantities of
        tweets in a structured, data-driven manner. We hope to use these
        analysis to support the current understanding of social dynamics within
        Twitter and help facilitate discussion surrounding ethical and societal
        issues.
      </Typography>
    </>
  );
};
