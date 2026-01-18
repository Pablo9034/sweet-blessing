import { createSignal, For } from 'solid-js';

const categories = [
    {id: 1, label: 'redondos'},
	{id: 2, label: '2 pisos'},
	{id: 3, label: 'cuadrados'},
	{id: 4, label: '3 leches'},
	{id: 5, label: 'Bufet'}
];

export default function NavBar() {
    const [scrollX, setScrollX] = createSignal(0);
    const [currentSection, setCurrentSection] = createSignal(Number(window.location.pathname.split('/').at(-1)));

    return (
        <nav class={'sticky top-0'}>
            <ul onScroll={(e)=> setScrollX(e.target.scrollLeft)}  class={'flex flex-nowrap gap-3 overflow-x-scroll'}>
                <For each={categories}>
                    {({id, label})=> (
                        <li class={'py-3 grow'}>
                            <a href={String(id)} title={'Seccion #: ' + id} onClick={()=> setCurrentSection(id)}>
                                <span class={'uppercase text-nowrap'}>{label}</span>
                                <hr classList={{
                                    'border-t-2': true,
                                    'border-rose-400': currentSection() === id,
                                    'border-transparent': currentSection() !== id
                                }}/>
                            </a>
                        </li>
                    )}
                </For>
            </ul>
        </nav>
    );
}