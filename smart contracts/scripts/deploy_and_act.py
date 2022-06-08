from brownie import johnnynftmint, network, accounts, config
from web3 import Web3

def deploy_contract():
    if network.show_active() == "development":
        account = accounts[0]
    else:
        account = accounts.add(config['wallets']['from_key'])
    contract = johnnynftmint.deploy({"from": account}, publish_source=config["networks"][network.show_active()].get("verify", False))
    return account, contract

def mint(account, contract, mint_amount, eth_amount):
    tx = contract.mintNFT(mint_amount, {"from": account, "value": Web3.toWei(eth_amount, 'ether')})
    tx.wait(1)
    print("Wallet " + str(account) + " has minted " + str(mint_amount) + " NFT/s")

def withdraw(account, contract):
    contract.withdraw({"from": account})

def main():
    account, contract = deploy_contract()
