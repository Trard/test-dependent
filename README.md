# Test-Dependent
Test [Dependent](https://github.com/Trard/test-dependent) for [Dependence](https://github.com/Trard/test-dependence).

[![CI](https://github.com/Trard/test-dependent/actions/workflows/CI.yml/badge.svg)](https://github.com/Trard/test-dependent/actions/workflows/CI.yml)
[![CD](https://github.com/Trard/test-dependent/actions/workflows/CD.yml/badge.svg)](https://github.com/Trard/test-dependent/actions/workflows/CD.yml)

# Contents
1. [Installation](https://github.com/trard/test-dependent/blob/master/README.md#installation)
    - [Docker](https://github.com/trard/test-dependent/blob/master/README.md#docker)
    - [Github](https://github.com/trard/test-dependent/blob/master/README.md#github)
        1. [Clone](https://github.com/trard/test-dependent/blob/master/README.md#clone)
        2. [Dependencies](https://github.com/trard/test-dependent/blob/master/README.md#dependencies)
2. [Run](https://github.com/trard/test-dependent/blob/master/README.md#run)
    - [NPM](https://github.com/trard/test-dependent/blob/master/README.md#npm-1)
    - [Docker](https://github.com/trard/test-dependent/blob/master/README.md#docker-1)

# Installation

## Docker
```shell
docker pull trard/test-dependent
```

## Github

### Clone
```shell
git clone https://github.com/Trard/test-dependent.git
```

### Install Dependencies
```shell
npm i --only=prod
```

# Run

## NPM
```shell
npm run start
```

## Docker
```shell
docker run trard/test-dependent
```
