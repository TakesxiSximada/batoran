# setup

## clone repository

```
$ git clone git@github.com:TakesxiSximada/batoran.git
```

## homebew

http://brew.sh/index_ja.html

```
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

## nodejs

http://bulblub.com/2013/04/20/install_nodejs_with_homebrew/

```
$ brew install node

```

## direnv

```
$ brew install direnv
$ cd batran  # apply direnv
```

その後ご自身が使用している*rcに以下を追加

(例はzsh)
```
eval "$(direnv hook zsh)"
```

## install npm packages

```
$ npm install
```

# build vendor js

```
$ gulp webpack
```

# build

```
$ batoran
$ cordva platform add ios
$ cordva build
```

# run emulator

```
$ cordva run
```


# refresh

```
$ npm install
$ bower install
$ gulp webpack
```
