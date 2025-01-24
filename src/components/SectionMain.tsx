import { useState } from "react";
import Nav from "./Nav";
import About from "./contents/About";
import Resumen from "./contents/Resume";

export default function SectionMain() {
  const [activePage, setActivePage] = useState("about");
    const pages =[ {name:"about", page:<About/>}, {name:"resume", page:<Resumen/>}]
    return (
        <section className="pb-16 lg:relative lg:w-max lg:m-auto xl:min-w-[75%] xl:m-0 xl:w-[75%] overflow-hidden">
            <Nav activePage={activePage} setActivePage={setActivePage} />

            {pages.find(page => {
                return page.name.toLowerCase() === activePage
            })?.page}
        </section>
    )
}
