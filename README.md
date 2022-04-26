# Ride App
Decentralized ride sharing on the Ethereum blockchain.
The project contains the frontend website and backend Ethereum Smart Contract to deploy and run the decentralized ride sharing application.

## Smart contract
* The `backend/deris.sol` file contains the logic for all interaction between rider and driver orchestrated on the blockchain run on an Ethereum test network. 
* The smart contract can be compiled by running the following node command in the `backend` folder: `solcjs deris.sol --bin --abi`
* The above command generates a `.bin` and a `.abi` file of the smart contract.
* The `.bin` and `.abi` file are used to deploy the smart contract on an ethereum test network. 
* The `.abi` file is also used to create an instance of the contract for the React user application to use to call the functions in the smart contract deployed on the test network.

## Ganache test Network
* Ganache  is used as the test network to deploy the `deris.sol` smart contract on.
* Once ganache is installed, a test network is started using `quickstart`. The default test network start on local host at port number 7545 (http://127.0.0.1:7545)

* If the `mig.js` file is giving problems in deployment, the Remix IDE can also be used to deploy the contract on the ganache test network instance. Again make sure to have the right network address selected. 
* Be sure to note down the address the contract was deployed at.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!



