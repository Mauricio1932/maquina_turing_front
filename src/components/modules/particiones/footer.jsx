import '../../../assets/stylesheets/footer.css'

function Footer() {
    return (
        <footer class="pie-pagina">
            <div class="grupo-1">
                <div class="seccion">
                    <figure>
                        <a href="" class="seccion">
                            {/* <img src={logo} class="logo"></img> */}
                        </a>
                    </figure>
                </div>
                <div class="seccion">
                    <h2 class="title-2">SOBRE NOSOTROS</h2>
                    <p class="text text-capitalize">Programa elaborado por mauricio alejandro ocampo lopez && luis daniel cruz gome, alumnos del septimo cuatrimestre de
                        la carrera de Ingenieria en Desarrollo de Software.
                    </p>
                    <p class="text">En esta sección el alumno podrá practicar de la teoria de conjuntos
                        con el subtema de particiones.</p>
                </div>

            </div>

            <div class="grupo-2">
                <small>&copy; 2022 <b>Universidad Politécnica de Chiapas</b> - Todos los derechos reservados.</small>
            </div>
        </footer>
    )
}

export default Footer