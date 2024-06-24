document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Validate form fields (you can add more validation as needed)
        const name = contactForm.elements['name'].value.trim();
        const email = contactForm.elements['email'].value.trim();
        const message = contactForm.elements['message'].value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Optionally, you can perform additional validation for the email format

        // Prepare data to be sent (you may need to adjust this based on your backend setup)
        const formData = {
            name: name,
            email: email,
            message: message
        };

        // Simulate sending message (replace with your actual backend or email sending logic)
        // Here's an example using fetch to post data to a server endpoint
        fetch('https://api.example.com/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle success response (e.g., show success message to user)
            alert('Message sent successfully!');
            contactForm.reset(); // Clear form inputs after successful submission
        })
        .catch(error => {
            // Handle error (e.g., show error message to user)
            alert('There was a problem sending your message. Please try again later.');
            console.error('Error:', error);
        });
    });
});
