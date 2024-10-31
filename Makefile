.PHONY: run-web
run-web:
	cd web && npm run dev


.PHONY: run-server
run-server:
	@export $$(cat .env | xargs) &&  \
	(cd server && ./gradlew bootRun)