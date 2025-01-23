import { useState } from "react";
import Nav from "./Nav";
import About from "./contents/About";

export default function SectionMain() {
  const [activePage, setActivePage] = useState("about");

    return (
        <section className="lg:relative lg:w-max lg:m-auto xl:min-w-[75%] xl:m-0 xl:w-[75%]">
            <Nav activePage={activePage} setActivePage={setActivePage} />

        <About />
        </section>
    )
}
