import { useState } from "react";

function NavBar() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav class="navbar bg-dark navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand texto" href="#">
            Particiones de Conjuntos
          </a>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
