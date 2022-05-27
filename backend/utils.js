import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    { expiresIn: '30d' }
  );
};
export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length); // Bearer will get  XXXXXXX
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).send({ message: 'Invalid Token' });
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: 'No Token' });
  }
};

export const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send({ message: 'Invalid Admin Token' });
  }
};


// validation
// import axios from 'axios';
// import Cookies from 'universal-cookie';
// const cookies = new Cookies();

// axios.defaults.withCredentials = true;
// class Auth {
// 	constructor() {
// 		this.authenticated = false;
// 	}

// 	isAuthenticated() {
// 		const accessToken = cookies.get('authSession');
// 		const refreshToken = cookies.get('refreshTokenID');
// 		if (!accessToken && !refreshToken) {
// 			return (this.authenticated = false);
// 		}
// 		if (accessToken && refreshToken) {
// 			return (this.authenticated = true);
// 		}
// 		if (!accessToken && refreshToken) {
// 			axios
// 				.post('http://localhost:8888/refresh', {
// 					withCredentials: true
// 				})
// 				.then(function(res) {
// 					console.log(res.data);
					
// 					window.location.reload();
// 				})
// 				.catch(function(error) {
// 					console.log(error.response);
// 				});
// 		}
// 	}
// }

// export default new Auth();

// validation