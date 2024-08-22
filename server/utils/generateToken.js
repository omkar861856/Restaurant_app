import jwt from 'jsonwebtoken'

export const generateToken = (id) => {
    // Uncomment the following line to log the JWT secret (for debugging purposes)
    // console.log('SECRET', process.env.JWT_SECRET);
  
    // Generate a JWT token with the user ID payload and the provided JWT secret
    // Set the token to expire in 15 days
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: '15d',
    });
  };