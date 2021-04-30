const Dashboard  = ({name, blog, avatar_url}) =>(
    <>
    <h1>{name}</h1>
    <img src={avatar_url}/>
    <p>Blog: {blog}</p>
    </>
);

Dashboard.getInitialProps = async () =>{
    const res = await fetch('https://api.github.com/users/gabrielaRazo');
    const user = await res.json();

    return user;
}

export default Dashboard;