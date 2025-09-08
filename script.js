 let dialogIds = [
    'Dialog_rio_img',
    'Dialog_dune_img',
    'Dialog_Algarve',
    'Dialog_Piedade',
    'Dialog_Yucatán',
    'Dialog_Maui',
    'Dialog_greece',
    'Dialog_Votsalo',
    'Dialog_Beach',
    'Dialog_Bali',
    'Dialog_Cave',
    'Dialog_Shellfish'
  ];


function openDialog(dialogId) {
    const dialog = document.getElementById(dialogId);
    if (dialog) dialog.showModal();
}

function closeDialog(dialogId) {
    const dialog = document.getElementById(dialogId);
    if (dialog) dialog.close();
}

function showNext(currentId) {
    const currentIndex = dialogIds.indexOf(currentId);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % dialogIds.length;
    closeDialog(currentId);
    openDialog(dialogIds[nextIndex]);
  }

  function showPrevious(currentId) {
    const currentIndex = dialogIds.indexOf(currentId);
    if (currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + dialogIds.length) % dialogIds.length;
    closeDialog(currentId);
    openDialog(dialogIds[prevIndex]);
  }
