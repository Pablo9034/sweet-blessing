import { For, createSignal } from "solid-js";
import type { dynamicProperty } from "solid-js/web";


interface InfoCake {
    size: {label: string | string[], height: number | number[], width: number | number[]};
    serves: string;
    filling: string[];
    additions: {label: string, price: number}[];
}

export default function PurchaseForm(props: {info: string, price: number}) {
    const {price} = props;
    const info = JSON.parse(props.info) as InfoCake;
    const {size, serves, filling, additions} = info;

    const [showAllAdditions, setShowAllAdditions] = createSignal(false);
    const [totalPrice, setTotalPrice] = createSignal(price);

    return (
        <>
            <span class="px-2 py-2 fixed top-3 right-3 bg-white/40 backdrop-blur-xs rounded-xl shadow z-50">CUP: <span class="font-bold">{totalPrice()}</span></span>

            <form class="flex flex-col">
                <fieldset class="mb-5 flex flex-col gap-3 border-t border-rose-200">
                    <legend class="mb-5">
                        <h2 class="text-xl font-bold text-rose-400">Escoje el Relleno</h2>
                        <span class="uppercase text-sm italic text-neutral-700">Selecciona una opción</span>
                    </legend>

                    <For each={filling}>
                        {(value, index)=> (
                            <label class="py-3 px-3 inline-flex gap-2 bg-rose-200/40 border-2 rounded-xl border-rose-200">
                                <input type="radio" name="filling" value={value} checked={index() === 0}/>
                                <span class="text-black">Relleno de {value}</span>
                            </label>
                        )}    
                    </For>
                </fieldset>

                <fieldset classList={{
                    "mb-5 flex flex-col gap-3 border-t border-rose-200 overflow-hidden transition": true,
                    "h-52": !showAllAdditions(),
                    }}>
                    <legend class="mb-5">
                        <h2 class="text-xl font-bold text-rose-400">Agregados</h2>
                        <span class="uppercase text-sm italic text-neutral-700">Seccion opcional</span>
                    </legend>

                    <For each={additions}>
                        {(value, index)=> (
                            <label class="py-3 px-3 inline-flex gap-2 bg-rose-200/40 border-2 rounded-xl border-rose-200">
                                <input type="checkbox" name="additions" value={value.label} onChange={(e)=> {
                                    if(e.target.checked) {
                                        return setTotalPrice(totalPrice() + value.price);
                                    }
                                    return setTotalPrice(totalPrice() - value.price);
                                }}/>
                                
                                <div class="inline-flex flex-col">
                                    <span class="text-black">{value.label}</span>
                                    <span class="text-sm">CUP <span class="font-bold">{value.price}</span></span>
                                </div>
                            </label>
                        )}    
                    </For>
                </fieldset>

                <button type="button" onClick={()=> setShowAllAdditions(!showAllAdditions())} class="self-center w-fit py-2 px-3 inline-flex gap-3 text-white bg-rose-400 rounded-xl shadow active:scale-95 transition-[scale]">Mostrar más</button>
            </form>
        </>
    );
}