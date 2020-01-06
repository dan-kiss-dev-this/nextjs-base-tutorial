import { useRouter } from 'next/router';
import Layout from '../components/MyLayout';

const Content = () => {
    const router = useRouter();
    console.log(6,router.query.title,router)
    return (
        <>
          <h1>{router.query.title}</h1>
          <p>This is the blog post content</p>
        </>
    );
};

const Page = () => (
  <Layout>
    <Content />
  </Layout>
)

export default Page;
// import { useRouter } from 'next/router';
// import Layout from '../components/MyLayout';

// //the router object is made as a js object using the next/router code, you invoke the function to return the router object and you can the use its
// //properties this is sorta like node has built in items

// const Page = () => {
//     const router = useRouter();

//     return (
//         <Layout>
//             <h1>{router.query.title}</h1>
//             <p>This is the blog post content</p>
//         </Layout>
//     )
// }

// export default Page;