document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('appointmentForm');
    const modal = document.getElementById('appointmentModal');
    const closeBtn = document.querySelector('.close-btn');
    const okBtn = document.getElementById('okBtn');

    // Show modal after form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission to backend
        modal.style.display = 'flex'; // Show modal
    });

    // Close modal and clear form when clicking on "OK" button
    okBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        form.reset(); // Clear the form
    });

    // Close modal when clicking on close button
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});


