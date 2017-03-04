# Simple GlueStick example
This is a simple GlueStick application example to help debug issues in the v1 release candidate.

# Requirements
install latest GlueStick release candiate 1.0.0-rc.x
*or*
test against branch following GlueStick dev install steps

# Setup
- `yarn` - install dependencies
- `node api.js` - start simple API server example (runs on port 4000)
- `gluestick start` - start up gluestick app that reads from api server

# Issues
We can keep a list of issues here and I'll cross them out as they are resolved.
 - `gsBeforeRoute` is not working https://github.com/TrueCar/gluestick/issues/686
  - visit [http://localhost:8888/todos](http://localhost:8888/todos) once it is running
  - This issue can be best understood by looking at these lines of code: https://github.com/toddw/gluestick-v1-testing/blob/master/src/apps/main/containers/TodosApp.js#L32-L40
  - We shouldn't have to fetch on `componentDidMount`
 - How do we expose the express app? https://github.com/TrueCar/gluestick/issues/716
  - If the express app was exposed then we could take advantage of that and not have to run `node api.js`

