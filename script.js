const burger = document.getElementById('burger');
const nav = document.getElementById('header_menu');

burger?.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('show');
});

const gallery = document.getElementById('gallery');
const dialogContainer = document.getElementById('dialogContainer');
const dialogIds = [];

const images = [
    {
        id: 'Dialog_rio_img',
        src: './img/rio.jpg',
        alt: 'Rio de Janeiro Copacabana Beach, Brazil',
        title: 'Rio de Janeiro, Brazil',
        description: `This image shows the world-famous Copacabana Beach in Rio de Janeiro, Brazil, at sunset.
        The beach is known for its lively atmosphere and breathtaking views of the Atlantic Ocean and Sugarloaf Mountain.
        Copacabana is a popular spot for locals and tourists to exercise, relax, and soak up the sun.`
    },
    {
        id: 'Dialog_dune_img',
        src: './img/dune-brazil.jpg',
        alt: 'Lencois Maranheces, Brazil',
        title: 'Lencois Maranhences, Brazil',
        description: `The image shows an extensive dune area on the coast of Maranhão.
        The park is called the "Bedsheets of Maranhão" because the white dunes resemble spread-out bedsheets.`
    },
    {
        id: 'Dialog_Algarve',
        src: './img/bluesea-stones.jpg',
        alt: 'Algarve, Portugal',
        title: 'Algarve, Portugal',
        description: `The image shows a coastal landscape with striking rock formations in the sea and on the coast. 
        These are typical features of the beaches of the Algarve in Portugal, especially in the region around Albufeira.`

    },
    {
        id: 'Dialog_Piedade',
        src: './img/bluesea-stones2.jpg',
        alt: 'Ponta da Piedade, Portugal',
        title: 'Ponta da Piedade, Portugal',
        description: `The pictured subject is the Ponta da Piedade in Lagos, Portugal. 
        The Ponta da Piedade is known for its natural arches and rock formations, which have  been created by erosion over thousands of years.`
    },

    {
        id: 'Dialog_Yucatán',
        src: './img/mexico.jpg',
        alt: 'Yucatán, Mexico',
        title: 'Yucatán, Mexico',
        description: ` Cancún is a popular tourist city on the northeast coast of Mexico's Yucatán Peninsula,
                        located on the Caribbean Sea. The city is famous for its miles of white sandy beaches and crystal-clear waters, as seen in this picture.`
    },

    {
        id: 'Dialog_Maui',
        src: './img/beach-stones.jpg',
        alt: 'Maui, Hawaii',
        title: 'Maui, Hawaii',
        description: `Maui, also known as "The Magic Isle," is famous for its fine sandy beaches and
                                picturesque coastlines, which reflect the scene in the picture.
                                The combination of palm trees, volcanic rock on the coast, and the Pacific Ocean is typical of the Hawaiian Islands.`
    },

    {
        id: 'Dialog_greece',
        src: './img/beach-greece.jpg',
        alt: 'Navagio Bay, Greece',
        title: 'Navagio Bay, Greece',
        description: `The picture shows Navagio Bay on the Greek island of Zakynthos.
                                The bay is famous for its shipwreck, which has been there since 1980 and gave the beach
                                its
                                name
                                (Navagio means shipwreck in Greek).`
    },

    {
        id: 'Dialog_Votsalo',
        src: './img/tavern.jpg',
        alt: 'Petra Votsalo, Greece',
        title: 'Petra Votsalo, Greece',
        description: `The picture shows the tavern "Petra Votsalo" in Kato Zakros, Crete, Greece.
                                It's a seafront restaurant serving traditional Greek cuisine and is known for its
                                location
                                and
                                views.`
    },

    {
        id: 'Dialog_Beach',
        src: './img/beach.jpg',
        alt: 'Sandy beach with three palm trees',
        title: 'Sandy beach',
        description: `The image shows a wide, sandy beach with three palm trees.
                                In the center of the beach is a small, red lifeguard station.
                                In the background, the sea can be seen under a colorful sky dominated by shades of pink
                                and
                                orange.`
    },

    {
        id: 'Dialog_Bali',
        src: './img/bali.jpg',
        alt: 'Bali, Indonesia',
        title: 'Bali, Indonesia',
        description: `The image shows a picturesque sunset scene on Bali, a popular Indonesian island.
                                The scene conveys the impression of a tropical paradise, typical of Bali, known for its
                                beaches,
                                culture, and nature.`
    },

    {
        id: 'Dialog_Cave',
        src: './img/beach-cave.jpg',
        alt: 'Sea cave',
        title: 'Sea cave',
        description: `The image shows a fascinating sea cave opening onto a sandy beach and the open
                                sea. The interior of the cave consists of rugged, rocky walls that form a natural arch through which the bright blue seawater and sky can be seen. The transition from the cave to the beach is  seamless,  with light-colored sand merging gently into the turquoise water.`
    },

    {
        id: 'Dialog_Shellfish',
        src: './img/shellfish.jpg',
        alt: 'Shells and sea snails',
        title: 'Shells and sea snails',
        description: `The picture shows a collection of shells and sea snails on the beach.`
    }
];

