<head>
    <title>Photography</title>
</head>

<main class="min-h-screen bg-app p-8 text-app-text">

    <div class="p-10 text-center">
        <p class="mb-3 text-2xl text-app-text font-bold">Fotografie</p>
        <p class="mb-3 text-body">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
        <p class="text-body">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="grid gap-4">
            <div>
                <img class="gallery-image h-auto max-w-full rounded-base cursor-pointer hover:opacity-90 transition"
                    src="/photography/img5.jpg" alt="">
            </div>
            <div>
                <img class="gallery-image h-auto max-w-full rounded-base cursor-pointer hover:opacity-90 transition"
                    src="/photography/img23.jpg" alt="">
            </div>
            <div>
                <img class="gallery-image h-auto max-w-full rounded-base cursor-pointer hover:opacity-90 transition"
                    src="/photography/img26.jpg" alt="">
            </div>
        </div>

        <div class="grid gap-1">
            <div>
                <img class="gallery-image h-auto max-w-full rounded-base cursor-pointer hover:opacity-90 transition"
                    src="/photography/img12.jpg" alt="">
            </div>
            <div>
                <img class="gallery-image h-auto max-w-full rounded-base cursor-pointer hover:opacity-90 transition"
                    src="/photography/img10.jpg" alt="">
            </div>
            <div>
                <img class="gallery-image h-auto max-w-full rounded-base cursor-pointer hover:opacity-90 transition"
                    src="/photography/img8.jpg" alt="">
            </div>
        </div>

        <div class="grid gap-4">
            <div>
                <img class="gallery-image h-auto max-w-full rounded-base cursor-pointer hover:opacity-90 transition"
                    src="/photography/img13.jpg" alt="">
            </div>
            <div>
                <img class="gallery-image h-auto max-w-full rounded-base cursor-pointer hover:opacity-90 transition"
                    src="/photography/img20.jpg" alt="">
            </div>
            <div>
                <img class="gallery-image h-auto max-w-full rounded-base cursor-pointer hover:opacity-90 transition"
                    src="/photography/img15.jpg" alt="">
            </div>
        </div>

        <div class="grid gap-4">
            <div>
                <img class="gallery-image h-auto max-w-full rounded-base cursor-pointer hover:opacity-90 transition"
                    src="/photography/img17.jpg" alt="">
            </div>
            <div>
                <img class="gallery-image h-auto max-w-full rounded-base cursor-pointer hover:opacity-90 transition"
                    src="/photography/img1.jpg" alt="">
            </div>
            <div>
                <img class="gallery-image h-auto max-w-full rounded-base cursor-pointer hover:opacity-90 transition"
                    src="/photography/img21.jpg" alt="">
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div id="imageModal"
        class="hidden fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">

        <button id="closeModal"
            class="absolute top-5 right-5 text-white text-4xl font-bold hover:text-gray-300">
            &times;
        </button>

        <img id="modalImage"
            class="max-w-[90vw] max-h-[90vh] rounded-base shadow-xl"
            src=""
            alt="">
    </div>

</main>

<script src="/js/photo.js"></script>