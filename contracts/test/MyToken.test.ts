import { expect } from "chai";
import { ethers } from "hardhat";
import { Signer } from "ethers";

describe("MyToken", function () {
    let myToken: any;
    let owner: Signer;
    let addr1: Signer;
    let addr2: Signer;
    let addrs: Signer[];

    beforeEach(async function () {
        // Get signers
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

        // Deploy contract
        const MyToken = await ethers.getContractFactory("MyToken");
        myToken = await MyToken.deploy();
    });

    describe("Deployment", function () {
        it("Should set the correct name", async function () {
            expect(await myToken.name()).to.equal("Vageshwar Dev");
        });

        it("Should set the correct symbol", async function () {
            expect(await myToken.symbol()).to.equal("VDEV");
        });

        it("Should set the correct decimals", async function () {
            expect(await myToken.decimals()).to.equal(18);
        });
    });

    describe("Transactions", function () {
        it("Should transfer tokens between accounts", async function () {
            const transferAmount = BigInt(100);
            const ownerAddress = await owner.getAddress();
            const addr1Address = await addr1.getAddress();
            // const amountBeforeTrasfer = await myToken.balaceOf(ownerAddress);

            // Transfer tokens
            await (myToken as any).transfer(addr1Address, transferAmount);

            // Check balances
            expect(await myToken.balaceOf(ownerAddress)).to.equal(
                (await myToken.totalSuppy()) - transferAmount
            );
            expect(await myToken.balaceOf(addr1Address)).to.equal(transferAmount);
        });

        it("Should fail if sender doesn't have enough tokens", async function () {
            const ownerAddress = await owner.getAddress();

            // Try to send more than the owner has
            await expect(
                (myToken.connect(addr1) as any).transfer(ownerAddress, 1)
            ).to.be.revertedWith("Not enought tokens");
        });

        it("Should update balances after transfers", async function () {
            const addr1Address = await addr1.getAddress();
            const addr2Address = await addr2.getAddress();

            const transfer1Amount = 100;
            const transfer2Amount = 50;

            // First transfer
            await (myToken as any).transfer(addr1Address, transfer1Amount);
            // Second transfer
            await (myToken.connect(addr1) as any).transfer(addr2Address, transfer2Amount);

            // Check final balances
            expect(await myToken.balaceOf(addr1Address)).to.equal(
                transfer1Amount - transfer2Amount
            );
            expect(await myToken.balaceOf(addr2Address)).to.equal(transfer2Amount);
        });
    });
});
