# Simple GlueStick example
This is a simple GlueStick application example to help debug issues in the v1 release candidate.

# Requirements
install latest GlueStick release candiate 1.0.0-rc.x
*or*
test against branch following GlueStick dev install steps

# Setup
- `yarn`
- `gluestick start`

# Issues
We can keep a list of issues here and I'll cross them out as they are resolved.
 - `gsBeforeRoute` is not working https://github.com/TrueCar/gluestick/issues/686
  - This issue can be best understood by looking at these lines of code: https://github.com/toddw/gluestick-v1-testing/blob/master/src/apps/main/containers/TodosApp.js#L32-L40
  - We shouldn't have to fetch on `componentDidMount`

