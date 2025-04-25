# 📈 Live Crypto Tracker

A real-time cryptocurrency tracker built with **React**, **Redux Toolkit**, and **Ant Design**, using data from the [CoinGecko API](https://www.coingecko.com/en/api). The app fetches and displays the latest cryptocurrency market data, including prices, percent changes, market cap, volume, supply, and 7-day sparkline charts.


## 🚀 Features

- 🔁 Live crypto price updates every few seconds
- 📊 Sparkline 7-day mini charts using `recharts`
- 📈 Percentage change (1h, 24h, 7d) with dynamic coloring
- 💵 Market cap, volume, and supply info
- 🧊 Styled table using Ant Design with responsive scrolling
- 📦 Powered by Redux Toolkit for state management


## 🛠️ Tech Stack

- **Frontend**: React, Ant Design, Recharts
- **State Management**: Redux Toolkit
- **Data Source**: [CoinGecko API](https://api.coingecko.com/api/v3)
- **Charting**: Recharts


## 🧩 Folder Structure

├── public/
├── src/
│   ├── components/
│   │   └── CryptoTable.js
│   │   └── SparklineChart.js
│   ├── redux/
│   │   └── cryptoSlice.js
│   │   └── store.js
│   ├── App.js
│   ├── index.js
├── README.md
└── package.json


## 📦 Installation

1. **Clone the repository:**

```bash
https://github.com/ahmad8929/crypto.git
cd crypto
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the development server:**

```bash
npm start
```


## 📄 License

This project is licensed under the MIT License.


## 👤 Author

Made with 💙 by [Mohd Ahmad]
