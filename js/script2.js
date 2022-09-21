
const pagos = document.querySelector("#continuar")
pagos.addEventListener("click", function () {
    window.localStorage.setItem('pago', 1)
  })
const boton = document.getElementById("boton1")

  const tomarPago = localStorage.getItem("pago")


  const pagado = () => {
    if(tomarPago === "1"){
      boton.innerHTML +=
      `<a href="./pages/inicio.html"><input class="boton1" type="button" value="Continuar Al Sitio"></a>`
      pagos.innerHTML = " "
    }
  }
  if(tomarPago === "1"){
    boton.innerHTML +=
    `<a href="./pages/inicio.html"><input class="boton1" type="button" value="Continuar Al Sitio"></a>`
    pagos.innerHTML = " "
  }
 const botonPagar = document.querySelector(".botonPago")

 botonPagar.addEventListener("click", () => {

  pagado()
  
 })

