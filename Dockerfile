FROM ubuntu:20.04

RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
  apt-transport-https \
  ca-certificates \
  curl \
  software-properties-common \
  gnupg

RUN curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
RUN apt-key fingerprint 0EBFCD88

RUN add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable edge test"

RUN apt-get update && apt-get install docker-ce -y


# COPY /parabricks/ /parabricks/

# RUN python3 ./parabricks/installer.py --force --ampere

# RUN pbrun version