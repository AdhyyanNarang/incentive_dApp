This is a deCentralized app to make the process of local crowdfunding to remove negative externalities in communities. 

For example, consider the scenario where there is a factory in a town that is constantly letting out sludge into the local river. The local residents are particularly perturbed by this issue so they decide to raise money to convince the factory owner to clean up the river and keep it clean. The smart contract can raise and store the bounty, and once the river has been cleaned (determined by a mutually agreed upon oracle) the bounty is stored to the address of the factory owner. 

A further complication arises if the factory owner cleans up the river, but then continues to release sludge into it. To overcome this problem, we only release a fraction of the bounty to the factory owner once the river has been cleaned and release the rest after the river remains clean for a specified amount of time.

While I explained the idea using a specific example, the contract can be useful for a variety of other scenarios: incentivizing a household in a neighborhood to stop making noise, incentivizing a local senator to restore the local garden etc. For this reason, the contract is embedded in a contract factory, which would allow any such contract to be created on demand. 
