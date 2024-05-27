# SEEME PAYMENT PLAN WITH MetaMask

This is a simple React code that allows users to connect their MetaMask wallet, view their wallet address, and send a transaction using MetaMask.

## FEATURES 

- Connect to MetaMask wallet
- Display connected wallet address
- Send a fixed transaction to a predefined address

## INSTALLATION

1. Clone the repository:

    `git clone https://github.com/your-username/metamask-wallet-connection-app.git`

2. Navigate to the project directory: <br>
     `cd metamask-wallet-connection-app`


3. Install the dependencies:     
    `npm install`


## USAGE

1. Start the development server: <br>
    `npm start`

2. Open your browser and go to http://localhost:3000.

3. Click the "Connect Wallet" button to connect your MetaMask wallet.

4. Once connected, your wallet address will be displayed.

5. Click the "Send Transaction" button to send a fixed transaction.
 
## CODE OVERVIEW
The main component of the application is MetaMask.js, which includes the following functionalities:

* connectWallet: Prompts the user to connect their MetaMask wallet. If MetaMask is not installed, an error message is displayed. <br>
* accountChanged: Updates the state with the connected account address.<br>
* sendTransaction: Sends a fixed transaction using the connected MetaMask account.


## LICENSE

This project is licensed under the MIT [License](https://opensource.org/license/mit). See the [LICENSE](https://opensource.org/license/mit) file for details.

## ACKNOWLEDGMENTS

* [MetaMask](https://metamask.io/) - Ethereum Wallet and Browser Extension 

* [React](https://reactjs.org/)- JavaScript library for building user interfaces




