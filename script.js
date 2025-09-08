const dialogRef = document.getElementById("Dialog_rio_img");


function openDialog(dialogId) {
    const dialog = document.getElementById(dialogId);
    if (dialog) dialog.showModal();
}

function closeDialog(dialogId) {
    const dialog = document.getElementById(dialogId);
    if (dialog) dialog.close();
}
