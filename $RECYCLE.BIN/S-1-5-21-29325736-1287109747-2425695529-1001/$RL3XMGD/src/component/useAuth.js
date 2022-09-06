import React from 'react'

export const useAuth = () => {
    const TransferOwnerPostEvent = async() => {
        const data = {
          functionName: "transferOwnership",
          transactionHash:
            "0xdf352faa19ebdea3cf2da17fe1131d3f33f4747e5ec208999c11f601d4503ba7",
          chainId: "97",
        };
        const url =
          "https://staking-app-backend-deploy.herokuapp.com/events/transfer-ownership";
        
         try{
            const response = await fetch(url, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              });
              console.log("response.status:", response.status);
              console.log(response);
              if (response.state == 200) {
                alert("success");
              }
         } catch (err){
            console.log(err);
         }
   
      };
}


