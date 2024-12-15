```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error if the user is not authenticated
  const user = getUser(); // Function to fetch user data
  
  if(!user){
    return (
        <div>Please Log in</div>
    )
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <p>User Email: {user.email}</p> 
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