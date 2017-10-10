FROM node:latest

RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app

RUN apt-get update && apt-get install -y nano

COPY public $HOME

RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME

ENV NPM_CONFIG_LOGLEVEL warn
ARG app_env
ENV APP_ENV $app_env

RUN npm install nodemon --save-dev

RUN cd backend && npm install

RUN cd frontend && npm install

RUN npm install concurrently --save-dev

CMD if [ ${APP_ENV} = production ]; \
	then \
	cd frontend && npm install -g http-server && \
	npm run build && \
	cd build && \
	hs -p 3000; \
	else \
  concurrently --kill-others "cd frontend && npm run start" "nodemon backend/server.js"; \
	fi

EXPOSE 3000 5000
