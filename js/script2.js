
const pagos = document.getElementById("continuar")
pagos.addEventListener("click", function () {
    window.localStorage.setItem('pago', 12343)
  })

  const tomaPago = localStorage.getItem("pagado")
  const pagado = () => {
    if(tomaPago === "pago"){

      location.href = "https://www.paramountplus.com/"
    }
  }
 

