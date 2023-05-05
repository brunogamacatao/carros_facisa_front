# Estágio 1 - construção do frontend
FROM node:16.14.2-slim AS builder

COPY package.json .
RUN npm install
COPY . .
ENV REACT_APP_BACKEND_URL=http://10.5.8.112:5000
RUN npm run build

# Estágio 2 - execução do frontend
FROM nginx AS server
COPY --from=builder build /usr/share/nginx/html