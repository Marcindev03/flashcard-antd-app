import React from "react";
import { Card } from "antd";
import WordItem from "./WordItem";

const Words = ({ words }) => {
  return (
    <Card title="Words">
      {words.map((word, i) => (
        <WordItem key={word + i}>{word}</WordItem>
      ))}
    </Card>
  );
};

export default Words;
