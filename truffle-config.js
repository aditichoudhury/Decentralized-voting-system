module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
  },
  compilers: {
    solc: {
      version: "0.8.0", // Specify the desired Solidity version
      settings: {
        optimizer: {
          enabled: true, // Optional: Enable the optimizer
          runs: 200      // Optimize for how many times you intend to run the code
        },
      },
    },
  },
};
