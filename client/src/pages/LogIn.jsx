import React from 'react'

const LogIn = () => {
  return (
    <>
  <title>Log in</title>
  <link rel="stylesheet" href="login.css" />
  <img src="images/restaurant.jpg" alt="restaurant logo" />
  <i>
    <h1 style={{ color: "#3498db", fontSize: 70 }}>Restaurant App</h1>
  </i>
  <div className="container">
    <form action="" method="post">
      <h2 style={{ fontSize: 40 }}>Log in</h2>
      <label htmlFor="email">Email </label>
      <input type="email" name="email" placeholder="enter your email address" />
      <label htmlFor="password">Password </label>
      <input type="password"name="password"placeholder="enter your password"/>
      <button type="submit">SUBMIT</button>
    </form>
  </div>
</>

  )
}

export default LogIn