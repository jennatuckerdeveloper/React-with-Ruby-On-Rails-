# README

https://www.honeybadger.io/blog/react-rails/

To avoid bugs, change gemfile to:
gem 'sqlite3', '~> 1.3.10'

Add:
gem 'webpacker', '~> 4.3.x'

Run:

bundle install
bundle exec rake webpacker:install
bundle exec rake webpacker:install:react

At this point, package.json and node_modules should be created.

For React Router:

yarn add react-router-dom

Current package.json should be:

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
