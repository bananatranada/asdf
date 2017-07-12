# Create React App Boilerplate (For Static Websites)

## Packages

### React Router
* Easy transition animations

### Tachyons
* Functional CSS
* Used as a submodule in order to edit the source
* Update via upstream
* Because we're building this library ourselves, we also need to keep track of the [plugins](https://github.com/tachyons-css/tachyons-build-css/blob/master/package.json) tachyon depends on

#### Build Process
```
# Init in src/css (this has already been done)
git submodule add git@github.com:tachyons-css/tachyons.git

# After first time clone
git submodule init
git submodule update

# Pull upstream changes (inside the submodule directory)
git fetch
git merge
```