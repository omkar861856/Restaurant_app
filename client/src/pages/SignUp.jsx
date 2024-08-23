import React from 'react'

const SignUp = () => {
  return (
    <>
  <title>sign up</title>
  <link rel="stylesheet" href="signup.css" />
  <img src="images/restaurant.jpg" alt="restaurant logo" />
  <i>
    <h1 style={{ color: "#3498db", fontSize: 70 }}>Restaurant App</h1>
  </i>
  <div className="container">
    <form action="" method="post">
      <h2 style={{ fontSize: 40 }}>Sign Up</h2>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" placeholder="enter your name" />
      <label htmlFor="number">Mobile Number</label>
      <input type="number"id="number"name="number"placeholder="enter your number"/>
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

export default SignUp
