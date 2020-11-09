FROM alpine:3.12

RUN echo '@edgetesting http://dl-cdn.alpinelinux.org/alpine/edge/testing' \
  >> /etc/apk/repositories



COPY package.json /install/package.json
WORKDIR /install/
RUN apk --no-cache add \
  nodejs \
  npm \
  ffmpeg \
  android-tools@edgetesting \
  && npm install -g \
  npm@latest \
  && npm cache clean --force \
  && rm -rf \
  /tmp/* \
  /root/.npm



WORKDIR /usr/lib/wdio
COPY package.json package-lock.json ./
RUN npm install --production \
  # Clean up obsolete files:
  && rm -rf \
  /tmp/* \
  /root/.npm

ENV NODE_PATH=/usr/lib/wdio/node_modules
# Extend path to be able to run installed binaries:
ENV PATH=$PATH:/usr/lib/wdio/node_modules/.bin

COPY . ./
# Avoid permission issues with host mounts by assigning a user/group with
# uid/gid 1000 (usually the ID of the first user account on GNU/Linux):
RUN adduser -D -u 1000 wdio

USER wdio



