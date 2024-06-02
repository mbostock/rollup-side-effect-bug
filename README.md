# Rollup `sideEffects` bug reproduction

Ref. <https://github.com/rollup/rollup/issues/5538>

To reproduce the bug, clone this repo and run the following command:

```
yarn install --force && yarn test
```

To demonstrate that the bug is caused by the `sideEffects` field, you can remove the `sideEffects` declaration from [`test-plot/package.json`](./test-plot/package.json) and then re-run the above command.
