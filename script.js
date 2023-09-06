<!DOCTYPE html>
<html lang="es">
<head>
    <!-- Metadatos y enlaces a archivos CSS -->
</head>
<body>
    <div class="container">
        <!-- Barra lateral de navegación -->
        <nav class="sidebar">
            <!-- Contenido de la barra lateral -->
        </nav>
        <!-- Contenido principal -->
        <main class="content">
            <!-- Encabezado y secciones -->
        </main>
    </div>

    <!-- JavaScript para el menú de navegación -->
    <script>
        // Obtenemos elementos del DOM
        const sidebar = document.querySelector('.sidebar');
        const toggleMenuBtn = document.querySelector('.toggle-menu-btn');

        // Función para alternar la visibilidad de la barra lateral
        function toggleSidebar() {
            sidebar.classList.toggle('active');
        }

        // Event listener para el botón de menú
        toggleMenuBtn.addEventListener('click', toggleSidebar);
    </script>
</body>
</html>
