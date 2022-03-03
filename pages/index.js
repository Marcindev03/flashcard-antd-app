import React from "react";
import { readFile } from "fs/promises";
import { Col, Layout, Row } from "antd";
import path from "path";
import Words from "../components/Words";

const { Header, Content } = Layout;

const HomePage = ({ words }) => {
  return (
    <Layout>
      <Header style={{ height: "10vh", display: "flex", alignItems: "center" }}>
        <h1 style={{ color: "white" }}>Flashcards App</h1>
      </Header>
      <Content style={{ height: "90vh" }}>
        <Row>
          <Col span={20} offset={2}>
            <Words words={words} />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const words = JSON.parse(await readFile(path.resolve("db", "words.json")));
  const chunks = words
    .sort(() => Math.random() - 0.5)
    .reduce((result, item, index) => {
      const chunkIndex = Math.floor(index / 10);

      if (!result[chunkIndex]) {
        result[chunkIndex] = [];
      }

      result[chunkIndex].push(item);

      return result;
    }, []);

  return {
    props: {
      words: chunks[0],
    },
  };
};

export default HomePage;
