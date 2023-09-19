

const User = ({user}) => {
    const{id, name, email, phone} = user;
    const userstyle ={
        border: '2px solid yellow',
        padding: '5px',
        borderRadius :'20px'
    }
    return (
        <div style={userstyle}>
            <h2>{name}</h2>
            <p>email:{email}</p>
            <p>phone:{phone}</p>
        </div>
    );
};

export default User;