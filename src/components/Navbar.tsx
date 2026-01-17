import { IconMenu2 as Menu, IconX as Close } from '@tabler/icons-solidjs';
import { createSignal, For } from "solid-js";

interface Props {
    sections: {id: number, label: string}[],
}

export default function Navbar(props: Props) {
    const { sections } = props;
    const [open, setOpen] = createSignal(false);

    return (
        <>
            <div class="fixed top-5 right-5 p-1.5 border rounded-sm bg-white/40 backdrop-blur-xs shadow active:scale-95 transition-[scale]" onClick={()=> setOpen(true)}>
                <Menu stroke={"2"}/>
            </div>

            <nav classList={{
                "py-5 fixed left-0 w-screen h-screen bg-white/60 backdrop-blur-xs flex flex-col gap-8 transition-[top]": true,
                "top-0": open(),
                "-top-full": !open()
            }}>
                <div class="self-end mr-5 p-1.5 border rounded-sm bg-white/40 backdrop-blur-xs shadow active:scale-95 transition-[scale]" onClick={()=> setOpen(false)}>
                    <Close stroke={"2"}/>
                </div>

                <div>
                    <h3 class="text-3xl text-center">Secciones</h3>

                    <ul class="pt-5 flex flex-col items-center gap-5">
                        <For each={sections}>
                            {({id, label})=> (
                                <li>
                                    <a href={'#section-' + id} class="text-2xl font-[Sacramento]">{label}</a>
                                </li>
                            )}
                        </For>
                    </ul>
                </div>

                <div>
                    <h3 class="text-3xl text-center">Redes</h3>
                </div>

                <div>
                    <h3 class="text-3xl text-center">Contactos</h3>
                </div>
            </nav>
        </>
    );
}