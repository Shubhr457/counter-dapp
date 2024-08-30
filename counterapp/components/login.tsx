import { chain, client } from "../utils/constants";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
//import counter from "./counter";
import Counter from "./counter";

export const Login: React.FC =() =>{
    const account = useActiveAccount();
    return (
        <div style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            height:"100vh"
            }}>
            {account ? (<div>
                 <ConnectButton 
                 client={client}
                 chain={chain}
                 />
                 <Counter />
                 </div>
            ) : ( 
            <div>
                <ConnectButton 
                client={client}
                chain={chain}
                />
                </div>)}
        </div>
    )
};