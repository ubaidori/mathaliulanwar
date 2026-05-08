<x-layouts.public>

    <iframe
    src="{{ asset('virtual-tour/index.htm') }}"
    class="w-full h-full border-0"
    allowfullscreen
    allow="fullscreen; gyroscope; accelerometer">
</iframe>

    @push('scripts')
        <script>
            // Pastikan iframe sudah dimuat sebelum mencoba mengaksesnya
            const iframe = document.querySelector('iframe');
            iframe.onload = function() {
                const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

                // Coba akses elemen di dalam iframe untuk memastikan kita bisa berinteraksi dengannya
                try {
                    const someElement = iframeDocument.querySelector('.some-element'); // Ganti dengan selector yang sesuai
                    console.log('Berhasil mengakses elemen di dalam iframe:', someElement);
                } catch (error) {
                    console.error('Gagal mengakses elemen di dalam iframe:', error);
                }
            }
        </script>
                
</x-layouts.public>
