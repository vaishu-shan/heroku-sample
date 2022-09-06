import React from 'react';
import FarmingStats from '../../components/farmingStats';
import StakingFarm from '../../components/stakingFarm';

function FarmPage(props) {
    return (
        <div>
            <StakingFarm/>
            <FarmingStats/>
        </div>
    );
}

export default FarmPage;