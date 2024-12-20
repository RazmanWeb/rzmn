<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>eBay Calculator (MY)</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>eBay Calculator (MY)</h1>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg" alt="Flag of Malaysia" class="malaysia-flag">
        </div>
        <form id="calculator-form">
            <!-- Input Fields -->
            <label for="item-cost">Item Cost (MYR):</label>
            <input type="number" id="item-cost" placeholder="Enter item cost in MYR" required>

            <label for="shipping-cost">Shipping Cost (MYR):</label>
            <input type="number" id="shipping-cost" placeholder="Enter shipping cost in MYR" required>

            <label for="selling-price">Selling Price (USD):</label>
            <input type="number" id="selling-price" placeholder="Enter selling price in USD" required>

            <label for="shipping-charged">Shipping Charged (USD):</label>
            <input type="number" id="shipping-charged" placeholder="Enter shipping charged in USD" required>

            <label for="withdrawal-rate">Withdrawal Rate (MYR/USD):</label>
            <input type="number" id="withdrawal-rate" placeholder="Enter MYR/USD rate" value="4.15" required>

            <h3>Fees Percentage</h3>
            <label for="sales-tax">Sales Tax (%):</label>
            <input type="number" id="sales-tax" placeholder="Enter sales tax percentage" value="6">

            <label for="category-rate">Category Rate (%):</label>
            <select id="category-rate">
                <option value="12.35">Everything Else (12.35%)</option>
                <option value="12.35">Health and Beauty (12.35%)</option>
                <option value="12.35">Collectibles (12.35%)</option>
                <option value="12.18">Art & Craft (12.18%)</option>
                <option value="11.35">Motors (11.35%)</option>
            </select>

            <label for="international-rate">International Rate (%):</label>
            <input type="number" id="international-rate" placeholder="Enter international rate percentage" value="1.3">

            <label for="volume-discount">Volume Discount (%):</label>
            <input type="number" id="volume-discount" placeholder="Enter volume discount percentage" value="0.2">

            <label for="per-order-fee">Per Order Fee (USD):</label>
            <input type="number" id="per-order-fee" placeholder="Enter per order fee in USD" value="0.40">

            <label for="sst">SST (%):</label>
            <input type="number" id="sst" placeholder="Enter SST percentage" value="8">

            <label for="ad-fee">Ad Fee (%):</label>
            <input type="number" id="ad-fee" placeholder="Enter Ad Fee percentage" value="5">

            <!-- Buttons -->
            <div class="buttons">
                <button type="button" id="calculate-btn" class="calculate-btn">Calculate</button>
                <button type="button" id="reset-btn" class="reset-btn">Reset</button>
            </div>
        </form>

        <!-- Results Section -->
        <div id="results">
            <h3 class="results-label">Results</h3>
            <h4 class="section-label">Fees</h4>
            <p>Final Value Fees (USD): <span id="final-value-fees-usd">-</span></p>
            <p>International Fee (USD): <span id="international-fee-usd">-</span></p>
            <p>Volume Discount (USD): <span id="volume-discount-usd">-</span></p>
            <p>Per Order Fee (USD): <span id="per-order-fee-usd">-</span></p>
            <p>Total Fees (USD): <span id="total-fee-usd">-</span></p>
            <p>SST (USD): <span id="sst-usd">-</span></p>
            <p>Total Fees (Includes SST) (USD): <span id="total-fees-includes-sst-usd">-</span></p>

            <h4 class="section-label">Earnings and Profits</h4>
            <p>Total Price (USD): <span id="total-price-usd">-</span></p>
            <p>Order Total (USD): <span id="order-total-usd">-</span></p>
            <p>Sales Tax (USD): <span id="sales-tax-usd">-</span></p>
            <p>Ad Fee Standard (USD): <span id="ad-fee-standard-usd">-</span></p>
            <p>Earnings (USD): <span id="earnings-usd">-</span></p>
            <p>Earnings (MYR): <span id="earnings-myr">-</span></p>
            <p>Total Cost (MYR): <span id="total-cost-myr">-</span></p>
            <p>Profits (MYR): <span id="profits-myr">-</span></p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>