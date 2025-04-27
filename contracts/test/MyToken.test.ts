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
        await myToken.deployed();
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

        it("Should assign the total supply of tokens to the owner", async function () {
            const ownerBalance = await myToken.balaceOf(await owner.getAddress());
            expect(await myToken.totalSuppy()).to.equal(ownerBalance);
        });
    });

    describe("Transactions", function () {
        it("Should transfer tokens between accounts", async function () {
            const transferAmount = 100;
            const ownerAddress = await owner.getAddress();
            const addr1Address = await addr1.getAddress();

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
            const addr1Address = await addr1.getAddress();
            const initialOwnerBalance = await myToken.balaceOf(ownerAddress);

            // Try to send more than the owner has
            await expect(
                (myToken.connect(addr1) as any).transfer(ownerAddress, 1)
            ).to.be.revertedWith("Not enought tokens");
        });

        it("Should update balances after transfers", async function () {
            const ownerAddress = await owner.getAddress();
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

    describe("Allowances", function () {
        it("Should approve tokens for delegated transfer", async function () {
            const ownerAddress = await owner.getAddress();
            const addr1Address = await addr1.getAddress();
            const approveAmount = 100;

            await (myToken as any).approve(addr1Address, approveAmount);
            expect(await myToken.allowance(ownerAddress, addr1Address)).to.equal(
                approveAmount
            );
        });

        it("Should transfer tokens with transferFrom", async function () {
            const ownerAddress = await owner.getAddress();
            const addr1Address = await addr1.getAddress();
            const addr2Address = await addr2.getAddress();
            const approveAmount = 100;
            const transferAmount = 50;

            // Approve and transferFrom
            await (myToken as any).approve(addr1Address, approveAmount);
            await (myToken.connect(addr1) as any).transferFrom(ownerAddress, addr2Address, transferAmount);

            // Check balances and allowance
            expect(await myToken.balaceOf(addr2Address)).to.equal(transferAmount);
            expect(await myToken.allowance(ownerAddress, addr1Address)).to.equal(
                approveAmount - transferAmount
            );
        });

        it("Should fail transferFrom if allowance is too low", async function () {
            const ownerAddress = await owner.getAddress();
            const addr1Address = await addr1.getAddress();
            const addr2Address = await addr2.getAddress();
            const approveAmount = 100;
            const transferAmount = 150; // More than approved

            await (myToken as any).approve(addr1Address, approveAmount);
            await expect(
                (myToken.connect(addr1) as any).transferFrom(ownerAddress, addr2Address, transferAmount)
            ).to.be.revertedWith("Not enough allowance");
        });

        it("Should fail transferFrom if balance is too low", async function () {
            const ownerAddress = await owner.getAddress();
            const addr1Address = await addr1.getAddress();
            const addr2Address = await addr2.getAddress();
            const totalSupply = await myToken.totalSuppy();
            const transferAmount = totalSupply.add(1); // More than total supply

            await (myToken as any).approve(addr1Address, transferAmount);
            await expect(
                (myToken.connect(addr1) as any).transferFrom(ownerAddress, addr2Address, transferAmount)
            ).to.be.revertedWith("Not enough balance");
        });
    });
});
