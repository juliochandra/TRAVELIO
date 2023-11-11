const express = require('express');
const bcrypt = require('bcrypt');
const morgan = require('morgan');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const dotenv = require('dotenv');
const path = require('path');
const methodOverride = require('method-override');
const { db } = require('./database/database');

const destinationsRouter = require('./routes/destinationRoutes');
const reviewsRouter = require('./routes/reviewsRoutes');
const usersRouter = require('./routes/usersRoutes');
const homeRouter = require('./routes/homeRoutes');
const ExpressError = require('./middleware/expressError');

dotenv.config({ path: './.env' });

const port = process.env.PORT;
const app = express();

app.engine('ejs', ejsMate);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, 'public')));

// express session for save data signin and userId
app.use(
  session({
    secret: process.env.YOUR_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24
    }
  })
);

// passport dan passport local config

app.use(passport.initialize());
app.use(passport.session());

// passport local strategy
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email', // usernameFieeld adalah nama bawaan dari passport local
      passwordField: 'password'
    },
    async (email, password, done) => {
      try {
        const user = await db('user')
          .where({ email })
          .first();
        if (!user) {
          return done(null, false, { message: 'Incorrect email.' });
        }
        if (user) {
          const validasiPassword = await bcrypt.compare(
            password,
            user.password
          );
          if (!validasiPassword) {
            return done(null, false, { message: 'Incorrect password.' });
          }
        }
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.serializeUser(async (user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await db('user')
      .select('*')
      .where({ id })
      .first();
    done(null, user);
  } catch (error) {
    return done(error, null);
  }
});

// untuk membuat user bisa diakses di ejs
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

// middleware to make userId available

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//  route
app.get('/', homeRouter);
app.use('/api/v1/destinations', destinationsRouter);
app.use('/api/v1/reviews', reviewsRouter);
app.use('/api/v1/users', usersRouter);

app.all('*', (req, res, next) => {
  next(new ExpressError('Page Not Found', 404));
});

// server listening
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
