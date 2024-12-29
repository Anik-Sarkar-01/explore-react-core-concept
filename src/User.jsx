export default function User(user){
    console.log(user);
    const {name, email} = user.user;
    return (
        <div style={{ border: '2px solid green', margin: '20px'}}>
            <h4>Name: {name} </h4>
            <p>Email: {email} </p>
        </div>
    )
}