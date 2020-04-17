# bullqm-keyprefix-problem

Reproduction:

```sh
node queue.js
node worker.js

# Error: Missing lock for job 5 failed
```

Error does not happen when `keyPrefix` is commented out.
