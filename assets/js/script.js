   // JavaScript para controlar el acordeón
   document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const accordionItem = header.parentElement
      accordionItem.classList.toggle('open')
    })
  })
  function filterAccordion() {
    const input = document.getElementById('searchInput').value.toLowerCase()
    const items = document.querySelectorAll('.accordion-item')

    items.forEach(item => {
      const title = item
        .querySelector('.accordion-header')
        .textContent.toLowerCase()
      const body = item
        .querySelector('.accordion-content')
        .textContent.toLowerCase()

      if (title.includes(input) || body.includes(input)) {
        item.style.display = '' // Muestra el elemento si coincide
      } else {
        item.style.display = 'none' // Oculta el elemento si no coincide
      }
    })
  }