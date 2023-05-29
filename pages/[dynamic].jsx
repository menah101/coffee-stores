import Head from "next/head";
import { useRouter } from "next/router";

const DynamicRoute = () => {
  const router = useRouter()
  const { query } = router;
  console.log('query', query);
  return (
    <div>
      <Head>
        <title>{query.dynamic}</title>
      </Head>
      <div>Hi dynamic route: {query.dynamic}</div>
    </div>
  )
};

export default DynamicRoute;
