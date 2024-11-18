<template>
    <div class="booking-form">
        <h2>Booking Form</h2>
        <form @submit.prevent="submitBooking">
            <div class="form-group">
                <label>Full Name</label>
                <input v-model="booking.fullName" type="text" required>
            </div>

            <div class="form-group">
                <label>Book Name</label>
                <input v-model="booking.phone" type="tel" required>
            </div>

            <div class="form-group">
                <label>Email</label>
                <input v-model="booking.email" type="email" required>
            </div>

            <div class="form-group">
                <label>Phone</label>
                <input v-model="booking.phone" type="tel" required>
            </div>

            <div class="form-group">
                <label>Collection Date</label>
                <input v-model="booking.collectionDate" type="date" required>
            </div>

            <div class="form-group">
                <label>Returning Date Date</label>
                <input v-model="booking.returningDate" type="date" required>
            </div>

            <div class="form-group">
                <label>Number of Books</label>
                <input v-model="booking.booksCount" type="number" min="1" required>
            </div>

            <div class="payment-choice">
                <h3>Payment Option</h3>
                <div>
                    <input type="radio" v-model="booking.paymentType" value="now" id="payNow">
                    <label for="payNow">Pay Now</label>
                </div>
                <div>
                    <input type="radio" v-model="booking.paymentType" value="later" id="payLater">
                    <label for="payLater">Pay Later</label>
                </div>
            </div>

            <div v-if="booking.paymentType === 'now'" class="credit-card-details">
                <h3>Credit Card Details</h3>
                <div class="form-group">
                    <label>Card Number</label>
                    <input v-model="payment.cardNumber" type="text" pattern="\d{16}" placeholder="1234 5678 9012 3456"
                        required>
                </div>
                <div class="form-group">
                    <label>Expiry Date</label>
                    <input v-model="payment.expiryDate" type="text" pattern="\d{2}/\d{2}" placeholder="MM/YY" required>
                </div>
                <div class="form-group">
                    <label>CVV</label>
                    <input v-model="payment.cvv" type="text" pattern="\d{3}" placeholder="123" required>
                </div>
            </div>

            <button type="submit" class="submit-btn" @click="submitPaylater">Complete Booking</button>
        </form>
    </div>
</template>

<script setup lang="js">
import { ref } from 'vue'
import { useRouter } from 'vue-router'




const router = useRouter()
const booking = ref({
    fullName: '',
    bookName: '',
    email: '',
    phone: '',
    collectionDate: '',
    returningDate: '',
    booksCount: 1,
    paymentType: 'now',
    timestamp: ''
})

const payment = ref({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
})

const submitBooking = async () => {
    try {
        booking.value.timestamp = new Date().toISOString()
        // Save booking to books file
        const bookingData = {
            ...booking.value,
            paymentDetails: booking.value.paymentType === 'now' ? payment.value : null
        }
        // Here you would typically make an API call to save the booking
        console.log('Booking saved:', bookingData)
        // Log the booking
        console.log('Booking logged at:', booking.value.timestamp)
        // Redirect to confirmation page
        // router.push('/booking-confirmation')
        alert('Booking confirmed!')
    }
    catch (error) {
        console.error('Error saving booking:', error)
    }
}

const submitPaylater = async () => {
    try {
        booking.value.timestamp = new Date().toISOString()
        // Save booking to books file
        const bookingData = {
            ...booking.value,
            paymentDetails: booking.value.paymentType === 'now' ? payment.value : null
        }
        // Here you would typically make an API call to save the booking
        console.log('Booking saved:', bookingData)
        // Log the booking
        console.log('Booking logged at:', booking.value.timestamp)
        // Redirect to confirmation page
        router.push('/booking-confirmation')
        // Redirect to confirmation page
        router.push('/booking-confirmation')
    }
    catch (error) {
        console.error('Error saving booking:', error)
    }
}

</script>

<style scoped>
.booking-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.payment-choice {
    margin: 20px 0;
}

.credit-card-details {
    margin-top: 20px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.submit-btn {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.submit-btn:hover {
    background-color: #45a049;
}
</style>
