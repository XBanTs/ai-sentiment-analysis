
# Sentiment Analysis Feedback App

A lightweight web application for analyzing user feedback sentiments as **Positive**, **Negative**, or **Neutral**, built using **ReactJS** (frontend) and **Flask** (backend) with Hugging Face’s AI models powered by **TensorFlow**.

---

## Features

- **User-Friendly Interface**: Submit feedback easily through a modern React-based UI.
- **AI-Powered Sentiment Analysis**: Leverages Hugging Face’s `distilbert-base-uncased-finetuned-sst-2-english` model.
- **Fast Development**: Built with Vite for efficient frontend development.
- **Scalable Backend**: Flask API with TensorFlow-based inference.

---

## System Requirements

### Frontend
- Node.js 14.x or higher

### Backend
- Python 3.7 or higher

---

## Installation and Setup

### Clone the Repository
```bash
git clone git@github.com:allanninal/sentiment-analysis-feedback-app.git
cd sentiment-analysis-feedback-app
```

---

### Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   venv\Scripts\activate     # Windows
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Start the Flask server:
   ```bash
   python app.py  # or use python3.11 app.py, python3.12 app.py, etc. depending on your Python version
   ```

---

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

---

## Usage

1. **Run Both Servers**: Ensure the Flask backend and React frontend servers are running.
2. **Access the App**: Open the frontend in your browser at:
   ```
   http://localhost:5173
   ```
3. **Submit Feedback**: Enter text feedback in the input box and analyze its sentiment.

---

## Example Feedback Messages

- **Positive**: "This app is amazing! I love it."
- **Negative**: "This app is terrible. It keeps crashing."
- **Neutral**: "This is an app."

---

## Technologies Used

- **Frontend**: ReactJS, Vite
- **Backend**: Flask
- **AI Model**: Hugging Face Transformers
- **Framework**: TensorFlow

---

## Project Structure

```plaintext
sentiment-analysis-feedback-app/
├── backend/             # Flask backend
│   ├── app.py           # Main Flask application
│   ├── requirements.txt # Python dependencies
├── frontend/            # ReactJS frontend
│   ├── src/             # Source code
├── README.md            # Project documentation
├── LICENSE              # MIT License file
└── .gitignore           # Ignored files/folders for Git
```

---

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with detailed changes.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Support

If you find this project helpful, consider supporting me:

**Buy Me a Coffee ☕**
[Support me on Ko-fi](https://ko-fi.com/allanninal)
