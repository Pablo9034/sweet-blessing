import { usePurchaseContext } from '@components/context/PurchaseContext.tsx';
import { IconShoppingCart } from '@tabler/icons-solidjs';

export default function InputBuy() {
    const {total} = usePurchaseContext();

    const handleClick = ()=> {
        alert("Funcionalidad no añadida.")
    }

    return (
        <div class="py-3 px-5 grid grid-cols-[auto_1fr] fixed bottom-0 left-0 w-full z-50 bg-white/40 backdrop-blur-xs shadow border-t border-rose-200 items-center">
            <div class="flex flex-col gap-1">
                <span class="uppercase text-sm text-neutral-700">Total estimado</span>
                <span class="font-bold text-rose-400 text-xl">{total()} CUP</span>
            </div>

            <div class="flex justify-end">
                <button class="w-fit py-2 px-3 inline-flex gap-3 text-white bg-rose-400 rounded-xl shadow active:scale-95 transition-[scale]" onClick={handleClick}>
                    <IconShoppingCart stroke="2"/>
                    Añadir al carrito
                </button>
            </div>
        </div>
    );
}