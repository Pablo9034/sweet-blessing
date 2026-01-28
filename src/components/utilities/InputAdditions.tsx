import { createSignal, For } from 'solid-js';
import { usePurchaseContext } from '@components/context/PurchaseContext';

export default function InputAdditions(props: {additions: {label: string, price: number}[]}) {
    const {additions} = props;
    const {total, setTotal} = usePurchaseContext();
    const [showAllAdditions, setShowAllAdditions] = createSignal(false);

    return (
        <>
            <fieldset classList={{
                "mb-5 flex flex-col gap-3 border-t border-rose-200 overflow-hidden": true,
                "h-52": !showAllAdditions(),
            }} style={{ "interpolate-size": "allow-keywords" }}>
            <legend class="mb-5">
                <h2 class="text-xl font-bold text-rose-400">Agregados</h2>
                <span class="uppercase text-sm italic text-neutral-700">Seccion opcional</span>
            </legend>

                <For each={additions}>
                    {(value, index)=> (
                        <label class="py-3 px-3 inline-flex gap-2 bg-rose-200/40 border-2 rounded-xl border-rose-200">
                            <input type="checkbox" name="additions" value={value.label} onChange={(e)=> {
                                if(e.target.checked) {
                                    return setTotal(total() + value.price);
                                }
                                return setTotal(total() - value.price);
                            }}/>
                            
                            <div class="inline-flex flex-col">
                                <span class="text-black">{value.label}</span>
                                <span class="text-sm">CUP <span class="font-bold">{value.price}</span></span>
                            </div>
                        </label>
                    )}    
                </For>
            </fieldset>

            <button type="button" onClick={()=> setShowAllAdditions(!showAllAdditions())} class="self-center w-fit py-2 px-3 inline-flex gap-3 text-white bg-rose-400 rounded-xl shadow active:scale-95 transition-[scale]">Mostrar {showAllAdditions() ? "menos" : "más"}</button>
        </>
    );
}