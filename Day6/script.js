document.addEventListener('DOMContentLoaded', function() {
    const billAmountInput = document.getElementById('billAmount');
    const tipPercentageInput = document.getElementById('tipPercentage');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultsDiv = document.getElementById('results');
    const billText = document.getElementById('billText');
    const tipText = document.getElementById('tipText');
    const totalText = document.getElementById('totalText');
    
    calculateBtn.addEventListener('click', calculateTip);
    
    // Also calculate when pressing Enter in input fields
    billAmountInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') calculateTip();
    });
    
    tipPercentageInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') calculateTip();
    });
    
    function calculateTip() {
        // Get input values
        const billAmount = parseFloat(billAmountInput.value) || 0;
        const tipPercentage = parseFloat(tipPercentageInput.value) || 0;
        
        // Calculate tip and total
        const tipAmount = billAmount * (tipPercentage / 100);
        const totalAmount = billAmount + tipAmount;
        
        // Format currency
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        });
        
        // Update results
        billText.textContent = formatter.format(billAmount);
        tipText.textContent = formatter.format(tipAmount);
        totalText.textContent = formatter.format(totalAmount);
        
        // Show results
        resultsDiv.classList.add('show');
    }
});