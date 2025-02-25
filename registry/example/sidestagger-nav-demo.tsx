import { SideStaggerNav } from "@/registry/pioneerui/sidestagger-nav";


export default function SideStaggerNavDemo(){
    return (
        <SideStaggerNav items={[
        {name: "Home", href: "#"},
        {name: "About", href: "#"},
        {name: "Contact", href: "#"},
        {name: "Blog", href: "#"},
        ]} />
    )
    }


    