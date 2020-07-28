# pull official base image
FROM node:13.12.0-alpine

# set working directory
RUN mkdir /restaurant-app
WORKDIR /restaurant-app

# add `/restaurant-app/node_modules/.bin` to $PATH
ENV PATH /restaurant-app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json /restaurant-app/
COPY package-lock.json /restaurant-app/
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . /restaurant-app/

# start app
CMD ["npm", "start"]