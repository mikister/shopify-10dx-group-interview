.DEFAULT_GOAL := run

.PHONY: run run.% stop stop.% logs logs.% list


run:
	docker-compose up --build --detach

run.%:
	docker-compose up --build --detach ${subst run.,,$@}

stop:
	docker-compose stop

stop.%:
	docker-compose stop ${subst stop.,,$@}

logs:
	docker-compose logs --follow

logs.%:
	docker-compose logs --follow ${subst logs.,,$@}

list:
	docker-compose ps --services
