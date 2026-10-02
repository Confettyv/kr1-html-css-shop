/* Минимальная логика открытия и закрытия модального окна.
   Остальное в проекте решено средствами HTML и CSS. */

document.addEventListener('DOMContentLoaded', function () {
  var modal = document.querySelector('.modal');

  if (!modal || typeof modal.showModal !== 'function') {
    return;
  }

  document.querySelectorAll('[data-modal-open]').forEach(function (button) {
    button.addEventListener('click', function () {
      modal.showModal();
    });
  });

  modal.querySelectorAll('[data-modal-close]').forEach(function (button) {
    button.addEventListener('click', function () {
      modal.close();
    });
  });

  /* Клик по затемнённой области за пределами окна тоже закрывает его. */
  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.close();
    }
  });
});
