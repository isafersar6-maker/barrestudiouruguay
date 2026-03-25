// app.js

import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://ulclddszntmzkrxdzewl.supabase.co';
const supabaseKey = 'sb_publishable_9XD6bxkf-Dp9H7DUkLFwNQ_mAqUtm8W';
const supabase = createClient(supabaseUrl, supabaseKey);

// Function to handle form submission
async function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const bookingData = Object.fromEntries(formData);

    // Insert booking data into the submissions table
    const { data, error } = await supabase
        .from('submissions')
        .insert([bookingData]);

    // Provide feedback to user
    if (error) {
        alert('Error submitting the form: ' + error.message);
    } else {
        alert('Booking submitted successfully!');
    }
}

// Attach event listener to form
const form = document.getElementById('booking-form');
if (form) {
    form.addEventListener('submit', handleFormSubmit);
}