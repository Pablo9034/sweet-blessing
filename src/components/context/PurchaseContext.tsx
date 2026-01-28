import { createContext, createSignal, useContext, type Accessor, type ParentProps, type Setter } from 'solid-js';

// Context
interface PurchaseContextType {
    total: Accessor<number>;
    setTotal: Setter<number>;
}

export const PurchaseContext = createContext<PurchaseContextType>();

// Provider
type PurchaseContextPorps = ParentProps<{
    price: number;
}>

export default function PurchaseProvider(props: PurchaseContextPorps) {
    const [total, setTotal] = createSignal(props.price);
    const value: PurchaseContextType = {total, setTotal};
    
    return (
        <PurchaseContext.Provider value={value}>
            {props.children}
        </PurchaseContext.Provider>
    );
}

// Hook
export function usePurchaseContext() {
    const context = useContext(PurchaseContext);

    if (!context) {
        throw new Error('usePurchaseContext must be used within a PurchaseProvider');
    }

    return context;
}