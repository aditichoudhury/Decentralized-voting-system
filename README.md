The Decentralized Voting System using Ethereum Blockchain is a secure and transparent solution for conducting elections. Leveraging Ethereum's blockchain technology, this system ensures tamper-proof voting records, enabling users to cast their votes remotely while maintaining anonymity and preventing fraud. Explore this innovative project for trustworthy and decentralized voting processes.
For a cool demo of this project watch this YouTube video.
For more details checkout Project Report.
PS: This project is not maintained anymore.
Features
Implements JWT for secure voter authentication and authorization.
Utilizes Ethereum blockchain for tamper-proof and transparent voting records.
Removes the need for intermediaries, ensuring a trustless voting process.
Admin panel to manage candidates, set voting dates, and monitor results.
Intuitive UI for voters to cast votes and view candidate information.
Requirements
Node.js (version – 18.14.0)
Metamask
Python (version – 3.9)
FastAPI
MySQL Database (port – 3306)
Installation
Open a terminal.

Clone the repository

Create a workspace named developement, in the truffle projects section add truffle-config.js by clicking ADD PROJECT button.

Download Metamask extension for the browser.

Now create wallet (if you don't have one), then import accounts from ganache.

Add network to the metamask. ( Network name - Localhost 7575, RPC URl - http://localhost:7545, Chain ID - 1337, Currency symbol - ETH)

Open MySQL and create database named voter_db. (DON'T USE XAMPP)

In the database created, create new table named voters in the given format and add some values.

    CREATE TABLE voters (
    voter_id VARCHAR(36) PRIMARY KEY NOT NULL,
    role ENUM('admin', 'user') NOT NULL,
    password VARCHAR(255) NOT NULL
    );

 +--------------------------------------+-------+-----------+
 | voter_id                             | role  | password  |
 +--------------------------------------+-------+-----------+
 |                                      |       |           |
 +--------------------------------------+-------+-----------+
Install truffle globally

npm install -g truffle
Go to the root directory of repo and install node modules

npm install
Install python dependencies

pip install fastapi mysql-connector-python pydantic python-dotenv uvicorn uvicorn[standard] PyJWT
Usage
Note: Update the database credentials in the ./Database_API/.env file.
Open terminal at the project directory

Open Ganache and it's development workspace.

open terminal in project's root directory and run the command

 truffle console
then compile the smart contracts with command

 compile
exit the truffle console

Bundle app.js with browserify

 browserify ./src/js/app.js -o ./src/dist/app.bundle.js
Start the node server server

 node index.js
Navigate to Database_API folder in another terminal

 cd Database_API
then start the database server by following command

 uvicorn main:app --reload --host 127.0.0.1
In a new terminal migrate the truffle contract to local blockchain

 truffle migrate
You're all set! The Voting app should be up and running now at http://localhost:8080/.
For more info about usage checkout YouTube video.

Code Structure
├── blockchain-voting-dapp            # Root directory of the project.
    ├── build                         # Directory containing compiled contract artifacts.
    |   └── contracts                 
    |       ├── Migrations.json       
    |       └── Voting.json           
    ├── contracts                     # Directory containing smart contract source code.
    |   ├── 2_deploy_contracts.js     
    |   ├── Migrations.sol            
    |   └── Voting.sol                
    ├── Database_API                  # API code for database communication.
    |   └── main.py                   
    ├── migrations                    # Ethereum contract deployment scripts.
    |   └── 1_initial_migration.js    
    ├── node_modules                  # Node.js modules and dependencies.
    ├── public                        # Public assets like favicon.
    |   └── favicon.ico               
    ├── src                           
    |   ├── assets                    # Project images.
    |   |   └── eth5.jpg              
    |   ├── css                       # CSS stylesheets.
    |   |   ├── admin.css             
    |   |   ├── index.css             
    |   |   └── login.css             
    |   ├── dist                      # Compiled JavaScript bundles.
    |   |   ├── app.bundle.js         
    |   |   └── login.bundle.js       
    |   ├── html                      # HTML templates.
    |   |   ├── admin.html            
    |   |   ├── index.html            
    |   |   └── login.html            
    |   └── js                        # JavaScript logic files.
    |       ├── app.js                
    |       └── login.js              
    ├── index.js                      # Main entry point for Node.js application.
    ├── package.json                  # Node.js package configuration.
    ├── package-lock.json             # Lockfile for package dependencies.
    ├── README.md                     # Project documentation.
    └── truffle-config.js                    # Truffle configuration file.