function addScrollLock() {
    document.body.classList.add('no-scroll');
    document.documentElement.classList.add('no-scroll');
}

function removeScrollLock() {
    document.body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll');
}

function createDialogHTML(img) {
    return `
        <dialog id="${img.id}" aria-labelledby="dialogTitle_${img.id}" aria-describedby="desc_${img.id}">
            <div class="dialog-content">
                <header class="dialog_header">
                    <h2 id="dialogTitle_${img.id}">${img.title}</h2>
                </header>
                <main>
                    <figure>
                        <img class="dialog_img" src="${img.src}" alt="${img.alt}">
                        <figcaption id="desc_${img.id}">${img.description}</figcaption>
                    </figure>
                </main>
                <footer>
                    <button tabindex="0" aria-label="Back" onclick="showNext('${img.id}', 'prev')">&lt;</button>
                    <button tabindex="0" onclick="closeDialog('${img.id}')" aria-label="Close Dialog">Close</button>
                    <button tabindex="0" aria-label="Next" onclick="showNext('${img.id}', 'next')">&gt;</button>
                </footer>
            </div>
        </dialog>
    `;
}

function createGallery() {
    images.forEach((img) => {
        dialogIds.push(img.id);

        const imageElement = document.createElement('img');
        imageElement.src = img.src;
        imageElement.alt = img.alt;
        imageElement.classList.add('main_img');
        imageElement.onclick = () => openDialog(img.id);
        gallery.appendChild(imageElement);

        const dialogHTML = createDialogHTML(img);
        dialogContainer.innerHTML += dialogHTML;
    });
}

function openDialog(dialogId) {
    const dialog = document.getElementById(dialogId);
    if (!dialog) return;
    dialog.showModal();
    addScrollLock();
    dialog.addEventListener('click', () => dialog.close(), { once: true });
    dialog.getElementsByClassName('dialog-content')[0]?.addEventListener('click', event => event.stopPropagation());
    dialog.addEventListener('close', removeScrollLock, { once: true });
}

function closeDialog(dialogId) {
    const dialog = document.getElementById(dialogId);
    if (dialog) {
        dialog.removeEventListener('close', removeScrollLock);
        dialog.close();
    }
}

function showNext(currentId, direction) {
    const currentIndex = dialogIds.indexOf(currentId);
    if (currentIndex === -1) return;
    let newIndex;
    if (direction === 'next') {
        newIndex = (currentIndex + 1) % dialogIds.length;
    } else {
        newIndex = (currentIndex - 1 + dialogIds.length) % dialogIds.length;
    }
    closeDialog(currentId);
    openDialog(dialogIds[newIndex]);
}

createGallery();










