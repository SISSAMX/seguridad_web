import {useRouter} from 'next/router';

import Header from '../../../common/components/Components/Header/headerContainer';

const Blog = ({title, body}) =>{
    const router  = useRouter();
    const {id} =  router.query;

    return(
        <>
        <Header/>
        <h1>{title}</h1>
        <p>{body}</p>
        </>
    )
};

Blog.getInitialProps = async ({query}) =>{

    const res = fetch( `https://jsonplaceholder.typicode.com/posts/${query.id}`);
    const post  = (await res).json();
    return post;
}

export default Blog;