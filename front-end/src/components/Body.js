import React from 'react';
import {useEthers, useContractFunction} from "@usedapp/core";
import {utils} from 'ethers';
import {Contract} from "@ethersproject/contracts";

import {contractAddress, contractABI} from "../constants";
const contract = new Contract(contractAddress, contractABI.abi);

const Body = () => {

    const {activateBrowserWallet, account, deactivate} = useEthers();
    const [mintAmount, setMintAmount] = React.useState(0);

    const addMintAmount = () => {
        setMintAmount(prev => prev + 1);
    }

    const minusMintAmount = () => {
        setMintAmount(prev => prev === 0 ? 0 : prev - 1);
    }

    const {state, send} = useContractFunction(contract, 'mintNFT', {transactionName: "Mint NFT"})
    console.log(state);

    function mint() {
        send(mintAmount, {value: utils.parseEther((mintAmount * 0.05).toString())});
        setTransactionModal(true);
    }

    const [transactionModal, setTransactionModal] = React.useState(false);

    return (
        <div className="body bg-white">
            {transactionModal && (
                <div className="transaction-modal d-flex justify-content-center align-items-center">
                    <div className="container text-center text-poppins text-dark bg-white border border-3 rounded border-dark p-3">
                        <h1 className="text-quicksand">Thank you for Minting!</h1>
                        {state.transaction && (
                                <p className="lead text-secondary">Transaction Hash: <a href={`https://rinkeby.etherscan.io/tx/${state.transaction.hash && state.transaction.hash}`} className="text-primary">{state.transaction.hash && state.transaction.hash}</a></p>
                        )}
                        {state.status && (
                            <p className="lead text-secondary">Transaction Status:
                                {state.status === "None" && ( <span className="text-danger fw-bold"> None</span> )}
                                {state.status === "Mining" && ( <span className="text-warning fw-bold"> Mining</span> )}
                                {state.status === "Success" && ( <span className="text-success fw-bold"> Success</span> )}
                            </p>
                        )}
                        <button className="btn bg-purple text-light text-quicksand btn-lg px-3 py-2" onClick={setTransactionModal(false)}>Return</button>
                    </div>
                </div>
            )}
            <div className="container p-5 text-poppins text-dark d-flex justify-content-between align-items-center w-100">
                <div>
                    <h1 className="text-quicksand">Mint Johnny's NFTs</h1>
                    {!account ? (
                        <button className="btn bg-purple text-white px-3 py-2" onClick={activateBrowserWallet}>Connect</button>
                    ) : (
                        <>
                            <p className="text-secondary mb-2 mt-4">Wallet: {account}</p>
                            <button className="btn bg-secondary text-white px-3 py-2" onClick={deactivate}>Disconnect</button>
                        </>
                        
                    )}
                    <div className="w-100 bg-dark rounded text-light text-center p-2 my-5">
                        <h4 className="text-quicksand">Mint</h4>
                        <div className="d-flex justify-content-center align-items-center mt-4">
                            <button className="btn bg-purple text-white px-3 border border-0 rounded me-3" onClick={minusMintAmount}>-</button>
                            <p className="lead mb-0">{mintAmount}</p>
                            <button className="btn bg-purple text-white px-3 border border-0 rounded ms-3" onClick={addMintAmount}>+</button>
                        </div>
                        <p className="text-secondary mb-0 mt-3">0.05 ETH each</p>
                        {!account || mintAmount === 0 ? (
                            <button className="btn bg-secondary text-white px-3 py-2 mt-2">Disabled</button>
                        ) : (
                            <button className="btn bg-white text-dark px-3 py-2 mt-2" onClick={mint}>Mint NFTs</button>
                        )}
                    </div>
                    <p className="text-secondary text-center">Please use Rinkeby Test Network.</p>
                </div>
                <img src="/images/2.png" alt="" className="w-25" />
            </div>
        </div>
    )
}

export default Body;