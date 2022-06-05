# Uniswap Clone

Clone of Uniswap V2 Decentralized Exchange (DEX).

### Cloning steps

1. Copy Uniswap Factory Contract and add `INIT_CODE_PAIR_HASH`
2. Deploy contract and save the `Factory Contract Address` and the `INIT_CODE_PAIR_HASH` value
3. Copy Uniswap Router Contract and change the `INIT_CODE_PAIR_HASH` value from previous step
4. Deploy contract and save `Router Contract Address`
5. Edit Router address on the frontend's constants folder to use the `Router Contract Address`
6. Edit `Factory Contract Address` and `INIT_CODE_PAIR_HASH` on `node_modules/@uniswap`
7. Set the network address to localhost or wherever you deploy the contract to

> Use `yarn deploy` to deploy the contracts

---

### As part of Advanced Blockchain Technologies Assignment

Author: **Ramdhani Rachmansyah -- 101391780**

George Brown College

---

> Source: [Clone Uniswap Tutorial](https://blockchain.news/wiki/how-to-build-an-uniswap-exchange)
