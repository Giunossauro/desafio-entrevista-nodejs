REPORTER = spec
test:
	@$(MAKE) lint
	@NODE_ENV=test ./node_modules/.bin/mocha -b --reporter $(REPORTER)

lint:
	./node_modules/.bin/jshint ./lib ./test ./index.js

test-coverage:
	@NODE_ENV=test ./node_modules/.bin/jest --coverage

.PHONY: test
