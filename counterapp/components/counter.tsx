import { TransactionButton, useReadContract } from "thirdweb/react";
import { contract } from "../utils/constants";
import { prepareContractCall } from "thirdweb";

const Counter : React.FC =() =>{
    const {data:count , isLoading: loadingCount, refetch} = useReadContract({
        contract: contract,
        method: "getCount"
    });
    return (
        <div style={{marginTop: "20px"}}>
            <h1>counter</h1>
            {loadingCount ? (
                <h2>....</h2>
            ) :(
                <h2>{count?.toString()}</h2>
            )}
            <div>
                <TransactionButton
                transaction={() => prepareContractCall({
                    contract: contract,
                    method:"decrement"
                })}
                onTransactionSent={()=>console.log("decrementing...")}
                onTransactionConfirmed={()=> refetch() }
                >-</TransactionButton>
                <TransactionButton
                transaction={() => prepareContractCall({
                    contract: contract,
                    method:"increment"
                })}
                onTransactionSent={()=>console.log("incrementing...")}
                onTransactionConfirmed={()=> refetch() }
                >+</TransactionButton>
            </div>
        </div>
    )
};

export default Counter;