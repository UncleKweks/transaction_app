import { useState, useEffect } from "react";

const MetaMask = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', accountChanged);
    }
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', accountChanged);
      }
    };
  }, []);

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts"
        });
        accountChanged(accounts[0]);
        setErrorMessage(null);  // Reset error message on successful connection
      } else {
        setErrorMessage("Please install MetaMask.");
      }
    } catch (error) {
      setErrorMessage("Failed to connect to MetaMask. Please try again.");
    }
  };

  const accountChanged = (accountName) => {
    setDefaultAccount(accountName);
  };

  const sendTransaction = async (event) => {
    event.preventDefault();
    try {
      if (!defaultAccount) {
        setErrorMessage("Please connect your MetaMask wallet first.");
        return;
      }
      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: defaultAccount,
            to: "0x66020133CD2812B66459882E01003CfBa31189B4",
            gas: Number(21000).toString(16),
            gasPrice: Number(2500000).toString(16),
            value: Number(10000000000000000).toString(16),
          }
        ]
      });
      setErrorMessage("Transaction sent successfully.");
    } catch (error) {
      setErrorMessage(`Failed to send transaction: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>MetaMask Wallet Connection</h1>

      <button onClick={connectWallet}>Connect Wallet</button>
      <h3>Address: {defaultAccount}</h3>

      <form onSubmit={sendTransaction}>
        <input type="submit" value="Send Transaction" />
      </form>

      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default MetaMask;
