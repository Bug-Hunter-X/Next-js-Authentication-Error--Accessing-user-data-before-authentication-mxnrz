```javascript
// pages/aboutSolution.js

export default function About() {
  const user = getUser();

  return (
    <div>
      <h1>About Page</h1>
      {user ? (
        <>
          <p>This is the about page.</p>
          <p>User Email: {user.email}</p>
        </>) : (
        <p>Please Log in</p>
      )}
    </div>
  );
}

function getUser(){
  // some code to fetch user
  if(Math.random() < 0.5){
    return {
        email: "test@example.com"
    }
  }else{
    return null
  }
}
```