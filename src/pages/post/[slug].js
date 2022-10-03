import { useRouter } from 'next/router';
import { postFilePaths } from '../../utils/mdxUtils';

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log('slug', slug);

  return <p>Post: {slug}</p>;
};

export async function getStaticPaths() {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  // const paths = postFilePaths.map((slug) => {
  //   ({ params: { slug } });
  // });

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}
export async function getStaticProps() {
  return {
    // Passed to the page component as props
    props: { post: {} },
  };
}

export default Post;
