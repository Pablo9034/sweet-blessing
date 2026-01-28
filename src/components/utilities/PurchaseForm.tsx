import { For } from 'solid-js';
import InputAdditions from './InputAdditions.tsx';
import InputBuy from './InputBuy.tsx';

interface InfoCake {
    size: {label: string | string[], height: number | number[], width: number | number[]};
    serves: string;
    filling: string[];
    additions: {label: string, price: number}[];
}

export default function PurchaseForm(props: {info: string}) {
    const info = JSON.parse(props.info) as InfoCake;
    const {size, serves, filling, additions} = info;

    return (
        <form onSubmit={(e)=> e.preventDefault()} class="flex flex-col">
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

            <InputAdditions additions={additions}/>

            <InputBuy/>
        </form>
    );
}