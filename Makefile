dev:
	./node_modules/.bin/babel-node --stage 0 ./node_modules/.bin/webpack-dev-server --progress --colors --hot --inline

api:
	nodemon --exec ./node_modules/.bin/babel-node --stage 0  ./src/api/server.js

PHONY: babel-node dev api
