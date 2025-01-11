## Features

1. **Bitcoin Price Display**:

   - Utilizes Coingecko's `/simple/price` API to fetch Bitcoin's price in USD and INR.
   - Displays the 24-hour price change percentage in USD.

2. **TradingView Chart**:

   - Integrates TradingView's advanced chart widget for BTCUSD.
   - Widget is customized to closely match the Figma design.

3. **Trending Coins (24h)**:

   - Fetches the top 3 trending coins using Coingecko's `/search/trending` API.
   - Displays coin details such as name, logo, and symbol.

4. **You May Also Like**:

   - Horizontal carousel showcasing trending coins.
   - Includes logo, symbol, price, price change, and sparkline graph for each coin.
   - The carousel is horizontally scrollable and responsive.

5. **Responsive Design**:

   - Ensures the UI adapts seamlessly to various screen sizes, as specified in the Figma design.

6. **Placeholder Components**:
   - Text/image-based components use placeholders where API data isn’t applicable.

## Completed Optional Tasks

1. **Dynamic Token Display**:

   - Supports dynamic token display via the URL (e.g., `/bitcoin`, `/ethereum`).
   - Fetches data for the token using Coingecko's `/coins/{id}` API.
   - Renders a TradingView chart based on the token symbol.

2. **Enhanced User Experience**:
   - Dynamically updates the chart and token details based on the token selected in the URL.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MahendraBishnoi29/koinx-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd koinx-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Add ENV Variables to .env.local file

   ```
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   NEXT_PUBLIC_COINGECKO_URL=https://api.coingecko.com/api/v3
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

The application will be accessible at `http://localhost:3000`.

---

## Technologies Used

- **Frontend**: Next.JS, TailwindCSS
- **APIs**: Coingecko, TradingView
- **Deployment**: Vercel

---

## Screenshots

![image](https://github.com/user-attachments/assets/ce1a0ee5-f8b3-4a56-8338-ab0c0402be5a)

![image](https://github.com/user-attachments/assets/e8cf6784-98e0-4790-893c-e7131c5def69)
