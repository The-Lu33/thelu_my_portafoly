import { useState } from "react";
import Nav from "./Nav";
import About from "./contents/About";
import Resumen from "./contents/Resume";

export default function SectionMain() {
  const [activePage, setActivePage] = useState("about");
    const pages =[ <About/>, <Resumen/>]
    return (
        <section className="pb-16 lg:relative lg:w-max lg:m-auto xl:min-w-[75%] xl:m-0 xl:w-[75%]">
            <Nav activePage={activePage} setActivePage={setActivePage} />

            {pages.find(page => {
                console.log(page.type.name)
                return page.type.name.toLowerCase() === activePage
            })}
        </section>
    )
}
