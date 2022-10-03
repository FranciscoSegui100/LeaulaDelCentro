
const pagos = document.querySelector("#continuar")
const agradecimiento = document.querySelector("#agradecimiento")
const info = document.querySelector("#info")
pagos.addEventListener("click", function () {
    window.localStorage.setItem('pago', 2)
  })
const boton = document.getElementById("boton1")

  const tomarPago = localStorage.getItem("pago")

  const pagado = () => {
    if(tomarPago === "2"){
      pagos.innerHTML = " "
      info.innerHTML = " "
      agradecimiento.innerHTML = "<h2 id=pago>Muchas Gracias por tu colaboración!</h2>"
    }
  }
  if(tomarPago === "2"){
    pagos.innerHTML = " "
    info.innerHTML = " "
    agradecimiento.innerHTML = "<h2 id=pago>Muchas Gracias por tu colaboración!</h2>"
  }
 const botonPagar = document.querySelector(".botonPago")

 botonPagar.addEventListener("click", () => {

  pagado()
  
 })

