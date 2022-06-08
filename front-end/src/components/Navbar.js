const Navbar = () => {

    return (
        <nav className="navbar bg-white">
            <div className="px-5 text-quicksand text-dark d-flex justify-content-between align-items-center w-100">
                <h1 className="mb-0">John's NFT Minting Dapp</h1>
                <a href="https://rinkeby.etherscan.io/address/0x19cfcb9dea3dd900b4578a3cefa5a70e34db97e5" className="nav-link">
                    <button className="btn btn-lg px-3 py-2 text-quicksand bg-purple text-white">View Contract</button>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;