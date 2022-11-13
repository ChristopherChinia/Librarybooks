import React from 'react'

const Header = () => {
  return (
    <header class="bg-blue-900 text-white sticky top-0 z-10">
<section class="max-w-4xl mx-auto p-4 flex justify-between items-center">
    <h1 class="text-3xl font-medium">
        <a href="#hero">📚 Library</a>
    </h1>
    <div>
        <button id="mobile-open-button" class="text-3xl sm:hidden focus:outline-none">
            &#9776;
        </button>
        <nav class="hidden sm:block space-x-8 text-xl" aria-label="main">
            <a href="#rockets" class="hover:opacity-90">Our Books</a>
            <a href="#testimonials" class="hover:opacity-90">Testimonials</a>
            <a href="#contact" class="hover:opacity-90">Login</a>
        </nav>
    </div>
</section>
</header>
  )
}

export default Header