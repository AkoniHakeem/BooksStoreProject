<template>
    <div class="book-detail-container">
        <div class="book-layout">
            <div class="book-image">
                <q-img :src="'images/' + book.image" :alt="book.title" spinner-color="primary"
                    style="height: 400px; width: 100%">
                    <template v-slot:error>
                        <div class="absolute-full flex flex-center text-subtitle1">
                            Image not available
                        </div>
                    </template>
                </q-img>
            </div>
            <div class="book-info">
                <h1>{{ book.title }}</h1>
                <div class="description">
                    {{ book.description }}
                </div>
                <div class="action-row">
                    <span class="price">${{ book.price }}</span>
                    <button class="book-now-btn" @click="bookNow">Book Now</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="js">
import { ref } from 'vue';
import { books } from '../models/Books';
import { useRouter } from 'vue-router';

const book = ref(books[1])

const router = useRouter()
const bookNow = () => {
    // Implement booking logic here
    console.log('Booking initiated for:', book.value.title)
    router.push('/' + book.value.id)
}
</script>

<style scoped>
.book-detail-container {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.book-layout {
    display: flex;
    gap: 2rem;
}

.book-image {
    flex: 0 0 40%;
}

.book-image img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.book-info {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.description {
    margin: 1.5rem 0;
    line-height: 1.6;
    color: #444;
}

.action-row {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: auto;
}

.price {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2c3e50;
}

.book-now-btn {
    padding: 0.75rem 1.5rem;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;
}

.book-now-btn:hover {
    background-color: #3aa876;
}
</style>
