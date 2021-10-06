# README

# To Get Started With This Code

1.  Clone repo from GitHub
2.  `bundle install`
3.  `yarn install`
4.  `rake db:migrate` --> This app has a Post model, Posts controller, and a root route.

# Creating from the following

https://www.honeybadger.io/blog/react-rails/

1. To avoid bugs, change gemfile to:
   `gem 'sqlite3', '~> 1.3.10'`

2. Add:
   `gem 'webpacker', '~> 4.3.x'`

3. Run:

`bundle install`
`bundle exec rake webpacker:install`
`bundle exec rake webpacker:install:react`

At this point, package.json and node_modules should be created.

4. For React Router:

`yarn add react-router-dom`

Current `package.json` should be:

{
"dependencies": {
"@babel/preset-react": "^7.12.1",
"@rails/webpacker": "4.3.0",
"antd": "^4.7.2",
"babel-plugin-transform-react-remove-prop-types": "^0.4.24",
"prop-types": "^15.7.2",
"react": "^17.0.0",
"react-dom": "^17.0.0",
"react-router-dom": "^5.2.0"
},
"devDependencies": {
"webpack-dev-server": "^3.11.0"
}
}
