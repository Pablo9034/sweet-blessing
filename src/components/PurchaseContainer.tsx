import PurchaseProvider from "./context/PurchaseContext.tsx";
import PurchaseForm from "./utilities/PurchaseForm.tsx";

export default function PurchaseContainer(props: {info: string, price: number}) {
    const {info, price} = props;

    return (
        <PurchaseProvider price={price}>
            <PurchaseForm info={info} />
        </PurchaseProvider>
    );
}