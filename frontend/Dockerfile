FROM node:alpine as builder

WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build


FROM node:alpine

RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-l", "3000", "-s", "."] 
