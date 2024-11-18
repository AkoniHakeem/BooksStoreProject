<template>
    <div class="books-container">
        <h1 class="text-2xl font-bold mb-6">Books Collection</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="book in books" :key="book.id" class="book-card bg-white rounded-lg shadow-md p-4">
                <img :src="book.cover" :alt="book.title" class="w-full h-64 object-cover rounded-md mb-4">
                <h2 class="text-xl font-semibold mb-2">{{ book.title }}</h2>
                <p class="text-gray-600 mb-2">{{ book.author }}</p>
                <p class="text-sm text-gray-500 mb-4">{{ book.description }}</p>
                <div class="flex justify-between items-center">
                    <span class="text-primary font-bold">${{ book.price }}</span>
                    <button class="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { books } from '../models/Books.js'

</script>

<style scoped>
.books-container {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.book-card {
    transition: transform 0.2s ease-in-out;
}

.book-card:hover {
    transform: translateY(-5px);
}

@media (max-width: 768px) {
    .books-container {
        padding: 1rem;
    }
}
</style>
