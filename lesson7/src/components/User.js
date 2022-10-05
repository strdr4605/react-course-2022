import './User.css'

export default function User({user}) {
  return user === undefined ? (
    <div>No user</div>
  ) : (
    <div className="user-container">
      <p className="user-first-name">{user.first_name}</p>
      <p>{user.email}</p>
      <img src={user.avatar} />
    </div>
  );
}
