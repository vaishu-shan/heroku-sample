import React from "react";
import "../assets/css/style.css";

function FaqSection(props) {
  return (
    <div>
      <section className="recent-winners">
        <div class="container">
          <div className="section-heading">
            <div className="title">Frequently Asked Questions</div>
          </div>

          <details>
            <summary>What is TokensFarm?</summary>
            <p>
              TokensFarm is a platform for creating and hosting farming programs
              for a variety of crypto tokens. These Farms are looking to engage
              their communities, and provide secure off-the-shelf
              smart-contracts! As well as great design, easy use, compatible
              with the most popular wallets, and high trusted security.{" "}
            </p>
          </details>
          <details>
            <summary>What is a crypto farm (yield farming)</summary>
            <p>
              Yield farming is the practice of staking or lending crypto assets
              in order to generate high returns or rewards in the form of
              additional cryptocurrency. This innovative yet risky and volatile
              application of decentralized finance (DeFi), but skyrocketed in
              popularity recently thanks to further innovations like liquidity
              mining. Yield farming is currently the biggest growth driver of
              the still-nascent DeFi sector.{" "}
            </p>
          </details>
          <details>
            <summary>What Blockchains are supported?</summary>
            <p>
              Currently we support all the Ethereum virtual machine compatible
              blockchains such as BNB Chain, Polygon, Avalanche, Moon River,
              Hecko, Fantom, OkEx chain and more.{" "}
            </p>
          </details>
          <details>
            <summary>
              Is there a limit to the amount of people or tokens that can enter
              a farm?
            </summary>
            <p>
              There is no such limit. The contract can have as many participants
              and tokens as possible. The rewards are divided according to the
              relative holding of each participant out of the total tokens in
              the contract. The APY adjusts accordingly, as users adding or
              removing tokens from the contract.
            </p>
          </details>
        </div>
      </section>
      <section className='subscribe'>
            <div className='wrapper'>
            <div class="text">Subscribe to Staking App </div>
            <div class="form-container">
              <form><input type="text" name="email" placeholder="Email address" value=""/>
              <span class="input-splitter"></span>
              <button type="submit">Send</button></form>
            </div>
            </div>
          </section>
    </div>
  );
}

export default FaqSection;
