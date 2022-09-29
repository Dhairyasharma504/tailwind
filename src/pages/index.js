import React from 'react';
import Card from '../components/Card';
import Layout from '../components/Layout';
// import data from '../utils/data';
import fs from 'fs';
import matter from 'gray-matter';
// import Link from 'next/link'
import path from 'path';
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils';

const Index = ({ posts }) => {
  return (
    <Layout>
      <div className="">
        <Card data={posts} />
      </div>
    </Layout>
  );
};
export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });
  return { props: { posts } };
}
export default Index;
